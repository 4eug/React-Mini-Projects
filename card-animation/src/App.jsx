import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.div>
          <motion.h2 layout="position">Card Animation</motion.h2>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="expand"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, culpa. Ea recusandae ducimus nesciunt est eum, odio
                beatae eligendi ullam consectetur eveniet cupiditate saepe
                pariatur alias nobis non cum illum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                quod.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
