import {
  Laptop,
  Layout,
  Lightbulb,
  Palette,
  PenTool,
  Search,
  Smartphone,
  Users,
  Zap,
} from 'lucide-react';
import portfolioOne from '/Ecommerce Redesign.png';
import portfolioTwo from '/Finance App UI.png';
import portfolioFour from '/Fitness-Tracker-Dashboard.png';
import portfolioFive from '/Restaurant Ordering System.png';
import portfolioSix from '/Smart Home Control App Interface.png';
import portfolioThree from '/Travel Booking Platform.png';
import person4 from '/person-4.jpg';
import person6 from '/person-6.jpg';
import person9 from '/person-9.jpg';
import person1 from '/persone-1.jpg';
import person10 from '/persone-10.jpg';
import person2 from '/persone-2.jpg';
import person3 from '/persone-3.jpg';
import person5 from '/persone-5.jpg';
import person7 from '/persone-7.jpg';
import person8 from '/persone-8.jpg';

export const skills = [
  {
    id: 1,
    level: 'User Interface Design',
  },
  {
    id: 2,
    level: 'User Experience',
  },
  {
    id: 3,
    level: 'Wireframing',
  },
  {
    id: 4,
    level: 'Prototyping',
  },
  {
    id: 5,
    level: 'Figma',
  },
  {
    id: 6,
    level: 'User Research',
  },
  {
    id: 7,
    level: 'Adobe Creative Suite',
  },
  {
    id: 8,
    level: 'Design Systems',
  },
];

export const experience = [
  {
    role: 'Senior UI/UX Designer',
    company: 'TechCorp',
    startDate: 2018,
    endDate: 'Present',
  },
  {
    role: 'UI Designer',
    company: 'CreativeSolutions',
    startDate: 2015,
    endDate: 2018,
  },
  {
    role: 'Junior Designer',
    company: 'DigitalStudio',
    startDate: 2013,
    endDate: 2015,
  },
];

export const services = [
  {
    Icon: Palette,
    title: 'UI Design',
    description:
      'Create visually appealing and intuitive user interfaces that enhance user engagement and satisfaction.',
  },
  {
    Icon: Users,
    title: 'UX Design',
    description:
      'Develop user-centric experiences that improve usability, accessibility, and overall user satisfaction.',
  },
  {
    Icon: Laptop,
    title: 'Web Design',
    description:
      'Design responsive and modern websites that effectively communicate your brand and message.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile App Design',
    description:
      'Craft engaging and functional mobile app interfaces for iOS and Android platforms.',
  },
  {
    Icon: Zap,
    title: 'Interaction Design',
    description:
      'Create dynamic and responsive interactions that bring interfaces to life and guide users intuitively.',
  },
  {
    Icon: Search,
    title: 'UX Research',
    description:
      'Conduct in-depth user research to inform design decisions and improve overall user experience.',
  },
];

export const portfolioData = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: portfolioOne,
    description:
      'A complete overhaul of an e-commerce platform, focusing on user experience and conversion optimization.',
  },
  {
    id: 2,
    title: 'Finance App UI',
    category: 'Mobile App',
    image: portfolioTwo,
    description:
      'A sleek and intuitive mobile app design for personal finance management.',
  },
  {
    id: 3,
    title: 'Travel Booking Platform',
    category: 'Web Design',
    image: portfolioThree,
    description:
      'A user-friendly travel booking website with an emphasis on visual search and personalization.',
  },
  {
    id: 4,
    title: 'Fitness Tracker Dashboard',
    category: 'UI Design',
    image: portfolioFour,
    description:
      'An informative and motivational dashboard for a fitness tracking application.',
  },
  {
    id: 5,
    title: 'Restaurant Ordering System',
    category: 'Mobile App',
    image: portfolioFive,
    description:
      'A streamlined mobile app for table-side ordering in restaurants.',
  },
  {
    id: 6,
    title: 'Smart Home Control Interface',
    category: 'UI Design',
    image: portfolioSix,
    description:
      'An intuitive interface for controlling smart home devices across multiple platforms.',
  },
];

export const categories = Array.from(
  new Set(portfolioData.map((item) => item.category))
);

