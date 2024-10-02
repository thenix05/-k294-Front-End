import MyComponent from "../components/MyComponent";
import Button from "../components/Button";
import styles from "./index.module.css";
import Wordreverser from "../components/wordreverser";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function IndexPage() {
  return (
    <div>
      <Header></Header>
      <MyComponent></MyComponent>
      <Button text="Default" variant="default" />
      <Button text="Success" variant="success" />
      <Button text="Danger" variant="danger" />
      <Button text="Warning" variant="warning" />
      <Button text="Info" variant="info" />
      <Footer company="IMS-T GBSSG" currentYear={new Date().getFullYear()} />
      <br />
    </div>
  );
}
