import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import App from "../App";


test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false, 
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});


//  Test 2: Image 
test("displays an image with appropriate alt text and src attribute", () => {
  // Arrange
  render(<App />);

  // Act
  // Use getByRole('img') 
  const profileImage = screen.getByRole("img");

  // Assert
  expect(profileImage).toBeInTheDocument();
  // Check that the image has alt text
  expect(profileImage).toHaveAttribute("alt"); 
  expect(profileImage.alt).not.toBe(""); // Ensure alt text is not empty

  // Check the src attribute
  expect(profileImage).toHaveAttribute("src");

  expect(profileImage.getAttribute('src')).toBe("/profile-photo.jpg"); 
});


// Test 3: Second-Level Heading
test("displays a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />);

  // Act
  //  A heading element with level 2 (<h2>) that matches "About Me" 
  const aboutMeHeading = screen.getByRole("heading", {
    name: /About Me/i,
    level: 2,
    exact: true,
  });

  // Assert
  expect(aboutMeHeading).toBeInTheDocument();
});


//Test 4: Biography Paragraph
test("displays a paragraph for the biography", () => {
  // Arrange
  render(<App />);

  // Act
  const bioParagraph = screen.getByText(/Hello! I'm Ronny Mboya, a passionate software developer/i, {
    selector: 'p', // Specifically look for a <p> tag
  });

  // Assert
  expect(bioParagraph).toBeInTheDocument();
  expect(bioParagraph.tagName).toBe("P"); 
});


// Test 5: GitHub Link
test("displays a link to GitHub with the correct href", () => {
  // Arrange
  render(<App />);
  const githubText = /GitHub/i;

  // Act
  const githubLink = screen.getByRole("link", { name: githubText });

  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/ronnymboya");
});


//Test 6: LinkedIn Link 
test("displays a link to LinkedIn with the correct href", () => {
  // Arrange
  render(<App />);
  const linkedInText = /LinkedIn/i;

  // Act
  const linkedInLink = screen.getByRole("link", { name: linkedInText });

  // Assert
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/in/ronnymboya");
});
