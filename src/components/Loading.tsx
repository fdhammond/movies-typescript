import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Loading = () => {
    const [isLoading, setIsLoading] = useState(true);

    // useEffect to change isLoading state after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Adjust the delay time as needed

        return () => clearTimeout(timer); // Clear the timer on component unmount
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50"
            style={{ visibility: isLoading ? "visible" : "hidden" }}
        >
            <div className="bg-white h-20 w-20 animate-spin rounded-full" />
        </motion.div>
    );
}

export default Loading;
