const Education = () => {
    const educationData = [
      {
        year: "2021 – 2025",
        degree: "BS-Computer Software Engineering",
        institution: "COMSATS University Islamabad",
        address:
          "University Rd, Near Ayub Medical College, Khyber Pakhtunkhwa, Abbottabad, Pakistan."
      },
      {
        year: "2018 – 2020",
        degree: "Pre-Engineering",
        institution: "Jinnah Basic School & College, Mansehra",
        address: "Shara-e-Resham, near Butt Pull, Mansehra, Khyber Pakhtunkhwa"
      },
      {
        year: "2018",
        degree: "Matriculation",
        institution: "Garden Public School Mansehra",
        address: "85GR+6QM, Dub 2, Mansehra, Khyber Pakhtunkhwa",
        percentage: "70 percent"
      }
    ];
  
    return (
      <section id="education" className="py-16 bg-gray-100">
        <div className="container mx-auto px-12">
          <h2 className="text-black text-center text-3xl font-bold mb-10">EDUCATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-md border border-gray-300 rounded-lg flex items-start space-x-4"
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h5 className="text-gray-700 font-semibold">{edu.year}</h5>
                  <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.address}</p>
                  {edu.percentage && <p className="text-gray-500 text-sm">{edu.percentage}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  