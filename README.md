Dr. Maya Reynolds --- Counseling Website
A responsive counseling website created for the Grow My Therapy
Front-End Developer Internship assignment. The project includes an
original homepage recreation, a redesigned website for Dr. Maya
Reynolds, and a dedicated office section.
Live Websites
- Part 1 --- Original homepage clone: https://dr-maya-reynolds-website-beige-chi.vercel.app/part-1
- Parts 2 & 3 --- Dr. Maya Reynolds website: https://dr-maya-reynolds-website-beige-chi.vercel.app/
Project Overview
The assignment was completed in three parts:
Part 1 --- Original Website Clone
Recreated the homepage of Conejo Valley
Counseling, with attention
to the original page structure, section order, spacing, typography,
imagery, and responsive layout.
The clone is available at /part-1 on the deployed website.
Part 2 --- Dr. Maya Reynolds Website Redesign
Redesigned the website for Dr. Maya Reynolds, PsyD, using the supplied
profile as the content reference. The visual direction uses calm,
neutral tones with sage accents and editorial typography to create a
welcoming, professional experience.
The homepage includes: - An introductory hero section - Information
about who the practice supports - Areas of expertise and therapeutic
approach - Service categories - Frequently asked questions - Appointment
calls to action
Part 3 --- Our Office Section
Added a dedicated Our Office section to the redesigned website,
including the supplied office photographs, supporting copy, location
details, and a call to action. The section is integrated into the main
page and navigation.
Features
- Responsive layouts for desktop and mobile screen sizes
- Separate routes for the original clone and redesigned site
- Reusable React components for page sections
- Navigation links and dropdown interactions
- Expandable FAQ section
- Local image assets
- Office section with location information and appointment call to
  action
Technology Stack
- Next.js --- React framework and routing
- React --- Component-based user interface
- TypeScript --- Typed JavaScript
- Tailwind CSS --- Utility-first styling
- Vercel --- Deployment and hosting
Routes
  Route       Description
  /         Dr. Maya Reynolds redesigned website (Parts 2 and 3)
  /part-1   Original Conejo Valley Counseling homepage clone
Run Locally
Prerequisites
- Node.js and npm installed
- Git (optional, for cloning the repository)
Installation
1. Clone the repository:
   git clone https://github.com/Anju-c-2003/dr-maya-reynolds-website.git
2. Open the project directory:
   cd dr-maya-reynolds-website
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open the local URL shown in the terminal, usually
   http://localhost:3000.
Production Build
To create and verify a production build, run:
npm run build
To run the production build locally:
npm run start
Project Structure
dr-maya-reynolds-website/
├── public/
│   └── images/                 # Website and office images
├── src/
│   ├── app/
│   │   ├── page.tsx            # Main Dr. Maya Reynolds website
│   │   └── part-1/
│   │       └── page.tsx        # Part 1 homepage clone
│   └── components/
│       ├── part1/              # Components used by the Part 1 clone
│       └──                     # Components for the redesigned website
├── package.json
├── package-lock.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
Deployment
The project is deployed on Vercel:
- Main website: https://dr-maya-reynolds-website-beige-chi.vercel.app/
- Part 1 clone:
  https://dr-maya-reynolds-website-beige-chi.vercel.app/part-1
The source code is available in the public GitHub
repository.
Notes
This project was created for an internship assignment. The Dr. Maya
Reynolds website uses the profile supplied for the assignment; it should
be understood as a fictional practice profile for the purposes of the
project.
Built as part of the Grow My Therapy Front-End Developer Internship
assignment.
