import Image from "next/image";
import one from "./ASSETS/images/one.jpg";
       
import Link from "next/link";
import "./home.css";

export default function Home() {
    return (
        <main>
            <section className="hero">
                <nav className="navbar">
                    <h2 className="logo">Sephora</h2>

                    <div className="nav-links">
                        <Link href="/">Home</Link>
                        <Link href="/products">Products</Link>
                    </div>
                </nav>

                <div className="hero-layout">
                    <div className="hero-content">
                        <p className="subtitle">YOUR STYLE, YOUR STORY</p>

                        <h1>
                            Find things
                            <br />
                            you'll love.
                        </h1>

                        <p className="description">
                            Discover everyday essentials and
                            special finds, all in one place.
                        </p>

                        <Link href="/products" className="shop-btn">
                            Explore Products →
                        </Link>
                    </div>

                    {/* Hero image */}
                    <div className="hero-image">
                        <img
                            src={one.src}
                            alt="Shopora featured products"
                             
                        />
                    </div>
                </div>

                <div className="hero-bottom">
                    <span>Simple choices.</span>
                    <span>Better everyday.</span>
                </div>
            </section>

            <section className="categories">
                <p className="subtitle">EXPLORE OUR COLLECTION</p>
                <h2>Something for everyone.</h2>

                <div className="category-grid">
                    <Link href="/products" className="category-card">
                        <img src="/images/everyday.jpg" alt="Everyday finds" />
                        <span>01</span>
                        <h3>Everyday Finds</h3>
                        <p>Discover your new favourites.</p>
                    </Link>

                    <Link href="/products" className="category-card">
                        <img src="/images/popular.jpg" alt="Popular products" />
                        <span>02</span>
                        <h3>Popular Picks</h3>
                        <p>Explore products people love.</p>
                    </Link>

                    <Link href="/products" className="category-card">
                        <img src="/images/clothes.jpg" alt="Clothing collection" />
                        <span>03</span>
                        <h3>All Products</h3>
                        <p>Find something just for you.</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
