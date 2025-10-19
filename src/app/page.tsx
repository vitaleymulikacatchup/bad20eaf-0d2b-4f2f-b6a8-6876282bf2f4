"use client";

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/ThemeProvider';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/6615230/pexels-photo-6615230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A busy architectural workspace featuring blueprints, sketches, and drafting tools."},
  {"id":"about-image","url":"https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Group of young professionals engaged in a collaborative meeting in a modern office setting."},
  {"id":"feature-1-image","url":"https://images.pexels.com/photos/31336735/pexels-photo-31336735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A person using a tablet for photo editing while sitting by a cozy fireplace indoors."},
  {"id":"feature-2-image","url":"https://images.pexels.com/photos/6757764/pexels-photo-6757764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Hands modeling clay on a round table with tools, showcasing creativity in a workspace."},
  {"id":"feature-3-image","url":"https://images.pexels.com/photos/5302836/pexels-photo-5302836.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young man with female partner in casual clothes preparing pottery tools at table in workroom."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/34342508/pexels-photo-34342508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up portrait of a well-dressed man in a tuxedo, surrounded by greenery, exuding elegance and sophistication."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/8204392/pexels-photo-8204392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful call center agent with a headset gives a high five to a colleague in an office."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/7447131/pexels-photo-7447131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A man enjoying a hair wash with his eyes closed, experiencing relaxation at a barber shop."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/23495757/pexels-photo-23495757.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Emotional family therapy session with a therapist indoors, conveying connection and support."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[{"name":"Home","id":"home"},{"name":"About","id":"about"},{"name":"Services","id":"services"},{"name":"Contact","id":"contact"}]}
          brandName="Allen Design"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Allen Design Studio"
            description="Creating stunning visual solutions for your brand."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url || '/public/images/placeholder.webp'}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Learn more about our mission, values, and what drives us forward."
            bulletPoints={[
              { title: "Innovation", description: "We push boundaries" },
              { title: "Quality", description: "Excellence in every detail" }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url || '/public/images/placeholder.webp'}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            title="Our Features"
            description="Explore our diverse design capabilities."
            features={[
              {
                id: "01",
                title: "Graphic Design",
                description: "Breathtaking visual designs tailored to your needs.",
                imageSrc: assetMap.find(a => a.id === 'feature-1-image')?.url || '/public/images/placeholder.webp'
              },
              {
                id: "02",
                title: "3D Modeling",
                description: "Advanced 3D solutions to bring your projects to life.",
                imageSrc: assetMap.find(a => a.id === 'feature-2-image')?.url || '/public/images/placeholder.webp'
              },
              {
                id: "03",
                title: "Collaborative Process",
                description: "We work closely with you to ensure success.",
                imageSrc: assetMap.find(a => a.id === 'feature-3-image')?.url || '/public/images/placeholder.webp'
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Client Feedback"
            description="Hear from those who have worked with us."
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO",
                testimonial: "The visuals were beyond impressive and truly transformed our brand.",
                imageSrc: assetMap.find(a => a.id === 'testimonial-1')?.url || '/public/images/placeholder.webp'
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "CTO",
                testimonial: "Their attention to detail and creativity is unmatched.",
                imageSrc: assetMap.find(a => a.id === 'testimonial-2')?.url || '/public/images/placeholder.webp'
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Marketing Director",
                testimonial: "They brought our vision to life with professionalism and skill.",
                imageSrc: assetMap.find(a => a.id === 'testimonial-3')?.url || '/public/images/placeholder.webp'
              },
              {
                id: "4",
                name: "David Kim",
                role: "Product Manager",
                testimonial: "An absolute delight to work with from start to finish.",
                imageSrc: assetMap.find(a => a.id === 'testimonial-4')?.url || '/public/images/placeholder.webp'
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay in Touch"
            description="Sign up for our newsletter to get the latest updates."
            onSubmit={(email) => console.log(`Email submitted: ${email}`)}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Services",
                items: [{ label: "Graphic Design", href: "services" }, { label: "3D Modeling", href: "services" }]
              },
              {
                title: "Company",
                items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }]
              }
            ]}
            copyrightText="© 2025 Allen Design Studio"
          />
        </div>
      </div>

    </ThemeProvider>
  );
}
