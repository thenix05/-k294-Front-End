import MyComponent from "../components/MyComponent";
import Button from "../components/Button";
import styles from "./index.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import WordReverser from "../components/wordreverser"
import ShoppingList from "./shoppingList";
export default function IndexPage() {

  const people = ["Ruven", "David", "Yves"];
  const listItems = people.map(person => <li>{person}</li>)
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
      <Navigation items={[
        {href: "/", name: "Index"},
        {href: "/about", name: "About"}
      ]}></Navigation>
      <ul>{listItems}</ul>
      <WordReverser></WordReverser>
      <ShoppingList></ShoppingList>
      <br />
    </div>
  );
}
