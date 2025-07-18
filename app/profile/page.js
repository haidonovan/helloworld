"use client"

import { useSession } from "next-auth/react"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
  const { data: session } = useSession()

  if (!session)
    return (
      <p className="text-center mt-10 text-gray-500">Not signed in</p>
    )

  return (
    <Card className="max-w-4xl mx-auto mt-20 flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg">
      {/* Left Side: Profile Picture */}
      <div className="flex-shrink-0 bg-transparent flex items-center justify-center p-8 md:w-1/3">
        <img
          src={session.user.image}
          alt={`${session.user.name} profile picture`}
          className="rounded-full border-4 border-gray-300 w-32 h-32 sm:w-40 sm:h-40 object-cover shadow-md"
        />
      </div>

      {/* Right Side: Info */}
      <div className="flex-1 bg-black text-white flex flex-col justify-center p-8 md:p-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 truncate">
          {session.user.name}
        </h1>
        <Separator className="mb-6 border-gray-600" />
        <p className="text-base sm:text-lg tracking-wide opacity-80 break-words">
          {session.user.email}
        </p>
      </div>
    </Card>
  )
}
