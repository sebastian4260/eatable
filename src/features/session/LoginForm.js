import FormField from "../../Components/UI/FormField";
import { fetchLogin } from "../../features/session/sessionSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SessionError from "./sessionError";

export default function LoginForm({ id }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} id={id}>
      <SessionError />
      <FormField>
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </FormField>
      <FormField>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </FormField>
    </form>
  );
}