"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import ContactText from "@/components/sections/contact/ContactText";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import Link from "next/link";

export default function ContactPage() {
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
        {
          label: "Email: ascreenhero@gmail.com",          href: "mailto:ascreenhero@gmail.com"},
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
          navItems={navItems.map((item) => ({
            name: item.name,
            id: item.id,
          }))}
          button={{
            text: "Get a Free Estimate",            href: "/contact"}}
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