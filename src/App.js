
import React from 'react';

function App() {
  // Personal details
  const myName = "Ronny Mboya";
  const myBiography = "Hello! I'm Ronny Mboya, a passionate software developer with expertise in React and modern web technologies. I enjoy solving complex problems and creating intuitive, user-friendly experiences. When I'm not coding, I like to read and explore new hiking trails.";
  const myGithubUrl = "https://github.com/ronnymboya"; 
  const myLinkedInUrl = "https://www.linkedin.com/in/ronnymboya"; 
  const myImageUrl = "/profile-photo.jpg"; // Placeholder path
  const myImageAltText = "Professional headshot of Ronny Mboya";

  return (
    <div>
      {/* Top-level heading */}
      <h1>Hi, I'm {myName}</h1>

      {/* Image of yourself */}
      <img
        src={myImageUrl}
        alt={myImageAltText}
        data-testid="profile-image" 
      />

      {/* Second-level heading */}
      <h2>About Me</h2>

      {/* Biography paragraph */}
      <p>{myBiography}</p>

      {/* Links */}
      <nav>
        <a href={myGithubUrl} aria-label="GitHub Profile" role="link">
          GitHub
        </a>
        <a href={myLinkedInUrl} aria-label="LinkedIn Profile" role="link">
          LinkedIn
        </a>
      </nav>
    </div>
  );
}

export default App;