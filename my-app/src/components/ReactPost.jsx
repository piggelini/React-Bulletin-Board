import PostLiked from "./PostLiked";
import { useState } from "react";

export default function ReactPost(props) {
    const [liked, setLiked] = useState(false);
    const { question, answer } = props;
    return (
        <article>
            <p>{question}</p>
            <p>{answer}</p>
            {!liked && <button className="like-button" onClick={() => setLiked(true)}>Like</button>}
            {liked && <PostLiked />}
        </article>
    )

}