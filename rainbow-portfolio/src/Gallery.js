import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Wave from 'react-wavify';

const projects = [
  {
    title: 'COLOR HARMONY STICKERS',
    description: 'This bunny-themed sticker set was a personal project based on color harmony. The stickers were designed in Adobe Illustrator and finished in Adobe Photoshop.',
    image: '/color harmony stickers.jpg'
  },
  {
    title: 'POP ART IN CITY POSTER',
    description: 'The posters above for New York and Seattle were created in Adobe Illustrator with a Pop art design and finished with Adobe Photoshop.',
    image: '/city posters.jpg'
  },
  {
    title: 'MOCK UP BOOK JACKETS',
    description: 'The book jackets shown above were developed through mind mapping and sketches, built in Adobe InDesign and finished in Adobe Photoshop.',
    image: '/book jackets.jpg'
  },
  {
    title: 'FRUIT THEMED PLAYING CARDS',
    description: 'This fruit themed card deck was made through Adobe Illustrator and finished in Adobe Photoshop.',
    image: '/fruit themed cards.jpg'
  },
  {
    title: 'NATIONAL DONUT DAY MATT AND KIMS COFFEE SHOP',
    description: 'The project above was a branding campaign for a pet-friendly café. I used National Donut Day to bring in more customers and designed social media posts, stickers, and mockups using Adobe Illustrator and Photoshop.',
    image: '/national donut day.jpg'
  },
  {
    title: 'BLUEBERRY COSMETICS',
    description: 'This set of cosmetic bottles was a project focused on brand identity. Through packaging design I built user profiles, built up my assets in Adobe Illustrator and after getting approval from my client the designs were rendered in Adobe Dimension as seen above',
    image: '/bluberry cosmetics mockup.jpg'
  },
  {
    title: 'MODERN POOLS AD MOCK UP',
    description: 'The project above was an ad layout for a luxury pool brand done through sketches that were approved by my client transfered into Adobe InDesign to be rendered out for transfer into a mock up magazine using Adobe Photoshop',
    image: '/modern pools ad mockup.jpg'
  },
  {
    title: 'IN PROGRESS',
    description: 'A new project is currently in development. Stay tuned!',
  }
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'black',
      position: 'relative'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '220px',
        backgroundColor: 'white',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        boxShadow: '2px 0 6px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 2
      }}>
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'black',
          marginBottom: '12px'
        }}>
          MY WORK
        </h1>

        <p style={{
          fontSize: '0.95rem',
          color: 'black',
          marginBottom: '30px',
          lineHeight: 1.4,
          marginTop: '0'
        }}>
          A collection of my best works from my time in college: this gallery showcases my evolving work from my first at the top to my latest at the bottom.
        </p>

        <Link to="/" style={{
          marginBottom: '20px',
          textDecoration: 'none',
          color: 'black',
          fontSize: '1.3rem',
          fontWeight: 500
        }}>
          HOME
        </Link>
      </div>

      {/* Main Content with Waves Behind */}
      <div style={{
        flex: 1,
        padding: '60px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Waves Behind Cards */}
        <div style={{
          position: 'absolute',
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

        {/* Cards */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
{projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: project.title === 'IN PROGRESS' ? 'white' : 'white',
              color: project.title === 'IN PROGRESS' ? 'black' : 'black',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: '20px',
              fontStyle: project.title === 'IN PROGRESS' ? 'italic' : 'normal',
              textAlign: project.title === 'IN PROGRESS' ? 'center' : 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {project.title !== 'IN PROGRESS' && (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '6px',
                      marginBottom: '10px',
                      cursor: 'pointer'
                    }}
                  />
                  <button
                    style={{
                      alignSelf: 'flex-start',
                      padding: '6px 12px',
                      fontSize: '0.85rem',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginBottom: '10px'
                    }}
                    onClick={() => setSelectedImage(project.image)} 
                  >
                    Zoom
                  </button>
                </>
              )}
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{project.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>{project.description}</p>
            </div>
          ))}
        </div>

       
        {selectedImage && (
          <div onClick={() => setSelectedImage(null)} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  fontSize: '2rem',
                  color: '#fff',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Zoomed"
                style={{
                  maxWidth: '90vw',
                  maxHeight: '90vh',
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                  borderRadius: '8px'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;



