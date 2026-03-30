# PROMPT PARA CLAUDE CODE — App de Estudos: Medicina Veterinária Felinos

## CONTEXTO DO PROJETO

Crie um app web completo em **HTML, CSS e JavaScript puro** (sem frameworks, sem bundlers, sem dependências externas) chamado **"FelixStudy 🐱"** — um app de estudos interativo para uma estudante de medicina veterinária revisar o conteúdo de **Eletiva II – Felinos** antes de uma prova.

O projeto deve estar pronto para deploy no **Vercel** (como site estático) e publicação no **GitHub**. Estrutura de arquivos:

```
/
├── index.html
├── style.css
├── app.js
└── data.js        ← toda a base de conhecimento aqui
```

---

## IDENTIDADE VISUAL

- Tema: **modo escuro elegante** com tons de roxo/lilás e detalhes dourados/âmbar
- Fonte principal: Google Fonts — `Inter` para UI, `Fira Code` para termos clínicos em destaque
- Ícone de gato 🐱 no título
- Cards com bordas arredondadas, sombras suaves, animações de flip (flashcard)
- Layout responsivo (mobile-first)
- Barra de progresso no topo da sessão
- Feedback visual imediato: verde para acerto, vermelho para erro com shake animation

---

## ESTRUTURA DO APP — 4 MODOS DE ESTUDO

### TELA INICIAL
- Título "FelixStudy 🐱" com subtítulo "Eletiva II – Felinos"
- 4 botões grandes para selecionar o modo de estudo
- Contador de sessão: "X questões respondidas | Y% de acerto"
- Botão "📋 Ver meu Painel de Pontos Fracos" (aparece depois de 5+ erros acumulados)

---

### MODO 1 — FLASHCARDS

- Card com frente (pergunta/conceito) e verso (resposta completa)
- Animação de flip 3D ao clicar
- Após ver o verso, o usuário clica: ✅ "Sabia" ou ❌ "Não sabia"
- Embaralhar os cards a cada sessão
- Mínimo 30 flashcards cobrindo todos os tópicos

---

### MODO 2 — MÚLTIPLA ESCOLHA

- 1 pergunta por vez com 4 alternativas (A, B, C, D)
- Ao selecionar: destaca verde (certa) ou vermelho (errada) + mostra a correta
- Botão "Próxima →" após responder
- **FOCO ESPECIAL EM TRATAMENTOS** — pelo menos 60% das perguntas sobre tratamentos/fármacos
- Embaralhar ordem das alternativas a cada vez
- Mínimo 40 perguntas

---

### MODO 3 — RESPOSTA ESCRITA

- Campo de texto livre para a aluna digitar a resposta
- **SEM DICAS, SEM AUTOCOMPLETE**
- Após submeter, mostra a resposta correta lado a lado
- A aluna avalia: "✅ Acertei", "⚠️ Parcial", "❌ Errei"
- Para parcial e erro: o tópico vai para o Painel de Pontos Fracos
- Perguntas focadas em listar tratamentos completos, protocolos e diferenciais

---

### MODO 4 — CASOS CLÍNICOS

- Cenário clínico narrativo (como uma prova real)
- Perguntas em cima do caso (múltipla escolha ou dissertativa)
- **FOCO TOTAL EM TRATAMENTOS**
- Mínimo 8 casos clínicos

**CASO 1:**
> "Félix, gato doméstico, 4 anos, é trazido pelo tutor com histórico de ingestão acidental de paracetamol há 2 horas. No exame físico: mucosas cianóticas, ictéricas, edema de face e membros, depressão e letargia."
> 1. Quais são os sinais clínicos compatíveis com este quadro?
> 2. Qual é o tratamento emergencial indicado? (liste todos os passos)
> 3. Deve-se induzir o vômito neste paciente? Justifique.

**CASO 2:**
> "Luna, gata SRD, 7 anos, apresenta anorexia há 10 dias, letargia intensa, perda de peso progressiva, mucosas ictéricas e hepatomegalia. A tutora relata que a gata parou de comer após chegada de novo pet."
> 1. Qual é a suspeita diagnóstica principal?
> 2. Quais exames confirmariam? (mencione o padrão ouro)
> 3. Descreva o tratamento completo.

**CASO 3:**
> "Mimi, gata Maine Coon, 3 anos, chega com tosse episódica, postura ortopneica e em um episódio teve cianose. Hemograma: eosinofilia >20%. Radiografia: padrão intersticial."
> 1. Qual é o diagnóstico mais provável?
> 2. Como diferenciar de bronquite felina?
> 3. Qual o tratamento indicado?

