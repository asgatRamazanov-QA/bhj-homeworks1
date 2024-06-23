const tooltips = document.querySelectorAll('.has-tooltip');
tooltips.forEach(tooltip => {
    const tooltipText = tooltip.getAttribute('title').trim();
    tooltip.addEventListener('click', (e) => {
        e.preventDefault();
        const tooltipElement = document.querySelector('.tooltip');
        tooltipElement.textContent = tooltipText;
        tooltipElement.style.top = `${tooltip.getBoundingClientRect().bottom}px`;
        tooltipElement.style.left = `${tooltip.getBoundingClientRect().left}px`;
        tooltipElement.classList.add('tooltip_active');
        document.body.appendChild(tooltipElement);
    });
});