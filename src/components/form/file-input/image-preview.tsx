'use client'

import { User } from 'lucide-react'
import { useFileInput } from './root'
import { useMemo } from 'react'
import Image from 'next/image'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="bg-violet-50 dark:bg-violet-500/10 flex h-16 w-16 items-center justify-center rounded-full">
        <User className="w-8 h-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  } else {
    return (
      <Image
        src={previewURL}
        alt=""
        className="h-16 w-16 rounded-full object-cover"
        width={64}
        height={64}
      />
    )
  }
}
