import { ArrowRight, CheckCircle2, Target, Eye, Users, Rocket, Award, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <main>
            <div className="mesh-bg"></div>

            {/* Hero Section */}
            <section className="hero">
                <div className="grid-2">
                    <div data-aos="fade-up">
                        <span className="section-tag">Driven by Innovation</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '2rem', fontWeight: 900 }}>
                            Focused on Your <br />
                            <span className="gradient-text">Digital Growth.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
                            We help brands grow smarter, faster, and stronger through innovative digital marketing and scalable software solutions designed for today’s competitive digital landscape. At Fly Towards, we bridge the gap between creativity and technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <a href="#mission" className="btn btn-primary">Our Mission</a>
                            <a href="#vision" className="btn btn-outline">Our Vision</a>
                        </div>
                    </div>

                    <div className="hero-image-v2" data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="glass-container">
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                alt="Innovation Hub"
                                className="floating-img"
                            />
                            <div className="glow-aura"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Detail */}
            <section id="details" style={{ background: 'rgba(0, 242, 255, 0.01)' }}>
                <div className="grid-2">
                    <div data-aos="fade-right">
                        <span className="section-tag">Fly Towards Digital Innovation</span>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Empowering Your <br />Digital Journey</h2>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                            We provide innovative, scalable, and affordable digital solutions for businesses, and growing enterprises looking to succeed in the digital landscape.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                            Fly Towards is a results-driven company focused on helping businesses build a strong online presence and achieve consistent growth. Our team of skilled digital marketers, designers, and developers work in synergy to deliver exceptional results.
                        </p>

                        <div className="stats-grid-v2">
                            <div className="stat-item-v2">
                                <span className="stat-num">10+</span>
                                <span className="stat-label">Digital Services</span>
                            </div>
                            <div className="stat-item-v2" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '3rem' }}>
                                <span className="stat-num">100+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" style={{ transitionDelay: '0.2s' }}>
                        <div className="card" style={{ padding: '3rem' }}>
                            <h3 className="mb-4">Why Choose Us?</h3>
                            <ul style={{ listStyle: 'none' }}>
                                <li className="mb-4" style={{ display: 'flex', gap: '15px' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Result-Focused Approach</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>We prioritize measurable outcomes for every campaign.</p>
                                    </div>
                                </li>
                                <li className="mb-4" style={{ display: 'flex', gap: '15px' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Skilled Expert Team</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Certified professionals in both Marketing & IT.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <CheckCircle2 size={24} color="var(--primary)" />
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>24/7 Dedicated Support</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Always available to assist your business growth.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission">
                <div className="grid">
                    <div className="card text-center" data-aos="fade-up">
                        <div className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Target size={50} color="var(--secondary)" />
                        </div>
                        <h2 className="mb-4">Our Mission</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                            Our mission is to bridge creativity with technology, helping businesses boost visibility, sales, and performance in the digital world. We empower brands to reach their full potential through innovative strategy and commitment.
                        </p>
                    </div>

                    <div className="card text-center" data-aos="fade-up" style={{ transitionDelay: '0.1s' }} id="vision">
                        <div className="mb-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Eye size={50} color="var(--secondary)" />
                        </div>
                        <h2 className="mb-4">Our Vision</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                            To become a trusted global partner in technology and digital marketing, known for delivering high-impact solutions that transform businesses and define the future of digital innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section id="cta" className="text-center" data-aos="zoom-in">
                <div className="cta-content" style={{
                    background: '#fff',
                    padding: '6rem 3rem',
                    borderRadius: '40px',
                    border: '1px solid var(--border)',
                    boxShadow: 'var(--shadow)'
                }}>
                    <span className="section-tag">Let's Grow Together</span>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Ready to Scale Your <span className="gradient-text">Business?</span></h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>Join 100+ businesses that have flown towards success with our expert digital strategies.</p>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>
                        Get a Free Consultation <ArrowRight size={24} />
                    </a>
                </div>
            </section>
        </main>
    );
};

export default About;
