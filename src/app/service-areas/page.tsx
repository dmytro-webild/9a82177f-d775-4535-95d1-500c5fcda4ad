"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Shield, Wrench, Home, MapPin } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Service Areas", id: "/service-areas" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function ServiceAreasPage() {
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
            text: "Get a Free Estimate",
            href: "/contact",
          }}
        />
      </div>

      <div id="service-areas-hero" data-section="service-areas-hero">
        <FeatureBorderGlow
          features={[
            {
              icon: MapPin,
              title: "Sarasota",
              description:
                "Full service coverage throughout Sarasota, including downtown, coastal neighborhoods, and surrounding areas. We serve residential homeowners and pool owners across the entire Sarasota region with fast, reliable screen repair services.",
            },
            {
              icon: MapPin,
              title: "Lakewood Ranch",
              description:
                "Serving all of Lakewood Ranch. Fast response times and same-day estimates for pool enclosure repairs. Our team understands the unique needs of this master-planned community and provides expert service tailored to your home.",
            },
            {
              icon: MapPin,
              title: "Bradenton",
              description:
                "Professional screen repair service in Bradenton. We handle residential and pool enclosure projects with the same commitment to quality you'll find in all our service areas. Call for quick quotes and availability.",
            },
          ]}
          title="Service Areas We Serve"
          description="American Screen Hero proudly serves homeowners and pool owners throughout Sarasota, Lakewood Ranch, and Bradenton. Fast response times, same-day estimates, and professional service in your neighborhood."
          tag="Local Service Coverage"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="service-areas-details" data-section="service-areas-details">
        <TextSplitAbout
          title="Why We Serve These Areas"
          description={[
            "We've built our business on being responsive and available to homeowners in the Sarasota area. These communities represent the heart of our service territory, where we've developed strong relationships with local homeowners and built a reputation for reliability and quality work.",
            "By focusing on this region, we can offer same-day estimates, rapid response times for urgent repairs, and deep knowledge of local climate challenges. Whether you're dealing with hurricane season preparation or routine pool enclosure maintenance, we're here for you.",
            "Call today for a free estimate in your area. Our team is ready to discuss your screen repair needs and provide professional solutions at competitive prices.",
          ]}
          buttons={[
            {
              text: "Get a Free Estimate",
              href: "/contact",
            },
          ]}
          buttonAnimation="slide-up"
          showBorder={true}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Company",
              items: [
                {
                  label: "Home",
                  href: "/",
                },
                {
                  label: "Services",
                  href: "/services",
                },
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
              ],
            },
            {
              title: "Services",
              items: [
                {
                  label: "Pool Cage Repair",
                  href: "/services",
                },
                {
                  label: "Screen Rescreening",
                  href: "/services",
                },
                {
                  label: "Hurricane Screens",
                  href: "/services",
                },
                {
                  label: "Lanai Repair",
                  href: "/services",
                },
              ],
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Call: (941) 809-9115",
                  href: "tel:(941)809-9115",
                },
                {
                  label: "Email: ascreenhero@gmail.com",
                  href: "mailto:ascreenhero@gmail.com",
                },
                {
                  label: "Free Estimate",
                  href: "/contact",
                },
              ],
            },
            {
              title: "Service Areas",
              items: [
                {
                  label: "Sarasota",
                  href: "/service-areas",
                },
                {
                  label: "Lakewood Ranch",
                  href: "/service-areas",
                },
                {
                  label: "Bradenton",
                  href: "/service-areas",
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