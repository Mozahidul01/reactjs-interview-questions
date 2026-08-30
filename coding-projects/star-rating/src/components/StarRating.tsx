import { useState } from "react";

interface StarRatingProps {
    maxRating?: number
}

export default function StarRating({maxRating=5}: StarRatingProps) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div>
            <div className="stars">
                {
                    Array.from({length: maxRating}, (_, index) => {
                        const star = index + 1;

                        return (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHover(star)}
                                onMouseLeave={() => setHover(0)}
                                className={ star <= (rating || hover) ? 'star active' : 'star'}
                                >{`\u2605`}</button>
                        )
                    })
                }
            </div>
            <p>
                {rating > 0 ? `You rated ${rating}/5` : "Select a rating"}
            </p>
        </div>
    )
}