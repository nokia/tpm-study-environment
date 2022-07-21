import "../styles/globals.css";
import "../styles/custom.scss";
import { CookiesProvider, useCookies } from "react-cookie";
import { Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navigationBar";
import "survey-react/survey.css";

// import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  const [surveyCookies, setSurveyCookies] = useCookies(["selectedLibrary"]);

  var { NEXT_PUBLIC_ASSIGNED_LIB } = process.env;

  var selectedLib = !surveyCookies["selectedLibrary"]
    ? NEXT_PUBLIC_ASSIGNED_LIB
    : surveyCookies["selectedLibrary"];

  const [selectedLibrary, setSelectedLibrary] = useState(selectedLib);

  const availableLibraries = [
    "tpm2-tools v5.0",
    "tpm2-tss v3.0.1",
    "IBM TSS v1.5.0",
    "go-tpm v0.3.2",
    "wolfTPM v2.0.0",
  ];

  return (
    <CookiesProvider>
      <NavigationBar
        selectedLibrary={selectedLibrary}
        setSelectedLibrary={setSelectedLibrary}
        availableLibraries={availableLibraries}
      />
      <Component {...pageProps} selectedLibrary={selectedLibrary} />
    </CookiesProvider>
  );
}

export default MyApp;
