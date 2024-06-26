/*
Example response:

event: {
  name: {
    text: 'TEST_IMAGE_Charming Speed Dating Gathering',
    html: 'TEST_IMAGE_Charming Speed Dating Gathering'
  },
  description: {
    text: 'Get ready to meet new people and potentially find a spark in just a few minutes at our Speed Dating event!',
    html: 'Get ready to meet new people and potentially find a spark in just a few minutes at our Speed Dating event!'
  },
  url: 'https://www.eventbrite.com/e/test-image-charming-speed-dating-gathering-tickets-927893342967',
  start: {
    timezone: 'America/New_York',
    local: '2024-08-15T18:00:00',
    utc: '2024-08-15T22:00:00Z'
  },
  end: {
    timezone: 'America/New_York',
    local: '2024-08-15T21:00:00',
    utc: '2024-08-16T01:00:00Z'
  },
  organization_id: '2198245864763',
  created: '2024-06-18T15:08:12Z',
  changed: '2024-06-18T15:08:17Z',
  capacity: 24,
  capacity_is_custom: true,
  status: 'draft',
  currency: 'USD',
  listed: true,
  shareable: false,
  invite_only: false,
  online_event: false,
  show_remaining: true,
  tx_time_limit: 1200,
  hide_start_date: false,
  hide_end_date: false,
  locale: 'en_US',
  is_locked: false,
  privacy_setting: 'unlocked',
  is_series: false,
  is_series_parent: false,
  inventory_type: 'limited',
  is_reserved_seating: false,
  show_pick_a_seat: false,
  show_seatmap_thumbnail: false,
  show_colors_in_seatmap_thumbnail: false,
  source: 'api',
  is_free: false,
  version: null,
  summary: 'Get ready to meet new people and potentially find a spark in just a few minutes at our Speed Dating event!',
  facebook_event_id: null,
  logo_id: '791821669',
  organizer_id: '86903243043',
  venue_id: '219129959',
  category_id: null,
  subcategory_id: null,
  format_id: null,
  id: '927893342967',
  resource_uri: 'https://www.eventbriteapi.com/v3/events/927893342967/',
  is_externally_ticketed: false,
  logo: {
    crop_mask: { top_left: [Object], width: 1280, height: 640 },
    original: {
      url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F791821669%2F2198245834553%2F1%2Foriginal.20240618-150814?auto=format%2Ccompress&q=75&sharp=10&s=be95e2152c5d3f34f0bdb526bb4c6083',
      width: 1300,
      height: 650
    },
    id: '791821669',
    url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F791821669%2F2198245834553%2F1%2Foriginal.20240618-150814?h=200&w=450&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C1%2C1280%2C640&s=acd4832b27b1947e15a530d43a267203',
    aspect_ratio: '2',
    edge_color: null,
    edge_color_set: true
  }
}

*/ 

