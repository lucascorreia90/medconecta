# 🏥 MedConecta — Gestão Ambulatorial e Controle de Absenteísmo
**Projeto Tópicos Integradores — Análise e Desenvolvimento de Sistemas (ADS  ) Uninassau **  
**Local de Aplicação:** Unidade Mista de Triunfo-PE / Rede Municipal de Saúde

Alunos: 
Isabelle félix - 01814934

Lucas Vinicius Moura Correia e Silva - 01780372

Leonardo Aurelio Godoi Soares - 01042002

Geovanny Marcelino da Silva - 01731076

Thiago Henrique de Andrade Silva - 01764230

---

## 🎯 Objetivo do Trabalho
O **MedConecta** é uma aplicação web desenvolvida para otimizar o agendamento ambulatorial e combater a alta taxa de **absenteísmo** (faltas não justificadas a consultas e exames) na rede pública de saúde do município de **Triunfo - PE**.

### 💡 Justificativa e Problemática
A ausência de pacientes a consultas agendadas gera vagas ociosas, aumenta o tempo de espera na fila da regulação municipal e desperdiça recursos públicos da saúde. O objetivo deste projeto é oferecer uma interface intuitiva e responsiva que conecte cidadãos e profissionais de saúde, permitindo:
- **Confirmação e cancelamento prévio** de consultas para reordenamento de vagas na fila de espera.
- **Transparência e acompanhamento** das taxas de assiduidade do próprio paciente.
- **Comunicação direta** entre a equipe médica e os munícipes (solicitação de consultas, envio de laudos e exames).
- **Acompanhamento clínico imutável** com histórico completo de prontuários e condutas médicas.

---

## 🚀 Funcionalidades Principais

### 🧑‍⚕️ Painel do Médico
- **Histórico Imutável de Prontuários (Evolução Clínica):** Cada nova atualização gera um registo temporal único, registando a data/hora e o médico autor sem sobrescrever diagnósticos ou condutas anteriores.
- **Registro de Conduta Médica:** Campo dedicado para detalhamento de condutas, prescrições e orientações pós-atendimento.
- **Solicitação Direta de Consultas:** Possibilidade de o médico agendar/solicitar um retorno ou consulta especializada diretamente para o paciente.
- **Emissão de Laudos e Pareceres:** Envio de pareceres técnicos e prescrições diretamente para o perfil do munícipe.
- **Visualização de Exames Anexados:** Acesso rápido aos exames enviados previamente pelos pacientes (PDF/Imagens).

### 👤 Painel do Paciente
- **Confirmação e Cancelamento de Vagas:** Notificações dinâmicas e lembretes para confirmar presença ou liberar a vaga antecipadamente.
- **Solicitação de Agendamento:** Interface para marcação de consultas por especialidade, hospital e médico.
- **Envio de Exames:** Anexo de laudos e resultados para análise clínica prévia.
- **Acompanhamento de Assiduidade:** Indicadores do histórico pessoal de presença do munícipe.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React + Vite
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Controle de Versão:** Git & GitHub

---

## ⚙️ Guia Passo a Passo: Como Instalar e Executar o Projeto

Para executar esta aplicação na tua máquina local, certifique-se de que tenha o **Node.js** e o **Git** instalados no teu computador. Segue o procedimento detalhado abaixo através do terminal:

### 1. Clonar o Repositório
Abre o terminal (CMD, PowerShell ou Git Bash) e executa o seguinte comando para descarregar o código fonte do projeto para a tua máquina:
```bash
git clone [https://github.com/lucascorreia90/medconecta.git](https://github.com/lucascorreia90/medconecta.git)
