import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div onClick={() => setIsOpen(!isOpen)} className="card">
        <motion.div>
          <motion.h2>Framer Motion</motion.h2>
          {isOpen && (
            <motion.div>
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
