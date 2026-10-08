// 'use client';

// import { Calendar, Clock, MapPin, Users, ExternalLink, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import Navigation from '@/components/Navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import Head from 'next/head';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { useState, useRef, useEffect, useCallback, memo } from 'react';

// interface PastEvent {
//   title: string;
//   description?: string;
//   date: string;
//   location: string;
//   type: string;
//   participants: number;
//   rating: number;
//   images: string[];
// }

// interface EventType {
//   name: string;
//   count: number;
//   color: string;
// }

// interface ImageIndices {
//   [key: number]: number;
// }

// const OptimizedImage = memo(({ 
//   src, 
//   alt, 
//   className, 
//   priority = false,
//   onLoad,
//   ...props 
// }: {
//   src: string;
//   alt: string;
//   className?: string;
//   priority?: boolean;
//   onLoad?: () => void;
//   [key: string]: any;
// }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);

//   const handleLoad = useCallback(() => {
//     setIsLoading(false);
//     onLoad?.();
//   }, [onLoad]);

//   const handleError = useCallback(() => {
//     setIsLoading(false);
//     setHasError(true);
//   }, []);

//   return (
//     <div className="relative w-full h-full">
//       {isLoading && (
//         <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
//           <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//         </div>
//       )}
//       {hasError ? (
//         <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//           <div className="text-gray-400 text-sm">Failed to load image</div>
//         </div>
//       ) : (
//         <Image
//           src={`/${src}`}
//           alt={alt}
//           fill
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//           className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className || ''}`}
//           priority={priority}
//           onLoad={handleLoad}
//           onError={handleError}
//           quality={85}
//           placeholder="blur"
//           blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
//           {...props}
//         />
//       )}
//     </div>
//   );
// });

// OptimizedImage.displayName = 'OptimizedImage';

// // Memoized Event Card Component
// const EventCard = memo(({ 
//   event, 
//   index, 
//   imageIndex, 
//   onImageNavigation, 
//   onImageIndexChange 
// }: {
//   event: PastEvent;
//   index: number;
//   imageIndex: number;
//   onImageNavigation: (eventIndex: number, direction: 'next' | 'prev') => void;
//   onImageIndexChange: (eventIndex: number, imgIndex: number) => void;
// }) => {
//   const cardVariants: Variants = {
//     hidden: { 
//       opacity: 0, 
//       y: 20,
//       scale: 0.95 
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }
//   };

//   const imageVariants: Variants = {
//     hidden: { 
//       opacity: 0, 
//       scale: 1.1 
//     },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     },
//     hover: {
//       scale: 1.05,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     }
//   };

//   return (
//     <motion.div
//       variants={cardVariants}
//       whileHover={{ y: -5 }}
//       className="group"
//     >
//       <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
//         {/* Event Image Carousel */}
//         <div className="relative overflow-hidden h-48 group">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={`${index}-${imageIndex}`}
//               variants={imageVariants}
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               whileHover="hover"
//               className="w-full h-full"
//             >
//               <OptimizedImage
//                 src={event.images[imageIndex]}
//                 alt={`${event.title} event in ${event.location} on ${event.date} - Image ${imageIndex + 1}`}
//                 priority={index < 4} // Prioritize first 4 images
//               />
//             </motion.div>
//           </AnimatePresence>
          
//           {/* Image overlay gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
//           {/* Event type badge */}
//           <motion.div 
//             className="absolute top-4 right-4"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <Badge variant="secondary" className="backdrop-blur-sm bg-white/90">
//               {event.type}
//             </Badge>
//           </motion.div>

//           {/* Image counter */}
//           {event.images.length > 1 && (
//             <div className="absolute top-4 left-4">
//               <Badge variant="outline" className="backdrop-blur-sm bg-black/20 text-white border-white/30">
//                 {imageIndex + 1}/{event.images.length}
//               </Badge>
//             </div>
//           )}

//           {/* Navigation arrows */}
//           {event.images.length > 1 && (
//             <>
//               <button
//                 onClick={() => onImageNavigation(index, 'prev')}
//                 className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 aria-label={`Previous image for ${event.title}`}
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => onImageNavigation(index, 'next')}
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 aria-label={`Next image for ${event.title}`}
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </>
//           )}

//           {/* Image dots indicator */}
//           {event.images.length > 1 && (
//             <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
//               {event.images.map((_, imgIndex) => (
//                 <button
//                   key={imgIndex}
//                   onClick={() => onImageIndexChange(index, imgIndex)}
//                   className={`w-2 h-2 rounded-full transition-all duration-200 ${
//                     imageIndex === imgIndex 
//                       ? 'bg-white scale-125' 
//                       : 'bg-white/50 hover:bg-white/75'
//                   }`}
//                   aria-label={`Go to image ${imgIndex + 1} for ${event.title}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         <CardHeader className="pb-2">
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex items-center space-x-1">
//               <span className="text-yellow-500" aria-label="Rating">★</span>
//               <span className="text-sm font-medium">{event.rating}</span>
//             </div>
//           </div>
//           <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
//           <CardDescription className="line-clamp-2">{event.description}</CardDescription>
//         </CardHeader>
//         <CardContent className="pt-0">
//           <div className="space-y-2 text-sm text-gray-600">
//             <div className="flex items-center space-x-2">
//               <Calendar className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
//               <time dateTime={event.date} className="truncate">{event.date}</time>
//             </div>
//             <div className="flex items-center space-x-2">
//               <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
//               <span className="truncate">{event.location}</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Users className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
//               <span>{event.participants} participants</span>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// });

// EventCard.displayName = 'EventCard';

