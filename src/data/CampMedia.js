import img1 from "../assets/campImg1.jpg";
import img2 from "../assets/campImg2.jpg";
import img3 from "../assets/campImg3.jpg";
import img4 from "../assets/campImg4.webp";

import dr6 from "../assets/Doctor/dr1.jpg";
import dr7 from "../assets/Doctor/dr2.jpg";
import dr8 from "../assets/Doctor/dr3.jpg";
import dr9 from "../assets/Doctor/dr4.jpg";
import dr10 from "../assets/Doctor/dr5.jpg";

export const campData = [
  {
    id: "camp1",
    title: "Health Awareness Camp - Uttarakhand",
    description:
      "This camp focused on general health checkups, awareness sessions, and distribution of basic medicines.",
    images: [img1, dr6, dr7],
    videos: [
      "https://www.youtube.com/embed/PT2_F-1esPk",
      "https://www.youtube.com/embed/Umqb9KENgmk",
    ],
  },
  {
    id: "camp2",
    title: "Blood Donation Camp - Dehradun",
    description:
      "Organized at Rajpur Road, with the support of 5 doctors and 100+ volunteers.",
    images: [img2, dr8],
    videos: [
      "https://www.youtube.com/embed/tgbNymZ7vqY",
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
    ],
  },
  {
    id: "camp3",
    title: "Rural Health Outreach - Nainital",
    description:
      "Special care provided in remote areas with on-ground testing vans and telemedicine support.",
    images: [img3, dr9, dr10],
    videos: [
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/8b4-ZHakFOQ",
    ],
  },
  {
    id: "camp4",
    title: "Eye Checkup & Health Camp - Haldwani",
    description:
      "Free eye checkups, glasses distribution and awareness on hygiene for senior citizens.",
    images: [img4],
    videos: [
      "https://www.youtube.com/embed/JGwWNGJdvx8",
      "https://www.youtube.com/embed/7wtfhZwyrcc",
    ],
  },
];


export const faqData = [
    {
      question: "What are your operating hours?",
      answer: "We are open from Monday to Friday, 9:00 AM to 6:00 PM. On weekends, we are available for emergency services."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment directly through our website or by calling our reception at [Phone Number]."
    },
    {
      question: "Do you accept health insurance?",
      answer: "Yes, we accept various health insurance providers. Please contact us beforehand to confirm that your provider is accepted."
    },
    {
      question: "What should I bring for my first appointment?",
      answer: "Please bring your ID proof, insurance card (if applicable), and any medical records or prescriptions from previous treatments."
    },
    {
      question: "Can I walk in for an appointment or do I need to schedule one?",
      answer: "We recommend scheduling an appointment in advance to ensure that we have availability. However, we do accept walk-ins for urgent cases or emergencies."
    },
    {
      question: "What should I do if I need to cancel or reschedule my appointment?",
      answer: "You can cancel or reschedule your appointment by calling our office or through our website at least 24 hours in advance to avoid any cancellation fees."
    },
    {
      question: "Do you offer telemedicine or online consultations?",
      answer: "Yes, we offer telemedicine services. You can schedule an online consultation with one of our doctors by visiting the 'Book an Appointment' section on our website."
    },
    {
      question: "What types of payment do you accept?",
      answer: "We accept cash, credit/debit cards, and digital payments like UPI. We also accept most major health insurance plans."
    },
    {
      question: "Are your doctors certified?",
      answer: "Yes, all our doctors are highly qualified and have certifications from recognized medical boards."
    },
    {
      question: "Do you offer pediatric care?",
      answer: "Yes, we provide pediatric care for children of all ages, including vaccinations and treatment for common illnesses."
    },
    {
      question: "What precautions do you take for patient safety?",
      answer: "We follow strict sanitation protocols, social distancing guidelines, and PPE usage for all staff to ensure the safety of our patients."
    },
    {
      question: "Do you provide lab services?",
      answer: "Yes, we offer a wide range of diagnostic services, including blood tests, imaging, and other lab services."
    },
    {
      question: "Can I choose a specific doctor for my appointment?",
      answer: "Yes, you can request a specific doctor when booking your appointment. If unavailable, we will offer you an alternative option."
    },
    {
      question: "How do I know if my health insurance covers my treatment?",
      answer: "You can confirm this with our office or your insurance provider. We will assist with any necessary paperwork."
    },
    {
      question: "Are there any additional charges for specialized treatments?",
      answer: "Yes, some specialized treatments may incur additional charges. We will provide a breakdown of costs upfront."
    },
    {
      question: "How can I access my medical records?",
      answer: "You can request access to your medical records by contacting our office. We ensure your information is safe and accessible only to authorized personnel."
    },
    {
      question: "Do you have emergency services available?",
      answer: "Yes, we have emergency services available 24/7. Please contact us immediately for urgent medical attention."
    },
    {
      question: "Do you provide mental health services?",
      answer: "Yes, we offer counseling and therapy services for mental health conditions, including anxiety and depression."
    },
    {
      question: "Do you provide maternity services?",
      answer: "Yes, we offer comprehensive maternity care, including prenatal, delivery, and postnatal services."
    },
    {
      question: "How can I get a second opinion from a specialist?",
      answer: "You can schedule a consultation with a specialist by contacting us or booking online."
    },
    {
      question: "Are your facilities wheelchair accessible?",
      answer: "Yes, our facility is fully wheelchair accessible, with ramps and elevators."
    },
    {
      question: "Can I have a family member accompany me during the consultation?",
      answer: "Yes, you can have family support during your consultation, but we may limit the number of people based on health protocols."
    },
    {
      question: "Do you offer wellness and preventive health checkups?",
      answer: "Yes, we offer wellness packages and preventive checkups to help you maintain your health."
    }
  ];


