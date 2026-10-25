<!-- MAPS: Modern Academy for Professional Solutions -->

<div align="center">
  <img src="MAPS01/MAPSS01.svg" alt="MAPS logo" width="150" />

  <h1>MAPS — Modern Academy for Professional Solutions</h1>
  <p><strong>From Learning to Real Impact.</strong></p>
  <p>Practical technology training, real-world projects, and career-focused learning for engineering students and academic institutions.</p>

  <p>
    <a href="#about-maps">About</a> ·
    <a href="#programs">Programs</a> ·
    <a href="#website-features">Features</a> ·
    <a href="#run-locally">Run Locally</a> ·
    <a href="#contact">Contact</a>
  </p>
</div>

---

## About MAPS

**MAPS (Modern Academy for Professional Solutions)** is a technology-training academy website focused on helping engineering students and institutions discover practical, industry-oriented learning opportunities.

This repository contains the front-end landing page for MAPS. It introduces the academy, highlights its technology programs, explains its hands-on learning approach, outlines workshop and bootcamp formats, and provides a way to contact the team.

## Programs

The website currently showcases these five learning tracks:

| Program | Topics highlighted on the website |
| --- | --- |
| **Python Full Stack Development** | Python, Django, HTML, CSS, JavaScript, and SQL |
| **Generative AI Development** | Large language models, APIs, Retrieval-Augmented Generation (RAG), and prompt engineering |
| **MERN Stack Development** | MongoDB, Express.js, React, and Node.js |
| **Prompt Engineering** | Prompt design, structured outputs, AI tools, and workflows |
| **Internet of Things (IoT)** | Arduino, ESP32, sensors, and embedded C |

Program descriptions and coverage are presented as website content and may change as MAPS updates its offerings.

## Website Features

- **Responsive, single-page layout** for desktop and mobile screens.
- **Navigation menu** with links to the main content sections and a dedicated mobile menu.
- **Scroll-aware header** and active navigation link styling.
- **Smooth scrolling** for in-page navigation.
- **Scroll reveal animations** using the browser's Intersection Observer API.
- **Interactive program cards** with a subtle mouse-driven tilt effect.
- **Training delivery section** for college workshops and extended bootcamps.
- **Learning approach, audience, and mission sections** explaining the academy's focus.
- **Email-based calls to action** for program enquiries and institutional partnerships.
- **Automatically updated footer year**.
- **Custom visual identity** built around warm cream, navy blue, amber-gold accents, and neumorphic surfaces.

## Technology Stack

- **HTML5** — semantic page structure and content
- **CSS3** — responsive layouts, visual styling, design tokens, and transitions
- **Vanilla JavaScript** — navigation, scrolling, animations, and interactive card behaviour
- **Google Fonts** — Inter and Outfit
- **Bootstrap Icons 1.11.3** — interface icons loaded through a CDN
- **Intersection Observer API** — viewport-based reveal animations

The current site is a static front-end project. It does not require a framework, backend, package installation, or build step to run.

## Project Structure

```text
MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS/
└── MAPS01/
    ├── index.html              # Main landing page
    ├── style.css               # Styles, responsive layout, and animations
    ├── script.js               # Navigation and interactive behaviour
    ├── MAPSS01.svg             # MAPS logo
    ├── hero_students.png       # Hero section image
    ├── workshop_classroom.png  # College workshop image
    ├── bootcamp_coding.png     # Bootcamp image
    ├── 001.png                 # Additional image asset
    ├── 002.png                 # Additional image asset
    └── 0035.png                # Additional image asset
```

Keep the CSS, JavaScript, logo, and image assets in the `MAPS01/` directory because the HTML references them using relative paths.

## Run Locally

### Requirements

- A modern web browser
- Optional: Python 3 or Visual Studio Code with the Live Server extension

### 1. Clone the repository

```bash
git clone https://github.com/T4x-Dev/MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS.git
cd MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS
```

### 2. Open the website

**Option A — Open directly:** open `MAPS01/index.html` in your browser.

**Option B — Use Python's local server:** run the following from the repository root:

```bash
python -m http.server 8000
```

Then open [http://localhost:8000/MAPS01/](http://localhost:8000/MAPS01/).

**Option C — Use VS Code:** open `MAPS01/index.html` with the Live Server extension.

No `npm install`, environment variables, or build command are required. Google Fonts and Bootstrap Icons need an internet connection to load from their CDNs.

## Customize the Website

- **Page content:** edit `MAPS01/index.html`.
- **Colours and layout:** edit the CSS variables near the beginning of `MAPS01/style.css`. The main palette variables include `--neu-base`, `--navy`, and `--accent`.
- **Interactions:** edit `MAPS01/script.js`.
- **Images and logo:** replace files in `MAPS01/` or update their references in the HTML.
- **Contact email:** the current site uses `info@mapsacademy.in`. Update the `mailto:` links in `index.html` if the contact address changes.

**Contact note:** the current implementation links to email; it does not include a backend-powered contact form or database.

## Deployment

MAPS is a static website and can be hosted on services such as **GitHub Pages, Netlify, or Cloudflare Pages**.

Configure the host to publish the contents of the `MAPS01/` directory as the site root, or configure the deployment so that `MAPS01/index.html` is served as the entry page. No server-side runtime is required.

## Contributing

Improvements and suggestions are welcome.

1. Fork this repository.
2. Create a branch for your change.
3. Make your edits and test the page at desktop and mobile widths.
4. Commit and push your changes.
5. Open a pull request describing what changed.

Please keep asset paths working and preserve the static-site architecture unless a framework or backend is intentionally added.

## License

No `LICENSE` file was found in the repository when this README was prepared. Unless a license is added, do not assume that the project is open source or that reuse and redistribution are permitted.

## Contact

For program enquiries, workshops, or institutional partnerships:

- **Email:** [info@mapsacademy.in](mailto:info@mapsacademy.in)
- **Repository:** [T4x-Dev/MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS](https://github.com/T4x-Dev/MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS)

---

<div align="center">
  <strong>MAPS — Modern Academy for Professional Solutions</strong>
  <p><em>Learn with purpose. Build with confidence. Grow for the future.</em></p>
</div>
