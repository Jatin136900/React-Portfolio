import { useEffect, useRef } from "react";

export default function SmokeyCursor() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        const mouse = { x: 0, y: 0 };

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            for (let i = 0; i < 4; i++) {
                particles.push({
                    x: mouse.x,
                    y: mouse.y,
                    size: Math.random() * 15 + 10,
                    alpha: 1,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: (Math.random() - 0.5) * 1.2
                });
            }
        });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.03;
                p.size *= 0.96;

                const gradient = ctx.createRadialGradient(
                    p.x, p.y, 0,
                    p.x, p.y, p.size
                );

                gradient.addColorStop(0, `rgba(156,184,255,${p.alpha})`);
                gradient.addColorStop(1, `rgba(110,138,255,0)`);

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.shadowBlur = 25;
                ctx.shadowColor = "rgba(156,184,255,0.8)";
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                if (p.alpha <= 0) particles.splice(i, 1);
            });

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 9999
            }}
        />
    );
}
