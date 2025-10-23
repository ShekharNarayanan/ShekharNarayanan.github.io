document.addEventListener("DOMContentLoaded", () => {
  // ------- Work Projects: arrow behavior -------
  document.querySelectorAll('.carousel:not(.no-arrows)').forEach(carousel => {
    const track = carousel.querySelector('.track');
    const left = carousel.querySelector('.arrow.left');
    const right = carousel.querySelector('.arrow.right');

    function atStart() {
      return track.scrollLeft <= 0;
    }
    function atEnd() {
      // account for tiny rounding differences
      return track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    }
    function canScroll() {
      return track.scrollWidth > track.clientWidth + 1;
    }
    function setBtnState(btn, disabled) {
      btn.disabled = disabled;
      btn.setAttribute('aria-disabled', String(disabled));
      btn.style.opacity = disabled ? '0.5' : '1';
      btn.style.pointerEvents = disabled ? 'none' : 'auto';
    }
    function updateArrows() {
      // Keep arrows visible; just enable/disable them
      const scrollable = canScroll();
      if (!scrollable) {
        setBtnState(left, true);
        setBtnState(right, true);
        return;
      }
      setBtnState(left, atStart());
      setBtnState(right, atEnd());
    }

    // Click handlers
    [left, right].forEach(btn => {
      btn.addEventListener('click', () => {
        const dir = btn.dataset.dir === 'right' ? 1 : -1;
        track.scrollBy({ left: dir * 340, behavior: 'smooth' });
      });
    });

    // Keyboard support
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') track.scrollBy({ left: 320, behavior: 'smooth' });
      if (e.key === 'ArrowLeft') track.scrollBy({ left: -320, behavior: 'smooth' });
    });

    // Natural mouse wheel (shift or vertical wheel scroll moves horizontally)
    track.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault(); // allow vertical wheel to scroll horizontally
        track.scrollBy({ left: e.deltaY, behavior: 'auto' });
      }
    }, { passive: false });

    // Update on scroll & resize
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows, { passive: true });

    // Initial state
    updateArrows();
  });

  // ------- Modal logic (unchanged) -------
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('#modal-title');
  const modalStack = modal.querySelector('.modal-stack');
  const modalDesc = modal.querySelector('.modal-desc');
  const modalLink = modal.querySelector('.modal-link');
  const closeEls = modal.querySelectorAll('[data-close]');
  let lastFocused;

  function openModal({ title, stack, desc, link }) {
    lastFocused = document.activeElement;
    modalTitle.textContent = title;
    modalStack.textContent = stack;
    modalDesc.textContent = desc;
    modalLink.href = link || '#';
    modal.hidden = false;
    modal.querySelector('.modal-card').focus?.({ preventScroll: true });
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    lastFocused?.focus?.();
  }

  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      openModal({
        title: card.dataset.title,
        stack: card.dataset.stack,
        desc: card.dataset.desc,
        link: card.dataset.link
      });
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  closeEls.forEach(el => el.addEventListener('click', closeModal));
  modal.addEventListener('click', (e) => {
    if (e.target.matches('.modal, .modal-backdrop')) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (!modal.hidden && e.key === 'Escape') closeModal();
  });
});
