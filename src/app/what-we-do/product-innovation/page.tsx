import { HeroSection } from "@/components/HeroSection";
import { QuestionSection } from "@/components/QuestionSection";
import { TextImageLayout } from "@/components/TextImageLayout";
import React from "react";

const ProductInnovation = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection
        primaryImage="/molten.png"
        primaryHeader="Da Vinci"
        secondaryHeader="Revolutionizing Smart Manufacturing"
        enableButton={true}
        content="Discover Da Vinci - the revolutionary AI-powered Manufacturing Execution System (MES) that redefines the future of industrial production. Specially engineered for metallurgy and complex workflows, Da Vinci harnesses IoT, AI, and seamless enterprise integrations to supercharge your factory’s performance. Experience smarter, faster, and more sustainable operations, optimized for the demands of Industry 4.0, as Da Vinci transforms raw potential into actionable insights and unparalleled efficiency."
      />
      <QuestionSection
        primaryHeader="Key Features"
        secondaryHeader="Da Vinci"
        content="At VirtueS, we go beyond solutions building trusted partnerships with expertise, data-driven insights, and a commitment to excellence empowering businesses to navigate change and drive sustainable growth."
      />
      <TextImageLayout
        img={"/dashboard.png"}
        title="AI and IoT Powered Insights and Automation"
        imgPosition="left"
        content="Da Vinci harnesses the power of AI and machine learning to revolutionize operations. It predicts equipment failures with predictive maintenance, optimizes production schedules to reduce downtime and waste, and enhances decision-making with real-time analytics and actionable insights. By automating repetitive tasks, Da Vinci empowers teams to focus on strategic, high-value activities, driving operational excellence. By automating repetitive tasks, Da Vinci empowers teams to focus"
      />
      <TextImageLayout
        img={"/table.png"}
        title="Compliance and Sustainability"
        imgPosition="right"
        content="Da Vinci streamlines compliance and sustainability efforts by automating adherence to global standards such as ISO, EPA, and GDPR. It features detailed emissions tracking and sustainability reporting to meet environmental regulations, while its built-in auditing tools simplify compliance processes for highly regulated industries, ensuring businesses remain efficient, accountable, and environmentally responsible."
      />
      <TextImageLayout
        img={"/modularArchitecture.png"}
        title="Modular Architecture for Maximum Flexibility"
        imgPosition="left"
        content="Da Vinci's modular microservices architecture offers scalable, tailored solutions with key modules like IoT Integration for real-time monitoring, ERP Integration for seamless data flow, and AI-powered Quality Management for defect detection. Additional modules include Emissions Reporting for sustainability and Incident Management for operational efficiency, empowering businesses to optimize operations and drive innovation."
      />
    </div>
  );
};

export default ProductInnovation;