// export default function Events() {
//   // const upcomingEvents = [
//   //   {
//   //     title: 'Web3 Developer Bootcamp',
//   //     date: '2025-02-15',
//   //     time: '10:00 AM - 6:00 PM',
//   //     location: 'NIT Jamshedpur',
//   //     type: 'Workshop',
//   //     description: 'Intensive hands-on workshop covering smart contract development, DApp creation, and Web3 integration. Perfect for beginners and intermediate developers.',
//   //     capacity: 50,
//   //     registered: 35,
//   //     price: 'Free',
//   //     topics: ['Smart Contracts', 'Solidity', 'React', 'Web3.js'],
//   //     speaker: 'Rahul Kumar, Senior Blockchain Developer'
//   //   },
//   //   {
//   //     title: 'Blockchain for Beginners',
//   //     date: '2025-02-28',
//   //     time: '2:00 PM - 5:00 PM',
//   //     location: 'BIT Mesra',
//   //     type: 'Seminar',
//   //     description: 'Introduction to blockchain technology, cryptocurrencies, and decentralized applications. No prior experience required.',
//   //     capacity: 100,
//   //     registered: 67,
//   //     price: 'Free',
//   //     topics: ['Blockchain Basics', 'Cryptocurrency', 'DeFi', 'NFTs'],
//   //     speaker: 'Priya Singh, Education Director'
//   //   },
//   //   {
//   //     title: 'DeFi Deep Dive',
//   //     date: '2025-03-10',
//   //     time: '11:00 AM - 4:00 PM',
//   //     location: 'Online',
//   //     type: 'Webinar',
//   //     description: 'Exploring decentralized finance protocols, yield farming, liquidity mining, and building DeFi applications.',
//   //     capacity: 200,
//   //     registered: 145,
//   //     price: 'Free',
//   //     topics: ['DeFi Protocols', 'Yield Farming', 'AMM', 'Governance'],
//   //     speaker: 'Amit Sharma, DeFi Specialist'
//   //   },
//   //   {
//   //     title: 'NFT Marketplace Development',
//   //     date: '2025-03-20',
//   //     time: '9:00 AM - 5:00 PM',
//   //     location: 'Ranchi University',
//   //     type: 'Workshop',
//   //     description: 'Build your own NFT marketplace from scratch using modern Web3 technologies and IPFS for decentralized storage.',
//   //     capacity: 40,
//   //     registered: 28,
//   //     price: '₹500',
//   //     topics: ['NFT Standards', 'IPFS', 'Marketplace Logic', 'Frontend Integration'],
//   //     speaker: 'Sneha Patel, Full-stack Developer'
//   //   },
//   //   {
//   //     title: 'Web3 Career Fair',
//   //     date: '2025-04-05',
//   //     time: '10:00 AM - 6:00 PM',
//   //     location: 'IIIT Ranchi',
//   //     type: 'Career Fair',
//   //     description: 'Meet with top Web3 companies, explore job opportunities, and network with industry professionals.',
//   //     capacity: 300,
//   //     registered: 180,
//   //     price: 'Free',
//   //     topics: ['Job Opportunities', 'Networking', 'Career Guidance', 'Portfolio Review'],
//   //     speaker: 'Multiple Industry Experts'
//   //   },
//   //   {
//   //     title: 'Jharkhand Web3 Hackathon 2025',
//   //     date: '2025-04-15',
//   //     time: '48 Hours',
//   //     location: 'Central University of Jharkhand',
//   //     type: 'Hackathon',
//   //     description: 'Build innovative blockchain solutions addressing local challenges. Prizes worth ₹2 lakhs and mentorship opportunities.',
//   //     capacity: 150,
//   //     registered: 89,
//   //     price: 'Free',
//   //     topics: ['Problem Solving', 'Team Building', 'Innovation', 'Pitching'],
//   //     speaker: 'Panel of Industry Judges'
//   //   }
//   // ];

//   const pastEvents = [
//     {
//       title: 'Avalanche Gaming Night - BloodLoop',
//       description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
//       date: '12th July 2025',
//       location: 'Dhanbad',
//       type: 'Gaming Night',
//       participants: 22,
//       rating: 4.6,
//       images: [
//         'Avax_Gaming_Night_Dhanbad.jpg',
//       ]
//     },
//     {
//       title: 'Avalanche Gaming Night - BloodLoop',
//       description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
//       date: '29th June 2025',
//       location: 'Ranchi',
//       type: 'Gaming Night',
//       participants: 25,
//       rating: 4.8,
//       images: [
//         'Avax_Gaming_Night_Ranchi.png',
//         'avax_rnc1.JPG',
//         'avax_rnc2.JPG',
//         'avax_rnc5.png',
//         'avax_rnc3.JPG',
//         'avax_rnc4.png'
//       ]
//     },
//     {
//       title: 'Avalanche Gaming Night - BloodLoop',
//       description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
//       date: '28th June 2025',
//       location: 'Jamshedpur',
//       type: 'Gaming Night',
//       participants: 19,
//       rating: 4.2,
//       images: [
//         'Avax_Gaming_Night_Jamshedpur.png',
//         'avax_jsr1.png',
//         'avax_jsr2.jpg',
//         'avax_jsr.jpg'
//       ]
//     },
//     {
//       title: 'Vibe Coding Jam - AI x Web3',
//       description: 'Build production-ready decentralized applications or smart contracts in Minutes using AI',
//       date: '15th June 2025',
//       location: 'Google Meet',
//       type: 'Workshop',
//       participants: 97,
//       rating: 5,
//       images: [
//         'vibe-coding-jam.png'
//       ]
//     },
//     {
//       title: 'Bitcoin Pizza Day 🍕',
//       description: 'Celebrate the legendary day with Bitcoin fam across Jharkhand when 2 pizzas made Bitcoin history!',
//       date: '22nd May 2025',
//       location: 'Ranchi',
//       type: 'Meetup',
//       participants: 25,
//       rating: 4.8,
//       images: [
//         'btc-pizza-day-1.png',
//         'btc-pizza-day-2.jpg',
//         'btc-pizza-day-3.jpg'
//       ]
//     },
//     {
//       title: 'Avalanche Web3 Gaming Night',
//       description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
//       date: '12th April 2025',
//       location: 'Ranchi',
//       type: 'Gaming Night',
//       participants: 21,
//       rating: 4.4,
//       images: [
//         'avalanche-gaming.jpg'
//       ]
//     },
//     {
//       title: 'Shardeum Road Show',
//       date: '20th Oct 2024',
//       location: 'BIT Mesra, Ranchi',
//       type: 'Conference',
//       participants: 210,
//       rating: 4.7,
//       images: [
//         'shm-road-show-1.jpg',
//         'shm-road-show-2.jpg',
//         'shm-road-show-3.jpg'
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 8th Edition',
//       description: 'Connect, learn and grow your network in Web3 space!',
//       date: '11th Feb 2024',
//       location: 'Ranchi',
//       type: 'Meetup',
//       participants: 41,
//       rating: 4.1,
//       images: [
//         'blockmeet_2024.png',
//         'blockmeet_grow.jpg',
//         'blockmeet_grow1.jpg',
//         'blockmeet_grow2.jpg',
//         'blockmeet_grow3.jpg',
//         'blockmeet_grow4.jpg',
//       ]
//     },
//     {
//       title: 'Deploy Your First DApp @Shardeum',
//       description: 'Learn basics of Web3, followed by hands-on programming on Solidity and deploy dApp on Sphinx!',
//       date: '6th Nov 2023',
//       location: 'NIAMT Ranchi (NIFFT)',
//       type: 'Workshop',
//       participants: 117,
//       rating: 4.7,
//       images: [
//         'deploy_dapp_shardeum.png'
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 7th Edition',
//       description: 'Intro to DeFi and how Bitcoin is revolutionizing the finance industry!',
//       date: '27th October 2023',
//       location: 'BIT Mesra, Ranchi',
//       type: 'Conference',
//       participants: 133,
//       rating: 4.6,
//       images: [
//         'blockmeet-bitm-new.jpg',
//         'blockmeet-bitm-new1.jpg',
//         'blockmeet-bitm-new2.jpg',
//         'blockmeet-bitm-new3.jpg',
//         'blockmeet-bitm-new4.jpg'
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 6th Edition',
//       description: 'Intro to Web3 and Career Opportunities in Blockchain space!',
//       date: '26th August 2023',
//       location: 'BIT Mesra, Ranchi',
//       type: 'Seminar',
//       participants: 327,
//       rating: 4.9,
//       images: [
//         'blockmeet_bitm00.png',
//         'blockmeet-bitm0.jpg',
//         'blockmeet-bitm.jpg',
//         'blockmeet-bitm1.jpg',
//         'blockmeet-bitm2.jpg',
//         'blockmeet-bitm3.jpg',
//         'blockmeet-bitm4.png',
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 5th Edition',
//       description: 'How to start your journey in Web3, learn about DAOs and claim your POAP!',
//       date: '17th June 2023',
//       location: 'BIT Mesra, Ranchi',
//       type: 'Meetup',
//       participants: 33,
//       rating: 4.6,
//       images: [
//         'blockmeet_june.jpg',
//         'blockmeet_june1.jpg',
//       ]
//     },
//     {
//       title: 'Shardeum Web3 Meetup',
//       description: 'Intro to Blockchain followed by hand-on session to claim $SHM tokens & mint NFTs',
//       date: '14th May 2023',
//       location: 'NIAMT Ranchi',
//       type: 'Meetup',
//       participants: 170,
//       rating: 4.5,
//       images: [
//         'shardeum_meetup_poster.png',
//         'shardeum_meetup1.jpg',
//         'shardeum_meetup2.jpg',
//         'shardeum_meetup3.jpg',
//         'shardeum_meetup4.jpg',
//         'shardeum_meetup5.jpg',
//         'shardeum_meetup6.jpg',
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 4th Edition',
//       description: 'Intro to Web3 and Blockchain followed by a panel of founders and CxOs building in Web3 space!',
//       date: '15th April 2023',
//       location: 'IIIT Ranchi',
//       type: 'Seminar',
//       participants: 206,
//       rating: 4.8,
//       images: [
//         'blockmeet_iiit_poster.jpeg',
//         'blockmeet_iiit.jpg',
//         'blockmeet_iiit2.jpg',
//         'blockmeet_iiit2_5.jpg',
//         'blockmeet_iiit3.jpg',
//         'blockmeet_iiit4.jpg'
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 3rd Edition',
//       description: 'Intro to Web3, Blockchain and Crypto!',
//       date: '18th March 2023',
//       location: 'IIIT Ranchi',
//       type: 'Workshop',
//       participants: 48,
//       rating: 5.0,
//       images: [
//         'blockmeet_mar_poster.jpeg',
//         'blockmeet_mar.jpg',
//         'blockmeet_mar1.jpg',
//         'blockmeet_mar2.jpg',
//         'blockmeet_mar3.jpg',
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 2nd Edition',
//       description: 'Intro to Web3 and Community Building',
//       date: '18th Feb 2023',
//       location: 'Krishna Inn Hotel, Ranchi',
//       type: 'Meetup',
//       participants: 5,
//       rating: 4.3,
//       images: [
//         'blockmeet_feb.png',
//         'blockmeet_feb_1.jpg',
//         'blockmeet_feb_2.jpg'
//       ]
//     },
//     {
//       title: 'Blockmeet Ranchi - 1st Edition',
//       description: 'What is Blockchain and how to start your career as a blockchain developer',
//       date: '21st Jan 2023',
//       location: 'Ranchi',
//       type: 'Meetup',
//       participants: 21,
//       rating: 4.1,
//       images: [
//         'blockmeet_other.jpg',
//         'blockmeet_other1.jpg',
//         'blockmeet_other2.jpg',
//         'blockmeet_other3.jpg',
//       ]
//     },
//   ];

