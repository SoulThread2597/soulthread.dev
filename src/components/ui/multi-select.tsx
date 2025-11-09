"use client"

import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { Badge } from "./badge"
import { cn } from "@/lib/utils"

interface MultiSelectContextType {
  value: string[]
  onValueChange: (values: string[]) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  disabled?: boolean
}

const MultiSelectContext = React.createContext<MultiSelectContextType | undefined>(undefined)

const useMultiSelect = () => {
  const context = React.useContext(MultiSelectContext)
  if (!context) {
    throw new Error("MultiSelect components must be used within a MultiSelect")
  }
  return context
}

// Root MultiSelect Component
export interface MultiSelectProps {
  value: string[]
  onValueChange: (values: string[]) => void
  disabled?: boolean
  children: React.ReactNode
}

const MultiSelect = React.forwardRef<
  HTMLDivElement,
  MultiSelectProps
>(({ value, onValueChange, disabled = false, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <MultiSelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen, disabled }}>
      <div ref={ref} className="relative" {...props}>
        {children}
      </div>
    </MultiSelectContext.Provider>
  )
})
MultiSelect.displayName = "MultiSelect"

// MultiSelect Value Display
const MultiSelectValue = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    placeholder?: string
  }
>(({ className, placeholder = "Select options...", ...props }, ref) => {
  const { value } = useMultiSelect()

  const displayValue = () => {
    if (value.length === 0) {
      return <span className="text-muted-foreground">{placeholder}</span>
    }
    
    if (value.length === 1) {
      return value[0]
    }
    
    return `${value.length} selected`
  }

  return (
    <span
      ref={ref}
      className={cn("line-clamp-1", className)}
      {...props}
    >
      {displayValue()}
    </span>
  )
})
MultiSelectValue.displayName = "MultiSelectValue"

// MultiSelect Trigger
const MultiSelectTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen, setIsOpen, disabled } = useMultiSelect()

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => !disabled && setIsOpen(!isOpen)}
      disabled={disabled}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        isOpen && "ring-2 ring-ring ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", isOpen && "rotate-180")} />
    </button>
  )
})
MultiSelectTrigger.displayName = "MultiSelectTrigger"

// MultiSelect Content
const MultiSelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen, setIsOpen } = useMultiSelect()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setIsOpen(false)}
      />
      
      {/* Content */}
      <div
        ref={ref}
        className={cn(
          "absolute top-full left-0 z-50 w-full mt-1 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2",
          className
        )}
        data-state="open"
        {...props}
      >
        <div className="p-1">
          {children}
        </div>
      </div>
    </>
  )
})
MultiSelectContent.displayName = "MultiSelectContent"

// MultiSelect Item
const MultiSelectItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value: string
    children: React.ReactNode
  }
>(({ className, value: itemValue, children, ...props }, ref) => {
  const { value, onValueChange } = useMultiSelect()
  const isSelected = value.includes(itemValue)

  const handleSelect = () => {
    if (isSelected) {
      onValueChange(value.filter(v => v !== itemValue))
    } else {
      onValueChange([...value, itemValue])
    }
  }

  return (
    <div
      ref={ref}
      onClick={handleSelect}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      <span>{children}</span>
    </div>
  )
})
MultiSelectItem.displayName = "MultiSelectItem"

// MultiSelect Badge List (for showing selected items)
const MultiSelectBadgeList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    showWhenSingle?: boolean
  }
>(({ className, showWhenSingle = false, ...props }, ref) => {
  const { value, onValueChange } = useMultiSelect()

  const handleRemove = (itemValue: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onValueChange(value.filter(v => v !== itemValue))
  }

  if (value.length === 0 || (!showWhenSingle && value.length === 1)) {
    return null
  }

  return (
    <div
      ref={ref}
      className={cn("mt-2 flex flex-wrap gap-1", className)}
      {...props}
    >
      {value.map((item) => (
        <Badge
          key={item}
          variant="secondary"
          className="text-xs"
        >
          {item}
          <button
            type="button"
            onClick={(e) => handleRemove(item, e)}
            className="ml-1 hover:bg-muted-foreground/20 rounded-full"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
    </div>
  )
})
MultiSelectBadgeList.displayName = "MultiSelectBadgeList"

export {
  MultiSelect,
  MultiSelectValue,
  MultiSelectTrigger,
  MultiSelectContent,
  MultiSelectItem,
  MultiSelectBadgeList,
}