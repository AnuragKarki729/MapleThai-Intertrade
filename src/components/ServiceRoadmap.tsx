"use client";
import React, { useMemo, useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

/** ---- Types ---- */
interface Service {
  id: string;
  name: string;
  icon: string; // material symbols name
  href: string;
}

/** ---- Data ---- */
const services: Service[] = [
  { id: "all-solutions", name: "All Solutions", icon: "apps", href: "/services/all-solutions" },
  { id: "access-management", name: "Access Management", icon: "vpn_key", href: "/services/access-management" },
  { id: "ai-smart", name: "AI Smart", icon: "network_intel_node", href: "/services/ai-smart" },
  { id: "parking-management", name: "Parking Management", icon: "local_parking", href: "/services/parking-management" },
  { id: "security-management", name: "Security Management", icon: "security", href: "/services/security-management" },
  { id: "visitor-management", name: "Visitor Management", icon: "group", href: "/services/visitor-management" },
  { id: "warehouse-solution", name: "Warehouse Solution", icon: "warehouse", href: "/services/warehouse-solution" },
];

/** ---- Helpers ---- */
// const idByHref = new Map(services.map(s => [s.href, s.id]));
const milestoneServices = services.filter(s => s.id !== "all-solutions");

// function clamp(n: number, min = 0, max = 100) {
//   return Math.max(min, Math.min(max, n));
// }

/** ---- Animation Variants ---- */
const milestoneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

/** ---- Milestone ---- */
type MilestoneProps = {
  service: Service;
  index: number;
  currentIndex: number | null;
};
const Milestone: React.FC<MilestoneProps> = ({ service, index, currentIndex }) => {
  const prefersReducedMotion = useReducedMotion();
  const isActive = currentIndex === index;
  const isCompleted = (currentIndex ?? -1) > index;
  const isNext = currentIndex !== null && index === currentIndex + 1;
  const isPending = !isActive && !isCompleted;

  // Better mobile scaling: maintain minimum touch target size
  const mobileScale = isActive ? 1 : isNext ? 0.85 : 0.7;

  return (
    <motion.li
      data-id={service.id}
      className="min-w-0"
      custom={index}
      initial="hidden"
      animate="visible"
      variants={prefersReducedMotion ? undefined : milestoneVariants}
    >
      <Link
        href={service.href}
        aria-label={service.name}
        aria-current={isActive ? "step" : undefined}
        className="group flex flex-col items-center text-center outline-none focus-visible:outline-none"
      >
        <motion.div
          data-role="node"
          style={{ transform: `scale(${mobileScale})` }}
          whileHover={!prefersReducedMotion ? { scale: mobileScale * 1.08 } : undefined}
          whileTap={!prefersReducedMotion ? { scale: mobileScale * 0.95 } : undefined}
          className={clsx(
            "relative flex items-center justify-center rounded-full transition-all duration-300 transform-gpu",
            "w-[var(--node)] h-[var(--node)]",
            "md:!scale-100 md:hover:scale-110",
            "focus-visible:outline-none",

            // Active state - vibrant amber with glow
            isActive && [
              "bg-gradient-to-br from-amber-600 via-amber-800 to-amber-600",
              "text-white shadow-xl shadow-amber-500/40",
              "ring-4 ring-amber-400/30 ring-offset-2 ring-offset-white dark:ring-offset-gray-950",
              "md:scale-110"
            ],

            // Completed state - success green with checkmark
            isCompleted && [
              "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/40 dark:to-emerald-900/40",
              "text-emerald-600 dark:text-emerald-400",
              "ring-2 ring-emerald-500/30",
              "shadow-lg shadow-emerald-500/10"
            ],

            // Pending state - neutral with subtle border
            isPending && [
              "bg-white dark:bg-gray-800",
              "text-gray-400 dark:text-gray-500",
              "border-2 border-gray-200 dark:border-gray-700",
              "shadow-sm"
            ]
          )}
        >
          {/* Icon with smart swap on completed */}
          <motion.span
            className="material-symbols-outlined select-none leading-none relative z-10"
            style={{
              fontSize: "var(--icon)",
              fontVariationSettings: isCompleted ? "'FILL' 1, 'wght' 600" : "'FILL' 0, 'wght' 400"
            }}
            aria-hidden="true"
            initial={false}
            animate={!prefersReducedMotion && isCompleted ? {
              rotate: [0, 10, -10, 0]
            } : undefined}
            transition={!prefersReducedMotion ? {
              rotate: { duration: 0.5 }
            } : undefined}
          >
            {isCompleted ? 'check_circle' : service.icon}
          </motion.span>

          <span className="sr-only">{service.name}</span>
        </motion.div>

        {/* Step number with better styling */}
        <motion.span
          className={clsx(
            "mt-3 text-[10px] font-bold uppercase tracking-widest hidden sm:block transition-colors duration-300",
            isActive && "text-amber-600 dark:text-amber-400",
            isCompleted && "text-emerald-600 dark:text-emerald-400",
            isPending && "text-gray-400 dark:text-gray-500"
          )}
          initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
          animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          transition={!prefersReducedMotion ? { delay: index * 0.1 + 0.2 } : undefined}
        >
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </motion.span>

        {/* Service name with improved hierarchy */}
        <motion.p
          className={clsx(
            "mt-1 text-xs sm:text-sm font-medium text-center line-clamp-2 sm:line-clamp-1 md:line-clamp-none transition-colors duration-300",
            isActive && "text-amber-600 dark:text-amber-600 font-semibold",
            isCompleted && "text-gray-700 dark:text-gray-300",
            isPending && "text-gray-500 dark:text-gray-400"
          )}
          title={service.name} 
          initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
          animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          transition={!prefersReducedMotion ? { delay: index * 0.1 + 0.3 } : undefined}
        >
          {service.name} 
        </motion.p>
      </Link>
    </motion.li>
  );
};
/** ---- Component ---- */
const ServiceRoadmap: React.FC = () => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const railStripRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLOListElement | null>(null);
  const [progressPx, setProgressPx] = useState(0);

  const isAllSolutionsPage = pathname?.startsWith("/services/all-solutions") ?? false;

  // Resolve current index among milestoneServices
  const currentIndex = useMemo(() => {
    const match = milestoneServices.findIndex(s => pathname?.startsWith(s.href));
    return match >= 0 ? match : null;
  }, [pathname]);


  useEffect(() => {
  if (isAllSolutionsPage || currentIndex === null) {
    setProgressPx(0);
    return;
  }
  const railEl = railStripRef.current;
  const listEl = listRef.current;
  if (!railEl || !listEl) return;

  const activeId = milestoneServices[currentIndex]?.id;
  if (!activeId) return;

  const activeLi = listEl.querySelector<HTMLLIElement>(`li[data-id="${activeId}"]`);
  if (!activeLi) return;

  // rail’s left boundary (where width is measured from)
  const railRect = railEl.getBoundingClientRect();
  // active node center X
  const node = activeLi.querySelector<HTMLDivElement>('[data-role="node"]');
  const nodeRect = (node ?? activeLi).getBoundingClientRect();
  const nodeCenterX = nodeRect.left + nodeRect.width / 2;

  const width = Math.max(0, Math.min(nodeCenterX - railRect.left, railRect.width));
  setProgressPx(width);

  // Recalculate on resize/layout changes
  const ro = new ResizeObserver(() => {
    const rr = railEl.getBoundingClientRect();
    const nr = (node ?? activeLi).getBoundingClientRect();
    const cx = nr.left + nr.width / 2;
    const w = Math.max(0, Math.min(cx - rr.left, rr.width));
    setProgressPx(w);
  });
  ro.observe(document.body);
  ro.observe(railEl);
  ro.observe(listEl);
  return () => ro.disconnect();
}, [isAllSolutionsPage, currentIndex]);

const nextService =
  currentIndex !== null && currentIndex < milestoneServices.length - 1
    ? milestoneServices[currentIndex + 1]
    : null;

  type CSSVars = React.CSSProperties & {
  '--node'?: string;
  '--gap'?: string;
  '--icon'?: string;
  '--rail'?: string;
  '--glow'?: string;
};

// Then use:
const styleVars: CSSVars = {
  '--node': 'clamp(42px, 7vw, 64px)',
  '--gap': 'clamp(12px, 3vw, 28px)',
  '--icon': 'clamp(18px, 5vw, 28px)',
  '--rail': 'clamp(2px, 0.4vw, 3px)',
  '--glow': 'clamp(6px, 1.5vw, 10px)',
};

  return (
    <section
      className="w-full bg-white dark:bg-black py-8 md:py-10 mt-16 border-t border-black/10 dark:border-white/10"
      style={styleVars}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 md:mb-8">
  {isAllSolutionsPage ? (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
        Explore Security Roadmap
      </h2>
      <p className="mt-1.5 text-sm text-black/60 dark:text-white/60">
        Discover all our solutions below
      </p>
    </>
  ) : (
    <>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        Explore Security Roadmap
      </h2>
      <p className="mt-1 text-xl sm:text-2xl font-bold text-black dark:text-white">
        {milestoneServices[currentIndex ?? 0]?.name ?? "Our Services"}
      </p>

      {/* Up next text */}
      {nextService ? (
        <motion.p
          className="mt-1.5 text-sm text-gray-600 dark:text-gray-400"
          initial={!prefersReducedMotion ? { opacity: 0, y: 5 } : undefined}
          animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          transition={!prefersReducedMotion ? { delay: 0.2 } : undefined}
        >
          Up next:{" "}
          <Link
            href={nextService.href}
            className="text-amber-600 dark:text-amber-600 hover:underline font-bold transition-colors"
          >
            {nextService.name}
          </Link>
        </motion.p>
      ) : (
        <motion.p
          className="mt-1.5 text-sm text-gray-600 dark:text-gray-400"
          initial={!prefersReducedMotion ? { opacity: 0, y: 5 } : undefined}
          animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
          transition={!prefersReducedMotion ? { delay: 0.2 } : undefined}
        >
          You have completed all solutions!{" "}
          <Link href="/contact" className="text-amber-600 dark:text-amber-500 hover:underline font-medium transition-colors">
            Contact us
          </Link>
        </motion.p>
      )}
    </>
  )}
</div>



        <div className="relative">
  {/* Icons strip + centered rail (height = node size) */}
  <div className="h-[var(--node)] relative" aria-hidden="true" ref={railStripRef}>
    {/* Background rail */}
    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[var(--rail)] bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-full shadow-inner" />

    {/* Animated progress bar with shimmer effect */}
    {!isAllSolutionsPage && (
      <>
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[var(--rail)] rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-md"
          style={{ width: progressPx }}
          initial={prefersReducedMotion ? false : { width: 0 }}
          animate={prefersReducedMotion ? undefined : { width: progressPx }}
          transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeInOut" }}
        />

        {/* Shimmer overlay on progress bar */}
        {!prefersReducedMotion && progressPx > 0 && (
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[var(--rail)] rounded-full overflow-hidden"
            style={{ width: progressPx }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ['-100%', '200%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}
      </>
    )}
  </div>

  {/* Milestones grid */}
  <ol
  role="list"
  ref={listRef}
  className="
    relative z-10 grid
    grid-flow-col auto-cols-fr                    
    md:grid-flow-col md:auto-cols-fr                  
    lg:grid-flow-col lg:auto-cols-fr                    
    xl:grid-flow-row                                 
    xl:[grid-template-columns:repeat(auto-fit,minmax(min(140px,100%),1fr))]
    gap-x-[calc(var(--gap)*0.5)] xl:gap-x-[var(--gap)]
    gap-y-0 xl:gap-y-8
    pb-3 pt-5
  "
>


  {milestoneServices.map((service, index) => (
    <Milestone
      key={service.id}
      service={service}
      index={index}
      currentIndex={currentIndex}
    />
  ))}
</ol>

</div>

        {/* Enhanced Micro-navigation */}
{!isAllSolutionsPage && (
  <motion.div
    className="mt-6 flex items-center justify-center gap-4"
    initial={!prefersReducedMotion ? { opacity: 0, y: 20 } : undefined}
    animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
    transition={!prefersReducedMotion ? { delay: 0.6 } : undefined}
  >
    {/* Previous Button */}
    <motion.div whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined} whileTap={!prefersReducedMotion ? { scale: 0.95 } : undefined}>
      <Link
        href={
          currentIndex !== null && currentIndex > 0
            ? milestoneServices[currentIndex - 1].href
            : milestoneServices[0].href
        }
        aria-label="Previous service"
        aria-disabled={currentIndex === 0}
        className={clsx(
          "group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
          "border-2 backdrop-blur-sm",
          currentIndex === 0
            ? "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-600 cursor-not-allowed"
            : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 hover:shadow-md"
        )}
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">←</span>
        <span>Previous</span>
      </Link>
    </motion.div>

    {/* Progress Counter */}
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700">
      <span className="text-xs font-mono font-bold text-gray-900 dark:text-gray-100">
        {currentIndex !== null ? `${currentIndex + 1}` : `...`}
      </span>
      <span className="text-xs text-gray-400 dark:text-gray-500">/</span>
      <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
        {milestoneServices.length}
      </span>
    </div>

    {/* Next or Contact Us Button */}
    {currentIndex !== null && currentIndex === milestoneServices.length - 1 ? (
      <motion.div whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined} whileTap={!prefersReducedMotion ? { scale: 0.95 } : undefined}>
        <Link
          href="/contact"
          prefetch
          aria-label="Contact us to get started"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                     bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700
                     text-white shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40
                     transition-all duration-300"
        >
          <span>Contact Us</span>
          <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1" style={{ fontSize: '18px' }}>
            arrow_forward
          </span>
        </Link>
      </motion.div>
    ) : (
      <motion.div whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined} whileTap={!prefersReducedMotion ? { scale: 0.95 } : undefined}>
        <Link
          href={
            currentIndex !== null
              ? milestoneServices[currentIndex + 1].href
              : milestoneServices[0].href
          }
          aria-label="Next service"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                     bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200
                     text-white dark:text-gray-900
                     hover:from-gray-900 hover:to-black dark:hover:from-white dark:hover:to-gray-100
                     shadow-lg shadow-gray-900/20 dark:shadow-gray-100/10
                     hover:shadow-xl transition-all duration-300"
        >
          <span>Next</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
        </Link>
      </motion.div>
    )}
  </motion.div>
)}

      </div>
    </section>
  );
};

export default ServiceRoadmap;
