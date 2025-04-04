import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import MotionDiv from '../Motion/MotionDiv'
import SidebarContent from "../SidebarContent/SidebarContent";

const Sidebar = ({ isSmallScreen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  return (
    <>
      {!isSmallScreen ? (
        <SidebarContent isSmallScreen={isSmallScreen} />
      ) : (
        <>
          {isSmallScreen && (
            <nav className="bg-[rgb(var(--color-sidebar))] w-full z-99 fixed pt-4 pb-4 pl-7 pr-7">
              <div className="flex justify-between items-center">
                <button onClick={openModal} className="text-primary">
                  <Menu size={30} />
                </button>


                {!isOpen && <h2 className="font-extrabold text-heading text-2xl">
                  <picture>
                    <source srcset="/code-crush-logo.webp" type="image/webp" />
                    <img
                      alt="CodeCrush Logo"
                      class="object-contain max-w-[80px]"
                      src="/code-crush-logo-80.png"
                      width="80"
                      height="80"
                      loading="lazy" />
                  </picture>

                </h2>}
              </div>
            </nav>
          )}

          {/* Sidebar Modal with Transition */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop */}
                <MotionDiv
                  classes="fixed inset-0 bg-opacity-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeModal} // Close on backdrop click
                />

                {/* Modal Dialog */}
                <MotionDiv
                  ref={dialogRef}
                  classes="fixed w-full h-full bg-[rgb(var(--color-sidebar))] shadow-lg overflow-y-auto z-999"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                >
                  <div className="flex justify-end">
                    <button onClick={closeModal} className="absolute text-primary top-7.5 right-4 hover:text-muted">
                      <X size={24} />
                    </button>
                  </div>

                  {/* Modal Content - Centered */}
                  <div className="flex flex-col items-center text-center text-white">
                    <SidebarContent closeSideBarModal={closeModal} isSmallScreen={isSmallScreen} isOpen={isOpen} />
                  </div>
                </MotionDiv>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Sidebar;
