'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => setMounted(true), [])

  const selectOptions: Array<{ option: string; name: string }> = [
    { option: 'system', name: 'System' },
    { option: 'light', name: 'Hell' },
    { option: 'dark', name: 'Dunkel' },
  ]

  const selectOptionElements = selectOptions.map((value, index) => (
    <option value={value.option} key={index}>
      {value.name}
    </option>
  ))

  if (!mounted) {
    return (
      <select>
        <option>Lädt …</option>
        {selectOptionElements}
      </select>
    )
  }

  return (
    <select value={theme} onChange={(event) => setTheme(event.target.value)}>
      {selectOptionElements}
    </select>
  )
}
