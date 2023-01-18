import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  });
  console.log(values);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedValues = {
      ...values,
      [name]: value,
    };

    setValues(updatedValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({
      fname: '',
      lname: '',
      email: '',
      password: '',
    });
  };

  return (
    <section id="container">
      <div className="right">
        <form onSubmit={handleSubmit}>
          <p className="trial-offer">
            <strong> Sign Up</strong> right now
          </p>
          <div className="input-wrapper">
            <input
              value={values.fname}
              onChange={handleChange}
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              required
            />
            <input
              value={values.lname}
              onChange={handleChange}
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              required
            />
            <input
              value={values.email}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <input
              value={values.password}
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <input type="submit" value="sign up" id="submit" />
            <p>By clicking the button, you are agreeing to our</p>
            <p>
              <a href="https://www.google.com">Terms and conditions</a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default App;
