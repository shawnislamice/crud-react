import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUSer = useLoaderData();
  console.log(loadedUSer);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    form.reset();
    fetch(`http://localhost:5000/users/${loadedUSer._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Update Now</h2>
      <h3>Update Information of: {loadedUSer.name}</h3>
      <form onSubmit={handleUpdate} action="">
        <input type="text" name="name" defaultValue={loadedUSer?.name} /> <br />
        <input
          type="email"
          name="email"
          defaultValue={loadedUSer?.email}
        />{" "}
        <br />
        <input type="submit" value="submit" /> <br />
      </form>
    </div>
  );
};

export default Update;
