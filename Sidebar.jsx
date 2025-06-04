// import { useState } from "react";
// import { FaPlus, FaSort, FaPaintBrush, FaMagic, FaCheck, FaRobot, FaDownload, FaShareAlt, FaHistory, FaCrown, FaCopy } from "react-icons/fa";
// import html2pdf from "html2pdf.js";

// const Sidebar = ({ onSelectSection, onRearrange, resumeLink, onAddSection }) => {
//   const [showAddSectionModal, setShowAddSectionModal] = useState(false);
//   const [shareEnabled, setShareEnabled] = useState(false);
//   const [brandingEnabled, setBrandingEnabled] = useState(false);
//   const [showDownloadModal, setShowDownloadModal] = useState(false);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [showBrandingModal, setShowBrandingModal] = useState(false);
//   const [shareLink, setShareLink] = useState(resumeLink);
//   const [allowComments, setAllowComments] = useState(false);

//   const handleDownloadPDF = () => {
//     setShowDownloadModal(false);
//     setTimeout(() => {
//       const resumeElement = document.querySelector(".resume-main-container");
//       if (!resumeElement) {
//         alert("Resume not found!");
//         return;
//       }

//       const opt = {
//         margin: [10, 10, 10, 10],
//         filename: "resume.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//         pagebreak: { mode: ["avoid-all", "css", "legacy"] }
//       };

//       html2pdf().set(opt).from(resumeElement).save();
//     }, 300);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied to clipboard!");
//   };

//   const sections = [
//     {
//       id: "languages",
//       title: "LANGUAGES",
//       content: (
//         <>
//           <div className="space-y-2">
//             <div className="flex items-center justify-between">
//               <span className="font-medium">English</span>
//               <div className="flex space-x-1">
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//               </div>
//               <span className="text-sm text-gray-600">Proficient</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="font-medium">Spanish</span>
//               <div className="flex space-x-1">
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//                 <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//               </div>
//               <span className="text-sm text-gray-600">Advanced</span>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "projects",
//       title: "PROJECTS",
//       content: (
//         <>
//           <div className="space-y-4">
//             <div className="border-l-4 border-gray-800 pl-4">
//               <strong className="block text-lg">Tesla Model S for Kids</strong>
//               <div className="text-sm text-gray-600">01/2015 - 04/2016</div>
//               <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-700">
//                 <li>Designed a kid-friendly Model S car in collaboration with Tesla.</li>
//                 <li>Shot promotional videos and photography for marketing.</li>
//                 <li>Developed the packaging and branding for the product.</li>
//               </ul>
//             </div>
//           </div>
//         </>
//       ),
//     },
//   ];  

//   return (
//     <>
//       <div className="fixed left-0 top-0 w-64 h-screen flex flex-col bg-gray-900 text-white shadow-lg">
//         <div className="flex flex-col h-full w-full p-4 space-y-2">
//           <NavItem icon={<FaPlus />} label="Add Section" onClick={() => setShowAddSectionModal(true)} />
//           <NavItem icon={<FaSort />} label="Rearrange" onClick={onRearrange} />
//           <NavItem icon={<FaPaintBrush />} label="Design & Font" onClick={() => onSelectSection("design_font")} />
//           <NavItem icon={<FaMagic />} label="Improve Text" onClick={() => onSelectSection("improve_text")} />
//           <NavItem icon={<FaCheck />} label="ATS Check" onClick={() => onSelectSection("ats_check")} />
//           <NavItem icon={<FaRobot />} label="AI Assistant" onClick={() => onSelectSection("ai_assistant")} />
//           <NavItem icon={<FaDownload />} label="Download" onClick={() => setShowDownloadModal(true)} />
//           <NavItem icon={<FaShareAlt />} label="Share" onClick={() => setShowShareModal(true)} />
//           <NavItem icon={<FaHistory />} label="History" onClick={() => onSelectSection("history")} />
//           <NavItem icon={<FaCrown />} label="Branding" onClick={() => setShowBrandingModal(true)} toggle={true} active={brandingEnabled} setActive={setBrandingEnabled} />
//         </div>
//       </div>

