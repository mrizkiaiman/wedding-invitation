import { cn } from '@/lib/utils'
import Image from 'next/image'
import { cardo } from '@/app/fonts'

export const Landing = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="bg-cover bg-center h-screen w-screen relative">
        <Image
          src="/assets/bg.jpg"
          alt="landing-bg"
          className={cn('absolute z-0 w-full h-full object-cover', 'lg:object-cover')}
          width={5000}
          height={5000}
          priority
        />
      </div>
      <p className={cn('w-full text-center text-md font-bold text-gray-700 tracking-tighter absolute-center-text', cardo.className)}>
        You're invited to witness our love story unfold!
      </p>
    </main>
  )
}
