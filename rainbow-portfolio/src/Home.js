import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '1rem',
    backgroundColor: 'white',
    color: 'black'
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setShowContact(false);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'black' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '160px',
        zIndex: 1,
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '60px',
          height: '395px'
        }}>
          <div style={{
            width: '700px',
            maxWidth: '95%',
            height: '300px',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
            overflow: 'hidden'
          }}>
            <div style={{
              backgroundColor: '#FF0000',
              height: '60px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <h1 style={{
                color: 'white',
                fontSize: '1.6rem',
                margin: 0
              }}>
                Welcome to My Portfolio!
              </h1>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '40px 20px'
            }}>
              <Link to="/gallery" style={{ textAlign: 'center', textDecoration: 'none', color: 'black' }}>
                <img src="/work.png" alt="My Work" style={{ width: '100px', height: '100px' }} />
                <div style={{ marginTop: '12px', fontSize: '1.1rem' }}>My Work</div>
              </Link>

              <button onClick={() => setShowAbout(true)} style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                color: 'black'
              }}>
                <img src="/portrait.png" alt="About Me" style={{ width: '100px', height: '100px' }} />
                <div style={{ marginTop: '12px', fontSize: '1.1rem' }}>About Me</div>
              </button>

              <button onClick={() => setShowContact(true)} style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                color: 'black'
              }}>
                <img src="/contact.png" alt="Contact" style={{ width: '100px', height: '100px' }} />
                <div style={{ marginTop: '12px', fontSize: '1.1rem' }}>Contact</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Waves */}
<div style={{
position: 'fixed',
bottom: 0,
left: 0,
width: '100%',
height: '200px',
overflow: 'hidden',
zIndex: 0
}}>
<Wave fill="#FF0000" paused={false} options={{ height: 40, amplitude: 30, speed: 0.2, points: 5 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.6, zIndex: 7 }} />
<Wave fill="#FF7F00" paused={false} options={{ height: 20, amplitude: 28, speed: 0.18, points: 6 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.6, zIndex: 6 }} />
<Wave fill="#FFFF00" paused={false} options={{ height: 20, amplitude: 26, speed: 0.16, points: 5 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.5, zIndex: 5 }} />
<Wave fill="#00FF00" paused={false} options={{ height: 20, amplitude: 24, speed: 0.14, points: 6 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.5, zIndex: 4 }} />
<Wave fill="#0000FF" paused={false} options={{ height: 20, amplitude: 22, speed: 0.12, points: 5 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.4, zIndex: 3 }} />
<Wave fill="#4B0082" paused={false} options={{ height: 20, amplitude: 20, speed: 0.1, points: 6 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.4, zIndex: 2 }} />
<Wave fill="#8B00FF" paused={false} options={{ height: 20, amplitude: 18, speed: 0.08, points: 5 }}
style={{ width: '100%', position: 'absolute', bottom: 0, opacity: 0.4, zIndex: 1 }} />
</div>

      {/* About Me Popup */}
      {showAbout && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999
        }}>
          <div style={{
            backgroundColor: 'black',
            width: '90%',
            maxWidth: '600px',
            borderRadius: '8px',
            overflow: 'hidden',
            color: 'white',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              backgroundColor: '#BE0119',
              padding: '15px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>ABOUT ME</h2>
              <button onClick={() => setShowAbout(false)} style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}>×</button>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '30px 20px',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <img
                src="/me.png"
                alt="Olivia"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Olivia K. Ramos</h3>
                <p style={{ marginTop: '10px', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  My name is Olivia, I have been a college student at TSTC for Digital Media Design since 2024. I have experience in programs like Adobe Illustrator, Adobe Photoshop, Adobe Dimension, Adobe XD, Adobe Dreamweaver, and Adobe After Effects as well as others like Figma. I hope to one day be on the video editing team for a movie, or illustrate books.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContact && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999
        }}>
          <div style={{
            backgroundColor: 'black',
            width: '90%',
            maxWidth: '600px',
            borderRadius: '8px',
            overflow: 'hidden',
            color: 'white',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              backgroundColor: '#FF0000',
              padding: '15px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{ margin: 0, fontSize: '1.2rem' }}>CONTACT</h2>
              <button onClick={() => setShowContact(false)} style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}>×</button>
            </div>
            <div style={{ padding: '30px 20px' }}>
              <p style={{ marginBottom: '10px' }}>My Email: okramos@mymail.tstc.edu</p>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
              <textarea
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: 'none' }}
              />
              <button onClick={handleSubmit} style={{
                marginTop: '15px',
                padding: '10px 15px',
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;