export const portfolioCaseStudy = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'Web Design',
    image: portfolioOne,
    description:
      'A complete overhaul of an e-commerce platform, focusing on user experience and conversion optimization.',
    challenges: [
      'Outdated design causing high bounce rates',
      'Complex navigation leading to cart abandonment',
      'Poor mobile responsiveness affecting mobile sales',
    ],
    solutions: [
      'Implemented a clean, modern design with a focus on product imagery',
      'Streamlined the navigation and search functionality',
      'Developed a mobile-first responsive design',
    ],
    outcomes: [
      '50% reduction in bounce rate',
      '30% increase in mobile conversions',
      '25% increase in average order value',
    ],
  },
  {
    id: 2,
    title: 'Finance App UI',
    category: 'Mobile App',
    image: portfolioTwo,
    description:
      'A sleek and intuitive mobile app design for personal finance management.',
    challenges: [
      'Complex financial data overwhelming users',
      'Difficulty in visualizing spending patterns',
      'Lack of engagement with budgeting features',
    ],
    solutions: [
      'Simplified data presentation with custom visualizations',
      'Implemented interactive charts for spending analysis',
      'Gamified budgeting process with achievements and challenges',
    ],
    outcomes: [
      '40% increase in daily active users',
      '60% improvement in user engagement with budgeting features',
      '4.8/5 star rating on app stores',
    ],
  },
  {
    id: 3,
    title: 'Travel Booking Platform',
    category: 'Web Design',
    image: portfolioThree,
    description:
      'A user-friendly travel booking website with an emphasis on visual search and personalization.',
    challenges: [
      'Information overload in search results',
      'Lack of personalization in travel recommendations',
      'High abandonment rate during booking process',
    ],
    solutions: [
      'Implemented visual search with destination imagery',
      'Developed AI-driven personalized recommendations',
      'Streamlined booking process with progress saving',
    ],
    outcomes: [
      '35% increase in booking conversions',
      '50% improvement in user satisfaction scores',
      '20% increase in repeat bookings',
    ],
  },
  {
    id: 4,
    title: 'Fitness Tracker Dashboard',
    category: 'UI Design',
    image: portfolioFour,
    description:
      'An informative and motivational dashboard for a fitness tracking application.',
    challenges: [
      'Information overload leading to user disengagement',
      'Lack of motivation for users to maintain fitness routines',
      'Difficulty in understanding progress over time',
    ],
    solutions: [
      'Designed a clean, prioritized dashboard with key metrics',
      'Implemented a reward system and social sharing features',
      'Created intuitive progress visualizations and trend analysis',
    ],
    outcomes: [
      '45% increase in daily active users',
      '60% improvement in user retention after 30 days',
      '25% increase in premium subscription conversions',
    ],
  },
  {
    id: 5,
    title: 'Restaurant Ordering System',
    category: 'Mobile App',
    image: portfolioFive,
    description:
      'A streamlined mobile app for table-side ordering in restaurants.',
    challenges: [
      'Slow order processing times during peak hours',
      'Errors in order taking leading to customer dissatisfaction',
      'Difficulty in managing menu updates across multiple locations',
    ],
    solutions: [
      'Developed a real-time ordering system with kitchen integration',
      'Implemented image-based menu with customization options',
      'Created a centralized menu management system with instant updates',
    ],
    outcomes: [
      '30% reduction in order processing time',
      '50% decrease in order errors',
      '20% increase in average order value due to upselling features',
    ],
  },
  {
    id: 6,
    title: 'Smart Home Control Interface',
    category: 'UI Design',
    image: portfolioSix,
    description:
      'An intuitive interface for controlling smart home devices across multiple platforms.',
    challenges: [
      'Complexity in managing multiple device types',
      'Inconsistent user experience across different platforms',
      'Difficulty in setting up automation and scenes',
    ],
    solutions: [
      'Designed a unified control interface with device categorization',
      'Developed a responsive design system for web, mobile, and tablet',
      'Created an intuitive drag-and-drop interface for automation setup',
    ],
    outcomes: [
      '40% reduction in time spent on device management',
      '90% user satisfaction rate across all platforms',
      '50% increase in usage of automation features',
    ],
  },
];

export const processSteps = [
  {
    id: 1,
    title: 'Research',
    description:
      'Gather insights about users, market trends, and business goals.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Ideation',
    description:
      'Brainstorm creative solutions and conceptualize design ideas.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Wireframing',
    description:
      'Create low-fidelity layouts to establish information architecture.',
    icon: PenTool,
  },
  {
    id: 4,
    title: 'UI Design',
    description:
      'Develop high-fidelity designs with attention to visual aesthetics.',
    icon: Layout,
  },
  {
    id: 5,
    title: 'Prototyping',
    description:
      'Build interactive prototypes to test and refine the user experience.',
    icon: Zap,
  },
];
export const testimonials = [
  {
    id: 1,
    name: 'Sophia Lee',
    role: 'HR Manager, PeopleFirst',
    content:
      'The custom HR portal designed by them has been a huge success. Employees love its simplicity and how easily they can access all necessary resources.',
    avatar: person1,
  },
  {
    id: 2,
    name: 'Carlos Rivera',
    role: 'Game Developer, PixelPlay Studios',
    content:
      'They nailed the perfect user interface for our game. The UI is immersive and complements the gameplay experience beautifully.',
    avatar: person2,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content:
      'Working with this UI/UX designer was a game-changer for our startup. They transformed our complex ideas into an intuitive, user-friendly interface that our customers love.',
    avatar: person3,
  },
  {
    id: 4,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCorp',
    content:
      "The attention to detail and user-centric approach brought by this designer significantly improved our product's usability. Our user engagement metrics have skyrocketed since the redesign.",
    avatar: person4,
  },
  {
    id: 5,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandBoom',
    content:
      "I was blown away by the creativity and strategic thinking. The designer didn't just make things look good; they created a visual language that perfectly communicates our brand values.",
    avatar: person5,
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'CTO, DataFlow',
    content:
      "The designer's ability to simplify complex data visualizations without losing depth is remarkable. Our dashboard redesign has received overwhelmingly positive feedback from our enterprise clients.",
    avatar: person6,
  },
  {
    id: 7,
    name: 'Laura Martinez',
    role: 'UX Research Lead, UserFirst',
    content:
      'As a UX researcher, I appreciate how this designer seamlessly integrates user insights into their designs. Their work truly bridges the gap between user needs and business goals.',
    avatar: person7,
  },
  {
    id: 8,
    name: 'Rajesh Kumar',
    role: 'Founder, EduLearn',
    content:
      'Their designs helped us engage better with students and educators alike. The UI is not only sleek but also enhances the learning experience tremendously.',
    avatar: person8,
  },
  {
    id: 9,
    name: 'Anna Schmidt',
    role: 'Art Director, Create&Co',
    content:
      "The designer's ability to blend functionality with aesthetic appeal is extraordinary. Their work always strikes the right balance between form and function.",
    avatar: person9,
  },
  {
    id: 10,
    name: 'Omar Hassan',
    role: 'Operations Manager, SupplyLink',
    content:
      'From wireframes to final designs, their process was seamless and transparent. Our team now has an intuitive platform that simplifies logistics management.',
    avatar: person10,
  },
];

export const navItems = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Portfolios',
    href: '#portfolios',
  },
  {
    label: 'Process',
    href: '#process',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];
