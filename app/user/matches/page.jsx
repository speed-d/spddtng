"use client"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useMemo, useState } from "react"
// custom icons
import {HeartIcon, LocateIcon, FilterIcon, ListOrderedIcon, MessageCircleIcon} from '@/lib/customIcons'
export default function Component() {
    const [filters, setFilters] = useState({
        age: [18, 50],
        distance: [0, 50],
        interests: [],
    })  
    const [sortBy, setSortBy] = useState("newest")
    
    const matches = [
    {
      id: 1,
      name: "Emily Wilkins",
      age: 28,
      location: "New York, NY",
      bio: "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
      interests: ["Travel", "Cooking", "Hiking"],
      match: 90,
      image: "/images/users/user2.webp",
    },
    {
      id: 2,
      name: "Michael Johnson",
      age: 32,
      location: "Los Angeles, CA",
      bio: "I'm a passionate entrepreneur looking to meet someone who shares my drive and ambition.",
      interests: ["Startups", "Technology", "Fitness"],
      match: 85,
      image: "/images/users/user4.webp",
    },
    {
      id: 3,
      name: "Sarah Lee",
      age: 25,
      location: "Chicago, IL",
      bio: "I love the arts and culture. Let's explore the city together and see where it takes us.",
      interests: ["Art", "Music", "Museums"],
      match: 92,
      image: "/images/users/user1.webp",
    },
    {
      id: 1,
      name: "Emily Wilkins",
      age: 28,
      location: "New York, NY",
      bio: "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
      interests: ["Travel", "Cooking", "Hiking"],
      match: 90,
      image: "/images/users/user3.webp",
    },
    {
      id: 2,
      name: "Michael Johnson",
      age: 32,
      location: "Los Angeles, CA",
      bio: "I'm a passionate entrepreneur looking to meet someone who shares my drive and ambition.",
      interests: ["Startups", "Technology", "Fitness"],
      match: 85,
      image: "/images/users/user5.webp",
    },
    {
      id: 3,
      name: "Sarah Lee",
      age: 25,
      location: "Chicago, IL",
      bio: "I love the arts and culture. Let's explore the city together and see where it takes us.",
      interests: ["Art", "Music", "Museums"],
      match: 92,
      image: "/images/users/user6.webp",
    }
  ];

  const filteredMatches = useMemo(() => {
    return matches
      .filter((match) => {
        return (
          match.age >= filters.age[0] &&
          match.age <= filters.age[1] &&
          match.location.split(", ")[1] === filters.distance[1]
        )
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "newest":
            return new Date(b.createdAt) - new Date(a.createdAt)
          case "highest":
            return b.matchPercentage - a.matchPercentage
          case "lowest":
            return a.matchPercentage - b.matchPercentage
          default:
            return 0
        }
      })
  }, [filters, sortBy])

  return (
    <>
     <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Matches</h1>
          <p className="text-gray-500 dark:text-gray-400">Find your perfect match</p>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        
        <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
          <Input type="text" placeholder="Search matches..." className="w-full md:w-96" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4 space-y-4">
              <div>
                <h3 className="text-sm font-semibold mb-2">Age</h3>
                <div />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Distance</h3>
                <div />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Interests</h3>
                <div className="grid gap-2">
                  <Checkbox value="Hiking">Hiking</Checkbox>
                  <Checkbox value="Travel">Travel</Checkbox>
                  <Checkbox value="Cooking">Cooking</Checkbox>
                  <Checkbox value="Technology">Technology</Checkbox>
                  <Checkbox value="Outdoors">Outdoors</Checkbox>
                  <Checkbox value="Networking">Networking</Checkbox>
                  <Checkbox value="Art">Art</Checkbox>
                  <Checkbox value="Music">Music</Checkbox>
                  <Checkbox value="Food">Food</Checkbox>
                  <Checkbox value="Fitness">Fitness</Checkbox>
                  <Checkbox value="Sports">Sports</Checkbox>
                  <Checkbox value="Social">Social</Checkbox>
                  <Checkbox value="Sustainability">Sustainability</Checkbox>
                  <Checkbox value="Books">Books</Checkbox>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ListOrderedIcon className="w-4 h-4" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] p-2">
              <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy} className="space-y-2">
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="highest">Match Percentage (Highest)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lowest">Match Percentage (Lowest)</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
          <div className="grid w-full gap-4 gap-y-12 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(300px,400px))]">
            {matches.map((match) => (
              <div
                key={match.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
              >
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View Profile</span>
                </Link>
                <div className="relative">
                  <img
                    src={match.image}
                    alt={match.name}
                    width={500}
                    height={500}
                    className="object-cover w-full h-64"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent" /> */}
                </div>
                <div className="bg-white p-4 dark:bg-gray-950">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl">{match.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <LocateIcon className="w-4 h-4" />
                        {match.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <HeartIcon className="w-5 h-5 fill-primary" />
                      {match.match}%
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{match.bio}</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {match.interests.slice(0,2).map((interest, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium dark:bg-gray-800"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button size="sm">Contact Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}