import dr1 from "../assets/Doctor/dr1.jpg";
import dr2 from "../assets/Doctor/dr2.jpg";
import dr3 from "../assets/Doctor/dr3.jpg";
import dr4 from "../assets/Doctor/dr4.jpg";
import dr5 from "../assets/Doctor/dr5.jpg";

export const doctorProfiles = [
  {
    id: 1,
    name: "Dr. A. Sharma",
    image: dr1,
    specialty: "Heart Specialist",
    experience: "15 years",
    education: "MD Cardiology, AIIMS Delhi",
    description: "Expert in treating cardiovascular diseases and surgeries. Skilled in bypass, angioplasty, and cardiac rehabilitation.",
    achievements: [
      "Performed 1000+ successful heart surgeries",
      "Awarded Best Cardiologist 2023",
      "Guest Lecturer at Harvard Medical School",
    ],
    about: "Dr. A. Sharma is one of the most renowned cardiologists in India, known for his precision and compassionate care. With a legacy of 15 years, he has transformed countless lives through innovative surgical techniques and patient education.",
    services: ["Bypass Surgery", "Angioplasty", "Pacemaker Implant", "Heart Health Screening"],
    contact: {
      email: "dr.cardiology@healthcare.com",
      phone: "+91 9876543210",
      location: "Apollo Hospital, Delhi"
    }
  },
  {
    id: 2,
    name: "Dr. Meera N. Verma",
    image: dr2,
    specialty: "Brain/Nerve Specialist",
    experience: "18 years",
    education: "MD Neurology, AIIMS Delhi",
    description: "Specialist in treating neurological disorders such as epilepsy, stroke, Parkinson’s, and multiple sclerosis. Skilled in EEG, MRI analysis, and advanced neurological care.",
    achievements: [
      "Led 500+ stroke recovery cases",
      "Neuro Excellence Award 2021",
      "Published 30+ papers on neurodegenerative diseases"
    ],
    about: "Dr. Meera N. Verma is a distinguished neurologist known for her deep expertise in diagnosing and managing complex brain and nerve conditions. Her compassionate approach and advanced knowledge make her a preferred choice for neurological consultations.",
    services: ["Stroke Management", "EEG & Brain Scans", "Epilepsy Treatment", "Neuro Rehab"],
    contact: {
      email: "dr.neuro@healthcare.com",
      phone: "+91 9876543211",
      location: "Medanta Hospital, Gurugram"
    }
  },
  {
    id: 3,
    name: "Dr. Angela Yu",
    image: dr3,
    specialty: "Bone & Joint Specialist",
    experience: "20 years",
    education: "MS Orthopedics, PGIMER Chandigarh",
    description: "Expert in bone and joint surgeries, sports injuries, and arthritis treatment. Known for minimally invasive orthopedic procedures.",
    achievements: [
      "Performed 2000+ joint replacements",
      "Lifetime Achievement Award in Orthopedics",
      "Chief Advisor, National Sports Injury Board"
    ],
    about: "Dr. Renu Gobari has been a pioneer in modern orthopedic techniques. With a strong track record in successful surgeries and a focus on patient mobility, he’s been a mentor to many orthopedic surgeons across the country.",
    services: ["Joint Replacement", "Fracture Care", "Arthroscopy", "Spine Alignment"],
    contact: {
      email: "dr.ortho@healthcare.com",
      phone: "+91 9876543212",
      location: "Fortis Hospital, Mumbai"
    }
  },
  {
    id: 4,
    name: "Dr. Anjali Gupta",
    image: dr4,
    specialty: "Child Specialist",
    experience: "15 years",
    education: "MD Pediatrics, CMC Vellore",
    description: "Skilled in newborn care, childhood vaccinations, and developmental disorders. Renowned for her gentle approach with children.",
    achievements: [
      "Handled 10,000+ pediatric cases",
      "Top Pediatrician Award 2022",
      "Consultant to UNICEF child health programs"
    ],
    about: "Dr. Anjali Gupta is loved by both children and parents alike. Her holistic view on child wellness, preventive care, and emotional support has made her one of the most trusted names in pediatric healthcare.",
    services: ["Vaccination", "Newborn Screening", "Child Growth Monitoring", "Nutritional Counseling"],
    contact: {
      email: "dr.pediatrics@healthcare.com",
      phone: "+91 9876543213",
      location: "Rainbow Children’s Hospital, Bangalore"
    }
  },
  {
    id: 5,
    name: "Dr. Rohit Bansal",
    image: dr5,
    specialty: "Skin Specialist",
    experience: "12 years",
    education: "MD Dermatology, KEM Mumbai",
    description: "Specialist in treating acne, eczema, pigmentation, and performing advanced cosmetic dermatology procedures.",
    achievements: [
      "Treated over 15,000 skin disorder cases",
      "Guest speaker at International Skin Care Conferences",
      "Founder of ClearSkin Initiative India"
    ],
    about: "Dr. Rohit Bansal combines science with aesthetics. His practical skin care treatments, including laser and anti-aging therapies, have built a reputation of trust and transformation in cosmetic dermatology.",
    services: ["Acne & Scar Treatment", "Laser Therapy", "Skin Allergy Testing", "Anti-Aging Solutions"],
    contact: {
      email: "dr.derma@healthcare.com",
      phone: "+91 9876543214",
      location: "SkinCure Clinic, Pune"
    }
  }
  
];


