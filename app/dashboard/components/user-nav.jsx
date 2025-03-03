"use client";

import { redirect } from "next/navigation";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useSession, signOut } from "@/lib/auth-client";

export default function UserNav() {

  const{data: session}= useSession();

  console.log (session);
  
  const handleLogout = async () =>{
    await signOut({
      fetchOptions: {
        onSuccess: ()=>{
          redirect("/login")
        },
      },
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10 border-2 border-blue-500">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 " align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-sm font-medium leading-none text-primary-400">
            {session?.user.name}
            </p>
            <p className="font-xs leading-none text-muted-forground ">
            {session?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuGroup>
        <DropdownMenuItem><User className="mr-2 h-4 w-4 text-primary-400"/><span>Profile</span></DropdownMenuItem>
        <DropdownMenuItem><Settings className="mr-2 h-4 w-4 text-primary-400"/><span>Settings</span></DropdownMenuItem>
        
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}><LogOut className="mr-2 h-4 w-4 text-primary-400"/><span>Log Out</span></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
