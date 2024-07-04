import { string } from "yup";

const firstname = string()
  .required("Vorname ist erforderlich")
  .min(2, "Der Vorname muss mindestens 2 Zeichen lang sein")
  .max(50, "Der Vorname darf maximal 50 Zeichen lang sein");
const lastname = string()
  .required("Nachname ist erforderlich")
  .min(2, "Der Nachname muss mindestens 2 Zeichen lang sein")
  .max(50, "Der Nachname darf maximal 50 Zeichen lang sein");
const email = string()
  .required("E-Mail ist erforderlich")
  .email("E-Mail ist ungültig");
const password = string()
  .required("Passwort ist erforderlich")
  .min(8, "Das Passwort muss mindestens 8 Zeichen lang sein")
  .matches(
    /[a-z]/,
    "Das Passwort muss mindestens einen Kleinbuchstaben enthalten",
  )
  .matches(
    /[A-Z]/,
    "Das Passwort muss mindestens einen Großbuchstaben enthalten",
  )
  .matches(/\d/, "Das Passwort muss mindestens eine Ziffer enthalten")
  .matches(
    /[=+\[\]()<>?!@#$%^&*.,:;]/,
    "Das Passwort muss mindestens ein Sonderzeichen enthalten: =+[]()<>?!@#$%^&*.,:;",
  )
  .matches(
    /^[a-zA-Z0-9=+\[\]()<>?!@#$%^&*.,:;]*$/,
    "Das Passwort darf nur die folgende Sonderzeichen enthalten: =+[]()<>?!@#$%^&*.,:;",
  );

export { firstname, lastname, email, password };
