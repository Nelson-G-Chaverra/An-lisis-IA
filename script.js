// Datos para impactos y estrategias
const impactos = {
    "sesgo": "Impacto social: Puede perpetuar desigualdades y discriminación en diversas áreas como contratación, servicios financieros y justicia.",
    "desempleo": "Impacto social: La automatización de trabajos puede generar un aumento en la tasa de desempleo, afectando a las personas con menos habilidades.",
    "dependencia": "Impacto social: Puede crear una dependencia excesiva de la tecnología, reduciendo la autonomía humana y fomentando la desconexión social.",
    "desinformación": "Impacto social: Los sistemas de IA pueden difundir información falsa o sesgada, afectando la calidad de la información que las personas reciben.",
    "vigilancia": "Impacto social: Puede invadir la privacidad de las personas, fomentando un entorno de control y monitoreo constante.",
    "discriminación": "Impacto social: La IA puede reforzar y replicar los sesgos existentes en la sociedad, discriminando a ciertos grupos de personas.",
    "privacidad": "Impacto social: La recopilación masiva de datos personales sin el consentimiento adecuado puede amenazar la privacidad individual.",
    "manipulación": "Impacto social: Las IA pueden ser utilizadas para manipular la opinión pública o influir en decisiones políticas y sociales.",
    "autonomía": "Impacto social: La IA puede reducir la autonomía personal, tomando decisiones sin intervención humana.",
    "control": "Impacto social: El control excesivo sobre las decisiones humanas puede generar una falta de libertad y autonomía en la sociedad."
};

const estrategias = {
    "sesgo": "Estrategias: Implementar auditorías regulares, diversidad en los equipos de desarrollo, y algoritmos más transparentes.",
    "desempleo": "Estrategias: Fomentar la educación y la capacitación en habilidades tecnológicas, crear políticas que promuevan la transición laboral.",
    "dependencia": "Estrategias: Promover el uso equilibrado de la tecnología, fomentar la interacción social y la autonomía humana.",
    "desinformación": "Estrategias: Desarrollar sistemas de IA con filtros éticos, promover la alfabetización mediática y el pensamiento crítico.",
    "vigilancia": "Estrategias: Implementar regulaciones para la protección de datos y la privacidad, promover la transparencia en el uso de la IA.",
    "discriminación": "Estrategias: Crear algoritmos inclusivos, garantizar que los datos sean representativos y libres de sesgos.",
    "privacidad": "Estrategias: Mejorar las políticas de protección de datos, obtener el consentimiento explícito de los usuarios.",
    "manipulación": "Estrategias: Crear políticas para limitar el uso de la IA en manipulaciones políticas y sociales, garantizar la transparencia de los algoritmos.",
    "autonomía": "Estrategias: Establecer límites claros sobre el papel de la IA en la toma de decisiones, garantizar que la intervención humana sea posible.",
    "control": "Estrategias: Fomentar la descentralización del poder en la IA, garantizar la supervisión y el control humano sobre las decisiones críticas."
};

function analizarTermino() {
    const entrada = document.getElementById("entradaTexto").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");
    const impactosDiv = document.getElementById("impactos");
    const estrategiasDiv = document.getElementById("estrategias");

    // Limpiar resultados anteriores
    impactosDiv.innerHTML = "";
    estrategiasDiv.innerHTML = "";

    // Términos predefinidos para los riesgos de la IA
    const riesgos = [
        "sesgo", "desempleo", "dependencia", "desinformación", 
        "vigilancia", "discriminación", "privacidad", "manipulación", 
        "autonomía", "control"
    ];

    // Términos predefinidos para los buenos usos de la IA
    const buenosUsos = [
        "creatividad", "automación", "eficiencia", "asistencia", 
        "innovación", "precisión", "accesibilidad", "educación", 
        "salud", "seguridad"
    ];

    // Evaluar el término ingresado
    if (riesgos.includes(entrada)) {
        resultado.innerHTML = `<span class="riesgo">¡Riesgo! Este término representa un posible riesgo ético de la IA.</span>`;
        impactosDiv.innerHTML = `<strong>Impactos Sociales:</strong> ${impactos[entrada]}`;
        estrategiasDiv.innerHTML = `<strong>Estrategias para Mitigar el Riesgo:</strong> ${estrategias[entrada]}`;
    } else if (buenosUsos.includes(entrada)) {
        resultado.innerHTML = `<span class="bueno">¡Buen uso! Este término representa un buen uso de la IA.</span>`;
        impactosDiv.innerHTML = "<strong>Impactos Sociales:</strong> Positivos, como la mejora en la eficiencia, acceso a servicios, y más.";
        estrategiasDiv.innerHTML = "<strong>Estrategias para Potenciar el Uso:</strong> Fomentar la innovación, accesibilidad, y ética en el uso de la IA.";
    } else {
        resultado.innerHTML = `<span>No se encuentra el término en la base de datos. Intenta con otro.</span>`;
    }
}
