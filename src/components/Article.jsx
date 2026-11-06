function Article({title, date="January 1, 1970", preview, minutes}) {
    const displayEmojis = (mins) => {
        if(mins < 30) {
            const count =Math.ceil(mins / 5);
            return "☕️".repeat(count);
        }
        else {
            const count= Math.ceil(mins / 10);
            return "🍱".repeat(count);
        }
    };
    return(

        <article>
            <h3>{title}</h3>
            <small>{date} . {displayEmojis(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>

    );
}
export default Article;