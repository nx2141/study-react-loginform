import "./App.css";

import React, { useState } from "react";

function App() {
  const initialValues = {
    // この部分は、初期のフォームの値を持つオブジェクトを設定しています。
    // すなわち、ユーザー名、メールアドレス、パスワードの各フィールドの初期値は空文字列("")です。
    username: "",
    mailAddress: "",
    password: "",
  };
  // ここで、ReactのuseStateフックを使用して、フォームの値を管理する状態変数formValuesと、
  // その状態を更新する関数setformValuesを作成しています。
  // 初期値としてinitialValuesがセットされています。
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    //分割代入
    const { name, value } = e.target;
    // この input 要素(e)は、name や value といった属性を持っています。したがって、
    // e.target.name はその input 要素の name 属性の値を指し、e.target.value は input 要素の現在の値を指します。
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //ログイン情報を送信する
    //バリデーションチェックをする
    setformErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.username) {
      errors.username = "ユーザー名を入力してください";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }
    return errors;
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
        <p className="errorMsg">{formErrors.username}</p>
        <div className="formField">
          <label>メールアドレス</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="メールアドレス"
            name="mailAddress"
          />
        </div>
        <p className="errorMsg">{formErrors.mailAddress}</p>
        <div className="formField">
          <label>パスワード</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="パスワード"
            name="password"
          />
        </div>
        <p className="errorMsg">{formErrors.password}</p>
        <button onClick={handleSubmit} className="submitButton">
          ログイン
        </button>
        {Object.keys(formErrors).length === 0 && isSubmit && (
          <div className="msgOk">ログイン成功です</div>
        )}
      </form>
    </div>
  );
}

export default App;
