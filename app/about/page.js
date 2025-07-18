

"use client"

import React, { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
    // change the useState to react normally
    const [date, setDate] = useState(new Date())

    const items = [];
    let count = 100;
    for (let i = 0; i <= count; i++) {
        items.push(i);
    }

    return (
        <>
            {items.map((item) => (
                <Calendar
                    key={item} // ✅ unique key added here
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                        if (selectedDate instanceof Date || selectedDate === undefined) {
                            setDate(selectedDate)
                        }
                    }}
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                />
            ))}


        </>
    )
}
