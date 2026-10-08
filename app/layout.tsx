import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { publicAsset } from '@/lib/publicAsset';
import {
  Instagram,
  Twitter,
  Github,
  Send,
  Linkedin,
  Share2,
} from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5 text-sky-600 group-hover:text-sky-400" />,
    url: "https://www.linkedin.com/company/web3jh",
  },
  {
    name: "X (Twitter)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1227"
        className="h-5 w-5 text-white group-hover:text-gray-300"
        fill="currentColor"
      >
      <g transform="scale(0.8) translate(90, 90)">
        <path d="M682 460L1178 0H1072L623 426 252 0H0L523 642 0 1227H106l476-448 390 448h252L682 460Zm-140 132l-53-61L152 88h81l329 375 53 61 362 411h-81l-353-393Z" />
      </g>
      </svg>
    ),
    url: "https://x.com/web3jh",
  },
  {
    
    name: "Instagram",
    icon: <Instagram className="h-5 w-5 text-pink-500 group-hover:text-pink-400" />,
    url: "https://instagram.com/web3jh",
  },
  {
    name: "Lens Protocol",
    icon: <Share2 className="h-5 w-5 text-green-500 group-hover:text-green-400" />,
    url: "https://hey.xyz/u/web3jh",
  },
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5 text-white group-hover:text-gray-300" />,
    url: "https://github.com/web3jh",
  },
  {
    name: "Telegram",
    icon: <Send className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />,
    url: "https://t.me/web3jh",
  }
];

export const metadata: Metadata = {
  title: "Web3JH | India's Leading Web3 & Blockchain Community",
  description: 'Web3JH is India\'s leading Web3 & Blockchain community based in Jharkhand — empowering developers, startups, and crypto natives to build decentralized applications and shape the future of the internet.',
  keywords: 'Web3JH, web3 jharkhand, web3jharkhand, Web3, Blockchain, India, Jharkhand, Ranchi, Jamshedpur, Dhanbad, Community, Crypto, Bitcoin, DeFi, NFT, Smart Contracts',
  authors: [{ name: 'Web3JH Team' }],
  openGraph: {
    title: 'Web3JH | India\'s Leading Web3 & Blockchain Community',
    description: 'Web3JH is India\'s leading Web3 & Blockchain community based in Jharkhand — empowering developers, startups, and crypto natives to build decentralized applications and shape the future of the internet.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://web3jh.xyz',
    images: [
      {
        url: publicAsset('/preview.png'),
        width: 1200,
        height: 630,
        alt: 'Web3JH Community',
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3JH | India\'s Leading Web3 & Blockchain Community',
    description: 'Web3JH is India\'s leading Web3 & Blockchain community based in Jharkhand — empowering developers, startups, and crypto natives to build decentralized applications and shape the future of the internet.',
    creator: "Subham Surana",
    images: [publicAsset('/preview.png')]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        <main>
          <h1 className="sr-only">Web3JH - India's leading Web3 and Blockchain Community</h1>
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  {/* <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">W3</span>
                  </div> */}
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center relative">
                    <Image 
                      src={publicAsset('/Web3JH_Logo_White-no-bg 2.png')}
                      alt="Web3JH Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <span className="text-lg font-bold">Web3JH</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  Connecting Jharkhand ₿UIDLers to Web3 Ecosystem 🚀
                </p>

                {/* Social Icons */}
                <div className="flex space-x-5 mt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Web3JH on ${social.name}`}
                      className="group transition-colors duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <nav aria-label="Quick Links">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="block text-gray-400 hover:text-white transition-colors">Web3JH Home</Link></li>
                  <li><Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Web3JH</Link></li>
                  <li><Link href="/community" className="block text-gray-400 hover:text-white transition-colors">Web3JH Community</Link></li>
                  <li><Link href="/events" className="block text-gray-400 hover:text-white transition-colors">Web3JH Events</Link></li>
                  <li><Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact Web3JH</Link></li>
                </ul>
              </nav>

              
              <nav aria-label="Web3JH Resources">
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="block text-gray-400 hover:text-white transition-colors">Web3 Developer Docs</Link></li>
                  <li><Link href="#" className="block text-gray-400 hover:text-white transition-colors">Tutorials for Builders</Link></li>
                  <li><Link href="#" className="block text-gray-400 hover:text-white transition-colors">Web3 Community Blog</Link></li>
                  <li><Link href="#" className="block text-gray-400 hover:text-white transition-colors">Web3 Newsletter</Link></li>
                </ul>
              </nav>
              

            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Web3JH. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
