import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <p>Contact</p>
          <p>Submit the form below to get in touch with me</p>
        </div>
        <div>
          <form action="">
            <input type="text" placeholder="Ismingizni kiriting.." className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