**CASO 4:**
> "Bob, gato caramelo, 2 anos, interior, apresenta vômitos, anorexia, perda de peso, icterícia e letargia. Caça lagartixa e caramujos. Hemograma: eosinofilia após 3 semanas. Bioquímicos: ALT, AST, GGT e FA discretamente aumentadas."
> 1. Qual parasita é o agente mais provável?
> 2. Descreva o ciclo deste parasita.
> 3. Qual o tratamento?

**CASO 5:**
> "Nala, gata Persa, 5 anos, espirros paroxísticos, secreção nasal serosanguinolenta UNILATERAL há 3 semanas, epífora e anorexia."
> 1. A rinite unilateral sugere quais causas?
> 2. Quais exames diagnósticos solicitar?
> 3. Descreva o tratamento completo.

**CASO 6:**
> "Thor, gato, 1 ano, vacinado apenas com V8, apresenta úlceras orais, poliartrite, espirros leve a moderados, sialorreia e claudicação."
> 1. Qual vírus é o agente mais provável? Como diferenciar do FHV?
> 2. Qual o tratamento?
> 3. Qual vacina deveria ter sido usada? Esquema para adultos?

**CASO 7:**
> "Simba, gato, 4 anos, gengivite confirmada. Nunca fez profilaxia dental."
> 1. Como é feito o diagnóstico?
> 2. Qual é o tratamento?
> 3. Como diferenciar de periodontite no tratamento?

**CASO 8:**
> "Cleo, gata, 6 anos, convulsões, bradicardia, cianose, sialorreia e paralisia. Tutor aplicou carrapaticida organofosforado há 1 hora."
> 1. Quais são os sinais clínicos de intoxicação por organofosforado?
> 2. Qual é o antídoto e por que é usado?
> 3. Descreva o tratamento completo incluindo descontaminação.

---

## SISTEMA DE PONTOS FRACOS

### Lógica:
- Cada erro registra o tópico associado no localStorage
- Estrutura:
```js
weakPoints = {
  "Tratamentos - Intoxicações": { erros: 3, ultimoErro: "timestamp" },
  "Diagnóstico - Lipidose Hepática": { erros: 2, ultimoErro: "timestamp" },
}
```

### Painel de Pontos Fracos:
- Lista ordenada por número de erros (mais errado no topo)
- Para cada ponto fraco: mini-resumo automático do tópico + 2-3 novas perguntas geradas sobre aquele assunto
- Botão "🔄 Praticar só os pontos fracos"
- Botão "🗑️ Resetar pontos fracos" com confirmação

### Tags de tópicos:
`intox-paracetamol`, `intox-organofosforado`, `lipidose-hepatica`, `pancreatite`, `platinossomose`, `bronquite-asma`, `rinite`, `crvf-fhv-fcv`, `odontologia-felina`, `neonato-orfao`, `catfriendly`, `farmacos-quinolona-aines`

---

## BASE DE CONHECIMENTO COMPLETA (data.js)

### 1. Práticas Cat Friendly
- Orientar o tutor: acostumar o paciente na caixa de transporte, colocar pano/toalha por cima para reduzir estresse, ensaiar visitas ao veterinário
- Ambiente veterinário: sala/área exclusiva para felinos, difusores, ambiente silencioso
- 5 princípios cat friendly: lugar seguro, múltiplos recursos ambientais, brincadeiras predatórias, relação positiva e negativa homem/gato, estímulos sensoriais agradáveis

### 2. Neonato Órfão
- Limpar com gaze/flanela/paninho levemente umedecido com água morna
- Secar cuidadosamente e aquecer
- Alimentar
- Estimular micção e defecação

### 3. Convívio entre gatos
- Troca de cheiros, aromatizador ambiente, música instrumental, cromoterapia, desvio de atenção com brincadeiras, feromônios sintéticos

### 4. Intoxicação por Paracetamol
- SN: cianose, icterícia, mucosas pálidas, depressão, vômitos, anorexia, hipóxia, edema de membros e face, letargia
- Tratamento: NÃO induzir vômito | Oxigenioterapia e fluidoterapia | Acetilcisteína (antídoto) | Carvão ativado 1h após a ingestão | Ácido ascórbico

### 5. Intoxicação por Organofosforado
- SN: convulsões, vômitos, hiper ou hipoexcetabilidade, sialorréia, diarréia, apatia, bradcardia, cianose, paralisia e morte
- Tratamento: Oxigenioterapia | Anti-convulsivo (diazepam) | Atropina (antídoto — reverte efeitos muscarínicos: hipersalivação, bradcardia, miose, secreções pulmonares) | Descontaminação oral: carvão ativado até 1h | Descontaminação cutânea: lavar com água morna e sabão neutro | Monitorar FC e FR

