import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <style>
        {`
          .omnia-navbar {
            width: 100%;
            height: 80px;
            padding: 0 7%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(7, 12, 28, 0.9);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
          }

          .omnia-logo {
            color: #ffffff;
            font-size: 27px;
            font-weight: 800;
            letter-spacing: 5px;
            text-decoration: none;
          }

          .omnia-logo span {
            color: #398bff;
          }

          .omnia-nav-links {
            display: flex;
            align-items: center;
            gap: 32px;
          }

          .omnia-nav-links a {
            color: #aab5cc;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .omnia-nav-links a:hover {
            color: #ffffff;
          }

          .omnia-nav-cta {
            padding: 11px 20px;
            border: 1px solid #398bff;
            border-radius: 6px;
            color: #ffffff !important;
            transition: background 0.2s ease !important;
          }

          .omnia-nav-cta:hover {
            background: #398bff;
          }

          @media (max-width: 650px) {
            .omnia-navbar {
              padding: 0 5%;
            }

            .omnia-nav-links {
              gap: 14px;
            }

            .omnia-nav-links a {
              font-size: 12px;
            }

            .omnia-nav-cta {
              display: none;
            }
          }
        `}
      </style>

      <nav className="omnia-navbar">
        <Link to="/" className="omnia-logo">
          OMNIA<span>.</span>
        </Link>

        <div className="omnia-nav-links">
          <Link to="/">Home</Link>
          <Link to="/world">The World</Link>
          <Link to="/about">About</Link>
          <Link to="/explore" className="omnia-nav-cta">
            Explore OMNIA ↗
          </Link>
        </div>
      </nav>
    </>
  )
}