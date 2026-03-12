"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      // NOTE: Replace 'FORM_ID' with the unique ID from your Formspree dashboard
      // (e.g., https://formspree.io/f/xbjojpze)
      const FORM_ID = "itsbibekpoudyal@gmail.com"; // Keep as fallback for now
      const endpoint = FORM_ID.includes("@") 
        ? `https://formspree.io/${FORM_ID}` 
        : `https://formspree.io/f/${FORM_ID}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...values,
          _subject: `New Portfolio Message from ${values.name}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        console.error("Formspree Error:", data);
        setIsError(true);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 px-4 w-full max-w-3xl mx-auto space-y-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground">
          Collaborate.
        </h2>
        <p className="text-xl text-foreground/40">
          Have a vision? Let's bring it to life with precision and style.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="bg-card p-8 md:p-12 rounded-[2.5rem] border border-foreground/10 shadow-2xl text-left relative overflow-hidden"
      >
         <div className="absolute top-0 right-0 p-8 flex flex-col gap-4">
           {/* Formspree integrated for itsbibekpoudyal@gmail.com */}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/60 font-bold uppercase tracking-widest text-[10px]">Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Shiva Prasad" className="bg-background border-foreground/10 h-14 rounded-xl text-foreground focus-visible:ring-primary/20" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/60 font-bold uppercase tracking-widest text-[10px]">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="shiva.prd@example.com" className="bg-background border-foreground/10 h-14 rounded-xl text-foreground focus-visible:ring-primary/20" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/60 font-bold uppercase tracking-widest text-[10px]">How can I help?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your ideas..."
                      className="min-h-[200px] bg-background border-foreground/10 rounded-2xl text-foreground focus-visible:ring-primary/20 resize-none p-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className="w-full h-16 text-lg font-bold bg-primary text-primary-foreground rounded-full hover:scale-[1.02] transition-transform active:scale-95 shadow-xl disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Sent Successfully
                </>
              ) : (
                "Send Message"
              )}
            </Button>

            {isError && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-2 text-red-500 justify-center font-medium"
              >
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Something went wrong. Please try again.</span>
                </div>
                <p className="text-xs opacity-70">
                  Tip: Check your email for a Formspree activation link or check the console (F12) for details.
                </p>
              </motion.div>
            )}

            {isSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-primary text-center font-medium"
              >
                Thank you! I'll get back to you shortly.
              </motion.p>
            )}
          </form>
        </Form>
      </motion.div>
    </section>
  );
}
