import { Routes } from '@angular/router';
import { SobreComponent } from './components/pages/sobre/sobre.component';
import { MpsBrComponent } from './components/pages/mps-br/mps-br.component';
import { CarreirasComponent } from './components/pages/carreiras/carreiras.component';
import { ContatosComponent } from './components/pages/contatos/contatos.component';
import { PoliticaDePrivacidadeComponent } from './components/pages/politica-de-privacidade/politica-de-privacidade.component';
import { IndexComponent } from './components/pages/index/index.component';
import { ServicosComponent } from './components/pages/servicos/servicos.component';
import { FabricaDeSoftwareComponent } from './components/pages/fabrica-de-software/fabrica-de-software.component';
import { ConsultoriaComponent } from './components/pages/consultoria/consultoria.component';
import { OutsourcingComponent } from './components/pages/outsourcing/outsourcing.component';
import { IntegracaoComponent } from './components/pages/integracao/integracao.component';
import { SutentacaodesistemasComponent } from './components/pages/sutentacaodesistemas/sutentacaodesistemas.component';
import { PorteCobolComponent } from './components/pages/porte-cobol/porte-cobol.component';
import { PagamentoComponent } from './components/pages/pagamento/pagamento.component';
import { IntercambioComponent } from './components/pages/intercambio/intercambio.component';
import { CompensacaoEletronicaComponent } from './components/pages/compensacao-eletronica/compensacao-eletronica.component';
import { InssComponent } from './components/pages/inss/inss.component';
import { DdaComponent } from './components/pages/dda/dda.component';
import { RotativoComponent } from './components/pages/rotativo/rotativo.component';
import { GestaoCreditoComponent } from './components/pages/gestao-credito/gestao-credito.component';
import { PortalCreditoComponent } from './components/pages/portal-credito/portal-credito.component';
import { CobrancaBancariaComponent } from './components/pages/cobranca-bancaria/cobranca-bancaria.component';
import { MicrocreditoComponent } from './components/pages/microcredito/microcredito.component';
import { ConsignacaoComponent } from './components/pages/consignacao/consignacao.component';
import { AntecipacaoDeRecebiveisComponent } from './components/pages/antecipacao-de-recebiveis/antecipacao-de-recebiveis.component';
import { FundoGarantidorComponent } from './components/pages/fundo-garantidor/fundo-garantidor.component';
import { ArrecadacaoComponent } from './components/pages/arrecadacao/arrecadacao.component';
import { CreditoDeDesenvolvimentoComponent } from './components/pages/credito-de-desenvolvimento/credito-de-desenvolvimento.component';
import { RedeDeComprasComponent } from './components/pages/rede-de-compras/rede-de-compras.component';
import { CdcComponent } from './components/pages/cdc/cdc.component';
import { CestaDeTarifasComponent } from './components/pages/cesta-de-tarifas/cesta-de-tarifas.component';
import { ParceladoComponent } from './components/pages/parcelado/parcelado.component';
import { AgendamentoComponent } from './components/pages/agendamento/agendamento.component';
import { RecuperacaoDeCreditoComponent } from './components/pages/recuperacao-de-credito/recuperacao-de-credito.component';
import { ContratosPrejuizoComponent } from './components/pages/contratos-prejuizo/contratos-prejuizo.component';
import { CadastroPessoasComponent } from './components/pages/cadastro-pessoas/cadastro-pessoas.component';
import { GarantiaComponent } from './components/pages/garantia/garantia.component';
import { CreditoWebComponent } from './components/pages/credito-web/credito-web.component';
import { AnaliseAtendimentoComponent } from './components/pages/analise-atendimento/analise-atendimento.component';
import { GestaoContabilComponent } from './components/pages/gestao-contabil/gestao-contabil.component';
import { CessaoCreditoComponent } from './components/pages/cessao-credito/cessao-credito.component';
import { GestaoTributariaComponent } from './components/pages/gestao-tributaria/gestao-tributaria.component';
import { TesourariaComponent } from './components/pages/tesouraria/tesouraria.component';
import { ControladoriaComponent } from './components/pages/controladoria/controladoria.component';
import { MobileComponent } from './components/pages/mobile/mobile.component';
import { SmsComponent } from './components/pages/sms/sms.component';
import { GerenciadorFinanceiroComponent } from './components/pages/gerenciador-financeiro/gerenciador-financeiro.component';
import { AvaliacaoComponent } from './components/pages/avaliacao/avaliacao.component';
import { MercadoDigitalComponent } from './components/pages/mercado-digital/mercado-digital.component';
import { CentralRiscoCreditoComponent } from './components/pages/central-risco-credito/central-risco-credito.component';
import { SpedComponent } from './components/pages/sped/sped.component';
import { AgenciaDeFomentoComponent } from './components/pages/agencia-de-fomento/agencia-de-fomento.component';
import { CobrancaDeCreditoComponent } from './components/pages/cobranca-de-credito/cobranca-de-credito.component';
import { ControleAtivoComponent } from './components/pages/controle-ativo/controle-ativo.component';
import { Cadoc3040Component } from './components/pages/cadoc3040/cadoc3040.component';
import { EFinanceiraComponent } from './components/pages/e-financeira/e-financeira.component';
import { PrevencaoLavagemComponent } from './components/pages/prevencao-lavagem/prevencao-lavagem.component';
import { CadastroDeClienteComponent } from './components/pages/cadastro-de-cliente/cadastro-de-cliente.component';
import { Cadoc3050Component } from './components/pages/cadoc3050/cadoc3050.component';
import { InformesLegaisComponent } from './components/pages/informes-legais/informes-legais.component';
import { CtaComponent } from './components/pages/cta/cta.component';
import { PdJudComponent } from './components/pages/pd-jud/pd-jud.component';
import { CentralDeRiscoComponent } from './components/pages/central-de-risco/central-de-risco.component';
import { PdPositivoComponent } from './components/pages/pd-positivo/pd-positivo.component';
import { PdBankComponent } from './components/pages/pd-bank/pd-bank.component';
import { CaptacoesDeMercadoComponent } from './components/pages/captacoes-de-mercado/captacoes-de-mercado.component';
import { GestaoDeFundosComponent } from './components/pages/gestao-de-fundos/gestao-de-fundos.component';
import { GerencialEInformativosComponent } from './components/pages/gerencial-e-informativos/gerencial-e-informativos.component';
import { CoreBancarioComponent } from './components/pages/core-bancario/core-bancario.component';
import { PoupancaComponent } from './components/pages/poupanca/poupanca.component';
import { DepositoJudiciaisComponent } from './components/pages/deposito-judiciais/deposito-judiciais.component';
import { DepositoAPrazoComponent } from './components/pages/deposito-aprazo/deposito-aprazo.component';
import { RelatorioIgualdadeComponent } from './components/pages/relatorio-igualdade/relatorio-igualdade.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },

  {
    path: 'mps',
    component: MpsBrComponent,
  },

  {
    path: 'carreiras',
    component: CarreirasComponent,
  },

  {
    path: 'contatos',
    component: ContatosComponent,
  },

  {
    path: 'politica-de-privacidade',
    component: PoliticaDePrivacidadeComponent,
  },
  {
    path: 'servicos',
    component: ServicosComponent,
  },

  {
    path: 'consultoria',
    component: ConsultoriaComponent,
  },

  {
    path: 'outsourcing',
    component: OutsourcingComponent,
  },

  {
    path: 'integracao',
    component: IntegracaoComponent,
  },

  {
    path: 'sustentacao-de-sistemas',
    component: SutentacaodesistemasComponent,
  },
  {
    path: 'pagamento',
    component: PagamentoComponent,
  },

  {
    path: 'intercambio',
    component: IntercambioComponent,
  },

  {
    path: 'compensacao-eletronica',
    component: CompensacaoEletronicaComponent,
  },

  {
    path: 'inss',
    component: InssComponent,
  },
  {
    path: 'dda',
    component: DdaComponent,
  },
  {
    path: 'rotativo',
    component: RotativoComponent,
  },
  {
    path: 'gestao-credito',
    component: GestaoCreditoComponent,
  },
  {
    path: 'portal-credito',
    component: PortalCreditoComponent,
  },
  {
    path: 'porte-cobol',
    component: PorteCobolComponent,
  },
  {
    path: 'cobranca-bancaria',
    component: CobrancaBancariaComponent,
  },
  {
    path: 'microcredito',
    component: MicrocreditoComponent,
  },
  {
    path: 'consignacao',
    component: ConsignacaoComponent,
  },
  {
    path: 'antecipacao-de-recebiveis',
    component: AntecipacaoDeRecebiveisComponent,
  },
  {
    path: 'fundo-garantidor',
    component: FundoGarantidorComponent,
  },
  {
    path: 'arrecadacao',
    component: ArrecadacaoComponent,
  },
  {
    path: 'credito-de-desenvolvimento',
    component: CreditoDeDesenvolvimentoComponent,
  },
  {
    path: 'rede-de-compras',
    component: RedeDeComprasComponent,
  },
  {
    path: 'cdc',
    component: CdcComponent,
  },
  {
    path: 'cesta-de-tarifas',
    component: CestaDeTarifasComponent,
  },
  {
    path: 'parcelado',
    component: ParceladoComponent,
  },
  {
    path: 'agendamento',
    component: AgendamentoComponent,
  },
  {
    path: 'credito-web',
    component: CreditoWebComponent,
  },
  {
    path: 'recuperacao-de-credito',
    component: RecuperacaoDeCreditoComponent,
  },
  {
    path: 'contratos-prejuizo',
    component: ContratosPrejuizoComponent,
  },
  {
    path: 'gestao-contabil',
    component: GestaoContabilComponent,
  },
  {
    path: 'tesouraria',
    component: TesourariaComponent,
  },
  {
    path: 'controladoria',
    component: ControladoriaComponent,
  },
  {
    path: 'mobile',
    component: MobileComponent,
  },
  {
    path: 'sms',
    component: SmsComponent,
  },
  {
    path: 'gerenciador-financeiro',
    component: GerenciadorFinanceiroComponent,
  },
  { 
    path: 'mercado-digital', 
    component: MercadoDigitalComponent 
  },
  {
    path: 'avaliacao',
    component: AvaliacaoComponent,
  },
  {
    path: 'cadastro-de-pessoas',
    component: CadastroPessoasComponent,
  },
  {
    path: 'garantia',
    component: GarantiaComponent,
  },
  {
    path: 'analise-e-atendimento',
    component: AnaliseAtendimentoComponent,
  },
  {
    path: 'cessao-credito',
    component: CessaoCreditoComponent,
  },
  { 
    path: 'gestao-tributaria', 
    component: GestaoTributariaComponent 
  },
  {
    path: 'central-risco-credito',
    component: CentralRiscoCreditoComponent,
  },
  {
    path: 'sped',
    component: SpedComponent,
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
  {
    path: 'politica-de-privacidade',
    component: PoliticaDePrivacidadeComponent,
  },
  {
    path: 'servicos',
    component: ServicosComponent,
  },

  {
    path: 'contatos',
    component: ContatosComponent,
  },

  {
    path: 'fabrica-de-software',
    component: FabricaDeSoftwareComponent,
  },

  {
    path: 'consultoria',
    component: ConsultoriaComponent,
  },

  {
    path: 'outsourcing',
    component: OutsourcingComponent,
  },

  {
    path: 'integracao',
    component: IntegracaoComponent,
  },
  {
    path: 'arrecadacao',
    component: ArrecadacaoComponent,
  },
  {
    path: 'agencia-de-fomento',
    component: AgenciaDeFomentoComponent,
  },
  { 
    path: 'cobranca-de-credito', 
    component: CobrancaDeCreditoComponent 
  },
  {
    path: 'controle-ativo',
    component: ControleAtivoComponent,
  },
  {
    path: 'cadoc3040',
    component: Cadoc3040Component,
  },
  {
    path: 'e-financeira',
    component: EFinanceiraComponent,
  },
  {
    path: 'prevencao-lavagem',
    component: PrevencaoLavagemComponent,
  },
  {
    path: 'cadastro-de-cliente',
    component: CadastroDeClienteComponent,
  },
  {
    path: 'cadoc-3050',
    component: Cadoc3050Component,
  },
  {
    path: 'informes-legais',
    component: InformesLegaisComponent,
  },
  {
    path: 'cta',
    component: CtaComponent,
  },
  {
    path: 'pdjud',
    component: PdJudComponent,
  },
  {
    path: 'central-risco-bacen',
    component: CentralDeRiscoComponent,
  },
  {
    path: 'pdPositivo',
    component: PdPositivoComponent,
  },
  {
    path: 'pdBank',
    component: PdBankComponent,
  },
  {
    path: 'captacoes-de-mercado',
    component: CaptacoesDeMercadoComponent,
  },
  {
    path: 'gestao-de-fundos',
    component: GestaoDeFundosComponent,
  },
  {
    path: 'gestao-tributaria',
    component: GestaoTributariaComponent,
  },
  {
    path: 'gerencial-iformativos-carteira',
    component: GerencialEInformativosComponent,
  },
  {
    path: 'core-bancario', component: CoreBancarioComponent
  },
  {
    path: 'poupanca', component: PoupancaComponent
  },
  {
    path: 'deposito-judiciais', component: DepositoJudiciaisComponent
  },
  {
    path: 'deposito-a-prazo', component: DepositoAPrazoComponent
  },
  {
    path: 'relatorio-de-igualdade', component: RelatorioIgualdadeComponent
  },
  {
    path: 'dda', component: DdaComponent
  }
];
