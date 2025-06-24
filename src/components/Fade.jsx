// AdvancedFade.jsx - For animating children individually
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AdvancedFade = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  staggerChildren = false,
  staggerDelay = 0.2 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: '-30px 0px',
  });

  const directions = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    scale: { x: 0, y: 0, scale: 0.8 }
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "beforeChildren",
        staggerChildren: staggerChildren ? staggerDelay : 0,
      }
    }
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ willChange: 'transform, opacity' }}
    >
      {staggerChildren 
        ? React.Children.map(children, (child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : children
      }
    </motion.div>
  );
};

export default AdvancedFade;