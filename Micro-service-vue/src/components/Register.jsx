import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import auth from "../Auth";



let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjgyNjc2MzYsImV4cCI6MTY2ODI3MTIzNiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckByZXN0LmNvbSJ9.i6f0mNIrqskZ7cIOXFOoxVjOeC27xzNVydVys19cFI-p1oq1Pv9VqKFECQji66Prss_nqBMxvZpR1g_xhy2FNHW-WMEfeftF-w6ndd8ckHWBNlO6b-m-7Da_Sg4O0lG9M19NTlFqA_lSNXNiyeUOB-bO8UEk1MB0KPYGOxHPzYnTZP0ZDsvpwwTtYZ7jb06CrudEO85GupjQuiOuVNXJfNeRQgyQKk22X9MQJDme2mb7NI6dR44hr1vGtRM8sKqK0jih3ENzDepbYfCBtco3GR7pwX9EFaX8QGl7Pp-Eph7CbxtC1VqlISfl_HYVDEFQnYVRjKztcT_s9q11rZO0w3B1YnjDNOl_ZxZPDWwRdMCsLBqqeWy9twaX6FAGJuvfkf7CJDMr5XMYuUUTQlUX37bcJV6MOCySmLlzN1eeWStY6PWIFd2NDMGresduGiCA4jYHdDDgeKd_2ld0IbidWNeZUojDPsjZsxDcfn7jwJeW5azlzCy0dhNtFI4EoycqsnkBpMGA5f0PSITl2avnfsNJWLu4jsFkTPe9Dw7ip1bjN2lsEMVJXVmgSCUxD9MYi5m0WN6yydqvasvecDyl7XCSgV5fWPHjGqGESORx1lyLigZmdHJiWw8jL8f7rmDRvetbi0QRNEinIyvk4EbW84m0p7BS8roQJQXoMEMwnUU";

const client = axios.create({
  baseURL: "http://localhost:8000/api/messages",
  headers: {
    // "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    Authorization: `bearer ${token}`,
  },
});

export default function Register() {
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });


  const handleSubmite = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      const result = await auth.post(`http://localhost:8000/user/1`, cre);

      console.log(result);
      navigate('/');
    };

    fetchData();  
  };

  return (
    <div className="app-login">
      <div className="login-form">
        <div className="title">Inscription</div>
        <div className="form">
          <form onSubmit={handleSubmit(console.log)}>
            <div className="input-container">
              <label>Email </label>
              <input {...register("email", { required: true })} placeholder="Email" />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input {...register("password", { minLength: 2 })} placeholder="Mot de Passe" />

            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          {/* <h1>{post.title}</h1>
          <p>{post.body}</p> */}
        </div>
      </div>
    </div>
  );
}