//       {/* Add Section Modal */}
//       {showAddSectionModal && (
//         <div className="fixed inset-0 bg-grey bg-opacity-30 backdrop-blur-xs z-40 flex items-center justify-center"
//           onClick={() => setShowAddSectionModal(false)}
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowAddSectionModal(false)}
//             >
//               ❌
//             </button>
//             <h2 className="text-xl font-semibold mb-2">Add a new section</h2>
//             <p className="text-gray-600 text-sm mb-4">
//               Click on a section to add it to your resume
//             </p>
//             <div className="grid grid-cols-1 gap-3">
//               {sections.map((section) => (
//                 <div
//                   key={section.id}
//                   className="p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
//                   onClick={() => {
//                     onAddSection(section.id);
//                     setShowAddSectionModal(false);
//                   }}
//                 >
//                   <h3 className="font-medium text-gray-800">{section.title}</h3>
//                   <div className="mt-2 text-gray-600">{section.content}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Download Modal */}
//       {showDownloadModal && (
//         <div
//           className="fixed inset-0 bg-grey bg-opacity-30 backdrop-blur-xs flex items-center justify-center z-50"
//           onClick={() => setShowDownloadModal(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-2xl shadow-lg w-96 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowDownloadModal(false)}
//             >
//               ❌
//             </button>
//             <h2 className="text-lg font-semibold mb-2">Download Your Resume</h2>
//             <p className="text-gray-600 mb-4">Click the button to download your resume</p>
//             <button
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={handleDownloadPDF}
//             >
//               Download as PDF
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Share Modal */}
//       {showShareModal && (
//         <div
//           className="fixed inset-0 bg-grey bg-opacity-30 backdrop-blur-xs flex items-center justify-center z-50"
//           onClick={() => setShowShareModal(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-2xl shadow-lg w-96 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowShareModal(false)}
//             >
//               ❌
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Share</h2>

//             {/* Toggle for Share Link */}
//             <div className="flex justify-between items-center mb-3">
//               <span>Share Link</span>
//               <label className="relative inline-block w-10 h-5">
//                 <input
//                   type="checkbox"
//                   checked={shareEnabled}
//                   onChange={() => setShareEnabled(!shareEnabled)}
//                   className="sr-only peer"
//                 />
//                 <div className="w-full h-full bg-gray-300 rounded-full transition duration-300 peer-checked:bg-green-600"></div>
//                 <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
//               </label>
//             </div>

//             {/* Show input field only when shareEnabled is true */}
//             {shareEnabled && (
//               <div className="flex items-center bg-gray-100 p-2 rounded-lg">
//                 <input
//                   type="text"
//                   value={shareLink}
//                   readOnly
//                   className="bg-transparent flex-grow text-sm outline-none"
//                 />
//                 <button
//                   onClick={() => copyToClipboard(shareLink)}
//                   className="text-gray-600 hover:text-gray-800"
//                 >
//                   <FaCopy />
//                 </button>
//               </div>
//             )}

//             {/* Toggle for Comments */}
//             <div className="flex justify-between items-center mt-4">
//               <span>Get comments from friends</span>
//               <label className="relative inline-block w-10 h-5">
//                 <input
//                   type="checkbox"
//                   checked={allowComments}
//                   onChange={() => setAllowComments(!allowComments)}
//                   className="sr-only peer"
//                 />
//                 <div className="w-full h-full bg-gray-300 rounded-full transition duration-300 peer-checked:bg-green-600"></div>
//                 <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
//               </label>
//             </div>

//             {allowComments && (
//               <div className="flex items-center bg-gray-100 p-2 rounded-lg mt-3">
//                 <input
//                   type="text"
//                   value={shareLink + "?comments=true"}
//                   readOnly
//                   className="bg-transparent flex-grow text-sm outline-none"
//                 />
//                 <button
//                   onClick={() => copyToClipboard(shareLink + "?comments=true")}
//                   className="text-gray-600 hover:text-gray-800"
//                 >
//                   <FaCopy />
//                 </button>
//               </div>
//             )}

//             <p className="text-sm text-gray-500 mt-4">
//               Your resume is visible only to people who have this link and isn't publicly visible.
//             </p>
//           </div>
//         </div>
//       )}

//       {/* Branding Modal */}
//       {showBrandingModal && (
//         <div
//           className="fixed inset-0 bg-grey bg-opacity-30 backdrop-blur-xs flex items-center justify-center z-50"
//           onClick={() => setShowBrandingModal(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-2xl shadow-lg w-96 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowBrandingModal(false)}
//             >
//               ❌
//             </button>
//             <h2 className="text-lg font-semibold mb-4">Branding Options</h2>

//             {/* Toggle for Showing Branding */}
//             <div className="flex justify-between items-center">
//               <span>Show Branding</span>
//               <label className="relative inline-block w-10 h-5">
//                 <input
//                   type="checkbox"
//                   checked={brandingEnabled}
//                   onChange={() => setBrandingEnabled(!brandingEnabled)}
//                   className="sr-only peer"
//                 />
//                 <div className="w-full h-full bg-gray-300 rounded-full transition duration-300 peer-checked:bg-green-600"></div>
//                 <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
//               </label>
//             </div>

