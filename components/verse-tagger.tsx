"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface VerseTaggerProps {
  onAddTag: (tag: string) => void
  tags: string[]
}

export function VerseTagger({ onAddTag, tags }: VerseTaggerProps) {
  const [newTag, setNewTag] = useState("")

  const handleAddTag = () => {
    if (newTag.trim() !== "" && !tags.includes(newTag.trim())) {
      onAddTag(newTag.trim())
      setNewTag("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddTag()
    }
  }

  return (
    <div className="space-y-3 md:space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag..."
          className="flex-1 border-2 border-black dark:border-white bg-white dark:bg-gray-700"
        />
        <Button
          onClick={handleAddTag}
          className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Add Tag
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-xs md:text-sm bg-gray-200 dark:bg-gray-700 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