### 6. Quinolonas e AINES — Efeitos Indesejados
- Quinolonas: incoordenação, tremor, nistagmo, convulsão e cegueira aguda irreversível
- AINES: intoxicação, anorexia, vômitos, letargia, melena, ataxia e polidipsia

### 7. Gengivite
- Diagnóstico: radiografia intraoral, anamnese + exame físico oral detalhado, hemograma e bioquímico hepático e renal, sondagem periodontal
- Tratamento: limpeza supra e sub gengival, remoção dos depósitos dentários (placa e cálculo) e profilaxia

### 8. Periodontite
- Diagnóstico: radiografia dentária (lesões), anamnese + exame físico oral detalhado, hemograma e bioquímico hepático e renal, sondagem periodontal
- Tratamento: limpeza supra e sub gengival, extração dentária com perda de inserção e profilaxia rigorosa

### 9. Reabsorção Dentária
- Diagnóstico: exame físico oral detalhado + anamnese, radiografia dentária (PO)
- Tratamento: profilaxia e controle + extração cirúrgica

### 10. Gengivoestomatite Crônica Felina
- Diagnóstico: anamnese + exame físico oral detalhado | Histopatológico: hiperplasia do epitélio oral, ulcerações profundas e infiltrados linfoplasmocitários
- Tratamento: analgésico (tramadol) | AIE (prednisolona) ou AINE (meloxicam) | Antibiótico em quadros agudos, pré ou pós-cirúrgico (metronidazol)

### 11. Lipidose Hepática
- Causas: obesidade, diabetes, pancreatite, hiperparatireoidismo, cardiopatia, anorexia prolongada, retirada de proteínas
- SN: anorexia prolongada, letargia, depressão, perda de peso, icterícia, desidratação e hepatomegalia
- Diagnóstico: anamnese + exame físico | Hemograma (anemia com poiquilocitose) | Bioquímicos (ALT, GGT e FA aumentados, hipoalbuminemia, hipocalcemia, hipofosfatemia e hiperamonemia) | Ultrassonografia abdominal | Histopatológico (PO)
- Tratamento: hepato e gastroprotetores | Correção e monitoração hidroeletrolítica (K, P e Na) | Suporte nutricional | Antieméticos e procinéticos

### 12. Pancreatite
- SN: anorexia, letargia, vômitos, diarréia, perda de peso, poliúria e polidipsia, dor abdominal, desidratação, mucosas pálidas, icterícia, hipo ou hipertermia, ascite e massa abdominal palpável
- Causas: hipercalcemia, intoxicações, doenças hepatobiliares, lipídeos, diabetes, infecção, linfoma
- Diagnóstico: exame físico + anamnese | Lipase imunoespecífica SPEC FPLI (PO) | Ultrassonografia abdominal | Histopatológico | Hemograma e bioquímicos (ALT, AST, GGT e FA aumentados, hiperglicemia, hipoalbuminemia, hipocobalinemia e hipocalcemia)
- Tratamento: fluidoterapia | Corrigir hipocalcemia e hipocalemia | Analgesia (fentanil) | Antieméticos (ondasetrona) | Dieta hiperproteica (cobalamina e ômega 3)

### 13. Platinossomose
- Ciclo: gato (HD) ingere isópodes terrestres, caramujos ou lagartixas (HI) → infecção por predação → eliminação dos ovos nas fezes → HI ingerem os ovos → gato preda os HI
- Patogenia: parasita migra para fígado, vesícula biliar e ductos biliares → irritação e inflamação crônica do epitélio biliar → espessamento dos ductos biliares → pode ocasionar colangiohepatite, fibrose biliar, cirrose e/ou obstrução biliar
- SN: vômitos, anorexia, perda de peso, icterícia, diarréia, hepatomegalia e letargia
- Diagnóstico: parasitológico de fezes | Ultrassonografia abdominal | Citologia da bile | Hemograma (eosinofilia após 3 semanas) e bioquímicos (ALT, AST, GGT e FA discretamente aumentadas)
- Tratamento: Praziquantel

