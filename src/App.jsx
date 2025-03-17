import { useState, useMemo, useRef, useEffect } from "react";

function App() {
  const nameRef = useRef("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const specRef = useRef();
  const experienceYearsRef = useRef();
  const [comments, setComments] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const isUsernameValid = useMemo(() => {
    const validChar = username.split("").every((c) => {
      return letters.includes(c.toLowerCase()) || numbers.includes(c);
    });
    console.log(validChar);
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
    return comments.trim().length > 100 && comments.trim().length < 1000;
  }, [comments]);

  function resetForm(e) {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setComments("");
    nameRef.current.value = "";
    specRef.current.value = "";
    experienceYearsRef.current.value = "";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const name = name.current.value;
    const spec = specRef.current.value;
    const experienceYears = experienceYearsRef.current.value;

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

  useEffect(() => {
    nameRef.current.focus();
  }, []);

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
          ref={nameRef}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {username.trim() && (
          <p style={{ color: isUsernameValid ? "green" : "red" }}>
            {isUsernameValid
              ? "Username valido"
              : "Lo username deve contenere almeno 6 caratteri alfanumerici"}
          </p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {password && (
          <p style={{ color: isPasswordValid ? "green" : "red" }}>
            {isPasswordValid
              ? "Password valida"
              : "La password deve contenere almeno 8 caratteri, una lettera, un numero e un simbolo"}
          </p>
        )}

        <select ref={specRef} name="specs" id="specs">
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
          ref={experienceYearsRef}
        />

        <input
          type="textarea"
          name="comments"
          placeholder="Commenti"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />

        {comments.trim() && (
          <p style={{ color: isDescriptionValid ? "green" : "red" }}>
            {isDescriptionValid
              ? "Commento inserito correttamente"
              : "Il commento deve contenere tra i 100 e i 1000 caratteri"}
          </p>
        )}

        <button type="submit" onClick={handleSubmit}>
          Invia Form
        </button>
        <button onClick={resetForm}>Reset</button>
      </form>
    </>
  );
}

export default App;
