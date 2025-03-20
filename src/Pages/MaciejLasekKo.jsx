import React, { useState } from 'react';

const MaciejLasekKo = () => {

  // State for likes, comments, etc.
  const [isFollowing, setIsFollowing] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [showMiniHeader, setShowMiniHeader] = useState(false);
  
  // Sample friends data
    // const friends = [
    //   { id: 1, img: "/api/placeholder/32/32" },
    //   { id: 2, img: "/api/placeholder/32/32" },
    //   { id: 3, img: "/api/placeholder/32/32" },
    //   { id: 4, img: "/api/placeholder/32/32" },
    //   { id: 5, img: "/api/placeholder/32/32" },
    //   { id: 6, img: "/api/placeholder/32/32" },
    //   { id: 7, img: "/api/placeholder/32/32" },
    //   { id: 8, img: "/api/placeholder/32/32" },
    // ];

  // Sample posts data
  const posts = [
    {
      id: 1,
      content: "Dzisiaj był wspaniały dzień! Dziękuję wszystkim za życzenia.",
      likes: 24,
      comments: 5,
      shares: 2,
      time: "3 godz."
    },
    {
      id: 2,
      content: "Nowe zdjęcia z wakacji już dostępne w galerii!",
      likes: 36,
      comments: 12,
      shares: 4,
      time: "1 dzień temu"
    }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 700) {
        setShowMiniHeader(true);
      } else {
        setShowMiniHeader(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen">
      {/* ETAP 1: Nawigacja */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 h-14">
        <div className="flex items-center justify-between px-2 md:px-4 h-full">
          {/* Left - Logo and Search */}
          <div className="flex items-center">
            <a href="/" className="mr-2">
            <svg
  viewBox="0 0 36 36"
  width={40}
  height={40}
  // fill убираем, чтобы пути могли иметь разные цвета
>
  {/* Круг */}
  <path
    fill="var(--fb-logo)"
    d="M20.181 35.87C29.094 34.791 36 27.202 36 18
       c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526
       13.652 17.471L14 34h5.5l.681 1.87Z"
  />

  {/* «F» */}
  <path
    fill="#fff"
    d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127
       2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983
       c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09
       4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0
       0 1-6.53-.399Z"
  />
</svg>
            </a>
            <div className="relative ml-1 hidden md:flex items-center">
    <input 
      type="text" 
      placeholder="Szukaj na Facebooku" 
      className="bg-gray-100 rounded-full py-2 px-4 pl-9 w-56 text-sm focus:outline-none"
    />
    <svg 
      className="w-4 h-4 text-gray-500 absolute left-3 top-2.5" 
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <button className="block md:hidden ml-2 bg-gray-100 p-2 rounded-full">
  <svg
    className="w-6 h-6 text-gray-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8
         a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 
         01-1.414 1.414l-4.816-4.816A6 6 
         0 012 8z"
      clipRule="evenodd"
    />
  </svg>
</button>

          </div>

          {/* Center - Navigation Icons */}
          <div className="hidden md:flex justify-center space-x-1 flex-1">
            <button className="px-10 py-2 rounded-md hover:bg-gray-100 text-gray-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--secondary-icon)"}}><path d="M8.99 23H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H8.99zM7.8 4.9l-2 1.5C4.15 7.638 3.61 8.074 3.317 8.658 3.025 9.242 3 9.937 3 12v4c0 1.442.002 2.424.101 3.159.095.706.262 1.033.485 1.255.223.223.55.39 1.256.485.734.099 1.716.1 3.158.1V14.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5V21c1.443 0 2.424-.002 3.159-.101.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.256.099-.734.101-1.716.101-3.158v-4c0-2.063-.025-2.758-.317-3.342-.291-.584-.832-1.02-2.483-2.258l-2-1.5c-1.174-.881-1.987-1.489-2.67-1.886C12.87 2.63 12.425 2.5 12 2.5c-.425 0-.87.13-1.53.514-.682.397-1.495 1.005-2.67 1.886zM14 21v-6.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21h4z"></path></svg></button>
            <button className="px-10 py-2 rounded-md hover:bg-gray-100 text-gray-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--secondary-icon)"}}><path d="M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z"></path></svg>
            </button>
            <button className="px-10 py-2 rounded-md hover:bg-gray-100 text-gray-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--secondary-icon)"}}><path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path><path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path></svg>
            </button>
            <button className="px-10 py-2 rounded-md hover:bg-gray-100 text-gray-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--secondary-icon)"}}><path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path></svg>
            </button>
            <button className="px-10 py-2 rounded-md hover:bg-gray-100 text-gray-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--secondary-icon)"}}><path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path><path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path></svg>
            </button>
          </div>

          {/* Right - User menu */}
          <div className="flex items-center space-x-2">
            <button className="rounded-full bg-gray-200 p-2 text-gray-700">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--primary-icon)"}}><path d="M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z"></path></svg>
            </button>
            <button className="rounded-full bg-gray-200 p-2 text-gray-700">
            <svg viewBox="0 0 12 13" width="20" height="20" fill="currentColor" aria-hidden="true" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--primary-icon)"}}><g fill-rule="evenodd" transform="translate(-450 -1073)"><path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path></g></svg>
            </button>
            <button className="rounded-full bg-gray-200 p-2 text-gray-700" onClick={() => setMessageOpen(!messageOpen)}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" class="xfx01vb x1lliihq x1tzjh5l x1k90msu x2h7rmj x1qfuztq" style={{"--color":"var(--primary-icon)"}}><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
            </button>
            <button className="rounded-full overflow-hidden">
              <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </header>

   
{/* ETAP 2: Verh profilya */}
 {/* Main content with padding to account for fixed header */}
 <main className="pt-12">
        {/* Mini profile header that appears on scroll f2f4f7 */}
        {showMiniHeader && (
          <div className="fixed z-40 top-14 left-0 right-0 bg-[#f2f4f7] shadow-sm py-3 px-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 cursor-pointer">
                <img src="assets/photo_111.jpg" alt="Maciej Lasek" className="w-11 h-11 rounded-full mr-3" />
                <h2 className="font-bold text-xl">Maciej Lasek</h2>
              </div>
            </div>
            <button className="p-2 rounded-md hover:bg-gray-200 bg-gray-200">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 10a2 2 0 110-4 2 2 0 010 4zM10 10a2 2 0 110-4 2 2 0 010 4zM14 10a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        )}
        
        <div className="bg-white shadow">
          {/* Cover image */}
          <div className="relative">
          <div className="relative w-full h-80 overflow-hidden" >
  {/* Картинка для больших экранов (>= md) */}
  <img 
    src="assets/backgroundM.jpg"
    alt="Cover"
    className="hidden md:block mx-auto max-w-[940px] w-full h-auto object-cover rounded-bl-md rounded-br-md"
  />

  {/* Блок с фоном для маленьких экранов (< md) */}
  <div
    className="block md:hidden w-full h-full bg-center bg-cover"
    style={{ backgroundImage: "url('assets/backgroundM.jpg')" }}
  >
  </div>
