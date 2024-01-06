import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          name="identifier"
          type="email"
          defaultValue="test@test.com"
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          defaultValue="secret"
          label="Password"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block mt-4">
          Guest user
        </button>
        <p className="text-center mt-4">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