//   const eventTypes = [
//     { name: 'Webinar', count: 5, color: 'bg-blue-100 text-blue-800' },
//     { name: 'Seminar', count: 2, color: 'bg-green-100 text-green-800' },
//     { name: 'IRL Meetup', count: 16, color: 'bg-purple-100 text-purple-800' },
//     { name: 'Gaming Night', count: 4, color: 'bg-red-100 text-red-800' },
//     { name: 'Workshop', count: 3, color: 'bg-yellow-100 text-yellow-800' },
//     { name: 'Conference', count: 2, color: 'bg-indigo-100 text-indigo-800' }
//   ];

//   const [visibleCount, setVisibleCount] = useState<number>(4);
//   const [imageIndices, setImageIndices] = useState<ImageIndices>({});
//   const eventsPerLoad = 4;
//   const pastEventsRef = useRef<HTMLElement>(null);
  
//   const handleShowMore = useCallback(() => {
//     if (visibleCount >= pastEvents.length) {
//       // Show less - collapse back to first 4 and scroll to past events heading
//       setVisibleCount(4);
//       // Smooth scroll to past events section
//       pastEventsRef.current?.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     } else {
//       // Show more - add 4 more events
//       setVisibleCount(prev => Math.min(prev + eventsPerLoad, pastEvents.length));
//     }
//   }, [visibleCount, pastEvents.length, eventsPerLoad]);

//   const handleImageNavigation = useCallback((eventIndex: number, direction: 'next' | 'prev'): void => {
//     setImageIndices(prev => {
//       const currentIndex = prev[eventIndex] || 0;
//       const event = visibleEvents[eventIndex];
//       const maxIndex = event.images.length - 1;
      
//       let newIndex;
//       if (direction === 'next') {
//         newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
//       } else {
//         newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
//       }
      
//       return {
//         ...prev,
//         [eventIndex]: newIndex
//       };
//     });
//   }, []);

//   const handleImageIndexChange = useCallback((eventIndex: number, imgIndex: number) => {
//     setImageIndices(prev => ({
//       ...prev,
//       [eventIndex]: imgIndex
//     }));
//   }, []);
  
//   const visibleEvents = pastEvents.slice(0, visibleCount);
//   const isShowingAll = visibleCount >= pastEvents.length;
//   const hasMoreToShow = pastEvents.length > 4;

