import Resto1 from './Image/resto.jpg'
import Resto2 from './Image/resto.jpg'
import Shop from './Image/shop.jpg'

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Should You Go Ahead with Me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Resto1}
            title="Expertise"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mauris vel nisi gravida vulputate."
          />
          <FeatureCard
            icon={Resto2}
            title="Quality"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mauris vel nisi gravida vulputate."
          />
          <FeatureCard
            icon={Shop}
            title="Reliability"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mauris vel nisi gravida vulputate."
          />
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const FeatureCard = ({icon,title,description}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default FeaturesSection;
