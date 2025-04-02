import { motion } from "framer-motion"

const MotionDiv = ({ children, classes, index = Math.floor(Math.random() * 3), initial = { opacity: 0, y: 20 }, animate = { opacity: 1, y: 0 } }) => {
  return (
    <motion.div
      key={index}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}

export default MotionDiv;