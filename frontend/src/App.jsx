import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
<div className="flex items-center justify-center min-h-screen w-full bg-white overflow-hidden">
  <div data-layer="Create Account" className="CreateAccount w-full h-screen max-w-none relative bg-white scale-75 lg:scale-90 xl:scale-100">
    <div data-layer="Main Bg" className="MainBg w-full h-full left-0 top-0 absolute bg-[#6896ff]" />
  <div data-layer="Rectangle 32" className="Rectangle32 w-36 h-screen right-[11%] top-0 absolute origin-top-left rotate-[62.07deg] bg-[#c6c1ea]" />
  <div data-svg-wrapper data-layer="Polygon 3" className="Polygon3 left-0 bottom-[15%] absolute">
    <svg width="205" height="154" viewBox="0 0 205 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5994 0.201522C0.940065 -0.292182 2.06218e-06 0.178285 2.06218e-06 1.00197V69.2304V153.004C2.06218e-06 153.556 0.447717 154.004 1 154.004H203.996C204.958 154.004 205.365 152.78 204.596 152.203L1.5994 0.201522Z" fill="#5647C2"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 1" className="Polygon1 left-0 top-[64%] absolute">
    <svg width="96" height="155" viewBox="0 0 96 155" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.54727e-06 0V70.2265V155H96L4.54727e-06 0Z" fill="#C6C1EA"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 11" className="Polygon11 right-[11%] top-0 absolute">
    <svg width="155" height="154" viewBox="0 0 155 154" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M152.872 153.306C153.503 153.933 154.577 153.486 154.577 152.597V84.7735V0.999995C154.577 0.447711 154.129 -7.39098e-06 153.577 -7.39098e-06H1.0019C0.10944 -7.39098e-06 -0.336022 1.08034 0.297065 1.70937L152.872 153.306Z" fill="#C6C1EA"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 12" className="Polygon12 right-[11%] top-[0.3%] absolute">
    <svg width="154" height="119" viewBox="0 0 154 119" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.389675 117.172C-0.364107 117.756 0.0485695 118.963 1.00185 118.963L68.3032 118.963L152.077 118.963C152.629 118.963 153.077 118.515 153.077 117.963L153.077 1.00175C153.077 0.170636 152.122 -0.29776 151.464 0.211025L0.389675 117.172Z" fill="#C6C1EA"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 14" className="Polygon14 right-[2%] top-[8%] absolute">
    <svg width="31" height="56" viewBox="0 0 31 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0L14.0453 0H31L31 56L0 0Z" fill="#8E84D6"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 16" className="Polygon16 right-[11%] top-0 absolute">
    <svg width="64" height="123" viewBox="0 0 64 123" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.90735e-06L28.9968 1.90735e-06H64L64 123L0 1.90735e-06Z" fill="#C6C1EA"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 17" className="Polygon17 right-[10%] top-0 absolute">
    <svg width="64" height="117" viewBox="0 0 64 117" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 5.72205e-06L28.9968 5.72205e-06H64L64 117L0 5.72205e-06Z" fill="#C6C1EA"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 15" className="Polygon15 right-[2%] top-[7%] absolute">
    <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15L13.5922 15L30 15L30 0L0 15Z" fill="#8E84D6"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 13" className="Polygon13 right-[11%] top-[16%] absolute">
    <svg width="155" height="236" viewBox="0 0 155 236" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.163661 234.088C-0.269561 234.753 0.207779 235.634 1.00162 235.634L69.3835 235.634L153.157 235.634C153.709 235.634 154.157 235.186 154.157 234.634L154.157 1.00168C154.157 0.00670788 152.862 -0.377799 152.319 0.455948L0.163661 234.088Z" fill="#5647C2"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 10" className="Polygon10 left-0 top-0 absolute">
    <svg width="212" height="142" viewBox="0 0 212 142" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M211.361 -0.000209354L115.599 -0.000209354H-4.77433e-05L-4.77433e-05 141.937L211.361 -0.000209354Z" fill="#E2E0F4"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 21" className="Polygon21 right-[15%] bottom-[13%] absolute">
    <svg width="212" height="142" viewBox="0 0 212 142" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 141.937L95.7624 141.937H211.361L211.361 0L0 141.937Z" fill="#E2E0F4"/>
    </svg>
  </div>
  <div data-layer="Rectangle 34" className="Rectangle34 w-36 h-screen right-[5%] top-[26%] absolute origin-top-left rotate-[62.07deg] bg-[#5647c2]" />
  <div data-svg-wrapper data-layer="Polygon 4" className="Polygon4 left-0 bottom-[13%] absolute">
    <svg width="199" height="140" viewBox="0 0 199 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M197.245 138.905C197.908 139.367 198.817 138.893 198.817 138.085V76.5696V1.00001C198.817 0.447721 198.369 4.17233e-06 197.817 4.17233e-06H1.00189C0.0229763 4.17233e-06 -0.372918 1.26109 0.43035 1.82058L197.245 138.905Z" fill="#5647C2"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 2" className="Polygon2 left-0 top-[77%] absolute">
    <svg width="115" height="171" viewBox="0 0 115 171" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.83279 0.448076C1.28468 -0.376468 -1.05676e-06 0.0115625 -1.05676e-06 1.00166V76.0728V169.691C-1.05676e-06 170.243 0.447714 170.691 0.999999 170.691H113.134C113.933 170.691 114.409 169.802 113.967 169.137L1.83279 0.448076Z" fill="#8E84D6"/>
    </svg>
  </div>
  <div data-layer="Rectangle 36" className="Rectangle36 w-32 h-16 left-[0.03%] bottom-[6%] absolute origin-top-left rotate-[-26.58deg] bg-[#5647c2]" />
  <div data-svg-wrapper data-layer="Polygon 18" className="Polygon18 right-[4%] top-[23%] absolute">
    <svg width="56" height="31" viewBox="0 0 56 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 31V16.9547L0 0L56 0L0 31Z" fill="#8E84D6"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 19" className="Polygon19 right-[12%] top-[12%] absolute">
    <svg width="178" height="111" viewBox="0 0 178 111" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M178 0V50.2913L178 111L0 111L178 0Z" fill="#8E84D6"/>
    </svg>
  </div>
  <div data-svg-wrapper data-layer="Polygon 20" className="Polygon20 left-0 top-[63%] absolute">
    <svg width="96" height="155" viewBox="0 0 96 155" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-3.8147e-06 0V70.2265V155H96L-3.8147e-06 0Z" fill="#C6C1EA"/>
    </svg>
  </div>
  <div data-layer="Rectangle 33" className="Rectangle33 w-36 h-screen right-[6%] top-[11%] absolute origin-top-left rotate-[62.07deg] bg-[#8e84d6]" />
  <div data-layer="Rectangle 40" className="Rectangle40 w-24 h-16 right-[8%] top-[12%] absolute origin-top-left rotate-[-28.73deg] bg-[#8e84d6]" />
  {/* Main Content Container - Centered Form */}
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div data-layer="Bg" className="Bg w-[686px] h-[881px] bg-[#e2e0f4] rounded-3xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.03)] border-[0.30px] border-[#b8b8b8] relative" />
    <div data-layer="Bg" className="Bg w-[630px] h-[825px] bg-white rounded-3xl shadow-[2px_3px_14.199999809265137px_0px_rgba(0,0,0,0.24)] border-[0.30px] border-[#b8b8b8] absolute flex flex-col justify-between p-8">
      
      {/* Header */}
      <div className="text-center mt-16">
        <div data-layer="Create an Account" className="CreateAnAccount text-[#202224] text-3xl font-bold font-['Nunito_Sans'] mb-4">Create an Account</div>
        <div data-layer="Create a account to" className="CreateAAccountTo opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Create a account to continue</div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex flex-col justify-center space-y-6 px-4">
        {/* Email Field */}
        <div>
          <div data-layer="Email address:" className="EmailAddress opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans'] mb-2">Email address:</div>
          <input 
            type="email"
            placeholder="esteban_schiller@gmail.com"
            className="w-full h-14 px-4 bg-[#f1f4f9] rounded-lg border border-[#d7d7d7] text-[#a6a6a6] text-lg font-semibold font-['Nunito_Sans'] focus:outline-none focus:border-[#4880ff]"
          />
        </div>

        {/* Username Field */}
        <div>
          <div data-layer="Username" className="Username opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans'] mb-2">Username</div>
          <input 
            type="text"
            placeholder="Username"
            className="w-full h-14 px-4 bg-[#f1f4f9] rounded-lg border border-[#d7d7d7] text-[#a6a6a6] text-lg font-semibold font-['Nunito_Sans'] focus:outline-none focus:border-[#4880ff]"
          />
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <div data-layer="Password" className="Password opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Password</div>
            <div data-layer="Forget Password?" className="ForgetPassword opacity-60 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Forget Password?</div>
          </div>
          <input 
            type="password"
            placeholder="••••••"
            className="w-full h-14 px-4 bg-[#f1f4f9] rounded-lg border border-[#d7d7d7] text-[#a6a6a6] text-lg font-semibold font-['Nunito_Sans'] focus:outline-none focus:border-[#4880ff]"
          />
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center space-x-3">
          <div data-svg-wrapper data-layer="Bo" className="Bo relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.3" y="0.3" width="23.4" height="23.4" rx="5.7" stroke="#A3A3A3" strokeWidth="0.6"/>
            </svg>
            <div data-layer="Bo" className="Bo size-6 absolute top-0 left-0 bg-black rounded-md border-[0.60px] border-[#a2a2a2]" />
            <div data-svg-wrapper data-layer="Shape" className="Shape absolute top-[8.40px] left-[6.60px]">
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.02426 3.77574C0.78995 3.54142 0.410051 3.54142 0.175736 3.77574C-0.0585786 4.01005 -0.0585786 4.38995 0.175736 4.62426L3.17574 7.62426C3.41005 7.85858 3.78995 7.85858 4.02426 7.62426L10.6243 1.02426C10.8586 0.78995 10.8586 0.410051 10.6243 0.175736C10.3899 -0.0585786 10.0101 -0.0585786 9.77574 0.175736L3.6 6.35147L1.02426 3.77574Z" fill="#656565"/>
              </svg>
            </div>
          </div>
          <div data-layer="I accept terms and c" className="IAcceptTermsAndC opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">I accept terms and conditions</div>
        </div>

        {/* Sign Up Button */}
        <Link 
          to="/login"
          className="w-full h-14 opacity-90 bg-[#4880ff] hover:bg-[#91b1fb] rounded-lg flex items-center justify-center transition-colors"
        >
          <span className="text-center text-white text-xl font-bold font-['Nunito_Sans']">Sign Up</span>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center mb-8">
        <div data-layer="Already have an acco" className="AlreadyHaveAnAcco opacity-60 inline"><span className="text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Already have an account?  </span></div>
        <Link 
          to="/login"
          data-layer="Login" 
          className="Login text-[#5a8cff] text-lg font-bold font-['Nunito_Sans'] underline"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
  </div>
</div>
  )
}

export default App
