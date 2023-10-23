"use client";

import { useRef, useState } from "react";

const SubscribeForm = () => {
  const [showForm, setShowForm] = useState(false);

  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const companyRef = useRef(null);

  return (
    <form
      method="post"
      action="https://www.dm-mailinglist.com/subscribe"
      className="w-full md:max-w-[325px]"
      acceptCharset="UTF-8"
    >
      <input
        onClick={() => setShowForm(true)}
        className="py-[7px] px-[10px] w-full outline-none"
        type="email"
        name="email"
        placeholder="E-mail*"
      />
      <div
        className={`my-[5px] flex flex-col gap-[5px] translate-y-[50px] transition duration-500 opacity-50 invisible pointer-events-none md:flex-row ${
          showForm && "!opacity-100 pointer-events-auto !translate-y-0 !visible"
        }`}
      >
        <input
          className="py-[7px] px-[10px] w-full outline-none"
          type="text"
          name="first_name"
          placeholder="First name"
        />
        <input
          className="py-[7px] px-[10px] w-full outline-none"
          type="text"
          name="last_name"
          placeholder="Last name"
        />
      </div>
      <div
        className={`flex flex-col gap-[5px] transition duration-500 invisible opacity-50 translate-y-[150px] pointer-events-none md:flex-row ${
          showForm && "!opacity-100 pointer-events-auto !translate-y-0 !visible"
        }`}
      >
        <input
          className="py-[7px] px-[10px] w-full outline-none"
          type="text"
          name="company_name"
          placeholder="company"
        />
        <button
          className="py-[7px] px-[10px] w-full text-center bg-red text-white hover:bg-white hover:text-red transition duration-300 uppercase"
          type="button"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