const oldEvents = [
  {
    id: 31,
    image: '/images/app/restaurant5.webp',
    title: 'Speed Dating Event',
    date: 'June 10, 2023',
    time: '7:00 PM - 10:00 PM',
    city: 'New York City',
    address: '123 Main St, New York, NY 10001',
    ageRange: '25-35',
    description:
      'Join us for a fun and exciting speed dating event in the heart of the city. Meet new people and find your perfect match!',
    price: 50,
    host: 'John Doe',
    capacity: 100,
    tags: ['Singles', 'Networking', 'Fun'],
    dressCode: 'Casual',
    specialInstructions: 'Please arrive on time and be ready to mingle.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Jane Doe' },
      { id: 2, image: '/images/users/user2.webp', name: 'Bob Smith' },
      { id: 3, image: '/images/users/user3.webp', name: 'Sarah Johnson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Tom Wilson' },
    ],
    contact: {
      email: 'info@speeddate.com',
      phone: '555-1234',
    },
    rating: 4.8,
    reviews: [
      {
        id: 1,
        user: 'Jane Doe',
        rating: 5,
        comment: 'Had a great time at this event!',
      },
      {
        id: 2,
        user: 'Bob Smith',
        rating: 4,
        comment: 'Enjoyed the event, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '7:00 PM', activity: 'Check-in' },
      { time: '7:30 PM', activity: 'Speed Dating Rounds' },
      { time: '9:00 PM', activity: 'Networking' },
      { time: '9:45 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Acme Corp' },
      { id: 2, image: '/placeholder.svg', name: 'Widgets Inc' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Dating App' },
      { id: 2, image: '/placeholder.svg', name: 'Event Planner' },
    ],
  },
  {
    id: 52,
    image: '/images/app/restaurant1.webp',
    title: 'Cocktail Mixer',
    date: 'July 15, 2023',
    time: '8:00 PM - 11:00 PM',
    city: 'Los Angeles',
    address: '456 Oak St, Los Angeles, CA 90001',
    ageRange: '21-40',
    description:
      'Join us for a sophisticated cocktail mixer in the heart of LA. Mingle with like-minded professionals and enjoy delicious drinks.',
    price: 75,
    host: 'Jane Smith',
    capacity: 150,
    tags: ['Networking', 'Cocktails', 'Professionals'],
    dressCode: 'Business Casual',
    specialInstructions: 'Please RSVP in advance to secure your spot.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'John Doe' },
      { id: 2, image: '/images/users/user2.webp', name: 'Sarah Johnson' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Emily Davis' },
    ],
    contact: {
      email: 'info@cocktailmixer.com',
      phone: '555-5678',
    },
    rating: 4.5,
    reviews: [
      {
        id: 1,
        user: 'John Doe',
        rating: 5,
        comment: 'Fantastic event, great networking opportunities!',
      },
      {
        id: 2,
        user: 'Sarah Johnson',
        rating: 4,
        comment:
          'Enjoyed the drinks and atmosphere, but could have been more organized.',
      },
    ],
    schedule: [
      { time: '8:00 PM', activity: 'Check-in and Welcome Drinks' },
      { time: '8:30 PM', activity: 'Networking' },
      { time: '9:30 PM', activity: 'Cocktail Tasting' },
      { time: '10:30 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Cocktail Bar' },
      { id: 2, image: '/placeholder.svg', name: 'Liquor Distributor' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Event Planner' },
      { id: 2, image: '/placeholder.svg', name: 'Catering Company' },
    ],
  },
  {
    id: 63,
    image: '/images/app/restaurant2.webp',
    title: 'Singles Hike',
    date: 'August 20, 2023',
    time: '10:00 AM - 2:00 PM',
    city: 'San Francisco',
    address: '789 Pine St, San Francisco, CA 94101',
    ageRange: '30-45',
    description:
      'Explore the beautiful nature of San Francisco while meeting new people on this singles hike.',
    price: 30,
    host: 'Emily Davis',
    capacity: 75,
    tags: ['Outdoors', 'Fitness', 'Singles'],
    dressCode: 'Active Wear',
    specialInstructions:
      'Please bring water, snacks, and comfortable hiking shoes.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user2.webp', name: 'Jane Doe' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Sarah Johnson' },
    ],
    contact: {
      email: 'info@singleshike.com',
      phone: '555-9012',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Bob Smith',
        rating: 5,
        comment: 'Had a great time on the hike and met some awesome people!',
      },
      {
        id: 2,
        user: 'Jane Doe',
        rating: 4,
        comment:
          'The hike was beautiful, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in and Warm-up' },
      { time: '10:30 AM', activity: 'Hike Begins' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '1:00 PM', activity: 'Hike Continues' },
      { time: '2:00 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Outdoor Gear Store' },
      { id: 2, image: '/placeholder.svg', name: 'Hiking Club' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Adventure Tour Company' },
      { id: 2, image: '/placeholder.svg', name: 'Healthy Snacks' },
    ],
  },
  {
    id: 74,
    image: '/images/app/restaurant3.webp',
    title: 'Rooftop Mixer',
    date: 'August 22, 2023',
    time: '10:00 AM - 2:00 PM',
    city: 'San Francisco',
    address: '789 Pine St, San Francisco, CA 94101',
    ageRange: '30-45',
    description:
      'Explore the beautiful nature of San Francisco while meeting new people on this singles hike.',
    price: 30,
    host: 'Emily Davis',
    capacity: 75,
    tags: ['Outdoors', 'Fitness', 'Singles'],
    dressCode: 'Active Wear',
    specialInstructions:
      'Please bring water, snacks, and comfortable hiking shoes.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user2.webp', name: 'Jane Doe' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Sarah Johnson' },
    ],
    contact: {
      email: 'info@singleshike.com',
      phone: '555-9012',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Bob Smith',
        rating: 5,
        comment: 'Had a great time on the hike and met some awesome people!',
      },
      {
        id: 2,
        user: 'Jane Doe',
        rating: 4,
        comment:
          'The hike was beautiful, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in and Warm-up' },
      { time: '10:30 AM', activity: 'Hike Begins' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '1:00 PM', activity: 'Hike Continues' },
      { time: '2:00 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Outdoor Gear Store' },
      { id: 2, image: '/placeholder.svg', name: 'Hiking Club' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Adventure Tour Company' },
      { id: 2, image: '/placeholder.svg', name: 'Healthy Snacks' },
    ],
  },
  {
    id: 95,
    image: '/images/app/restaurant4.webp',
    title: 'Pool Mixer',
    date: 'August 22, 2023',
    time: '10:00 AM - 2:00 PM',
    city: 'San Francisco',
    address: '789 Pine St, San Francisco, CA 94101',
    ageRange: '30-45',
    description:
      'Explore the beautiful nature of San Francisco while meeting new people on this singles hike.',
    price: 30,
    host: 'Emily Davis',
    capacity: 75,
    tags: ['Outdoors', 'Fitness', 'Singles'],
    dressCode: 'Active Wear',
    specialInstructions:
      'Please bring water, snacks, and comfortable hiking shoes.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user2.webp', name: 'Jane Doe' },
      { id: 3, image: '/images/users/user3.webp', name: 'Tom Wilson' },
      { id: 4, image: '/images/users/user4.webp', name: 'Sarah Johnson' },
    ],
    contact: {
      email: 'info@singleshike.com',
      phone: '555-9012',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Bob Smith',
        rating: 5,
        comment: 'Had a great time on the hike and met some awesome people!',
      },
      {
        id: 2,
        user: 'Jane Doe',
        rating: 4,
        comment:
          'The hike was beautiful, but could have been better organized.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in and Warm-up' },
      { time: '10:30 AM', activity: 'Hike Begins' },
      { time: '12:00 PM', activity: 'Lunch Break' },
      { time: '1:00 PM', activity: 'Hike Continues' },
      { time: '2:00 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Outdoor Gear Store' },
      { id: 2, image: '/placeholder.svg', name: 'Hiking Club' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Adventure Tour Company' },
      { id: 2, image: '/placeholder.svg', name: 'Healthy Snacks' },
    ],
  },
  {
    id: 92,
    image: '/images/app/restaurant4.webp',
    title: 'Wine Tasting Mixer',
    date: 'June 24, 2023',
    time: '6:00 PM - 9:00 PM',
    city: 'San Francisco',
    address: '456 Market St, San Francisco, CA 94111',
    ageRange: '30-45',
    description:
      'Join us for an elegant evening of wine tasting and socializing. Discover new wines and meet like-minded individuals.',
    price: 60,
    host: 'Emily White',
    capacity: 80,
    tags: ['Social', 'Networking', 'Wine'],
    dressCode: 'Business Casual',
    specialInstructions: 'Please bring a valid ID for age verification.',
    attendees: [
      { id: 1, image: '/images/users/user5.webp', name: 'Anna Bell' },
      { id: 2, image: '/images/users/user6.webp', name: 'Chris Lee' },
      { id: 3, image: '/images/users/user7.webp', name: 'Emma Stone' },
      { id: 4, image: '/images/users/user8.webp', name: 'Jake Black' },
    ],
    contact: {
      email: 'info@winemixer.com',
      phone: '555-5678',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Anna Bell',
        rating: 5,
        comment: 'Absolutely loved the wines and the company!',
      },
      {
        id: 2,
        user: 'Chris Lee',
        rating: 4,
        comment: 'Great event, but a bit crowded.',
      },
    ],
    schedule: [
      { time: '6:00 PM', activity: 'Check-in' },
      { time: '6:30 PM', activity: 'Wine Tasting' },
      { time: '8:00 PM', activity: 'Networking' },
      { time: '8:45 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Vineyard Inc' },
      { id: 2, image: '/placeholder.svg', name: 'Wine World' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Social Club' },
      { id: 2, image: '/placeholder.svg', name: 'Event Planner' },
    ],
  },
  {
    id: 3,
    image: '/images/app/restaurant3.webp',
    title: 'Outdoor Movie Night',
    date: 'July 15, 2023',
    time: '8:00 PM - 11:00 PM',
    city: 'Los Angeles',
    address: '789 Sunset Blvd, Los Angeles, CA 90028',
    ageRange: '20-40',
    description:
      'Enjoy a classic movie under the stars with fellow film enthusiasts. Bring your blankets and snacks!',
    price: 30,
    host: 'Mark Green',
    capacity: 150,
    tags: ['Outdoor', 'Movie', 'Social'],
    dressCode: 'Casual',
    specialInstructions: 'Arrive early to get a good spot. Bring your own blanket.',
    attendees: [
      { id: 1, image: '/images/users/user2.webp', name: 'Bob Smith' },
      { id: 2, image: '/images/users/user4.webp', name: 'Tom Wilson' },
      { id: 3, image: '/images/users/user6.webp', name: 'Chris Lee' },
      { id: 4, image: '/images/users/user8.webp', name: 'Jake Black' },
    ],
    contact: {
      email: 'info@outdoormovies.com',
      phone: '555-9101',
    },
    rating: 4.9,
    reviews: [
      {
        id: 1,
        user: 'Sarah Johnson',
        rating: 5,
        comment: 'What a great way to spend an evening!',
      },
      {
        id: 2,
        user: 'Tom Wilson',
        rating: 5,
        comment: 'Loved the movie and the atmosphere.',
      },
    ],
    schedule: [
      { time: '8:00 PM', activity: 'Check-in' },
      { time: '8:30 PM', activity: 'Movie Screening' },
      { time: '10:30 PM', activity: 'Socializing' },
      { time: '10:45 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Film Studio' },
      { id: 2, image: '/placeholder.svg', name: 'Outdoor Gear' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Movie Club' },
      { id: 2, image: '/placeholder.svg', name: 'Event Planner' },
    ],
  },
  {
    id: 4,
    image: '/images/app/restaurant2.webp',
    title: 'Cooking Class for Singles',
    date: 'July 22, 2023',
    time: '5:00 PM - 8:00 PM',
    city: 'Chicago',
    address: '1011 Lake Shore Dr, Chicago, IL 60611',
    ageRange: '25-40',
    description:
      'Learn to cook delicious dishes while meeting other singles. Perfect for food lovers!',
    price: 75,
    host: 'Chef Maria',
    capacity: 50,
    tags: ['Cooking', 'Singles', 'Fun'],
    dressCode: 'Casual',
    specialInstructions: 'All ingredients and utensils will be provided.',
    attendees: [
      { id: 1, image: '/images/users/user1.webp', name: 'Jane Doe' },
      { id: 2, image: '/images/users/user3.webp', name: 'Sarah Johnson' },
      { id: 3, image: '/images/users/user5.webp', name: 'Anna Bell' },
      { id: 4, image: '/images/users/user7.webp', name: 'Emma Stone' },
    ],
    contact: {
      email: 'info@cookingsingles.com',
      phone: '555-1122',
    },
    rating: 4.6,
    reviews: [
      {
        id: 1,
        user: 'Emma Stone',
        rating: 5,
        comment: 'Had so much fun and learned new recipes!',
      },
      {
        id: 2,
        user: 'Anna Bell',
        rating: 4,
        comment: 'Great event, but the class could have been longer.',
      },
    ],
    schedule: [
      { time: '5:00 PM', activity: 'Check-in' },
      { time: '5:30 PM', activity: 'Cooking Lesson' },
      { time: '7:00 PM', activity: 'Dinner and Socializing' },
      { time: '7:45 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Kitchen Supplies' },
      { id: 2, image: '/placeholder.svg', name: 'Food Market' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Cooking School' },
      { id: 2, image: '/placeholder.svg', name: 'Event Planner' },
    ],
  },
  {
    id: 5,
    image: '/images/app/restaurant1.webp',
    title: 'Networking Brunch',
    date: 'August 5, 2023',
    time: '10:00 AM - 1:00 PM',
    city: 'Miami',
    address: '1212 Ocean Dr, Miami, FL 33139',
    ageRange: '30-50',
    description:
      'Join us for a relaxing brunch by the beach. Network with professionals in a casual setting.',
    price: 40,
    host: 'Laura James',
    capacity: 70,
    tags: ['Networking', 'Brunch', 'Social'],
    dressCode: 'Beach Casual',
    specialInstructions: 'Bring business cards and be ready to connect.',
    attendees: [
      { id: 1, image: '/images/users/user4.webp', name: 'Tom Wilson' },
      { id: 2, image: '/images/users/user2.webp', name: 'Bob Smith' },
      { id: 3, image: '/images/users/user8.webp', name: 'Jake Black' },
      { id: 4, image: '/images/users/user6.webp', name: 'Chris Lee' },
    ],
    contact: {
      email: 'info@networkbrunch.com',
      phone: '555-3344',
    },
    rating: 4.7,
    reviews: [
      {
        id: 1,
        user: 'Jake Black',
        rating: 5,
        comment: 'Fantastic networking opportunity!',
      },
      {
        id: 2,
        user: 'Tom Wilson',
        rating: 4,
        comment: 'Great event, but the food options were limited.',
      },
    ],
    schedule: [
      { time: '10:00 AM', activity: 'Check-in' },
      { time: '10:30 AM', activity: 'Brunch' },
      { time: '11:30 AM', activity: 'Networking' },
      { time: '12:45 PM', activity: 'Closing Remarks' },
    ],
    sponsors: [
      { id: 1, image: '/placeholder.svg', name: 'Local Business' },
      { id: 2, image: '/placeholder.svg', name: 'Event Sponsor' },
    ],
    partners: [
      { id: 1, image: '/placeholder.svg', name: 'Networking Group' },
      { id: 2, image: '/placeholder.svg', name: 'Event Planner' },
    ],
  }
  
];

export default oldEvents;