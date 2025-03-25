const PricingPlans = () => {
  return (
    <section className="py-12 mt-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Services, that we provide
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Choose a plan that suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-black rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300 flex flex-col h-full"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 text-gray-400">{plan.description}</p>

                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-xl font-medium text-gray-400">/mo</span>
                  )}
                </div>

                <ul className="mt-6 space-y-4 text-gray-400">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button at the bottom */}
              <a
                href="#"
                className="mt-auto block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const plans = [
  {
    name: "Starter Website",
    description: "Perfect for personal projects and small businesses",
    price: "$49",
    features: ["✔ 3 Pages", "✔ Responsive Design", "✔ Basic SEO Optimization"],
    buttonText: "Get Started",
  },
  {
    name: "Business Website",
    description: "Great for growing businesses and startups",
    price: "$150",
    features: [
      "✔ Up to 10 Pages",
      "✔ Mobile-Friendly Design",
      "✔ SEO Optimization",
      "✔ Contact Form Integration",
    ],
    buttonText: "Get Started",
  },
  {
    name: "E-Commerce Website",
    description: "Best for online stores and large-scale projects",
    price: "Custom",
    features: [
      "✔ Unlimited Pages",
      "✔ Fully Responsive Design",
      "✔ Advanced SEO & Speed Optimization",
      "✔ Payment Gateway Integration",
      "✔ Admin Dashboard",
    ],
    buttonText: "Get Started",
  },
];

export default PricingPlans;
