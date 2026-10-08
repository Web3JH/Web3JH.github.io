'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, CheckCircle, Users, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { publicAsset } from '@/lib/publicAsset';

export default function Home() {

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

  const stats = [
    { label: 'Active Members', value: '1,000+', icon: Users },
    { label: 'College Chapters', value: '8', icon: Globe },
    { label: 'Events Hosted', value: '20+', icon: Calendar },
    { label: 'Projects Built', value: '5+', icon: Heart },
  ];

  const highlights = [
    {
      title: 'Educational Workshops',
      description: 'Regular hands-on workshops on blockchain development, smart contracts, dApps and DeFi protocols',
      icon: '🎓'
    },
    {
      title: 'Industry Partnerships',
      description: 'Collaborations with leading Web3 companies, communities and blockchain foundations worldwide',
      icon: '🤝'
    },
    {
      title: 'Student Community',
      description: 'Active student chapters in premier institutions across Jharkhand fostering innovation',
      icon: '👥'
    },
    {
      title: 'Real Projects',
      description: 'Building practical blockchain and decentealised solutions addressing local and global challenges',
      icon: '🚀'
    }
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web3JH | India's Leading Web3 & Blockchain Community",
    "description": "India's leading Web3 & Blockchain community based in Jharkhand. Empowering developers, crypto enthusiasts, and startups to build decentralized applications.",
    "url": "https://web3jh.xyz",
    "logo": "https://web3jh.xyz/Web3JH_512.png",
    "foundingDate": "2022",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Jharkhand",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://chat.whatsapp.com/D1sSYDN7Lxn7ZUvfxoBAUi",
      "https://lu.ma/web3jh"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Global Web3 Community"
    }
  };

  const responsiveStyles = `
  @media (max-width: 1024px) {
    .support-us-card {
      flex-direction: column !important;
      padding: 2.5rem 1.5rem !important;
      gap: 2rem !important;
      max-width: 98vw !important;
    }
    .support-us-image {
      max-width: 320px !important;
      min-width: 180px !important;
      margin-bottom: 1.5rem !important;
    }
    .support-us-content {
      width: 100% !important;
      min-width: unset !important;
    }
  }
  @media (max-width: 600px) {
    .support-us-card {
      padding: 1.2rem 0.5rem !important;
      border-radius: 1.2rem !important;
    }
    .support-us-image {
      max-width: 200px !important;
      min-width: 120px !important;
      border-radius: 1rem !important;
    }
    .support-us-content h2 {
      font-size: 2rem !important;
    }
    .support-us-content p {
      font-size: 1.05rem !important;
    }
    .support-us-content a {
      font-size: 1rem !important;
      padding: 0.8rem 1.3rem !important;
      min-width: 120px !important;
    }
  }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      <header className="relative z-50">
        <Navigation />
      </header>

      <main>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      )}

      {/* Hero Section */}
      {/* <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Web3 in Jharkhand
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join Jharkhand's premier Web3 community. We're connecting students, developers, and innovators 
              to build decentralized solutions for tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative pt-24 z-10 min-h-screen bg-white overflow-hidden" id="home">

        <div className="absolute inset-0 z-0">
          <Image
            src={publicAsset('/Asset 1 21.png')}
            alt="Hero Globe"
            // className="w-full h-full object-cover object-center"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            onError={() => handleImageError('/Asset 1 21.png')}
          />

          <div className="absolute inset-0 bg-white/10 md:bg-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-pink-600">EMPOWERING</span> <br />
              <span className="text-blue-600">JHARKHAND</span>{" "}
              <span className="text-black">THROUGH</span><br />
              <span className="text-green-600">WEB3</span>{" "}
              <span className="text-black">INNOVATION{" "}</span>
              <span role="img" aria-label="rocket" className="text-4xl">🚀</span>
            </h1>
            {/* <p className="text-xl text-gray-700 mt-4">
              (a decentralized ecosystem)
            </p> */}

            <Link href="https://chat.whatsapp.com/D1sSYDN7Lxn7ZUvfxoBAUi">
              <Button 
                size="lg" 
                className="inline-flex items-center mt-8 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 no-underline"
              >
                Join Us <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Us Section */}
      <section id="about" className="py-52 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="text-center mb-2">
            <h2 className="text-4xl md:text-5xl text-gray-900 font-bold mb-8">
              About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-2 items-start">
            <div className="mt-16">
              <p className="text-xl text-gray-600 max-w-3xl">
                <b>Web3JH</b> was founded with a bold vision — to position Jharkhand 
                as a leading hub for Web3 innovation and digital empowerment in India.
                <br/><br/>
                Through community-driven initiatives and hands-on experiences, Web3JH is fostering 
                awareness and adoption of blockchain, cryptocurrencies, NFTs, DeFi, DAOs, and the 
                broader Web3 landscape. 
                <br/><br/>
                {/* Our goal is to bridge the gap between grassroots talent and the global Web3 movement 
                by nurturing a space where curiosity meets creation, and where collaboration leads to 
                meaningful impact. We are building a vibrant, inclusive ecosystem where students, developers, 
                and tech enthusiasts can connect, learn, build, and unlock global opportunities 
                in the world of decentralized technologies. */}
                At Web3JH, we believe that the future of the internet is
                decentralized and we are shaping it right from the heart of Jharkhand {' '}
                <span role="img" aria-label="pink-heart" className="text-2xl">🩷</span>
              </p>
            </div>

            <div className="flex justify-center -mt-2">
              {/* <img
                src={publicAsset('/Web3 JharkhandHomePage.png')}
                alt="Web3 Jharkhand Community"
                className="w-full h-full object-cover"
              /> */}
              <Image
                src={publicAsset('/Web3 JharkhandHomePage.png')}
                alt="Web3JH community members collaborating on blockchain projects in Jharkhand"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                loading="lazy"
                
                onError={() => handleImageError('/Web3 JharkhandHomePage.png')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the next generation of Web3 innovators through education, collaboration, and real-world projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Main Events Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Our Upcoming Events
            </h2>
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
                  title="Web3JH Events Calendar - Upcoming Web3 Meetups and Workshops"
                />
              </div>
              
              <div className="flex justify-center text-center">
                <Link href="https://lu.ma/web3jh" aria-label="Register for upcoming Web3JH events">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold border border-white/20 text-lg rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-blue-700 no-underline text-center">
                    Register for Event {' '}
                    <span role="img" aria-label="check-mark-button" className="text-1xl">✅</span>
                  </Button>
                </Link>
                {/* <a
                  href="https://lu.ma/web3jh"
                  className="bg-gradient-to-r from-purple-200 to-blue-200 text-blue-700 font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-300 hover:to-blue-200 no-underline text-center"
                  data-luma-action="checkout"
                  data-luma-event-id="evt-vtGW9spRIQkW1ve"
                >
                  Register for Event {' '}
                  <span role="img" aria-label="check-mark-button" className="text-2xl">✅</span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Partners */}
      {/* <section className="py-15 bg-gray-50">
        <div style={{
              minHeight: '100vh',
              width: '100vw',
              background: '#f7f8fa',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
               <h2
              className="head-events"
              style={{
                fontSize: '2.25rem',
                fontWeight: 700,
                textAlign: 'center',
                letterSpacing: '1.5px',
                margin: '2.5rem 0 0.7rem 0',
                color: '#111827',
                textShadow: '0 2px 8px #bfcbdacc',
              }}
            >
                Our Global Partners
              </h2>
              <div style={{
                color: 'black',
                fontSize: '1.5rem',
                fontWeight: 500,
                marginBottom: '2rem',
                textAlign: 'center',
                letterSpacing: '1px'
              }}>
                Brands we have worked with
              </div>
              <div
                style={{
                  background: 'rgba(255,255,255,0.98)',
                  borderRadius: '2rem',
                  boxShadow: '0 8px 40px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.04) inset',
                  border: '2px solid rgba(0,0,0,0.05)',
                  padding: '3rem 2.5rem',
                  maxWidth: slideWidth * 4 + 96,
                  width: '90vw',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'box-shadow 0.3s',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  width: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '220px'
                }}>
                  <motion.div
                    style={{
                      display: 'flex',
                      gap: `${gap}px`,
                      width: totalWidth * 2,
                      position: 'absolute',
                      left: 0,
                      top: 0
                    }}
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
                    {trainImages.map((src, idx) => (
                      <div
                        key={src + idx}
                        style={{
                          width: slideWidth,
                          height: '200px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#181818',
                          borderRadius: '1.5rem',
                          border: '3px solid #222',
                          boxShadow: '0 6px 30px rgba(46,143,255,0.15), 0 2px 6px rgba(0,0,0,0.1)',
                          transition: 'box-shadow 0.3s'
                        }}
                      >
                        <img
                          src={publicAsset(src)}
                          alt={`Partner ${idx % images.length}`}
                          style={{
                            width: '95%',
                            height: '85%',
                            objectFit: 'contain',
                            borderRadius: '1rem',
                            background: '#222'
                          }}
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
        </div>
      </section> */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Global Partners
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Collaborating with leading Web3 organizations worldwide
            </p>
            
            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 max-w-6xl mx-auto">
              <div className="overflow-hidden relative h-56">
                {/* If you have framer-motion installed, use this animated version */}
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
                

                {/* Static version without animation (if framer-motion is not installed) */}
                {/* <div className="flex gap-6 justify-center items-center flex-wrap">
                  {images.map((src, idx) => (
                    <div
                      key={`partner-${idx}`}
                      className="bg-gray-900 rounded-2xl border-2 border-gray-700 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
                      style={{ width: slideWidth, height: '200px' }}
                    >
                      <img
                        src={src}
                        alt={`Partner ${idx + 1}`}
                        className="w-11/12 h-5/6 object-contain rounded-xl bg-gray-800"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
            
      {/* Support Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Top Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            Support Us
          </h2>

          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-3xl shadow-xl border border-gray-200 max-w-6xl w-full">
              <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16 gap-8 lg:gap-14">
                {/* Left: Image */}
                <div className="flex-1 lg:flex-initial lg:w-2/5">
                  <Image
                    src={publicAsset('/avax_rnc1.webp')}
                    alt="Web3JH team at Avalanche event - supporting blockchain innovation in Jharkhand"
                    width={500}
                    height={400}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => handleImageError('/avax_rnc1.webp')}
                  />
                </div>

                {/* Right: Content and Buttons */}
                <div className="flex-1 lg:w-3/5 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6">
                    Support Web3JH{' '}
                    <span role="img" aria-label="blue heart" className="text-3x2">💙</span>
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 font-medium mb-8 leading-relaxed">
                    Support India's leading Web3 Community empowering Jharkhand with Web3 innovation{' '}
                    <span role="img" aria-label="rocket" className="text-2xl">🚀</span>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="mailto:web3jh@gmail.com">
                      <Button size="lg" className="bg-gradient-to-r from-purple-200 to-blue-200 text-blue-700 font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-300 hover:to-blue-200 no-underline text-center">
                        Sponsor our Next Event {' '}
                        <span role="img" aria-label="folded-hands" className="text-2xl">🙏</span>
                      </Button>
                    </Link>
                    <Link href="mailto:web3jh@gmail.com">
                      <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 no-underline text-center">
                        Get in Touch {' '}
                        <span role="img" aria-label="handshake" className="text-2xl">🤝</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Mission Preview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Web3JH is dedicated to fostering blockchain education, innovation, and entrepreneurship 
                in Jharkhand. We bridge the gap between traditional education and cutting-edge Web3 
                technologies through workshops, mentorship, and community building.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Educating the next generation of Web3 developers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Building sustainable blockchain solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Creating opportunities for local talent</span>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Community meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Web3 Revolution?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Connect with like-minded innovators, learn cutting-edge technologies, and build the future of decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://chat.whatsapp.com/D1sSYDN7Lxn7ZUvfxoBAUi" aria-label="Join Web3JH community">
              <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
                Join Our Community {' '}
                <span role="img" aria-label="flexed-biceps" className="text-2xl">💪</span>
              </Button>
            </Link>
            <Link href="/events" aria-label="View upcoming Web3JH events">
              <Button size="lg" className="bg-gradient-to-r from-orange-200 to-yellow-200 text-yellow-700 font-bold border border-white/20 text-lg rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-orange-300 hover:to-yellow-200 ring-1 ring-white/10 backdrop-blur-md text-center">
                View Upcoming Events {' '}
                <span role="img" aria-label="ticket" className="text-2xl">🎫</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
