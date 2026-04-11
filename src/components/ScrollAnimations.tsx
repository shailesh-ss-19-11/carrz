"use client";

import { useEffect, useRef } from "react";

export default function ScrollAnimations() {
    const initialized = useRef(false);

    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const style = document.createElement("style");
        style.textContent = `
            .scroll-animate {
                opacity: 0;
                transform: translateY(40px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .scroll-animate.scroll-visible {
                opacity: 1;
                transform: translateY(0);
            }
            .scroll-animate-left {
                opacity: 0;
                transform: translateX(-40px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .scroll-animate-left.scroll-visible {
                opacity: 1;
                transform: translateX(0);
            }
            .scroll-animate-right {
                opacity: 0;
                transform: translateX(40px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .scroll-animate-right.scroll-visible {
                opacity: 1;
                transform: translateX(0);
            }
            .scroll-animate-scale {
                opacity: 0;
                transform: scale(0.9);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .scroll-animate-scale.scroll-visible {
                opacity: 1;
                transform: scale(1);
            }
        `;
        document.head.appendChild(style);

        const addAnimationClasses = () => {
            // Animate all section headings
            document.querySelectorAll("h1, h2").forEach((el) => {
                if (!el.classList.contains("scroll-animate")) {
                    el.classList.add("scroll-animate");
                }
            });

            // Animate all cards and grid items
            document.querySelectorAll(
                "[class*='grid'] > a, [class*='grid'] > div, [class*='flex'] > [class*='snap-center']"
            ).forEach((el, i) => {
                if (!el.classList.contains("scroll-animate") && !el.classList.contains("scroll-animate-scale")) {
                    el.classList.add("scroll-animate-scale");
                    (el as HTMLElement).style.transitionDelay = `${(i % 6) * 80}ms`;
                }
            });

            // Animate images in sections
            document.querySelectorAll("section img, [class*='rounded'] > img").forEach((el) => {
                const parent = el.parentElement;
                if (parent && !parent.classList.contains("scroll-animate") && !parent.classList.contains("scroll-animate-scale")) {
                    parent.classList.add("scroll-animate");
                }
            });

            // Animate paragraphs under headings
            document.querySelectorAll("h1 + p, h2 + p, [class*='text-muted'][class*='max-w']").forEach((el) => {
                if (!el.classList.contains("scroll-animate")) {
                    el.classList.add("scroll-animate");
                }
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("scroll-visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        // Initial pass
        setTimeout(() => {
            addAnimationClasses();
            document.querySelectorAll(
                ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
            ).forEach((el) => observer.observe(el));
        }, 500);

        // Watch for new elements (route changes)
        const mutationObserver = new MutationObserver(() => {
            addAnimationClasses();
            document.querySelectorAll(
                ".scroll-animate:not(.scroll-visible), .scroll-animate-left:not(.scroll-visible), .scroll-animate-right:not(.scroll-visible), .scroll-animate-scale:not(.scroll-visible)"
            ).forEach((el) => observer.observe(el));
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    return null;
}