//   // Animation variants for the photo gallery
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   useEffect(() => {
//     const preloadImages = () => {
//       pastEvents.slice(0, 4).forEach(event => {
//         if (event.images[0]) {
//           const link = document.createElement('link');
//           link.rel = 'preload';
//           link.as = 'image';
//           link.href = `${event.images[0]}`;
//           document.head.appendChild(link);
//         }
//       });
//     };

//     preloadImages();
//   }, []);

//     const generateStructuredData = () => {
//     const events = pastEvents.map(event => ({
//       "@type": "Event",
//       "name": event.title,
//       "description": event.description || `Join us for ${event.title} in ${event.location}`,
//       "startDate": event.date,
//       "location": {
//         "@type": "Place",
//         "name": event.location,
//         "address": event.location
//       },
//       "organizer": {
//         "@type": "Organization",
//         "name": "Web3 Jharkhand"
//       },
//       "eventStatus": "https://schema.org/EventScheduled",
//       "eventAttendanceMode": event.location.includes('Online') || event.location.includes('Google Meet') 
//         ? "https://schema.org/OnlineEventAttendanceMode" 
//         : "https://schema.org/OfflineEventAttendanceMode",
//       "image": event.images.map(img => `${img}`),
//       "aggregateRating": {
//         "@type": "AggregateRating",
//         "ratingValue": event.rating,
//         "bestRating": "5",
//         "ratingCount": event.participants
//       }
//     }));

//     return {
//       "@context": "https://schema.org",
//       "@type": "EventSeries",
//       "name": "Web3 Jharkhand Events",
//       "description": "Join our workshops, seminars, hackathons, and networking events to learn, build, and connect with the Web3 community in Jharkhand.",
//       "organizer": {
//         "@type": "Organization",
//         "name": "Web3 Jharkhand",
//         "url": "https://web3jh.xyz"
//       },
//       "location": {
//         "@type": "Place",
//         "name": "Ranchi, Jharkhand",
//         "address": "Jharkhand, India"
//       },
//       "event": events
//     };
//   };

//   // const cardVariants: Variants = {
//   //   hidden: { 
//   //     opacity: 0, 
//   //     y: 20,
//   //     scale: 0.95 
//   //   },
//   //   visible: { 
//   //     opacity: 1, 
//   //     y: 0,
//   //     scale: 1,
//   //     transition: {
//   //       duration: 0.5,
//   //       ease: "easeOut"
//   //     }
//   //   }
//   // };

//   // const imageVariants: Variants = {
//   //   hidden: { 
//   //     opacity: 0, 
//   //     scale: 1.1 
//   //   },
//   //   visible: { 
//   //     opacity: 1, 
//   //     scale: 1,
//   //     transition: {
//   //       duration: 0.6,
//   //       ease: "easeOut"
//   //     }
//   //   },
//   //   hover: {
//   //     scale: 1.05,
//   //     transition: {
//   //       duration: 0.3,
//   //       ease: "easeInOut"
//   //     }
//   //   }
//   // };

//   // const [showAll, setShowAll] = useState(false)
//   // const eventsToShow = showAll ? pastEvents : pastEvents.slice(0, 4)

//   return (
//     <>
//       <Head>
//         <title>Web3, Blockchain and Crypto Events in Jharkhand | Workshops, Meetups & Conferences | Web3 Jharkhand</title>
//         <meta 
//           name="description" 
//           content="Join Web3 Jharkhand events including blockchain workshops, crypto meetups, DeFi seminars, and gaming nights. Connect with the largest Web3, Blockchain and Crypto community in Jharkhand. Free events in Ranchi, Jamshedpur, Dhanbad and more." 
//         />
//         <meta 
//           name="keywords" 
//           content="Web3 events Jharkhand, blockchain workshops Ranchi, crypto meetups Jamshedpur, DeFi seminars, Web3 community Jharkhand, blockchain education, cryptocurrency events India" 
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="canonical" href="https://web3jh.xyz/events" />
        
//         {/* Open Graph Tags */}
//         <meta property="og:title" content="Web3 Events in Jharkhand | Workshops, Meetups & Conferences" />
//         <meta property="og:description" content="Join Web3 Jharkhand events including blockchain workshops, crypto meetups, DeFi seminars, and gaming nights. Connect with the largest Web3 community in Jharkhand." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://web3jh.xyz/events" />
//         <meta property="og:image" content="https://web3jh.xyz/blockmeet_bitm00.png" />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="630" />
//         <meta property="og:site_name" content="Web3JH" />
//         <meta property="og:locale" content="en_IN" />
        
//         {/* Twitter Card Tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Web3 Events in Jharkhand | Workshops, Meetups & Conferences" />
//         <meta name="twitter:description" content="Join Web3 Jharkhand events including blockchain workshops, crypto meetups, DeFi seminars, and gaming nights." />
//         <meta name="twitter:image" content="https://web3jh.xyz/blockmeet_bitm00.png" />
        
//         {/* Additional SEO Meta Tags */}
//         <meta name="author" content="Subham Surana" />
//         <meta name="geo.region" content="IN-JH" />
//         <meta name="geo.placename" content="Jharkhand, India" />
//         <meta name="geo.position" content="23.6693;85.3206" />
//         <meta name="ICBM" content="23.6693, 85.3206" />
        
//         {/* Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(generateStructuredData())
//           }}
//         />
        
//         {/* Preconnect to external domains */}
//         <link rel="preconnect" href="https://lu.ma" />
//         <link rel="dns-prefetch" href="https://lu.ma" />
//       </Head>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
//         <Navigation />

//         {/* Hero Section */}
//         <section className="py-20 lg:py-32">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                 Our{' '}
//                 <span className="bg-gradient-to-r from-blue-600  to-pink-600 bg-clip-text text-transparent">
//                   Events
//                 </span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Join our workshops, seminars, hackathons, and networking events to learn, build, and connect 
//                 with the Web3 community in Jharkhand.
//               </p>
//             </div>

//             {/* Event Types Overview */}
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
//               {eventTypes.map((type, index) => (
//                 <Card key={index} className="text-center p-4">
//                   <Badge className={`${type.color} mb-2`}>{type.name}</Badge>
//                   <div className="text-2xl font-bold text-gray-900">{type.count}</div>
//                   <div className="text-sm text-gray-600">Events</div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Upcoming Events */}
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
//               <p className="text-xl text-gray-600">
//                 Don't miss out on these exciting learning opportunities
//               </p>
//             </div>
//             <div className="flex justify-center">
//               <div className="w-full max-w-3xl bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-4 md:p-6">
//                 <div className="w-full overflow-hidden rounded-2xl mb-4">
//                   <iframe
//                     src="https://lu.ma/embed/calendar/cal-miOEXbAnTmizYMu/events"
//                     className="w-full h-72 md:h-[360px]"
//                     frameBorder="0"
//                     style={{
//                       border: 'none',
//                       background: '#1a1a1a',
//                     }}
//                     allowFullScreen
//                     aria-hidden="false"
//                     tabIndex={0}
//                     title="Lu.ma Events Calendar"
//                   />
//                 </div>
                
//                 <div className="flex justify-center text-center">
//                   <Link href="https://lu.ma/web3jh" target="_blank" rel="noopener noreferrer">
//                     <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold border border-white/20 text-lg rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 no-underline text-center">
//                       Register for Event {' '}
//                       <span role="img" aria-label="check-mark-button" className="text-1xl">✅</span>
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {upcomingEvents.map((event, index) => (
//                 <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
//                   <CardHeader>
//                     <div className="flex items-center justify-between mb-2">
//                       <Badge variant={
//                         event.type === 'Workshop' ? 'default' :
//                         event.type === 'Seminar' ? 'secondary' :
//                         event.type === 'Webinar' ? 'outline' :
//                         event.type === 'Hackathon' ? 'destructive' : 'default'
//                       }>
//                         {event.type}
//                       </Badge>
//                       <Badge variant="outline">{event.price}</Badge>
//                     </div>
//                     <CardTitle className="text-lg">{event.title}</CardTitle>
//                     <CardDescription>{event.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-3 text-sm text-gray-600 mb-4">
//                       <div className="flex items-center space-x-2">
//                         <Calendar className="w-4 h-4" />
//                         <span>{new Date(event.date).toLocaleDateString('en-US', { 
//                           weekday: 'long', 
//                           year: 'numeric', 
//                           month: 'long', 
//                           day: 'numeric' 
//                         })}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Clock className="w-4 h-4" />
//                         <span>{event.time}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <MapPin className="w-4 h-4" />
//                         <span>{event.location}</span>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Users className="w-4 h-4" />
//                         <span>{event.registered}/{event.capacity} registered</span>
//                       </div>
//                     </div>

//                     <div className="mb-4">
//                       <div className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</div>
//                       <div className="flex flex-wrap gap-1">
//                         {event.topics.map((topic, topicIndex) => (
//                           <Badge key={topicIndex} variant="outline" className="text-xs">
//                             {topic}
//                           </Badge>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="text-sm text-gray-600 mb-4">
//                       <strong>Speaker:</strong> {event.speaker}
//                     </div>

//                     <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
//                       <div 
//                         className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" 
//                         style={{ width: `${(event.registered / event.capacity) * 100}%` }}
//                       ></div>
//                     </div>

//                     <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
//                       Register Now
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div> */}
//           </div>
//         </section>


//         {/* Past Events */}
//         {/* <section className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
//               <p className="text-xl text-gray-600">
//                 See what we've accomplished together
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {visibleEvents.map((event, index) => (
//                   <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
//                     <CardHeader>
//                       <div className="flex items-center justify-between mb-2">
//                         <Badge variant="secondary">{event.type}</Badge>
//                         <div className="flex items-center space-x-1">
//                           <span className="text-yellow-500">★</span>
//                           <span className="text-sm font-medium">{event.rating}</span>
//                         </div>
//                       </div>
//                       <CardTitle className="text-lg">{event.title}</CardTitle>
//                       <CardDescription>{event.description}</CardDescription>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-2 text-sm text-gray-600">
//                         <div className="flex items-center space-x-2">
//                           <Calendar className="w-4 h-4" />
//                           <span>{new Date(event.date).toLocaleDateString()}</span>
//                           <span>{event.date}</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <MapPin className="w-4 h-4" />
//                           <span>{event.location}</span>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <Users className="w-4 h-4" />
//                           <span>{event.participants} participants</span>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>

//               {hasMoreToShow && (
//                 <div className="text-center mt-12">
//                   <button
//                     onClick={handleShowMore}
//                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//                   >
//                     {isShowingAll ? 'Show Less' : 'Show More'}
//                     <span className="ml-2 text-sm text-blue-200">
//                       {isShowingAll 
//                         ? '' 
//                         : `(${Math.min(eventsPerLoad, pastEvents.length - visibleCount)} more)`
//                       }
//                     </span>
//                   </button>
//                 </div>
//               )}
//             </div>
            
//           </div>
//         </section> */}

//         <section ref={pastEventsRef} className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
//               <p className="text-xl text-gray-600">
//                 See what we've accomplished together
//               </p>
//             </div>
            
//             <div className="space-y-6">
//               <motion.div 
//                 className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {visibleEvents.map((event, index) => (
//                   <EventCard
//                     key={`${event.title}-${event.date}-${index}`}
//                     event={event}
//                     index={index}
//                     imageIndex={imageIndices[index] || 0}
//                     onImageNavigation={handleImageNavigation}
//                     onImageIndexChange={handleImageIndexChange}
//                   />
//                 ))}
//               </motion.div>

//               {hasMoreToShow && (
//                 <motion.div 
//                   className="text-center mt-12"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <motion.button
//                     onClick={handleShowMore}
//                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     aria-label={isShowingAll ? 'Show fewer events' : 'Show more events'}
//                   >
//                     {isShowingAll ? 'Show Less' : 'Show More'}
//                   </motion.button>
//                 </motion.div>
//               )}
//             </div>
//           </div>
//         </section>


//         {/* Event Newsletter CTA */}
//         <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Never Miss an Event
//             </h2>
//             <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
//               Subscribe to our Event Page and be the first to know about upcoming meetups, workshops, and hackathons.
//             </p>
//             <div className="flex text-center justify-center max-w-md mx-auto">
//               {/* <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
//               /> */}
//               <Link href="https://lu.ma/web3jh">
//               <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
//                 Subscribe {' '}
//                 <span role="img" aria-label="rocket" className="text-1xl">🚀</span>
//               </Button>
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

'use client';

import { Calendar, Clock, MapPin, Users, ExternalLink, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { publicAsset } from '@/lib/publicAsset';
import Link from 'next/link';
import Image from 'next/image';
import NextImage from 'next/image'
import Head from 'next/head';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useRef, useEffect, useCallback, memo } from 'react';

interface PastEvent {
  title: string;
  description?: string;
  date: string;
  location: string;
  type: string;
  participants: number;
  rating: number;
  images: string[];
}

interface EventType {
  name: string;
  count: number;
  color: string;
}

interface ImageIndices {
  [key: number]: number;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  className, 
  priority = false,
  onLoad,
  ...props 
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
  [key: string]: any;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Start as true if priority
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before image comes into view
        threshold: 0.1
      }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center p-4">
            <div className="w-8 h-8 mx-auto mb-2 opacity-50">📷</div>
            Image unavailable
          </div>
        </div>
      ) : (
        // Only render Image component when in view or priority
        isInView && (
          <Image
            src={publicAsset(src)}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-500 ${
              isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            } ${className || ''}`}
            priority={priority}
            onLoad={handleLoad}
            onError={handleError}
            quality={75} // Reduced from 85 for faster loading
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGw0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            unoptimized
            {...props}
          />
        )
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Memoized Event Card Component with Auto-Scrolling
const EventCard = memo(({ 
  event, 
  index, 
  imageIndex, 
  onImageNavigation, 
  onImageIndexChange 
}: {
  event: PastEvent;
  index: number;
  imageIndex: number;
  onImageNavigation: (eventIndex: number, direction: 'next' | 'prev') => void;
  onImageIndexChange: (eventIndex: number, imgIndex: number) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const preloadTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Preload current image immediately
    if (event.images[imageIndex] && !preloadedImages.has(event.images[imageIndex])) {
      const img = new window.Image();
      img.src = publicAsset(event.images[imageIndex]);
      img.onload = () => {
        setPreloadedImages(prev => new Set(prev).add(event.images[imageIndex]));
      };
    }

    // Preload next image after a delay to avoid blocking current image
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current);
    }

    preloadTimeoutRef.current = setTimeout(() => {
      const nextIndex = (imageIndex + 1) % event.images.length;
      const nextImage = event.images[nextIndex];
      
      if (nextImage && !preloadedImages.has(nextImage)) {
        const img = new window.Image();
        img.src = publicAsset(nextImage);
        img.onload = () => {
          setPreloadedImages(prev => new Set(prev).add(nextImage));
        };
      }
    }, 500); // Preload next image after 500ms

    return () => {
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current);
      }
    };
  }, [imageIndex, event.images, preloadedImages]);

  // Auto-scroll functionality
  useEffect(() => {
    // Only auto-scroll if there are multiple images
    if (event.images.length <= 1) return;
    
    const startAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
        if (!isHovered && !isPaused) {
          onImageNavigation(index, 'next');
        }
      }, 7000); // Change image every 3 seconds
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Start auto-scroll when component mounts
    startAutoScroll();

    // Cleanup on unmount
    return () => {
      stopAutoScroll();
    };
  }, [event.images.length, isHovered, isPaused, index, onImageNavigation]);

  // Handle mouse enter/leave for pausing auto-scroll
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Handle manual navigation (pause auto-scroll temporarily)
  const handleManualNavigation = useCallback((direction: 'next' | 'prev') => {
    setIsPaused(true);
    onImageNavigation(index, direction);
    
    // Resume auto-scroll after 5 seconds of no manual interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, [index, onImageNavigation]);

  const handleDotClick = useCallback((imgIndex: number) => {
    setIsPaused(true);
    onImageIndexChange(index, imgIndex);
    
    // Resume auto-scroll after 5 seconds of no manual interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, [index, onImageIndexChange]);

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full">
        {/* Event Image Carousel */}
        <div className="relative overflow-hidden h-48 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-${imageIndex}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover="hover"
              className="w-full h-full"
            >
              <OptimizedImage
                src={event.images[imageIndex]}
                alt={`${event.title} event in ${event.location} on ${event.date} - Image ${imageIndex + 1}`}
                priority={index < 4} // Prioritize first 4 images
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Auto-scroll indicator */}
          {/* {event.images.length > 1 && !isHovered && !isPaused && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-1 backdrop-blur-sm bg-black/20 text-white px-2 py-1 rounded-full text-xs">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Auto</span>
              </div>
            </div>
          )} */}
          
          {/* Event type badge */}
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="secondary" className="backdrop-blur-sm bg-white/90">
              {event.type}
            </Badge>
          </motion.div>

          {/* Image counter */}
          {/* {event.images.length > 1 && (
            <div className={`absolute ${event.images.length > 1 && !isHovered && !isPaused ? 'top-4 left-20' : 'top-4 left-4'} transition-all duration-300`}>
              <Badge variant="outline" className="backdrop-blur-sm bg-black/20 text-white border-white/30">
                {imageIndex + 1}/{event.images.length}
              </Badge>
            </div>
          )} */}

          {/* Navigation arrows - only show on hover */}
          {event.images.length > 1 && (
            <>
              <button
                onClick={() => handleManualNavigation('prev')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label={`Previous image for ${event.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleManualNavigation('next')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label={`Next image for ${event.title}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Progress bar for auto-scroll */}
          {/* {event.images.length > 1 && !isHovered && !isPaused && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
              <div 
                className="h-full bg-blue-500 transition-all duration-300 ease-linear"
                style={{
                  width: '100%',
                  animation: 'progress 3s linear infinite'
                }}
              />
            </div>
          )} */}

          {/* Image dots indicator */}
          {event.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {event.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => handleDotClick(imgIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    imageIndex === imgIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${imgIndex + 1} for ${event.title}`}
                />
              ))}
            </div>
          )}
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500" aria-label="Rating">★</span>
              <span className="text-sm font-medium">{event.rating}</span>
            </div>
          </div>
          <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
          <CardDescription className="line-clamp-2">{event.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <time dateTime={event.date} className="truncate">{event.date}</time>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>{event.participants} participants</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add CSS for progress bar animation */}
      {/* <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style> */}
    </motion.div>
  );
});

EventCard.displayName = 'EventCard';

export default function Events() {
  const pastEvents = [
    {
      title: 'Intro to Web3, Blockchain & Crypto',
      description: 'A beginner-friendly interactive session to help you get started in Web3!',
      date: '27th July 2025',
      location: 'Virtual',
      type: 'Webinar',
      participants: 182,
      rating: 4.9,
      images: [
        'intro_web3_blockchain.webp',
        'intro_web3_blockchain1.png'
      ]
    },
    {
      title: 'Avalanche Gaming Night - BloodLoop',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '12th July 2025',
      location: 'Dhanbad',
      type: 'Gaming Night',
      participants: 22,
      rating: 4.6,
      images: [
        'Avax_Gaming_Night_Dhanbad.webp',
        'dhanbad1.webp',
        'dhanbad2.webp',
        'dhanbad3.webp',
        'dhanbad4.webp',
        'dhanbad5.webp',
        'dhanbad6.webp',
        'dhanbad7.webp',
      ]
    },
    {
      title: 'Avalanche Gaming Night - BloodLoop',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '29th June 2025',
      location: 'Ranchi',
      type: 'Gaming Night',
      participants: 25,
      rating: 4.8,
      images: [
        'Avax_Gaming_Night_Ranchi.webp',
        'avax_rnc1.webp',
        'avax_rnc2.webp',
        'avax_rnc5.webp',
        'avax_rnc3.webp',
        'avax_rnc4.webp'
      ]
    },
    {
      title: 'Avalanche Gaming Night - BloodLoop',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '28th June 2025',
      location: 'Jamshedpur',
      type: 'Gaming Night',
      participants: 19,
      rating: 4.2,
      images: [
        'Avax_Gaming_Night_Jamshedpur.webp',
        'avax_jsr1.webp',
        'avax_jsr2.webp',
        'avax_jsr.webp'
      ]
    },
    {
      title: 'Vibe Coding Jam - AI x Web3',
      description: 'Build production-ready decentralized applications or smart contracts in Minutes using AI',
      date: '15th June 2025',
      location: 'Google Meet',
      type: 'Workshop',
      participants: 97,
      rating: 5,
      images: [
        'vibe-coding-jam.webp'
      ]
    },
    {
      title: 'Bitcoin Pizza Day 🍕',
      description: 'Celebrate the legendary day with Bitcoin fam across Jharkhand when 2 pizzas made Bitcoin history!',
      date: '22nd May 2025',
      location: 'Ranchi',
      type: 'Meetup',
      participants: 25,
      rating: 4.8,
      images: [
        'btc-pizza-day-1.webp',
        'btc-pizza-day-2.webp',
        'btc-pizza-day-3.webp'
      ]
    },
    {
      title: 'Avalanche Web3 Gaming Night',
      description: 'An electrifying evening filled with immersive gameplay and networking to provide you the Ultimate Web3 Gaming Experience!',
      date: '12th April 2025',
      location: 'Ranchi',
      type: 'Gaming Night',
      participants: 21,
      rating: 4.4,
      images: [
        'avalanche-gaming.webp'
      ]
    },
    {
      title: 'Shardeum Road Show',
      date: '20th Oct 2024',
      location: 'BIT Mesra, Ranchi',
      type: 'Conference',
      participants: 210,
      rating: 4.7,
      images: [
        'shm-road-show-1.webp',
        'shm-road-show-2.webp',
        'shm-road-show-3.webp'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 8th Edition',
      description: 'Connect, learn and grow your network in Web3 space!',
      date: '11th Feb 2024',
      location: 'Ranchi',
      type: 'Meetup',
      participants: 41,
      rating: 4.1,
      images: [
        'blockmeet_2024.webp',
        'blockmeet_grow.webp',
        'blockmeet_grow1.webp',
        'blockmeet_grow2.webp',
        'blockmeet_grow3.webp',
        'blockmeet_grow4.webp',
      ]
    },
    {
      title: 'Deploy Your First DApp @Shardeum',
      description: 'Learn basics of Web3, followed by hands-on programming on Solidity and deploy dApp on Sphinx!',
      date: '6th Nov 2023',
      location: 'NIAMT Ranchi (NIFFT)',
      type: 'Workshop',
      participants: 117,
      rating: 4.7,
      images: [
        'deploy_dapp_shardeum.webp'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 7th Edition',
      description: 'Intro to DeFi and how Bitcoin is revolutionizing the finance industry!',
      date: '27th October 2023',
      location: 'BIT Mesra, Ranchi',
      type: 'Conference',
      participants: 133,
      rating: 4.6,
      images: [
        'blockmeet-bitm-new.webp',
        'blockmeet-bitm-new1.webp',
        'blockmeet-bitm-new2.webp',
        'blockmeet-bitm-new3.webp',
        'blockmeet-bitm-new4.webp'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 6th Edition',
      description: 'Intro to Web3 and Career Opportunities in Blockchain space!',
      date: '26th August 2023',
      location: 'BIT Mesra, Ranchi',
      type: 'Seminar',
      participants: 327,
      rating: 4.9,
      images: [
        'blockmeet_bitm00.webp',
        'blockmeet-bitm0.webp',
        'blockmeet-bitm.webp',
        'blockmeet-bitm1.webp',
        'blockmeet-bitm2.webp',
        'blockmeet-bitm3.webp',
        'blockmeet-bitm4.webp',
      ]
    },
    {
      title: 'Blockmeet Ranchi - 5th Edition',
      description: 'How to start your journey in Web3, learn about DAOs and claim your POAP!',
      date: '17th June 2023',
      location: 'BIT Mesra, Ranchi',
      type: 'Meetup',
      participants: 33,
      rating: 4.6,
      images: [
        'blockmeet_june.webp',
        'blockmeet_june1.webp',
      ]
    },
    {
      title: 'Shardeum Web3 Meetup',
      description: 'Intro to Blockchain followed by hand-on session to claim $SHM tokens & mint NFTs',
      date: '14th May 2023',
      location: 'NIAMT Ranchi',
      type: 'Meetup',
      participants: 170,
      rating: 4.5,
      images: [
        'shardeum_meetup_poster.webp',
        'shardeum_meetup1.webp',
        'shardeum_meetup2.webp',
        'shardeum_meetup3.webp',
        'shardeum_meetup4.webp',
        'shardeum_meetup5.webp',
        'shardeum_meetup6.webp',
      ]
    },
    {
      title: 'Blockmeet Ranchi - 4th Edition',
      description: 'Intro to Web3 and Blockchain followed by a panel of founders and CxOs building in Web3 space!',
      date: '15th April 2023',
      location: 'IIIT Ranchi',
      type: 'Seminar',
      participants: 206,
      rating: 4.8,
      images: [
        'blockmeet_iiit_poster.webp',
        'blockmeet_iiit.webp',
        'blockmeet_iiit2.webp',
        'blockmeet_iiit2_5.webp',
        'blockmeet_iiit3.webp',
        'blockmeet_iiit4.webp'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 3rd Edition',
      description: 'Intro to Web3, Blockchain and Crypto!',
      date: '18th March 2023',
      location: 'IIIT Ranchi',
      type: 'Workshop',
      participants: 48,
      rating: 5.0,
      images: [
        'blockmeet_mar_poster.webp',
        'blockmeet_mar.webp',
        'blockmeet_mar1.webp',
        'blockmeet_mar2.webp',
        'blockmeet_mar3.webp',
      ]
    },
    {
      title: 'Blockmeet Ranchi - 2nd Edition',
      description: 'Intro to Web3 and Community Building',
      date: '18th Feb 2023',
      location: 'Krishna Inn Hotel, Ranchi',
      type: 'Meetup',
      participants: 5,
      rating: 4.3,
      images: [
        'blockmeet_feb.webp',
        'blockmeet_feb_1.webp',
        'blockmeet_feb_2.webp'
      ]
    },
    {
      title: 'Blockmeet Ranchi - 1st Edition',
      description: 'What is Blockchain and how to start your career as a blockchain developer',
      date: '21st Jan 2023',
      location: 'Ranchi',
      type: 'Meetup',
      participants: 21,
      rating: 4.1,
      images: [
        'blockmeet_other.webp',
        'blockmeet_other1.webp',
        'blockmeet_other2.webp',
        'blockmeet_other3.webp',
      ]
    },
  ];

  const eventTypes = [
    { name: 'Webinar', count: 5, color: 'bg-blue-100 text-blue-800' },
    { name: 'Seminar', count: 2, color: 'bg-green-100 text-green-800' },
    { name: 'IRL Meetup', count: 16, color: 'bg-purple-100 text-purple-800' },
    { name: 'Gaming Night', count: 4, color: 'bg-red-100 text-red-800' },
    { name: 'Workshop', count: 3, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Conference', count: 2, color: 'bg-indigo-100 text-indigo-800' }
  ];

  const [visibleCount, setVisibleCount] = useState<number>(4);
  const [imageIndices, setImageIndices] = useState<ImageIndices>({});
  const eventsPerLoad = 4;
  const pastEventsRef = useRef<HTMLElement>(null);
  
  // Calculate visibleEvents before defining callbacks
  const visibleEvents = pastEvents.slice(0, visibleCount);
  const isShowingAll = visibleCount >= pastEvents.length;
  const hasMoreToShow = pastEvents.length > 4;
  
  const handleShowMore = useCallback(() => {
    if (visibleCount >= pastEvents.length) {
      // Show less - collapse back to first 4 and scroll to past events heading
      setVisibleCount(4);
      // Smooth scroll to past events section
      pastEventsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Show more - add 4 more events
      setVisibleCount(prev => Math.min(prev + eventsPerLoad, pastEvents.length));
    }
  }, [visibleCount, pastEvents.length, eventsPerLoad]);

  const handleImageNavigation = useCallback((eventIndex: number, direction: 'next' | 'prev'): void => {
    setImageIndices(prev => {
      const currentIndex = prev[eventIndex] || 0;
      const event = visibleEvents[eventIndex];
      
      // Add safety check
      if (!event || !event.images) {
        console.warn(`Event at index ${eventIndex} is undefined or has no images`);
        return prev;
      }
      
      const maxIndex = event.images.length - 1;
      
      let newIndex;
      if (direction === 'next') {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
      }
      
      return {
        ...prev,
        [eventIndex]: newIndex
      };
    });
  }, [visibleEvents]); // Add visibleEvents to dependency array

  const handleImageIndexChange = useCallback((eventIndex: number, imgIndex: number) => {
    setImageIndices(prev => ({
      ...prev,
      [eventIndex]: imgIndex
    }));
  }, []);

  // Animation variants for the photo gallery
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    const preloadImages = () => {
      pastEvents.slice(0, 4).forEach(event => {
        if (event.images[0]) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = `${event.images[0]}`;
          document.head.appendChild(link);
        }
      });
    };

    preloadImages();
  }, []);

  const generateStructuredData = () => {
    const events = pastEvents.map(event => ({
      "@type": "Event",
      "name": event.title,
      "description": event.description || `Join us for ${event.title} in ${event.location}`,
      "startDate": event.date,
      "location": {
        "@type": "Place",
        "name": event.location,
        "address": event.location
      },
      "organizer": {
        "@type": "Organization",
        "name": "Web3 Jharkhand"
      },
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": event.location.includes('Online') || event.location.includes('Google Meet') 
        ? "https://schema.org/OnlineEventAttendanceMode" 
        : "https://schema.org/OfflineEventAttendanceMode",
      "image": event.images.map(img => `${img}`),
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": event.rating,
        "bestRating": "5",
        "ratingCount": event.participants
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      "name": "Web3 Jharkhand Events",
      "description": "Join our workshops, seminars, hackathons, and networking events to learn, build, and connect with the Web3 community in Jharkhand.",
      "organizer": {
        "@type": "Organization",
        "name": "Web3 Jharkhand",
        "url": "https://web3jh.xyz"
      },
      "location": {
        "@type": "Place",
        "name": "Ranchi, Jharkhand",
        "address": "Jharkhand, India"
      },
      "event": events
    };
  };

  return (
    <>
      <Head>
        <title>Web3, Blockchain and Crypto Events in Jharkhand | Workshops, Meetups & Conferences | Web3 Jharkhand</title>
        <meta 
          name="description" 
          content="Join Web3 Jharkhand events including blockchain workshops, crypto meetups, DeFi seminars, and gaming nights. Connect with the largest Web3, Blockchain and Crypto community in Jharkhand. Free events in Ranchi, Jamshedpur, Dhanbad and more." 
        />
        <meta 
          name="keywords" 
          content="Web3 events Jharkhand, blockchain workshops Ranchi, crypto meetups Jamshedpur, DeFi seminars, Web3 community Jharkhand, blockchain education, cryptocurrency events India" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://web3jh.xyz/events" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Web3 Events in Jharkhand | Workshops, Meetups & Conferences" />
        <meta property="og:description" content="Join Web3 Jharkhand events including blockchain workshops, crypto meetups, DeFi seminars, and gaming nights. Connect with the largest Web3 community in Jharkhand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web3jh.xyz/events" />
        <meta property="og:image" content="https://web3jh.xyz/preview.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Web3JH" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3 Events in Jharkhand | Workshops, Meetups & Conferences" />
        <meta name="twitter:description" content="Join Web3 Jharkhand events including blockchain workshops, crypto meetups, DeFi seminars, and gaming nights." />
        <meta name="twitter:image" content="https://web3jh.xyz/preview.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Subham Surana" />
        <meta name="geo.region" content="IN-JH" />
        <meta name="geo.placename" content="Jharkhand, India" />
        <meta name="geo.position" content="23.6693;85.3206" />
        <meta name="ICBM" content="23.6693, 85.3206" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData())
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://lu.ma" />
        <link rel="dns-prefetch" href="https://lu.ma" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-blue-600  to-pink-600 bg-clip-text text-transparent">
                  Events
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join our workshops, seminars, hackathons, and networking events to learn, build, and connect 
                with the Web3 community in Jharkhand.
              </p>
            </div>

            {/* Event Types Overview */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {eventTypes.map((type, index) => (
                <Card key={index} className="text-center p-4">
                  <Badge className={`${type.color} mb-2`}>{type.name}</Badge>
                  <div className="text-2xl font-bold text-gray-900">{type.count}</div>
                  <div className="text-sm text-gray-600">Events</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">
                Don't miss out on these exciting learning opportunities
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-3xl bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-4 md:p-6">
                <div className="w-full overflow-hidden rounded-2xl mb-4">
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-miOEXbAnTmizYMu/events"
                    className="w-full h-72 md:h-[360px]"
                    frameBorder="0"
                    style={{
                      border: 'none',
                      background: '#1a1a1a',
                    }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    title="Lu.ma Events Calendar"
                  />
                </div>
                
                <div className="flex justify-center text-center">
                  <Link href="https://lu.ma/web3jh" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold border border-white/20 text-lg rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 no-underline text-center">
                      Register for Event {' '}
                      <span role="img" aria-label="check-mark-button" className="text-1xl">✅</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={pastEventsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
              <p className="text-xl text-gray-600">
                See what we've accomplished together
              </p>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {visibleEvents.map((event, index) => (
                  <EventCard
                    key={`${event.title}-${event.date}-${index}`}
                    event={event}
                    index={index}
                    imageIndex={imageIndices[index] || 0}
                    onImageNavigation={handleImageNavigation}
                    onImageIndexChange={handleImageIndexChange}
                  />
                ))}
              </motion.div>

              {hasMoreToShow && (
                <motion.div 
                  className="text-center mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={handleShowMore}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={isShowingAll ? 'Show fewer events' : 'Show more events'}
                  >
                    {isShowingAll ? 'Show Less' : 'Show More'}
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Event Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Never Miss an Event
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our Event Page and be the first to know about upcoming meetups, workshops, and hackathons.
            </p>
            <div className="flex text-center justify-center max-w-md mx-auto">
              <Link href="https://lu.ma/web3jh">
              <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
                Subscribe {' '}
                <span role="img" aria-label="rocket" className="text-1xl">🚀</span>
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
