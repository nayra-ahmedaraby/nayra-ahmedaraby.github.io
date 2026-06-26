interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="text-center mb-14">
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300 mb-4">
      {title}
    </h2>
    <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
    {subtitle && (
      <p className="text-gray-300 mt-6 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
