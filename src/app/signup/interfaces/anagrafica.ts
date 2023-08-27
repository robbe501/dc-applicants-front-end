export interface Anagrafica {

  codice_fiscale: string,
  nome: string,
  cognome: string,
  email: string,
  data_nascita: Date,
  luogo_nascita: string,
  cittadinanza: string,
  residenza: string,
  cap_residenza: number,
  domicilio: string,
  cap_domicilio: number,
  recapito_mobile: number,
  categoria_protetta: boolean,
  condanne_civili: boolean,
  come_conosciuto: string,

}
