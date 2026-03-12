'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/store/languageStore';

export default function GlobalFooter() {
  const { language } = useLanguageStore();

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About Us',
        contact: 'Contact Us',
      },
      footer: {
        tagline: 'Your trusted partner in security.',
        quickLinks: 'Quick Links',
        contactUs: 'Contact Us',
        address: 'Maple Thai Intertrade Co.,Ltd. 3/201 Soi Srinakarin 46/1 (Pramote) Nong Bon Subdistrict, Prawet District, Bangkok 10250',
        email: 'admin@maplethai.co.th',
        rights: '© 2025 Maple Thai Intertrade. All rights reserved.',
      },
    },
    th: {
      nav: {
        home: 'หน้าแรก',
        services: 'บริการ',
        about: 'เกี่ยวกับเรา',
        contact: 'ติดต่อเรา',
      },
      footer: {
        tagline: 'พันธมิตรที่เชื่อถือได้ของคุณด้านความปลอดภัย',
        quickLinks: 'ลิงก์ด่วน',
        contactUs: 'ติดต่อเรา',
        address: 'บริษัท เมเปิ้ล ไทย อินเตอร์เทรด จำกัด 3/201 ซอยศรีนครินทร์ 46/1 (ประโมทย์) แขวงหนองบอน เขตประเวศ กรุงเทพมหานคร 10250',
        email: 'admin@maplethai.co.th',
        rights: '© 2025 บริษัท เมเปิ้ล ไทย อินเตอร์เทรด จำกัด สงวนลิขสิทธิ์',
      },
    },
  };

  const text = content[language];

  return (
    <footer className="bg-black text-white" id="contact">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2 text-amber-800">Maple Thai Intertrade</h3>
            <p className="text-white">{text.footer.tagline}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-amber-800">{text.footer.quickLinks}</h3>
            <ul>
              <li>
                <Link className="text-white hover:text-orange-500" href="/services/all-solutions">
                  {text.nav.services}
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-orange-500" href="/contact">
                  {text.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2 text-amber-800">
              <Link href="/contact" className="hover:text-amber-500 transition-colors">
                {text.footer.contactUs}
              </Link>
            </h3>
            <p className="text-white mb-2">{text.footer.address}</p>
            <p className="mb-1">
              <a href="tel:021383848" className="text-white hover:text-amber-500 transition-colors">
                📞 02-138-3848
              </a>
            </p>
            <p>
              <a href={`mailto:${text.footer.email}`} className="text-white hover:text-amber-500 transition-colors">
                ✉️ {text.footer.email}
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-white text-sm">
          {text.footer.rights}
        </div>
      </div>
    </footer>
  );
}
