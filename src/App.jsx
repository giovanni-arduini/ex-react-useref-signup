import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [spec, setSpec] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [comments, setComments] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const isUsernameValid = useMemo(() => {
    const validChar = username.split("").every((c) => {
      letters.includes(c.toLowerCase()) || numbers.includes(c);
    });
    return validChar && username.trim().length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split("").some((c) => letters.includes(c)) &&
      password.split("").some((c) => numbers.includes(c)) &&
      password.split("").some((c) => symbols.includes(c))
    );
  }, [password]);

  const isDescriptionValid = useMemo(() => {
    return (
      comments.trim().length > 100 && comments.trim().length < 1000, [comments]
    );
  }, [comments]);

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
        {/* <label for="nome_completo">Inserisci il tuo nome completo</label> */}
        <input
          type="text"
          name="nome_completo"
          id="nome_completo"
          placeholder="Nome completo"
          // required
          // minLength={6}
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

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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

        {comments.trim().length > 100 && comments.length < 1000 ? (
          <p style={{ color: "green" }}>Commento valido</p>
        ) : (
          <p style={{ color: "red" }}>
            Il commento deve contenere tra i 100 e i 1000 caratteri
          </p>
        )}

        <button onClick={handleSubmit}>Invia Form</button>
      </form>
    </>
  );
}

export default App;
