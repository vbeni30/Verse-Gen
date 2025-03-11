import { NextResponse } from "next/server"
import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { verse, reference } = await req.json()

    const { text } = await generateText({
      model: openai("gpt-3.5-turbo"),
      prompt: `Provide a brief explanation of the following Bible verse: "${verse}" (${reference})`,
      system: "You are a knowledgeable Bible scholar. Provide concise, insightful explanations of Bible verses.",
    })

    return NextResponse.json({ explanation: text })
  } catch (error) {
    console.error("Error in explore-verse API:", error)
    return NextResponse.json({ error: "Failed to generate verse explanation" }, { status: 500 })
  }
}

