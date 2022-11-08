import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const ContactMe = ({}: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (formData) =>
    (window.location.href = `mailto:skaftisveins@gmail?subject=${formData.subject}&body=Hello, you got mail from ${formData.email}. ${formData.message}(${formData.email})`);
  return (
    <div className="h-screen flex relative flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#008ad8] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Yo - got a request for me.{""}
          <span className="underline decoration-[#008ad8]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#008ad8] h-6 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#008ad8] h-6 w-7 animate-pulse" />
            <p className="text-2xl">skaftisveins@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#008ad8] h-6 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="Email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="submitInput bg-[#008ad8] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