### 14. CRVF (Doença Respiratória Viral Felina)
- FHV: aborto, morte neonatal, ceratite ulcerativa, espirros frequentes, secreção nasal e ocular intensa, conjuntivite, febre, apatia
- FCV: poliartrite, pneumonia branda, estomatite ulcerativa, úlceras orais, espirros leve a moderado, secreção nasal e ocular leve, sialorreia, febre, apatia, claudicação, anorexia
- Diagnóstico: PCR | Raio-x do tórax | Endoscopia | Citologia das secreções nasais
- Tratamento: dipirona (febre) | Omiclom A orabase (úlceras orais) | Antibiótico (amoxicilina, azitromicina ou doxiciclina)
- Vacinação V3: Filhotes: dose inicial às 6 semanas, reforço a cada 4 semanas, reforço com 6 meses/1 ano | Adultos: duas doses com intervalo de 21/30 dias, reforço a cada 3 anos ou anual

### 15. Rinite
- SN: dor nasal, espirros paroxísticos, secreção nasal serosanguinolenta/purulenta ou mucopurulenta | Unilateral: corpo estranho, neoplasias, pólipos, infecção fúngica, fístula oronasal | Bilateral: viral e inflamatória | Epífora | Anorexia
- Diagnóstico: rinoscopia | Anamnese detalhada | Radiografia/Tomografia (neoplasias e corpo estranho) | Citologia da secreção | Cultura bacteriana e fúngica | PCR viral
- Tratamento: fluidoterapia | Lavagem nasal e nebulização | Descongestionantes e histamínicos (alívio da secreção e espirros) | Anti-inflamatórios (melox ou prednisolona) | Antifúngico e antibiótico (apenas em caso confirmatório) | Cirurgia (neoplasias e pólipos)

### 16. Bronquite e Asma Felina
- Asma: tosse episódica, postura ortopneica, infiltrado de eosinófilos (>20%) e quadro agudo (cianose)
- Bronquite: tosse frequente, infiltrado de neutrófilos (>10%) e quadro crônico (dispneia, taquipneia, respiração com esforço expiratório e sibilos/chiados na ausculta)
- Diagnóstico: hemograma (eosinofilia e eritrocitose - hipóxia) | Radiografia do tórax com padrão intersticial | Broncoscopia | Lavado bronquial
- Tratamento: oxigenioterapia | Broncodilatadores (Terbutalina) | AIES (Prednisolona) | Eliminação do alérgeno

---

## REQUISITOS TÉCNICOS OBRIGATÓRIOS

### localStorage:
```js
localStorage.setItem('felixstudy_progress', JSON.stringify({
  totalRespondidas: 0,
  totalAcertos: 0,
  weakPoints: {},
  sessaoAtual: []
}))
```

### Embaralhamento (Fisher-Yates):
```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

### Animações CSS necessárias:
- `.card-flip` — rotação 3D no flashcard
- `.shake` — animação de tremida para resposta errada
- `.pulse-green` — pulso verde para resposta certa
- `.fade-in` — entrada suave de novos cards
- `.progress-bar` — barra de progresso animada

### Estrutura de dados (data.js):
```js
const questions = {
  flashcards: [ { id, frente, verso, topico } ],
  multiplaEscolha: [ { id, pergunta, alternativas: [{texto, correta}], topico, explicacao } ],
  dissertativas: [ { id, pergunta, respostaEsperada, topico } ],
  casosClinicos: [ { id, titulo, cenario, perguntas: [{texto, resposta, tipo}], topico } ]
}
```

---

## REGRAS DE UX

1. **Sem dicas fáceis** — campo de resposta limpo, sem placeholders que induzam
2. **Feedback rico** — ao errar, mostrar TODA a resposta correta formatada
3. **Progresso persistente** — lembrar desempenho mesmo fechando o browser
4. **Modo revisão** — praticar apenas perguntas já erradas
5. **Contador de streak** — sequência de acertos com emoji motivacional 🔥
6. **Frases motivacionais em PT-BR** ao acertar: "Arrasou! 🐱", "Vet aprovada! 💉", "Isso aí! 🏆"
7. **Frases de encorajamento** ao errar: "Quase lá! Revisa esse 📚", "Anota esse — vai cair na prova! ✏️"

---

## DEPLOY

Funcionar como site estático sem servidor. Adicionar `vercel.json`:
```json
{
  "version": 2,
  "builds": [{ "src": "index.html", "use": "@vercel/static" }]
}
```

---

## RESUMO — ARQUIVOS A GERAR

1. `index.html` — estrutura completa com todas as telas
2. `style.css` — design dark mode elegante, responsivo, com animações
3. `app.js` — lógica completa: navegação, pontos fracos, localStorage, embaralhamento, feedback
4. `data.js` — TODA a base de conhecimento (flashcards, questões, casos clínicos) dos 16 tópicos
5. `vercel.json` — configuração de deploy

**PRIORIDADE MÁXIMA: casos clínicos e tratamentos, que são o ponto fraco da aluna.**