//             {brandingEnabled && (
//               <div className="mt-3 text-sm  text-gray-600">
//                 <p>Branding will be added to the resume footer.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

      
//     </>
//   );
// };


// const NavItem = ({ icon, label, onClick }) => {
//   return (
//     <div 
//       className="flex items-center p-3 rounded-lg cursor-pointer transition duration-200 
//                  hover:bg-gray-700" 
//       onClick={onClick}
//     >
//       {icon}
//       <span className="ml-2">{label}</span>
//     </div>
//   );
// };


// export default Sidebar;



// import { useState, useRef, useEffect } from "react";
// import { FaPlus, FaDownload, FaHistory, FaBars, FaTimes } from "react-icons/fa";
// import html2pdf from "html2pdf.js";

// const Sidebar = ({ onSelectSection }) => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showDownloadModal, setShowDownloadModal] = useState(false);
//   const resumeRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setShowSidebar(true); // Keep sidebar open on large screens (laptops/desktops)
//       } else {
//         setShowSidebar(false); // Toggle sidebar for mobile/tablets
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleDownloadPDF = () => {
//     setShowDownloadModal(false);

//     setTimeout(() => {
//       const resumeElement = document.querySelector(".resume-main-container");

//       if (!resumeElement) {
//         alert("Resume not found! Ensure your resume has the class 'resume-main-container'.");
//         return;
//       }

//       const opt = {
//         margin: 10,
//         filename: "resume.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 3, useCORS: true },
//         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//       };

//       html2pdf()
//         .from(resumeElement)
//         .set(opt)
//         .save()
//         .catch((error) => console.error("PDF Generation Error:", error));
//     }, 500);
//   };

//   return (
//     <>
//       {/* Sidebar Toggle Button (Mobile & iPad) */}
//       <button
//         className="fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md lg:hidden"
//         onClick={() => setShowSidebar(true)}
//       >
//         <FaBars size={24} />
//       </button>

//       {/* Transparent Clickable Overlay for Mobile & iPad */}
//       {showSidebar && (
//         <div
//           className="fixed inset-0 z-40 lg:hidden" // Removed background color
//           onClick={() => setShowSidebar(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-yellow-400 via-orange-400 via-pink-400 via-indigo-400 to-purple-400 text-black shadow-lg transform ${
//           showSidebar ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 lg:translate-x-0 lg:w-56 z-50`}
//       >
//         {/* Close Button for Mobile & iPad */}
//         <button
//           className="absolute top-3 right-3 text-black lg:hidden"
//           onClick={() => setShowSidebar(false)}
//         >
//           <FaTimes size={24} />
//         </button>

//         <div className="flex flex-col h-full p-4 space-y-3">
//           <h2 className="text-lg font-bold hidden lg:block">Resume Tools</h2>
//           <NavItem icon={<FaPlus />} label="Add Section" onClick={() => console.log("Add Section Clicked")} />
//           <NavItem icon={<FaDownload />} label="Download" onClick={() => setShowDownloadModal(true)} />
//           <NavItem icon={<FaHistory />} label="History" onClick={() => onSelectSection("history")} />
//         </div>
//       </div>

//       {/* Download Modal */}
//       {showDownloadModal && (
//         <div
//           className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setShowDownloadModal(false)}
//         >
//           <div
//             className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
//               onClick={() => setShowDownloadModal(false)}
//             >
//               ❌
//             </button>
//             <h2 className="text-lg font-semibold mb-2">Download Your Resume</h2>
//             <p className="text-gray-600 mb-4">Click the button to download your resume</p>
//             <button
//               className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//               onClick={handleDownloadPDF}
//             >
//               Download as PDF
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Sidebar Item Component
// const NavItem = ({ icon, label, onClick }) => {
//   return (
//     <div
//       className="flex items-center p-3 rounded-lg cursor-pointer transition duration-200 hover:bg-white hover:text-black"
//       onClick={onClick}
//     >
//       {icon}
//       <span className="ml-2">{label}</span>
//     </div>
//   );
// };

// export default Sidebar;




// import { useState } from "react";
// import { FaPlus, FaDownload, FaHistory, FaTimes } from "react-icons/fa";
// import html2pdf from "html2pdf.js";

// const Sidebar = ({ isOpen, onClose }) => {
//   const [showDownloadModal, setShowDownloadModal] = useState(false);

//   const handleDownloadPDF = () => {
//     setShowDownloadModal(false);

//     setTimeout(() => {
//       const resumeElement = document.querySelector(".resume-main-container");

//       if (!resumeElement) {
//         alert("Resume not found!");
//         return;
//       }

//       const opt = {
//         margin: 10,
//         filename: "resume.pdf",
//         image: { type: "jpeg", quality: 0.98 },
//         html2canvas: { scale: 3, useCORS: true },
//         jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//       };

//       html2pdf().from(resumeElement).set(opt).save();
//     }, 500);
//   };

//   return (
//     <>
//       {/* Mobile Overlay (Fixes Half Black Screen Issue) */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
//           onClick={onClose}
//         ></div>
//       )}

//       {/* Sidebar Container (Full Height & Visible in Mobile, Tablet, Desktop) */}
//       <div
//         className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-yellow-400 via-orange-400 via-pink-400 via-indigo-400 to-purple-400 text-black shadow-lg transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 md:translate-x-0 md:relative z-50 flex flex-col`}
//       >
//         {/* Close Button for Mobile */}
//         <button
//           className="absolute top-4 right-4 text-black md:hidden"
//           onClick={onClose}
//         >
//           <FaTimes size={24} />
//         </button>

//         {/* Sidebar Content (Only Buttons Visible in All Views) */}
//         <div className="flex flex-col h-full p-4 space-y-3">
//           <h2 className="text-lg font-bold">Resume Tools</h2>

//           <NavItem icon={<FaPlus />} label="Add Section" />
//           <NavItem icon={<FaDownload />} label="Download" onClick={() => setShowDownloadModal(true)} />
//           <NavItem icon={<FaHistory />} label="History" />
//         </div>
//       </div>

//       {/* Download Modal */}
//       {showDownloadModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowDownloadModal(false)}>
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full relative" onClick={(e) => e.stopPropagation()}>
//             <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={() => setShowDownloadModal(false)}>
//               ❌
//             </button>
//             <h2 className="text-lg font-semibold mb-2">Download Your Resume</h2>
//             <p className="text-gray-600 mb-4">Click the button to download your resume</p>
//             <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" onClick={handleDownloadPDF}>
//               Download as PDF
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// // Sidebar Item Component
// const NavItem = ({ icon, label, onClick }) => {
//   return (
//     <div className="flex items-center p-3 rounded-lg cursor-pointer transition duration-200 hover:bg-white hover:text-black" onClick={onClick}>
//       {icon && <span className="mr-2">{icon}</span>}
//       <span>{label}</span>
//     </div>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { FaPlus, FaDownload, FaHistory, FaTimes, FaBars } from "react-icons/fa";
import html2pdf from "html2pdf.js";

const Sidebar = ({ onAddSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleDownloadPDF = () => {
    setShowDownloadModal(false);

    setTimeout(() => {
      const resumeElement = document.querySelector(".resume-main-container");

      if (!resumeElement) {
        alert("Resume not found!");
        return;
      }

      const opt = {
        margin: 10,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 3, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(resumeElement).set(opt).save();
    }, 500);
  };

  return (
    <>
      {/* Toggle Button (Only for Mobile View) */}
      <button
        className="md:hidden fixed top-4 left-4 bg-black text-white p-3 rounded-full z-50"
        onClick={() => setIsOpen(true)}
      >
        <FaBars />
      </button>

      {/* Sidebar Container (Visible by default on desktop, toggles on mobile) */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-yellow-400 via-orange-400 via-pink-400 via-indigo-400 to-purple-400 text-black shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:relative z-50 flex flex-col`}
      >
        {/* Close Button (Only for Mobile View) */}
        <button
          className="absolute top-4 right-4 text-black md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full p-4 space-y-3">
          <h2 className="text-lg font-bold">Resume Tools</h2>

          <NavItem icon={<FaPlus />} label="Add Section" onClick={onAddSection} />
          <NavItem icon={<FaDownload />} label="Download" onClick={() => setShowDownloadModal(true)} />
          <NavItem icon={<FaHistory />} label="History" />
        </div>
      </div>

      {/* Mobile Overlay (Closes Sidebar on Click) */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40" onClick={() => setIsOpen(false)}></div>}

      {/* Download Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowDownloadModal(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={() => setShowDownloadModal(false)}>
              ❌
            </button>
            <h2 className="text-lg font-semibold mb-2">Download Your Resume</h2>
            <p className="text-gray-600 mb-4">Click the button to download your resume</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition" onClick={handleDownloadPDF}>
              Download as PDF
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Sidebar Item Component
const NavItem = ({ icon, label, onClick }) => (
  <div
    className="flex items-center p-3 rounded-lg cursor-pointer transition duration-200 hover:bg-white hover:text-black"
    onClick={onClick}
  >
    {icon} <span className="ml-2">{label}</span>
  </div>
);

export default Sidebar;
