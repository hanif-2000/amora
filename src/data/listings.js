const DEMO_LISTINGS = [
  {
    id: 1,
    adId: "in6c9hk49",
    date: "21 AUGUST",
    badge: "NEW",
    topBadge: "SUPER Top",
    photoCount: 3,
    name: "Riya",
    title: "Riya - Singles Night Jaipur meetup host",
    description:
      "Hosting the Singles Night Jaipur mixer this week. Come mingle, dance and meet new people in a fun, relaxed setting. Limited spots, message to reserve yours...",
    age: 24,
    location: "Jaipur / C-Scheme",
    phone: "tel:+911234567890",
    phoneDisplay: "+91 12345 67890",
    whatsapp: "https://wa.me/911234567890",
    telegram: "https://t.me/singlesnightjaipur1",
  },
  {
    id: 2,
    adId: "in7d2mn31",
    date: "20 AUGUST",
    badge: null,
    topBadge: "Top",
    photoCount: 6,
    name: "Anjali",
    title: "Anjali - Meet me at Singles Night Jaipur",
    description:
      "Joining this week's Singles Night Jaipur event. Looking to connect with genuine, fun people. Drop a message if you're attending too...",
    age: 27,
    location: "Jaipur / Malviya Nagar",
    phone: "tel:+911234567891",
    phoneDisplay: "+91 12345 67891",
    whatsapp: "https://wa.me/911234567891",
    telegram: "https://t.me/singlesnightjaipur2",
  },
  {
    id: 3,
    adId: "in5k8pq77",
    date: "19 AUGUST",
    badge: "NEW",
    topBadge: null,
    photoCount: 4,
    name: "Meher",
    title: "Meher - Singles Night Jaipur, first time here",
    description:
      "First time attending Singles Night Jaipur, excited to meet new faces. Into good conversation, music and making new connections...",
    age: 25,
    location: "Jaipur / Vaishali Nagar",
    phone: "tel:+911234567892",
    phoneDisplay: "+91 12345 67892",
    whatsapp: "https://wa.me/911234567892",
    telegram: "https://t.me/singlesnightjaipur3",
  },
  {
    id: 4,
    adId: "in3x4vw02",
    date: "18 AUGUST",
    badge: null,
    topBadge: null,
    photoCount: 2,
    name: "Sana",
    title: "Sana - Regular at Singles Night Jaipur",
    description:
      "Regular at the Jaipur singles meetups. Easygoing, love meeting new people over coffee or drinks. Say hi if you'll be there this week...",
    age: 26,
    location: "Jaipur / Raja Park",
    phone: "tel:+911234567893",
    phoneDisplay: "+91 12345 67893",
    whatsapp: "https://wa.me/911234567893",
    telegram: "https://t.me/singlesnightjaipur4",
  },
];

// Each category route (/call-girls, /massages, ...) currently shares the
// same demo data. Add a `LISTINGS[categorySlug]` entry here once a category
// gets its own real listings.
const LISTINGS = {};

export function getListingsForCategory(category) {
  return LISTINGS[category] ?? DEMO_LISTINGS;
}

export function findListingById(category, id) {
  return getListingsForCategory(category).find(
    (listing) => String(listing.id) === String(id)
  );
}

export function categoryLabel(category) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
