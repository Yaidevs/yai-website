import { Clock, Target, Users, Headphones, GitBranch } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <div className="w-full px-4 py-12 md:py-16 md:px-32">
      <div className="text-center mb-12">
        <p className="text-green-500 font-medium mb-2">OUR ADVANTAGES</p>
        <h2 className="text-[32px] font-bold text-[#1a237e] mb-4">
          Why YAI Software Technologies Stands Out
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our exceptional services that position us as a leading choice in web and mobile app development.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[600px] overflow-y-auto scrollbar-hide">
        <FeatureCard
          Icon={Clock}
          title="Punctuality"
          description="We understand that time is crucial. Our team is committed to delivering your projects on schedule, ensuring your timelines are met."
          iconColor="bg-[#FFA726]"
        />
        <FeatureCard
          Icon={Target}
          title="Exceptional Quality"
          description="Quality is paramount to us. We strive to exceed expectations by delivering work that aligns perfectly with your business goals and requirements."
          iconColor="bg-[#66BB6A]"
        />
        <FeatureCard
          Icon={Users}
          title="Expert Team"
          description="Our specialized teams are ready to tackle your web and mobile development needs. Share your vision, and we’ll bring it to life!"
          iconColor="bg-[#4DD0E1]"
        />
        <FeatureCard
          Icon={Headphones}
          title="Around-the-Clock Support"
          description="Our customer support is always available, day or night, ready to assist you with any inquiries and ensure smooth operations."
          iconColor="bg-[#7C4DFF]"
        />
        {/* <FeatureCard
          Icon={GitBranch}
          title="Agile Methodology"
          description="We utilize an agile development process that enhances flexibility and quality, providing you with reliable and scalable solutions."
          iconColor="bg-[#EC407A]"
        /> */}
      </div>
    </div>
  );
}