</div>

            

            {/* Profile image and info */}
            <div className="relative px-8 -mt-16 md:mt-10 flex flex-col md:flex-row md:items-end max-w-5xl mx-auto">
              <div className="z-10 relative -mt-16 flex justify-center md:justify-start w-full md:w-auto">
                <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white">
                  <img src="assets/photo_111.jpg" alt="Maciej Lasek" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Name and info */}
              <div className="mt-4 md:mt-0 md:ml-6 flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2">
              <h1 className="text-3xl font-bold text-gray-900 whitespace-nowrap">Maciej Lasek</h1>
              <svg viewBox="0 0 12 13" width="16" height="16"  title="Zweryfikowane konto" className="fill-[#1877F2] justify-center " style={{"--color":"var(--accent)"}}><title>Zweryfikowane konto</title><g fill-rule="evenodd" transform="translate(-98 -917)"><path d="m106.853 922.354-3.5 3.5a.499.499 0 0 1-.706 0l-1.5-1.5a.5.5 0 1 1 .706-.708l1.147 1.147 3.147-3.147a.5.5 0 1 1 .706.708m3.078 2.295-.589-1.149.588-1.15a.633.633 0 0 0-.219-.82l-1.085-.7-.065-1.287a.627.627 0 0 0-.6-.603l-1.29-.066-.703-1.087a.636.636 0 0 0-.82-.217l-1.148.588-1.15-.588a.631.631 0 0 0-.82.22l-.701 1.085-1.289.065a.626.626 0 0 0-.6.6l-.066 1.29-1.088.702a.634.634 0 0 0-.216.82l.588 1.149-.588 1.15a.632.632 0 0 0 .219.819l1.085.701.065 1.286c.014.33.274.59.6.604l1.29.065.703 1.088c.177.27.53.362.82.216l1.148-.588 1.15.589a.629.629 0 0 0 .82-.22l.701-1.085 1.286-.064a.627.627 0 0 0 .604-.601l.065-1.29 1.088-.703a.633.633 0 0 0 .216-.819"></path></g></svg>
              </div>
                <p className="text-gray-600 mt-1">9,4 tys. obserwujący • 176 obserwowanych</p>
              </div>
              
              {/* Action buttons */}
              <div className="mt-4 md:mt-0 flex space-x-2">
                <button className="flex items-center px-4 py-2 bg-blue-500 rounded-md font-semibold text-white">
                <img class="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/GblMT7svl0r.png" alt="" aria-hidden="true" height="16" width="16"/>
                  Wyślij wiadomość
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md font-semibold text-black flex items-center">
                <img class="x1b0d499 xep6ejk" src="https://static.xx.fbcdn.net/rsrc.php/v4/yp/r/YgPW3ny32AJ.png" alt="" aria-hidden="true" height="16" width="16"/>
                Obserwuj
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded-md font-semibold text-black flex items-center">
                <img class="x1b0d499 xaj1gnb " src="https://static.xx.fbcdn.net/rsrc.php/v4/y9/r/4JLxii282ZM.png" alt="" aria-hidden="true" height="16" width="16"/>
                Skontaktuj się z nami 
                </button>
              </div>
            </div>
          </div>
          
          {/* Large text banner
          <div className="relative max-w-5xl mx-auto mt-8 px-8">
            <div className="bg-gray-800 text-white py-10 px-6 rounded-lg">
              <h2 className="text-6xl font-bold text-center mb-2">TO LUDZIE</h2>
              <h3 className="text-4xl font-bold text-center">SĄ NAJWAŻNIEJSI</h3>
            </div>
          </div> */}

          {/* Navigation tabs - bottom aligned with cover section */}
          <div className="border-t border-gray-300 mt-10">
            {/* Desktop navigation */}
            <div className="hidden md:flex justify-between max-w-5xl mx-auto px-8">
              <div className="flex">
                <button className="px-4 py-3 font-semibold text-blue-600 border-b-4 border-blue-600 whitespace-nowrap">
                  Posty
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
                  Informacje
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
                  Wzmianki
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
                Zbiórki pieniędzy
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
                Rolki
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
                Zdjęcia
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap flex items-center">
                  Więcej 
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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
            
            {/* Mobile navigation - fewer options */}
            <div className="flex md:hidden px-4 justify-between">
              <div className="flex">
                <button className="px-4 py-3 font-semibold text-blue-600 border-b-4 border-blue-600 whitespace-nowrap">
                  Posty
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap">
                  Informacje
                </button>
                <button className="px-4 py-3 font-semibold text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap flex items-center">
                  Więcej 
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
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
          </div>
        </div>
