import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .min(3, "Your full name should be at least 3 characters."),
    subject: yup
      .string()
      .required("Please enter your subject")
      .min(3, "Your subject should be at least 3 characters."),
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

  const onSubmit = (d) => {
    alert("The contact form has been sent successfully.");
    reset();
  };

  return (
    <form className="mt-5 mb-5 contact" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center mt-4">Contact Form</h2>
      <div>
        <label> Full Name: </label>
        <input type="text" {...register("fullName")} />
      </div>
      <p className="text-danger">{errors.fullName?.message}</p>
      <div>
        <label> Subject:</label>
        <input type="text" {...register("subject")} />
      </div>
      <p className="text-danger">{errors.subject?.message}</p>
      <div>
        <label> Email:</label>
        <input type="text" {...register("email")} />
      </div>
      <p className="text-danger">{errors.email?.message}</p>
      <div>
        <label> Body:</label>
        <textarea  rows={3} {...register("body")} ></textarea>
      </div>
      <p className="text-danger">{errors.body?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
