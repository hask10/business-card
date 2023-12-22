export default function Section(prop) {
    return (
        <div className="section">
            <h3>{prop.title}</h3>
            <p>{prop.content}</p>
        </div>
    )
}