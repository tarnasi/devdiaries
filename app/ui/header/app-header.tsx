import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";
import Image from "next/image";

export default function AppHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex items-center px-6 py-3 bg-background border-b shadow-sm dark:border-b-gray-800">
      {/* Left Section: Sidebar Trigger & Logo */}
      <div className="flex items-center gap-4">
        {children}
        <Avatar className="h-16 w-16">
          <AvatarImage src="/path-to-your-logo.png" alt="Logo" />
          <AvatarFallback className="bg-gray-200 dark:bg-gray-700">
            <Image
              src="/logo.png" // Path relative to the public folder
              alt="Logo"
              width={100} // Width of the image
              height={100} // Height of the image
            />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Spacer to push everything to the right */}
      <div className="flex-1" />

      {/* Right Section: Navigation Links, Icons & Profile */}
      <div className="flex items-center gap-6">
        {/* Navigation Links */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://www.linkedin.com/in/tarnasi/"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Icons & Profile */}
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <Settings className="w-5 h-5 stroke-current" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-gray-900">
              <DropdownMenuItem className="focus:bg-gray-100 dark:focus:bg-gray-800">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-100 dark:focus:bg-gray-800">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-gray-100 dark:focus:bg-gray-800">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Avatar */}
          <Avatar className="border-2 border-gray-200 dark:border-gray-700">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback className="bg-gray-200 dark:bg-gray-700">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
