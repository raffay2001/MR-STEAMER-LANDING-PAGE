// SupportPage.jsx
import React, { useEffect, useState } from "react";

const BASE_URL = "https://api.mistersteamer.com/v1";
const supportEmail = "info@mistersteamer.com";
const appName = "Mister Streamer";

function SupportPage() {
    const [isMobile, setIsMobile] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        query: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" }); // "success" | "error" | ""

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 640);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onChange = (key) => (e) => {
        setStatus({ type: "", message: "" });
        setForm((p) => ({ ...p, [key]: e.target.value }));
    };

    const validate = () => {
        const name = form.name.trim();
        const phone = form.phone.trim();
        const email = form.email.trim();
        const query = form.query.trim();

        if (!name) return "Please enter your name.";
        if (!phone) return "Please enter your phone number.";
        if (!email) return "Please enter your email.";
        if (!/^\S+@\S+\.\S+$/.test(email)) return "Please enter a valid email address.";
        if (!query) return "Please enter your message/query.";
        return "";
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const err = validate();
        if (err) {
            setStatus({ type: "error", message: err });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const res = await fetch(`${BASE_URL}/contact-us/public`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name.trim(),
                    phone: form.phone.trim(),
                    email: form.email.trim(),
                    query: form.query.trim(),
                }),
            });

            if (!res.ok) {
                let msg = "Failed to submit. Please try again.";
                try {
                    const data = await res.json();
                    msg = data?.message || data?.error || msg;
                } catch { }
                throw new Error(msg);
            }

            setStatus({
                type: "success",
                message: "Your message has been sent. Our team will contact you soon.",
            });

            setForm({ name: "", phone: "", email: "", query: "" });
        } catch (error) {
            setStatus({
                type: "error",
                message: error?.message || "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        page: {
            backgroundColor: "#000",
            color: "#fff",
            padding: isMobile ? "1.25rem" : "2rem",
            minHeight: "100vh",
        },
        container: {
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.8,
        },
        title: {
            fontSize: isMobile ? "1.6rem" : "2rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            textAlign: "center",
        },
        subtitle: {
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#cfcfcf",
            fontSize: isMobile ? "0.95rem" : "1rem",
        },
        link: { color: "#1e90ff" },
        card: {
            border: "1px solid #1f1f1f",
            borderRadius: "14px",
            padding: isMobile ? "1rem" : "1.25rem",
        },
        label: {
            fontWeight: 600,
            marginBottom: "0.5rem",
            display: "block",
            color: "#eaeaea",
            fontSize: isMobile ? "0.95rem" : "1rem",
        },
        input: {
            width: "100%",
            padding: "0.85rem 1rem",
            borderRadius: "10px",
            border: "1px solid #2a2a2a",
            backgroundColor: "#0b0b0b",
            color: "#fff",
            outline: "none",
            boxSizing: "border-box",
            fontSize: "1rem",
        },
        textarea: {
            width: "100%",
            padding: "0.85rem 1rem",
            borderRadius: "10px",
            border: "1px solid #2a2a2a",
            backgroundColor: "#0b0b0b",
            color: "#fff",
            outline: "none",
            boxSizing: "border-box",
            fontSize: "1rem",
            resize: "vertical",
        },
        row: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1rem",
        },
        fieldTop: { marginTop: "1rem" },
        alert: (type) => ({
            marginTop: "1rem",
            padding: "0.85rem 1rem",
            borderRadius: "12px",
            border: `1px solid ${type === "success" ? "#1f4d2b" : "#5a1f1f"}`,
            background: type === "success" ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)",
            color: type === "success" ? "#86efac" : "#fca5a5",
            fontWeight: 600,
            wordBreak: "break-word",
        }),
        btn: {
            marginTop: "1.25rem",
            width: "100%",
            padding: "0.95rem 1rem",
            borderRadius: "12px",
            border: "1px solid #2a2a2a",
            backgroundColor: loading ? "#111" : "#fff",
            color: loading ? "#8a8a8a" : "#000",
            fontWeight: 800,
            cursor: loading ? "not-allowed" : "pointer",
            boxSizing: "border-box",
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.title}>{appName} - Support</h2>

                <p style={styles.subtitle}>
                    Need help? Send us a message below or email{" "}
                    <a href={`mailto:${supportEmail}`} style={styles.link}>
                        {supportEmail}
                    </a>
                    .
                </p>

                <div style={styles.card}>
                    <form onSubmit={onSubmit}>
                        <div style={styles.row}>
                            <div>
                                <label style={styles.label}>Name</label>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={onChange("name")}
                                    placeholder="John Doe"
                                    style={styles.input}
                                    autoComplete="name"
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label style={styles.label}>Phone</label>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={onChange("phone")}
                                    placeholder="+9665412254178"
                                    style={styles.input}
                                    autoComplete="tel"
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div style={styles.fieldTop}>
                            <label style={styles.label}>Email</label>
                            <input
                                type="email"
                                value={form.email}
                                onChange={onChange("email")}
                                placeholder="john@gmail.com"
                                style={styles.input}
                                autoComplete="email"
                                disabled={loading}
                            />
                        </div>

                        <div style={styles.fieldTop}>
                            <label style={styles.label}>Message / Query</label>
                            <textarea
                                value={form.query}
                                onChange={onChange("query")}
                                placeholder="Write your message..."
                                rows={6}
                                style={styles.textarea}
                                disabled={loading}
                            />
                        </div>

                        {status.message ? <div style={styles.alert(status.type)}>{status.message}</div> : null}

                        <button type="submit" disabled={loading} style={styles.btn}>
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SupportPage;
