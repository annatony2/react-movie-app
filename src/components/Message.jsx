/**
 * Message
 * Generic full-width message block used for:
 * - the initial "intro" prompt before any search
 * - "no movies found" empty state
 * - API/error state
 *
 * `type` controls the styling variant: "intro" | "empty" | "error"
 */
function Message({ type = 'intro', title, description }) {
  return (
    <div className={`message-wrap ${type === 'error' ? 'error' : ''}`}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Message;