<!--
  MAPS — Modern Academy for Professional Solutions
  Repository documentation for the static landing page in MAPS01/.
-->

<div align="center">
  <img src="MAPS01/MAPSS01.svg" alt="MAPS — Modern Academy for Professional Solutions" width="180" />

  <h1>MAPS — Modern Academy for Professional Solutions</h1>

  <p><strong>From Learning to Real Impact.</strong></p>

  <p>
    Hands-on technology training, practical project experience, expert guidance,
    and career-oriented learning for engineering students and colleges.
  </p>

  <p>
    <a href="#programs">Explore Programs</a> ·
    <a href="#features">Features</a> ·
    <a href="#getting-started">Getting Started</a> ·
    <a href="#contact">Contact</a>
  </p>
</div>

---

## Overview

**MAPS (Modern Academy for Professional Solutions)** is a responsive, single-page website for a technology training academy serving engineering students, colleges, and institutions. The landing page introduces MAPS's technical programs, practical learning approach, training formats, intended audiences, mission, and enquiry options.

The project is built with **HTML, CSS, and vanilla JavaScript**. It does not require a frontend framework, package manager, or build step to run.

## Programs

The website presents five technology learning tracks:

| Program | Focus |
| --- | --- |
| **Python Full Stack Development** | Python-oriented full-stack development skills |
| **Generative AI Development** | Building solutions with generative AI technologies |
| **MERN Stack Development** | Web development with the MERN ecosystem |
| **Prompt Engineering** | Working effectively with prompts for AI systems |
| **Internet of Things (IoT)** | Connected devices and IoT concepts |

Refer to the website content for the current descriptions and program details.

## Features

- **Single-page academy website** with dedicated Home, Programs, Our Approach, Workshops, About, and Contact sections.
- **Responsive navigation** with a mobile menu, close controls, and Escape-key support.
- **Scroll-aware header** that changes appearance as visitors move down the page.
- **Active navigation states** to indicate the current section.
- **Smooth in-page navigation** for section links.
- **Scroll-triggered reveal animations** powered by the browser's Intersection Observer API.
- **Interactive program cards** with a subtle pointer-driven tilt effect.
- **Training format overview** covering college workshops and extended bootcamps.
- **Audience and mission sections** describing who MAPS serves and the outcomes it aims to support.
- **Contact calls to action** linking to the academy email address.
- **Automatically updated footer year**.
- **Custom visual system** using a warm cream background, navy typography, amber accents, and neumorphic surfaces.
- **Web typography and icons** using Google Fonts (Inter and Outfit) and Bootstrap Icons.

## Website Preview

The repository includes visual assets used by the landing page. For example, the hero section uses the following image:

<div align="center">
  <img src="MAPS01/hero_students.png" alt="Students — hero image used on the MAPS website" width="720" />
  <p><em>Hero image asset included in the website. This is not a full-page screenshot.</em></p>
</div>

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure and semantic content |
| CSS3 | Layout, responsive styling, design tokens, transitions, and animations |
| Vanilla JavaScript (ES6+) | Navigation, scroll behaviour, reveal effects, and interactive cards |
| Intersection Observer API | Reveal elements as they enter the viewport |
| Google Fonts | Inter and Outfit typefaces |
| Bootstrap Icons 1.11.3 | Interface icons delivered through the Bootstrap Icons CDN |

**No React, Vue, Angular, Tailwind, or Node.js build process is required by the current implementation.**

## Project Structure

```text
MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS/
└── MAPS01/
    ├── index.html              # Main landing page and page content
    ├── style.css               # Design system, layout, responsive styles, and animations
    ├── script.js               # Navigation and interactive behaviour
    ├── MAPSS01.svg             # MAPS brand graphic
    ├── hero_students.png       # Hero section image
    ├── workshop_classroom.png  # Workshop image
    ├── bootcamp_coding.png     # Bootcamp image
    ├── 001.png                 # Additional visual asset
    ├── 002.png                 # Additional visual asset
    └── 0035.png                # Additional visual asset
```

The HTML references its stylesheet, script, SVG, and image assets using paths relative to the `MAPS01/` directory. Keep these assets in their current locations unless you also update the corresponding references.

## Getting Started

### Prerequisites

