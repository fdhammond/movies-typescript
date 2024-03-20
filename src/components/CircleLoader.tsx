import { motion } from "framer-motion"

const CircleLoader = () => {
    const containerStyle = {
        position: "relative",
        width: "6rem",
        height: "6rem"
    }

    const circleStyle = {
        display: "block",
        width: "6rem",
        height: "6em",
        border: "0.3rem solid black",
        borderTop: "0.3rem solid white",
        borderRight: "0.3rem solid white",
        borderRadius: "50%",
        position: "absolute",
        boxSizing: "border-box",
        top: 0,
        left: 0
    }

    const spinTransition = {
        loop: Infinity,
        ease: "linear",
        duration: 1,
        repeat: Infinity
    }

    return (
        <div style={containerStyle}>
            <motion.span style={circleStyle} animate={{ rotate: 360 }} transition={spinTransition}/>
        </div>
    )
}

export default CircleLoader