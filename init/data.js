const sampleListings = [
  {
    title: "My Hostel",
    description:
      "Experience a cozy and vibrant hostel with a welcoming atmosphere, modern amenities, and a perfect blend of comfort and community.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 12000,
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
  },
  {
    title: "My House",
    description:
      "Enjoy a warm and peaceful home with a cozy ambiance, modern comforts, and a welcoming vibe for relaxation and togetherness.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    },
    price: 5000000,
    location: "Meerut",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.7064, 28.9845],
    },
  },
  {
    title: "Your Flat",
    description:
      "Experience the charm of Flat in this beautifully restored House. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700000,
    location: "Noida",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.391, 28.5355],
    },
  },
  {
    title: "Your Apartment",
    description:
      "Escape to a apartment house on the Pacific coast of Rajasthan. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rajasthan",
    country: "India",
    geometry: {
      coordinates: [74.2179, 27.0238],
      type: "Point",
    },
  },
  {
    title: "My Flat",
    description:
      "Experience the charm of Flat in this beautifully restored House. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3700000,
    location: "Noida",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.391, 28.5355],
    },
  },
  {
    title: "aaynam",
    description:
      "Escape to a apartment house on the Pacific coast of Rajasthan. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rajasthan",
    country: "India",
    geometry: {
      coordinates: [74.2179, 27.0238],
      type: "Point",
    },
  },
  {
    title: "shanta puri",
    description:
      "Escape to a apartment house on the Pacific coast of Rajasthan. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rajasthan",
    country: "India",
    geometry: {
      coordinates: [74.2179, 27.0238],
      type: "Point",
    },
  },

  {
    title: "shanta shoudh",
    description:
      "Escape to a apartment house on the Pacific coast of Rajasthan. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1674676471104-3c4017645e6f?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rajasthan",
    country: "India",
    geometry: {
      coordinates: [74.2179, 27.0238],
      type: "Point",
    },
  },


  {
    "title": "Maple Heights",
    "description": "A luxurious flat in the heart of Bangalore. Close to tech parks and vibrant city life.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "price": 320000,
    "location": "Bangalore",
    "country": "India",
    "geometry": {
      "coordinates": [77.5946, 12.9716],
      "type": "Point"
    }
  },
  {
    "title": "Cozy PG in Shastri Nagar",
    "description": "Affordable PG with amenities for working professionals.",
    "image": {
      "filename": "listingimage",
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD3t-v8IyQuUEgkNOm8UUq4INDKMO2ZYnhUg&s"
    },
    "price": 15000,
    "location": "Shastri Nagar",
    "country": "India",
    "geometry": {
      "coordinates": [77.2324, 28.6663],
      "type": "Point"
    }
  },
  {
    "title": "Urban Living Apartment",
    "description": "Stylish 1BHK in Andheri East, Mumbai, perfect for young professionals.",
    "image": {
      "filename": "listingimage",
      "url": "https://www.ashianahousing.com/real-estate-blog/wp-content/uploads/2019/06/vrinda-gardens-blog-1537528732.jpg"
    },
    "price": 28000,
    "location": "Andheri",
    "country": "India",
    "geometry": {
      "coordinates": [72.8553, 19.1197],
      "type": "Point"
    }
  },
  {
    "title": "Skyline Villa",
    "description": "Luxurious villa in Punjabi Bagh, Delhi with a beautiful garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://www.elitehavens.com/images/gallery/lowres/P00463/Listing.jpg"
    },
    "price": 200000,
    "location": "Punjabi Bagh",
    "country": "India",
    "geometry": {
      "coordinates": [77.1253, 28.6795],
      "type": "Point"
    }
  },
  {
    "title": "Sunrise Residency PG",
    "description": "Affordable and well-maintained PG in Pune, ideal for students and working professionals.",
    "image": {
      "filename": "listingimage",
      "url": "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1657444941/Website/CMS-Uploads/acrolxzidpj16e8ffv8c.jpg"
    },
    "price": 1500,
    "location": "Pune",
    "country": "India",
    "geometry": {
      "coordinates": [73.8567, 18.5204],
      "type": "Point"
    }
  },
  {
    "title": "Ocean Breeze Villa",
    "description": "A spacious villa in Goa, just a short walk from the beach. Perfect for a relaxing getaway.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=670&auto=format&fit=crop"
    },
    "price": 5000,
    "location": "Goa",
    "country": "India",
    "geometry": {
      "coordinates": [73.818, 15.2993],
      "type": "Point"
    }
  },
  {
    "title": "Royal Nest Hostel",
    "description": "A well-equipped hostel in Jaipur, providing comfort and security for students.",
    "image": {
      "filename": "listingimage",
      "url": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/25/full/1621882409-7064.jpg?im=FeatureCrop,size=(826,465)"
    },
    "price": 1200,
    "location": "Jaipur",
    "country": "India",
    "geometry": {
      "coordinates": [75.7873, 26.9124],
      "type": "Point"
    }
  },
  {
    "title": "Emerald home",
    "description": "A modern 2BHK flat in Hyderabad, located near IT hubs and shopping malls.",
    "image": {
      "filename": "listingimage",
      "url": "https://img.staticmb.com/mbcontent/images/crop/uploads/2022/8/Simple-style-normal-house-front-elevation-designs_0_1200.jpg"
    },
    "price": 2800,
    "location": "Hyderabad",
    "country": "India",
    "geometry": {
      "coordinates": [78.4867, 17.385],
      "type": "Point"
    }
  }
  
];



module.exports = { data: sampleListings };
