document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            "nav-inicio": "Inicio",
            "nav-sobre-mi": "Sobre Mí",
            "nav-el-metodo": "El Método",
            "nav-comunidades": "Comunidades",
            "nav-youtube": "YouTube",
            "nav-precios": "Precios",
            "nav-ebooks": "Ebooks",
            "nav-faq": "FAQ",
            "nav-contacto": "Contacto",
            "hero-title": "Deja de estudiar. Empieza a hablar.",
            "hero-subtitle": "¿Por qué aprender con libros aburridos si puedes aprender con lo que te apasiona? Mi método de enseñanza se basa en <strong class='highlight-text'>tus</strong> intereses, no en un currículo rígido.",
            "hero-cta": "Agenda tu clase de prueba",
            "video-title": "Descubre mi método en este video",
            "keys-intro": "¿Te imaginas que la clave para hablar con fluidez no fuera memorizar, sino",
            "keys-highlight": "tener una conversación real?",
            "about-title": "Un enfoque diferente, un resultado real.",
            "about-intro": "Hola, soy <strong class='text-indigo-600'>Jonathan</strong>, profesor de idiomas con un enfoque único.",
            "about-text-1": "Tras años de enseñanza, me di cuenta de que el método tradicional no funcionaba para todos. Vi a muchos alumnos perder la motivación con libros que no les hablaban, y entendí que la verdadera fluidez no viene de la gramática, sino del <strong class='text-indigo-600'>interés</strong>.",
            "about-text-2": "Mi misión es simple: ayudarte a comunicarte de forma auténtica sobre lo que te mueve. Por eso, mis clases son un espacio donde tus pasiones, tus proyectos y tus sueños son el centro de todo.",
            "about-text-3": "Mis especializaciones incluyen la neurociencia del aprendizaje y la lingüística, lo que me permite diseñar planes de estudio no solo efectivos, sino científicamente respaldados para que logres tus objetivos de manera más eficiente.",
            "method-title": "Mi Método: Conversación con propósito",
            "method-subtitle": "El centro de mis clases eres <strong class='underline'>tú</strong>. En lugar de seguir un libro, nos sumergimos por completo en los temas que te motivan.",
            "method-1-title": "Tú eliges el terreno",
            "method-1-text": "Tu hobby, tu profesión, tu película favorita... <strong class='font-bold'>Tú</strong> me das tu fuente de interés, y yo me encargo del resto.",
            "method-2-title": "Aprendizaje útil",
            "method-2-text": "La meta es que cada palabra y frase que aprendamos tenga una aplicación inmediata. ¿Necesitas preparar una presentación? Haremos exactamente eso.",
            "method-3-title": "Motivación en cada clase",
            "method-3-text": "No hay nada más efectivo que aprender algo que realmente te interesa. La fluidez llega de forma natural cuando disfrutas el proceso.",
            "testimonials-title": "Lo que mis alumnos dicen",
            "testimonial-1-text": "\"Por fin un método que me hace querer seguir aprendiendo. Cada clase es como una charla con un amigo, pero en otro idioma. ¡Totalmente recomendable!\"",
            "testimonial-1-author": "- Carlos R.",
            "testimonial-2-text": "\"Necesitaba hablar de mi trabajo en reuniones y este método me dio exactamente el vocabulario y la confianza para hacerlo. ¡Increíble!\"",
            "testimonial-2-author": "- Ana G.",
            "testimonial-3-text": "\"Mi pasión es el cine, y en mis clases, hablamos de mis películas favoritas. Es increíble cómo mi vocabulario creció sin sentir que estaba 'estudiando'.\"",
            "testimonial-3-author": "- Juan P.",
            "communities-title": "Únete a mis comunidades en WhatsApp",
            "community-1-title": "Nivel A1 - B1",
            "community-1-text": "Para principiantes e intermedios. Practica y comparte tus avances.",
            "community-2-title": "Nivel B1 - C1",
            "community-2-text": "Para estudiantes avanzados. Conversaciones profundas y fluidez.",
            "youtube-title": "Refuerza tu aprendizaje con mis videos en YouTube.",
            "youtube-subtitle": "Explora temas de neurociencia, lingüística e investigaciones que te ayudarán a entender cómo aprende tu cerebro.",
            "youtube-cta": "Ir a mi canal de YouTube",
            "pricing-title": "Invierte en una conversación que realmente te sirva.",
            "price-1-title": "Clase individual",
            "price-1-text": "Ideal para probar el método, resolver dudas o enfocarse en un tema concreto.",
            "price-1-feature-1": "Plan de estudio personalizado.",
            "price-1-feature-2": "1 hora de conversación enfocada.",
            "price-2-title": "Paquete de 5 clases",
            "price-2-text": "Perfecto para un progreso constante y comprometido con tu aprendizaje.",
            "price-2-feature-1": "Plan de estudio personalizado.",
            "price-2-feature-2": "Seguimiento de progreso.",
            "price-3-title": "Paquete de 8 clases",
            "price-3-text": "La mejor opción para un progreso notable, consistente y duradero.",
            "price-3-feature-1": "Todo lo anterior incluido.",
            "price-3-feature-2": "Recursos y materiales exclusivos.",
            "popular-tag": "¡La más popular!",
            "cta-choose-plan": "Elegir plan",
            "ebooks-title": "Mis Ebooks para descargar",
            "ebook-1-title": "El mito del aprendizaje de idiomas",
            "ebook-1-text": "Descubre por qué los métodos tradicionales no funcionan y cómo puedes lograr una fluidez auténtica.",
            "ebook-2-title": "Todo lo que no sabías de español y portugués",
            "ebook-2-text": "Una guía completa para estudiantes bilingües. Descubre las conexiones y diferencias entre ambos idiomas.",
            "cta-download": "Descargar Ebook",
            "modal-title": "¡Casi es tuyo!",
            "modal-subtitle": "Ingresa tu correo para descargar el ebook gratuito.",
            "modal-submit": "Descargar ahora",
            "faq-title": "Preguntas Frecuentes",
            "faq-1-q": "¿Funciona para principiantes absolutos?",
            "faq-1-a": "Sí, mi método es ideal para principiantes. Empezamos con los temas que ya te interesan, lo que hace que el aprendizaje sea más natural y menos intimidante desde el primer día.",
            "faq-2-q": "¿Qué tan rápido veré resultados?",
            "faq-2-a": "La velocidad del progreso depende de tu dedicación, pero la mayoría de mis alumnos notan una mejora significativa en su confianza y capacidad de conversación en pocas semanas, gracias a la relevancia de los temas.",
            "faq-3-q": "¿Las clases son individuales o en grupo?",
            "faq-3-a": "Ofrezco clases individuales para garantizar un enfoque 100% personalizado. Esto nos permite sumergirnos por completo en tus intereses y avanzar a tu propio ritmo.",
            "contact-title": "Hablemos de lo que te interesa.",
            "contact-subtitle": "¿Listo para una clase que realmente te sirva? Agenda tu sesión de prueba, mándame un mensaje o contacta por WhatsApp.",
            "contact-schedule-cta": "Agendar una sesión de prueba",
            "contact-whatsapp-cta": "Contactar por WhatsApp",
            "or-separator": "o",
            "contact-name-placeholder": "Tu nombre completo",
            "contact-email-placeholder": "Tu correo electrónico",
            "contact-message-placeholder": "¿Qué idioma quieres aprender y cuáles son tus intereses?",
            "contact-submit-cta": "Enviar mensaje",
            "footer-copyright": "&copy; 2025 Jonathan. Todos los derechos reservados.",
            "footer-tagline": "Diseñado y creado para ayudarte a hablar."
        },
        en: {
            "nav-inicio": "Home",
            "nav-sobre-mi": "About Me",
            "nav-el-metodo": "The Method",
            "nav-comunidades": "Communities",
            "nav-youtube": "YouTube",
            "nav-precios": "Pricing",
            "nav-ebooks": "Ebooks",
            "nav-faq": "FAQ",
            "nav-contacto": "Contact",
            "hero-title": "Stop Studying. Start Speaking.",
            "hero-subtitle": "Why learn with boring textbooks when you can learn with what you're passionate about? My teaching method is based on <strong class='highlight-text'>your</strong> interests, not a rigid curriculum.",
            "hero-cta": "Book a Trial Class",
            "video-title": "Discover my method in this video",
            "keys-intro": "Can you imagine that the key to fluency isn't memorizing, but",
            "keys-highlight": "having a real conversation?",
            "about-title": "A Different Approach, Real Results.",
            "about-intro": "Hello, I'm <strong class='text-indigo-600'>Jonathan</strong>, a language teacher with a unique approach.",
            "about-text-1": "After years of teaching, I realized the traditional method didn't work for everyone. I saw many students lose motivation with textbooks that didn't connect with their lives, and I understood that true fluency doesn't come from grammar, but from <strong class='text-indigo-600'>interest</strong>.",
            "about-text-2": "My mission is simple: to help you communicate authentically about what moves you. That's why my classes are a space where your passions, your projects, and your dreams are at the center of everything.",
            "about-text-3": "My specializations include the neuroscience of learning and linguistics, allowing me to design study plans that are not only effective but scientifically backed to help you achieve your goals more efficiently.",
            "method-title": "My Method: Conversation with Purpose",
            "method-subtitle": "The focus of my classes is <strong class='underline'>you</strong>. Instead of following a book, we fully immerse ourselves in topics that motivate you.",
            "method-1-title": "You Choose the Topic",
            "method-1-text": "Your hobby, your profession, your favorite movie... <strong class='font-bold'>You</strong> provide the source of your interest, and I'll handle the rest.",
            "method-2-title": "Useful Learning",
            "method-2-text": "The goal is for every word and phrase we learn to have immediate application. Do you need to prepare a presentation? We'll do exactly that.",
            "method-3-title": "Motivation in Every Class",
            "method-3-text": "There's nothing more effective than learning about something that truly interests you. Fluency comes naturally when you enjoy the process.",
            "testimonials-title": "What my students say",
            "testimonial-1-text": "\"Finally, a method that makes me want to keep learning. Every class is like a chat with a friend, but in another language. Highly recommended!\"",
            "testimonial-1-author": "- Carlos R.",
            "testimonial-2-text": "\"I needed to talk about my job in meetings, and this method gave me exactly the vocabulary and confidence to do so. Incredible!\"",
            "testimonial-2-author": "- Ana G.",
            "testimonial-3-text": "\"My passion is film, and in my classes, we talk about my favorite movies. It's amazing how my vocabulary grew without feeling like I was 'studying'.\"",
            "testimonial-3-author": "- Juan P.",
            "communities-title": "Join my WhatsApp communities",
            "community-1-title": "Level A1 - B1",
            "community-1-text": "For beginners and intermediates. Practice and share your progress.",
            "community-2-title": "Level B1 - C1",
            "community-2-text": "For advanced students. Deep conversations and fluency.",
            "youtube-title": "Enhance your learning with my YouTube videos.",
            "youtube-subtitle": "Explore topics on neuroscience, linguistics, and research that will help you understand how your brain learns.",
            "youtube-cta": "Go to my YouTube channel",
            "pricing-title": "Invest in a conversation that truly serves you.",
            "price-1-title": "Individual Class",
            "price-1-text": "Ideal for trying out the method, clarifying doubts, or focusing on a specific topic.",
            "price-1-feature-1": "Personalized study plan.",
            "price-1-feature-2": "1 hour of focused conversation.",
            "price-2-title": "5-Class Package",
            "price-2-text": "Perfect for consistent progress and a committed approach to your learning.",
            "price-2-feature-1": "Personalized study plan.",
            "price-2-feature-2": "Progress tracking.",
            "price-3-title": "8-Class Package",
            "price-3-text": "The best option for remarkable, consistent, and lasting progress.",
            "price-3-feature-1": "All of the above included.",
            "price-3-feature-2": "Exclusive resources and extra materials.",
            "popular-tag": "Most popular!",
            "cta-choose-plan": "Choose plan",
            "ebooks-title": "My Ebooks for download",
            "ebook-1-title": "The Myth of Language Learning",
            "ebook-1-text": "Discover why traditional methods don't work and how you can achieve authentic fluency.",
            "ebook-2-title": "All you didn't know about Spanish and Portuguese",
            "ebook-2-text": "A comprehensive guide for bilingual students. Discover the connections and differences between both languages.",
            "cta-download": "Download Ebook",
            "modal-title": "It's almost yours!",
            "modal-subtitle": "Enter your email to download the free ebook.",
            "modal-submit": "Download now",
            "email-placeholder": "Your email address",
            "faq-title": "Frequently Asked Questions",
            "faq-1-q": "Does it work for absolute beginners?",
            "faq-1-a": "Yes, my method is ideal for beginners. We start with the topics you already care about, which makes learning more natural and less intimidating from day one.",
            "faq-2-q": "How fast will I see results?",
            "faq-2-a": "The speed of progress depends on your dedication, but most of my students notice a significant improvement in their confidence and conversation skills within a few weeks, thanks to the relevance of the topics.",
            "faq-3-q": "Are classes individual or in a group?",
            "faq-3-a": "I offer individual classes to ensure a 100% personalized approach. This allows us to fully immerse ourselves in your interests and progress at your own pace.",
            "contact-title": "Let's talk about what interests you.",
            "contact-subtitle": "Ready for a class that truly serves you? Book your trial session, send me a message, or contact me on WhatsApp.",
            "contact-schedule-cta": "Schedule a trial session",
            "contact-whatsapp-cta": "Contact on WhatsApp",
            "or-separator": "or",
            "contact-name-placeholder": "Your full name",
            "contact-email-placeholder": "Your email address",
            "contact-message-placeholder": "Which language do you want to learn and what are your interests?",
            "contact-submit-cta": "Send message",
            "footer-copyright": "&copy; 2025 Jonathan. All rights reserved.",
            "footer-tagline": "Designed and created to help you speak."
        },
        fr: {
            "nav-inicio": "Accueil",
            "nav-sobre-mi": "À propos de moi",
            "nav-el-metodo": "La Méthode",
            "nav-comunidades": "Communautés",
            "nav-youtube": "YouTube",
            "nav-precios": "Prix",
            "nav-ebooks": "Ebooks",
            "nav-faq": "FAQ",
            "nav-contacto": "Contact",
            "hero-title": "Arrêtez d'étudier. Commencez à parler.",
            "hero-subtitle": "Pourquoi apprendre avec des manuels ennuyeux quand vous pouvez apprendre avec ce qui vous passionne ? Ma méthode d'enseignement est basée sur <strong class='highlight-text'>vos</strong> intérêts, pas sur un programme rigide.",
            "hero-cta": "Réserver un cours d'essai",
            "video-title": "Découvrez ma méthode en vidéo",
            "keys-intro": "Imaginez que la clé de la fluidité ne soit pas la mémorisation, mais",
            "keys-highlight": "avoir une vraie conversation ?",
            "about-title": "Une approche différente, des résultats réels.",
            "about-intro": "Bonjour, je suis <strong class='text-indigo-600'>Jonathan</strong>, professeur de langues avec une approche unique.",
            "about-text-1": "Après des années d'enseignement, j'ai réalisé que la méthode traditionnelle ne fonctionnait pas pour tout le monde. J'ai vu de nombreux étudiants perdre leur motivation avec des manuels qui ne se connectaient pas à leur vie, et j'ai compris que la vraie fluidité ne vient pas de la grammaire, mais de l'<strong class='text-indigo-600'>intérêt</strong>.",
            "about-text-2": "Ma mission est simple : vous aider à communiquer de manière authentique sur ce qui vous passionne. C'est pourquoi mes cours sont un espace où vos passions, vos projets et vos rêves sont au centre de tout.",
            "about-text-3": "Mes spécialisations incluent la neuroscience de l'apprentissage et la linguistique, ce qui me permet de concevoir des plans d'étude non seulement efficaces, mais scientifiquement étayés pour vous aider à atteindre vos objectifs plus efficacement.",
            "method-title": "Ma Méthode: Conversation avec un but",
            "method-subtitle": "Le centre de mes cours, c'est <strong class='underline'>vous</strong>. Au lieu de suivre un livre, nous nous immergeons complètement dans les sujets qui vous motivent.",
            "method-1-title": "Vous choisissez le sujet",
            "method-1-text": "Votre hobby, votre profession, votre film préféré... <strong class='font-bold'>Vous</strong> me donnez votre source d'intérêt, et je m'occupe du reste.",
            "method-2-title": "Apprentissage utile",
            "method-2-text": "L'objectif est que chaque mot et chaque phrase que nous apprenons ait une application immédiate. Vous avez besoin de préparer une présentation ? Nous ferons exactement cela.",
            "method-3-title": "Motivation à chaque cours",
            "method-3-text": "Il n'y a rien de plus efficace que d'apprendre quelque chose qui vous intéresse vraiment. La fluidité vient naturellement quand on apprécie le processus.",
            "testimonials-title": "Ce que disent mes élèves",
            "testimonial-1-text": "\"Enfin une méthode qui me donne envie de continuer à apprendre. Chaque cours est comme une discussion avec un ami, mais dans une autre langue. Fortement recommandé !\"",
            "testimonial-1-author": "- Carlos R.",
            "testimonial-2-text": "\"J'avais besoin de parler de mon travail lors de réunions et cette méthode m'a donné exactement le vocabulaire et la confiance pour le faire. Incroyable!\"",
            "testimonial-2-author": "- Ana G.",
            "testimonial-3-text": "\"Ma passion est le cinéma, et pendant mes cours, nous parlons de mes films préférés. C'est incroyable comment mon vocabulaire a grandi sans avoir l'impression d''étudier'.\"",
            "testimonial-3-author": "- Juan P.",
            "communities-title": "Rejoignez mes communautés sur WhatsApp",
            "community-1-title": "Nivel A1 - B1",
            "community-1-text": "Pour les débutants et intermédiaires. Pratiquez et partagez vos progrès.",
            "community-2-title": "Nivel B1 - C1",
            "community-2-text": "Pour les étudiants avancés. Conversations profondes et fluidité.",
            "youtube-title": "Renforcez votre apprentissage avec mes vidéos sur YouTube.",
            "youtube-subtitle": "Explorez des sujets sur la neuroscience, la linguistique et les recherches qui vous aideront à comprendre comment votre cerveau apprend.",
            "youtube-cta": "Aller sur ma chaîne YouTube",
            "pricing-title": "Investissez dans une conversation qui vous sert vraiment.",
            "price-1-title": "Cours individuel",
            "price-1-text": "Idéal para essayer la méthode, clarifier des doutes ou se concentrer sur un sujet spécifique.",
            "price-1-feature-1": "Plan d'étude personnalisé.",
            "price-1-feature-2": "1 heure de conversation ciblée.",
            "price-2-title": "Forfait de 5 cours",
            "price-2-text": "Parfait para un progrès constant et un engagement dans votre apprentissage.",
            "price-2-feature-1": "Plan d'étude personnalisé.",
            "price-2-feature-2": "Suivi des progrès.",
            "price-3-title": "Forfait de 8 cours",
            "price-3-text": "La meilleure option para des progrès remarquables, constants et durables.",
            "price-3-feature-1": "Tout ce qui précède est inclus.",
            "price-3-feature-2": "Ressources exclusives et matériel supplémentaire.",
            "popular-tag": "Le plus populaire !",
            "cta-choose-plan": "Choisir un forfait",
            "ebooks-title": "Mes Ebooks à télécharger",
            "ebook-1-title": "Le mythe de l'apprentissage des langues",
            "ebook-1-text": "Découvrez porquoi les méthodes traditionnelles ne fonctionnent pas et comment vous pouvez atteindre une fluidité authentique.",
            "ebook-2-title": "Todo lo que vous ne saviez pas sur l'espagnol et le portugais",
            "ebook-2-text": "Un guide complet para les étudiants bilingues. Découvrez les liens et les différences entre les deux langues.",
            "cta-download": "Télécharger Ebook",
            "modal-title": "C'est presque à vous !",
            "modal-subtitle": "Entrez votre e-mail pour télécharger l'ebook gratuit.",
            "modal-submit": "Télécharger maintenant",
            "email-placeholder": "Votre adresse e-mail",
            "faq-title": "Questions Fréquemment Posées",
            "faq-1-q": "Est-ce que ça marche para les grands débutants ?",
            "faq-1-a": "Oui, ma méthode est idéale para les débutants. Nous commençons par les sujets que vous intéressez déjà, ce qui rend l'apprentissage plus naturel et moins intimidant dès le premier jour.",
            "faq-2-q": "À quelle vitesse verrai-je des résultats ?",
            "faq-2-a": "La vitesse des progrès dépend de votre dévouement, mais la plupart de mes élèves remarquent une amélioration significative de leur confiance et de leurs capacités de conversation en quelques semaines, grâce à la pertinence des sujets.",
            "faq-3-q": "Les cours sont-ils individuels ou en groupe ?",
            "faq-3-a": "J'offre des cours individuels para garantir une approche 100% personnalisée. Cela nous permet de nous immerger complètement dans vos intérêts et de progresser à votre propre rythme.",
            "contact-title": "Parlons de ce qui vous intéresse.",
            "contact-subtitle": "Prêt para un cours qui vous sert vraiment ? Réservez votre séance d'essai, envoyez-moi un message ou contactez-moi sur WhatsApp.",
            "contact-schedule-cta": "Réserver une séance d'essai",
            "contact-whatsapp-cta": "Contacter sur WhatsApp",
            "or-separator": "ou",
            "contact-name-placeholder": "Votre nom complet",
            "contact-email-placeholder": "Votre adresse e-mail",
            "contact-message-placeholder": "Quelle langue vous voulez apprendre et quels sont vos intérêts ?",
            "contact-submit-cta": "Envoyer un message",
            "footer-copyright": "&copy; 2025 Jonathan. Tous droits réservés.",
            "footer-tagline": "Conçu et créé para vous aider à parler."
        },
        pt: {
            "nav-inicio": "Início",
            "nav-sobre-mi": "Sobre Mim",
            "nav-el-metodo": "O Método",
            "nav-comunidades": "Comunidades",
            "nav-youtube": "YouTube",
            "nav-precos": "Preços",
            "nav-ebooks": "Ebooks",
            "nav-faq": "FAQ",
            "nav-contacto": "Contato",
            "hero-title": "Pare de estudar. Comece a falar.",
            "hero-subtitle": "Por que aprender com livros chatos se você pode aprender com o que te apaixona? Meu método de ensino é baseado nos seus interesses, não em um currículo rígido.",
            "hero-cta": "Agendar aula experimental",
            "video-title": "Descubra meu método neste vídeo",
            "keys-intro": "Você imaginou que a chave para a fluência não fosse memorizar, mas",
            "keys-highlight": "ter uma conversa real?",
            "about-title": "Uma abordagem diferente, resultados reais.",
            "about-intro": "Olá, eu sou <strong class='text-indigo-600'>Jonathan</strong>, professor de idiomas com uma abordagem única.",
            "about-text-1": "Após anos de ensino, percebi que o método tradicional não funcionava para todos. Vi muitos alunos perderem a motivação com livros que não se conectavam com suas vidas, e entendi que a verdadeira fluência não vem da gramática, mas do <strong class='text-indigo-600'>interesse</strong>.",
            "about-text-2": "Minha missão é simples: ajudar você a se comunicar de forma autêntica sobre o que te move. É por isso que minhas aulas são um espaço onde suas paixões, seus projetos e seus sonhos estão no centro de tudo.",
            "about-text-3": "Minhas especializações incluem a neurociência da aprendizagem e a linguística, o que me permite projetar planos de estudo não apenas eficazes, mas cientificamente comprovados para que você alcance seus objetivos de forma mais eficiente.",
            "method-title": "Meu Método: Conversa com propósito",
            "method-subtitle": "O centro das minhas aulas é <strong class='underline'>você</strong>. Em vez de seguir um livro, nos imergimos completamente nos temas que te motivam.",
            "method-1-title": "Você escolhe o tema",
            "method-1-text": "Seu hobby, sua profissão, seu filme favorito... <strong class='font-bold'>Você</strong> me dá sua fonte de interesse, e eu cuido do resto.",
            "method-2-title": "Aprendizagem útil",
            "method-2-text": "A meta é que cada palavra e frase que aprendemos tenha uma aplicação imediata. Você precisa preparar uma apresentação? Faremos exatamente isso.",
            "method-3-title": "Motivação em cada aula",
            "method-3-text": "Não há nada mais eficaz do que aprender algo que realmente te interessa. A fluência chega de forma natural quando você gosta do processo.",
            "testimonials-title": "O que meus alunos dizem",
            "testimonial-1-text": "\"Finalmente, um método que me faz querer continuar aprendendo. Cada aula é como um bate-papo com um amigo, mas em outro idioma. Totalmente recomendado!\"",
            "testimonial-1-author": "- Carlos R.",
            "testimonial-2-text": "\"Eu precisava falar sobre meu trabalho em reuniões e este método me deu exatamente o vocabulário e a confiança para fazer isso. Incrível!\"",
            "testimonial-2-author": "- Ana G.",
            "testimonial-3-text": "\"Minha paixão é cinema, e nas minhas aulas, falamos sobre meus filmes favoritos. É incrível como meu vocabulário cresceu sem sentir que estava 'estudando'.\"",
            "testimonial-3-author": "- Juan P.",
            "communities-title": "Junte-se às minhas comunidades no WhatsApp",
            "community-1-title": "Nível A1 - B1",
            "community-1-text": "Para iniciantes e intermediários. Pratique e compartilhe seu progresso.",
            "community-2-title": "Nível B1 - C1",
            "community-2-text": "Para estudantes avançados. Conversas profundas e fluência.",
            "youtube-title": "Reforce seu aprendizado com meus vídeos no YouTube.",
            "youtube-subtitle": "Explore temas sobre neurociência, linguística e pesquisas que te ajudarão a entender como seu cérebro aprende.",
            "youtube-cta": "Ir para o meu canal do YouTube",
            "pricing-title": "Invista em una conversación que realmente te sirva.",
            "price-1-title": "Aula individual",
            "price-1-text": "Ideal para experimentar o método, tirar dúvidas ou focar em um tópico específico.",
            "price-1-feature-1": "Plano de estudo personalizado.",
            "price-1-feature-2": "1 hora de conversa focada.",
            "price-2-title": "Pacote de 5 aulas",
            "price-2-text": "Perfeito para um progresso constante e um aprendizado comprometido.",
            "price-2-feature-1": "Plano de estudo personalizado.",
            "price-2-feature-2": "Acompanhamento do progresso.",
            "price-3-title": "Pacote de 8 aulas",
            "price-3-text": "A melhor opção para um progresso notável, consistente e duradouro.",
            "price-3-feature-1": "Tudo o que foi mencionado acima está incluído.",
            "price-3-feature-2": "Recursos exclusivos e materiais extras.",
            "popular-tag": "O mais popular!",
            "cta-choose-plan": "Escolher plano",
            "ebooks-title": "Meus Ebooks para download",
            "ebook-1-title": "O mito da aprendizagem de idiomas",
            "ebook-1-text": "Descubra por que os métodos tradicionais não funcionam e como você pode alcançar a fluência autêntica.",
            "ebook-2-title": "Tudo o que você não sabia sobre espanhol e português",
            "ebook-2-text": "Um guia completo para estudantes bilíngues. Descubra as conexões y diferencias entre as duas línguas.",
            "cta-download": "Baixar Ebook",
            "modal-title": "É quase seu!",
            "modal-subtitle": "Insira seu e-mail para baixar o ebook gratuito.",
            "modal-submit": "Baixar agora",
            "email-placeholder": "Seu endereço de e-mail",
            "faq-title": "Perguntas Frequentes",
            "faq-1-q": "Funciona para iniciantes absolutos?",
            "faq-1-a": "Sim, meu método é ideal para iniciantes. Começamos com os temas que você já se importa, o que torna o aprendizado mais natural e menos intimidador desde o primeiro dia.",
            "faq-2-q": "Com que rapidez verei resultados?",
            "faq-2-a": "A velocidade do progresso depende da sua dedicação, mas a maioria dos meus alunos percebe uma melhoria significativa na confiança e nas habilidades de conversação em poucas semanas, graças à relevância dos tópicos.",
            "faq-3-q": "As aulas são individuais ou em grupo?",
            "faq-3-a": "Eu ofereço aulas individuais para garantir uma abordagem 100% personalizada. Isso nos permite mergulhar totalmente nos seus interesses e progredir no seu próprio ritmo.",
            "contact-title": "Vamos falar sobre o que te interessa.",
            "contact-subtitle": "Pronto para uma aula que realmente te sirva? Agende sua sessão experimental, me envie uma mensagem ou entre em contato pelo WhatsApp.",
            "contact-schedule-cta": "Agendar uma sessão experimental",
            "contact-whatsapp-cta": "Entrar em contato pelo WhatsApp",
            "or-separator": "ou",
            "contact-name-placeholder": "Seu nome completo",
            "contact-email-placeholder": "Seu endereço de e-mail",
            "contact-message-placeholder": "Qual idioma você quer aprender e quais são seus interesses?",
            "contact-submit-cta": "Enviar mensagem",
            "footer-copyright": "&copy; 2025 Jonathan. Todos os direitos reservados.",
            "footer-tagline": "Projetado e criado para te ajudar a falar."
        }
    };

    const langButtons = document.querySelectorAll('.lang-button');
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');
    const priceCards = document.querySelectorAll('.price-card');
    const testimonialContainer = document.getElementById('testimonial-container');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    let testimonialIndex = 0;
    const testimonialCount = 3; 

    function setLanguage(lang) {
        const currentTranslations = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (currentTranslations[key]) {
                element.innerHTML = currentTranslations[key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (currentTranslations[key]) {
                element.setAttribute('placeholder', currentTranslations[key]);
            }
        });

        langButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.lang-button[data-lang="${lang}"]`).classList.add('active');
    }

    // Carrusel de testimonios
    function showTestimonial(index) {
        const offset = -index * 100;
        testimonialContainer.style.transform = `translateX(${offset}%)`;
    }

    // Cambiar automáticamente el testimonio
    let carouselInterval = setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonialCount;
        showTestimonial(testimonialIndex);
    }, 5000); // Cambia el testimonio cada 5 segundos

    showTestimonial(0); // Mostrar el primer testimonio por defecto

    // --- Funcionalidad del selector de idiomas ---
    setLanguage('es'); // Establecer el idioma inicial (por defecto español)
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // --- Funcionalidad del menú y tarjetas ---
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    priceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (y / rect.height) * 10 * -1;
            const rotateY = (x / card.offsetWidth) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        });
    });
    
    // Manejo del formulario de contacto general
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí podrías agregar la lógica para enviar el formulario a un backend
        console.log('Formulario de contacto enviado (simulado). ¡Gracias!');
        e.target.reset();
    });

    // --- Funcionalidad del Modal de Ebooks ---
    const emailModal = document.getElementById('email-modal');
    const closeModalButton = document.getElementById('close-modal');
    const ebookForm = document.getElementById('ebook-form');
    const emailInput = document.getElementById('email-input');
    const modalMessage = document.getElementById('modal-message');
    const downloadButtons = document.querySelectorAll('[data-ebook-id]');
    let currentEbookId = null;

    const ebookLinks = {
        ebook1: 'https://drive.google.com/file/d/1DzhBWp1ePh2PvVFHt2COFJiWzAS05SMg/', // Reemplaza con la URL de tu Ebook
        ebook2: 'URL_DEL_EBOOK_2.pdf'  // Reemplaza con la URL de tu Ebook
    };

    function openModal(ebookId) {
        currentEbookId = ebookId;
        emailModal.classList.remove('hidden');
    }

    function closeModal() {
        emailModal.classList.add('hidden');
        emailInput.value = '';
        modalMessage.textContent = '';
    }

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const ebookId = button.getAttribute('data-ebook-id');
            openModal(ebookId);
        });
    });

    closeModalButton.addEventListener('click', closeModal);

    ebookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwCcospXOMR7IfwT8smdL6GmA-vlPa4FvgfhxRUIN0T1Adu1FT_WGbNBTxvbzV3czXcZw/exec';

        modalMessage.textContent = 'Enviando...';

        fetch(scriptURL, { method: 'POST', body: new FormData(ebookForm)})
            .then(response => {
                modalMessage.textContent = '¡Gracias! Descargando tu ebook...';
                setTimeout(() => {
                    window.open(ebookLinks[currentEbookId], '_blank');
                    closeModal();
                }, 2000);
            })
            .catch(error => {
                modalMessage.textContent = 'Error. Por favor, intenta de nuevo.';
                console.error('Error!', error.message);
            });
    });
});

// Función para el desplazamiento suave (smooth scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
