import { useEffect } from 'react';

// Stops the page behind a modal from scrolling while the modal is open.
export default function useLockBodyScroll() {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);
}
