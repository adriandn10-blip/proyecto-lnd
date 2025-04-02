import React from 'react';
import { MapPin, Calendar, User } from 'lucide-react';

const destinations = [
  { id: 1, title: "Santorini, Greece", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800", description: "Experience the stunning white-washed buildings and breathtaking sunsets of Santorini.", date: "Apr 2024", author: "Maria Santos" },
  { id: 2, title: "Kyoto, Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800", description: "Discover the ancient temples and beautiful gardens of historic Kyoto.", date: "May 2024", author: "John Smith" },
  { id: 3, title: "Machu Picchu, Peru", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800", description: "Explore the mysterious ruins of the ancient Incan civilization.", date: "Jun 2024", author: "Ana Martinez" }
];

const Home = () => (
  <div className="min-h-screen">
    <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8">Explore breathtaking destinations and create unforgettable memories.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">Start Exploring</button>
        </div>
      </div>
    </section>

    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(({ id, title, image, description, date, author }) => (
            <article key={id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={image} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{date}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Home;

