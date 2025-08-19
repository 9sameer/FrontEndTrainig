import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// -------------------- LOGIN PAGE --------------------
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      navigate("/thankyou");
    } else {
      alert("Please enter credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>
        Don’t have an account? <Link to="/signup">Sign Up Here</Link>
      </p>
    </div>
  );
}

// -------------------- SIGNUP PAGE --------------------
function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Signup Successful! 🎉");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="">First Name  :</label>
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
        <br />
        <label htmlFor="">Last Name :</label>
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
        <br />
        <label htmlFor="">Email    :</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        <br />
        <label htmlFor="">Password  : </label>
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
        <br />
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login Here</Link>
      </p>
    </div>
  );
}

// -------------------- THANK YOU PAGE --------------------
function ThankYou() {
  return (
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <h1>🎉 Thank You for Logging In!</h1>
    </div>
  );
}

// -------------------- MAIN APP --------------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}