import React from "react";
import ContactImages from "./ContactImages";

export default function ContactBody() {
  return (
    <div className="w-75 text-center mx-auto pb-4" id="contact-body">
      <p>
        Please feel free to reach out to me for any reason. If there is a bug
        you'd like to report, please open an issue on GitHub for the related
        repository. I will do my best to get back to you, or squash any bugs
        ASAP.
      </p>
      <br />
      <ContactImages />
      <br />
      <p className="mb-0">
        <em>My preferred method of contact is via email:</em>{" "}
        <a href="mailto:ajwcooper97@gmail.com">ajwcooper97@gmail.com</a>
      </p>
    </div>
  );
}
