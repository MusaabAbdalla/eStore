import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .min(3, "Please enter your full name with at least 3 characters."),
    subject: yup
      .string()
      .required("Please enter your subject")
      .min(3, "Please enter your Subject with at least 3 characters."),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Email field cannot be left empty"),
    body: yup
      .string()
      .required("Please enter body")
      .min(3, "Body should be at least 3 characters."),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data)
    alert("The contact form has been sent successfully.");
    reset();
  };

  return (


    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-5 flex flex-col items-start ">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-gray-9oo"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("fullName")}
            />
          </div>
          <p className="text-red-700">{errors.fullName?.message}</p>
          <div className="mb-5 flex flex-col items-start">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("email")}
            />
          </div>
          <p className="text-red-700">{errors.email?.message}</p>
          <div className="mb-5 flex flex-col items-start">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("subject")}
            />
          </div>
          <p className="text-red-700">{errors.subject?.message}</p>
          <div className="mb-5 flex flex-col items-start">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("body")}
            ></textarea>
          </div>
      <p className="text-red-700">{errors.body?.message}</p>
          <div>
            <button
              className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>



  );
}

export default Contact;
