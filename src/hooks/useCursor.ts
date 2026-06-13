import { useEffect } from "react";

export function useCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor-glow";
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = `${cursorX - 10}px`;
      cursor.style.top = `${cursorY - 10}px`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animate();

    // Grow on interactive elements
    const interactives = document.querySelectorAll("a, button, .hover-lift");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(3)";
        cursor.style.background = "hsla(43, 84%, 47%, 0.5)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "hsla(43, 84%, 47%, 0.3)";
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.body.removeChild(cursor);
    };
  }, []);
}
