import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (         
          <PizzaCard key={pizza._id} pizza={pizza} />   
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
// Line 14 is from pizzaCard, for display of product as <pizzaList /> as a component in index.js
// The word "key" as used in line 15 is because each pizza or product has a unique ID