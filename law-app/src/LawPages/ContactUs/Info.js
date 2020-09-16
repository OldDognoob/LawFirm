import React, { Form } from "react";
import Column from "../layouts/column";
import "../layouts/Column.css";

export const Contact = {
  render() {
    return (
      <Form>
        <Column
          title="Contact Us"
          desc="If you need any further legal advice please leave your message & we will soon reach back to you."
          bg="#007476"
        />
        <div className="formGridContainer">
          <div className="formContainer">
            <form>
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />

              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label for="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Form>
    );
  },
};

export default Contact;
