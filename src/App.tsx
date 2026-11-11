import { useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X, Heart, Sprout, Puzzle, Users, GraduationCap, BookOpen, MessageCircle, CheckCircle2, Sparkles } from 'lucide-react'

const services = [
  { number: '01', title: 'Avaliação psicológica', text: 'Um processo cuidado para compreender necessidades, capacidades e características individuais da criança.', icon: Puzzle },
  { number: '02', title: 'Intervenção psicológica', text: 'Acompanhamento ajustado à criança, ao seu contexto e ao seu ritmo, em articulação com a família.', icon: Heart },
  { number: '03', title: 'Neurodesenvolvimento', text: 'Atenção ao desenvolvimento, à aprendizagem e às diferentes formas de cada criança explorar o mundo.', icon: Sprout },
  { number: '04', title: 'Orientação parental', text: 'Um espaço de reflexão e ferramentas para apoiar os desafios do dia a dia familiar.', icon: Users },
  { number: '05', title: 'Consultoria escolar', text: 'Colaboração com contextos educativos para promover ambientes mais atentos às necessidades das crianças.', icon: GraduationCap },
  { number: '06', title: 'Formação', text: 'Momentos de partilha e aprendizagem para profissionais e comunidades educativas.', icon: BookOpen },
]

const nav = [
  ['Início', '#inicio'], ['Sobre', '#sobre'], ['Serviços', '#servicos'], ['Artigos', '#artigos'], ['Recursos', '#recursos'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [legalTopic, setLegalTopic] = useState<'privacidade' | 'cookies' | 'legal' | null>(null)
  const [form, setForm] = useState({ parent: '', email: '', phone: '', service: '', message: '', consent: false })

  const update = (key: keyof typeof form, value: string | boolean) => setForm(current => ({ ...current, [key]: value }))

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Rita Monteiro Psicologia, início">
          <span className="brand-mark">r<span>.</span>m</span>
          <span className="brand-name">Rita Monteiro<small>PSICOLOGIA</small></span>
        </a>
        <nav id="site-navigation" aria-label="Navegação principal" className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#marcacao" onClick={() => setMenuOpen(false)}>Pedir marcação <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-controls="site-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> PSICOLOGIA · INFÂNCIA & FAMÍLIA</div>
          <h1>Crescer é um caminho.<br /><em>Vamos fazê-lo</em><br />com confiança.</h1>
          <p className="hero-lead">Cada criança tem o seu próprio mundo, o seu ritmo e a sua forma de sentir. Há espaço para compreender, descobrir e crescer.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#marcacao">Vamos conversar <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#servicos">Conhecer os serviços <ArrowDown size={15} /></a>
          </div>
          <div className="hero-note"><span className="note-line" /> Acompanhamento em formato online</div>
        </div>
        <div className="hero-art" aria-label="Ilustração abstrata de formas orgânicas">
          <div className="art-sun" />
          <div className="art-arch"><div className="art-inner" /></div>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-leaf leaf-one" /><div className="art-leaf leaf-two" />
          <div className="art-sticker"><Sparkles size={18} /><span>Um espaço<br />para crescer</span></div>
          <span className="art-caption">CUIDAR · COMPREENDER · DESENVOLVER</span>
        </div>
        <div className="hero-bottom"><span>01 / 05</span><span className="hero-bottom-line" /><span>UM PASSO DE CADA VEZ</span></div>
      </section>

      <section className="intro section-pad" id="sobre">
        <div className="section-kicker">01 — UM POUCO SOBRE MIM</div>
        <div className="intro-content">
          <div className="intro-heading"><span className="small-flower">✳</span><h2>Um lugar onde<br />cada história <em>importa.</em></h2></div>
          <div className="intro-text">
            <p className="large-copy">A infância é feita de descobertas, perguntas e desafios. Acredito na importância de escutar cada criança e de construir, em conjunto com a família, caminhos que respeitem a sua individualidade.</p>
            <p>Este é um espaço de apresentação profissional. A biografia, percurso académico, experiência e informação de cédula profissional serão acrescentados após validação pela Rita Monteiro.</p>
            <a className="text-link underlined" href="#marcacao">Entre em contacto <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="servicos">
        <div className="services-top">
          <div><div className="section-kicker">02 — COMO POSSO AJUDAR</div><h2>Um apoio ajustado<br /><em>a cada etapa.</em></h2></div>
          <p>Conhecer as necessidades é o primeiro passo para encontrar respostas. Os serviços são pensados em função da criança, da família e do seu contexto.</p>
        </div>
        <div className="service-grid">
          {services.map(({ number, title, text, icon: Icon }) => <article className="service-card" key={number}>
            <div className="service-card-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div>
            <h3>{title}</h3><p>{text}</p><a href="#marcacao" aria-label={'Pedir informações sobre ' + title}><ArrowUpRight size={18} /></a>
          </article>)}
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-symbol">“</div>
        <blockquote>Não há uma única forma de crescer.<br /><em>Há tantas formas como crianças.</em></blockquote>
        <span>UM OLHAR INDIVIDUAL, SEM RECEITAS IGUAIS PARA TODOS</span>
      </section>

      <section className="process section-pad">
        <div className="section-kicker">03 — COMO FUNCIONA</div>
        <div className="process-layout">
          <h2>Começamos<br />por <em>escutar.</em></h2>
          <div className="steps">
            <div className="step"><span>01</span><div><h3>Primeiro contacto</h3><p>Partilhe o seu pedido através do formulário. A informação será utilizada apenas para dar seguimento ao contacto.</p></div></div>
            <div className="step"><span>02</span><div><h3>Confirmação</h3><p>O pedido será analisado e será contactado para esclarecer disponibilidade e próximos passos.</p></div></div>
            <div className="step"><span>03</span><div><h3>Conhecer e compreender</h3><p>O processo e o enquadramento são explicados antes de qualquer acompanhamento.</p></div></div>
          </div>
        </div>
      </section>

      <section className="booking section-pad" id="marcacao">
        <div className="booking-info">
          <div className="section-kicker">04 — PRIMEIRO PASSO</div>
          <h2>Vamos falar<br /><em>sobre isso?</em></h2>
          <p>Se procura informação ou pretende perceber se este acompanhamento faz sentido para a sua família, envie um pedido de contacto.</p>
          <div className="booking-aside"><MessageCircle size={19} /><span>Os pedidos de marcação são sujeitos a confirmação. O envio deste formulário não reserva uma consulta.</span></div>
        </div>
        <div className="form-wrap">
          {sent ? <div className="success-state"><CheckCircle2 size={35} /><h3>Formulário de demonstração preenchido</h3><p>Esta versão ainda não está ligada a um serviço de envio. Nenhuma mensagem foi enviada. A integração será configurada depois de definidos os contactos e o serviço de formulários.</p><button className="button button-dark" onClick={() => setSent(false)}>Voltar ao formulário</button></div> : <form onSubmit={submit}>
            <label>Nome do adulto responsável<input autoComplete="name" required value={form.parent} onChange={e => update('parent', e.target.value)} placeholder="O seu nome" /></label>
            <div className="form-row"><label>Email<input autoComplete="email" required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="nome@email.com" /></label><label>Telefone<input autoComplete="tel" type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="O seu contacto" /></label></div>
            <label>Assunto do contacto<select required value={form.service} onChange={e => update('service', e.target.value)}><option value="">Selecione uma opção</option>{services.map(s => <option key={s.number}>{s.title}</option>)}<option>Pedido de informação geral</option></select></label>
            <label>Mensagem (opcional)<textarea rows={3} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Como posso ajudar?" /></label>
            <p className="privacy-note">Por favor, não inclua diagnósticos, relatórios, informação clínica ou outros dados sensíveis neste formulário.</p>
            <label className="consent"><input type="checkbox" required checked={form.consent} onChange={e => update('consent', e.target.checked)} /><span>Li a informação de privacidade e autorizo o contacto para resposta a este pedido.</span></label>
            <button className="button button-dark submit-button" type="submit">Enviar pedido <ArrowUpRight size={17} /></button>
            <p className="form-disclaimer">Demonstração — o formulário ainda não envia nem armazena dados.</p>
          </form>}
        </div>
      </section>

      <section className="journal section-pad" id="artigos">
        <div className="journal-head"><div><div className="section-kicker">05 — IDEIAS & PARTILHAS</div><h2>Um espaço para<br /><em>refletir.</em></h2></div><p>Artigos e conteúdos sobre desenvolvimento, parentalidade e bem-estar. Os conteúdos serão publicados após revisão profissional.</p></div>
        <div className="journal-grid">
          <article className="journal-card journal-feature"><div className="journal-art art-peach"><span>PEQUENOS<br />PASSOS</span><i>✳</i></div><div className="journal-meta">ARTIGO · RASCUNHO</div><h3>Compreender antes de corrigir: o valor da escuta</h3><p>Texto demonstrativo — conteúdo a validar pela profissional.</p></article>
          <article className="journal-card"><div className="journal-art art-green"><span className="draw-circle" /><span className="draw-line" /></div><div className="journal-meta">ARTIGO · RASCUNHO</div><h3>Rotinas que dão segurança às crianças</h3><p>Texto demonstrativo — conteúdo a validar pela profissional.</p></article>
          <article className="journal-card"><div className="journal-art art-lilac"><span className="draw-flower">✿</span></div><div className="journal-meta">ARTIGO · RASCUNHO</div><h3>O desenvolvimento não é uma corrida</h3><p>Texto demonstrativo — conteúdo a validar pela profissional.</p></article>
        </div>
      </section>

      <section className="resources section-pad" id="recursos">
        <div className="resource-orb"><BookOpen size={36} strokeWidth={1.2} /></div>
        <div><div className="section-kicker">06 — RECURSOS & FORMAÇÃO</div><h2>Aprender também<br />é uma forma de <em>cuidar.</em></h2><p>Este espaço será dedicado a materiais digitais, recursos educativos, ebooks e futuras formações online. Novidades em breve.</p></div>
        <span className="coming-soon">EM PREPARAÇÃO <ArrowUpRight size={15} /></span>
      </section>

      <footer className="footer">
        <div className="footer-main"><a className="brand brand-footer" href="#inicio"><span className="brand-mark">r<span>.</span>m</span><span className="brand-name">Rita Monteiro<small>PSICOLOGIA</small></span></a><p>Um espaço de escuta,<br />compreensão e desenvolvimento.</p><a className="footer-top" href="#inicio">Voltar ao topo <ArrowUpRight size={15} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Rita Monteiro – Psicologia</span><div><button type="button" className="footer-legal-link" onClick={() => setLegalTopic('privacidade')}>Privacidade</button><button type="button" className="footer-legal-link" onClick={() => setLegalTopic('cookies')}>Cookies</button><button type="button" className="footer-legal-link" onClick={() => setLegalTopic('legal')}>Informação legal</button></div><span className="footer-placeholder">Informação profissional em validação</span></div>
      </footer>
      {legalTopic && <div className="legal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setLegalTopic(null) }}>
        <section className="legal-dialog" role="dialog" aria-modal="true" aria-labelledby="legal-title">
          <button type="button" className="legal-close" onClick={() => setLegalTopic(null)} aria-label="Fechar">×</button>
          <div className="section-kicker">INFORMAÇÃO AO VISITANTE</div>
          <h2 id="legal-title">{legalTopic === 'privacidade' ? 'Privacidade' : legalTopic === 'cookies' ? 'Cookies' : 'Informação legal'}</h2>
          {legalTopic === 'privacidade' && <><p>Este website encontra-se em fase de preparação. Antes da publicação, esta página deverá identificar a entidade responsável pelo tratamento, os contactos, as finalidades e fundamentos jurídicos, os prazos de conservação, os destinatários, os direitos dos titulares e a forma de apresentar reclamação à autoridade de controlo.</p><p><strong>Formulário:</strong> nesta versão demonstrativa, os dados introduzidos permanecem apenas no navegador durante a interação e não são enviados nem guardados pelo website. Não introduza informação clínica, diagnósticos, relatórios ou outros dados sensíveis.</p><p className="legal-warning">Texto provisório. Não constitui uma política de privacidade final e tem de ser completado e validado pela responsável antes da publicação.</p></>}
          {legalTopic === 'cookies' && <><p>Esta versão não utiliza ferramentas próprias de análise, publicidade ou medição de audiência. Os recursos externos e eventuais integrações futuras terão de ser avaliados antes de serem ativados.</p><p>Se forem adicionados cookies não essenciais ou tecnologias equivalentes, será necessário apresentar informação adequada e obter consentimento antes da sua utilização, quando aplicável.</p><p className="legal-warning">Texto provisório. Rever após a configuração técnica definitiva do website.</p></>}
          {legalTopic === 'legal' && <><p>Nome profissional, cédula profissional, entidade responsável, identificação fiscal e contactos oficiais ainda não foram fornecidos. Estes elementos serão inseridos apenas após confirmação.</p><p className="legal-warning">Não utilizar esta versão como informação legal definitiva.</p></>}
          <button type="button" className="button button-dark" onClick={() => setLegalTopic(null)}>Fechar</button>
        </section>
      </div>}
    </main>
  )
}

export default App