"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useChat } from "ai/react"
import { Loader2, RefreshCw, Moon, Sun } from "lucide-react"
import { BackgroundIllustrations } from "@/components/background-illustrations"
import { Timeline } from "@/components/timeline"
import { VerseTagger } from "@/components/verse-tagger"
import { useTheme } from "next-themes"

const verses = [
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    mood: "love",
  },
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    mood: "strength",
  },
  {
    text: "Trust in the LORD with all your heart and lean not on your own understanding.",
    reference: "Proverbs 3:5",
    mood: "trust",
  },
  {
    text: "The LORD is my shepherd, I lack nothing.",
    reference: "Psalm 23:1",
    mood: "peace",
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    mood: "courage",
  },
  {
    text: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    mood: "peace",
  },
  {
    text: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
    reference: "Psalm 27:1",
    mood: "courage",
  },
  {
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    mood: "comfort",
  },
  {
    text: "God is our refuge and strength, an ever-present help in trouble.",
    reference: "Psalm 46:1",
    mood: "strength",
  },
  {
    text: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
    reference: "Philippians 4:19",
    mood: "provision",
  },
  {
    text: "A friend loves at all times, and a brother is born for a time of adversity.",
    reference: "Proverbs 17:17",
    mood: "friendship",
  },
  {
    text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    mood: "hope",
  },
  {
    text: "Do everything in love.",
    reference: "1 Corinthians 16:14",
    mood: "love",
  },
  {
    text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    reference: "1 Thessalonians 5:16-18",
    mood: "gratitude",
  },
  {
    text: "My grace is sufficient for you, for my power is made perfect in weakness.",
    reference: "2 Corinthians 12:9",
    mood: "grace",
  },
]

const moods = [
  { value: "all", label: "All Themes" },
  { value: "love", label: "Love" },
  { value: "strength", label: "Strength" },
  { value: "trust", label: "Trust" },
  { value: "peace", label: "Peace" },
  { value: "courage", label: "Courage" },
  { value: "comfort", label: "Comfort" },
  { value: "provision", label: "Provision" },
  { value: "friendship", label: "Friendship" },
  { value: "hope", label: "Hope" },
  { value: "gratitude", label: "Gratitude" },
  { value: "grace", label: "Grace" },
]

