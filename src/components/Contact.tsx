"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
    alert("Message sent successfully!");
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
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#f5f5f7]">
          Collaborate.
        </h2>
        <p className="text-xl text-[#f5f5f7]/40">
          Have a vision? Let's bring it to life with precision and style.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="bg-[#1c1c1e] p-8 md:p-12 rounded-[2.5rem] border border-[#f5f5f7]/10 shadow-2xl text-left"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#f5f5f7]/60 font-bold uppercase tracking-widest text-[10px]">Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="bg-[#0a0a0a] border-[#f5f5f7]/10 h-14 rounded-xl text-[#f5f5f7] focus-visible:ring-[#f5f5f7]/20" {...field} />
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
                    <FormLabel className="text-[#f5f5f7]/60 font-bold uppercase tracking-widest text-[10px]">Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" className="bg-[#0a0a0a] border-[#f5f5f7]/10 h-14 rounded-xl text-[#f5f5f7] focus-visible:ring-[#f5f5f7]/20" {...field} />
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
                  <FormLabel className="text-[#f5f5f7]/60 font-bold uppercase tracking-widest text-[10px]">How can I help?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your ideas..."
                      className="min-h-[200px] bg-[#0a0a0a] border-[#f5f5f7]/10 rounded-2xl text-[#f5f5f7] focus-visible:ring-[#f5f5f7]/20 resize-none p-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full h-16 text-lg font-bold bg-[#f5f5f7] text-[#0a0a0a] rounded-full hover:scale-[1.02] transition-transform active:scale-95 shadow-xl">
              Send Message
            </Button>
          </form>
        </Form>
      </motion.div>
    </section>
  );
}
