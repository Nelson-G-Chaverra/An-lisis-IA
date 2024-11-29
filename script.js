// Datos para impactos y estrategias
const impactos = {
    "sesgo": "Impacto social: Puede perpetuar desigualdades y discriminaci�n en diversas �reas como contrataci�n, servicios financieros y justicia.",
    "desempleo": "Impacto social: La automatizaci�n de trabajos puede generar un aumento en la tasa de desempleo, afectando a las personas con menos habilidades.",
    "dependencia": "Impacto social: Puede crear una dependencia excesiva de la tecnolog�a, reduciendo la autonom�a humana y fomentando la desconexi�n social.",
    "desinformaci�n": "Impacto social: Los sistemas de IA pueden difundir informaci�n falsa o sesgada, afectando la calidad de la informaci�n que las personas reciben.",
    "vigilancia": "Impacto social: Puede invadir la privacidad de las personas, fomentando un entorno de control y monitoreo constante.",
    "discriminaci�n": "Impacto social: La IA puede reforzar y replicar los sesgos existentes en la sociedad, discriminando a ciertos grupos de personas.",
    "privacidad": "Impacto social: La recopilaci�n masiva de datos personales sin el consentimiento adecuado puede amenazar la privacidad individual.",
    "manipulaci�n": "Impacto social: Las IA pueden ser utilizadas para manipular la opini�n p�blica o influir en decisiones pol�ticas y sociales.",
    "autonom�a": "Impacto social: La IA puede reducir la autonom�a personal, tomando decisiones sin intervenci�n humana.",
    "control": "Impacto social: El control excesivo sobre las decisiones humanas puede generar una falta de libertad y autonom�a en la sociedad."
};

const estrategias = {
    "sesgo": "Estrategias: Implementar auditor�as regulares, diversidad en los equipos de desarrollo, y algoritmos m�s transparentes.",
    "desempleo": "Estrategias: Fomentar la educaci�n y la capacitaci�n en habilidades tecnol�gicas, crear pol�ticas que promuevan la transici�n laboral.",
    "dependencia": "Estrategias: Promover el uso equilibrado de la tecnolog�a, fomentar la interacci�n social y la autonom�a humana.",
    "desinformaci�n": "Estrategias: Desarrollar sistemas de IA con filtros �ticos, promover la alfabetizaci�n medi�tica y el pensamiento cr�tico.",
    "vigilancia": "Estrategias: Implementar regulaciones para la protecci�n de datos y la privacidad, promover la transparencia en el uso de la IA.",
    "discriminaci�n": "Estrategias: Crear algoritmos inclusivos, garantizar que los datos sean representativos y libres de sesgos.",
    "privacidad": "Estrategias: Mejorar las pol�ticas de protecci�n de datos, obtener el consentimiento expl�cito de los usuarios.",
    "manipulaci�n": "Estrategias: Crear pol�ticas para limitar el uso de la IA en manipulaciones pol�ticas y sociales, garantizar la transparencia de los algoritmos.",
    "autonom�a": "Estrategias: Establecer l�mites claros sobre el papel de la IA en la toma de decisiones, garantizar que la intervenci�n humana sea posible.",
    "control": "Estrategias: Fomentar la descentralizaci�n del poder en la IA, garantizar la supervisi�n y el control humano sobre las decisiones cr�ticas."
};

function analizarTermino() {
    const entrada = document.getElementById("entradaTexto").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado");
    const impactosDiv = document.getElementById("impactos");
    const estrategiasDiv = document.getElementById("estrategias");

    // Limpiar resultados anteriores
    impactosDiv.innerHTML = "";
    estrategiasDiv.innerHTML = "";

    // T�rminos predefinidos para los riesgos de la IA
    const riesgos = [
        "sesgo", "desempleo", "dependencia", "desinformaci�n", 
        "vigilancia", "discriminaci�n", "privacidad", "manipulaci�n", 
        "autonom�a", "control"
    ];

    // T�rminos predefinidos para los buenos usos de la IA
    const buenosUsos = [
        "creatividad", "automaci�n", "eficiencia", "asistencia", 
        "innovaci�n", "precisi�n", "accesibilidad", "educaci�n", 
        "salud", "seguridad"
    ];

    // Evaluar el t�rmino ingresado
    if (riesgos.includes(entrada)) {
        resultado.innerHTML = `<span class="riesgo">�Riesgo! Este t�rmino representa un posible riesgo �tico de la IA.</span>`;
        impactosDiv.innerHTML = `<strong>Impactos Sociales:</strong> ${impactos[entrada]}`;
        estrategiasDiv.innerHTML = `<strong>Estrategias para Mitigar el Riesgo:</strong> ${estrategias[entrada]}`;
    } else if (buenosUsos.includes(entrada)) {
        resultado.innerHTML = `<span class="bueno">�Buen uso! Este t�rmino representa un buen uso de la IA.</span>`;
        impactosDiv.innerHTML = "<strong>Impactos Sociales:</strong> Positivos, como la mejora en la eficiencia, acceso a servicios, y m�s.";
        estrategiasDiv.innerHTML = "<strong>Estrategias para Potenciar el Uso:</strong> Fomentar la innovaci�n, accesibilidad, y �tica en el uso de la IA.";
    } else {
        resultado.innerHTML = `<span>No se encuentra el t�rmino en la base de datos. Intenta con otro.</span>`;
    }
}
