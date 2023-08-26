export interface Candidato {
    candidatoId: number;
    codiceFiscale: string;
    nome: string;
    cognome: string;
    email: string;
    dataNascita: string;
    luogoNascita: string;
    cittadinanza: boolean;
    residenza: string;
    capResidenza: string;
    domicilioUgualeResidenza: boolean;
    domicilio: string;
    capDomicilio: string;
    recapitoMobile: string;
    recapitoFisso?: string | null;
    categoriaProtetta: boolean;
    condanneCivili: boolean;
    comeConosciuto: string;
    titoloId: number;
    laurea?: string | null;
    annoLaurea?: string | null;
    laureaInCorso?: string | null;
    diploma?: string | null;
    dataDiploma?: string | null;
    certificazione?: string | null;
    dataScadenza?: string | null;
    posizioneLavorativaId: number;
    azienda: string;
    dataInizio: string;
    posizione: string;
    contratto: string;
    altroContratto?: string | null;
    livello: number;
    ral: number;
    tariffaGiornalieraNetta: number;
    nomeReferente?: string | null;
    normativaPrivacy: boolean
  }

  export interface CandidatoLight{
    nome: string;
    cognome: string;
    recapitoMobile: string;
    esito: string;
  }