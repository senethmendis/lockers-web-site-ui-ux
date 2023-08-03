import styles, { layout } from "./style";
import {
  Hero,
  Everlend,
  Navbar,
  Token,
  Commiunity,
  Details,
  Liuq,
  Scurity,
  Backers,Footer
} from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth}`}>
          <Hero />
          <Commiunity />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Details />
          <Liuq />
          <Scurity />
          <Token />
          <Everlend />
          <Backers />
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
