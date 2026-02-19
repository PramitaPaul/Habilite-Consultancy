import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">We'd love to hear from you. Reach out to discuss your business needs.</p>
          <div className="bg-secondary rounded-lg p-8 text-left space-y-4">
            <p className="text-foreground"><span className="font-bold">Email:</span> contact@habiliteconsultancy.com</p>
            <p className="text-foreground"><span className="font-bold">Phone:</span> +91-1234567890</p>
            <p className="text-foreground"><span className="font-bold">Address:</span> 123 Business St, City, Country</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
