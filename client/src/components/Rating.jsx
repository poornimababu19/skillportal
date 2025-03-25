import { useState } from "react";

function Rating({ onRate }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-xl ${star <= rating ? "text-yellow-500" : "text-gray-400"}`}
          onClick={() => {
            setRating(star);
            onRate(star);
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;