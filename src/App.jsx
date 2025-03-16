import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spec, setSpec] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [comments, setComments] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (
      experienceYears < 0 ||
      spec === "" ||
      name === "" ||
      username === "" ||
      password === ""
    ) {
      console.log("Compila tutti i campi");
      return;
    } else {
      console.log({
        name,
        username,
        password,
        spec,
        experienceYears,
      });
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          name="nome_completo"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input type="password" name="password" placeholder="Password" />

        <select
          value={spec}
          onChange={(e) => setSpec(e.target.value)}
          name="specs"
          id="specs"
        >
          <option value="">-- Seleziona la specializzazione --</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>

        <input
          type="number"
          name="experience_years"
          id="experience_years"
          placeholder="Anni di esperienza"
          value={experienceYears}
          onChange={(e) => setExperienceYears(e.target.value)}
        />

        <input
          type="textarea"
          name="comments"
          placeholder="Commenti"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button onClick={handleSubmit}>Invia Form</button>
      </form>
    </>
  );
}

export default App;
