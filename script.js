// Adicionar interatividade ao scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('border-b', 'border-[#222]');
    } else {
        nav.classList.remove('border-b', 'border-[#222]');
    }
});

// Exemplo de como você pode injetar seus projetos dinamicamente
const projetos = [
    { titulo: "NAU Fest", desc: "Exposição de Robótica" },
    { titulo: "Circuitos com Massinha", desc: "Educação Maker" }
];

// Efeito de entrada suave nas seções ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});