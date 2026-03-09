import React from "react";

const theme = {
  primary: "#0d6efd",
  background: "#f8f9fa",
  cardBg: "#ffffff",
  text: "#212529",
  subText: "#6c757d"
};

const services = [
  {
    title: "Custom Web Application Development",
    description:
      "We build scalable and secure web applications tailored to your business needs. Our solutions include dashboards, SaaS platforms, admin systems, and enterprise tools designed for performance and long-term growth."
  },
  {
    title: "Mobile App Development",
    description:
      "We create modern Android and cross-platform mobile applications with smooth UI and reliable backend systems. Our apps help businesses reach customers directly through powerful mobile experiences."
  },
  {
    title: "Business Automation Systems",
    description:
      "We develop software that automates business operations such as attendance tracking, reporting systems, workflow automation, and management dashboards to improve productivity."
  },
  {
    title: "Cloud & API Integrations",
    description:
      "We integrate modern cloud services, secure APIs, payment gateways, and data storage solutions to ensure your software is scalable, secure, and ready for growth."
  }
];

const Contact = () => {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: theme.background }}
    >
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 style={{ color: theme.text }}>
            About Digital Tech Eye
          </h2>

          <p
            className="mx-auto"
            style={{ maxWidth: "700px", color: theme.subText }}
          >
            Digital Tech Eye is a modern software development company focused on
            building high-quality digital solutions for businesses. We help
            organizations create scalable web platforms, mobile applications,
            and automation systems that improve efficiency and accelerate
            digital transformation.
          </p>
        </div>

        {/* Services Cards */}
        <div className="row g-4">

          {services.map((service, index) => (
            <div className="col-md-6" key={index}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ backgroundColor: theme.cardBg }}
              >
                <div className="card-body p-4">

                  <h5
                    className="card-title mb-3"
                    style={{ color: theme.primary }}
                  >
                    {service.title}
                  </h5>

                  <p
                    className="card-text"
                    style={{ color: theme.subText }}
                  >
                    {service.description}
                  </p>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Contact Section */}
        <div className="text-center mt-5">
          <h5 style={{ color: theme.text }}>
            Start Your Project With Us
          </h5>

          <p style={{ color: theme.subText }}>
            If you have a project idea or need a custom software solution,
            feel free to contact us.
          </p>

          <a
            href="mailto:digitaltecheye@gmail.com"
            className="btn btn-primary"
          >
            digitaltecheye@gmail.com
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;