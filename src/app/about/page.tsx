"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Shield, Wrench, Home, Heart, Award, Users } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Services", id: "/services" },
  { name: "Service Areas", id: "/service-areas" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function AboutPage() {
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

      <div id="about-hero" data-section="about-hero">
        <TextSplitAbout
          title="About American Screen Hero"
          description={[
            "American Screen Hero is your trusted partner for professional screen repair and pool enclosure services in Sarasota, Lakewood Ranch, and Bradenton. With over 15 years of experience serving the local community, we've built our reputation on reliability, quality craftsmanship, and genuine customer care.",
            "Our team consists of skilled professionals who understand the unique challenges Florida homeowners face. From routine maintenance to emergency repairs and complete enclosure rescreening projects, we approach every job with the same level of professionalism and attention to detail.",
            "We believe in being responsive, transparent, and fair. That's why we offer free estimates, same-day quotes in many cases, and stand behind every project with our commitment to your satisfaction.",
          ]}
          buttons={[
            {
              text: "Get a Free Estimate",
              href: "/contact",
            },
          ]}
          buttonAnimation="slide-up"
          showBorder={false}
          useInvertedBackground={false}
        />
      </div>

      <div id="about-values" data-section="about-values">
        <FeatureBorderGlow
          features={[
            {
              icon: Award,
              title: "Professional Excellence",
              description:
                "Every project meets our high standards for quality. We use premium materials, proven techniques, and meticulous attention to detail in every repair and installation.",
            },
            {
              icon: Heart,
              title: "Customer Commitment",
              description:
                "Your satisfaction is our priority. We listen to your concerns, deliver honest recommendations, and provide service that exceeds expectations.",
            },
            {
              icon: Wrench,
              title: "Skilled Expertise",
              description:
                "Our team brings years of hands-on experience with all types of screen repair and pool enclosure work. We know the challenges and deliver proven solutions.",
            },
            {
              icon: Users,
              title: "Local Community",
              description:
                "We're part of the Sarasota community. We understand your neighborhood and take pride in being your trusted local service provider.",
            },
          ]}
          title="Our Core Values"
          description="Everything we do is guided by a commitment to quality, integrity, and customer success."
          tag="What Drives Us"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
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