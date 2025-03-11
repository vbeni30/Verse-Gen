"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const timelineEvents = [
  { year: "4000 BC", event: "Creation" },
  { year: "2348 BC", event: "Noah's Flood" },
  { year: "1921 BC", event: "Abraham's Call" },
  { year: "1446 BC", event: "Exodus" },
  { year: "1010 BC", event: "David becomes King" },
  { year: "4 BC", event: "Birth of Jesus" },
  { year: "30 AD", event: "Crucifixion and Resurrection" },
]

export function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between min-w-max p-2 md:p-4">
        {timelineEvents.map((event, index) => (
          <div key={index} className="flex flex-col items-center mx-2 md:mx-4">
            <motion.button
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-black dark:bg-white"
              whileHover={{ scale: 1.2 }}
              onClick={() => setSelectedEvent(event.event)}
              aria-label={`Select ${event.event}`}
            />
            <div className="mt-1 md:mt-2 text-xs">{event.year}</div>
            {selectedEvent === event.event && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 md:mt-2 text-xs md:text-sm font-bold"
              >
                {event.event}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