</main>
        {/* ETAP 4: Content area */}
        <div className="px-4 md:px-8 mt-4 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left sidebar */}
            <div className="md:w-1/3">
              {/* Presentation section */}
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <h2 className="text-xl font-bold mb-3">Prezentacja</h2>
                <p className="text-center text-sm mb-6">
                Poseł na Sejm RP IX i X kadencji
<br />
Koalicja Obywalelska
•<br />
sekretarz stanu w Ministerstwie Infrastruktury
                </p>
                
                <hr className="my-4" />
                
                {/* Contact info */}
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                  <img className="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/yC/r/qF_eflLVarp.png" alt="" height="20" width="20"/>
                  <div>
                    <p><strong>Strona</strong> · Polityk</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img class="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/bwmGKGh4YjO.png" alt="" height="20" width="20"/>
                  <div>
                    <p>ul. Bracka 5 lok. 9, Warsaw, Poland</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img class="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/VIGUiR6qVQJ.png" alt="" height="20" width="20"/>
                  <div>
                    <p>888 888 470</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img className="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/KVUi1wUrbfb.png" alt="" height="20" width="20"/>
                  <div>
                    <p >maciej.lasek.biuro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img className="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/yD/r/zdayqvLx7zc.png" alt="" height="20" width="20"/>
                <div>
                    <a href="https://www.instagram.com/maciejlasek.ko/" className="font-medium text-blue-600">maciejlasek.ko</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img class="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/yf/r/UqeiKXBhSop.png" alt="" height="20" width="20"/>
                  <div>
                    <a href="https://x.com/LasekMaciej" className="font-medium text-blue-600">LasekMaciej</a>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded hover:bg-gray-100">
                <img class="x1b0d499 xuo83w3 opacity-40" src="https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/WcKE_W78lry.png" alt="" height="20" width="20"/>
                  <div>
                    <a href="https://www.tiktok.com/@maciejlasek.ko" className="font-medium text-blue-600">maciejlasek.ko</a>
                  </div>
                </div>
              </div>
              
              
              {/* Photo gallery */}
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold">Zdjęcia</h2>
                  <a href="#" className="text-blue-500 text-sm font-semibold">Zobacz wszystkie zdjęcia</a>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {/* First row */}
                  <div className="aspect-square bg-red-500 text-white rounded-md overflow-hidden relative">
                  <img src="assets/photo_121.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />

                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_122.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_123.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Second row */}
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_124.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_125.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_126.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Third row */}
                  <div className="aspect-square bg-blue-600 text-white rounded-md overflow-hidden relative">
                  <img src="assets/photo_127.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_128.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                  <img src="assets/photo_129.jpg" alt="Photo of a person in suit" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              
              {/* Friends list
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold">Znajomi</h2>
                  <a href="#" className="text-blue-500 text-sm font-semibold">Pokaż wszystkich znajomych</a>
                </div>
                <p className="text-gray-500 text-sm mb-3">4043 znajomych</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="aspect-square bg-gray-200 rounded-md overflow-hidden mb-1">
                      <img src="/api/placeholder/120/120?text=Person" alt="Friend silhouette" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="aspect-square bg-gray-200 rounded-md overflow-hidden mb-1">
                      <img src="/api/placeholder/120/120?text=Person2" alt="Friend portrait" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="aspect-square bg-gray-200 rounded-md overflow-hidden mb-1">
                      <img src="/api/placeholder/120/120?text=Person3" alt="Friend headshot" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            
            {/* ETAP 5: Main feed / posts */}
            <div className="md:w-2/3">
              {/* Featured posts section (Wyróżnione) */}
              
              {/* Filter bar */}
              <div className="bg-white rounded-lg shadow p-3 mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Posty</h2>
                <button className="flex items-center bg-gray-100 px-3 py-1.5 rounded-md text-sm font-medium">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                  </svg>
                  Filtry
                </button>
              </div>
              
              {/* Live stream post */}
              

              <div className="bg-white rounded-lg shadow mb-4">
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <img src="assets/photo_111.jpg" alt="Maja Ermer" className="w-10 h-10 rounded-full mr-2" />
                    <div>
                      <h3 className="font-semibold">Maja Ermer</h3>
                      <p className="text-xs text-gray-500">1 dzień temu ·</p>
                    </div>
                  </div>
                  
                  
                  {/* Photo grid */}
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    <p className="mb-3 w-[599px] md:w-full">Chciałbym zwrócić uwagę na proces sądowy w Baku dotyczący byłych liderów separatystów Karabachu, w tym Rubena Vardanyana. Jako poseł Sejmu uważam, że sprawa ta wykracza daleko poza ramy lokalnego konfliktu i dotyka fundamentalnych zasad prawa międzynarodowego. <br />
Dlaczego tak mówię? Spójrzmy na działania Vardanyana:<br />
• W 2022 roku przyjął propozycję objęcia stanowiska premiera struktury, która nie ma legitymacji w oczach społeczności międzynarodowej.<br />
• Według The Washington Times (https://www.washingtontimes.com/news/2023/jan/24/russia-threatens-peace-caucasus/) jego działalność prowokowała eskalację napięć etnicznych w regionie.<br />
• Analitycy Geopolitical Monitor (https://www.geopoliticalmonitor.com/the-kremlins-unorthodox-sway-over-south-caucasus-politics/) wskazują na jego rolę w zerwaniu negocjacji pokojowych między Azerbejdżanem a Armenią.<br />
Ale to tylko wierzchołek góry lodowej. Na długo przed wydarzeniami na Kaukazie Vardanyan był znany ze swoich kontrowersyjnych operacji finansowych:<br />
• Śledztwo OCCRP (https://www.occrp.org/en/troikalaundromat/vast-offshore-network-moved-billions-with-help-from-major-russian-bank) ujawniło zakrojoną na szeroką skalę schemat prania 4,6 miliarda dolarów przez offshore w latach 2006–2013.<br />
• W 2019 roku grupa posłów do Parlamentu Europejskiego wystąpiła z inicjatywą nałożenia na niego sankcji (http://hokmark.eu/letter-to-juncker-on-the-troika-laundromat-case/). (http://hokmark.eu/letter-to-juncker-on-the-troika-laundromat-case/)<br />
• W 2022 roku jego nazwisko pojawiło się w projekcie listy sankcyjnej (https://www.congress.gov/bill/117th-congress/house-bill/6422/text?format=txt) Kongresu USA.<br />
• Ponad 100 parlamentarzystów z Rumunii, Litwy, Łotwy, Ukrainy i krajów Unii Europejskiej wyrażało zaniepokojenie jego działalnością.<br />
Jestem głęboko przekonany, że separatyzm to destrukcyjna siła, która narusza normy międzynarodowe, stwarza zagrożenie dla stabilności regionalnej i sieje wrogość między narodami. Ci, którzy wybierają tę drogę, niezależnie od swoich motywów, powinni ponosić odpowiedzialność. Mam nadzieję, że proces sądowy w Baku stanie się ważnym sygnałem dla wszystkich, którzy próbują zdestabilizować sytuację w naszym regionie i poza nim.</p>
                    </div>
                  
                  {/* Post engagement stats */}
                  <div className="flex justify-between text-xs text-gray-500 border-t border-b py-2 mb-2">
                    <div className="flex items-center">
                      <div className="flex">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-1">
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
                      <span className="ml-1">36</span>
                    </div>
                    <div>
                      <span>0 komentarzy · 0 udostępnienia</span>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex justify-between">
                    <button className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
                      </svg>
                      Lubię to
                    </button>
                    <button className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                      </svg>
                      Komentarz
                    </button>
                    <button className="flex-1 py-1 text-gray-500 font-medium text-sm flex items-center justify-center hover:bg-gray-100 rounded">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
                      </svg>
                      Udostępnij
                    </button>
                  </div>
                </div>
              </div>

              

              {/* ETAP 6: Footer */}
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
      
      {/* Message dialog */}
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
              {/* Recent contacts */}
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                  <div className="relative">
                    <img src="assets/photo_111.jpg" alt={`Contact ${num}`} className="w-10 h-10 rounded-full" />
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
    </main>
  );

}

export default MaciejLasekKo