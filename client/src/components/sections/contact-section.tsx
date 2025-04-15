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
import { DownloadButton } from "@/components/ui/download-button"; // Added import
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
          <h2 className="text-3xl md:text-4xl font-heebo font-bold text-neutral-800 mb-8">מה השלב הבא?</h2>
          <p className="text-lg text-neutral-600 mb-6">
            אם מה שדיברנו איתגר אותך — והבנת שזה הזמן לזוז,<br/>
            אני כאן כדי לקחת אותך כל הדרך קדימה.
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <a
              href="https://wa.link/oursct"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-4 px-8 rounded-md transition-colors duration-300 text-lg mb-12"
            >
              שלח לי הודעה ונבחר את המסלול שמתאים לך
            </a>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
                <a href="https://www.linkedin.com/in/itayfoyerstein/" target="_blank" rel="noopener noreferrer" className="block group">
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