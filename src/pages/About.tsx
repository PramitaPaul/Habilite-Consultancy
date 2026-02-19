import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutWriting from "@/assets/about-writing.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutDiscussion from "@/assets/about-discussion.jpg";
import aboutVision from "@/assets/about-vision.jpg";

const About = () => {
  const journey = [
    { year: "2015", text: "Founded to deliver ERP excellence." },
    { year: "2018", text: "Expanded to 50+ clients across sectors." },
    { year: "2021", text: "Recognized as an Oracle partner." },
    { year: "2024", text: "Launched new digital adoption services." },
  ];

  const team = [
    { name: "Rajesh Sharma", initials: "RS", role: "Founder & CEO" },
    { name: "Priya Verma", initials: "PV", role: "Head of Consulting" },
    { name: "Arjun Mehta", initials: "AM", role: "Oracle Solutions Architect" },
    { name: "Neha Singh", initials: "NS", role: "Business Analyst" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img src={aboutHero} alt="About hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 bg-card/90 backdrop-blur-sm rounded-xl p-10 max-w-2xl text-center mx-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Habilite Consultancy</h1>
          <p className="text-muted-foreground mb-6">
            We are a team of professionals with deep expertise in digital transformation and ERP adoption — helping clients adopt ERP, close process gaps and gain measurable business value.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/services" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors">
              Learn More
            </a>
            <a href="/contact" className="px-6 py-3 text-primary font-medium hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Who we are</h2>
            <p className="text-muted-foreground mb-4">
              We are a focused team of ERP & digital transformation professionals. Our core strength is guiding organizations through the entire ERP lifecycle — selection, implementation, process redesign and user adoption — so clients achieve the expected ROI.
            </p>
            <p className="text-muted-foreground">
              We combine process knowledge with technical expertise to deliver practical, sustainable solutions that work for people and business.
            </p>
          </div>
          <img src={aboutWriting} alt="Who we are" className="rounded-lg shadow-lg w-full h-80 object-cover" />
        </div>
      </section>

      {/* Our mission */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our mission</h2>
            <p className="text-muted-foreground mb-4">
              To help organizations unlock value from ERP by aligning technology to business goals. We focus on simplifying processes, reducing inefficiencies, and ensuring solutions are adopted by users — not just deployed.
            </p>
            <p className="text-muted-foreground">
              Long-term partnerships are at the heart of our approach: we measure success by the long-term operational improvements our clients gain.
            </p>
          </div>
          <img src={aboutTeam} alt="Our mission" className="rounded-lg shadow-lg w-full h-80 object-cover" />
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Industries we serve</h2>
            <p className="text-muted-foreground mb-4">
              We have helped organisations across multiple sectors. Our cross-industry exposure enables us to quickly identify process gaps and apply proven practices.
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
              <li>Banking & Financial Services</li>
              <li>Healthcare</li>
              <li>Information Technology</li>
              <li>Telecommunications</li>
              <li>Hospitality</li>
              <li>Manufacturing</li>
            </ul>
            <p className="text-muted-foreground">
              For each client we adapt the industry-proven approach to the specific culture, regulatory and operational needs of their business.
            </p>
          </div>
          <img src={aboutDiscussion} alt="Industries" className="rounded-lg shadow-lg w-full h-80 object-cover" />
        </div>
      </section>

      {/* Our vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our vision</h2>
            <p className="text-muted-foreground">
              To be the trusted partner for businesses that want measurable, sustainable digital transformation — where technology, people and processes work together to create long-term advantage.
            </p>
          </div>
          <img src={aboutVision} alt="Our vision" className="rounded-lg shadow-lg w-full h-80 object-cover" />
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {journey.slice(0, 3).map((j) => (
              <div key={j.year} className="bg-card rounded-lg p-8 text-center shadow-sm">
                <p className="text-xl font-bold text-primary mb-2">{j.year}</p>
                <p className="text-muted-foreground">{j.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <div className="bg-card rounded-lg p-8 text-center shadow-sm max-w-xs w-full">
              <p className="text-xl font-bold text-primary mb-2">{journey[3].year}</p>
              <p className="text-muted-foreground">{journey[3].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our experts */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet our experts</h2>
          <p className="text-muted-foreground mb-12">
            Practitioners with ERP implementation experience and strong domain knowledge.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center bg-card rounded-lg p-6 shadow-sm border">
                <div className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-lg">{member.initials}</span>
                </div>
                <p className="font-bold text-foreground">{member.name}</p>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
