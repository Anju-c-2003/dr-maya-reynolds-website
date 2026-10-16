# Dr. Maya Reynolds — Counseling Website

A responsive counseling website developed as part of the **Grow My Therapy Front-End Developer Internship Assignment**. This project includes an original website clone, a redesigned website for Dr. Maya Reynolds, and a dedicated office section.

## Live Websites

- **Part 1 — Original Homepage Clone:** [View Website] (https://dr-maya-reynolds-website-beige-chi.vercel.app/part-1)
- **Parts 2 & 3 — Dr. Maya Reynolds Website:** [View Website] (https://dr-maya-reynolds-website-beige-chi.vercel.app/)

## Project Overview

The project was completed in three parts, focusing on website recreation, visual redesign, responsive layouts, and user experience.

### Part 1 — Original Homepage Clone

Recreated the homepage of [Conejo Valley Counseling](https://www.conejovalleycounseling.com/home), focusing on its overall layout, section structure, typography, spacing, colors, imagery, and responsive presentation.

The original clone is available at the `/part-1` route.

### Part 2 — Dr. Maya Reynolds Website Redesign

Redesigned the website for Dr. Maya Reynolds, PsyD, using the profile supplied for the assignment as the content reference.

The redesign uses a calm, welcoming visual style with neutral tones, sage accents, and elegant typography to create a professional and approachable experience.

The website includes:

- A welcoming homepage and introductory section
- Information about who the practice supports
- Areas of expertise and therapeutic approaches
- Three service categories
- An About section introducing Dr. Maya Reynolds
- Frequently asked questions
- Appointment calls to action

### Part 3 — Our Office Section

Added a dedicated **Our Office** section to the redesigned website, featuring the supplied office photographs and information about the practice environment.

The section includes office imagery, location details, information about in-person sessions and secure telehealth for California residents, and a call to action for scheduling an appointment.

## Key Features

- Responsive layouts for desktop and mobile screens
- Separate routes for the original clone and redesigned website
- Reusable React components
- Navigation links and dropdown interactions
- Interactive FAQ accordion
- Local image assets
- Dedicated office section with location information
- Appointment calls to action

## Technology Stack

- **Next.js** — React framework and application routing
- **React** — Component-based user interface
- **TypeScript** — Type-safe JavaScript development
- **Tailwind CSS** — Responsive styling and layout
- **Vercel** — Deployment and hosting
- **Git and GitHub** — Version control and source code hosting

## Routes

| Route | Description |
|---|---|
| `/` | Dr. Maya Reynolds website, including Parts 2 and 3 |
| `/part-1` | Original Conejo Valley Counseling homepage clone |

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Anju-c-2003/dr-maya-reynolds-website.git
```

**2. Navigate to the project directory**

```bash
cd dr-maya-reynolds-website
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the website**

Visit `http://localhost:3000` in your browser. If port 3000 is already in use, Next.js may start on another available port; use the local URL shown in the terminal.

### Production Build

To create an optimized production build, run:

```bash
npm run build
```

To start the production server after building, run:

```bash
npm run start
```

## Project Structure

```text
dr-maya-reynolds-website/
├── public/
│   └── images/                 # Website and office images
├── src/
│   ├── app/
│   │   ├── page.tsx            # Main Dr. Maya Reynolds website
│   │   └── part-1/
│   │       └── page.tsx        # Part 1 homepage clone
│   └── components/
│       ├── part1/              # Components for the original clone
│       └──                     # Components for the redesigned website
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Deployment

The website is deployed on Vercel.

- **Original homepage clone:** https://dr-maya-reynolds-website-beige-chi.vercel.app/part-1
- **Dr. Maya Reynolds website:** https://dr-maya-reynolds-website-beige-chi.vercel.app/

The source code is available in the [GitHub repository] (https://github.com/Anju-c-2003/dr-maya-reynolds-website).

## About This Project

This project was developed as part of the Grow My Therapy Front-End Developer Internship assignment. It demonstrates the implementation of a multi-section website, responsive design, reusable components, visual redesign, and deployment using modern web development tools.

The Dr. Maya Reynolds profile and practice information are based on the fictional profile supplied for the assignment.

---

**Developed for the Grow My Therapy Front-End Developer Internship Assignment.**
