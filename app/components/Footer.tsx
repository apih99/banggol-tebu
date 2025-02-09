"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ShoppingBag } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-lime-500 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <nav className="flex flex-col gap-1.5 text-sm">
              <Link href="/" className="hover:text-lime-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-lime-300 transition-colors">
                About Us
              </Link>
              <Link href="/categories/flower" className="hover:text-lime-300 transition-colors">
                Flower Trees
              </Link>
              <Link href="/categories/fruit" className="hover:text-lime-300 transition-colors">
                Fruit Trees
              </Link>
              <a
                href="https://my.shp.ee/X5MHsKB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition-colors inline-flex items-center gap-1.5"
              >
                <ShoppingBag size={14} />
                Our Shopee Store
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://maps.app.goo.gl/YLQrDudY8BYpccnb9" 
                 target="_blank" rel="noopener noreferrer" 
                 className="hover:text-lime-300 transition-colors inline-flex items-center gap-1.5">
              <address className="not-italic">
                <div className="flex items-start gap-1.5">
                  <MapPin className="mt-1 flex-shrink-0" size={16} />
                  <span>
                    Banggol Tebu Nursery<br />
                    Lot 63187, Jalan Tanah Lot,<br />
                    Kg Kuala Kejir,<br />
                    21700 Kuala Berang,<br />
                    Terengganu, Malaysia
                  </span>
                </div>
              </address>
              </a>
              <a
                href="tel:+60139947618"
                className="hover:text-lime-300 transition-colors inline-flex items-center gap-1.5"
              >
                <Phone size={16} />
                +60 13-994 7618
              </a>
              <a
                href="mailto:hafizcr716@gmail.com"
                className="hover:text-lime-300 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={16} />
                hafizcr716@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/banggol.tebunursery.3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/banggoltebu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="mt-3 text-xs text-lime-100/80">
              Follow us on social media for the latest updates, gardening tips, and special offers!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-3 border-t border-lime-800 text-center text-xs text-lime-100/60">
          <p>© {new Date().getFullYear()} Banggol Tebu Nursery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 