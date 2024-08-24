"use client";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { postContactData } from "../apis/postContact";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(null);
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email")
        .required("Please enter your Email"),
      message: Yup.string()
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Please enter your message"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      setMessageSent(null);
      postContactData(values)
    },
  });
  const inputClasses =
    "bg-transparent py-4 px-2  font-sans font-normal resize-none text-white rounded-md outline-none border-[1px] border-white font-medium w-full";
  return (
    <div
      id="contact"
      data-aos="zoom-in"
      data-aos-duration="1200"
      className={`grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-28 px-20 pb-16 max-md:px-5 max-xl:gap-12 max-md:gap-8`}
    >
      <div className="xl:col-span-2">
        <h2 className="text-white text-5xl font-semibold mb-12  max-md:text-center max-md:mb-6 max-md:text-4xl">
          Contact Us
        </h2>
        <p className="text-white text-3xl font-light max-md:text-lg">
          Have questions or ready to start your next project? Reach out to Orris
          Creative Arena.
        </p>
      </div>

      <div className="  ">
        <form
          onSubmit={validation.handleSubmit}
          className=" flex flex-col gap-2"
        >
          <div>
            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                name="name"
                value={validation.values.name}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                className={inputClasses}
                required
              />
              {validation.touched.name && validation.errors.name ? (
                <h2 className="text-red-700 mt-1">{validation.errors.name}</h2>
              ) : null}
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={validation.values.email}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                className={inputClasses}
                required
              />
              {validation.touched.email && validation.errors.email ? (
                <h2 className="text-red-700 mt-1">{validation.errors.email}</h2>
              ) : null}
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                How we can help you?
              </label>
              <textarea
                rows={5}
                name="message"
                value={validation.values.message}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                className={inputClasses}
              />
              {validation.touched.message && validation.errors.message ? (
                <h2 className="text-red-700 mt-1">
                  {validation.errors.message}
                </h2>
              ) : null}
            </div>
          </div>

          <button type="submit" className="button text-2xl">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        {messageSent && (
          <h2 className="text-green-600 mt-4 font-sans">{messageSent}</h2>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
