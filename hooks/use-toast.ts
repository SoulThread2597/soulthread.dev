"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 3
const TOAST_REMOVE_DELAY = 5000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  showProgress?: boolean
  duration?: number
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Timer management with focus/blur handling
class TimerManager {
  private timers = new Map<string, {
    startTime: number
    duration: number
    pausedTime: number
    isPaused: boolean
    progressCallback: (progress: number) => void
    completeCallback: () => void
    interval?: ReturnType<typeof setInterval>
    timeout?: ReturnType<typeof setTimeout>
  }>()

  private isWindowFocused = true

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', this.handleFocus)
      window.addEventListener('blur', this.handleBlur)
      window.addEventListener('visibilitychange', this.handleVisibilityChange)
    }
  }

  private handleFocus = () => {
    this.isWindowFocused = true
    this.resumeAllTimers()
  }

  private handleBlur = () => {
    this.isWindowFocused = false
    this.pauseAllTimers()
  }

  private handleVisibilityChange = () => {
    if (document.hidden) {
      this.isWindowFocused = false
      this.pauseAllTimers()
    } else {
      this.isWindowFocused = true
      this.resumeAllTimers()
    }
  }

  startTimer(id: string, duration: number, progressCallback: (progress: number) => void, completeCallback: () => void) {
    if (this.timers.has(id)) {
      this.stopTimer(id)
    }

    const timer = {
      startTime: Date.now(),
      duration,
      pausedTime: 0,
      isPaused: false,
      progressCallback,
      completeCallback,
    }

    this.timers.set(id, timer)
    this.setupTimer(id)
  }

  private setupTimer(id: string) {
    const timer = this.timers.get(id)
    if (!timer) return

    // Progress updates
    timer.interval = setInterval(() => {
      if (timer.isPaused) return

      const elapsed = Date.now() - timer.startTime
      const remaining = Math.max(timer.duration - elapsed, 0)
      const progress = (remaining / timer.duration) * 100

      timer.progressCallback(Math.max(progress, 0))

      if (remaining <= 0) {
        this.stopTimer(id)
        timer.completeCallback()
      }
    }, 100)

    // Auto-removal timeout
    timer.timeout = setTimeout(() => {
      this.stopTimer(id)
      timer.completeCallback()
    }, timer.duration)
  }

  private pauseAllTimers() {
    this.timers.forEach((timer, id) => {
      if (!timer.isPaused) {
        timer.isPaused = true
        timer.pausedTime = Date.now() - timer.startTime
        if (timer.interval) {
          clearInterval(timer.interval)
          timer.interval = undefined
        }
        if (timer.timeout) {
          clearTimeout(timer.timeout)
          timer.timeout = undefined
        }
      }
    })
  }

  private resumeAllTimers() {
    this.timers.forEach((timer, id) => {
      if (timer.isPaused) {
        timer.isPaused = false
        timer.startTime = Date.now() - timer.pausedTime
        this.setupTimer(id)
      }
    })
  }

  stopTimer(id: string) {
    const timer = this.timers.get(id)
    if (timer) {
      if (timer.interval) clearInterval(timer.interval)
      if (timer.timeout) clearTimeout(timer.timeout)
      this.timers.delete(id)
    }
  }

  stopAllTimers() {
    this.timers.forEach((_, id) => this.stopTimer(id))
  }
}

const timerManager = new TimerManager()

const addToRemoveQueue = (toastId: string, duration: number = TOAST_REMOVE_DELAY) => {
  // This is now just for manual dismissal - timers are handled by TimerManager
  const timeout = setTimeout(() => {
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, duration)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Set up removal after animation completes
      if (toastId) {
        addToRemoveQueue(toastId, 150) // Wait for slide-out animation
      } else {
        // Dismiss all toasts
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id, 150)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false, // This triggers the slide-out animation
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        // Clear all timers
        timerManager.stopAllTimers()
        toastTimeouts.forEach(timeout => clearTimeout(timeout))
        toastTimeouts.clear()
        return {
          ...state,
          toasts: [],
        }
      }
      // Clear specific timer
      timerManager.stopTimer(action.toastId)
      if (toastTimeouts.has(action.toastId)) {
        clearTimeout(toastTimeouts.get(action.toastId)!)
        toastTimeouts.delete(action.toastId)
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ showProgress = true, duration = TOAST_REMOVE_DELAY, ...props }: Toast) {
  const id = genId()

  const update = (props: Partial<ToasterToast>) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      showProgress,
      duration,
      progress: showProgress ? 100 : undefined,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  // Use TimerManager for progress and auto-dismissal
  if (showProgress) {
    timerManager.startTimer(
      id,
      duration,
      // Progress callback
      (progress) => {
        dispatch({
          type: "UPDATE_TOAST",
          toast: { id, progress },
        })
      },
      // Complete callback - dismiss instead of remove to trigger animation
      () => {
        dispatch({
          type: "DISMISS_TOAST",
          toastId: id,
        })
      }
    )
  } else {
    // For non-progress toasts, use simple timeout with dismiss
    setTimeout(() => {
      dispatch({
        type: "DISMISS_TOAST",
        toastId: id,
      })
    }, duration)
  }

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
