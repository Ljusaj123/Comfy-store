function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>© <span className="text-primary">ComfyStore</span> {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  )
}

export default Footer