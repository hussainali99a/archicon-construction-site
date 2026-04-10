import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageSquare, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Garage Conversion",
  "ADU Construction",
  "Room Addition",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "General Construction",
  "Other",
];

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name.trim() || !formData.phone.trim()) {
      toast({ title: "Please fill in your name and phone number.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        full_name: formData.full_name.trim(),
        email: formData.email.trim() || null,
        phone: formData.phone.trim(),
        service_type: formData.service_type || null,
        message: formData.message.trim() || null,
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    } catch {
      toast({ title: "Something went wrong. Please call us instead.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Call to action */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="h-0.5 bg-primary w-16 mb-8" />
            <p className="font-body text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              Free Estimate
            </p>
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-4">
              Let's Build<br />Together
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-md">
              Fill out the form or give us a call. We respond within 24 hours with a free, no-obligation estimate.
            </p>

            <a
              href="tel:8182175615"
              className="inline-block font-heading text-4xl sm:text-5xl text-gradient-gold hover:opacity-80 transition-opacity mb-8"
            >
              (818) 217-5615
            </a>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8182175615"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="sms:8182175615"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                Text Us
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-charcoal/60 border border-primary/20 p-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-heading text-3xl text-foreground mb-3">Thank You!</h3>
                <p className="font-body text-muted-foreground">
                  We've received your information and will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-charcoal/60 border border-primary/10 p-8 lg:p-10 space-y-5">
                <h3 className="font-heading text-2xl text-foreground mb-2">Get a Free Quote</h3>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1.5 block">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="John Doe"
                    className="w-full bg-background/50 border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1.5 block">
                      Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      maxLength={20}
                      placeholder="(555) 123-4567"
                      className="w-full bg-background/50 border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1.5 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={255}
                      placeholder="john@email.com"
                      className="w-full bg-background/50 border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1.5 block">
                    Service Interested In
                  </label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={1000}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-background/50 border border-border text-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Sending..." : "Request Free Estimate"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
