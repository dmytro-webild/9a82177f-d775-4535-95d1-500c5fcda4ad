"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Shield,
  Zap,
  Wrench,
  DropletIcon,
  RefreshCw,
  Home,
  Wind,
  DoorOpen,
  Star,
  MapPin,
  CheckCircle,
} from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Service Areas", id: "/service-areas" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="American Screen Hero"
          navItems={navItems}
          button={{
            text: "Get a Free Estimate",            href: "/contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          title="Sarasota's Trusted Pool Cage & Screen Repair Experts"
          description="Fast, reliable screen repair and pool enclosure rescreening services for homeowners. We handle everything from small repairs to full enclosure projects."
          tag="Professional Screen Services"
          tagIcon={Shield}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Get a Free Estimate",              href: "/contact"
            },
            {
              text: "Call Now: (941) 809-9115",              href: "tel:(941)809-9115"
            },
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "radial-gradient"
          }}
          dashboard={{
            title: "Complete Screen Solutions",            logoIcon: Zap,
            imageSrc: "http://img.b2bpic.net/free-photo/man-servant-washing-windows_23-2149530810.jpg",            searchPlaceholder: "What screen service do you need?",            buttons: [
              {
                text: "View Services",                href: "/services"
              },
              {
                text: "Get Quote",                href: "/contact"
              },
            ],
            sidebarItems: [
              {
                icon: Shield,
                active: true,
              },
              {
                icon: Wrench,
              },
              {
                icon: Home,
              },
            ],
            stats: [
              {
                title: "Years Experience",                values: [15, 18, 20],
                description: "Serving the Sarasota area"
              },
              {
                title: "Projects Completed",                values: [1200, 1500, 1850],
                description: "Happy homeowners"
              },
              {
                title: "Service Areas",                values: [3, 5, 7],
                description: "Greater Sarasota region"
              },
            ],
            chartTitle: "Customer Satisfaction",            chartData: [
              {
                value: 95,
              },
              {
                value: 97,
              },
              {
                value: 98,
              },
              {
                value: 96,
              },
              {
                value: 99,
              },
            ],
            listTitle: "Featured Services",            listItems: [
              {
                icon: CheckCircle,
                title: "Pool Cage Rescreening",                status: "Most Popular"
              },
              {
                icon: CheckCircle,
                title: "Screen Door Repair",                status: "Quick Service"
              },
              {
                icon: CheckCircle,
                title: "Hurricane Screen Installation",                status: "Protection"
              },
            ],
          }}
        />
      </div>

      <div id="services-overview" data-section="services-overview">
        <FeatureBorderGlow
          features={[
            {
              icon: DropletIcon,
              title: "Pool Cage Screen Repair",              description: "Expert repair of damaged pool cage screens. We assess damage, replace panels, and ensure proper sealing for complete protection."
            },
            {
              icon: RefreshCw,
              title: "Pool Cage Rescreening",              description: "Complete rescreening of pool enclosures with premium mesh material. Restore function and appearance to your outdoor space."
            },
            {
              icon: Home,
              title: "Lanai and Patio Screen Repair",              description: "Professional repair and maintenance of lanai and patio screens. Keep your outdoor living areas protected from insects and elements."
            },
            {
              icon: DoorOpen,
              title: "Screen Door Repair and Replacement",              description: "Fast and reliable screen door repairs and full replacements. Smooth operation and secure seals guaranteed."
            },
            {
              icon: Wind,
              title: "Hurricane Screen Installation",              description: "Install protective hurricane screens for storm season. Reinforce your home's defense against severe weather and strong winds."
            },
            {
              icon: Zap,
              title: "Screen Panel Replacement",              description: "Individual screen panel replacement for pools, lanais, and patios. Get the exact panels you need without full rescreening."
            },
          ]}
          title="Professional Screen Repair Services in Sarasota"
          description="Comprehensive screen and pool enclosure solutions for homeowners throughout Sarasota, Lakewood Ranch, and Bradenton."
          tag="What We Offer"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          buttons={[
            {
              text: "Learn More",              href: "#trust-section"
            }
          ]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="trust-section" data-section="trust-section">
        <FeatureBorderGlow
          features={[
            {
              icon: CheckCircle,
              title: "Fast and Reliable Service",              description: "We respond quickly to your service requests and complete repairs efficiently without compromising quality or attention to detail."
            },
            {
              icon: Shield,
              title: "Quality Screen Repairs",              description: "We use premium materials and proven techniques. Every repair is backed by our commitment to excellence and customer satisfaction."
            },
            {
              icon: Star,
              title: "Free Estimates",              description: "Get a clear, no-obligation estimate for your screen repair project. We assess your needs and provide honest pricing upfront."
            },
          ]}
          title="Why Trust American Screen Hero?"
          description="We stand behind every job we do."
          tag="Our Promise"
          tagIcon={Shield}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <TextSplitAbout
          title="Why Choose American Screen Hero?"
          description={[
            "We are dedicated to providing the highest quality screen repair and pool enclosure services in Sarasota and surrounding areas. Our team brings years of experience, professional craftsmanship, and genuine commitment to customer satisfaction.",            "Every project receives our full attention. We use premium materials, proven techniques, and meticulous attention to detail. From emergency repairs to complete enclosure rescreening, we handle your home with the care it deserves.",            "Your satisfaction is our priority. We arrive on time, work efficiently, and stand behind every job. Experience the American Screen Hero difference today."
          ]}
          buttons={[
            {
              text: "Get a Free Estimate",              href: "/contact"
            },
          ]}
          buttonAnimation="slide-up"
          showBorder={true}
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real testimonials from homeowners and pool owners who trusted American Screen Hero with their homes."
          tag="Customer Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",              name: "Margaret S.",              role: "Homeowner",              company: "Sarasota",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773089720919-hem8b6pv.png",              imageAlt: "satisfied homeowner portrait happy client"
            },
            {
              id: "2",              name: "Robert T.",              role: "Pool Owner",              company: "Lakewood Ranch",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773089720920-fo18wc4b.png",              imageAlt: "pool owner satisfied customer portrait"
            },
            {
              id: "3",              name: "Patricia M.",              role: "Senior Homeowner",              company: "Bradenton",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773089720919-8mmoxn7n.png",              imageAlt: "elderly homeowner satisfied review"
            },
            {
              id: "4",              name: "James & Linda K.",              role: "Family Homeowners",              company: "Sarasota",              rating: 5,
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AiruCR7xtXa8HIbr52voHdY3BQ/uploaded-1773089720920-zs7bl4ob.png",              imageAlt: "florida family homeowner portrait"
            },
          ]}
        />
      </div>

      <div id="service-areas" data-section="service-areas">
        <FeatureBorderGlow
          features={[
            {
              icon: MapPin,
              title: "Sarasota",              description:
                "Full service coverage throughout Sarasota, including downtown, coastal neighborhoods, and surrounding areas."
            },
            {
              icon: MapPin,
              title: "Lakewood Ranch",              description:
                "Serving all of Lakewood Ranch. Fast response times and same-day estimates for pool enclosure repairs."
            },
            {
              icon: MapPin,
              title: "Bradenton",              description:
                "Professional screen repair service in Bradenton. We handle residential and pool enclosure projects."
            },
            {
              icon: MapPin,
              title: "Surrounding Areas",              description: "Extended service to nearby communities. Call for availability in your area."
            },
          ]}
          title="Service Areas We Serve"
          description="Fast service to homeowners throughout Sarasota and surrounding communities. Same-day quotes available."
          tag="Local Service"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="cta-contact" data-section="cta-contact">
        <ContactText
          text="Storm season approaching? Get your free estimate today! Respond within 24 hours guaranteed."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Get a Free Estimate",              href: "/contact"
            },
            {
              text: "Call (941) 809-9115",              href: "tel:(941)809-9115"
            },
          ]}
          background={{
            variant: "radial-gradient"
          }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Company",              items: [
                {
                  label: "Home",                  href: "/"
                },
                {
                  label: "Services",                  href: "/services"
                },
                {
                  label: "About Us",                  href: "/about"
                },
                {
                  label: "Contact",                  href: "/contact"
                },
              ],
            },
            {
              title: "Services",              items: [
                {
                  label: "Pool Cage Repair",                  href: "/services"
                },
                {
                  label: "Screen Rescreening",                  href: "/services"
                },
                {
                  label: "Hurricane Screens",                  href: "/services"
                },
                {
                  label: "Lanai Repair",                  href: "/services"
                },
              ],
            },
            {
              title: "Contact",              items: [
                {
                  label: "Call: (941) 809-9115",                  href: "tel:(941)809-9115"
                },
                {
                  label: "Email: ascreenhero@gmail.com",                  href: "mailto:ascreenhero@gmail.com"
                },
                {
                  label: "Free Estimate",                  href: "/contact"
                },
              ],
            },
            {
              title: "Service Areas",              items: [
                {
                  label: "Sarasota",                  href: "/service-areas"
                },
                {
                  label: "Lakewood Ranch",                  href: "/service-areas"
                },
                {
                  label: "Bradenton",                  href: "/service-areas"
                },
              ],
            },
          ]}
          bottomLeftText="© 2025 American Screen Hero. All rights reserved."
          bottomRightText="Professional Screen Repair Services"
        />
      </div>
    </ThemeProvider>
  );
}
