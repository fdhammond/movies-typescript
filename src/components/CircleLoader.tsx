import React from "react";
import { motion, Variant } from "framer-motion";

const CircleLoader = () => {
    const containerStyle: React.CSSProperties = {
        position: "relative",
        width: "6rem",
        height: "6rem"
    };

    const circleStyle: React.CSSProperties = {
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
    };

    const spinTransition: Variant = {
        rotate: 360,
        transition: {
            loop: Infinity,
            ease: "linear",
            duration: 1
        }
    };

    return (
        <div style={containerStyle}>
            <motion.span style={circleStyle} animate={spinTransition} />
        </div>
    );
};

export default CircleLoader;
