'use client'

import React, { useState, useEffect } from 'react'
import { type LucideIcon } from 'lucide-react'
import { SquareDashedIcon } from "lucide-react"

export function DynamicIcon({ iconName, className, fallback = SquareDashedIcon }: { 
  iconName: string | null
  className?: string
  fallback?: React.ComponentType<{ className?: string }>
}) {
  const [IconComponent, setIconComponent] = useState<LucideIcon | null>(null)
  const [loading, setLoading] = useState(true)

  async function getLucideIcon(iconName: string | null): Promise<LucideIcon | undefined> {
    try {
      const iconModule = await import('lucide-react');
      return iconModule[iconName as keyof typeof iconModule] as LucideIcon | undefined;
    } catch (error) {
      console.warn(`Failed to load icon: ${iconName}`, error);
      return undefined;
    }
  }

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const icon = await getLucideIcon(iconName)
        setIconComponent(() => icon || null)
      } catch (error) {
        console.warn(`Failed to load icon: ${iconName}`, error)
        setIconComponent(null)
      } finally {
        setLoading(false)
      }
    }

    loadIcon()
  }, [iconName])

  if (loading) {
    return <div className={`${className} animate-pulse bg-muted rounded`} />
  }

  if (!IconComponent && fallback) {
    const FallbackIcon = fallback
    return <FallbackIcon className={className} />
  }

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={className} />
}