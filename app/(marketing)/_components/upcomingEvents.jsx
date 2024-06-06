import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

export default function UpcomingEvents() {
    return (
        <div className="container px-4 md:px-6">
          <div className="space-y-6 text-left">
            <div className="flex items-center">
                <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                <div class="w-[150px] h-[3px] bg-[#ffabab] ml-[20px]"></div>
            </div>
            <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our events provide a refined way to date, making it a comfortable and delightful experience to find a special connection.
            </p>
          </div>
        {/* Filters */}
        <div className="flex flex-col pt-10 gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-3 gap-4">
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="san-diego">San Diego</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="h-10">
                  <SelectValue placeholder="Age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ages</SelectItem>
                  <SelectItem value="18-plus">18+</SelectItem>
                  <SelectItem value="21-plus">21+</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="h-10 w-full">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 max-w-[276px]">
                  <Calendar />
                </PopoverContent>
              </Popover>
            </div>
            <Button variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter Events
            </Button>
          </div>

        {/* Events */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <img
                src="/placeholder.svg"
                alt="Event 1"
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-t-lg object-cover"
              />
              <CardContent className="space-y-3 p-4 sm:p-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Annual Music Festival</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="h-4 w-4" />
                    <span>June 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Central Park, New York</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    <span>All ages</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">$50</div>
                  <Button variant="outline" size="sm">
                    Buy Tickets
                  </Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join us for a day of live music, food, and fun at our annual music festival in Central Park.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Event 2"
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-t-lg object-cover"
              />
              <CardContent className="space-y-3 p-4 sm:p-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Outdoor Movie Night</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="h-4 w-4" />
                    <span>July 20, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Riverfront Park, San Francisco</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    <span>All ages</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">$15</div>
                  <Button variant="outline" size="sm">
                    Buy Tickets
                  </Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enjoy a classic movie under the stars at our outdoor movie night in Riverfront Park.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Event 3"
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-t-lg object-cover"
              />
              <CardContent className="space-y-3 p-4 sm:p-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Art in the Park</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="h-4 w-4" />
                    <span>August 5, 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Balboa Park, San Diego</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <UserIcon className="h-4 w-4" />
                    <span>All ages</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">Free</div>
                  <Button variant="outline" size="sm">
                    RSVP
                  </Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore the vibrant art scene at our annual Art in the Park event in Balboa Park.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
    )
}



function CalendarIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
        </svg>
    )
}


function FilterIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    )
}


function MapPinIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
        </svg>
    )
}


function UserIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        </svg>
    )
}