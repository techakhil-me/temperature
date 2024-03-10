"use client"
import { Handshake, Home, LayoutDashboard, LibraryBig, User, Users, Sun, Moon, LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {Divider} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import SimpleBar from 'simplebar-react';
import {Badge} from "@nextui-org/react";
import 'simplebar-react/dist/simplebar.min.css';
import {Tooltip} from "@nextui-org/react";



function Sidebar() {
  return (
    <nav className="h-full flex flex-col bg-white rounded p-4 gap-4">
        <Link href="/" className="navIcon w-10 h-10 flex items-center justify-center">
        <LibraryBig size="40" stroke='white' fill="#F67048" strokeWidth={1} />
        </Link>

        <Divider className="" />
        <Link href="/" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <Home strokeWidth={1} />
        </Link>

        <Link href="/self" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <User strokeWidth={1} />
        </Link>
       
       
        <Link href="/suggestFriends" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <Handshake strokeWidth={1} />
        </Link>

        <Link href="/dashboard" className="navIcon w-10 h-10 flex items-center justify-center hover:shadow-md rounded transition-all ease-in-out duration-200 cursor-pointer">
        <LayoutDashboard strokeWidth={1} />
        </Link>

        <Divider className="" />

        <SimpleBar className="h-1/3">
        <div className="flex flex-col gap-4">
        <Link href="/" className="navIcon w-10 h-10 flex shrink-0 items-center justify-center hover:shadow-lg rounded transition-all ease-in-out duration-200 cursor-pointer">
        <Users strokeWidth={1} />
        </Link>
        <Tooltip content="Focus">
        <Link href="/channel/focus" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Badge content="3" size="sm" color="primary">
        <Avatar className='w-8 h-8'
          radius="md"
          src="https://cdn.discordapp.com/icons/933637319775383562/7c2b5297f8883d58f2a88d35fdc9ed4c.webp"
        />
      </Badge>
        </Link>
        </Tooltip>
        <Tooltip content="Friends">
        <Link href="/channel/friends" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Badge content="2" size="sm" color="primary">
        <Avatar className='w-8 h-8'
          radius="md"
          src="https://cdn.discordapp.com/icons/922794251752968214/8d1046fb10fd856f04292d68eb4900e5.webp"
        />
      </Badge>
        </Link>
        </Tooltip>
        <Tooltip content="Work">
        <Link href="/channel/work" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Badge content="4" size="sm" color="primary">
        <Avatar className='w-8 h-8'
          radius="md"
          src="https://cdn.discordapp.com/icons/715958380556058684/773d6583cd1d7aef41e701783d353aef.webp"
        />
      </Badge>
        </Link>
        </Tooltip>

        <Tooltip content="Physics">
        <Link href="/channel/physics" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Badge content="2" size="sm" color="primary">
        <Avatar className='w-8 h-8'
          radius="md"
          src="https://cdn.discordapp.com/icons/740589508365385839/a_020a673728540055398b3d1aa8f1df2d.webp"
        />
      </Badge>
        </Link>
        </Tooltip>

        <Link href="/" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Badge content="4" size="sm" color="primary">
        <Avatar className='w-8 h-8'
          radius="md"
          src="https://cdn.discordapp.com/icons/740589508365385839/a_020a673728540055398b3d1aa8f1df2d.webp"
        />
      </Badge>
        </Link>

        <Link href="/" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Avatar className="w-8 h-8" src="https://cdn.discordapp.com/icons/740589508365385839/a_020a673728540055398b3d1aa8f1df2d.webp" />
        </Link>

        <Link href="/" className="navIcon flex w-8 h-8 shrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Avatar className="w-8 h-8" src="https://cdn.discordapp.com/icons/740589508365385839/a_020a673728540055398b3d1aa8f1df2d.webp" />
        </Link>

        <Link href="/" className="navIcon flex sw-8 h-8 hrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Avatar className="w-8 h-8" src="https://cdn.discordapp.com/icons/740589508365385839/a_020a673728540055398b3d1aa8f1df2d.webp" />
        </Link>
        </div>
        </SimpleBar>

        <Link href="/" className="navIcon flex sw-8 h-8 hrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        </Link>

        <Link href="/" className="navIcon flex sw-8 h-8 hrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        
        </Link>

        <Link href="/" className="navIcon flex sw-8 h-8 hrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <Sun Avatar className="w-6 h-6" src="" />
        </Link>

        <Link href="/" className="navIcon flex sw-8 h-8 hrink-0 items-center justify-center rounded-full hover:shadow-lg  transition-all ease-in-out duration-200 cursor-pointer">
        <LogOut Avatar className="w-6 h-6" src="" />
        </Link>

    </nav>
  )
}

export default Sidebar