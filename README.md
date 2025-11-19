# WEDE5020 Part 2 – Nkosi’s Haven Website

A multi-page responsive website built with HTML5, CSS3, and JavaScript. The site demonstrates modern web design practices, including semantic markup, consistent navigation, responsive layouts, interactive styles, and light interactivity for a better user experience.

## Project Overview

This project is a multi-page website for **Nkosi’s Haven**, a Johannesburg-based NGO providing care and support for HIV-positive mothers and their children.
The website showcases information about the organization, Nkosi Johnson, their projects, and ways for users to get involved.

**Pages Included:**

* Home
* About Nkosi’s Haven
* All About Nkosi Johnson
* Projects / Our Work
* How to Get Involved / Enquiry
* Contact Us

**Key Features:**

* Accordion panels for organized content
* Lightbox-enabled image galleries
* Fade-in animations for enhanced UX
* Google Maps integration for location
* Enquiry form with basic email validation
* SEO optimized titles, meta descriptions, and keywords

## Features

* **Consistent Navigation Bar** – accessible on every page with hover effects.
* **Responsive Design** – adapts seamlessly to desktop and mobile devices.
* **Background Imagery** – each page uses a relevant image with overlays for readability.
* **Interactive Media** – images styled with rounded corners, shadows, and hover zoom effect.
* **Typography & Layout** – professional headings, justified text, and section spacing.
* **Reusable Footer** – consistent layout across all pages.

## Pages Overview

### Home Page (`Home Page.html`)

Introduces the site with a welcoming message. Highlights navigation to other sections.

### About Us (`About us.html`)

Background image of schoolchildren for context. Provides information about the institution, values, and mission. Uses a semi-transparent overlay for readable text.

### All About Nkosi Johnson (`Nkosi's Life.html`)

Background image of Nkosi Johnson for context. Provides information about his background and upbringing. Uses a semi-transparent overlay for readable text.

### Projects (`Projects.html`)

Lists and describes key initiatives or activities. Each project section styled within its own container. Earth-tone color palette for clarity and emphasis.

### Enquiry Page (`Enquiry.html`)

Shows ways of helping. Almost plain to show seriousness. Includes a contact form with basic email validation.

### Contact (`Contact.html`)

Displays key contact details (phone, email, location). Styled form or text area for inquiries. Google Maps embed for location. Background image for thematic design.

## Technologies Used

* **HTML5** – semantic structure and accessibility.
* **CSS3** – styling, layout, hover transitions, and responsiveness.
* **JavaScript** – accordion panels, lightbox images, fade-in animations, form validation, and interactive map features.

## Getting Started

1. Clone or download the repository.
2. Maintain the folder structure (`css/`, `pictures/`, `.html` files).
3. Open `Home Page.html` in a modern browser to begin navigating.

## Requirements

* Any modern browser (Chrome, Edge, Safari).
* Correct image paths in CSS. Example:

  ```css
  background-image: url('../pictures/Schoolchildren.jpg');
  ```

  Case sensitivity matters (`Schoolchildren.jpg` ≠ `schoolchildren.JPG`).

## License

This project is intended for educational and portfolio purposes. You are free to adapt and extend it.

## Knowledge & Feedback

The feedback I received said Excellent!!, so there was not anything I could change.

## Changelog

All notable changes to this project are documented below and also in [`CHANGELOG.md`](CHANGELOG.md).

* **[1.0.0] – 2025-08-27**
  Initial Release: Created Home, About Us, Nkosi's Life, Projects, Enquiry, and Contact us pages. Implemented navigation bar and footer. Added images.

* **[1.0.2] – 2025-09-18**
  Home Page Updates: Replaced the old heading image with a text-based heading for better accessibility. Added a new supporting picture beneath the heading. Updated the navigation bar using CSS: Made it green and fully horizontal. Added hover effect so links change color when hovered.

* **[1.0.2] – 2025-09-22**
  About us Page Updates: Made the picture a background picture. Updated the navigation bar using CSS: Made it transparent and fully horizontal. Added hover effect so links change color when hovered over.

* **[1.0.1] – 2025-09-23**
  General Updates: Fixed background image paths for compatibility between `css/` and `pictures/` folders. Corrected `hr` styling issue in CSS.

* **[1.0.2] – 2025-09-23**
  Nkosi's Life Page Updates: Made the picture a background picture. Changed text color. Updated the navigation bar using CSS: Made it transparent and fully horizontal. Added hover effect so links change color when hovered over.

* **[1.0.2] – 2025-09-24**
  Projects Page Updates: Made the background a soft colour. Updated the navigation bar using CSS: Added colour and fully horizontal. Added hover effect so links change color when hovered over.

* **[1.0.2] – 2025-09-25**
  Enquiry Page Updates: Made the background a soft grey colour. Organized the information. Added an icon with hyperlink. Updated the navigation bar using CSS: Added grey colour and fully horizontal. Added hover effect so links change color when hovered over.
  Contact us Page Updates: Made the headings green. Navigation is green. The footer is also green.

* **[1.0.1] – 2025-09-26**
  General Updates: Added responsive design to all pages.

* **[1.0.0] – 2025-09-26**
  Initial Release: Added a references file under documents.

## References

1. **Font Awesome Icons** – [https://fontawesome.com](https://fontawesome.com)
2. **Leaflet.js Documentation** – [https://leafletjs.com](https://leafletjs.com)
3. **W3Schools HTML Forms Tutorial** – [https://www.w3schools.com/html/html_forms.asp](https://www.w3schools.com/html/html_forms.asp)
4. **CSS-Tricks Accordion Guide** – [https://css-tricks.com](https://css-tricks.com)
5. **Google Maps Embed Documentation** – [https://developers.google.com/maps/documentation](https://developers.google.com/maps/documentation)
6. Images from Nkosi’s Haven official site (used with permission)


## How to View the Website

1. Clone or download the repository.
2. Open `Home Page.html` in a web browser.
3. Navigate through the pages using the top navigation menu.

## Notes

* This project uses only **HTML, CSS, and JavaScript** (no backend processing).
* Enquiry forms use `mailto:` functionality for email submission.
* All pages are responsive and optimized for desktop and mobile devices.


## GitHub Best Practices

1. **Repository Structure**

   NkosisHaven/
   ├─ CSS/
   ├─ JS/
   ├─ Pictures/
   ├─ Home Page.html
   ├─ About us.html
   ├─ Nkosi's Life.html
   ├─ Projects.html
   ├─ Enquiry.html
   ├─ Contact us.html
   ├─ README.md
   └─ CHANGELOG.md
   ```

