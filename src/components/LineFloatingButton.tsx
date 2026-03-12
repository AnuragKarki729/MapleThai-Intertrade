"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LineFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const pathname = usePathname();

  // LINE Official Account ID
  const lineId = '@xuh0063f';

  // Dynamic Page Mappings
  const getPagePrefix = () => {
    if (pathname === '/') {
      return 'I am interested in learning more... / ฉันสนใจที่จะเรียนรู้เพิ่มเติม...';
    } else if (pathname === '/contact') {
      return 'I have an inquiry... / ฉันมีข้อสอบถาม...';
    } else if (pathname?.startsWith('/services/')) {
      const service = pathname.split('/')[2];
      const serviceMap: { [key: string]: string } = {
        'access-management': 'Access Management... / ระบบบริหารจัดการการเข้าออก...',
        'ai-smart': 'AI Smart Solutions... / ระบบ AI Smart Solutions...',
        'all-solutions': 'All Solutions... / โซลูชันทั้งหมด...',
        'parking-management': 'Parking Management... / ระบบบริหารลานจอดรถ...',
        'security-management': 'Security Management... / ระบบบริหารจัดการรักษาความปลอดภัย...',
        'visitor-management': 'Visitor Management... / ระบบจัดการผู้มาติดต่อ...',
        'warehouse-solution': 'Warehouse Solutions... / ระบบจัดการคลังสินค้า...',
      };
      
      const serviceName = serviceMap[service] || 'your services... / บริการของคุณ...';
      return `I would like to know more about ${serviceName}\nฉันต้องการทราบข้อมูลเพิ่มเติมเกี่ยวกับ ${serviceName}`;
    }
    
    return 'I have an inquiry... / ฉันมีข้อสอบถาม...';
  };

  const handleSend = () => {
    const prefix = getPagePrefix();
    const fullMessage = message.trim() ? `${prefix}\n\n${message}` : prefix;
    const encodedMessage = encodeURIComponent(fullMessage);
    const lineUrl = `https://line.me/R/oaMessage/${lineId}/?${encodedMessage}`;
    
    // Open in new tab/window
    window.open(lineUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popup Modal */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-80 w-[calc(100vw-3rem)] rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 origin-bottom-right">
          <div className="bg-[#06C755] p-4 text-white flex justify-between items-center h-16 shadow-sm">
            <div className="flex items-center space-x-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                {/* LINE icon path */}
                <path d="M22 11.08C22 16.56 17.52 21 12 21C10.12 21 8.35 20.48 6.88 19.56L2.3 20.89L3.63 16.31C2.71 14.84 2 13.06 2 11.08C2 5.6 6.48 1.12 12 1.12C17.52 1.12 22 5.6 22 11.08Z" />
              </svg>
              <div>
                <h3 className="font-bold text-sm leading-tight text-white/95">Chat with us on LINE</h3>
                <p className="text-[11px] opacity-80 mt-0.5">แชทกับเราทาง LINE</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1.5 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 bg-gray-50/50">
            
            <textarea
              className="w-full border border-gray-200 rounded-xl p-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-[#06C755]/50 focus:border-[#06C755] resize-none bg-white text-gray-800 placeholder-gray-400 transition-all shadow-sm"
              placeholder="Type your message here...&#10;พิมพ์ข้อความของคุณที่นี่... (Optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button 
              onClick={handleSend}
              className="mt-3 w-full bg-[#06C755] hover:bg-[#05b34c] active:scale-[0.98] text-white font-semibold py-2.5 rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22 11.08C22 16.56 17.52 21 12 21C10.12 21 8.35 20.48 6.88 19.56L2.3 20.89L3.63 16.31C2.71 14.84 2 13.06 2 11.08C2 5.6 6.48 1.12 12 1.12C17.52 1.12 22 5.6 22 11.08Z" />
              </svg>
              <span className="text-[15px]">Send on Line</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-[#05b34c] scale-95 shadow-md' : 'bg-[#06C755] hover:scale-105 hover:shadow-xl hover:-translate-y-1 shadow-lg'} text-white rounded-full p-[14px] transition-all duration-300 flex items-center justify-center relative group`}
        aria-label="Chat on LINE"
      >
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-[18px] w-[18px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-[18px] w-[18px] bg-red-500 border-2 border-white"></span>
          </span>
        )}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
          <path d="M22 11.08C22 16.56 17.52 21 12 21C10.12 21 8.35 20.48 6.88 19.56L2.3 20.89L3.63 16.31C2.71 14.84 2 13.06 2 11.08C2 5.6 6.48 1.12 12 1.12C17.52 1.12 22 5.6 22 11.08Z" />
        </svg>
      </button>
    </div>
  );
}
