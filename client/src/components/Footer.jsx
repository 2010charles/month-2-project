import './footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Task © {year}
        </div>
    )
}

export default Footer