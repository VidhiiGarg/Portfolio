import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { useAccent } from "@/context/AccentContext";
import { cn } from "@/lib/utils";
import { Mail, Clock, CheckCircle2, Send, MessageSquare } from "lucide-react";

export function Contact() {
  const { preset } = useAccent();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);

  return (
    <Section
      id="contact"
      eyebrow={
        <span className="inline-flex items-center gap-2">
          <Send className={cn("h-3.5 w-3.5", preset.text)} />
          <span>Get In Touch</span>
        </span>
      }
      title={
        <span className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Let's build something bold.
        </span>
      }
      kicker="Tell me about the product you want to ship — I'll help you make it feel futuristic, fast, and polished."
    >
      <motion.div style={{ opacity }}>
        <motion.div 
          className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Email Card */}
          <motion.div 
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl border-2",
                  preset.soft,
                  preset.border,
                  "opacity-20 backdrop-blur-sm bg-slate-950/50"
                )}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-200 mb-2">
                  Prefer Email?
                </h4>
                <p className="text-sm text-slate-300 mb-3">
                  Reach out at{" "}
                  <a href="mailto:youremail@domain.com" className={cn("font-medium hover:underline", preset.text)}>
                    youremail@domain.com
                  </a>{" "}
                  with a short description of your project.
                </p>
                <p className="text-xs text-slate-400">
                  I usually reply within 24–48 hours. Share whatever you're comfortable with.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Response Time Card */}
          <motion.div 
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl border-2",
                  preset.soft,
                  preset.border,
                  "opacity-20 backdrop-blur-sm bg-slate-950/50"
                )}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock className="h-6 w-6 text-white" />
              </motion.div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-200 mb-2">
                  Availability — Q1 2026
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className={cn("h-4 w-4", preset.text)} />
                    <span>1 long-term product (part-time)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className={cn("h-4 w-4", preset.text)} />
                    <span>1–2 shorter design & dev collaborations</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      </motion.div>
    </Section>
  );
}
