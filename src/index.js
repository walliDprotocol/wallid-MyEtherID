  import React from "react";
  import ReactDOM from "react-dom";
  import Main from "./Main";
  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import './index.css';
  import ImportForm from './components/ImportForm';

  ReactDOM.render(
    <Main/>,
    document.getElementById("root")
  );

  ReactDOM.render(
    <ImportForm />,
    document.getElementById('import-form-react-component')
  );
