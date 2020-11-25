import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const LoginForm = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 characters minimum"),
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="username" ref={register} />
      <p>{errors.username?.message}</p>
        
      <input type="password" name="password" ref={register} />
      <p>{errors.password?.message}</p>
      <input type="submit" />
    </form>
  );
};

export default LoginForm;