import AppHeader from "./ui/header/app-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Full Width, but considers Sidebar) */}
      <AppHeader></AppHeader>

      <div className="flex flex-1">
        {/* Sidebar (Left) */}
        {/* <AppSidebar /> */}

        {/* Main Content Section */}
        <div className="main-content flex">
          {/* Card 1 */}
          <Card>
            <CardHeader>
              <Image
                src="https://picsum.photos/1000"
                alt="Card Image"
                className="w-full h-48 object-cover"
                width={200}
                height={200}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold">
                Card Title
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                This is a brief description or summary of the card content. It
                gives a short overview.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <a href="your-link" className="text-blue-600 hover:text-blue-800">
                Read More
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="https://picsum.photos/700"
                alt="Card Image"
                className="w-full h-48 object-cover"
                width={200}
                height={200}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold">
                Card Title
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                This is a brief description or summary of the card content. It
                gives a short overview.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <a href="your-link" className="text-blue-600 hover:text-blue-800">
                Read More
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
            <Image
                src="https://picsum.photos/800"
                alt="Card Image"
                className="w-full h-48 object-cover"
                width={200}
                height={200}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-semibold">
                Card Title
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                This is a brief description or summary of the card content. It
                gives a short overview.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <a href="your-link" className="text-blue-600 hover:text-blue-800">
                Read More
              </a>
            </CardFooter>
          </Card>

          {/* Additional cards can go here */}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full p-2 text-center">
        <span className="text-xs">@Shahriyar Tarnasi - 2025</span>
      </footer>
    </div>
  );
}
