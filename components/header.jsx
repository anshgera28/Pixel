"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from './ui/button'
const Header = () => {
    const path = usePathname();
    return (
        <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap'>
            <div className='backdrop-blur-md bg-white/10 border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8'>
                <Link href="/" className='mr-10 md:mr-20'>
                    <Image src="/logo-text.png" alt="logo" className='min-w-24 object-cover' width={96} height={24} />
                </Link>
                {path === '/' && (<div className="hidden md:flex space-x-6">
                    <Link href="#features" className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>Features</Link>
                    <Link href="#pricing" className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>Pricing</Link>
                    <Link href="#contact" className='text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>Contact</Link>
                </div>)}

                <div className='flex items-center gap-3 ml-10 md:ml-20'>
                    {/* <SignedOut>
                        <SignInButton />
                        <Button variant= "glass" className= "hidden sm:flex">
                           sign In
                        </Button>
                        <SignUpButton>
                            <Button variant = "primary">
                                Get Started
                            </Button>
                        </SignUpButton>
                    </SignedOut> */}
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="glass" className="hidden sm:flex">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button variant="primary">
                                Get Started
                            </Button>
                        </SignUpButton>
                    </SignedOut>

                    <SignedIn>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-8 h-8"
                            }
                        }} />
                    </SignedIn>
                </div>
            </div>
        </header>
    )
}

export default Header