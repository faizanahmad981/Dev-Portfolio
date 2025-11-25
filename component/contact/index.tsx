"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email format."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Submitted", data);
    alert("Form Submitted Successfully!");
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">Contact me</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              {...register("name")}
              className={`w-full p-3 border rounded-lg bg-gray-100 placeholder-black text-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              {...register("email")}
              className={`w-full p-3 border rounded-lg bg-gray-100 placeholder-black text-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Message Input */}
          <div>
            <textarea
              {...register("message")}
              className={`w-full p-3 border rounded-lg bg-gray-100 placeholder-black text-lg ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              rows={4}
              placeholder="Description"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg transition disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
