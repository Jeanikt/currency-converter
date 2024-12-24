export type Language = "en" | "pt-BR" | "es";

export type Translations = {
  title: string;
  description: string;
  amount: string;
  from: string;
  to: string;
  result: string;
  conversionHistory: string;
  noHistory: string;
  enterAmount: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    title: "Currency Converter",
    description:
      "A real-time currency conversion tool that helps you calculate exchange rates between multiple currencies instantly.",
    amount: "Amount",
    from: "From",
    to: "To",
    result: "Result",
    conversionHistory: "Conversion History",
    noHistory: "No conversion history yet",
    enterAmount: "Enter amount",
  },
  "pt-BR": {
    title: "Conversor de Moedas",
    description:
      "Uma ferramenta de conversão de moedas em tempo real que ajuda você a calcular taxas de câmbio entre múltiplas moedas instantaneamente.",
    amount: "Valor",
    from: "De",
    to: "Para",
    result: "Resultado",
    conversionHistory: "Histórico de Conversões",
    noHistory: "Nenhum histórico de conversão ainda",
    enterAmount: "Digite o valor",
  },
  es: {
    title: "Conversor de Monedas",
    description:
      "Una herramienta de conversión de monedas en tiempo real que te ayuda a calcular tasas de cambio entre múltiples monedas al instante.",
    amount: "Cantidad",
    from: "De",
    to: "A",
    result: "Resultado",
    conversionHistory: "Historial de Conversiones",
    noHistory: "Sin historial de conversiones aún",
    enterAmount: "Ingrese cantidad",
  },
};
