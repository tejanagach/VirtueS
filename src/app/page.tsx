"use client";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";
import FeatureCard from "@/components/FeatureCard";
import { InfiniteScrollGallery } from "@/components/InfiniteScrollGallery";
import { OutlinedButton } from "@/components/OutlinedButton";
import VideoSection from "@/components/VideoSection";
import { useRouter } from "next/navigation";
import { url } from "inspector";

export default function Home() {
  const router = useRouter();
  const handleReadMore = () => {
    console.log("Read More clicked");
  };
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative h-[600px] bg-[#0f2d49] text-white overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://4i2u705gdx.ufs.sh/f/cXw2QFrZrmFvwht8mAWecSoiVJQdNmxWktUj6ZD2qAs178bE"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Additional content can be added here */}
      </section>

      {/* Impact-Driven Approach Section */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Impact-Driven Approach for Unstoppable Growth
          </h2>
          <div className="flex flex-col items-center justify-center">
            <FeatureSection
              primaryImage="/analytics.png"
              secondaryImage="/davinciLogo.png"
              title="Da Vinci: The AI-Powered Revolution in Manufacturing"
              imgPosition="left"
              handleClick={() => window.open("https://davincism.io/", "_blank")}
              content="Step into the future with Da Vinci, transform manufacturing with AI and IoT, enabling real-time analytics, automated compliance, optimized supply chains, and precision quality control. Seamlessly integrate with existing systems ERP for enhanced efficiency. Elevate refinery operations with Ignis AI, leveraging predictive maintenance and energy optimization. Unlock smarter decision-making and operational excellence—where AI drives innovation."
            />
            <FeatureSection
              primaryImage="/performance.png"
              secondaryImage="/rapid.png"
              title="Empowering Digital Transformation with Al"
              imgPosition="right"
              handleClick={() =>
                window.open("https://rapidautomation.ai/", "_blank")
              }
              content="Rapid Acceleration Partners (RAP) delivers practical AI solutions to accelerate digital transformation. RAPFlow enables scalable, intelligent content solutions, while RAPBot streamlines operations with end-to-end automation. Unlock AI’s full potential to drive innovation, optimize processes, and achieve sustainable growth with RAP—making advanced technology accessible and impactful for all businesses."
            />
          </div>
        </div>
      </section>
      {/* Core Expertise Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto md:px-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Expertise
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1050px]">
              {/* Tech Consult */}
              <FeatureCard
                content="Accelerate your digital journey with our expertise in SAP, Oracle, Microsoft Dynamics, and Data-driven analytics. Leverage tools like Power BI and Tableau to turn data into actionable insights."
                handleClick={() => router.push("/what-we-do/tech-consult")}
                primaryImage="/techConsult.png"
              />

              {/* Talent Solution */}
              <FeatureCard
                content="Access highly skilled professionals through tailored staffing solutions. From digital augmentation to specialized SME access, we ensure the right talent meets the right opportunity."
                handleClick={() => router.push("/what-we-do/talent-solution")}
                primaryImage="/talentSolution.png"
              />

              {/* Product Innovation */}
              <FeatureCard
                content="Lead with cutting-edge AI-powered platforms like Da Vinci, our flagship smart manufacturing platform. Designed for modularity and scalability, Da Vinci enables industries to embrace digital transformation."
                handleClick={() =>
                  router.push("/what-we-do/product-innovation")
                }
                primaryImage="/productInnovation.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white">
        <InfiniteScrollGallery />
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto md:px-20 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1050px]">
            <div>
              <Image
                src="/peopleWithLaptops.png"
                alt="Team collaboration"
                width={600}
                height={400}
                className="mb-10"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white h-[120px] flex flex-col items-center justify-center shadow-md">
                  <p className="text-2xl font-bold text-[#ee8502]">200+</p>
                  <p className="text-sm">Team Members</p>
                </div>
                <div className="bg-white h-[120px] flex flex-col items-center justify-center shadow-md">
                  <p className="text-2xl font-bold text-[#ee8502]">100+</p>
                  <p className="text-sm">Client Reviews</p>
                </div>
                <div className="bg-white h-[120px] flex flex-col items-center justify-center shadow-md">
                  <p className="text-2xl font-bold text-[#ee8502]">50+</p>
                  <p className="text-sm">Projects</p>
                </div>
              </div>
            </div>
            <div className="flex items-start h-full">
              <div className="h-[360px] mt-9">
                <p className="text-[#3c3c3c] mb-4 text-base">About us</p>
                <h2 className="mb-6 text-3xl font-semibold">Why Choose Us?</h2>
                <p className="text-[#3c3c3c] mb-4 text-base">
                  With 14+ years of global experience, VirtueS specializes in
                  talent solution, consulting, and product innovation,
                  delivering tailored solutions for sustainable growth.
                </p>
                <p className="text-[#3c3c3c] mb-8 text-base">
                  We take a technology-agnostic approach, ensuring the best-fit
                  solutions across industries like healthcare, manufacturing,
                  and finance. From SAP and Oracle to scalable infrastructure
                  and quality assurance, we empower businesses to thrive in a
                  dynamic digital landscape.
                </p>
                <OutlinedButton
                  label="Read More"
                  handleClick={() => router.push("/about-us")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What's Going On Section */}
      <section className="py-16">
        <div className="container px-6 mx-auto md:px-20">
          <div className="flex justify-center">
            <div className="max-w-[1050px]">
              <h4 className="text-base mb-4 font-normal text-center">
                Life at VirtueS
              </h4>
              <h2 className="text-3xl font-semibold text-center mb-12">
                What's going on?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* News Cards */}
                {[
                  {
                    title: "Let's Build Tomorrow, Today",
                    description:
                      "We help you transform challenges into opportunities for growth.",
                    image: "/bulb.png",
                    url: "/about-us",
                  },
                  {
                    title: "The Heart of VirtueS Serve",
                    description:
                      "How Our Experience Brings Growth Through Innovation.",
                    image: "/puzzle.png",
                    url: "/what-we-do/product-innovation",
                  },
                  {
                    title: "Driving Change Through Collaboration",
                    description:
                      "Empowering Diversity and Growth Through Daksha.",
                    image: "/group.png",
                    url: "https://www.dakshainc.com",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="bg-white py-[33px] px-3 shadow-sm text-center flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
                      ></div>
                      <h3 className="text-base font-bold mb-4">{item.title}</h3>
                      <p className="text-[#3c3c3c] mb-4">{item.description}</p>
                    </div>
                    <div className="mt-3">
                      <OutlinedButton
                        label="Know More"
                        handleClick={() => router.push(item.url)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-3xl font-semibold text-center mb-12">
        Founder's Vision
      </h2>
      <VideoSection />
    </main>
  );
}
