import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spec, setSpec] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [comments, setComments] = useState("");

  return (
    <>
      <form action="" style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          name="nome_completo"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <select name="specs" id="specs">
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <input
          type="number"
          name="experience_years"
          id="experience_years"
          placeholder="Anni di esperienza"
        />
        <input type="textarea" name="comments" placeholder="Commenti" />
      </form>
    </>
  );
}

export default App;