- A modern web browser.
- Optional: [Visual Studio Code](https://code.visualstudio.com/) with the Live Server extension, or Python for running a local static server.
- Internet access for the Google Fonts and Bootstrap Icons CDN resources. The page's local HTML, CSS, JavaScript, and image files remain in the repository.

### 1. Clone the repository

```bash
git clone https://github.com/T4x-Dev/MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS.git
cd MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS
```

### 2. Open the website

**Option A — Open directly**

Open `MAPS01/index.html` in your browser.

**Option B — Run a local server with Python**

From the repository root, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/MAPS01/
```

Stop the server with `Ctrl+C`.

**Option C — Visual Studio Code**

Open the repository in VS Code, install the Live Server extension if needed, then right-click `MAPS01/index.html` and choose **Open with Live Server**.

No `npm install`, build command, or environment file is needed for the current static website.

## How It Works

- `index.html` contains the page structure, copy, navigation, program content, and image references.
- `style.css` defines the colour palette, typography, neumorphic shadows, responsive layout, component styles, and motion effects.
- `script.js` manages the mobile navigation, scroll-state header, active navigation links, smooth scrolling, reveal animations, program-card tilt, and current footer year.
- The Intersection Observer implementation includes a fallback that reveals content immediately in browsers without Intersection Observer support.

## Customization

### Update website content

Edit `MAPS01/index.html` to change headings, program descriptions, training formats, audience information, mission statements, and calls to action.

### Change the visual theme

Edit the CSS custom properties near the beginning of `MAPS01/style.css`. The main design tokens include:

- `--neu-base` — warm cream page background.
- `--navy-darkest`, `--navy-dark`, and `--navy` — navy brand colours.
- `--accent` and related accent variables — amber-gold highlights.
- `--font-head` and `--font-body` — heading and body typefaces.

### Replace images or the brand graphic

Replace the relevant assets in `MAPS01/` and keep the filenames unchanged, or update the matching `src` references in `index.html`. Use appropriately sized, compressed images to help keep the page fast.

### Update contact details

The current page links to **info@mapsacademy.in**. If the academy's contact address changes, update the relevant `mailto:` links in `MAPS01/index.html`.

> **Contact behaviour:** the current page uses email links rather than a backend-powered enquiry form. A working form with message storage or email delivery would require a separate service or backend integration.

## Deployment

This is a static website and can be hosted by any service that serves HTML, CSS, JavaScript, and image assets, including GitHub Pages, Netlify, or Cloudflare Pages.

For a deployment that publishes the current structure, configure the hosting service to publish the repository's `MAPS01/` directory as the site root. If publishing the repository root instead, use a deployment configuration that serves `MAPS01/index.html` as the entry page.

A production URL is not documented here because a verified live deployment URL is not present in the repository content inspected for this README.

## Accessibility and Performance Notes

The current implementation includes responsive navigation controls, ARIA state updates for the mobile menu, and a keyboard Escape handler for closing it. When extending the page, consider maintaining these behaviours and testing keyboard navigation, focus visibility, colour contrast, reduced-motion preferences, and image alternative text.

For performance, optimize the larger PNG assets before adding further imagery. External fonts and icons rely on third-party CDNs.

## Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-change
   ```

3. Make your changes and test the page in a browser at desktop and mobile widths.
4. Commit your work:

   ```bash
   git add .
   git commit -m "Describe your change"
   ```

5. Push your branch and open a pull request with a concise description of the change.

Please keep asset paths valid, avoid adding secrets, and preserve the lightweight static architecture unless a framework or backend is intentionally introduced.

## License

No license file was present in the repository files inspected for this README. Until a license is added, do not assume that reuse, redistribution, or modification is permitted. Add a `LICENSE` file if you intend to publish the project under an open-source license.

## Contact

For academy enquiries, partnerships, or training discussions:

- **Email:** [info@mapsacademy.in](mailto:info@mapsacademy.in)
- **GitHub repository:** [T4x-Dev/MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS](https://github.com/T4x-Dev/MAPS-MODERN-ACADEMY-FOR-PROFESSIONAL-SOLUTIONS)

---

<div align="center">
  <strong>MAPS — Modern Academy for Professional Solutions</strong>
  <br />
  <em>Learn with purpose. Build with confidence. Grow for the future.</em>
</div>
