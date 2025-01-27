import { Clock, Target, Users, Headphones, GitBranch } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <div className="w-full px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <p className="text-green-500 font-medium mb-2">OUR FEATURES</p>
        <h2 className="text-[32px] font-bold text-[#1a237e] mb-4">
          Why Choose Yai Software Technologies?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Here's a glimpse of the result-oriented services that make us the top
          web and mobile app development company.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-h-[600px] overflow-y-auto scrollbar-hide">
        <FeatureCard
          Icon={Clock}
          title="Timely Delivery"
          description="Time is money. At Dev Technosys, we value every client's time; hence, our team makes sure to deliver the project within the promised deadline."
          iconColor="bg-[#FFA726]"
        />
        <FeatureCard
          Icon={Target}
          title="Top Work Quality"
          description="We never compromise with the work quality and ensure to deliver top quality work adhering to the business needs and project requirements."
          iconColor="bg-[#66BB6A]"
        />
        <FeatureCard
          Icon={Users}
          title="Dedicated Team"
          description="Whether you want to develop a website or mobile application, we have a dedicated team for all. Share your requirements with our experts!"
          iconColor="bg-[#4DD0E1]"
        />
        <FeatureCard
          Icon={Headphones}
          title="24*7 Support"
          description="It doesn't matter what time or day it is; Dev Technosys customer support is there to assist you with the best services and resolve concerns instantly."
          iconColor="bg-[#7C4DFF]"
        />
        <FeatureCard
          Icon={GitBranch}
          title="Agile Development"
          description="We always follow an agile development approach that helps us deliver the project with the utmost quality. Get reliable and scalable business solutions."
          iconColor="bg-[#EC407A]"
        />
      </div>
    </div>
  );
}
