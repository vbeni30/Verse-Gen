import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST() {
  const result = streamText({
    model: openai("gpt-3.5-turbo"),
    messages: [
      {
        role: "system",
        content:
          'You are a Bible-inspired content generator. Create uplifting and inspirational messages in the style of Bible verses, but do not pretend to be actual Bible verses. Always start with "Inspired by the Bible:" and then provide the message.',
      },
      { role: "user", content: "Generate an inspirational Bible-inspired message." },
    ],
  })
  return result.toDataStreamResponse()
}

