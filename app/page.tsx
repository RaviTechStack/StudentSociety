import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import CareerRoadmaps from "@/components/career-roadmaps"
import ResumeBuilder from "@/components/resume-builder"
import JobPortal from "@/components/job-portal"
import Head from "next/head"
export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Student Society - The Hub for Student Growth</title>
        <meta name="author" content="Ravi Singh" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Student Society is the ultimate platform for students to learn, collaborate, and grow. Get access to study resources, career guidance, and a vibrant student community." />
        <meta name="keywords" content="Student Society, student community, study resources, career guidance, education, learning platform" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#1E90FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Student Society - The Hub for Student Growth" />
        <meta property="og:description" content="Join Student Society to access free study materials, career advice, and student networking opportunities." />
        <meta property="og:url" content="https://studentsociety.in" />
        <meta property="og:type" content="website" />
        </Head>
      <HeroSection />
      <FeaturesSection />
      <CareerRoadmaps />
      <ResumeBuilder />
      <JobPortal />
    </div>
  )
}

