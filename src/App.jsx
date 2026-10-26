import React, { useState } from 'react';
import { 
  Home, Calendar as CalendarIcon, Mail, MessageSquare, HelpCircle, 
  LogOut, Settings, Bell, User, Search, Check, X, Send, Image, Mic, FileText, Upload, Stethoscope, Eye, Clock, Phone, MessageCircle, Activity, ShieldCheck, Users, Edit3, History 
} from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [role, setRole] = useState('patient'); 
  const [activeTab, setActiveTab] = useState('home');
  const [configSubTab, setConfigSubTab] = useState('account'); 

  // Estados para marcação de consulta
  const [hospitalSelect, setHospitalSelect] = useState('UNIDADE MISTA DE TRIUNFO-PE');
  const [especialidadeSelect, setEspecialidadeSelect] = useState('ONCOLOGIA');
  const [medicoSelect, setMedicoSelect] = useState('DR. EMILIANO FIGUEIRA');
  const [dataConsulta, setDataConsulta] = useState('2026-11-14');
  const [horarioConsulta, setHorarioConsulta] = useState('09:00');
  const [queixaConsulta, setQueixaConsulta] = useState('');

  // Estado para o Modal de Visualização de Exame pelo Médico
  const [exameSelecionado, setExameSelecionado] = useState(null);

  // Estado para o Modal do Médico Solicitar Consulta para o Paciente
  const [modalSolicitarConsulta, setModalSolicitarConsulta] = useState(null); 
  const [dataMedicoSolicita, setDataMedicoSolicita] = useState('2026-11-20');
  const [horarioMedicoSolicita, setHorarioMedicoSolicita] = useState('10:00');
  const [especialidadeMedicoSolicita, setEspecialidadeMedicoSolicita] = useState('ONCOLOGIA');

  // Estado para o Modal de Adicionar Nova Evolução ao Prontuário
  const [modalAtualizarProntuario, setModalAtualizarProntuario] = useState(null);
  const [novoHistoricoProntuario, setNovoHistoricoProntuario] = useState('');
  const [novaCondutaProntuario, setNovaCondutaProntuario] = useState('');
  const [medicoResponsavelEdicao, setMedicoResponsavelEdicao] = useState('DR. EMILIANO FIGUEIRA');

  // Estados para envio de exames pelo paciente
  const [tipoExame, setTipoExame] = useState('Exame de Sangue');
  const [descricaoExame, setDescricaoExame] = useState('');
  const [nomeArquivo, setNomeArquivo] = useState('');
  const [listaExames, setListaExames] = useState([
    {
      id: 1,
      paciente: 'FERNANDA SILVA',
      tipo: 'Biópsia do Pulmão',
      descricao: 'Resultado parcial do tecido coletado para análise oncológica.',
      data: '24/10/2026',
      arquivo: 'laudo_biopsia_pulmão.pdf',
      status: 'Enviado pelo Paciente'
    },
    {
      id: 2,
      paciente: 'FELIPE OLIVEIRA',
      tipo: 'Hemograma Completo',
      descricao: 'Exames de rotina pré-consulta com contagem de plaquetas e leucócitos.',
      data: '23/10/2026',
      arquivo: 'hemograma_felipe.pdf',
      status: 'Enviado pelo Paciente'
    }
  ]);

  // Estados para envio de laudos pelo médico
  const [pacienteSelecionadoLaudo, setPacienteSelecionadoLaudo] = useState('FERNANDA SILVA');
  const [tituloLaudo, setTituloLaudo] = useState('Parecer Médico / Prescrição');
  const [conteudoLaudo, setConteudoLaudo] = useState('');
  const [listaLaudosMedico, setListaLaudosMedico] = useState([
    {
      id: 1,
      paciente: 'FERNANDA SILVA',
      titulo: 'Avaliação de Exames Laboratoriais',
      conteudo: 'Exames dentro da normalidade. Continuar com a medicação atual.',
      data: '24/10/2026',
      medico: 'DR. EMILIANO FIGUEIRA'
    }
  ]);

  // Consultas do Paciente (com status de confirmação e dados de absenteísmo individual)
  const [consultasPaciente, setConsultasPaciente] = useState([
    {
      id: 1,
      hospital: "UNIDADE MISTA DE TRIUNFO-PE",
      endereco: "Centro, Triunfo - PE",
      especialidade: "ONCOLOGIA",
      horario: "09:00",
      sala: "SALA 043",
      dataOriginal: "2026-11-14",
      data: "14/11/26",
      medico: "DR. EMILIANO FIGUEIRA",
      queixa: "Acompanhamento de rotina e exames",
      statusPresenca: "Pendente",
      historicoSaude: "Paciente em acompanhamento oncológico regular. Sem histórico de comorbidades graves. Alérgica a Dipirona.",
      taxaAbsenteismoPessoal: "100% de Presença (Nenhuma falta registrada)"
    }
  ]);

  // Lista de pacientes com histórico acumulativo de prontuários (evoluções clínicas imutáveis)
  const [listaPacientesMedico, setListaPacientesMedico] = useState([
    {
      id: 1,
      nome: "FERNANDA SILVA",
      idade: "34 anos",
      cpf: "123.456.789-00",
      rg: "5.123.456 SDS/PE",
      dataNascimento: "12/05/1992",
      endereco: "Rua Siqueira Campos, 142 - Centro, Triunfo - PE",
      cartaoSUS: "898 0031 9283 1102",
      telefone: "(87) 98877-6655",
      condicao: "Oncologia (Nódulo pulmonar em investigação)",
      ultimasConsultas: "14/10/2026 - Rotina",
      taxaPresenca: "100% (Sem faltas)",
      historicoEvolucoes: [
        {
          id: 101,
          textoHistorico: "Exames prévios mostram estabilidade. Sem histórico de tabagismo. Alergias: Nenhuma conhecida.",
          conduta: "Manter acompanhamento com exames trimestrais e retorno em 60 dias.",
          medico: "DR. EMILIANO FIGUEIRA",
          dataHora: "24/10/2026 às 14:30"
        }
      ]
    },
    {
      id: 2,
      nome: "FELIPE OLIVEIRA",
      idade: "41 anos",
      cpf: "987.654.321-11",
      rg: "4.987.321 SDS/PE",
      dataNascimento: "28/11/1984",
      endereco: "Av. Beira Rio, 500 - Bairro Novo, Triunfo - PE",
      cartaoSUS: "898 0022 4152 7789",
      telefone: "(87) 99911-2233",
      condicao: "Checkup / Preventivo Anual",
      ultimasConsultas: "01/09/2026 - Cardiológico",
      taxaPresenca: "100% (Sem faltas)",
      historicoEvolucoes: [
        {
          id: 102,
          textoHistorico: "Histórico familiar de câncer gástrico. Pressão arterial controlada. Praticante de atividades físicas.",
          conduta: "Orientações nutricionais repassadas. Retorno anual preventivo.",
          medico: "DR. FERNANDO ORTEGA",
          dataHora: "10/09/2026 às 11:15"
        }
      ]
    },
    {
      id: 3,
      nome: "MARIA CLARA SOUZA",
      idade: "28 anos",
      cpf: "456.789.123-22",
      rg: "6.321.789 SDS/PE",
      dataNascimento: "05/03/1998",
      endereco: "Sítio Canta Galo, Zona Rural - Triunfo - PE",
      cartaoSUS: "898 0044 5566 7788",
      telefone: "(87) 98122-3344",
      condicao: "Otorrinolaringologia",
      ultimasConsultas: "10/08/2026 - Otorrino",
      taxaPresenca: "80% (1 falta registrada)",
      historicoEvolucoes: [
        {
          id: 103,
          textoHistorico: "Rinite alérgica crônica e episódios recorrentes de amigdalite.",
          conduta: "Prescrição de spray nasal de corticoide e antialérgico em caso de crise.",
          medico: "DRA. JAMILLE BITTENCOURT",
          dataHora: "02/10/2026 às 09:40"
        }
      ]
    }
  ]);

  // Consultas/Pacientes do Médico (Agenda do Dia)
  const [consultasMedico, setConsultasMedico] = useState([
    {
      id: 1,
      hospital: "UNIDADE MISTA DE TRIUNFO-PE",
      endereco: "Centro, Triunfo - PE",
      especialidade: "ONCOLOGIA",
      horario: "09:00",
      sala: "SALA 043",
      dataOriginal: "2026-10-25",
      data: "Hoje",
      paciente: "FERNANDA SILVA",
      queixa: "Revisão de exames laboratoriais",
      statusPresenca: "Confirmado",
      prontuario: "Histórico: Nódulo pulmonar em investigação. Exames prévios mostram estabilidade."
    },
    {
      id: 2,
      hospital: "UNIDADE MISTA DE TRIUNFO-PE",
      endereco: "Centro, Triunfo - PE",
      especialidade: "ONCOLOGIA / CHECKUP",
      horario: "10:00",
      sala: "SALA 043",
      dataOriginal: "2026-10-25",
      data: "Hoje",
      paciente: "FELIPE OLIVEIRA",
      queixa: "Checkup anual preventivo",
      statusPresenca: "Pendente",
      prontuario: "Histórico: Histórico familiar de câncer gástrico. Pressão arterial controlada."
    }
  ]);

  // Função para abrir o modal de adicionar nova evolução
  const abrirModalAtualizarProntuario = (pac) => {
    setModalAtualizarProntuario(pac);
    setNovoHistoricoProntuario('');
    setNovaCondutaProntuario('');
    setMedicoResponsavelEdicao('DR. EMILIANO FIGUEIRA');
  };

  // Função para adicionar nova entrada ao histórico sem sobrescrever as anteriores
  const handleAdicionarEvolucaoProntuario = (e) => {
    e.preventDefault();
    if (!modalAtualizarProntuario || !novoHistoricoProntuario || !novaCondutaProntuario) return;

    const dataHoraAtual = new Date().toLocaleDateString('pt-BR') + ' às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    const novaEvolucao = {
      id: Date.now(),
      textoHistorico: novoHistoricoProntuario,
      conduta: novaCondutaProntuario,
      medico: medicoResponsavelEdicao,
      dataHora: dataHoraAtual
    };

    setListaPacientesMedico(listaPacientesMedico.map(p => {
      if (p.id === modalAtualizarProntuario.id) {
        return {
          ...p,
          historicoEvolucoes: [novaEvolucao, ...p.historicoEvolucoes]
        };
      }
      return p;
    }));

    alert(`Nova evolução clínica adicionada com sucesso por ${medicoResponsavelEdicao}! Os registos anteriores foram preservados.`);
    setModalAtualizarProntuario(null);
  };

  // Função para calcular os dias restantes até à próxima consulta
  const calcularDiasRestantes = (dataStr) => {
    if (!dataStr) return null;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataConsultaObj = new Date(dataStr);
    const diferencaTempo = dataConsultaObj - hoje;
    const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));
    return diferencaDias;
  };

  // Funções para gerir o absenteísmo
  const confirmarPresencaConsulta = (id) => {
    setConsultasPaciente(consultasPaciente.map(c => c.id === id ? { ...c, statusPresenca: "Confirmado" } : c));
    alert("Presença confirmada com sucesso! A Secretaria de Saúde de Triunfo agradece para evitar vagas ociosas.");
  };

  const cancelarConsulta = (id) => {
    if (window.confirm("Tem certeza que deseja cancelar esta consulta? A vaga será liberada imediatamente para outro munícipe na fila de espera.")) {
      setConsultasPaciente(consultasPaciente.map(c => c.id === id ? { ...c, statusPresenca: "Cancelado pelo Paciente" } : c));
      alert("Consulta cancelada com antecedência. A vaga foi redirecionada na rede municipal de Triunfo-PE.");
    }
  };

  // Função para paciente agendar/solicitar consulta
  const handleAgendarConsulta = (e) => {
    e.preventDefault();
    const novaConsulta = {
      id: Date.now(),
      hospital: hospitalSelect,
      endereco: "Centro, Triunfo - PE",
      especialidade: especialidadeSelect,
      horario: horarioConsulta,
      sala: "SALA 043",
      dataOriginal: dataConsulta,
      data: dataConsulta ? dataConsulta.split('-').reverse().join('/') : '25/10/26',
      medico: medicoSelect,
      queixa: queixaConsulta || "Não informada",
      statusPresenca: "Pendente",
      historicoSaude: "Paciente ativo na rede municipal. Acompanhamento preventivo e clínico.",
      taxaAbsenteismoPessoal: "100% de Presença"
    };

    setConsultasPaciente([novaConsulta, ...consultasPaciente]);
    alert("Consulta solicitada/agendada com sucesso! Lembre-se de confirmar sua presença na aba de Consultas.");
    setQueixaConsulta('');
    setActiveTab('consultas');
  };

  // Função do médico para solicitar consulta em nome da rede municipal para o paciente
  const handleMedicoSolicitarConsultaParaPaciente = (e) => {
    e.preventDefault();
    if (!modalSolicitarConsulta) return;

    const novaConsultaPaciente = {
      id: Date.now(),
      hospital: "UNIDADE MISTA DE TRIUNFO-PE",
      endereco: "Centro, Triunfo - PE",
      especialidade: especialidadeMedicoSolicita,
      horario: horarioMedicoSolicita,
      sala: "SALA 043",
      dataOriginal: dataMedicoSolicita,
      data: dataMedicoSolicita.split('-').reverse().join('/'),
      medico: "DR. EMILIANO FIGUEIRA",
      queixa: "Solicitação direta da equipe médica municipal",
      statusPresenca: "Pendente (Solicitado pelo Médico)",
      historicoSaude: "Acompanhamento clínico geral.",
      taxaAbsenteismoPessoal: modalSolicitarConsulta.taxaPresenca
    };

    setConsultasPaciente([novaConsultaPaciente, ...consultasPaciente]);
    alert(`Consulta solicitada com sucesso para o(a) paciente ${modalSolicitarConsulta.nome}! A notificação foi enviada ao painel dele(a).`);
    setModalSolicitarConsulta(null);
  };

  // Função para paciente enviar exame
  const handleEnviarExame = (e) => {
    e.preventDefault();
    if (!descricaoExame) {
      alert("Por favor, preencha a descrição do exame.");
      return;
    }

    const novoExame = {
      id: Date.now(),
      paciente: 'VOCÊ (PACIENTE)',
      tipo: tipoExame,
      descricao: descricaoExame,
      data: new Date().toLocaleDateString('pt-BR'),
      arquivo: nomeArquivo ? nomeArquivo.name : 'exame_anexado.pdf',
      status: 'Enviado (Aguardando Análise)'
    };

    setListaExames([novoExame, ...listaExames]);
    alert("Exame enviado com sucesso para a equipe médica em Triunfo!");
    setDescricaoExame('');
    setNomeArquivo('');
  };

  // Função para médico enviar laudo
  const handleEnviarLaudo = (e) => {
    e.preventDefault();
    if (!conteudoLaudo) {
      alert("Por favor, digite o conteúdo do laudo ou parecer.");
      return;
    }

    const novoLaudo = {
      id: Date.now(),
      paciente: pacienteSelecionadoLaudo,
      titulo: tituloLaudo,
      conteudo: conteudoLaudo,
      data: new Date().toLocaleDateString('pt-BR'),
      medico: 'DR. EMILIANO FIGUEIRA'
    };

    setListaLaudosMedico([novoLaudo, ...listaLaudosMedico]);
    alert("Laudo/Parecer enviado com sucesso ao paciente!");
    setConteudoLaudo('');
  };

  const doctorPatientImage = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80";

  if (screen === 'welcome' || screen === 'register' || screen === 'login-patient' || screen === 'login-doctor') {
    return (
      <div className="min-h-screen flex bg-slate-900 font-sans">
        <div 
          className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center items-center justify-center p-12" 
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${doctorPatientImage}')` }}
        >
          <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[1px]"></div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between p-8 sm:p-12 bg-[#EEF2FF] relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#B5C2F7]/50 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-40 w-32 h-32 bg-[#C7D2FE]/60 rounded-full blur-xl"></div>

          <div className="flex justify-end">
            <h2 className="text-2xl font-bold tracking-wider text-[#5B6BBF]">MedConecta - Triunfo PE</h2>
          </div>

          <div className="max-w-md w-full mx-auto my-auto bg-[#8090E0] backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#9A9EEB] text-white">
            
            {screen === 'welcome' && (
              <div className="text-center space-y-6">
                <h1 className="text-3xl font-extrabold tracking-wide">BEM-VINDO!</h1>
                <p className="text-xs text-indigo-100 font-semibold uppercase">Gestão Ambulatorial - Triunfo/PE</p>
                
                <div className="space-y-4 pt-2">
                  <button 
                    onClick={() => setScreen('login-patient')}
                    className="w-full py-3.5 bg-white text-[#5B6BBF] font-bold rounded-2xl shadow hover:bg-indigo-50 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 uppercase text-xs tracking-wider cursor-pointer"
                  >
                    PACIENTE
                  </button>
                  <button 
                    onClick={() => setScreen('login-doctor')}
                    className="w-full py-3.5 bg-white text-[#5B6BBF] font-bold rounded-2xl shadow hover:bg-indigo-50 hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 uppercase text-xs tracking-wider cursor-pointer"
                  >
                    MÉDICO
                  </button>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setScreen('register')}
                    className="text-xs text-indigo-100 underline hover:text-white hover:scale-105 transition-all cursor-pointer uppercase font-medium"
                  >
                    Não possui conta? Cadastre-se
                  </button>
                </div>
              </div>
            )}

            {screen === 'register' && (
              <div className="space-y-3">
                <h1 className="text-2xl font-extrabold text-center tracking-wide mb-2 uppercase">CADASTRO</h1>
                <input type="text" placeholder="NOME COMPLETO" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="text" placeholder="CPF" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                  <input type="text" placeholder="RG" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                </div>
                <input type="text" placeholder="DATA DE NASCIMENTO (DD/MM/AAAA)" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <input type="text" placeholder="ENDEREÇO COMPLETO" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="password" placeholder="SENHA" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                  <input type="password" placeholder="REPETIR SENHA" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <button onClick={() => setScreen('welcome')} className="text-xs text-indigo-100 underline hover:text-white cursor-pointer transition-all">Voltar</button>
                  <button 
                    onClick={() => { alert('Cadastro realizado com sucesso!'); setScreen('login-patient'); }} 
                    className="px-6 py-2.5 bg-slate-200 hover:bg-white text-slate-700 text-xs font-bold rounded-2xl shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>CADASTRAR</span> ➔
                  </button>
                </div>
              </div>
            )}

            {screen === 'login-patient' && (
              <div className="space-y-4">
                <h1 className="text-2xl font-extrabold text-center tracking-wide mb-6 uppercase">INICIAR SESSÃO</h1>
                <input type="text" placeholder="CPF" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <input type="password" placeholder="SENHA" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                
                <div className="flex justify-between text-[10px] text-indigo-100 font-semibold pt-1">
                  <button onClick={() => alert('Instruções enviadas para o seu e-mail cadastrado.')} className="hover:underline hover:text-white cursor-pointer uppercase">ESQUECEU A SENHA?</button>
                  <button onClick={() => setScreen('register')} className="hover:underline hover:text-white cursor-pointer uppercase">CADASTRE-SE</button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center space-x-2 text-[10px] text-indigo-100 cursor-pointer uppercase font-semibold hover:text-white transition-all">
                    <input type="checkbox" className="rounded accent-indigo-700 cursor-pointer" defaultChecked />
                    <span>LEMBRAR DO LOGIN</span>
                  </label>
                  <button 
                    onClick={() => { setRole('patient'); setScreen('dashboard'); }}
                    className="px-6 py-2.5 bg-slate-200 hover:bg-white text-slate-700 text-xs font-bold rounded-2xl shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>ENTRAR</span> ➔
                  </button>
                </div>
                <div className="text-center pt-2">
                  <button onClick={() => setScreen('welcome')} className="text-xs text-indigo-100 underline hover:text-white cursor-pointer transition-all">Voltar à tela inicial</button>
                </div>
              </div>
            )}

            {screen === 'login-doctor' && (
              <div className="space-y-4">
                <h1 className="text-2xl font-extrabold text-center tracking-wide mb-6 uppercase">INICIAR SESSÃO</h1>
                <input type="email" placeholder="EMAIL" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <input type="password" placeholder="SENHA" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                
                <div className="flex justify-between text-[10px] text-indigo-100 font-semibold pt-1">
                  <button onClick={() => alert('Instruções enviadas para o seu e-mail cadastrado.')} className="hover:underline hover:text-white cursor-pointer uppercase">ESQUECEU A SENHA?</button>
                  <button onClick={() => setScreen('register')} className="hover:underline hover:text-white cursor-pointer uppercase">CADASTRE-SE</button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center space-x-2 text-[10px] text-indigo-100 cursor-pointer uppercase font-semibold hover:text-white transition-all">
                    <input type="checkbox" className="rounded accent-indigo-700 cursor-pointer" defaultChecked />
                    <span>LEMBRAR DO LOGIN</span>
                  </label>
                  <button 
                    onClick={() => { setRole('doctor'); setScreen('dashboard'); }}
                    className="px-6 py-2.5 bg-slate-200 hover:bg-white text-slate-700 text-xs font-bold rounded-2xl shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>ENTRAR</span> ➔
                  </button>
                </div>
                <div className="text-center pt-2">
                  <button onClick={() => setScreen('welcome')} className="text-xs text-indigo-100 underline hover:text-white cursor-pointer transition-all">Voltar à tela inicial</button>
                </div>
              </div>
            )}

          </div>

          <div className="text-center text-xs text-slate-400">MedConecta Triunfo-PE © 2026</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEF2FF] flex font-sans text-slate-800 relative">
      
      {/* MODAL PARA ADICIONAR NOVA EVOLUÇÃO AO PRONTUÁRIO (SEM SOBRESCREVER OS ANTERIORES) */}
      {modalAtualizarProntuario && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 border border-slate-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-sm font-extrabold text-[#3B4793] uppercase">Adicionar Nova Evolução ao Prontuário</h3>
                <p className="text-[10px] text-slate-500">Paciente: <span className="font-bold text-slate-700">{modalAtualizarProntuario.nome}</span></p>
              </div>
              <button 
                onClick={() => setModalAtualizarProntuario(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdicionarEvolucaoProntuario} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Médico Responsável (Autor)</label>
                <select 
                  value={medicoResponsavelEdicao}
                  onChange={(e) => setMedicoResponsavelEdicao(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                >
                  <option value="DR. EMILIANO FIGUEIRA">DR. EMILIANO FIGUEIRA</option>
                  <option value="DR. FERNANDO ORTEGA">DR. FERNANDO ORTEGA</option>
                  <option value="DRA. JAMILLE BITTENCOURT">DRA. JAMILLE BITTENCOURT</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Novo Histórico / Relato Clínico</label>
                <textarea 
                  rows="3"
                  value={novoHistoricoProntuario}
                  onChange={(e) => setNovoHistoricoProntuario(e.target.value)}
                  placeholder="Descreva a evolução do quadro clínico..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#3B4793] uppercase mb-1">Conduta Médica Atual</label>
                <textarea 
                  rows="3"
                  value={novaCondutaProntuario}
                  onChange={(e) => setNovaCondutaProntuario(e.target.value)}
                  placeholder="Descreva a nova conduta, exames solicitados ou prescrição..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                  required
                ></textarea>
              </div>

              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-900 text-[10px] font-semibold">
                🔒 Nota de Segurança: Os registros anteriores de prontuário e conduta não serão apagados nem sobrescritos. Este novo atendimento será adicionado ao histórico oficial do paciente.
              </div>

              <div className="flex justify-end space-x-2 pt-2">
                <button 
                  type="button"
                  onClick={() => setModalAtualizarProntuario(null)}
                  className="px-4 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl uppercase tracking-wider cursor-pointer"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#7080E0] hover:bg-[#5A6AC8] text-white font-bold rounded-xl uppercase tracking-wider shadow cursor-pointer"
                >
                  Registar Evolução
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL PARA O MÉDICO ABRIR E VER O EXAME RECENTE */}
      {exameSelecionado && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4 border border-slate-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-sm font-extrabold text-[#3B4793] uppercase">Visualização de Exame</h3>
                <p className="text-[10px] text-slate-500">Paciente: <span className="font-bold text-slate-700">{exameSelecionado.paciente}</span></p>
              </div>
              <button 
                onClick={() => setExameSelecionado(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 space-y-1">
                <p><strong className="text-indigo-600">Tipo:</strong> {exameSelecionado.tipo}</p>
                <p><strong className="text-indigo-600">Data de Envio:</strong> {exameSelecionado.data}</p>
                <p><strong className="text-indigo-600">Arquivo Anexado:</strong> {typeof exameSelecionado.arquivo === 'string' ? exameSelecionado.arquivo : exameSelecionado.arquivo.name}</p>
              </div>

              <div>
                <strong className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Descrição / Observações do Paciente:</strong>
                <p className="bg-indigo-50/50 p-3 rounded-2xl text-slate-800 font-medium border border-indigo-100">{exameSelecionado.descricao}</p>
              </div>

              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center space-y-2 bg-slate-50/50">
                <FileText className="w-10 h-10 text-[#7080E0] mx-auto" />
                <p className="text-xs font-bold text-slate-700">Documento pronto para análise clínica</p>
                <p className="text-[10px] text-slate-400">O laudo digital foi carregado com sucesso através do sistema MedConecta Triunfo.</p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button 
                onClick={() => setExameSelecionado(null)}
                className="px-6 py-2.5 bg-[#7080E0] hover:bg-[#5A6AC8] text-white font-bold text-xs rounded-2xl uppercase tracking-wider transition-all cursor-pointer shadow"
              >
                Fechar Exame
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL PARA O MÉDICO SOLICITAR CONSULTA PARA O PACIENTE */}
      {modalSolicitarConsulta && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4 border border-slate-200">
            <div className="flex justify-between items-center border-b pb-3">
              <div>
                <h3 className="text-sm font-extrabold text-[#3B4793] uppercase">Solicitar Consulta para Paciente</h3>
                <p className="text-[10px] text-slate-500">Paciente: <span className="font-bold text-slate-700">{modalSolicitarConsulta.nome}</span></p>
              </div>
              <button 
                onClick={() => setModalSolicitarConsulta(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleMedicoSolicitarConsultaParaPaciente} className="space-y-4 text-xs">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Especialidade / Motivo</label>
                <select 
                  value={especialidadeMedicoSolicita} 
                  onChange={(e) => setEspecialidadeMedicoSolicita(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                >
                  <option value="ONCOLOGIA">ONCOLOGIA</option>
                  <option value="OTORRINOLARINGOLOGIA">OTORRINOLARINGOLOGIA</option>
                  <option value="CLÍNICO GERAL">CLÍNICO GERAL</option>
                  <option value="CARDIOLOGIA">CARDIOLOGIA</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Data Proposta</label>
                  <input 
                    type="date" 
                    value={dataMedicoSolicita}
                    onChange={(e) => setDataMedicoSolicita(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Horário</label>
                  <input 
                    type="time" 
                    value={horarioMedicoSolicita}
                    onChange={(e) => setHorarioMedicoSolicita(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" 
                  />
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-900">
                ℹ️ Ao enviar, a consulta será gerada no perfil do paciente com notificação pendente de confirmação para prevenir faltas.
              </p>

              <div className="flex justify-end space-x-2 pt-2">
                <button 
                  type="button"
                  onClick={() => setModalSolicitarConsulta(null)}
                  className="px-4 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-xl uppercase tracking-wider cursor-pointer"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#7080E0] hover:bg-[#5A6AC8] text-white font-bold rounded-xl uppercase tracking-wider shadow cursor-pointer"
                >
                  Enviar Solicitação
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SIDEBAR */}
      <aside className="w-24 bg-[#7080E0] flex flex-col items-center py-6 justify-between shadow-lg z-20 shrink-0">
        <div className="space-y-6 flex flex-col items-center w-full">
          <div 
            className="bg-white px-2 py-1.5 rounded-xl text-[#7080E0] font-black text-[9px] tracking-tight text-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 transition-all duration-200" 
            onClick={() => setActiveTab('home')}
          >
            TRIUNFO<br/>SAÚDE
          </div>

          <nav className="space-y-3 flex flex-col items-center w-full">
            <button 
              onClick={() => setActiveTab('home')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'home' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <Home className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">Principal</span>
            </button>

            {role === 'doctor' && (
              <button 
                onClick={() => setActiveTab('pacientes')} 
                className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'pacientes' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
              >
                <Users className="w-4 h-4 mb-1" />
                <span className="text-[9px] tracking-tighter uppercase">Pacientes</span>
              </button>
            )}

            {role === 'patient' && (
              <button 
                onClick={() => setActiveTab('booking')} 
                className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'booking' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
              >
                <CalendarIcon className="w-4 h-4 mb-1" />
                <span className="text-[9px] tracking-tighter uppercase">Marcação</span>
              </button>
            )}

            <button 
              onClick={() => setActiveTab('consultas')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'consultas' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <Mail className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">Consultas</span>
            </button>

            <button 
              onClick={() => setActiveTab('exams')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'exams' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <FileText className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">{role === 'doctor' ? 'Laudos' : 'Exames'}</span>
            </button>

            <button 
              onClick={() => setActiveTab('chat')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'chat' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <MessageSquare className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">Chatbot</span>
            </button>
          </nav>
        </div>

        <div className="space-y-3 flex flex-col items-center w-full">
          <button 
            onClick={() => setActiveTab('help')} 
            className={`w-20 py-2 px-1 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'help' ? 'bg-white text-[#7080E0] font-bold shadow-md' : 'text-indigo-100 hover:text-white hover:bg-[#6070D0]'}`}
          >
            <HelpCircle className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] tracking-tighter uppercase">Ajuda</span>
          </button>

          <button 
            onClick={() => setScreen('welcome')} 
            className="w-20 py-2 px-1 rounded-xl flex flex-col items-center justify-center text-indigo-100 hover:text-white hover:bg-[#6070D0] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] tracking-tighter uppercase">Sair</span>
          </button>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* CABEÇALHO */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs focus:outline-none focus:border-[#7080E0] focus:ring-1 focus:ring-[#7080E0] transition-all"
            />
          </div>

          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex flex-col items-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 ${activeTab === 'settings' ? 'text-[#7080E0] font-bold' : 'text-slate-600 hover:text-[#7080E0]'}`}
            >
              <Settings className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-tighter">Configurações</span>
            </button>

            <div className="flex flex-col items-center text-slate-600 hover:text-[#7080E0] transition-all cursor-pointer hover:scale-110 active:scale-95">
              <Bell className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-tighter">Notificações</span>
            </div>

            <div 
              onClick={() => setActiveTab('settings')}
              className="flex flex-col items-center text-slate-600 hover:text-[#7080E0] transition-all cursor-pointer hover:scale-110 active:scale-95"
            >
              <div className="w-6 h-6 bg-indigo-100 text-[#7080E0] rounded-full flex items-center justify-center font-bold shadow-sm mb-1">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="text-[9px] uppercase tracking-tighter">Perfil</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* LEMBRETE DINÂMICO DE PROXIMIDADE PARA O PACIENTE */}
          {role === 'patient' && activeTab !== 'help' && consultasPaciente.length > 0 && (() => {
            const prox = consultasPaciente[0];
            const dias = calcularDiasRestantes(prox.dataOriginal);
            if (dias === null) return null;

            let mensagemAlerta = "";
            let corFundo = "bg-indigo-50 border-indigo-200 text-[#3B4793]";
            
            if (dias < 0) {
              mensagemAlerta = `A sua consulta com o(a) ${prox.medico} ocorreu há ${Math.abs(dias)} dia(s).`;
            } else if (dias === 0) {
              mensagemAlerta = `⚠️ É HOJE! A sua consulta com o(a) ${prox.medico} (${prox.especialidade}) é hoje às ${prox.horario}! Não falte para evitar vagas ociosas.`;
              corFundo = "bg-amber-50 border-amber-300 text-amber-900";
            } else if (dias === 1) {
              mensagemAlerta = `🔔 Lembrete Municipal: A sua consulta com o(a) ${prox.medico} é AMANHÃ às ${prox.horario}. Confirme presença abaixo!`;
              corFundo = "bg-blue-50 border-blue-200 text-blue-900";
            } else {
              mensagemAlerta = `⏳ Falta(m) ${dias} dia(s) para a sua próxima consulta (${prox.especialidade} em Triunfo-PE). Mantenha seus dados atualizados!`;
            }

            return (
              <div className={`p-4 rounded-2xl border shadow-sm flex items-center justify-between ${corFundo}`}>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 shrink-0 animate-pulse" />
                  <p className="text-xs font-bold">{mensagemAlerta}</p>
                </div>
                {prox.statusPresenca.includes('Pendente') && (
                  <button 
                    onClick={() => confirmarPresencaConsulta(prox.id)}
                    className="px-4 py-1.5 bg-[#7080E0] hover:bg-[#5A6AC8] text-white text-[11px] font-bold rounded-xl shadow cursor-pointer uppercase shrink-0"
                  >
                    Confirmar Presença
                  </button>
                )}
              </div>
            );
          })()}

          {/* LEMBRETE DINÂMICO DE PROXIMIDADE PARA O MÉDICO (NA TELA PRINCIPAL) */}
          {role === 'doctor' && activeTab !== 'help' && consultasMedico.length > 0 && (() => {
            const proxDoc = consultasMedico[0];
            const diasDoc = calcularDiasRestantes(proxDoc.dataOriginal);
            if (diasDoc === null) return null;

            let mensagemDoc = "";
            let estiloDoc = "bg-blue-50 border-blue-200 text-blue-900";

            if (diasDoc === 0) {
              mensagemDoc = `🚨 ATENÇÃO DOUTOR: A sua próxima consulta é HOJE com o(a) paciente ${proxDoc.paciente} (${proxDoc.especialidade}) às ${proxDoc.horario}! Prontuário pronto abaixo.`;
              estiloDoc = "bg-amber-50 border-amber-300 text-amber-900";
            } else if (diasDoc === 1) {
              mensagemDoc = `🔔 Lembrete de Agenda: Próxima consulta amanhã às ${proxDoc.horario} com ${proxDoc.paciente}.`;
            } else {
              mensagemDoc = `📅 Próxima consulta em ${diasDoc} dia(s) (${proxDoc.data} às ${proxDoc.horario}) com ${proxDoc.paciente}.`;
            }

            return (
              <div className={`p-4 rounded-2xl border shadow-sm flex items-center space-x-3 ${estiloDoc}`}>
                <Clock className="w-5 h-5 shrink-0 animate-pulse" />
                <p className="text-xs font-bold">{mensagemDoc}</p>
              </div>
            );
          })()}

          {/* ABA DE AJUDA & FALE CONOSCO (COM NOVA PERGUNTA NO FAQ) */}
          {activeTab === 'help' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                <div>
                  <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">CENTRAL DE AJUDA &amp; SUPORTE — TRIUNFO-PE</h2>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-700 uppercase">Perguntas Frequentes (FAQ)</h3>
                  
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <p className="text-xs font-bold text-[#7080E0]">Por que devo confirmar ou cancelar minha consulta com antecedência?</p>
                    <p className="text-xs text-slate-600">A confirmação e o cancelamento antecipado evitam o absenteísmo (faltas sem aviso), permitindo que a vaga seja direcionada imediatamente a outro cidadão na fila de espera do município.</p>
                  </div>

                  <div className="p-4 bg-[#7080E0]/10 rounded-2xl border border-[#7080E0]/30 space-y-1">
                    <p className="text-xs font-bold text-[#3B4793]">Você tem alguma dificuldade para comparecer à consulta? Fale conosco!</p>
                    <p className="text-xs text-slate-700">Se tiver imprevistos de transporte, saúde ou incompatibilidade de horário, entre em contato antecipadamente com a Secretaria de Saúde pelos canais abaixo para reagendarmos o seu atendimento e liberarmos a sua vaga.</p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                    <p className="text-xs font-bold text-[#7080E0]">O que fazer se o médico solicitar uma consulta para mim?</p>
                    <p className="text-xs text-slate-600">Acesse a aba "Consultas", verifique a notificação de marcação solicitada pelo médico e clique em "Confirmar" ou "Cancelar Vaga".</p>
                  </div>
                </div>

                {/* FALE CONOSCO COM NÚMERO FICTÍCIO */}
                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">Fale Conosco — Secretaria Municipal de Saúde</h3>
                  <p className="text-xs text-slate-600">Atendimento de segunda a sexta-feira, das 08:00 às 17:00.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 bg-indigo-50/60 border border-indigo-100 rounded-2xl flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#7080E0] text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">Central Telefônica (Fictícia)</p>
                        <p className="text-xs font-extrabold text-[#3B4793]">0800 081-2026</p>
                      </div>
                    </div>

                    <div className="p-4 bg-emerald-50/60 border border-emerald-100 rounded-2xl flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-bold">WhatsApp Saúde Triunfo</p>
                        <p className="text-xs font-extrabold text-emerald-800">(87) 99123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              <h1 className="text-xl font-extrabold tracking-wider text-[#3B4793] uppercase">CONFIGURAÇÕES</h1>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4 h-fit">
                  <button 
                    onClick={() => setConfigSubTab('account')}
                    className={`w-full text-left py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:pl-6 ${configSubTab === 'account' ? 'border-l-4 border-[#7080E0] text-[#7080E0] bg-indigo-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    MINHA CONTA
                  </button>
                </div>

                <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  {configSubTab === 'account' && (
                    <div className="space-y-6">
                      <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">DETALHES PESSOAIS</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">NOME COMPLETO*</label>
                          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">EMAIL*</label>
                          <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'settings' && activeTab !== 'help' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* COLUNA ESQUERDA */}
              <div className="lg:col-span-2 space-y-6">
                
                {activeTab === 'home' && (
                  role === 'doctor' ? (
                    <>
                      <div className="bg-[#7080E0] text-white p-6 rounded-3xl shadow-md relative overflow-hidden">
                        <div className="space-y-2 z-10">
                          <h2 className="text-xl font-extrabold tracking-wide">PAINEL MÉDICO — TRIUNFO/PE</h2>
                          <p className="text-xs text-indigo-100 font-semibold">PRONTUÁRIOS CLÍNICOS E CONTROLE DE ABSENTEÍSMO</p>
                          <p className="text-xs text-white font-medium pt-2">AINDA RESTAM 4 PACIENTES PARA HOJE!</p>
                        </div>
                      </div>

                      {/* PRONTUÁRIOS PRONTOS PARA O MÉDICO LER */}
                      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                        <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          Prontuários Prontos para Consulta de Hoje
                        </h3>
                        <div className="space-y-3">
                          {consultasMedico.map((item) => (
                            <div key={item.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                              <div className="flex justify-between items-center">
                                <p className="text-xs font-bold text-blue-600 uppercase">Paciente: {item.paciente} — {item.especialidade}</p>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.statusPresenca === 'Confirmado' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                  {item.statusPresenca}
                                </span>
                              </div>
                              <p className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                                <strong className="text-[#3B4793]">Prontuário / Histórico:</strong> {item.prontuario}
                              </p>
                              <p className="text-[10px] text-slate-500 italic">Queixa principal: {item.queixa} (Horário: {item.horario})</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-[#7080E0] text-white p-6 rounded-3xl shadow-md relative overflow-hidden">
                        <div className="space-y-2 z-10">
                          <h2 className="text-xl font-extrabold">OLÁ, PACIENTE</h2>
                          <p className="text-xs text-indigo-100 font-semibold">REDE MUNICIPAL DE SAÚDE DE TRIUNFO-PE</p>
                          <div className="pt-2">
                            <span className="text-[10px] bg-[#5A6AC8] px-2.5 py-1 rounded-md uppercase font-bold">SUA PRÓXIMA CONSULTA</span>
                            
                            {consultasPaciente.slice(0, 1).map((item) => (
                              <div key={item.id} className="mt-3 bg-white text-slate-800 p-3.5 rounded-2xl flex items-center justify-between shadow">
                                <div>
                                  <p className="text-xs font-bold text-[#7080E0]">{item.hospital}</p>
                                  <p className="text-[10px] text-slate-500">{item.endereco}</p>
                                </div>
                                <div className="text-right border-l pl-4 border-slate-100">
                                  <p className="text-xs font-bold">{item.medico}</p>
                                  <p className="text-[10px] text-slate-400 uppercase font-semibold">{item.especialidade}</p>
                                  <div className="flex gap-2 mt-1 text-[11px] font-bold text-[#7080E0]">
                                    <span>{item.horario}</span>
                                    <span>{item.sala}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* HISTÓRICO DE SAÚDE E TAXA DE ABSENTEÍSMO DO PACIENTE */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider flex items-center">
                            <Activity className="w-4 h-4 mr-2 text-[#7080E0]" />
                            Meu Histórico de Saúde
                          </h3>
                          {consultasPaciente.map((item) => (
                            <div key={item.id} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                              <p className="text-xs font-bold text-slate-800">{item.especialidade} ({item.medico})</p>
                              <p className="text-xs text-slate-600">{item.historicoSaude}</p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-3">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider flex items-center">
                            <ShieldCheck className="w-4 h-4 mr-2 text-emerald-600" />
                            Taxa de Absenteísmo (Meu Perfil)
                          </h3>
                          {consultasPaciente.map((item) => (
                            <div key={item.id} className="p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2">
                              <p className="text-xs font-extrabold text-emerald-900">Status de Comparência:</p>
                              <p className="text-sm font-black text-emerald-700">{item.taxaAbsenteismoPessoal}</p>
                              <p className="text-[10px] text-emerald-800">Obrigado por confirmar e comparecer! Isso ajuda a zerar as filas na rede municipal de Triunfo.</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )
                )}

                {/* ABA DE PACIENTES COM HISTÓRICO ACUMULATIVO E IMUTÁVEL DE EVOLUÇÕES CLÍNICAS */}
                {activeTab === 'pacientes' && role === 'doctor' && (
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">CADASTRO E HISTÓRICO DE PRONTUÁRIOS — TRIUNFO-PE</h2>
                      <p className="text-xs text-slate-500 mt-1">Os registros anteriores de prontuários e condutas são preservados com segurança, impedindo sobrescrições indevidas.</p>
                    </div>

                    <div className="space-y-4">
                      {listaPacientesMedico.map((pac) => (
                        <div key={pac.id} className="p-5 bg-slate-50 border border-slate-200 rounded-3xl space-y-3 shadow-sm">
                          <div className="flex justify-between items-center border-b pb-2">
                            <div>
                              <p className="text-xs font-extrabold text-[#3B4793] uppercase">{pac.nome} <span className="text-slate-500 font-normal">({pac.idade})</span></p>
                              <p className="text-[10px] text-slate-500 font-semibold">Cartão SUS: {pac.cartaoSUS} | Tel: {pac.telefone}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => abrirModalAtualizarProntuario(pac)}
                                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-xl shadow cursor-pointer uppercase transition-all flex items-center space-x-1"
                              >
                                <Edit3 className="w-3 h-3 mr-0.5" />
                                <span>+ Nova Evolução / Prontuário</span>
                              </button>
                              <button 
                                onClick={() => setModalSolicitarConsulta(pac)}
                                className="px-3 py-1.5 bg-[#7080E0] hover:bg-[#5A6AC8] text-white text-[10px] font-bold rounded-xl shadow cursor-pointer uppercase transition-all"
                              >
                                + Solicitar Consulta
                              </button>
                            </div>
                          </div>

                          {/* BLOCO DE DADOS CADASTRAIS (CPF, RG, NASCIMENTO, ENDEREÇO) */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-white p-3 rounded-2xl border border-slate-100 text-[11px]">
                            <div>
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">CPF:</span>
                              <span className="font-semibold text-slate-700">{pac.cpf}</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">RG:</span>
                              <span className="font-semibold text-slate-700">{pac.rg}</span>
                            </div>
                            <div>
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">Data de Nasc.:</span>
                              <span className="font-semibold text-slate-700">{pac.dataNascimento}</span>
                            </div>
                            <div className="col-span-2 md:col-span-4 pt-1 border-t border-slate-100">
                              <span className="text-[9px] text-slate-400 font-bold uppercase block">Endereço Completo:</span>
                              <span className="font-semibold text-slate-700">{pac.endereco}</span>
                            </div>
                          </div>

                          {/* HISTÓRICO DE EVOLUÇÕES CLÍNICAS (NÃO SOBRESCREVE) */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 space-y-3">
                              <div className="flex items-center space-x-1 text-[#3B4793] font-bold uppercase text-[10px]">
                                <History className="w-3.5 h-3.5 mr-1" />
                                <span>Evoluções Clínicas e Condutas Anteriores ({pac.historicoEvolucoes.length}):</span>
                              </div>

                              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                                {pac.historicoEvolucoes.map((evo, index) => (
                                  <div key={evo.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                                    <div className="flex justify-between items-center text-[10px] text-slate-400 border-b pb-1">
                                      <span className="font-bold text-[#7080E0]">Registro #{pac.historicoEvolucoes.length - index}</span>
                                      <span>{evo.dataHora}</span>
                                    </div>
                                    <p className="text-slate-700"><strong className="text-[#3B4793]">Prontuário:</strong> {evo.textoHistorico}</p>
                                    <p className="text-slate-800 bg-indigo-50/60 p-2 rounded-lg border border-indigo-100"><strong className="text-indigo-900">Conduta:</strong> {evo.conduta}</p>
                                    <p className="text-[10px] text-right font-bold text-slate-500 pt-1">Dr(a). Responsável: {evo.medico}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-white p-3.5 rounded-2xl border border-slate-100 space-y-1 h-fit">
                              <p className="text-[10px] font-bold text-emerald-700 uppercase">Estatísticas e Assiduidade:</p>
                              <p className="text-slate-600">Condição atual: <strong className="text-slate-800">{pac.condicao}</strong></p>
                              <p className="text-slate-600">Última consulta: {pac.ultimasConsultas}</p>
                              <p className="text-emerald-800 font-bold pt-1">Taxa de Presença: {pac.taxaPresenca}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'booking' && role === 'patient' && (
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">NOVA SOLICITAÇÃO DE MARCAÇÃO DE CONSULTA — TRIUNFO-PE</h2>
                      <p className="text-xs text-slate-500 mt-1">Preencha os dados abaixo para solicitar o seu agendamento ambulatorial na rede municipal.</p>
                    </div>

                    <form onSubmit={handleAgendarConsulta} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Hospital / Unidade de Saúde</label>
                        <select 
                          value={hospitalSelect} 
                          onChange={(e) => setHospitalSelect(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                        >
                          <option value="UNIDADE MISTA DE TRIUNFO-PE">UNIDADE MISTA DE TRIUNFO-PE</option>
                          <option value="HOSPITAL UNIV. OSWALDO CRUZ">HOSPITAL UNIV. OSWALDO CRUZ</option>
                          <option value="HOSPITAL GETÚLIO VARGAS">HOSPITAL GETÚLIO VARGAS</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Especialidade</label>
                          <select 
                            value={especialidadeSelect} 
                            onChange={(e) => setEspecialidadeSelect(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                          >
                            <option value="ONCOLOGIA">ONCOLOGIA</option>
                            <option value="OTORRINO">OTORRINO</option>
                            <option value="CLÍNICO GERAL">CLÍNICO GERAL</option>
                            <option value="CARDIOLOGIA">CARDIOLOGIA</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Médico Responsável</label>
                          <select 
                            value={medicoSelect} 
                            onChange={(e) => setMedicoSelect(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                          >
                            <option value="DR. EMILIANO FIGUEIRA">DR. EMILIANO FIGUEIRA</option>
                            <option value="DR. FERNANDO ORTEGA">DR. FERNANDO ORTEGA</option>
                            <option value="DRA. JAMILLE BITTENCOURT">DRA. JAMILLE BITTENCOURT</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Data Desejada</label>
                          <input 
                            type="date" 
                            value={dataConsulta}
                            onChange={(e) => setDataConsulta(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" 
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Horário</label>
                          <input 
                            type="time" 
                            value={horarioConsulta}
                            onChange={(e) => setHorarioConsulta(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" 
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Queixa Principal / Motivo da Consulta</label>
                        <textarea 
                          rows="3"
                          placeholder="Descreva brevemente os sintomas ou o motivo da marcação..."
                          value={queixaConsulta}
                          onChange={(e) => setQueixaConsulta(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                        ></textarea>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button 
                          type="submit"
                          className="px-8 py-3 bg-[#7080E0] hover:bg-[#5A6AC8] text-white font-bold text-xs rounded-2xl uppercase tracking-wider transition-all shadow cursor-pointer"
                        >
                          Solicitar Marcação de Consulta
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {activeTab === 'exams' && (
                  <div className="space-y-6">
                    {role === 'patient' ? (
                      <>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                          <div>
                            <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">ENVIO DE EXAMES RECENTES</h2>
                            <p className="text-xs text-slate-500 mt-1">Envie laudos, resultados de exames de sangue ou imagens para a avaliação do seu médico em Triunfo.</p>
                          </div>

                          <form onSubmit={handleEnviarExame} className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Tipo de Exame</label>
                              <select 
                                value={tipoExame} 
                                onChange={(e) => setTipoExame(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                              >
                                <option value="Exame de Sangue">Exame de Sangue</option>
                                <option value="Exame de Imagem (Raio-X / Ressonância)">Exame de Imagem (Raio-X / Ressonância)</option>
                                <option value="Biópsia / Anatomopatológico">Biópsia / Anatomopatológico</option>
                                <option value="Outros Laudos Médicos">Outros Laudos Médicos</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Descrição / Observações</label>
                              <input 
                                type="text" 
                                placeholder="Ex: Hemograma completo solicitado pelo Dr. Emiliano"
                                value={descricaoExame}
                                onChange={(e) => setDescricaoExame(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" 
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Selecionar Arquivo (PDF ou Imagem)</label>
                              <input 
                                type="file" 
                                onChange={(e) => setNomeArquivo(e.target.files[0])}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-2.5 text-xs focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#7080E0] file:text-white hover:file:bg-[#5A6AC8] cursor-pointer" 
                              />
                            </div>

                            <div className="pt-2 flex justify-end">
                              <button 
                                type="submit"
                                className="px-8 py-3 bg-[#7080E0] hover:bg-[#5A6AC8] text-white font-bold text-xs rounded-2xl uppercase tracking-wider transition-all shadow cursor-pointer flex items-center space-x-2"
                              >
                                <Upload className="w-4 h-4 mr-1" />
                                <span>Enviar Exame</span>
                              </button>
                            </div>
                          </form>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">Histórico de Exames Enviados</h3>
                          
                          <div className="space-y-3">
                            {listaExames.map((exame) => (
                              <div key={exame.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                                <div className="space-y-1">
                                  <p className="text-xs font-bold text-blue-600">{exame.tipo}</p>
                                  <p className="text-xs font-semibold text-slate-800">{exame.descricao}</p>
                                  <p className="text-[10px] text-slate-500">Enviado em: {exame.data} | Arquivo: {typeof exame.arquivo === 'string' ? exame.arquivo : exame.arquivo.name}</p>
                                </div>
                                <div className="text-right">
                                  <span className="px-3 py-1 bg-indigo-50 text-[#7080E0] text-[10px] font-bold rounded-full uppercase">
                                    {exame.status}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">Laudos e Pareceres Recebidos do Médico</h3>
                          
                          <div className="space-y-3">
                            {listaLaudosMedico.map((laudo) => (
                              <div key={laudo.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                                <div className="flex justify-between items-center">
                                  <p className="text-xs font-bold text-[#7080E0]">{laudo.titulo}</p>
                                  <span className="text-[10px] text-slate-400 font-semibold">{laudo.data}</span>
                                </div>
                                <p className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-100">{laudo.conteudo}</p>
                                <p className="text-[10px] text-slate-500 text-right font-bold">Emitido por: {laudo.medico}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                          <div>
                            <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">EMITIR LAUDO / PARECER MÉDICO</h2>
                            <p className="text-xs text-slate-500 mt-1">Preencha o parecer técnico ou prescrição para enviar ao paciente selecionado.</p>
                          </div>

                          <form onSubmit={handleEnviarLaudo} className="space-y-4">
                            <div>
                              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Selecionar Paciente</label>
                              <select 
                                value={pacienteSelecionadoLaudo} 
                                onChange={(e) => setPacienteSelecionadoLaudo(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                              >
                                <option value="FERNANDA SILVA">FERNANDA SILVA</option>
                                <option value="FELIPE OLIVEIRA">FELIPE OLIVEIRA</option>
                                <option value="MARIA CLARA SOUZA">MARIA CLARA SOUZA</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Título do Documento</label>
                              <input 
                                type="text" 
                                value={tituloLaudo}
                                onChange={(e) => setTituloLaudo(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]" 
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">Conteúdo do Laudo / Parecer</label>
                              <textarea 
                                rows="4"
                                placeholder="Escreva o parecer médico, orientações ou prescrição..."
                                value={conteudoLaudo}
                                onChange={(e) => setConteudoLaudo(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0]"
                              ></textarea>
                            </div>

                            <div className="pt-2 flex justify-end">
                              <button 
                                type="submit"
                                className="px-8 py-3 bg-[#7080E0] hover:bg-[#5A6AC8] text-white font-bold text-xs rounded-2xl uppercase tracking-wider transition-all shadow cursor-pointer flex items-center space-x-2"
                              >
                                <Stethoscope className="w-4 h-4 mr-1" />
                                <span>Enviar Laudo ao Paciente</span>
                              </button>
                            </div>
                          </form>
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">Exames Recentes Enviados pelos Pacientes</h3>
                          
                          <div className="space-y-3">
                            {listaExames.map((exame) => (
                              <div key={exame.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                                <div className="space-y-1">
                                  <p className="text-xs font-bold text-indigo-600 uppercase">Paciente: {exame.paciente}</p>
                                  <p className="text-xs font-extrabold text-slate-800">{exame.tipo} — <span className="font-normal text-slate-600">{exame.descricao}</span></p>
                                  <p className="text-[10px] text-slate-500">Data de envio: {exame.data} | Arquivo: {typeof exame.arquivo === 'string' ? exame.arquivo : exame.arquivo.name}</p>
                                </div>
                                <div>
                                  <button 
                                    onClick={() => setExameSelecionado(exame)}
                                    className="px-4 py-2 bg-[#7080E0] hover:bg-[#5A6AC8] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm flex items-center space-x-1"
                                  >
                                    <Eye className="w-3.5 h-3.5 mr-1" />
                                    <span>Abrir Exame</span>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {activeTab === 'consultas' && (
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">
                        {role === 'doctor' ? 'Agenda de Atendimentos do Médico' : 'Minhas Consultas e Notificações de Marcação'}
                      </h2>
                      {role === 'patient' && (
                        <button 
                          onClick={() => setActiveTab('booking')}
                          className="px-4 py-2 bg-[#7080E0] hover:bg-[#5A6AC8] text-white text-xs font-bold rounded-xl uppercase tracking-wider transition-all shadow cursor-pointer"
                        >
                          + Solicitar Nova Marcação
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      {(role === 'doctor' ? consultasMedico : consultasPaciente).map((item) => (
                        <div key={item.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-blue-600">{item.hospital}</p>
                            <p className="text-xs font-semibold text-slate-800">{item.especialidade} — {item.horario}</p>
                            <p className="text-[10px] text-slate-500">Data: {item.data} | Local: {item.sala || "SALA 043"}</p>
                            <p className="text-[10px] text-slate-600 italic">Queixa / Motivo: {item.queixa}</p>
                            <p className="text-[10px] font-bold text-indigo-700 uppercase">
                              Estado: {item.statusPresenca}
                            </p>
                          </div>

                          <div className="text-right flex flex-col items-end space-y-2">
                            <span className="text-xs font-bold text-slate-700">
                              {role === 'doctor' ? `PACIENTE: ${item.paciente}` : `MÉDICO: ${item.medico}`}
                            </span>

                            {role === 'patient' && !item.statusPresenca.includes('Cancelado') && (
                              <div className="flex gap-2">
                                {item.statusPresenca !== 'Confirmado' && (
                                  <button 
                                    onClick={() => confirmarPresencaConsulta(item.id)}
                                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-bold rounded-xl shadow cursor-pointer uppercase"
                                  >
                                    Confirmar
                                  </button>
                                )}
                                <button 
                                  onClick={() => cancelarConsulta(item.id)}
                                  className="px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-700 text-[10px] font-bold rounded-xl shadow cursor-pointer uppercase"
                                >
                                  Cancelar Vaga
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'chat' && (
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4 h-[400px] flex flex-col">
                    <h2 className="text-sm font-bold text-[#3B4793] uppercase tracking-wider">Assistente Virtual MedConecta Triunfo</h2>
                    <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 overflow-y-auto text-xs text-slate-600">
                      Olá! Como posso ajudar você hoje com as suas marcações ou dúvidas sobre o atendimento na rede municipal de Triunfo-PE?
                    </div>
                    <div className="flex gap-2">
                      <input type="text" placeholder="Escreva a sua mensagem..." className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-2.5 text-xs focus:outline-none" />
                      <button className="bg-[#7080E0] text-white px-4 rounded-2xl text-xs font-bold uppercase">Enviar</button>
                    </div>
                  </div>
                )}

              </div>

              {/* COLUNA DIREITA (CALENDÁRIO E ALERTAS) */}
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 uppercase">
                    <span>&lt;</span>
                    <span>CALENDÁRIO — Out 2026</span>
                    <span>&gt;</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-slate-400">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-slate-700">
                    <span className="text-slate-300">27</span><span className="text-slate-300">28</span><span className="text-slate-300">29</span><span className="text-slate-300">30</span><span>1</span><span>2</span><span>3</span>
                    <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                    <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
                    <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
                    <span className="bg-slate-900 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto font-bold">25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 space-y-3">
                  <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">ALERTAS MUNICIPAIS</h3>
                  <div className="space-y-2 text-[11px] text-slate-600">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 font-medium">
                      DR. EMILIANO FIGUEIRA CONFIRMOU A CONSULTA.
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 font-medium">
                      CAMPANHA: "NÃO FALTE À CONSULTA" REDUZIU O ABSENTEÍSMO EM 15%.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </main>
      </div>
    </div>
  );
}