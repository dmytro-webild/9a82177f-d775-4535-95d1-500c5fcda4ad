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
            text: "Get a Free Estimate",            href: "/contact"}}
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
              text: "Get a Free Estimate",              href: "/contact"},
            {
              text: "Call Now: (941) 809-9115",              href: "tel:(941)809-9115"},
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "radial-gradient"}}
          dashboard={{
            title: "Complete Screen Solutions",            logoIcon: Zap,
            imageSrc: "http://img.b2bpic.net/free-photo/man-servant-washing-windows_23-2149530810.jpg",            searchPlaceholder: "What screen service do you need?",            buttons: [
              {
                text: "View Services",                href: "/services"},
              {
                text: "Get Quote",                href: "/contact"},
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
                description: "Serving the Sarasota area"},
              {
                title: "Projects Completed",                values: [1200, 1500, 1850],
                description: "Happy homeowners"},
              {
                title: "Service Areas",                values: [3, 5, 7],
                description: "Greater Sarasota region"},
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
                title: "Pool Cage Rescreening",                status: "Most Popular"},
              {
                icon: CheckCircle,
                title: "Screen Door Repair",                status: "Quick Service"},
              {
                icon: CheckCircle,
                title: "Hurricane Screen Installation",                status: "Protection"},
            ],
          }}
        />
      </div>

      <div id="services-overview" data-section="services-overview">
        <FeatureBorderGlow
          features={[
            {
              icon: DropletIcon,
              title: "Pool Cage Repair",              description:
                "Expert repair of pool cage screens and enclosures. We handle damage assessment, panel replacement, and structural repairs."},
            {
              icon: RefreshCw,
              title: "Pool Cage Rescreening",              description:
                "Complete rescreening of pool enclosures with high-quality mesh. Restore your pool protection and enjoy outdoor living."},
            {
              icon: Home,
              title: "Lanai Screen Repair",              description:
                "Professional lanai screen repair and maintenance. Keep your outdoor living space protected from insects and weather."},
            {
              icon: Wind,
              title: "Hurricane Screen Replacement",              description:
                "Install protective hurricane screens for storm season. Reinforce your home's defense against severe weather."},
            {
              icon: DoorOpen,
              title: "Screen Door Repair",              description:
                "Fast repair and replacement of screen doors. Smooth operation and secure seals guaranteed."},
            {
              icon: Zap,
              title: "Screen Maintenance",              description:
                "Regular maintenance and minor repairs to keep your screens in perfect condition year-round."},
          ]}
          title="Our Screen Repair Services"
          description="Comprehensive screen and pool enclosure solutions for homeowners throughout Sarasota, Lakewood Ranch, and Bradenton."
          tag="What We Offer"
          tagIcon={Wrench}
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
            "We are dedicated to providing the highest quality screen repair and pool enclosure services in Sarasota and surrounding areas. Our team brings years of experience, professional craftsmanship, and genuine commitment to customer satisfaction.",            "Every project receives our full attention. We use premium materials, proven techniques, and meticulous attention to detail. From emergency repairs to complete enclosure rescreening, we handle your home with the care it deserves.",            "Your satisfaction is our priority. We arrive on time, work efficiently, and stand behind every job. Experience the American Screen Hero difference today."]}
          buttons={[
            {
              text: "Get a Free Estimate",              href: "/contact"},
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
                "http://img.b2bpic.net/free-photo/photo-serious-mixed-race-partners-discuss-financial-data_273609-44254.jpg",              imageAlt: "satisfied homeowner portrait happy client"},
            {
              id: "2",              name: "Robert T.",              role: "Pool Owner",              company: "Lakewood Ranch",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/young-smiling-woman-bikini-swimming-pool_23-2148138682.jpg",              imageAlt: "pool owner satisfied customer portrait"},
            {
              id: "3",              name: "Patricia M.",              role: "Senior Homeowner",              company: "Bradenton",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/medium-shot-women-reading-cellphone-messages_23-2150273387.jpg",              imageAlt: "elderly homeowner satisfied review"},
            {
              id: "4",              name: "James & Linda K.",              role: "Family Homeowners",              company: "Sarasota",              rating: 5,
              imageSrc:
                "http://img.b2bpic.net/free-photo/business-person-planning-alternative-energies_23-2149205472.jpg",              imageAlt: "florida family homeowner portrait"},
          ]}
        />
      </div>

      <div id="service-areas" data-section="service-areas">
        <FeatureBorderGlow
          features={[
            {
              icon: MapPin,
              title: "Sarasota",              description:
                "Full service coverage throughout Sarasota, including downtown, coastal neighborhoods, and surrounding areas."},
            {
              icon: MapPin,
              title: "Lakewood Ranch",              description:
                "Serving all of Lakewood Ranch. Fast response times and same-day estimates for pool enclosure repairs."},
            {
              icon: MapPin,
              title: "Bradenton",              description:
                "Professional screen repair service in Bradenton. We handle residential and pool enclosure projects."},
            {
              icon: MapPin,
              title: "Surrounding Areas",              description: "Extended service to nearby communities. Call for availability in your area."},
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
          text="Ready for professional screen repair service? Contact American Screen Hero today for your free estimate."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Get a Free Estimate",              href: "/contact"},
            {
              text: "Call (941) 809-9115",              href: "tel:(941)809-9115"},
          ]}
          background={{
            variant: "radial-gradient"}}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Company",              items: [
                {
                  label: "Home",                  href: "/"},
                {
                  label: "Services",                  href: "/services"},
                {
                  label: "About Us",                  href: "/about"},
                {
                  label: "Contact",                  href: "/contact"},
              ],
            },
            {
              title: "Services",              items: [
                {
                  label: "Pool Cage Repair",                  href: "/services"},
                {
                  label: "Screen Rescreening",                  href: "/services"},
                {
                  label: "Hurricane Screens",                  href: "/services"},
                {
                  label: "Lanai Repair",                  href: "/services"},
              ],
            },
            {
              title: "Contact",              items: [
                {
                  label: "Call: (941) 809-9115",                  href: "tel:(941)809-9115"},
                {
                  label: "Email: ascreenhero@gmail.com",                  href: "mailto:ascreenhero@gmail.com"},
                {
                  label: "Free Estimate",                  href: "/contact"},
              ],
            },
            {
              title: "Service Areas",              items: [
                {
                  label: "Sarasota",                  href: "/service-areas"},
                {
                  label: "Lakewood Ranch",                  href: "/service-areas"},
                {
                  label: "Bradenton",                  href: "/service-areas"},
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