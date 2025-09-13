import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollAnimation() {
  const elements = document.querySelectorAll('.fadeIn');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      } 
    });
  });


  if (elements) {
    elements.forEach((el)=> observer.observe(el));
  }

}


export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}