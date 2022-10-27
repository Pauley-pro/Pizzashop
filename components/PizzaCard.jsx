import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {      
  return (
    <div className={styles.container}>      
      <Link href={`/product/${pizza._id}`} passHref>        
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>  
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};  

export default PizzaCard;

/*
destructured content in line 5 is going into pizzaList.jsx
the Link leads to the single product page when the image is clicked using the specific ID 
The price was structured as {pizza.prices[0]} because it's an array otherwise, it'd have been like {pizza.prices}
*/