export default function BibleVerseGenerator() {
  const [currentVerse, setCurrentVerse] = useState(verses[0])
  const [userVerse, setUserVerse] = useState("")
  const [userReference, setUserReference] = useState("")
  const [userMood, setUserMood] = useState("")
  const [selectedMood, setSelectedMood] = useState("all")
  const [tags, setTags] = useState<string[]>([])
  const { messages, handleSubmit, isLoading, error } = useChat({ api: "/api/generate-verse" })
  const [isGenerating, setIsGenerating] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [verseExplanation, setVerseExplanation] = useState("")

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const generateVerse = () => {
    setIsGenerating(true)
    const filteredVerses = selectedMood === "all" ? verses : verses.filter((verse) => verse.mood === selectedMood)
    const newVerse = filteredVerses[Math.floor(Math.random() * filteredVerses.length)]
    setCurrentVerse(newVerse)
    setVerseExplanation("")
    setTimeout(() => setIsGenerating(false), 500)
  }

  const generateAIVerse = () => {
    setIsGenerating(true)
    handleSubmit({ messages: [] })
  }

  useEffect(() => {
    if (messages.length > 0) {
      setIsGenerating(false)
      setVerseExplanation("")
    }
  }, [messages])

  const handleSubmitVerse = (e: React.FormEvent) => {
    e.preventDefault()
    if (userVerse.trim() && userReference.trim() && userMood.trim()) {
      verses.push({ text: userVerse, reference: userReference, mood: userMood })
      setUserVerse("")
      setUserReference("")
      setUserMood("")
      setTags([])
      generateVerse()
    }
  }

  const handleAddTag = (tag: string) => {
    setTags([...tags, tag])
  }

  const handleSearch = () => {
    const foundVerse = verses.find(
      (verse) =>
        verse.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        verse.reference.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    if (foundVerse) {
      setCurrentVerse(foundVerse)
      setVerseExplanation("")
    }
  }

  const exploreVerse = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/explore-verse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verse: currentVerse.text, reference: currentVerse.reference }),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (data.explanation) {
        setVerseExplanation(data.explanation)
      } else {
        throw new Error("No explanation received from the server")
      }
    } catch (error) {
      console.error("Error exploring verse:", error)
      setVerseExplanation("Sorry, we couldn't generate an explanation at this time. Please try again later.")
    } finally {
      setIsGenerating(false)
    }
  }

  // Avoid rendering with undefined theme
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-start p-4 relative overflow-hidden transition-colors duration-300">
      <BackgroundIllustrations />

      {/* Theme toggle button - fixed position for better mobile access */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Hand-drawn style header */}
      <div className="w-full max-w-5xl mx-auto mb-4 sm:mb-8 z-10 px-2">
        <div className="relative">
          <svg className="w-full" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20H550" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M50 80H550" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <text
              x="300"
              y="60"
              textAnchor="middle"
              className="font-bold text-4xl"
              style={{ fontFamily: "serif" }}
              fill="currentColor"
            >
              SCRIPTURE EXPLORER
            </text>
          </svg>
        </div>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto mb-6 z-10">
        <Timeline />
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-2 md:px-4 z-10">
        {/* Left column - Verse Display and Exploration */}
        <div className="space-y-6 md:space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVerse.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              {/* Comic panel style frame */}
              <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-gray-800 relative">
                <div className="absolute top-0 left-0 w-4 h-4 border-r-4 border-b-4 border-black dark:border-white transform -translate-x-4 -translate-y-4" />
                <div className="absolute top-0 right-0 w-4 h-4 border-l-4 border-b-4 border-black dark:border-white transform translate-x-4 -translate-y-4" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-r-4 border-t-4 border-black dark:border-white transform -translate-x-4 translate-y-4" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-l-4 border-t-4 border-black dark:border-white transform translate-x-4 translate-y-4" />

                <p className="text-base md:text-xl mb-4 font-serif leading-relaxed">
                  {messages.length > 0 ? messages[messages.length - 1].content : currentVerse.text}
                </p>
                <p className="text-right font-bold">
                  - {messages.length > 0 ? "AI Generated" : currentVerse.reference}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Select onValueChange={setSelectedMood}>
                <SelectTrigger className="flex-1 border-2 border-black dark:border-white">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  {moods.map((mood) => (
                    <SelectItem key={mood.value} value={mood.value}>
                      {mood.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={generateVerse}
                className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="mr-2 h-4 w-4" />
                )}
                New Verse
              </Button>
            </div>

            {error && <p className="text-red-500 text-sm">Error: {error.message}</p>}
          </div>

          {verseExplanation && (
            <div className="mt-4 p-4 border-2 border-black dark:border-white bg-white dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Verse Exploration:</h3>
              <p>{verseExplanation}</p>
            </div>
          )}

          <VerseTagger onAddTag={handleAddTag} tags={tags} />
        </div>

        {/* Right column - Add Verse Form and Search */}
        <div className="space-y-6">
          <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-r-4 border-b-4 border-black dark:border-white transform -translate-x-4 -translate-y-4" />
            <div className="absolute top-0 right-0 w-4 h-4 border-l-4 border-b-4 border-black dark:border-white transform translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-r-4 border-t-4 border-black dark:border-white transform -translate-x-4 translate-y-4" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-l-4 border-t-4 border-black dark:border-white transform translate-x-4 translate-y-4" />

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 font-serif">Add Your Own Verse</h2>
            <form onSubmit={handleSubmitVerse} className="space-y-4">
              <div className="space-y-2">
                <label className="font-bold">Verse</label>
                <Input
                  value={userVerse}
                  onChange={(e) => setUserVerse(e.target.value)}
                  placeholder="Enter a Bible verse..."
                  className="border-2 border-black dark:border-white bg-white dark:bg-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold">Reference</label>
                <Input
                  value={userReference}
                  onChange={(e) => setUserReference(e.target.value)}
                  placeholder="Enter the reference..."
                  className="border-2 border-black dark:border-white bg-white dark:bg-gray-700"
                />
              </div>
              <div className="space-y-2">
                <label className="font-bold">Theme</label>
                <Select onValueChange={setUserMood}>
                  <SelectTrigger className="w-full border-2 border-black dark:border-white bg-white dark:bg-gray-700">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    {moods.slice(1).map((mood) => (
                      <SelectItem key={mood.value} value={mood.value}>
                        {mood.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Add Verse
              </Button>
            </form>
          </div>

          <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-gray-800 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-r-4 border-b-4 border-black dark:border-white transform -translate-x-4 -translate-y-4" />
            <div className="absolute top-0 right-0 w-4 h-4 border-l-4 border-b-4 border-black dark:border-white transform translate-x-4 -translate-y-4" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-r-4 border-t-4 border-black dark:border-white transform -translate-x-4 translate-y-4" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-l-4 border-t-4 border-black dark:border-white transform translate-x-4 translate-y-4" />

            <h2 className="text-xl md:text-2xl font-bold mb-4 font-serif">Explore Verse</h2>
            <Button
              onClick={exploreVerse}
              className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              disabled={isGenerating}
            >
              {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Get Verse Explanation"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

