
export interface DatiTest {
    testId: string;
    tipologia: string;
    domande: {
      domanda: string;
      risposte: string[];
      corretta: string;
    }[];
  }
  