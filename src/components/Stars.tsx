import { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";

const Stars = ({ rating }: { rating: number }) => {
    const roundedRating = Math.round(rating);
    const [stars, setStars] = useState<number>(roundedRating);

    const amountStars = Array(10).fill(0).map((_, index) => index + 1);

    return (
        <div className="flex">
            {amountStars.map((_, index) => (
                <div className="flex" key={index}>
                    <IoMdStarOutline
                        className={`text-md ${index < stars ? 'text-yellow-500' : 'text-black'}`}
                    />
                </div>
            ))}
        </div>
    );
}

export default Stars;
