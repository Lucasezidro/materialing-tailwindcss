import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <Image
        src="https://github.com/Lucasezidro.png"
        className="w-10 h-10 rounded-full"
        alt=""
        width={40}
        height={40}
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-800">
          Lucas Ezidro
        </span>
        <span className="text-sm text-zinc-500 truncate">
          lucasezidro7@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded">
        <LogOut h-5 w-5 />
      </button>
    </div>
  )
}
