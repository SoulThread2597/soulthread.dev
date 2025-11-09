'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
  presets?: string[];
  className?: string;
  allowCustom?: boolean;
}

const DEFAULT_PRESETS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#F59E0B', // Orange
  '#EC4899', // Pink
  '#6B7280', // Gray
  '#14B8A6', // Teal
  '#F97316', // Orange
  '#84CC16', // Lime
  '#06B6D4', // Cyan
  '#8B5A2B', // Brown
  '#E11D48', // Rose
  '#7C3AED', // Violet
];

export function ColorPicker({ 
  color, 
  onChange, 
  presets = DEFAULT_PRESETS, 
  className = "",
  allowCustom = true
}: ColorPickerProps) {
  const [inputValue, setInputValue] = useState(color);
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = useCallback((newColor: string) => {
    setInputValue(newColor);
    onChange(newColor);
  }, [onChange]);

  const handleInputChange = (value: string) => {
    setInputValue(value);
    // Validate hex color format
    if (/^#[0-9A-F]{6}$/i.test(value)) {
      onChange(value);
    }
  };

  const handleInputBlur = () => {
    // If input is not valid hex, reset to current color
    if (!/^#[0-9A-F]{6}$/i.test(inputValue)) {
      setInputValue(color);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-full justify-start text-left font-normal ${className}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full border border-gray-300" 
              style={{ backgroundColor: color }}
            />
            <span>{color}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          {/* Color Preview */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-lg border-2 border-gray-200 shadow-sm" 
              style={{ backgroundColor: color }}
            />
            <div className="flex-1">
              <Input
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value.toUpperCase())}
                onBlur={handleInputBlur}
                placeholder="#000000"
                className="font-mono text-sm"
                maxLength={7}
                disabled={!allowCustom}
                readOnly={!allowCustom}
              />
            </div>
          </div>

          {/* Preset Colors */}
          <div>
            <h4 className="text-sm font-medium mb-2">Preset Colors</h4>
            <div className="grid grid-cols-7 gap-y-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  className={`w-8 h-8 rounded-md border-2 transition-all hover:scale-110 ${
                    color === preset 
                      ? 'border-gray-400 shadow-md ring-2 ring-blue-200' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ backgroundColor: preset }}
                  onClick={() => handleColorChange(preset)}
                  title={preset}
                />
              ))}
            </div>
          </div>

          {/* HTML5 Color Input as fallback */}
          {allowCustom && (
            <div>
              <h4 className="text-sm font-medium mb-2">Custom Color</h4>
              <div className="flex items-center space-x-2">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => handleColorChange(e.target.value.toUpperCase())}
                  className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                />
                <span className="text-xs text-gray-500">Click to pick</span>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="flex space-x-2 pt-2 border-t">
            {allowCustom && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
                  handleColorChange(randomColor);
                }}
                className="flex-1"
              >
                Random
              </Button>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Done
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
