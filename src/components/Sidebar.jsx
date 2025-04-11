import React from 'react'
import GameCard from './GameCard'

const modes = ['/classicManual.png', '/popular.png']

const Sidebar = () => {
  return (
    <>

      <div className="game-cards">
        <div className='kyc-alertBox'>
          <div className="kyc-alert">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_10_1701)">
                <path d="M9.99975 13.7064C9.44061 13.7064 8.97192 14.175 8.97192 14.7342C8.97192 15.2933 9.44061 15.762 9.99975 15.762C10.5383 15.762 11.0276 15.2933 11.0029 14.7589C11.0276 14.1709 10.563 13.7064 9.99975 13.7064Z" fill="white" />
                <path d="M19.5133 17.349C20.1588 16.2348 20.1629 14.9069 19.5215 13.7968L13.0832 2.64694C12.446 1.52455 11.2948 0.858521 10.0039 0.858521C8.71291 0.858521 7.56175 1.52866 6.92449 2.64283L0.477959 13.805C-0.163405 14.9274 -0.159294 16.2636 0.490293 17.3778C1.13166 18.4796 2.27871 19.1415 3.56144 19.1415H16.4216C17.7085 19.1415 18.8637 18.4714 19.5133 17.349ZM18.1155 16.5432C17.7578 17.1599 17.1247 17.5258 16.4175 17.5258H3.55733C2.85841 17.5258 2.22938 17.1681 1.87992 16.5637C1.52634 15.9511 1.52223 15.2193 1.8758 14.6026L8.32234 3.44453C8.6718 2.83195 9.29672 2.47015 10.0039 2.47015C10.7069 2.47015 11.3359 2.83606 11.6854 3.44865L18.1278 14.6067C18.4732 15.207 18.4691 15.9306 18.1155 16.5432Z" fill="white" />
                <path d="M9.7449 6.49099C9.25565 6.63078 8.95142 7.0748 8.95142 7.61338C8.97608 7.93817 8.99664 8.26708 9.02131 8.59187C9.0912 9.82938 9.16109 11.0422 9.23098 12.2797C9.25565 12.6991 9.58045 13.0033 9.9998 13.0033C10.4192 13.0033 10.7481 12.6785 10.7686 12.255C10.7686 12.0001 10.7686 11.7658 10.7933 11.5068C10.8385 10.7133 10.8878 9.91982 10.9331 9.12634C10.9577 8.61243 11.003 8.09851 11.0276 7.5846C11.0276 7.39959 11.003 7.23514 10.9331 7.07069C10.7234 6.61022 10.2341 6.37588 9.7449 6.49099Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_10_1701">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Please Complete your KYC.
          </div>
        </div>
        {modes.map((mode, index) => (
          <GameCard key={index} mode={mode} />
        ))}
        <div className="game-cards-inner">
          <div className="FixCard-box">
            <img src="/saffron.png" alt="" />
          </div>
          <div className="FixCard-box">
            <img src="/whatsapp.png" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Sidebar
