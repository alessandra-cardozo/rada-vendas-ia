const news = [
  {
    category: "Tecnologia",
    title: "Empresas ampliam automação para acelerar atendimento",
    text: "A adoção de ferramentas de IA cria oportunidades para equipes comerciais reduzirem tarefas repetitivas.",
    impact: "Impacto em vendas: alto"
  },
  {
    category: "Mercado",
    title: "Personalização ganha espaço nas jornadas de compra",
    text: "Clientes esperam abordagens mais relevantes e alinhadas às suas necessidades.",
    impact: "Impacto em vendas: alto"
  },
  {
    category: "Estratégia",
    title: "Dados ajudam equipes a priorizar oportunidades",
    text: "Organizar sinais de intenção pode apoiar decisões sobre quais leads devem receber atenção primeiro.",
    impact: "Impacto em vendas: médio"
  }
];

function renderNews() {
  const grid = document.getElementById("newsGrid");
  grid.innerHTML = news.map(item => `
    <article class="news-card">
      <span class="category">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <span class="impact">${item.impact}</span>
    </article>
  `).join("");
}

function refreshNews() {
  const button = document.querySelector("#noticias .secondary");
  button.textContent = "Radar atualizado ✓";
  setTimeout(() => button.textContent = "Atualizar radar", 1800);
  document.getElementById("agentStatus").textContent = "Notícias estratégicas atualizadas.";
}

function runSalesAgent() {
  const status = document.getElementById("agentStatus");
  const count = document.getElementById("opportunityCount");
  status.textContent = "Analisando sinais de vendas...";
  count.textContent = "…";

  setTimeout(() => {
    count.textContent = "15";
    status.textContent = "Agente concluiu a priorização ✓";
    document.getElementById("metricOpportunities").textContent = "15";
  }, 900);
}

document.getElementById("proposalForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const client = document.getElementById("client").value.trim();
  const product = document.getElementById("product").value.trim();
  const need = document.getElementById("need").value.trim();
  const profile = document.getElementById("profile").value;

  const result = document.getElementById("proposalResult");
  result.className = "proposal-content";
  result.innerHTML = `
    <span class="eyebrow">PROPOSTA GERADA PELO AGENTE</span>
    <h3>Proposta comercial — ${client}</h3>
    <p><strong>Objetivo:</strong> apresentar uma solução de ${product} alinhada ao perfil de ${profile.toLowerCase()}.</p>
    <p><strong>Necessidade identificada:</strong> ${need}.</p>
    <h3>Solução recomendada</h3>
    <p>A solução proposta combina tecnologia, automação e acompanhamento comercial para reduzir tarefas manuais e criar uma jornada mais organizada para o cliente.</p>
    <h3>Próximo passo</h3>
    <p>Agendar uma conversa para validar escopo, prazo, investimento e indicadores de sucesso.</p>
    <ul>
      <li>Personalização conforme o processo comercial.</li>
      <li>Automação de tarefas repetitivas.</li>
      <li>Acompanhamento dos resultados.</li>
    </ul>
  `;

  const metric = document.getElementById("metricProposals");
  metric.textContent = Number(metric.textContent) + 1;
});

function copyProposal() {
  const text = document.getElementById("proposalResult").innerText;
  if (!text || text.includes("A proposta gerada")) return;
  navigator.clipboard?.writeText(text);
}

function runEmailAutomation() {
  const status = document.getElementById("emailStatus");
  status.textContent = "✓ Fluxo executado: novo lead → análise da IA → e-mail de follow-up preparado.";
  const metric = document.getElementById("metricEmails");
  metric.textContent = Number(metric.textContent) + 1;
}

renderNews();
