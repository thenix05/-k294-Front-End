import MyComponent from "../components/MyComponent";
import Button from "../components/Button";
import styles from "./index.module.css";
export default function IndexPage() {
  return (
    <div>
      <MyComponent></MyComponent>
      <Button text="Default" variant="default" />
      <Button text="Success" variant="success" />
      <Button text="Danger" variant="danger" />
      <Button text="Warning" variant="warning" />
      <Button text="Info" variant="info" />
    </div>
  );
}