import cardiacImg from "../assets/cardiaSurgery.jpg";
import neuroImg from "../assets/cancerScreening.jpg";

 export const serviceDetails = [
  {
    id: 1,
    name: "Cardiology",
    image: cardiacImg,
    shortDesc: "Expert heart care services to keep your heart healthy.",
    longDesc: "Our Cardiology department is equipped with the latest diagnostic and treatment tools to provide care for various heart conditions including heart attacks, arrhythmias, and heart failure. We follow evidence-based guidelines for optimal outcomes.",
    treatments: [
      "Angioplasty & Bypass Surgery",
      "Echocardiogram & ECG",
      "Pacemaker Implantation",
      "Cardiac Rehabilitation"
    ],
    faqs: [
      { q: "How often should I get my heart checked?", a: "It's recommended to get a heart screening once every year, especially after the age of 40." },
      { q: "Do you offer non-invasive treatments?", a: "Yes, including stress testing, lifestyle modification programs, and medication therapy." }
    ]
  },
  {
    id: 2,
    name: "Neurology",
    image: neuroImg,
    shortDesc: "Advanced treatment for brain and nervous system disorders.",
    longDesc: "Our Neurology unit specializes in the treatment of stroke, epilepsy, migraines, multiple sclerosis, and movement disorders. We offer both inpatient and outpatient care by experienced neurologists.",
    treatments: [
      "EEG & Brain Scans",
      "Stroke Management",
      "Epilepsy Surgery",
      "Migraine Clinics"
    ],
    faqs: [
      { q: "Can I consult online for neurological issues?", a: "Yes, teleconsultation options are available for initial assessment and follow-ups." },
      { q: "Do you treat Parkinson’s disease?", a: "Absolutely. We have a specialized Parkinson’s treatment and rehab program." }
    ]
  },

  {
    id: 3,
    name: "Orthopedics",
    image: "https://images.pexels.com/photos/4506075/pexels-photo-4506075.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc: "Comprehensive bone, joint, and spine care for all ages.",
    longDesc: "Our Orthopedic department provides advanced treatment for fractures, arthritis, spine disorders, and sports injuries. From diagnostics to rehabilitation, we ensure faster recovery using modern surgical techniques and physiotherapy.",
    treatments: [
      "Joint Replacement Surgery",
      "Fracture and Trauma Care",
      "Arthroscopic Procedures",
      "Spinal Deformity Correction"
    ],
    faqs: [
      { q: "Do you provide minimally invasive joint replacement?", a: "Yes, we specialize in minimally invasive hip and knee replacements with quick recovery time." },
      { q: "Is physiotherapy included post-surgery?", a: "Absolutely, a tailored physiotherapy plan is part of every patient’s recovery process." }
    ]
  },
  {
    id: 4,
    name: "Pediatrics",
    image: "https://images.pexels.com/photos/4005611/pexels-photo-4005611.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc: "Complete healthcare services for infants, children, and adolescents.",
    longDesc: "Our Pediatrics unit focuses on preventive, developmental, and curative care for children. From vaccinations to managing chronic childhood conditions, we provide compassionate and expert pediatric care.",
    treatments: [
      "Newborn Screening & Care",
      "Childhood Vaccinations",
      "Nutritional Counseling",
      "Developmental Delay Management"
    ],
    faqs: [
      { q: "How frequently should children be vaccinated?", a: "Follow-ups are done as per the National Immunization Schedule. Your pediatrician will guide you accordingly." },
      { q: "Do you offer diet plans for underweight children?", a: "Yes, we provide personalized nutritional counseling and growth monitoring." }
    ]
  },
  {
    id: 5,
    name: "Dermatology",
    image: "https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=600",
    shortDesc: "Advanced care for skin, hair, and nail conditions.",
    longDesc: "Our Dermatology department offers medical and cosmetic skin care solutions including acne treatment, skin allergies, pigmentation, and hair loss therapies. We use modern diagnostic and laser techniques for precise results.",
    treatments: [
      "Acne & Scar Management",
      "Skin Allergy Testing",
      "Laser Hair Removal",
      "Anti-Aging Treatments"
    ],
    faqs: [
      { q: "Is laser treatment safe for all skin types?", a: "Yes, we use FDA-approved lasers tailored for each skin type ensuring safety and efficacy." },
      { q: "Do you offer solutions for hair fall?", a: "Yes, from medical treatments to PRP therapy, we have options based on your hair condition." }
    ]
  }
  
  
];