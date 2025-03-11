import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST() {
  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages: [
      { role: "system", content: "You are an inspirational quote generator. Generate a short, inspiring quote." },
      { role: "user", content: "Generate an inspirational quote." },
    ],
  })
  return result.toDataStreamResponse()
}

