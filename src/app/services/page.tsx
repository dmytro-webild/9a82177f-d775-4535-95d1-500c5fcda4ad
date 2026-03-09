"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import {
  Shield,
  Wrench,
  DropletIcon,
  RefreshCw,
  Home,
  Wind,
  DoorOpen,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Services", id: "/services" },
    { name: "Service Areas", id: "/service-areas" },
    { name: "About", id: "/about" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      title: "Company",      items: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",      items: [
        { label: "Pool Cage Repair", href: "/services" },
        { label: "Screen Rescreening", href: "/services" },
        { label: "Hurricane Screens", href: "/services" },
        { label: "Lanai Repair", href: "/services" },
      ],
    },
    {
      title: "Contact",      items: [
        { label: "Call: (941) 809-9115", href: "tel:(941)809-9115" },
        { label: "Email: ascreenhero@gmail.com", href: "mailto:ascreenhero@gmail.com" },
        { label: "Free Estimate", href: "/contact" },
      ],
    },
    {
      title: "Service Areas",      items: [
        { label: "Sarasota", href: "/service-areas" },
        { label: "Lakewood Ranch", href: "/service-areas" },
        { label: "Bradenton", href: "/service-areas" },
      ],
    },
  ];

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

      <div id="services-overview" data-section="services-overview">
        <FeatureBorderGlow
          title="Complete Screen Repair Services"
          description="We offer comprehensive screen and pool enclosure solutions tailored to your home's needs. Expert craftsmanship and premium materials in every project."
          tag="Detailed Service Offerings"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              icon: DropletIcon,
              title: "Pool Cage Repair & Restoration",              description: "Expert diagnosis and repair of damaged pool enclosures. We assess structural integrity, replace damaged panels, and restore full functionality."},
            {
              icon: RefreshCw,
              title: "Pool Cage Rescreening",              description: "Complete rescreening of pool enclosures using premium mesh materials. Perfect for aging screens or complete restoration projects that need fresh protection."},
            {
              icon: Home,
              title: "Lanai & Patio Screen Solutions",              description: "Professional repair and maintenance of lanai screens and patio enclosures. Ensure your outdoor living space remains protected and functional."},
            {
              icon: Wind,
              title: "Hurricane-Resistant Screens",              description: "Protective hurricane screen installation to safeguard your home during storm season. Engineered for maximum durability and weather resistance."},
            {
              icon: DoorOpen,
              title: "Screen Door Service",              description: "Fast repair and replacement of screen doors with smooth operation and secure seals. We handle frame repair, mesh replacement, and hardware upgrades."},
            {
              icon: Zap,
              title: "Maintenance & Minor Repairs",              description: "Regular maintenance and targeted repairs to keep your screens in perfect condition year-round. Catch problems early and extend screen life."},
          ]}
        />
      </div>

      <div id="service-approach" data-section="service-approach">
        <TextSplitAbout
          title="Our Service Approach"
          description={[
            "Every screen project starts with a thorough inspection. We evaluate damage, assess structural integrity, and provide honest recommendations for the best solution.",            "We use only premium materials and proven techniques to ensure long-lasting results. From quick repairs to complete enclosure rescreening, we handle every detail with precision.",            "Fast turnaround times, professional crews, and guaranteed satisfaction. Your home deserves quality craftsmanship, and that's exactly what we deliver."]}
          buttons={[
            {
              text: "Request Your Free Estimate",              href: "/contact"},
          ]}
          buttonAnimation="slide-up"
          showBorder={true}
          useInvertedBackground={false}
        />
      </div>

      <div id="cta-services" data-section="cta-services">
        <ContactText
          text="Need professional screen repair or rescreening? Get started with a free, no-obligation estimate from American Screen Hero."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Schedule Your Free Estimate",              href: "/contact"},
            {
              text: "Call (941) 809-9115",              href: "tel:(941)809-9115"},
          ]}
          background={{
            variant: "plain"}}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={footerColumns}
          bottomLeftText="© 2025 American Screen Hero. All rights reserved."
          bottomRightText="Professional Screen Repair Services"
        />
      </div>
    </ThemeProvider>
  );
}