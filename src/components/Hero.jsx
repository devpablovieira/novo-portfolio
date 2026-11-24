import profilePic from "../assets/foto.jpg"

export function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-16 max-w-6xl mx-auto">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-xl md:text-2xl text-accent font-semibold mb-2">
                Olá, eu sou
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-content mb-4">
                Pablo Vieira
                </h1>
                <h3 className="text-2xl md:text-3xl text-muted mb-6">
                Desenvolvedor de Software 
                </h3>
                <p className="text-base md:text-lg text-muted mb-8 max-w-lg text-justify md:text-start ">
                Sou graduando em Ciência da Computação e em Ciências Exatas pela Universidade Federal de Juiz de Fora (UFJF) e Técnico em Desenvolvimento de Sistemas pelo SENAI. Com experiência em projetos acadêmicos e pessoais, busco constantemente aprimorar minhas habilidades e contribuir para soluções escaláveis e eficientes.
                </p>

                {/* Botões de Ação (CTA) */}
                {/* <div className="flex gap-4">
                <a href="#projetos" className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Ver Projetos
                </a>
                <a href="seu-link-do-linkedin" target="_blank" className="px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all">
                    Contato
                </a>
                </div> */}
            </div>
            <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent overflow-hidden shadow-lg">
                <div className="w-full h-full bg-surface flex items-center justify-center text-muted">
                    <img src={profilePic} alt="Pablo Vieira" className="w-full h-full object-cover" />
                </div>
                </div>
            </div>
        </section>
    )
}