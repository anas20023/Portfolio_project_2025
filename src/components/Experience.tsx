const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#161b22]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl text-white font-semibold mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0d1117]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl text-white font-semibold">Frontend Developer</h3>
                  <p className="text-blue-500">Freelancer</p>
                </div>
                <span className="text-gray-500">July 2024 - Present</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Led front-end development of several commercial websites</li>
                <li>Implemented modern UI/UX design patterns</li>
                <li>Optimized web performance and accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;