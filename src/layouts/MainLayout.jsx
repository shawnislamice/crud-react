
const MainLayout = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const city = form.city.value;
    const state = form.state.value;
    const country = form.country.value;
    const zip = form.zip.value;
    const user = { name, email, phone, address, city, state, zip, country };
    console.log(user);
    form.reset();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Data inserted successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <h2>Simple CRUD Operation</h2>
      <form onSubmit={handleForm} action="">
        <input name="name" type="text" placeholder="Enter Name" /> <br /> <br />
        <input name="email" type="text" placeholder="Enter Email" /> <br />{" "}
        <br />
        <input name="phone" type="text" placeholder="Enter Phone" /> <br />{" "}
        <br />
        <input
          name="address"
          type="text"
          placeholder="Enter Address"
        /> <br /> <br />
        <input name="city" type="text" placeholder="Enter City" /> <br /> <br />
        <input name="state" type="text" placeholder="Enter State" /> <br />{" "}
        <br />
        <input
          name="country"
          type="text"
          placeholder="Enter Country"
        /> <br /> <br />
        <input
          name="zip"
          type="text"
          placeholder="Enter Postal Code"
        /> <br /> <br />
        <button type="submit">Submit</button> <br /> <br />
      </form>
      
    </div>
  );
};

export default MainLayout;
