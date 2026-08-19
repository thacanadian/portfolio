export const metadata = { title: "Page not found — Noah Krynicki" };

export default function NotFound() {
  return (
    <main className="notFoundPage">
      <div className="notFoundGlow" />
      <section className="notFoundCard">
        <span className="no">404 / LOST IN THE BUILD</span>
        <h1>This route<br/><em>doesn’t exist.</em></h1>
        <p>The good news: the interesting stuff is still one click away.</p>
        <div className="buttons">
          <a className="button" href="/">Back home ↗</a>
          <a className="button alt" href="/projects">Explore projects ↗</a>
        </div>
      </section>
    </main>
  );
}
