import "./App.css";

import React, { useState } from "react";

function App() {
  const initialValues = {
    username: "",
    mailAddress: "",
    password: "",
  };
  const [formValues, setformValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="formField">
          <label>ユーザー名</label>
          <input
            type="text"
            placeholder="ユーザー名"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <label>メールアドレス</label>
          <input type="text" placeholder="メールアドレス" name="mailAddress" />
        </div>
        <div className="formField">
          <label>パスワード</label>
          <input type="text" placeholder="パスワード" name="password" />
        </div>
        <button className="submitButton">ログイン</button>
      </form>
    </div>
  );
}

export default App;
