export interface UsuarioElement {
  id: number,
  userName: string,
  password: string,
  email: string,
  userFullName: string,
  userJoinData: string,
  perfis: string[]
}


export interface ApostasElement {
  id: number,
  evento: string,
  data: String,
  esporte: string,
  competicao: string,
  mercado: string,
  aposta: number,
  lucro: number,
  odd: number
  usuario: UsuarioElement;
}

export interface StatisticElement {
  lucro: number,
  quantidadeDeApostasRealizadas: number,
  valorTotalApostado: number;
  quantidadeDeApostasGanhas: number;
  quantidadeDeApostasPerdidas: number;
  valorGanhoApostado: number;
  valorPerdidoApostado: number;
  roi: number;
}

export interface PerfisElement {
  perfis: string[]
}
