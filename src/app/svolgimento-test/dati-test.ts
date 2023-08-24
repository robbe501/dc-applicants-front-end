
export interface DatiTest {
    test_id: number;
    tipologia: string;
    domande: {
      domanda: string;
      risposte: string[];
      risposta_corretta: string;
    }[];
  }
  