import React, { useState } from 'react';
import { 
  Home, Calendar as CalendarIcon, Mail, MessageSquare, HelpCircle, 
  LogOut, Settings, Bell, User, Search, Check, X, Send, Image, Mic 
} from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [role, setRole] = useState('patient'); 
  const [activeTab, setActiveTab] = useState('home');
  const [configSubTab, setConfigSubTab] = useState('account'); 

  const [emailNotif, setEmailNotif] = useState(true);
  const [phoneNotif, setPhoneNotif] = useState(true);

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
            <h2 className="text-2xl font-bold tracking-wider text-[#5B6BBF]">MedConecta</h2>
          </div>

          <div className="max-w-md w-full mx-auto my-auto bg-[#8090E0] backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#9A9EEB] text-white">
            
            {screen === 'welcome' && (
              <div className="text-center space-y-6">
                <h1 className="text-3xl font-extrabold tracking-wide">BEM VINDO!</h1>
                <p className="text-xs text-indigo-100 font-semibold uppercase">Escolha uma opção:</p>
                
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
              <div className="space-y-4">
                <h1 className="text-2xl font-extrabold text-center tracking-wide mb-4 uppercase">CADASTRO</h1>
                <input type="text" placeholder="NOME COMPLETO" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <input type="text" placeholder="CPF" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                <div className="grid grid-cols-2 gap-2">
                  <input type="password" placeholder="SENHA" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                  <input type="password" placeholder="REPETIR A SENHA" className="w-full bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                </div>
                <input type="text" placeholder="DATA DE NASC" className="w-1/2 bg-white text-slate-800 placeholder-slate-400 text-xs p-3.5 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BBF] transition-all" />
                
                <div className="flex justify-between items-center pt-2">
                  <button onClick={() => setScreen('welcome')} className="text-xs text-indigo-100 underline hover:text-white cursor-pointer transition-all">Voltar</button>
                  <button 
                    onClick={() => setScreen('login-patient')} 
                    className="px-6 py-2.5 bg-slate-200 hover:bg-white text-slate-700 text-xs font-bold rounded-2xl shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center space-x-1 cursor-pointer"
                  >
                    <span>ENTRAR</span> ➔
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

          <div className="text-center text-xs text-slate-400">MedConecta © 2026</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EEF2FF] flex font-sans text-slate-800">
      
      {/* SIDEBAR COM NOMES EMBAIXO DOS ÍCONES */}
      <aside className="w-24 bg-[#7080E0] flex flex-col items-center py-6 justify-between shadow-lg z-20 shrink-0">
        <div className="space-y-6 flex flex-col items-center w-full">
          <div 
            className="bg-white px-2 py-1.5 rounded-xl text-[#7080E0] font-black text-[9px] tracking-tight text-center cursor-pointer shadow-sm hover:scale-105 active:scale-95 transition-all duration-200" 
            onClick={() => setActiveTab('home')}
          >
            MED<br/>CONECTA
          </div>

          <nav className="space-y-4 flex flex-col items-center w-full">
            <button 
              onClick={() => setActiveTab('home')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'home' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <Home className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">Principal</span>
            </button>

            <button 
              onClick={() => setActiveTab('booking')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'booking' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <CalendarIcon className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">Marcação</span>
            </button>

            <button 
              onClick={() => setActiveTab('consultas')} 
              className={`w-20 py-2.5 px-1 rounded-xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 ${activeTab === 'consultas' ? 'bg-white text-[#7080E0] shadow-md font-bold' : 'text-indigo-100 hover:bg-[#6070D0]'}`}
            >
              <Mail className="w-4 h-4 mb-1" />
              <span className="text-[9px] tracking-tighter uppercase">Consultas</span>
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
            onClick={() => alert('Central de Ajuda MedConecta')} 
            className="w-20 py-2 px-1 rounded-xl flex flex-col items-center justify-center text-indigo-100 hover:text-white hover:bg-[#6070D0] hover:scale-105 active:scale-95 transition-all cursor-pointer"
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

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* CABEÇALHO COM NOMES EMBAIXO DOS 3 ÍCONES SUPERIORES */}
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
            {/* 1. CONFIGURAÇÕES */}
            <button 
              onClick={() => setActiveTab('settings')}
              className={`flex flex-col items-center transition-all duration-200 cursor-pointer hover:scale-110 active:scale-95 ${activeTab === 'settings' ? 'text-[#7080E0] font-bold' : 'text-slate-600 hover:text-[#7080E0]'}`}
            >
              <Settings className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-tighter">Configurações</span>
            </button>

            {/* 2. NOTIFICAÇÕES */}
            <div className="flex flex-col items-center text-slate-600 hover:text-[#7080E0] transition-all cursor-pointer hover:scale-110 active:scale-95">
              <Bell className="w-5 h-5 mb-1" />
              <span className="text-[9px] uppercase tracking-tighter">Notificações</span>
            </div>

            {/* 3. PERFIL */}
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

        <main className="flex-1 overflow-y-auto p-6">
          
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
                  <button 
                    onClick={() => setConfigSubTab('notifications')}
                    className={`w-full text-left py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:pl-6 ${configSubTab === 'notifications' ? 'border-l-4 border-[#7080E0] text-[#7080E0] bg-indigo-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    NOTIFICAÇÕES
                  </button>
                  <button 
                    onClick={() => setConfigSubTab('password')}
                    className={`w-full text-left py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:pl-6 ${configSubTab === 'password' ? 'border-l-4 border-[#7080E0] text-[#7080E0] bg-indigo-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    MINHA SENHA
                  </button>
                  <button 
                    onClick={() => setConfigSubTab('security')}
                    className={`w-full text-left py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer hover:pl-6 ${configSubTab === 'security' ? 'border-l-4 border-[#7080E0] text-[#7080E0] bg-indigo-50/50' : 'text-slate-500 hover:bg-slate-50'}`}
                  >
                    SEGURANÇA
                  </button>
                </div>

                <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
                  
                  {configSubTab === 'account' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider mb-3">FOTO DE PERFIL</h3>
                        <div className="flex items-center space-x-6">
                          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-[#7080E0] shadow-inner">
                            <User className="w-10 h-10" />
                          </div>
                          <button className="px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-2xl uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm">
                            UPLOAD
                          </button>
                        </div>
                      </div>

                      <hr className="border-slate-100" />

                      <div>
                        <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider mb-4">DETALHES PESSOAIS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">NOME COMPLETO*</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">NOME SOCIAL</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">NÚMERO DE CELULAR 1*</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">NÚMERO DE CELULAR 2</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">EMAIL*</label>
                            <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">DATA DE NASCIMENTO</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">CPF*</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                        </div>

                        <div className="flex justify-end pt-6">
                          <button className="px-8 py-3 bg-slate-300 hover:bg-[#7080E0] hover:text-white text-slate-700 font-bold text-xs rounded-2xl uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow">
                            CONFIRMAR
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {configSubTab === 'notifications' && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-x divide-slate-100">
                        <div className="space-y-4">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider text-center">NOTIFICAÇÃO POR EMAIL</h3>
                          <p className="text-xs font-bold text-slate-600 text-center uppercase mt-6">ATIVAR NOTIFICAÇÕES?</p>
                          <div className="flex justify-center space-x-6 items-center pt-2">
                            <button 
                              onClick={() => setEmailNotif(true)}
                              className={`p-2.5 border rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${emailNotif ? 'bg-[#7080E0] text-white border-[#7080E0] shadow' : 'border-slate-300 hover:bg-slate-100'}`}
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => setEmailNotif(false)}
                              className={`p-2.5 border rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${!emailNotif ? 'bg-rose-600 text-white border-rose-600 shadow' : 'border-slate-300 hover:bg-slate-100'}`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-4 pl-8">
                          <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider text-center">NOTIFICAÇÃO PELO CELULAR</h3>
                          <p className="text-xs font-bold text-slate-600 text-center uppercase mt-6">ATIVAR NOTIFICAÇÕES?</p>
                          <div className="flex justify-center space-x-6 items-center pt-2">
                            <button 
                              onClick={() => setPhoneNotif(true)}
                              className={`p-2.5 border rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${phoneNotif ? 'bg-[#7080E0] text-white border-[#7080E0] shadow' : 'border-slate-300 hover:bg-slate-100'}`}
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => setPhoneNotif(false)}
                              className={`p-2.5 border rounded-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${!phoneNotif ? 'bg-rose-600 text-white border-rose-600 shadow' : 'border-slate-300 hover:bg-slate-100'}`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-12">
                        <button className="px-8 py-3 bg-slate-300 hover:bg-[#7080E0] hover:text-white text-slate-700 font-bold text-xs rounded-2xl uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow">
                          CONFIRMAR
                        </button>
                      </div>
                    </div>
                  )}

                  {configSubTab === 'password' && (
                    <div className="space-y-6 max-w-xl">
                      <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">MUDAR A SENHA</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">SENHA ANTIGA</label>
                          <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">SENHA NOVA</label>
                            <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-slate-600 uppercase mb-1">CONFIRMAR SENHA</label>
                            <input type="password" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs focus:outline-none focus:border-[#7080E0] transition-all" />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end pt-8">
                        <button className="px-8 py-3 bg-slate-300 hover:bg-[#7080E0] hover:text-white text-slate-700 font-bold text-xs rounded-2xl uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow">
                          CONFIRMAR
                        </button>
                      </div>
                    </div>
                  )}

                  {configSubTab === 'security' && (
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-[#3B4793] uppercase tracking-wider">SEGURANÇA DA CONTA</h3>
                      <p className="text-xs text-slate-500">A autenticação em dois fatores (2FA) está configurada e ativa para a sua conta.</p>
                    </div>
                  )}

                </div>
              </div>
            </div>
          )}

          {activeTab !== 'settings' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              <div className="lg:col-span-2 space-y-6">
                
                {activeTab === 'home' && role === 'patient' && (
                  <>
                    <div className="bg-[#7080E0] text-white p-6 rounded-3xl shadow-md relative overflow-hidden">
                      <div className="space-y-2 z-10">
                        <h2 className="text-xl font-extrabold">OLÁ, ***</h2>
                        <p className="text-xs text-indigo-100 font-semibold">VAMOS ACOMPANHAR O SEU DIA!</p>
                        <div className="pt-2">
                          <span className="text-[10px] bg-[#5A6AC8] px-2.5 py-1 rounded-md uppercase font-bold">SUA PRÓXIMA CONSULTA</span>
                          <div className="mt-3 bg-white text-slate-800 p-3.5 rounded-2xl flex items-center justify-between shadow hover:shadow-md transition-all">
                            <div>
                              <p className="text-xs font-bold text-[#7080E0]">HOSPITAL UNIV. OSWALDO CRUZ</p>
                              <p className="text-[10px] text-slate-500">R. Amébiao Marques, 310 - Santo Amaro</p>
                            </div>
                            <div className="text-right border-l pl-4 border-slate-100">
                              <p className="text-xs font-bold">DR. EMILIANO FIGUEIRA</p>
                              <p className="text-[10px] text-slate-400 uppercase font-semibold">ONCOLOGIA</p>
                              <div className="flex gap-2 mt-1 text-[11px] font-bold text-[#7080E0]">
                                <span>09:00</span>
                                <span>SALA 043</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#8090E0] text-white p-5 rounded-3xl shadow">
                      <h3 className="text-xs font-bold tracking-wider mb-4 uppercase">ÚLTIMAS CONSULTAS</h3>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="border-r border-indigo-300 pr-2">
                          <p className="text-[11px] font-semibold text-indigo-100">DIA 14/09/26</p>
                          <p className="text-xs font-bold mt-1">HOSPITAL UNIV. OSWALDO CRUZ</p>
                          <p className="text-[11px] text-indigo-200 mt-2">CLÍNICO • 09:10</p>
                          <p className="text-[11px] font-bold mt-1">DRA. JAMILLE BITTENCOURT</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-indigo-100">DIA 02/08/26</p>
                          <p className="text-xs font-bold mt-1">HOSPITAL UNIV. OSWALDO CRUZ</p>
                          <p className="text-[11px] text-indigo-200 mt-2">OTORRINO • 07:30</p>
                          <p className="text-[11px] font-bold mt-1">DR. FERNANDO ORTEGA</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-slate-600 uppercase mb-3">ARTIGOS RECOMENDADOS:</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 flex items-center space-x-3 cursor-pointer hover:scale-[1.02] transition-all duration-200">
                          <span className="text-2xl">❤️</span>
                          <span className="text-xs font-bold text-slate-700">OS CUIDADOS COM O CORAÇÃO</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 h-20 cursor-pointer hover:scale-[1.02] transition-all duration-200"></div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'home' && role === 'doctor' && (
                  <>
                    <div className="bg-[#7080E0] text-white p-6 rounded-3xl shadow-md flex justify-between items-center">
                      <div className="space-y-2">
                        <h2 className="text-xl font-extrabold">OLÁ, ***</h2>
                        <p className="text-xs text-indigo-100 font-semibold">VAMOS ACOMPANHAR O SEU DIA!</p>
                        <p className="text-xs text-indigo-100 mt-3 font-semibold">AINDA RESTAM 7 PACIENTES PARA HOJE!<br/>LEMBRE-SE DE OLHAR O PRONTUÁRIO ANTES DE CHAMAR O PACIENTE!</p>
                      </div>
                      <div className="bg-white/10 p-4 rounded-2xl backdrop-blur hover:scale-105 transition-all">
                        <span className="text-3xl">🩺</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#8090E0] text-white p-4 rounded-3xl shadow space-y-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider border-b border-indigo-300 pb-2">PACIENTES PARA HOJE</h3>
                        <div className="space-y-2 text-xs">
                          <div className="bg-white text-slate-800 p-2.5 rounded-xl flex justify-between items-center shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                            <div><span className="font-bold">FERNANDA</span><br/><span className="text-[10px] text-slate-500">ONCOLOGIA</span></div>
                            <span className="text-emerald-600 font-bold">✓ 09:00</span>
                          </div>
                          <div className="bg-white text-slate-800 p-2.5 rounded-xl flex justify-between items-center shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                            <div><span className="font-bold">FELIPE</span><br/><span className="text-[10px] text-slate-500">ONCOLOGIA/CHECKUP</span></div>
                            <span className="text-emerald-600 font-bold">✓ 10:00</span>
                          </div>
                          <div className="bg-white text-slate-800 p-2.5 rounded-xl flex justify-between items-center shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                            <div><span className="font-bold">MARIA CLARA</span><br/><span className="text-[10px] text-slate-500">ONCOLOGIA</span></div>
                            <span className="text-rose-600 font-bold">✕ 11:00</span>
                          </div>
                          <div className="bg-white text-slate-800 p-2.5 rounded-xl flex justify-between items-center shadow-sm hover:scale-[1.02] transition-all cursor-pointer">
                            <div><span className="font-bold">LÍGIA</span><br/><span className="text-[10px] text-slate-500">ONCOLOGIA</span></div>
                            <span className="text-emerald-600 font-bold">✓ 13:00</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#8090E0] text-white p-4 rounded-3xl shadow">
                        <h3 className="text-xs font-bold uppercase tracking-wider border-b border-indigo-300 pb-2 mb-3">PACIENTES PARA AMANHÃ</h3>
                        <div className="space-y-8">
                          <div className="h-12 border-b border-indigo-200/40"></div>
                          <div className="h-12 border-b border-indigo-200/40"></div>
                          <div className="h-12 border-b border-indigo-200/40"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'booking' && (
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-2">ESPECIALIDADE</label>
                      <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-semibold focus:outline-none focus:border-[#7080E0] cursor-pointer transition-all">
                        <option>Selecione a especialidade...</option>
                        <option>Cardiologia</option>
                        <option>Oncologia</option>
                        <option>Clínico Geral</option>
                      </select>
                    </div>

                    <div className="h-64 border border-dashed border-slate-300 rounded-2xl flex flex-col justify-around p-4">
                      <div className="border-b border-slate-200 pb-2 text-xs text-slate-400">Horários disponíveis na data selecionada:</div>
                      <div className="border-b border-slate-200 pb-2"></div>
                      <div className="border-b border-slate-200 pb-2"></div>
                    </div>
                  </div>
                )}

                {activeTab === 'consultas' && (
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 space-y-4">
                    <div className="space-y-3">
                      <div className="p-4 border-b border-slate-200 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer">
                        <p className="text-xs font-bold text-[#7080E0]">HOSPITAL UNIV. OSWALDO CRUZ</p>
                        <p className="text-xs font-bold">CLÍNICO • 09:10</p>
                        <p className="text-[11px] text-slate-500">DRA. JAMILLE BITTENCOURT — 14/09/26</p>
                      </div>
                      <div className="p-4 border-b border-slate-200 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer">
                        <p className="text-xs font-bold text-[#7080E0]">HOSPITAL UNIV. OSWALDO CRUZ</p>
                        <p className="text-xs font-bold">OTORRINO • 07:30</p>
                        <p className="text-[11px] text-slate-500">DR. FERNANDO ORTEGA — 02/08/26</p>
                      </div>
                      <div className="h-16 border-b border-slate-100"></div>
                      <div className="h-16 border-b border-slate-100"></div>
                    </div>
                  </div>
                )}

                {activeTab === 'chat' && (
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between h-[520px]">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      <div className="bg-indigo-50 p-3 rounded-2xl text-xs text-indigo-900 max-w-xs font-medium shadow-sm">
                        Olá! Sou o assistente MedConecta. Como posso ajudar você hoje?
                      </div>
                    </div>

                    <div className="relative mt-4">
                      <input 
                        type="text" 
                        placeholder="O que você gostaria de saber?" 
                        className="w-full pl-4 pr-24 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:border-[#7080E0] transition-all"
                      />
                      <div className="absolute right-3 top-2.5 flex items-center space-x-2 text-slate-400">
                        <button className="hover:text-[#7080E0] hover:scale-110 active:scale-95 transition-all cursor-pointer"><Image className="w-4 h-4" /></button>
                        <button className="hover:text-[#7080E0] hover:scale-110 active:scale-95 transition-all cursor-pointer"><Mic className="w-4 h-4" /></button>
                        <button className="bg-[#7080E0] hover:bg-[#5A6AC8] text-white p-1.5 rounded-xl hover:scale-110 active:scale-95 transition-all cursor-pointer shadow"><Send className="w-3 h-3" /></button>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              <div className="space-y-6">
                
                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
                  <h3 className="text-xs font-bold text-[#7080E0] uppercase tracking-wider mb-4 text-center">CALENDÁRIO</h3>
                  <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-600">
                    <button className="hover:text-[#7080E0] hover:scale-125 transition-all cursor-pointer">&lt;</button>
                    <span>Sep 2025</span>
                    <button className="hover:text-[#7080E0] hover:scale-125 transition-all cursor-pointer">&gt;</button>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-medium mb-2">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold">
                    <span className="py-1"></span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">1</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">2</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">3</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">4</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">5</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">6</span>
                    <span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">7</span><span className="py-1 bg-slate-900 text-white rounded-full hover:scale-110 cursor-pointer transition-all">9</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">10</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">11</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">12</span><span className="py-1 bg-slate-900 text-white rounded-full hover:scale-110 cursor-pointer transition-all">13</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">14</span>
                    <span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">15</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">16</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">17</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">18</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">19</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">20</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">21</span>
                    <span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">22</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">23</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">24</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">25</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">26</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">27</span><span className="py-1 hover:bg-slate-100 rounded-full cursor-pointer">28</span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200 space-y-3">
                  <h3 className="text-xs font-bold text-[#7080E0] uppercase tracking-wider mb-2">ALERTAS</h3>
                  <div className="bg-slate-100 p-3 rounded-2xl text-[11px] text-slate-600 font-medium hover:bg-slate-200/80 hover:scale-[1.02] transition-all cursor-pointer">
                    DR. EMILIANO FIGUEIRA CONFIRMOU A CONSULTA.
                  </div>
                  <div className="bg-slate-100 p-3 rounded-2xl text-[11px] text-slate-600 font-medium hover:bg-slate-200/80 hover:scale-[1.02] transition-all cursor-pointer">
                    JÁ SAIU O SEU RESULTADO DA BIÓPSIA DO PULMÃO. <span className="block text-[9px] text-slate-400 mt-1">13 DIAS ATRÁS</span>
                  </div>
                  <div className="h-10 bg-slate-100 rounded-2xl hover:bg-slate-200/50 transition-all cursor-pointer"></div>
                  <div className="h-10 bg-slate-100 rounded-2xl hover:bg-slate-200/50 transition-all cursor-pointer"></div>
                </div>

                {activeTab === 'booking' && (
                  <div className="grid grid-cols-4 gap-2">
                    {['07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00'].map((time, idx) => (
                      <div key={idx} className="bg-indigo-100 text-[#7080E0] text-center py-2 rounded-xl text-[11px] font-bold shadow-sm hover:bg-[#7080E0] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
                        {time}
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}