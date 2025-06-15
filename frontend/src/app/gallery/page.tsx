import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { sagMetaData } from "@/metaData";
import { IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

export default function Component() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="px-4 py-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-pink-300 to-purple-500 bg-clip-text text-transparent">
              Sheffield Anime Gallery
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore vibrant cosplay moments and candid snapshots from our
              local events and anime meetups in Sheffield.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sagMetaData.galleryItems.map((item, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  <span className="text-gray-300 font-medium">
                    by {item.artist}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-gray-800 text-gray-300 hover:bg-gray-700"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-2">
                    {item.socials.instagram && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                        asChild
                      >
                        <Link
                          href={item.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandInstagram className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {item.socials.twitter && item.socials.twitter && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                        asChild
                      >
                        <Link
                          href={item.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandTwitter className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                    {item.socials.website && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                        asChild
                      >
                        <Link
                          href={item.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
