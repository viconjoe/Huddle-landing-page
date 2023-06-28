import { useState } from 'react'
import './App.css'



function App() {
  
  const [clicked, setClicked] = useState (false)
  const [chooseFace, setChooseFace] = useState (false)
  const [chooseTwitter, setChooseTwitter] = useState (false)
  const [chooseInstagram, setChooseInstagram] = useState (false)

  const handleRegister = () => {
    setClicked(!clicked)
  }
  const handleChooseFace = (e) => {
    setChooseFace(!chooseFace)
    if (chooseTwitter) setChooseTwitter(false)
    if (chooseInstagram) setChooseInstagram(false)
  }
  const handleChooseTwitter = (e) => {
    if (chooseFace) setChooseFace(false)
    setChooseTwitter(!chooseTwitter)
    if (chooseInstagram) setChooseInstagram(false)
  }
  const handleChooseInstagram = (e) => {
    if (chooseFace) setChooseFace(false)
    if (chooseTwitter) setChooseTwitter(false)
    setChooseInstagram(!chooseInstagram)
  }
  
  return (
        <>
          <div className='mother-box'>
    
            <div className='mobile'>
    
              <div className='middle-mobile'>
    
                <div className='header'>
                  <img className='chat' src='../images/logo.svg'/>
                </div>
    
                <div className='illustration-box'>
                  <img className='illustration' src='../images/illustration-mockups.svg'/>
                </div>
    
              </div>

              <div className='middle-desk'>

                <div className='header-desk'>
                  <img className='chat-desk' src='../images/logo.svg'/>
                </div>
    
                <div className='illustration-box-desk'>
                  <img className='illustration-desk' src='../images/illustration-mockups.svg'/>
                </div>

              </div>
    
              <div className='down-box'>
                
    
                <div className='content'>
                  <p id='title'>Build The Community Your Fans Will Love</p>
                </div>
    
                <div className='annonce'>
                  <p>Huddle re-imagines the way we build communities. you have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                </div>
    
                <div onClick={handleRegister} className={ clicked ? 'activated' : 'btn' }>Register</div>
                
                <div className='Footer'>
                  
                  <div className='social-media'>
                    <div className='icon-circle'>
                      <img onClick={handleChooseFace} className={ chooseFace ? 'icon-media-activated' : 'icon-media'} src='../images/logo-facebook.svg'/>
                    </div>
                    <div className='icon-circle'>
                      <img onClick={handleChooseInstagram} className={ chooseInstagram ? 'icon-media-activated' : 'icon-media'} src='../images/logo-twitter.svg'/>
                    </div>
                    <div className='icon-circle'>
                      <img onClick={handleChooseTwitter} className={ chooseTwitter ? 'icon-media-activated-twitter' : 'icon-media'} src='../images/logo-instagram.svg'/>
                    </div>
                  </div>
    
                </div>
              </div>
    
            </div>
    
          </div>
        </>
      )
}

export default App
