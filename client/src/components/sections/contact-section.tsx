import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Phone, Mail, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "שם חייב להכיל לפחות 2 תווים" }),
  email: z.string().email({ message: "כתובת אימייל לא תקינה" }),
  phone: z.string().min(9, { message: "מספר טלפון לא תקין" }),
  message: z.string().min(10, { message: "ההודעה חייבת להכיל לפחות 10 תווים" }),
});

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) => 
      apiRequest("POST", "/api/contact", values),
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "ההודעה נשלחה בהצלחה",
        description: "נחזור אליך בהקדם",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "שגיאה בשליחת הטופס",
        description: error.message || "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-8">מוכן לעשות את השינוי?</h2>
          <p className="text-lg text-neutral-600 mb-12">
            זה לא צירוף מקרים שהגעת לכאן. זו ההזדמנות שלך להתחיל לזוז.
          </p>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-heebo font-bold text-neutral-800 mb-6 rtl-specific">✉️ שלח הודעה עכשיו</h3>
            
            {isSubmitted ? (
              <div className="max-w-xl mx-auto p-6 bg-green-50 rounded-lg border border-green-200 text-center">
                <h4 className="text-xl font-medium text-green-800 mb-2">תודה שפנית אלינו!</h4>
                <p className="text-green-700">ההודעה שלך התקבלה. ניצור איתך קשר בהקדם.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto rtl-specific">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="block text-neutral-700 mb-2 text-right">שם מלא</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="שם מלא"
                            className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="block text-neutral-700 mb-2 text-right">אימייל</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="האימייל שלך"
                            className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="block text-neutral-700 mb-2 text-right">טלפון</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="מספר הטלפון שלך"
                            className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mb-6">
                        <FormLabel className="block text-neutral-700 mb-2 text-right">הודעה</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="איך אני יכול לעזור לך?"
                            className="w-full p-3 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-right"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-md transition-colors duration-300"
                  >
                    {isPending ? "שולח..." : "שלח הודעה"}
                  </Button>
                </form>
              </Form>
            )}
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <a href="tel:+972544731214" className="block group">
                  <div className="inline-block bg-neutral-100 p-3 rounded-full mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="font-heebo font-medium mb-1">טלפון</h4>
                  <p className="text-neutral-600 group-hover:text-primary transition-colors duration-300">
                    054-4731214
                  </p>
                </a>
              </div>
              
              <div>
                <a href="mailto:itayf32@gmail.com" className="block group">
                  <div className="inline-block bg-neutral-100 p-3 rounded-full mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="font-heebo font-medium mb-1">אימייל</h4>
                  <p className="text-neutral-600 group-hover:text-primary transition-colors duration-300">
                    itayf32@gmail.com
                  </p>
                </a>
              </div>
              
              <div>
                <a href="https://www.linkedin.com/in/itay-feuerstein/" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="inline-block bg-neutral-100 p-3 rounded-full mb-3 group-hover:bg-primary/10 transition-colors duration-300">
                    <Linkedin className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="font-heebo font-medium mb-1">LinkedIn</h4>
                  <p className="text-neutral-600 group-hover:text-primary transition-colors duration-300">
                    איתי פוירשטיין
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
