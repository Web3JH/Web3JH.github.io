'use client';

import { useState, useEffect } from 'react';
import { Users, GraduationCap, MapPin, Calendar, ExternalLink, Github, Twitter, Linkedin, Globe, Award, Heart, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { publicAsset } from '@/lib/publicAsset';

export default function Community() {

  const [isLoading, setIsLoading] = useState(true);
    const [imageErrors, setImageErrors] = useState(new Set());
  
    useEffect(() => {
      // Preload critical images
      const criticalImages = [
        '/Asset 1 21.png',
        '/Web3 JharkhandHomePage.png',
        '/avax_rnc1.webp'
      ];
  
      const imagePromises = criticalImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = publicAsset(src);
        });
      });
  
      Promise.allSettled(imagePromises).then(() => {
        setIsLoading(false);
      });
    }, []);

  const colleges = [
    { 
      name: 'BIT Mesra', 
      location: 'Ranchi', 
      members: '600+', 
      status: 'Active',
      description: 'Established in 1955, BIT Mesra was founded with a clear vision to offer its young minds a space, where their imagination could take wings and their ideas fruition.'
    },
    { 
      name: 'IIIT Ranchi', 
      location: 'Ranchi', 
      members: '100+', 
      status: 'Active',
      description: 'Established in 2016, IIIT Ranchi is committed to nurture future-ready professionals with the necessary skills, knowledge and mindset to excel.'
    },
    { 
      name: 'NIAMT Ranchi (NIFFT)', 
      location: 'Ranchi', 
      members: '150+', 
      status: 'Active',
      description: 'Established in 1966, NIAMT (formerly NIFFT) aims to act as repository and leader for disseminating state-of-the art knowledge.'
    },
    { 
      name: 'Sarla Birla University', 
      location: 'Ranchi', 
      members: '70+', 
      status: 'Active',
      description: 'Established in 2017, SBU Ranchi aims to create new benchmarks for quality education in various fields viz. Technical, Professional, etc.'
    },
    { 
      name: 'BIT Lalpur', 
      location: 'Lalpur', 
      members: '80+', 
      status: 'Active',
      description: 'Established in 1998, BIT Lalpur focus on developing innovative thinking among students and nurturing next-generation leaders on industry-driven curriculum '
    },
    { 
      name: 'Arka Jain University', 
      location: 'Jamshedpur', 
      members: '100+', 
      status: 'Growing',
      description: 'Established in 2017, AJU aims to develop human capital - creating spirited learning environment by empowering the students with knowledge and skills'
    },
    { 
      name: 'BIT Sindri', 
      location: 'Dhanbad', 
      members: '50+', 
      status: 'Growing',
      description: 'Established in 1950, BIT Sindri aim to provide the valuable human resources for the industry and society through the excellence in technical education'
    },
    { 
      name: 'Amity University', 
      location: 'Ranchi', 
      members: '25+', 
      status: 'New',
      description: 'Established in 2016, AUJ Ranchi aims to disseminate and advance knowledge and skill by providing instructional, research, and extension facilities'
    }
  ];

  const partners = [
    { 
      name: 'Polygon', 
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=100&fit=crop', 
      type: 'Blockchain',
      description: 'Supporting our scaling solutions workshops'
    },
    { 
      name: 'Ethereum Foundation', 
      logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop', 
      type: 'Foundation',
      description: 'Funding our educational initiatives'
    },
    { 
      name: 'Solana', 
      logo: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?w=200&h=100&fit=crop', 
      type: 'Blockchain',
      description: 'High-performance blockchain development training'
    },
    { 
      name: 'Chainlink', 
      logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop', 
      type: 'Oracle',
      description: 'Oracle integration and data feeds workshops'
    },
    { 
      name: 'Uniswap', 
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=100&fit=crop', 
      type: 'DeFi',
      description: 'DeFi protocol development mentorship'
    },
    { 
      name: 'IPFS', 
      logo: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=100&fit=crop', 
      type: 'Storage',
      description: 'Decentralized storage solutions training'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with 1,000+ like-minded developers, entrepreneurs, and blockchain enthusiasts'
    },
    {
      icon: GraduationCap,
      title: 'Learning',
      description: 'Access to exclusive workshops, meetups, masterclasses and certification programs'
    },
    {
      icon: Award,
      title: 'Opportunities',
      description: 'Job placements, internships, and project collaborations with partner companies'
    },
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'Participate in international hackathons and global Web3 conferences'
    },
    {
      icon: Heart,
      title: 'Mentorship',
      description: 'One-on-one guidance from industry experts and successful alumni'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Work on cutting-edge projects and contribute to open-source initiatives'
    }
  ];

  const communityStats = [
    { label: 'Total Members', value: '1,000+' },
    { label: 'College Chapters', value: '8' },
    { label: 'Cities Covered', value: '5+' },
    { label: 'Total Events', value: '25+' },
    { label: 'Industry Partners', value: '10+' },
    { label: 'Projects Completed', value: '5+' }
  ];

  const partnerImages  = [
    { src: "/foundership_logo.png", alt: "Foundership"},
    { src: "/solanaLogo 1.png", alt: "Solana" },
    { src: "/tezos-india-logo 1.png", alt: "Tezos India" },
    { src: "/AvalancheLogo_Horizontal_4C_Primary_KO.png", alt: "Avalanche" },
    { src: "/Ascendex.png", alt: "AscendEx - Crypto Exchange Partner" },
    { src: "/Shardeum-768x432-PhotoRoom 1.png", alt: "Shardeum - Blockchain Partner" },
    { src: "/dapps 1.png", alt: "DApps.co - Decentralized Applications Partner" },
    { src: "/Group-4-7-1024x248.png", alt: "NomoEx" },
    { src: "/trans. (white)(horizontal).png", alt: "Paycoin Capital" },
    { src: "/bg_black_small-removebg-preview 1.png", alt: "DEVs Dungeon - Developer Community" },
    { src: "/20230810_173627_0001-removebg-preview 1.png", alt: "Techavtar" },
    { src: "/White H.png", alt: "Strix media" },
    { src: "/image 9.png", alt: "Zuraverse" }
  ];

  const slideWidth = 350;
  const gap = 30;

  const trainImages = [...partnerImages , ...partnerImages ];
  const totalWidth = partnerImages.length * (slideWidth + gap);

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600  to-pink-600 bg-clip-text text-transparent">
                Community
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
              Join Jharkhand's most vibrant Web3 community. Connect, learn, and build the future of 
              decentralized technology with passionate developers and innovators.
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300">
                <div className="text-2xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* College Chapters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our College Chapters</h2>
            <p className="text-xl text-gray-600">
              Active communities across Jharkhand's premier institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colleges.map((college, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <GraduationCap className="w-8 h-8 text-purple-600" />
                    <Badge variant={
                      college.status === 'Active' ? 'default' : 
                      college.status === 'Growing' ? 'secondary' : 'outline'
                    }>
                      {college.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{college.name}</CardTitle>
                  <CardDescription>{college.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{college.members} members</span>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>Est. {college.established}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>Led by {college.lead}</span>
                    </div> */}
                  </div>
                  {/* <Button className="w-full mt-4" variant="outline">
                    Join Chapter
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Our Community?</h2>
            <p className="text-xl text-gray-600">
              Discover the benefits of being part of Jharkhand's premier Web3 community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Partners</h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading Web3 organizations worldwide
            </p>
          </div>
          <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-6xl mx-auto">
              <div className="overflow-hidden relative h-56">
                <div
                  className="flex absolute"
                  style={{ 
                    width: totalWidth * 2,
                    gap: `${gap}px`
                  }}
                >
                  <motion.div
                  className="flex absolute"
                  animate={{ x: [0, -totalWidth] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 18,
                      ease: 'linear'
                    }
                  }}
                >
                  {trainImages.map((partner, idx) => (
                    <div
                      key={`${partner.src}-${idx}`}
                      className="flex items-center justify-center rounded-3xl bg-gray-800 border-2 border-gray-700"
                      style={{
                        width: slideWidth,
                        height: '200px',
                        // background: '#181818',
                        // border: '3px solid #222',
                        boxShadow: '0 6px 30px rgba(46,143,255,0.15), 0 2px 6px rgba(0,0,0,0.1)',
                        transition: 'box-shadow 0.3s'
                      }}
                    >
                      {/* <img
                        src={src}
                        alt={`Partner ${idx % images.length + 1}`}
                        style={{
                          width: '95%',
                          height: '85%',
                          objectFit: 'contain',
                          borderRadius: '1rem',
                          background: '#222'
                        }}
                      /> */}
                      {!imageErrors.has(partner.src) ? (
                          <Image
                            src={publicAsset(partner.src)}
                            alt={partner.alt}
                            width={320}
                            height={170}
                            className="object-contain rounded-xl bg-gray-900"
                            style={{
                              width: '95%',
                              height: '85%',
                            }}
                            loading="lazy"
                            onError={() => handleImageError(partner.src)}
                          />
                        ) : (
                          <div className="text-white text-center p-4">
                            <div className="text-gray-400">Partner Logo</div>
                          </div>
                        )}
                    </div>
                  ))}
                </motion.div> 
                </div>
                
              </div>
            </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <img
                    src={publicAsset(partner.logo)}
                    alt={partner.name}
                    className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <Badge variant="secondary" className="mb-2">{partner.type}</Badge>
                  <p className="text-xs text-gray-600">{partner.description}</p>
                </div>
              </Card>
            ))}
          </div> */}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Connect with passionate developers, learn from industry experts, and build the future of Web3 in Jharkhand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://chat.whatsapp.com/D1sSYDN7Lxn7ZUvfxoBAUi">
              <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
                Join Our Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://x.com/web3jh">
              <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
                Follow on Twitter
                <Twitter className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}
