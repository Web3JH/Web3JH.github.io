'use client';

import { CheckCircle, Target, Eye, Users, Globe, Award, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { publicAsset } from '@/lib/publicAsset';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of collective learning and collaboration to drive innovation.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Connecting local talent with global opportunities in the Web3 ecosystem.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality education and building world-class solutions.'
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'Creating an environment where everyone can learn, grow, and contribute regardless of background.'
    }
  ];

  const team = [
    {
      name: 'Subham Surana',
      role: 'Founder & President',
      image: '/team/subham_surana.jpg',
      linkedin: 'https://www.linkedin.com/in/subham-surana/',
      twitter: 'https://twitter.com/TheSuranaverse',
    },
    {
      name: 'Abhishek Sagar',
      role: 'Vice President',
      image: '/team/abhishek_sagar_profile.jpeg',
      linkedin: 'https://www.linkedin.com/in/asssagar/',
      twitter: 'https://twitter.com/neustarZura',
    },
    {
      name: 'Amarjeet Singh',
      role: 'Community & Events Head',
      image: '/team/amarjeet.jpeg',
      linkedin: 'https://www.linkedin.com/in/jeetamar/',
      twitter: 'https://twitter.com/jeetamar28',
    },
    {
      name: 'Nitin Nandan',
      role: 'Design Head',
      image: '/team/nitin.jpg',
      linkedin: 'https://www.linkedin.com/in/ni8innn/',
      twitter: 'https://twitter.com/ni8innn',
    },
    {
      name: 'Jatin Gupta',
      role: 'Community Manager',
      image: '/team/Jatin_Gupta.jpg',
      linkedin: 'https://www.linkedin.com/in/jatingupta11',
      twitter: 'https://x.com/NeuralJatin',
    },
    {
      name: 'Sushil Gupta',
      role: 'Blockchain & AI Head',
      image: '/team/sushil.jpeg',
      linkedin: 'https://www.linkedin.com/in/sushil-gupta-/',
      twitter: 'https://twitter.com/sushilgupta',
    },
    {
      name: 'Abhishek Sinha',
      role: 'Outreach Partner',
      image: '/team/Abhishek_Sinha_profile.png',
      linkedin: 'https://www.linkedin.com/in/abhishek-sinha-b7a7375a/',
      twitter: 'https://twitter.com/akseptional',
    },
  ];

  const milestones = [
    { year: '2022', event: 'Web3JH Founded', description: 'Started with 10 passionate students from BIT Mesra' },
    { year: '2023', event: 'First Major Event', description: 'Hosted 200+ participants in our inaugural Web3 Meetup' },
    { year: '2023', event: 'Hackathon Success', description: 'Organized Jharkhand\'s first hackathon in Blockchain with 1,000+ participants' },
    { year: '2024', event: 'College Expansion', description: 'Established chapters in 5 major colleges across Jharkhand' },
    { year: '2024', event: 'Industry Partnerships', description: 'Partnered with leading Web3 companies for workshops and meetups' },
    { year: '2025', event: 'Global Recognition', description: 'Recognized as one of India\'s top Web3 communities' }
  ];

  const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Web3 Jharkhand",
  "url": "https://web3jh.xyz",
  "logo": "https://web3jh.xyz/Asset 1 21.png",
  "foundingDate": "2022",
  "founder": {
    "@type": "Person",
    "name": "Subham Surana"
  },
  "location": {
    "@type": "Place",
    "name": "Ranchi, Jharkhand, India"
  },
  "description": "Jharkhand's largest Web3 and blockchain education community",
  "sameAs": [
    "https://twitter.com/web3jh",
    "https://linkedin.com/company/web3jh"
  ]
};

  return (
    <>
      <Head>
      <title>About Web3 Jharkhand | India's Leading Web3 and Blockchain Community</title>
      <meta name="description" content="Learn about Web3 Jharkhand's mission to democratize blockchain education. Meet our team of passionate developers and join 1000+ students across 8 college chapters." />
      <meta name="keywords" content="Web3 Jharkhand team, blockchain education mission, Web3 community founders, Subham Surana, blockchain developers Jharkhand" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://web3jh.xyz/about" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="About Web3 Jharkhand | India's Leading Web3 and Blockchain Community" />
      <meta property="og:description" content="Learn about Web3 Jharkhand's mission to democratize blockchain education across Jharkhand's premier institutions." />
      <meta property="og:url" content="https://web3jh.xyz/about" />
      <meta property="og:image" content="https://web3jh.xyz/core-team.jpg" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />

        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
            <div className="text-center mb-8 sm:mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Web3JH
                </span>
              </h1>
              <h2>
                <p className="text-3xl text-gray-600 mb-4">
                  Johar {' '}
                  <span role="img" aria-label="folded-hands" className="text-2xl">🙏</span>
                </p>
              </h2>
              <div className="flex flex-col-reverse sm:flex-col items-center">
                <div className="text-center mt-8 mb-8 sm:mb-8">
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto gap-8 whitespace-pre-line hidden sm:block">
                    Web3JH is a vibrant community dedicated to fostering the growth and adoption of<br/>
                    decentralized technologies across Jharkhand. We're on a mission to democratize <br/>
                    Web3 innovation through education on Blockchain and decentralized protocols, <br/>
                    Community-driven initiatives like monthly meetups, and hands-on experiences <br/>
                    with self-custodial Wallets, NFTs, DeFi, DAOs and Crypto.
                    <br/><br/>
                  </p>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto hidden sm:block">
                    Together at Web3JH, we are shaping the future of Web3 and empowering <br/>
                    the next-gen of ₿UIDLers, right from the heart of Jharkhand {' '}
                    <span role="img" aria-label="pink-heart" className="text-2xl">🩷</span>
                  </p>

                  {/* Mobile view without line breaks */}
                  <p className="text-xl text-gray-600 max-w-4xl mx-auto sm:hidden">
                    Web3JH is a vibrant community dedicated to fostering the growth and adoption of decentralized technologies across Jharkhand.
                  </p>
                  <br/>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto sm:hidden">
                    We're on a mission to democratize Web3 innovation through education on Blockchain, decentralized protocols, and hands-on experiences with self-custodial Wallets, NFTs, DeFi, DAOs and Crypto.
                  </p>
                  <br/>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto sm:hidden">
                    Together at Web3JH, we are shaping the future of Web3 and empowering the next-gen of ₿UIDLers, right from the heart of Jharkhand <span role="img" aria-label="pink-heart" className="text-2xl">🩷</span>
                  </p>
                </div>

                <div className="flex justify-center">
                  <Image 
                    src={publicAsset('Web3 JharkhandHomePage.png')}
                    alt="Web3 Jharkhand community members at Web3 conference in Ranchi, Jharkhand - largest Web3 community in the state"
                    priority={true}
                    loading="eager"
                    width={800}
                    height={400}
                    className="object-contain max-w-full h-auto mt-8 sm:mt-16"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <Card className="text-center p-8">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To foster blockchain education, innovation, and entrepreneurship in Jharkhand by bridging 
                  the gap between traditional education and cutting-edge Web3 technologies.
                </p>
              </Card>

              <Card className="text-center p-8">
                <Eye className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To establish Jharkhand as a leading hub for Web3 innovation in India, where students 
                  and developers can Connect, Learn, Build and access Opportunities globally.
                </p>
              </Card>

              <Card className="text-center p-8">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
                <p className="text-gray-600">
                  Empowering 1,000+ students across 8 colleges, hosting 25+ educational events, and 
                  building real-world projects that solve local and global challenges.
                </p>
              </Card>
            </div>

            {/* Values */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <value.icon className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Web3JH began in 2022 when a group of passionate students at BIT Mesra 
                  recognized the lack of blockchain education and proper resources to start in Web3. 
                  What started as informal study groups quickly grew into organized workshops, meetups, 
                  and a thriving community.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we're proud to be Jharkhand's largest Web3 community, with active chapters 
                  in <Link href="/community">8 colleges</Link> and partnerships with leading blockchain companies worldwide. Our members have 
                  gone on to work at top Web3 companies, start their own blockchain ventures, and contribute 
                  to open-source projects through our <Link href="/events">regular workshops and meetups</Link>.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">1,000+ active community members</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">8 college chapters across Jharkhand</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">25+ educational events, meetups and workshops</span>
                  </div>
                </div>
              </div>
              <div className="relative mt-8">
                <img
                  src={publicAsset('core-team.jpg')}
                  alt="Web3 Jharkhand core team members including founder Subham Surana and leadership team at community meetup"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Timeline */}
            {/* <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our growth</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">
                The passionate individuals driving Web3 innovation in Jharkhand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={publicAsset(member.image)}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-blue-600 hover:text-blue-800 text-xl" />
                    </a>
                    <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="text-sky-500 hover:text-sky-700 text-xl" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
    
  );
}
