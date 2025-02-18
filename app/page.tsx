import Image from "next/image";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { AppSidebar } from "@/app/ui/sidebar/app-sidebar";
import AppHeader from "./ui/header/app-header";

export default function Home() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Header (Full Width, but considers Sidebar) */}
        <AppHeader className="w-full">
          {/* <SidebarTrigger /> */}
        </AppHeader>

        <div className="flex flex-1">
          {/* Sidebar (Left) */}
          {/* <AppSidebar /> */}

          {/* Main Content Section */}
          <main className="flex-1 flex flex-col p-8">
            {/* Some Cards or Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Cards */}
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                Card 1
              </div>
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                Card 2
              </div>
              <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
                Card 3
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="w-full p-4 bg-gray-50 dark:bg-gray-900 text-center">
          Footer Content
        </footer>
      </div>
  );
}
