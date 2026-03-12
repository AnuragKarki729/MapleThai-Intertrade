'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguageStore } from '@/store/languageStore';
import { useEffect, useState } from 'react';

export default function ContactUs() {
  const { language, toggleLanguage } = useLanguageStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const targetEmail = 'admin@maplethai.co.th';
    const emailSubject = 'Website Inquiry: สอบถามรายละเอียดจากเว็บไซต์';
    
    // Construct the email body with the form details
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    
    // Create the mailto link
    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        contact: 'Contact Us',
      },
      servicesDropdown: {
        title: 'What We Do',
        items: [
          { name: 'Our Solutions', route: '/services/all-solutions', featured: true },
          { name: 'Access Manager', route: '/services/access-management' },
          { name: 'AI Smart', route: '/services/ai-smart' },
          { name: 'Parking Management', route: '/services/parking-management' },
          { name: 'Security Management', route: '/services/security-management' },
          { name: 'Visitor Management', route: '/services/visitor-management' },
          { name: 'Warehouse Solution', route: '/services/warehouse-solution' },
          
        ],
      },
      hero: {
        title: 'Contact Us',
        subtitle: "We're here to help. Reach out to us for any inquiries or support.",
      },
      form: {
        name: 'Name',
        namePlaceholder: 'Your Name',
        email: 'Email',
        emailPlaceholder: 'Your Email',
        subject: 'Subject',
        subjectPlaceholder: 'Subject',
        message: 'Message',
        messagePlaceholder: 'Your Message',
        submit: 'Send Message',
      },
      contactInfo: {
  title: 'Contact Information',
  phone: 'Phone',
  phoneValue: '02-138-3848',          // display format
  email: 'Email',
  emailValue: 'admin@maplethai.co.th',
  address: 'Address',
  addressValue: 'Maple Thai Intertrade Co.,Ltd. 3/201 Soi Srinakarin 46/1 (Pramote) Nong Bon Subdistrict, Prawet District, Bangkok 10250',
},
quickContact: {
  title: 'Quick Contact',
  callButton: 'Call Us Now',
  lineQR: 'Scan to Add on LINE',
},
      footer: {
        rights: '© 2024 Maple Thai Intertrade. All rights reserved.',
      },
    },
    th: {
      nav: {
        home: 'หน้าแรก',
        services: 'บริการ',
        contact: 'ติดต่อเรา',
      },
      servicesDropdown: {
        title: 'สิ่งที่เราทำ',
        items: [
          { name: 'โซลูชันของเรา', route: '/services/all-solutions', featured: true },
          { name: 'จัดการผู้มาเยือน', route: '/services/visitor-management' },
          { name: 'จัดการที่จอดรถ', route: '/services/parking-management' },
          { name: 'จัดการการเข้าออก', route: '/services/access-management' },
          { name: 'จัดการความปลอดภัย', route: '/services/security-management' },
          { name: 'โซลูชันคลังสินค้า', route: '/services/warehouse-solution' },
          { name: 'AI อัจฉริยะ', route: '/services/ai-smart' },
        ],
      },
      hero: {
        title: 'ติดต่อเรา',
        subtitle: 'เรายินดีให้ความช่วยเหลือ ติดต่อเราสำหรับข้อสงสัยหรือความช่วยเหลือใดๆ',
      },
      form: {
        name: 'ชื่อ',
        namePlaceholder: 'ชื่อของคุณ',
        email: 'อีเมล',
        emailPlaceholder: 'อีเมลของคุณ',
        subject: 'หัวข้อ',
        subjectPlaceholder: 'หัวข้อ',
        message: 'ข้อความ',
        messagePlaceholder: 'ข้อความของคุณ',
        submit: 'ส่งข้อความ',
      },
      contactInfo: {
  title: 'ข้อมูลการติดต่อ',
  phone: 'โทรศัพท์',
  phoneValue: '02-138-3848',         
  email: 'อีเมล',
  emailValue: 'admin@maplethai.co.th',
  address: 'ที่อยู่',
  addressValue: 'บริษัท เมเปิ้ล ไทย อินเตอร์เทรด จำกัด 3/201 ซอยศรีนครินทร์ 46/1 (ประโมทย์) แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250',
},
quickContact: {
  title: 'ติดต่อด่วน',
  callButton: 'โทรหาเราทันที',
  lineQR: 'สแกนเพื่อเพิ่มใน LINE',
},

      footer: {
        rights: '© 2024 Maple Thai Intertrade สงวนลิขสิทธิ์',
      },
    },
  };
   useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

  const text = content[language];
 const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-amber-600/80 backdrop-blur-lg shadow-md border-b border-zinc-200' : 'bg-transparent'
  }`;

  return (
    // <div className=" text-font-['Poppins',sans-serif] pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white">
    <div className="relative pt-24 pb-16 overflow-hidden">
  {/* Background image (bottom layer) */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat blur-sm pointer-events-none"
    style={{ backgroundImage: "url('/contactBg.png')" }}
    aria-hidden="true"
  />

  {/* Optional whitewash overlay */}
  <div className="absolute inset-0 -z-10 bg-black/50 backdrop-blur-[1px]" aria-hidden="true" />
   <div className="relative z-10">
  
    {/* Header handled by GlobalHeader in layout */}

      <main className="pt-20">
        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              {text.hero.title}
            </h1>
            <p className="text-lg text-gray-100">{text.hero.subtitle}</p>
          </div>

          {/* Main Content Grid: Form + Quick Contact */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Left Column: Contact Form (appears second on mobile) */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={text.form.namePlaceholder}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={text.form.emailPlaceholder}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder={text.form.subjectPlaceholder}
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-base font-medium text-white mb-2">
                      {text.form.message}
                    </label>
                    <textarea
                      name="message"
                      placeholder={text.form.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-400 border-none focus:ring-2 focus:ring-amber-600 text-black placeholder-gray-500 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="cursor-pointer w-half px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    {text.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Quick Contact (appears first on mobile) */}
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">{text.quickContact.title}</h2>

              {/* Call Button Card */}
              <div className="bg-amber-80 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center justify-center">
                <svg
                  className="cursor-pointer w-12 h-12 md:w-16 md:h-16 text-amber-100 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:021383848"
                  className="px-6 py-3 md:px-8 md:py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors text-center text-sm md:text-base"
                >
                  {text.quickContact.callButton}
                </a>
                <p className="text-gray-100 mt-3 text-sm">{text.contactInfo.phoneValue}</p>
              </div>

              {/* LINE QR Code Card */}
              <div className="bg-amber-80 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/contact/line-qr.png"
                    alt="LINE QR Code"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white font-semibold text-center text-sm md:text-base">{text.quickContact.lineQR}</p>
              </div>

              {/* Contact Information */}
              <div className="bg-amber-50 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] p-6">
                <h3 className="text-lg font-bold text-black mb-4">{text.contactInfo.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 font-medium text-sm min-w-[80px]">{text.contactInfo.phone}:</span>
                    <span className="text-black text-sm">{text.contactInfo.phoneValue}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 font-medium text-sm min-w-[80px]">{text.contactInfo.email}:</span>
                    <span className="text-black text-sm">{text.contactInfo.emailValue}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 font-medium text-sm min-w-[80px]">{text.contactInfo.address}:</span>
                    <span className="text-black text-sm">{text.contactInfo.addressValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
<div className="rounded-lg overflow-hidden shadow-lg mb-12">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0290516042277!2d100.6421558!3d13.6822721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5f319b3456a1%3A0xd77d60bbc12f5305!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4oeC5gOC4m-C4tOC4pSDguYTguJfguKIg4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmM4LmA4LiX4Lij4LiUIOC4iOC4s-C4geC4seC4lCAoTWFwbGUgVGhhaSBJbnRlcnRyYWRlIENvLixMdGQuKQ!5e0!3m2!1sth!2sth!4v1730300000000!5m2!1sth!2sth"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="text-center mt-3">
    <a
      href="https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B9%80%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%A5+%E0%B9%84%E0%B8%97%E0%B8%A2+%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%94+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94+(Maple+Thai+Intertrade+Co.,Ltd.)/@13.6822721,100.6421558,17z/data=!4m14!1m7!3m6!1s0x311d5f319b3456a1:0xd77d60bbc12f5305!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4oeC5gOC4m-C4tOC4pSDguYTguJfguKIg4Lit4Li04LiZ4LmA4LiV4Lit4Lij4LmM4LmA4LiX4Lij4LiUIOC4iOC4s-C4geC4seC4lCAoTWFwbGUgVGhhaSBJbnRlcnRyYWRlIENvLixMdGQuKQ!8m2!3d13.6822721!4d100.6447254!16s%2Fg%2F11wc2l7h2t!3m5!1s0x311d5f319b3456a1:0xd77d60bbc12f5305!8m2!3d13.6822721!4d100.6447254!16s%2Fg%2F11wc2l7h2t?entry=ttu"
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer inline-block px-5 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
    >
      View Larger Map
    </a>
  </div>
</div>


        </div>
      </main>

      {/* Footer handled by GlobalFooter in layout */}
    </div>
    </div>
  );
}