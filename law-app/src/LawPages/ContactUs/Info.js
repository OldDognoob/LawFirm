import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="Contact">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" placeholder="bill" ref={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" placeholder="luo" ref={register} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="email"
            type="email"
            ref={register}
          />
        </div>
        <label>Query</label>
        <input
        name="Query"
        ref={register({ required: true, maxLength: 200})}
      />
        <input type="submit" />
      </form>
    </div>
  );
}