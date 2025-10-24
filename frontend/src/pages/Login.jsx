import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberPassword })
    // Navigate to dashboard
    navigate('/dashboard')
  }

  return (
<div className="flex items-center justify-center min-h-screen w-full bg-white overflow-hidden">
  <div data-layer="LLogin" className="Llogin w-full h-screen max-w-none relative bg-white scale-75 lg:scale-90 xl:scale-100">
    {/* Diagonal Stripes Background */}
    <div className="w-full h-full absolute inset-0 overflow-hidden bg-[#6896FF]">
      <svg className="w-full h-full" viewBox="0 0 1124 836" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Blue background */}
        <rect width="1124" height="836" fill="#6896FF" />
        
        {/* Three centered diagonal stripes */}
        <polygon points="0,300 1124,380 1124,420 0,340" fill="#C6C1EA" />
        <polygon points="0,340 1124,420 1124,460 0,380" fill="#8E84D6" />
        <polygon points="0,380 1124,460 1124,500 0,420" fill="#5647C2" />
      </svg>
    </div>

    {/* Main Content Container - Centered Form */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div data-layer="Bg" className="Bg w-[698px] h-[815px] bg-[#e2e0f4] rounded-3xl shadow-[6px_6px_54px_0px_rgba(0,0,0,0.03)] border-[0.30px] border-[#b8b8b8] relative" />
      <div data-layer="Bg" className="Bg w-[630px] h-[735px] bg-white rounded-3xl shadow-[2px_3px_14.199999809265137px_0px_rgba(0,0,0,0.24)] border-[0.30px] border-[#b8b8b8] absolute flex flex-col justify-between p-8">
        
        {/* Header */}
        <div className="text-center mt-16">
          <div data-layer="Login to Account" className="LoginToAccount text-[#202224] text-3xl font-bold font-['Nunito_Sans'] mb-4">Login to Account</div>
          <div data-layer="Please enter your em" className="PleaseEnterYourEm opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Please enter your email and password to continue</div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center space-y-6 px-4">
          {/* Email Field */}
          <div>
            <div data-layer="Email address:" className="EmailAddress opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans'] mb-2">Email address:</div>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="esteban_schiller@gmail.com"
              className="w-full h-14 px-4 bg-[#f1f4f9] rounded-lg border border-[#d7d7d7] text-[#a6a6a6] text-lg font-semibold font-['Nunito_Sans'] focus:outline-none focus:border-[#4880ff]"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div data-layer="Password" className="Password opacity-80 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Password</div>
              <div data-layer="Forget Password?" className="ForgetPassword opacity-60 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Forget Password?</div>
            </div>
            <div className="relative">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 px-4 bg-[#f1f4f9] rounded-lg border border-[#d7d7d7] text-[#a6a6a6] text-lg font-semibold font-['Nunito_Sans'] focus:outline-none focus:border-[#4880ff]"
              />
              {/* Password dots */}
            </div>
          </div>

          {/* Remember Password Checkbox */}
          <div className="flex items-center space-x-3">
            <div data-svg-wrapper data-layer="Bo" className="Bo relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.3" y="0.3" width="23.4" height="23.4" rx="5.7" stroke="#A3A3A3" strokeWidth="0.6"/>
              </svg>
              <input
                type="checkbox"
                checked={rememberPassword}
                onChange={(e) => setRememberPassword(e.target.checked)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {rememberPassword && (
                <>
                  <div data-layer="Bo" className="Bo size-6 absolute top-0 left-0 bg-black rounded-md border-[0.60px] border-[#a2a2a2]" />
                  <div data-svg-wrapper data-layer="Shape" className="Shape absolute top-[8.40px] left-[6.60px]">
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.02426 3.77574C0.78995 3.54142 0.410051 3.54142 0.175736 3.77574C-0.0585786 4.01005 -0.0585786 4.38995 0.175736 4.62426L3.17574 7.62426C3.41005 7.85858 3.78995 7.85858 4.02426 7.62426L10.6243 1.02426C10.8586 0.78995 10.8586 0.410051 10.6243 0.175736C10.3899 -0.0585786 10.0101 -0.0585786 9.77574 0.175736L3.6 6.35147L1.02426 3.77574Z" fill="#656565"/>
                    </svg>
                  </div>
                </>
              )}
            </div>
            <div data-layer="Remember Password" className="RememberPassword opacity-60 text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Remember Password</div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full h-14 login rounded-lg flex items-center justify-center transition-colors focus:outline-none"
          >
            <span className="text-center text-white text-xl font-bold font-['Nunito_Sans']">Sign In</span>
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mb-8">
          <div data-layer="Don't have an accoun" className="DonTHaveAnAccoun opacity-60 inline"><span className="text-[#202224] text-lg font-semibold font-['Nunito_Sans']">Don't have an account?  </span></div>
          <Link 
            to="/"
            data-layer="Create Account" 
            className="CreateAccount text-[#5a8cff] text-lg font-bold font-['Nunito_Sans'] underline"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login
