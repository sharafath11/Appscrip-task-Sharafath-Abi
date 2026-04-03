export function Newsletter() {
  return (
    <form className="newsletter" id="sign-in">
      <label className="sr-only" htmlFor="newsletter-email">
        Enter your email
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="Enter your e-mail..."
        aria-label="Email address"
      />
      <button type="submit">SUBSCRIBE</button>
    </form>
  );
}
