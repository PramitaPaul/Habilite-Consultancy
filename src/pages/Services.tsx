import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Our Services</h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-12">Comprehensive Oracle and IT consulting solutions for your business.</p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Oracle ERP Implementation", desc: "End-to-end Oracle ERP Cloud implementation services tailored to your business processes." },
              { title: "Business Process Consulting", desc: "Analyze and redesign business processes to improve efficiency and reduce costs." },
              { title: "Digital Transformation", desc: "Guide your organization through digital transformation with modern cloud solutions." },
              { title: "Training & User Adoption", desc: "Comprehensive training programs to ensure successful ERP adoption across teams." },
            ].map((s) => (
              <div key={s.title} className="bg-secondary rounded-lg p-5 sm:p-8 text-left">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
