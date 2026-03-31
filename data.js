// CarineStudy — ordem na grade = `ordem`. `provaAtual` = destaque visual (liberada). `emBreve` = futuro, sem pagamento/código.
const MATERIAS = {
  felinos: {
    id: "felinos",
    ordem: 10,
    apenasMemoria: true,
    desativado: true,
    provaConcluida: true,
    nome: "Eletiva II — Felinos",
    icone: "🐱",
    descricao:
      "Prova dessa eletiva já passou. Card só para lembrar a conquista — não abre estudo no app.",
    corPrimaria: "#7c3aed",
    corSecundaria: "#f59e0b",
    flashcards: [],
    multiplaEscolha: [],
    dissertativas: [],
    casosClinicos: [],
    topicos: {},
  },

  clinicaPeqAnimais: {
    id: "clinicaPeqAnimais",
    ordem: 20,
    apenasMemoria: true,
    desativado: true,
    provaConcluida: true,
    nome: "Clínica Médica e Terapêutica — PDF",
    icone: "🩺",
    descricao:
      "Prova dessa matéria já passou. Card só para lembrar a conquista — não abre estudo no app.",
    corPrimaria: "#0d9488",
    corSecundaria: "#f472b6",
    cramFlashN: 18,
    cramMcN: 12,

    flashcards: [
      { id: "cp-fc1", frente: "Na proporção típica do exame clínico, quanto pesa a anamnese?", verso: "Cerca de 50% da avaliação — o histórico do animal é a base de tudo.", topico: "exame-clinico" },
      { id: "cp-fc2", frente: "E o exame físico, em porcentagem aproximada?", verso: "~35%. Resenha ~0%; exames complementares ~15%.", topico: "exame-clinico" },
      { id: "cp-fc3", frente: "O que é inspeção na semiótica?", verso: "Observação visual do aspecto interno e externo: postura, locomoção, condição corporal, pelame.", topico: "semiotica" },
      { id: "cp-fc4", frente: "Palpação: consistência mole, firme, dura, pastosa, flutuante e crepitante indicam o quê?", verso: "Mole: normal; firme: fígado/músculo; dura: osso/tumor; pastosa: Godet +; flutuante: líquido; crepitante: ar/gás.", topico: "semiotica" },
      { id: "cp-fc5", frente: "Na avaliação de linfonodos, o que observar?", verso: "Consistência, mobilidade (aderido ou não) e temperatura.", topico: "semiotica" },
      { id: "cp-fc6", frente: "Quais são os parâmetros vitais clássicos no exame físico?", verso: "Temperatura, mucosas, TPC, FC, FR, pulso arterial e pressão arterial.", topico: "exame-clinico" },
      { id: "cp-fc7", frente: "Diferença entre diagnóstico clínico e diferencial?", verso: "Clínico: definido na clínica pelo exame. Diferencial: lista de causas possíveis pelos sinais (ex.: vômito/diarreia — ancilostomose, toxocara, cinomose).", topico: "diagnostico-prognostico" },
      { id: "cp-fc8", frente: "Tipos de prognóstico mencionados no material?", verso: "Favorável; reservado ou desfavorável — previsão de resposta ao tratamento.", topico: "diagnostico-prognostico" },
      { id: "cp-fc9", frente: "Melena vs hematoquezia — em uma frase cada.", verso: "Melena: fezes enegrecidas (sangue digerido). Hematoquezia: sangue vivo nas fezes.", topico: "termos-tecnicos" },
      { id: "cp-fc10", frente: "Ortopneia é o quê?", verso: "Respiração com pescoço estendido — alívio postural da dificuldade respiratória.", topico: "termos-tecnicos" },
      { id: "cp-fc11", frente: "Azotemia — definição.", verso: "Aumento de ureia e creatinina séricas.", topico: "termos-tecnicos" },
      { id: "cp-fc12", frente: "Dose vs dosagem na prescrição?", verso: "Dose: quantidade por administração. Dosagem: dose + frequência + duração do tratamento.", topico: "prescricao" },
      { id: "cp-fc13", frente: "Intervalo entre gotas de colírios (material)?", verso: "Cerca de 5 minutos entre colírios diferentes.", topico: "prescricao" },
      { id: "cp-fc14", frente: "Receita A (amarela) — o que controla?", verso: "Listas A1/A2 entorpecentes e A3 psicróticos; alta dependência; validade 30 dias; numeração ANVISA; antibiótico associado até 10 dias no modelo citado.", topico: "receituario" },
      { id: "cp-fc15", frente: "Receita B (azul) vs C (branca) — ideia geral.", verso: "B: B1/B2, menos restritiva que A. C: mais flexível (antibióticos humanos controlados, ansiolíticos etc.), 2 vias.", topico: "receituario" },
      { id: "cp-fc16", frente: "Portaria 344/98 — papel das receitas A, B e C.", verso: "Regulam substâncias com potencial de abuso, dependência ou risco sanitário.", topico: "receituario" },
      { id: "cp-fc17", frente: "SIPEAGRO — exemplo de uso na aula?", verso: "Medicamentos veterinários de controle especial — ex.: cetamina e xilazina com receita SIPEAGRO.", topico: "receituario" },
      { id: "cp-fc18", frente: "MAPA na cadeia de medicamentos vet?", verso: "Fiscalização e liberação de produtos de uso veterinário.", topico: "receituario" },
      { id: "cp-fc19", frente: "Ivermectina — alerta do material para qual raça?", verso: "Contra-indicação/cuidado em cães pastores (sensibilidade MDR1).", topico: "prescricao" },
      { id: "cp-fc20", frente: "Cardiomiopatia hipertrófica — quem mais sofre?", verso: "Felinos — principal cardiomiopatia nos gatos; hipertrofia do septo interventricular reduz lúmen.", topico: "cardio-peq" },
      { id: "cp-fc21", frente: "Edema pulmonar cardiogênico — qual lado?", verso: "Insuficiência cardíaca esquerda — cardiogênico é sempre lado esquerdo no raciocínio do material.", topico: "cardio-peq" },
      { id: "cp-fc22", frente: "Líquido inflamatório no parênquima pulmonar vs não inflamatório?", verso: "Inflamatório: pneumonia. Não inflamatório: edema pulmonar.", topico: "cardio-peq" },
      { id: "cp-fc23", frente: "Tosse cardíaca vs respiratória (material).", verso: "Cardíaca: coração aumentado desloca dorsalmente traqueia — tosse seca, improdutiva, baixa intensidade. Respiratória: alta intensidade e forte.", topico: "cardio-peq" },
      { id: "cp-fc24", frente: "Graduação de sopros I a III (resumo).", verso: "I: brando. II: brando mas fácil de ouvir. III: moderado. (IV–VI: mais intenso + frêmito.)", topico: "cardio-peq" },
      { id: "cp-fc25", frente: "Endocardite degenerativa mitral — prevalência em cães?", verso: "Principal causa de doença cardíaca em cães; ~60% só mitral, 30% mitral+tricúspide, 10% só tricúspide.", topico: "dmvd" },
      { id: "cp-fc26", frente: "Tratamento farmacológico citado para DMVD / ICC (esqueleto).", verso: "IECA (benazepril/enalapril), furosemida, espironolactona, dieta hipossódica, repouso; pimobendana conforme estágio (inodilatador).", topico: "dmvd" },
      { id: "cp-fc27", frente: "Doses máximas de furosemida citadas (cão/gato).", verso: "Gato até ~4 mg/kg; cão até ~8 mg/kg (material de aula — conferir protocolo clínico atual).", topico: "dmvd" },
      { id: "cp-fc28", frente: "Órgãos-alvo da hipertensão arterial sistêmica.", verso: "Olhos (cegueira, glaucoma, hemorragias, descolamento de retina), rins, coração (hipertrofia concêntrica), SNC (AVC, convulsões).", topico: "hipertensao" },
      { id: "cp-fc29", frente: "ATE em gato — plano terapêutico citado.", verso: "Estabilizar, analgesia (butorfanol), heparina, AAS e repouso; prognóstico reservado.", topico: "ate-gato" },
      { id: "cp-fc30", frente: "Pericardiocentese — espaço intercostal citado.", verso: "7º espaço intercostal (material).", topico: "pericardio" },
      { id: "cp-fc31", frente: "Dispneia inspiratória vs expiratória vs mista.", verso: "Inspiratória: vias aéreas superiores. Expiratória: pulmões/brônquios. Mista: TRS + TRI comprometidos.", topico: "respiratorio" },
      { id: "cp-fc32", frente: "Fases da convulsão: pródromo, aura, icto, pós-icto.", verso: "Pródromo: comportamento, EEG normal. Aura: sinais estereotipados, EEG alterado. Icto: crise. Pós-icto: sedação/sede/comportamento alterado.", topico: "epilepsia" },
      { id: "cp-fc33", frente: "Emergência convulsiva: midazolam vs diazepam (material).", verso: "Midazolam: 1ª opção — hidrossolúvel, IN/IV/IM, ~0,3 mg/kg. Diazepam: 2ª — IV 0,5 mg/kg ou retal 2 mg/kg; hepatotoxicidade relativa.", topico: "epilepsia" },
      { id: "cp-fc34", frente: "Tratamento crônico de eleição para epilepsia?", verso: "Fenobarbital — monitorar níveis séricos (faixa terapêutica ~20–35 µg/mL) e bioquímica a cada 6 meses.", topico: "epilepsia" },
      { id: "cp-fc35", frente: "Brometo de potássio — cuidado em cardiopatas e uso em felinos.", verso: "Forma potássica usada em ICC; não usar em felinos (pode causar dificuldade respiratória).", topico: "epilepsia" },
      { id: "cp-fc36", frente: "Hipoglicemia vs hipocalcemia — pistas de paciente (material).", verso: "Filhote pequeno convulsionando: pensar hipoglicemia. Fêmea pós-parto convulsionando: hipocalcemia.", topico: "epilepsia" },
      { id: "cp-fc37", frente: "Etiologias de convulsão — mnemônico VITAMINAD (ideia).", verso: "Vascular, inflamatório/infeccioso/idiopático, trauma/tóxico, anomalias, metabólico, inflamatório, neoplasia/nutricional, anomalias, degeneração — esquema de classificação extracraniana/intracraniana.", topico: "epilepsia" },
    ],

    multiplaEscolha: [
      { id: "cp-mc1", pergunta: "Na estrutura do exame clínico, qual componente tem maior peso relativo (~50%)?", alternativas: [{ texto: "Resenha", correta: false }, { texto: "Anamnese", correta: true }, { texto: "Exame físico", correta: false }, { texto: "Exames complementares", correta: false }], topico: "exame-clinico", explicacao: "O histórico (anamnese) é a maior fatia — sem ele o físico fica 'cego'." },
      { id: "cp-mc2", pergunta: "Godet positivo na palpação sugere:", alternativas: [{ texto: "Osso exposto", correta: false }, { texto: "Consistência pastosa / flutuação compatível com líquido na cavidade", correta: true }, { texto: "Tecido ósseo duro", correta: false }, { texto: "Gás livre subcutâneo", correta: false }], topico: "semiotica", explicacao: "Pastoso/flutuante relaciona-se a líquido; Godet avalia deslocamento de fluido." },
      { id: "cp-mc3", pergunta: "Qual par não corresponde ao termo técnico?", alternativas: [{ texto: "Êmese — vômito", correta: false }, { texto: "Tenesmo — esforço para urinar sem resultado", correta: true }, { texto: "Dispneia — dificuldade respiratória", correta: false }, { texto: "Polaciúria — micções frequentes", correta: false }], topico: "termos-tecnicos", explicacao: "Tenesmo é esforço para defecar; disúria é dor ao urinar." },
      { id: "cp-mc4", pergunta: "Tratamento clínico envolve:", alternativas: [{ texto: "Apenas cirurgia", correta: false }, { texto: "Medicamentos e fluidoterapia", correta: true }, { texto: "Somente fitoterapia", correta: false }, { texto: "Jejum prolongado", correta: false }], topico: "diagnostico-prognostico", explicacao: "Tratamento clínico = fármacos + suporte (incluindo fluidos)." },
      { id: "cp-mc5", pergunta: "Prescrição para animal cardiopata deve ser:", alternativas: [{ texto: "Somente verbal", correta: false }, { texto: "Para manipulação, pois uso pode ser prolongado", correta: true }, { texto: "Sem assinatura", correta: false }, { texto: "Apenas digitada sem carimbo", correta: false }], topico: "prescricao", explicacao: "O material enfatiza receita para manipulação em cardiopatas." },
      { id: "cp-mc6", pergunta: "Receita A (amarela) é a mais restritiva porque inclui:", alternativas: [{ texto: "Somente vacinas", correta: false }, { texto: "Entorpecentes e psicotrópicos de alto potencial", correta: true }, { texto: "Shampoos antipulga", correta: false }, { texto: "Vitaminas", correta: false }], topico: "receituario", explicacao: "Listas A1, A2, A3 — controle máximo pela Portaria 344/98." },
      { id: "cp-mc7", pergunta: "Cetamina e xilazina (controle especial vet) exigem:", alternativas: [{ texto: "Receita branca simples", correta: false }, { texto: "Receita SIPEAGRO", correta: true }, { texto: "Somente nota fiscal", correta: false }, { texto: "Receita de padaria", correta: false }], topico: "receituario", explicacao: "SIPEAGRO para medicamentos controlados de uso veterinário específicos." },
      { id: "cp-mc8", pergunta: "Cardiomiopatia hipertrófica é mais prevalente em:", alternativas: [{ texto: "Cães de grande porte", correta: false }, { texto: "Felinos", correta: true }, { texto: "Aves", correta: false }, { texto: "Répteis", correta: false }], topico: "cardio-peq", explicacao: "CMH é a estrela (e o vilão) da cardiologia felina." },
      { id: "cp-mc9", pergunta: "Edema pulmonar cardiogênico está ligado a:", alternativas: [{ texto: "ICC direita isolada", correta: false }, { texto: "Insuficiência cardíaca esquerda", correta: true }, { texto: "Apenas pneumonia bacteriana", correta: false }, { texto: "Hipotireoidismo sem ICC", correta: false }], topico: "cardio-peq", explicacao: "Congestão pulmonar por aumento de pressão capilar esquerda." },
      { id: "cp-mc10", pergunta: "Sopro grau VI na escala do material:", alternativas: [{ texto: "Inaudível", correta: false }, { texto: "Muito alto, estetoscópio levemente afastado + frêmito", correta: true }, { texto: "Só com Doppler", correta: false }, { texto: "Normal fisiológico", correta: false }], topico: "cardio-peq", explicacao: "Grau VI é o extremo da escala de intensidade + frêmito precordial." },
      { id: "cp-mc11", pergunta: "Endocardite degenerativa mitral é mais comum em:", alternativas: [{ texto: "Gatos jovens", correta: false }, { texto: "Cães pequenos, machos, idosos (predisposição)", correta: true }, { texto: "Equinos", correta: false }, { texto: "Suínos", correta: false }], topico: "dmvd", explicacao: "DMVD — cães pequenos idosos, gênero macho, fator genético." },
      { id: "cp-mc12", pergunta: "Pimobendana no estágio B2 (material) atua como:", alternativas: [{ texto: "Antibiótico", correta: false }, { texto: "Inodilatador — aumenta contratilidade e ejeção", correta: true }, { texto: "Anticonvulsivante", correta: false }, { texto: "Antiemético", correta: false }], topico: "dmvd", explicacao: "Usada quando há progressão clínica/risco — inodilatador." },
      { id: "cp-mc13", pergunta: "Endocardite infecciosa — agentes citados:", alternativas: [{ texto: "Só vírus", correta: false }, { texto: "Streptococcus, Staphylococcus, E. coli", correta: true }, { texto: "Só fungos", correta: false }, { texto: "Helmintos", correta: false }], topico: "endocardite", explicacao: "Bactérias gram + e E. coli frequentes; vegetações valvares ao eco." },
      { id: "cp-mc14", pergunta: "Ecocardiograma na endocardite mostra vegetações descritas como:", alternativas: [{ texto: "Cálculo renal", correta: false }, { texto: "Aspecto em 'dedos de luva' / remodelamento valvar", correta: true }, { texto: "Derrame pericárdico seco", correta: false }, { texto: "Hidronefrose", correta: false }], topico: "endocardite", explicacao: "Vegetações e insuficiência secundária são marcas do quadro." },
      { id: "cp-mc15", pergunta: "Paralisia de membros pélvicos, dor, ausência de pulso femoral em gato com CMH sugere:", alternativas: [{ texto: "Otite", correta: false }, { texto: "Tromboembolismo aórtico (saddle thrombus)", correta: true }, { texto: "Luxação de quadril bilateral", correta: false }, { texto: "Gastroenterite", correta: false }], topico: "ate-gato", explicacao: "ATE secundária a CMH — emergência felina clássica." },
      { id: "cp-mc16", pergunta: "Derrame pericárdico com tamponamento — abordagem:", alternativas: [{ texto: "Ignorar se assintomático", correta: false }, { texto: "Pericardiocentese / retirada parcial do saco conforme caso", correta: true }, { texto: "Somente anti-inflamatório oral", correta: false }, { texto: "Banho e tosa", correta: false }], topico: "pericardio", explicacao: "Drenar o líquido alivia o tamponamento; exsudato séptico: ATB." },
      { id: "cp-mc17", pergunta: "Neoplasias cardíacas comuns em idosos (material):", alternativas: [{ texto: "Hemangiossarcoma atrial direito e linfossarcoma", correta: true }, { texto: "Somente papiloma cutâneo", correta: false }, { texto: "Cisto ovariano", correta: false }, { texto: "Tumor de glândula anal", correta: false }], topico: "pericardio", explicacao: "Podem causar derrame pericárdico e sinais de baixo débito." },
      { id: "cp-mc18", pergunta: "Convulsão é:", alternativas: [{ texto: "Sempre diagnóstico único 'epilepsia'", correta: false }, { texto: "Manifestação clínica — pode ter várias causas", correta: true }, { texto: "Sempre hipoglicemia", correta: false }, { texto: "Normal após banho", correta: false }], topico: "epilepsia", explicacao: "Convulsão é sinal, não doença única — investigar causa." },
      { id: "cp-mc19", pergunta: "Melhor opção de benzodiazepínico em emergência convulsiva (material):", alternativas: [{ texto: "Diazepam sempre em qualquer espécie sem restrição", correta: false }, { texto: "Midazolam — mais hidrossolúvel e versátil", correta: true }, { texto: "Clordiazepóxido oral", correta: false }, { texto: "Placebo", correta: false }], topico: "epilepsia", explicacao: "Midazolam 1ª linha; vias IV/IM/SC/IN conforme cenário." },
      { id: "cp-mc20", pergunta: "Fenobarbital crônico — monitoramento:", alternativas: [{ texto: "Nunca repetir exames", correta: false }, { texto: "Bioquímica hepática/renal periódica e níveis séricos", correta: true }, { texto: "Só contar convulsões", correta: false }, { texto: "Suspender se o animal comer ração", correta: false }], topico: "epilepsia", explicacao: "Hepatotoxicidade possível; faixa terapêutica ~20–35 µg/mL." },
      { id: "cp-mc21", pergunta: "Brometo de sódio vs potássio (ideia do material):", alternativas: [{ texto: "Sódio em hipoadrenocorticismo; potássio em ICC", correta: true }, { texto: "São intercambiáveis sem critério", correta: false }, { texto: "Só para felinos", correta: false }, { texto: "Contraindicados em qualquer cão", correta: false }], topico: "epilepsia", explicacao: "Escolha do sal conforme comorbidade — brometo não em felinos." },
      { id: "cp-mc22", pergunta: "Hipertensão sistêmica — causas citadas no material incluem:", alternativas: [{ texto: "Hipotireoidismo, hiperadrenocorticismo, diabetes", correta: true }, { texto: "Somente trauma craniano", correta: false }, { texto: "Somente verminose", correta: false }, { texto: "Exclusivamente alergia alimentar", correta: false }], topico: "hipertensao", explicacao: "SRAA e doenças endócrinas entram no jogo fisiopatológico." },
      { id: "cp-mc23", pergunta: "Ausculta mitral no cão — região típica:", alternativas: [{ texto: "Último espaço intercostal direito caudal", correta: false }, { texto: "Hemi-tórax esquerdo (EIC 4–5 esquerdo)", correta: true }, { texto: "Região lombar", correta: false }, { texto: "Mandíbula", correta: false }], topico: "cardio-peq", explicacao: "Foco mitral à esquerda; tricúspide mais à direita (4º EIC d)." },
      { id: "cp-mc24", pergunta: "Pneumonia vs edema pulmonar na lógica do conteúdo:", alternativas: [{ texto: "Ambos sempre sem febre", correta: false }, { texto: "Pneumonia: líquido inflamatório no parênquima; edema: não inflamatório", correta: true }, { texto: "São sinônimos", correta: false }, { texto: "Só radiografia de membros resolve", correta: false }], topico: "cardio-peq", explicacao: "Diferenciar etiologia guia antibiótico vs manejo de ICC." },
    ],

    dissertativas: [
      { id: "cp-d1", pergunta: "Liste os quatro blocos do exame clínico com os percentuais aproximados do material.", respostaEsperada: "Resenha ~0%; anamnese ~50%; exame físico ~35%; exames complementares ~15%.", topico: "exame-clinico" },
      { id: "cp-d2", pergunta: "Explique inspeção, percussão, palpação e auscultação em uma linha cada.", respostaEsperada: "Inspeção: observação visual global. Percussão: batidas para sons de cavidades. Palpação: tacto da consistência e conteúdos. Auscultação: estetoscópio em traqueia, pulmão, coração e TGI.", topico: "semiotica" },
      { id: "cp-d3", pergunta: "O que deve constar na prescrição médica veterinária (itens principais)?", respostaEsperada: "Cabeçalho (clínica, endereço, telefone); identificação do paciente (nome, espécie, idade, raça, sexo) e tutor; medicamento (nome, concentração, quantidade); tipo de uso; instruções (via, intervalo, duração). Caneta preta, sem rasura, assinatura e carimbo.", topico: "prescricao" },
      { id: "cp-d4", pergunta: "Compare receitas A, B e C quanto ao grau de restrição.", respostaEsperada: "A (amarela): mais restritiva — entorpecentes/psicróticos fortes. B (azul): intermediária. C (branca): mais flexível entre as controladas, 2 vias. Todas sob Portaria 344/98.", topico: "receituario" },
      { id: "cp-d5", pergunta: "Descreva ICC esquerda vs direita com sinais-chave.", respostaEsperada: "Esquerda: congestão pulmonar, edema pulmonar, dispneia, tosse cardíaca. Direita: congestão sistêmica, ascite, hepatomegalia, edema de membros pélvicos, efusão pleural.", topico: "cardio-peq" },
      { id: "cp-d6", pergunta: "Monte um plano terapêutico para DMVD estágio B2/C com fármacos do material.", respostaEsperada: "IECA (benazepril/enalapril), diurético de alça (furosemida), espironolactona se indicado, pimobendana conforme estágio, dieta hipossódica, repouso relativo, monitorar função renal e eletrólitos.", topico: "dmvd" },
      { id: "cp-d7", pergunta: "Como diferenciar tosse cardíaca de tosse respiratória?", respostaEsperada: "Cardíaca: coração aumentado comprime/desloca traqueia dorsalmente — tosse seca, improdutiva, fraca. Respiratória: intensa e produtiva/forte, ligada a vias/pulmão.", topico: "cardio-peq" },
      { id: "cp-d8", pergunta: "Emergência convulsiva: passos com midazolam e se refratário?", respostaEsperada: "Midazolam IV/IM/IN ~0,3 mg/kg até 2–3 doses/24h; se não cessar, considerar anestesia curta (propofol/cetamina) para proteger o cérebro; oxigenoterapia, resfriamento se hipertermia, tratar causa de base.", topico: "epilepsia" },
      { id: "cp-d9", pergunta: "Quando pensar em hipoglicemia e hipocalcemia como causa de convulsão?", respostaEsperada: "Filhote pequeno: hipoglicemia. Fêmea recentemente parida: eclâmpsia/hipocalcemia. Sempre glicemia e Ca no trabalho.", topico: "epilepsia" },
      { id: "cp-d10", pergunta: "Tratamento de ATE felina segundo o roteiro da aula.", respostaEsperada: "Estabilizar paciente; analgesia (butorfanol); anticoagulação (heparina); AAS; repouso absoluto; prognóstico reservado.", topico: "ate-gato" },
    ],

    casosClinicos: [
      {
        id: "cp-cc1",
        titulo: "Caso — Cão com sopro e tosse seca",
        topico: "dmvd",
        cenario:
          "Mel, pinscher 11 anos, 3 kg, tosse leve noturna, intolerância a exercícios, sopro holossistólico forte no 5º EIC esquerdo. Radiografia: veia pulmonar congestiva.",
        perguntas: [
          { texto: "Suspeita principal e por quê?", resposta: "Degeneração mixomatosa da valva mitral (DMVD) — cão pequeno idoso, sopro mitral, sinais de congestão pulmonar/tosse cardíaca.", tipo: "dissertativa" },
          { texto: "Três classes de fármacos do material + um não farmacológico.", resposta: "IECA (benazepril/enalapril), diurético (furosemida), inodilatador (pimobendana) conforme estágio; dieta hipossódica e repouso.", tipo: "dissertativa" },
          { texto: "Por que a tosse pode ser 'cardíaca' neste caso?", resposta: "Aumento atrial/esquerda desloca traqueia dorsalmente, irritando mucosa — tosse seca e improdutiva.", tipo: "dissertativa" },
        ],
      },
      {
        id: "cp-cc2",
        titulo: "Caso — Gato com dispneia e membros frios",
        topico: "ate-gato",
        cenario:
          "Nina, SRD 6 anos, cardiopata conhecida, de repente não usa membros pélvicos, vocaliza dor, pulso femoral ausente, mucosas pálidas.",
        perguntas: [
          { texto: "Diagnóstico provável?", resposta: "Tromboembolismo aórtico (saddle thrombus) secundário a CMH.", tipo: "dissertativa" },
          { texto: "Conduta imediata (material).", resposta: "Estabilizar, analgesia com butorfanol, heparina, AAS, repouso; explicar prognóstico reservado ao tutor.", tipo: "dissertativa" },
        ],
      },
      {
        id: "cp-cc3",
        titulo: "Caso — Prescrição incompleta",
        topico: "prescricao",
        cenario:
          "Estagiário redige receita só com nome do remédio e 'dar para o cão'. Tutor compra dose humana errada.",
        perguntas: [
          { texto: "O que faltou na prescrição?", resposta: "Identificação completa do paciente e tutor, concentração, quantidade, via, intervalo, duração, assinatura e carimbo; evitar abreviaturas.", tipo: "dissertativa" },
          { texto: "Por que cardiopatas precisam de manipulação?", resposta: "Tratamento prolongado — doses precisas e rastreabilidade do que foi prescrito.", tipo: "dissertativa" },
        ],
      },
      {
        id: "cp-cc4",
        titulo: "Caso — Convulsão em filhote",
        topico: "epilepsia",
        cenario:
          "Chihuahua 8 semanas, 600 g, em jejum prolongado após viagem, tremores e convulsão na chegada à clínica.",
        perguntas: [
          { texto: "Primeira hipótese metabólica?", resposta: "Hipoglicemia — filhote pequeno, jejum, estresse.", tipo: "dissertativa" },
          { texto: "Após estabilizar glicemia, qual benzodiazepínico de 1ª escolha se crise persistir?", resposta: "Midazolam (0,3 mg/kg) IV/IM/IN conforme disponibilidade.", tipo: "dissertativa" },
        ],
      },
      {
        id: "cp-cc5",
        titulo: "Caso — Endocardite",
        topico: "endocardite",
        cenario:
          "Pastor alemão 5 anos, febre, prostração, novo sopro, leucocitose com desvio à esquerda, hemocultura positiva.",
        perguntas: [
          { texto: "Diagnóstico e exame de imagem-chave?", resposta: "Endocardite bacteriana — ecocardiograma com vegetações valvares ('dedos de luva').", tipo: "dissertativa" },
          { texto: "Linha de tratamento.", resposta: "Antibioticoterapia prolongada guiada por hemocultura/antibiograma; suporte clínico; monitorar ICC.", tipo: "dissertativa" },
        ],
      },
      {
        id: "cp-cc6",
        titulo: "Caso — Derrame pericárdico",
        topico: "pericardio",
        cenario:
          "Dogue alemão 7 anos, abafamento cardíaco, pulso paradoxal, radiografia com silhueta globosa.",
        perguntas: [
          { texto: "Conduta intervencionista urgente?", resposta: "Pericardiocentese (7º EIC citado no material) para aliviar tamponamento; investigar neoplasia vs idiopático vs séptico.", tipo: "dissertativa" },
          { texto: "Neoplasias cardíacas citadas?", resposta: "Hemangiossarcoma atrial direito e linfossarcoma em animais senis.", tipo: "dissertativa" },
        ],
      },
    ],

    topicos: {
      "exame-clinico": "Exame clínico — estrutura e vitais",
      semiotica: "Métodos semióticos",
      "diagnostico-prognostico": "Diagnóstico, tratamento e prognóstico",
      "termos-tecnicos": "Termos técnicos por sistema",
      prescricao: "Prescrição e boas práticas",
      receituario: "Receituário — Portaria 344, SIPEAGRO, MAPA",
      "cardio-peq": "Cardiologia de pequenos animais",
      dmvd: "Degeneração mitral e manejo de ICC",
      hipertensao: "Hipertensão arterial sistêmica",
      "ate-gato": "Tromboembolismo aórtico felino",
      pericardio: "Doenças pericárdicas e neoplasias",
      endocardite: "Endocardite infecciosa",
      respiratorio: "Padrões respiratórios",
      epilepsia: "Convulsões e epilepsia",
    },
  },

  poaTecnologia: {
    id: "poaTecnologia",
    ordem: 30,
    provaAtual: true,
    nome: "Tecnologia de POA I",
    icone: "🥩",
    descricao:
      "Abate (bovinos, suínos, aves), transformação do músculo em carne, PSE/DFD, classificação e tipificação. Força, Carine — João na torcida 💜",
    corPrimaria: "#b91c1c",
    corSecundaria: "#f59e0b",
    cramFlashN: 20,
    cramMcN: 15,

    flashcards: [
      // --- Conceitos gerais ---
      { id: "poa-fc1", frente: "O que é Tecnologia de POA?", verso: "Aplicação de métodos e técnicas para preparo, armazenamento, processamento, controle, embalagem, distribuição e utilização dos alimentos.", topico: "conceitos" },
      { id: "poa-fc2", frente: "Por que carne macia tem maior risco de contaminação?", verso: "Maior capacidade de retenção de água — ambiente mais favorável ao crescimento bacteriano.", topico: "conceitos" },
      { id: "poa-fc3", frente: "Cite 3 objetivos da tecnologia nos alimentos.", verso: "1) Abastecimento com boa qualidade; 2) Aumentar vida útil; 3) Obter alimentos seguros quanto a condições higiênico-sanitárias.", topico: "conceitos" },

      // --- Abate bovinos ---
      { id: "poa-fc4", frente: "No transporte de bovinos, o que o piso do veículo deve ter?", verso: "Tapete de borracha e grades de ferro quadriculadas para evitar escorregões.", topico: "abate-bovinos" },
      { id: "poa-fc5", frente: "Tempo máximo para desembarque após conferência de documentos?", verso: "10 minutos — desembarque imediato.", topico: "abate-bovinos" },
      { id: "poa-fc6", frente: "Curral de chegada: qual a altura mínima das cercas?", verso: "Cerca de 2 metros de altura.", topico: "abate-bovinos" },
      { id: "poa-fc7", frente: "Como identificar o curral de observação visualmente?", verso: "Duas últimas linhas superiores de tábuas pintadas de vermelho (ou faixa vermelha se alvenaria). Afastado no mínimo 3 m dos currais de chegada.", topico: "abate-bovinos" },
      { id: "poa-fc8", frente: "Tempo de repouso no curral de matança?", verso: "Mínimo 6h e máximo 24h, com dieta hídrica (jejum + água).", topico: "abate-bovinos" },
      { id: "poa-fc9", frente: "Qual a finalidade do jejum no curral de matança?", verso: "Esvaziar o TGI, facilitando a evisceração; a hidratação facilita a esfola e diminui ruptura do couro.", topico: "abate-bovinos" },
      { id: "poa-fc10", frente: "Banho de aspersão: pressão, tempo e efeito fisiológico?", verso: "Água hiperclorada a 3 atm por 3 minutos. Causa vasoconstrição periférica e vasodilatação interna → sangria mais abundante.", topico: "abate-bovinos" },
      { id: "poa-fc11", frente: "O que é a 'seringa' no fluxograma de abate?", verso: "Afunilamento da rampa de acesso ao box de insensibilização — animais em fila indiana.", topico: "abate-bovinos" },
      { id: "poa-fc12", frente: "Método de insensibilização em bovinos?", verso: "Concussão cerebral com pistola pneumática de percussão com êmbolo cativo. Tempo até sangria: 60 segundos.", topico: "insensibilizacao" },
      { id: "poa-fc13", frente: "Sinais de eficiência do atordoamento?", verso: "Nenhuma vocalização, queda imediata, espasmos na perna/músculo traseiro, expressão fixa e vidrada.", topico: "insensibilizacao" },
      { id: "poa-fc14", frente: "Sangria completa em bovinos: quanto sangue e em quanto tempo?", verso: "Retirada de 50% do sangue em 3 minutos. Nenhuma outra operação durante esse tempo.", topico: "abate-bovinos" },
      { id: "poa-fc15", frente: "Na sangria, como o animal é posicionado?", verso: "Içado por corrente presa a uma das patas traseiras, pendurado em trilho aéreo (nória).", topico: "abate-bovinos" },
      { id: "poa-fc16", frente: "Esfola: por onde começa e como?", verso: "Corte nos chifres e patas dianteiras → abertura do pescoço → corte longitudinal da pele do peito até o ânus.", topico: "abate-bovinos" },
      { id: "poa-fc17", frente: "Cuidados na evisceração de bovinos?", verso: "Retirar previamente úteros grávidos; após evisceração, serrar carcaça ao longo da coluna vertebral em duas meias-carcaças + inspeção post-mortem.", topico: "abate-bovinos" },
      { id: "poa-fc18", frente: "Teor de cloro na água de lavagem das carcaças?", verso: "0,5 a 1,0 ppm — controlado pela empresa em pontos aleatórios.", topico: "abate-bovinos" },
      { id: "poa-fc19", frente: "Onde as meias-carcaças bovinas são carimbadas?", verso: "Coxão, ponta de agulha, lombo e paleta — com tinta atóxica.", topico: "abate-bovinos" },
      { id: "poa-fc20", frente: "Temperatura de resfriamento das carcaças bovinas?", verso: "Até 7°C. Depois são serradas em 3 partes: dianteiro, traseiro e ponta de agulha.", topico: "abate-bovinos" },

      // --- Abate suínos ---
      { id: "poa-fc21", frente: "Quando transportar suínos para abate?", verso: "Nas horas com temperaturas mais amenas do dia, evitando agitação e barulho.", topico: "abate-suinos" },
      { id: "poa-fc22", frente: "Pocilgas de sequestro: para que servem?", verso: "Receber suínos que necessitam de exame clínico e observação acurada antes do abate.", topico: "abate-suinos" },
      { id: "poa-fc23", frente: "Finalidade do banho de aspersão em suínos (além de limpar)?", verso: "Resfria, limpa e acalma os suínos; reduz resistência da pele → maior condução de corrente elétrica para a insensibilização.", topico: "abate-suinos" },
      { id: "poa-fc24", frente: "Método de insensibilização em suínos?", verso: "Eletronarcose na região das têmporas. Tempo até sangria: 30 segundos.", topico: "insensibilizacao" },
      { id: "poa-fc25", frente: "Escaldagem de suínos: temperatura e tempo?", verso: "Tanques com água entre 62°C e 72°C por 2 a 5 minutos. Tanque com renovação constante de água.", topico: "abate-suinos" },
      { id: "poa-fc26", frente: "O que é o chamuscamento em suínos?", verso: "Queima dos pelos remanescentes da depilação — flambagem um de cada vez. NÃO pode ser feito antes da depilação.", topico: "abate-suinos" },
      { id: "poa-fc27", frente: "Temperatura interna das meias-carcaças suínas no resfriamento?", verso: "Repouso de 12h até atingir 1°C no interior das massas musculares.", topico: "abate-suinos" },

      // --- Abate aves ---
      { id: "poa-fc28", frente: "Captura de aves: quando e como?", verso: "Rápida, preferencialmente à noite sob luz azul. Transporte em gaiolas.", topico: "abate-aves" },
      { id: "poa-fc29", frente: "Recepção de aves: como deve ser o local?", verso: "Plataforma coberta, protegida de ventos e incidência direta de raios solares (parcial ou totalmente fechada), com ventilação e umidificação.", topico: "abate-aves" },
      { id: "poa-fc30", frente: "Método de insensibilização em aves?", verso: "Eletronarcose por imersão em água com corrente elétrica, máximo 12–15 segundos.", topico: "insensibilizacao" },
      { id: "poa-fc31", frente: "Escaldagem de aves: temperatura e objetivo?", verso: "Tanque com água a 60°C logo após sangria. Objetivo: amolecer penas e lavagem prévia.", topico: "abate-aves" },
      { id: "poa-fc32", frente: "Depenagem: é manual ou mecânica?", verso: "Mecanizada com aves suspensas pelos pés. Se pés/cabeças forem removidos, é obrigatória a instalação de ponto de inspeção.", topico: "abate-aves" },
      { id: "poa-fc33", frente: "Pré-resfriamento de aves: temperatura final e tempo?", verso: "Imersão em água gelada, 30 min de permanência. Temperatura final ≤ 7°C. Água em sentido contrário à movimentação.", topico: "abate-aves" },
      { id: "poa-fc34", frente: "Gotejamento de aves: limite de absorção de água?", verso: "Não deve ultrapassar 8% do peso da carcaça. Feito imediatamente após o pré-resfriamento.", topico: "abate-aves" },
      { id: "poa-fc35", frente: "Temperatura final de armazenamento de carcaças de aves?", verso: "-1°C a 4°C, tolerando variação de 1°C.", topico: "abate-aves" },
      { id: "poa-fc36", frente: "Classificação dos pés de frango?", verso: "Pé A: sem calos. Pé B: calos pequenos aceitáveis.", topico: "abate-aves" },

      // --- Transformação músculo → carne ---
      { id: "poa-fc37", frente: "O que é carne segundo o RIISPOA (Decreto 9.013/2017)?", verso: "Massas musculares e demais tecidos que as acompanham, incluída ou não a base óssea, de diferentes espécies, julgadas aptas pela inspeção veterinária oficial.", topico: "transformacao" },
      { id: "poa-fc38", frente: "Carne vermelha vs carne branca: diferença?", verso: "Vermelha (bovinos, búfalo, ovino, caprino, suíno, equídeo, coelho): alto teor de mioglobina/hemoglobina. Branca (aves, peixes): baixo teor.", topico: "transformacao" },
      { id: "poa-fc39", frente: "Fibras vermelhas vs fibras brancas do músculo?", verso: "Vermelhas: alto teor de mioglobina, coloração avermelhada. Brancas: baixo teor de mioglobina, contração rápida.", topico: "transformacao" },
      { id: "poa-fc40", frente: "Quais são as 3 categorias de proteínas musculares?", verso: "1) Sarcoplasmáticas (mioglobina, hemoglobina → cor); 2) Miofibrilares (actina, miosina, tropomiosina, troponina → contração); 3) Tecido conjuntivo (colágeno, elastina).", topico: "transformacao" },
      { id: "poa-fc41", frente: "O que ocorre na sangria em termos bioquímicos?", verso: "Interrupção da circulação → sem aporte de nutrientes e O₂ → esgotamento de ATP → redução do pH e temperatura.", topico: "transformacao" },
      { id: "poa-fc42", frente: "Relação glicogênio × pH da carne?", verso: "Maior reserva de glicogênio → mais ácido lático → pH mais baixo. Reservas baixas de glicogênio → pH alto.", topico: "transformacao" },
      { id: "poa-fc43", frente: "O que é a maturação da carne e para que serve?", verso: "Desaparecimento do rigor mortis. Enzimas proteolíticas atuam sobre proteínas miofibrilares (separação da actomiosina). Desenvolve odor e sabor característico.", topico: "maturacao" },

      // --- Fases da maturação ---
      { id: "poa-fc44", frente: "Quais as 3 fases da maturação da carne?", verso: "1) Pré-rigor; 2) Rigor mortis; 3) Pós-rigor.", topico: "maturacao" },
      { id: "poa-fc45", frente: "Pré-rigor: características?", verso: "Inicia imediatamente após abate. Boa capacidade de retenção de água e boa elasticidade.", topico: "maturacao" },
      { id: "poa-fc46", frente: "Rigor mortis: o que acontece?", verso: "Rigidez cadavérica — contração irreversível quando reservas energéticas se esgotam. Musculatura firme e rígida, pH cai. Formação do complexo actomiosina.", topico: "maturacao" },
      { id: "poa-fc47", frente: "Pós-rigor: enzimas envolvidas?", verso: "Relaxamento lento. Catepsina e calpaína degradam actina, miosina e linha Z (proteólise). Carne fica macia com sabor típico.", topico: "maturacao" },

      // --- PSE / DFD / falhas ---
      { id: "poa-fc48", frente: "Carne PSE: o que significa e causa?", verso: "Pálida, Mole e Exsudativa. Estresse agudo na hora do abate → pH cai com temperatura ainda alta → desnaturação de proteínas. Mais comum em suínos.", topico: "falhas" },
      { id: "poa-fc49", frente: "Carne DFD: o que significa e causa?", verso: "Escura, Firme e Seca. Estresse crônico prolongado → glicogênio consumido antes do abate → pH cai lentamente → susceptível a crescimento bacteriano.", topico: "falhas" },
      { id: "poa-fc50", frente: "Encurtamento pelo frio: quando ocorre?", verso: "Quando a temperatura atinge ≤10°C antes de 10h de resfriamento → contração indesejada → carne firme, sem maciez, sabor deficiente.", topico: "falhas" },
      { id: "poa-fc51", frente: "Rigor de descongelamento: o que é?", verso: "Músculo congelado antes do rigor mortis sofre rigor mais severo no descongelamento → perda de até 80% do comprimento → perda de umidade e rigidez elevada.", topico: "falhas" },
      { id: "poa-fc52", frente: "4 consequências do manejo pré-abate inadequado (ENADE 2019)?", verso: "1) PSE/DFD; 2) Redução do aproveitamento da carne; 3) Alteração de pH, cor, umidade e textura; 4) Contaminação da carcaça por falta/excesso de jejum.", topico: "falhas" },

      // --- Classificação e tipificação ---
      { id: "poa-fc53", frente: "Fatores que influenciam a qualidade da carne?", verso: "Raça/linhagem, sexo, castração, nutrição, fase na curva de crescimento (peso/idade), manejo pré-abate.", topico: "classificacao" },
      { id: "poa-fc54", frente: "O que a ultrassonografia mede na carcaça (EGS)?", verso: "Espessura de gordura subcutânea entre 12ª e 13ª costela, sobre o músculo longissimus dorsi (contrafilé).", topico: "classificacao" },
      { id: "poa-fc55", frente: "Área de olho de lombo (AOL): o que avalia?", verso: "Quantidade de carne na carcaça, mensurada no longissimus dorsi. Calcula rendimento da carcaça.", topico: "classificacao" },
      { id: "poa-fc56", frente: "Marmoreio: o que é?", verso: "Gordura intramuscular depositada na região — influencia sabor e suculência da carne.", topico: "classificacao" },
      { id: "poa-fc57", frente: "Categorias de acabamento de gordura (1 a 5)?", verso: "1-Magra (ausente); 2-Escassa (1–3mm); 3-Mediana (3–6mm); 4-Uniforme (6–10mm); 5-Excessiva (>10mm).", topico: "classificacao" },
      { id: "poa-fc58", frente: "Classificação vs Tipificação?", verso: "Classificação: agrupa carcaças com características semelhantes. Tipificação: hierarquiza classes em tipos para auxiliar a comercialização.", topico: "classificacao" },
      { id: "poa-fc59", frente: "O que é retirado para obter o peso da carcaça?", verso: "Cabeça, patas, rabada, glândula mamária (fêmea), verga/testículos (macho), rins, gorduras perirrenal/inguinal, ferida de sangria, medula espinhal, diafragma e pilares.", topico: "classificacao" },
      { id: "poa-fc60", frente: "AVI (Análise de Vídeo Imagem): o que faz?", verso: "Avalia rendimento e qualidade da carne gerando mapa elétrico captado por câmera de vídeo, analisado por software. Baixo custo, sem interação avaliador–carcaça.", topico: "classificacao" },
    ],

    multiplaEscolha: [
      // --- Conceitos ---
      { id: "poa-mc1", pergunta: "Carne macia tem maior risco de contaminação bacteriana porque:", alternativas: [{ texto: "Tem menos gordura", correta: false }, { texto: "Possui maior capacidade de retenção de água", correta: true }, { texto: "É mais velha", correta: false }, { texto: "Tem mais colágeno", correta: false }], topico: "conceitos", explicacao: "Água disponível favorece crescimento bacteriano." },

      // --- Abate bovinos ---
      { id: "poa-mc2", pergunta: "Tempo mínimo de repouso no curral de matança (bovinos)?", alternativas: [{ texto: "2 horas", correta: false }, { texto: "6 horas", correta: true }, { texto: "12 horas", correta: false }, { texto: "1 hora", correta: false }], topico: "abate-bovinos", explicacao: "Mínimo 6h e máximo 24h, com dieta hídrica." },
      { id: "poa-mc3", pergunta: "O banho de aspersão em bovinos utiliza água hiperclorada a qual pressão?", alternativas: [{ texto: "1 atm", correta: false }, { texto: "3 atm", correta: true }, { texto: "5 atm", correta: false }, { texto: "10 atm", correta: false }], topico: "abate-bovinos", explicacao: "3 atm por 3 minutos — vasoconstrição periférica." },
      { id: "poa-mc4", pergunta: "Qual o tempo máximo entre insensibilização e sangria em bovinos?", alternativas: [{ texto: "30 segundos", correta: false }, { texto: "60 segundos", correta: true }, { texto: "90 segundos", correta: false }, { texto: "120 segundos", correta: false }], topico: "insensibilizacao", explicacao: "Bovinos: 60s; suínos: 30s; aves: 15s." },
      { id: "poa-mc5", pergunta: "A sangria completa em bovinos retira que percentual de sangue?", alternativas: [{ texto: "30%", correta: false }, { texto: "40%", correta: false }, { texto: "50%", correta: true }, { texto: "70%", correta: false }], topico: "abate-bovinos", explicacao: "50% do sangue em 3 minutos." },
      { id: "poa-mc6", pergunta: "Teor de cloro na água de lavagem das carcaças bovinas:", alternativas: [{ texto: "0,1 a 0,3 ppm", correta: false }, { texto: "0,5 a 1,0 ppm", correta: true }, { texto: "2,0 a 5,0 ppm", correta: false }, { texto: "10 ppm", correta: false }], topico: "abate-bovinos", explicacao: "Controlado pela empresa em pontos aleatórios." },
      { id: "poa-mc7", pergunta: "Temperatura de resfriamento das carcaças bovinas:", alternativas: [{ texto: "Até 0°C", correta: false }, { texto: "Até 4°C", correta: false }, { texto: "Até 7°C", correta: true }, { texto: "Até 10°C", correta: false }], topico: "abate-bovinos", explicacao: "Após 7°C são serradas em dianteiro, traseiro e ponta de agulha." },
      { id: "poa-mc8", pergunta: "A carimbagem das meias-carcaças bovinas é feita com:", alternativas: [{ texto: "Tinta à base de corante artificial", correta: false }, { texto: "Tinta atóxica", correta: true }, { texto: "Laser", correta: false }, { texto: "Etiqueta adesiva", correta: false }], topico: "abate-bovinos", explicacao: "Garante procedência de estabelecimento inspecionado." },

      // --- Abate suínos ---
      { id: "poa-mc9", pergunta: "Insensibilização em suínos é feita por:", alternativas: [{ texto: "Pistola de êmbolo cativo", correta: false }, { texto: "Eletronarcose nas têmporas", correta: true }, { texto: "Imersão em água com corrente", correta: false }, { texto: "CO₂", correta: false }], topico: "insensibilizacao", explicacao: "Bovinos: pistola. Suínos: eletronarcose têmporas. Aves: eletronarcose imersão." },
      { id: "poa-mc10", pergunta: "A escaldagem de suínos ocorre em que faixa de temperatura?", alternativas: [{ texto: "40°C a 50°C", correta: false }, { texto: "62°C a 72°C", correta: true }, { texto: "80°C a 90°C", correta: false }, { texto: "100°C", correta: false }], topico: "abate-suinos", explicacao: "Por 2 a 5 minutos com renovação constante de água." },
      { id: "poa-mc11", pergunta: "O chamuscamento em suínos NÃO pode ser feito:", alternativas: [{ texto: "Após a depilação", correta: false }, { texto: "Antes da depilação", correta: true }, { texto: "Após a evisceração", correta: false }, { texto: "Em lotes", correta: false }], topico: "abate-suinos", explicacao: "Só após depilação — flambagem um de cada vez." },
      { id: "poa-mc12", pergunta: "Temperatura interna final no resfriamento de carcaças suínas:", alternativas: [{ texto: "7°C", correta: false }, { texto: "4°C", correta: false }, { texto: "1°C", correta: true }, { texto: "10°C", correta: false }], topico: "abate-suinos", explicacao: "12h de repouso até atingir 1°C no interior das massas musculares." },

      // --- Abate aves ---
      { id: "poa-mc13", pergunta: "Captura de aves para abate deve ser feita preferencialmente:", alternativas: [{ texto: "Ao meio-dia, sob luz intensa", correta: false }, { texto: "À noite, sob luz azul", correta: true }, { texto: "Pela manhã, com barulho", correta: false }, { texto: "A qualquer hora", correta: false }], topico: "abate-aves", explicacao: "Reduz estresse — luz azul acalma as aves." },
      { id: "poa-mc14", pergunta: "Limite de absorção de água no gotejamento de aves:", alternativas: [{ texto: "5%", correta: false }, { texto: "8%", correta: true }, { texto: "12%", correta: false }, { texto: "15%", correta: false }], topico: "abate-aves", explicacao: "Não pode ultrapassar 8% do peso da carcaça." },
      { id: "poa-mc15", pergunta: "Temperatura de armazenamento de carcaças de aves:", alternativas: [{ texto: "0°C a 7°C", correta: false }, { texto: "-1°C a 4°C", correta: true }, { texto: "-18°C a -10°C", correta: false }, { texto: "5°C a 10°C", correta: false }], topico: "abate-aves", explicacao: "Tolerando variação de 1°C." },
      { id: "poa-mc16", pergunta: "Temperatura da água na escaldagem de aves:", alternativas: [{ texto: "40°C", correta: false }, { texto: "60°C", correta: true }, { texto: "72°C", correta: false }, { texto: "80°C", correta: false }], topico: "abate-aves", explicacao: "Logo após sangria, para amolecer penas." },

      // --- Transformação ---
      { id: "poa-mc17", pergunta: "Qual proteína dá a cor vermelha à carne?", alternativas: [{ texto: "Actina", correta: false }, { texto: "Mioglobina", correta: true }, { texto: "Colágeno", correta: false }, { texto: "Tropomiosina", correta: false }], topico: "transformacao", explicacao: "Mioglobina e hemoglobina são proteínas sarcoplasmáticas responsáveis pela cor." },
      { id: "poa-mc18", pergunta: "O complexo actomiosina se forma em qual fase?", alternativas: [{ texto: "Pré-rigor", correta: false }, { texto: "Rigor mortis", correta: true }, { texto: "Pós-rigor", correta: false }, { texto: "Maturação tardia", correta: false }], topico: "maturacao", explicacao: "Junção irreversível de actina + miosina quando ATP se esgota." },
      { id: "poa-mc19", pergunta: "As enzimas catepsina e calpaína atuam em qual fase?", alternativas: [{ texto: "Pré-rigor", correta: false }, { texto: "Rigor mortis", correta: false }, { texto: "Pós-rigor (maturação)", correta: true }, { texto: "Sangria", correta: false }], topico: "maturacao", explicacao: "Degradam actina, miosina e linha Z — amaciam a carne." },

      // --- PSE / DFD ---
      { id: "poa-mc20", pergunta: "Carne PSE é mais comum em qual espécie?", alternativas: [{ texto: "Bovinos", correta: false }, { texto: "Aves", correta: false }, { texto: "Suínos", correta: true }, { texto: "Ovinos", correta: false }], topico: "falhas", explicacao: "Estresse agudo → queda rápida de pH com temperatura ainda alta." },
      { id: "poa-mc21", pergunta: "Carne DFD resulta de:", alternativas: [{ texto: "Estresse agudo no abate", correta: false }, { texto: "Estresse crônico prolongado antes do abate", correta: true }, { texto: "Resfriamento rápido demais", correta: false }, { texto: "Congelamento antes do rigor", correta: false }], topico: "falhas", explicacao: "Glicogênio consumido durante estresse → pH alto → escura, firme e seca." },
      { id: "poa-mc22", pergunta: "Encurtamento pelo frio ocorre quando a temperatura atinge ≤10°C antes de:", alternativas: [{ texto: "2 horas", correta: false }, { texto: "5 horas", correta: false }, { texto: "10 horas", correta: true }, { texto: "24 horas", correta: false }], topico: "falhas", explicacao: "Contração indesejada → carne sem maciez." },
      { id: "poa-mc23", pergunta: "No rigor de descongelamento, o músculo pode perder até que percentual do comprimento original?", alternativas: [{ texto: "20%", correta: false }, { texto: "50%", correta: false }, { texto: "80%", correta: true }, { texto: "100%", correta: false }], topico: "falhas", explicacao: "Congelado antes do rigor → rigor severo ao descongelar." },

      // --- Classificação ---
      { id: "poa-mc24", pergunta: "Gordura escassa na classificação de acabamento tem espessura de:", alternativas: [{ texto: "Ausente", correta: false }, { texto: "1 a 3 mm", correta: true }, { texto: "3 a 6 mm", correta: false }, { texto: "6 a 10 mm", correta: false }], topico: "classificacao", explicacao: "1-Magra (ausente); 2-Escassa (1–3mm); 3-Mediana (3–6mm)." },
      { id: "poa-mc25", pergunta: "O marmoreio refere-se a:", alternativas: [{ texto: "Gordura subcutânea", correta: false }, { texto: "Gordura perirrenal", correta: false }, { texto: "Gordura intramuscular", correta: true }, { texto: "Gordura intermuscular", correta: false }], topico: "classificacao", explicacao: "Influencia sabor e suculência da carne." },
      { id: "poa-mc26", pergunta: "A falta de gordura subcutânea durante o resfriamento causa:", alternativas: [{ texto: "Melhor sabor", correta: false }, { texto: "Perda excessiva de água, redução de peso e escurecimento", correta: true }, { texto: "Apenas perda de cor", correta: false }, { texto: "Nenhum efeito", correta: false }], topico: "classificacao", explicacao: "Gordura protege a carcaça durante o resfriamento." },

      // --- Insensibilização comparada ---
      { id: "poa-mc27", pergunta: "Tempo máximo entre insensibilização e sangria — suínos:", alternativas: [{ texto: "15 segundos", correta: false }, { texto: "30 segundos", correta: true }, { texto: "60 segundos", correta: false }, { texto: "90 segundos", correta: false }], topico: "insensibilizacao", explicacao: "Suínos: 30s. Bovinos: 60s. Aves: 15s." },
      { id: "poa-mc28", pergunta: "A semelhança entre os métodos de insensibilização é:", alternativas: [{ texto: "Todos usam pistola", correta: false }, { texto: "Todos provocam perda de consciência evitando dor e sofrimento", correta: true }, { texto: "Todos usam corrente elétrica", correta: false }, { texto: "Todos são por imersão", correta: false }], topico: "insensibilizacao", explicacao: "Finalidade comum: bem-estar animal — perda de consciência sem dor." },
    ],

    dissertativas: [
      { id: "poa-d1", pergunta: "Descreva as etapas do fluxograma de abate bovino, do embarque ao resfriamento.", respostaEsperada: "Embarque/transporte → desembarque/recepção → curral de chegada → curral de observação → curral de matança (6–24h dieta hídrica) → banho de aspersão (3 atm, 3 min) → seringa → insensibilização (pistola êmbolo cativo) → sangria (50% sangue em 3 min) → esfola → evisceração → lavagem (cloro 0,5–1 ppm) → carimbagem → resfriamento (7°C) → estocagem → expedição.", topico: "abate-bovinos" },
      { id: "poa-d2", pergunta: "Compare os métodos de insensibilização para bovinos, suínos e aves.", respostaEsperada: "Bovinos: concussão cerebral com pistola pneumática de êmbolo cativo (60s até sangria). Suínos: eletronarcose na região das têmporas (30s). Aves: eletronarcose por imersão em água com corrente elétrica (máx 12–15s). Todos visam perda de consciência e bem-estar animal.", topico: "insensibilizacao" },
      { id: "poa-d3", pergunta: "Explique as 3 fases da maturação da carne e as enzimas envolvidas.", respostaEsperada: "Pré-rigor: logo após abate, boa retenção de água e elasticidade. Rigor mortis: esgotamento de ATP, contração irreversível, formação de actomiosina, queda de pH. Pós-rigor: relaxamento lento pela ação de catepsina e calpaína que degradam actina, miosina e linha Z → carne macia com sabor característico.", topico: "maturacao" },
      { id: "poa-d4", pergunta: "O que é carne PSE e carne DFD? Quais as causas de cada uma?", respostaEsperada: "PSE (Pálida, Mole, Exsudativa): estresse agudo na hora do abate → pH cai rapidamente com temperatura alta → desnaturação proteica → perde água, mais comum em suínos. DFD (Escura, Firme, Seca): estresse crônico prolongado → glicogênio consumido → pH cai lentamente → suscetível a bactérias, maior risco de deterioração.", topico: "falhas" },
      { id: "poa-d5", pergunta: "Quais as 3 categorias de proteínas musculares e suas funções?", respostaEsperada: "Sarcoplasmáticas (mioglobina, hemoglobina): promovem cor vermelha. Miofibrilares (actina, miosina, tropomiosina, troponina): mecanismo de contração muscular. Tecido conjuntivo (colágeno, elastina): estrutura e sustentação.", topico: "transformacao" },
      { id: "poa-d6", pergunta: "Descreva os parâmetros utilizados para classificação e tipificação de carcaças bovinas.", respostaEsperada: "Sexo (M, C, F, FV); maturidade (dentes incisivos); peso da carcaça (sem cabeça, patas, vísceras etc.); acabamento de gordura (1-magra a 5-excessiva); EGS por ultrassom (12ª–13ª costela); AOL (área de olho de lombo); marmoreio (gordura intramuscular). Classificação agrupa semelhantes; tipificação hierarquiza para comercialização.", topico: "classificacao" },
      { id: "poa-d7", pergunta: "Por que o banho de aspersão é importante no abate bovino? Explique o efeito fisiológico.", respostaEsperada: "Limpa a superfície corporal do animal. Água hiperclorada a 3 atm por 3 minutos provoca vasoconstrição periférica e vasodilatação interna, tornando a sangria mais abundante e eficiente.", topico: "abate-bovinos" },
      { id: "poa-d8", pergunta: "ENADE 2019: Indique 4 possíveis consequências na qualidade da carcaça quando o manejo pré-abate não é adequado.", respostaEsperada: "1) Carne PSE (pálida, mole, exsudativa); 2) Carne DFD (escura, firme, seca); 3) Alteração de pH, cor, umidade e textura; 4) Contaminação da carcaça por falta ou excesso de jejum; redução do aproveitamento da carne.", topico: "falhas" },
      { id: "poa-d9", pergunta: "Diferencie o fluxograma de abate de suínos do de bovinos nos pontos-chave.", respostaEsperada: "Suínos: transporte em horas amenas; pocilgas (não currais); insensibilização por eletronarcose (não pistola); escaldagem (62–72°C) + depilação + chamuscamento em vez de esfola; resfriamento até 1°C (não 7°C como bovinos).", topico: "abate-suinos" },
      { id: "poa-d10", pergunta: "Explique o encurtamento pelo frio e o rigor de descongelamento.", respostaEsperada: "Encurtamento pelo frio: temperatura ≤10°C antes de 10h de resfriamento → contração indesejada → carne firme, sem maciez. Rigor de descongelamento: músculo congelado antes do rigor mortis → rigor severo ao descongelar → perda de até 80% do comprimento, muita perda de umidade e rigidez.", topico: "falhas" },
    ],

    casosClinicos: [
      {
        id: "poa-cc1",
        titulo: "Caso — Carne pálida na linha de produção",
        topico: "falhas",
        cenario:
          "Frigorífico de suínos detecta lote com carne de cor pálida, textura mole e exsudação excessiva logo após o abate. O veterinário é chamado para avaliar.",
        perguntas: [
          { texto: "Qual o defeito de qualidade e sua causa provável?", resposta: "Carne PSE (Pálida, Mole, Exsudativa). Causa: estresse agudo na hora do abate → queda rápida de pH com temperatura da carcaça ainda alta → desnaturação de proteínas → perda de capacidade de retenção de água.", tipo: "dissertativa" },
          { texto: "Que medidas preventivas no manejo pré-abate poderiam evitar isso?", resposta: "Transporte em horas amenas, sem agitação; repouso adequado nas pocilgas; banho de aspersão para acalmar; insensibilização eficiente (eletronarcose correta); evitar estresse agudo.", tipo: "dissertativa" },
          { texto: "Qual a consequência tecnológica dessa carne?", resposta: "Baixa qualidade tecnológica: aparência brilhante (perda de água), baixa aceitação pelo consumidor, menor rendimento na industrialização.", tipo: "dissertativa" },
        ],
      },
      {
        id: "poa-cc2",
        titulo: "Caso — Carcaça escura no resfriamento",
        topico: "falhas",
        cenario:
          "Bovinos transportados por 18 horas em caminhão superlotado, sem água, chegam ao frigorífico. Após abate, as carcaças apresentam coloração escura e pH elevado.",
        perguntas: [
          { texto: "Qual o defeito e por que o pH está alto?", resposta: "Carne DFD (Escura, Firme, Seca). Estresse crônico durante o transporte prolongado consumiu as reservas de glicogênio muscular → pouco ácido lático formado → pH alto.", tipo: "dissertativa" },
          { texto: "Qual o risco sanitário desse tipo de carne?", resposta: "pH alto favorece crescimento bacteriano → maior risco de deterioração e menor vida de prateleira.", tipo: "dissertativa" },
        ],
      },
      {
        id: "poa-cc3",
        titulo: "Caso — Falha na insensibilização de bovino",
        topico: "insensibilizacao",
        cenario:
          "Operador aplica pistola de êmbolo cativo em bovino, mas o animal vocaliza e não cai imediatamente. O fiscal veterinário intervém.",
        perguntas: [
          { texto: "Quais sinais indicam que a insensibilização falhou?", resposta: "Vocalização, ausência de queda imediata, falta de espasmos nas pernas/músculo traseiro, expressão não fixa. Deve-se repetir o procedimento, mas isso compromete o bem-estar animal.", tipo: "dissertativa" },
          { texto: "Qual o tempo máximo para iniciar a sangria após a insensibilização correta em bovinos?", resposta: "60 segundos. Se não for realizada nesse tempo, o animal pode retomar a consciência.", tipo: "dissertativa" },
        ],
      },
      {
        id: "poa-cc4",
        titulo: "Caso — Gotejamento excessivo em aves",
        topico: "abate-aves",
        cenario:
          "Inspetor verifica que carcaças de frango saindo do gotejamento estão com peso 12% acima do original. O responsável técnico é notificado.",
        perguntas: [
          { texto: "Qual o limite legal de absorção de água e o que fazer?", resposta: "Máximo 8% do peso da carcaça. Com 12%, o lote está irregular. Deve-se ajustar o tempo/método de pré-resfriamento e gotejamento, verificar a renovação de água dos resfriadores.", tipo: "dissertativa" },
          { texto: "Por que o pré-resfriamento por imersão deve ter água em sentido contrário?", resposta: "A renovação em sentido contrário à movimentação das carcaças garante que a água mais limpa entre em contato com as carcaças que estão saindo, reduzindo contaminação cruzada.", tipo: "dissertativa" },
        ],
      },
      {
        id: "poa-cc5",
        titulo: "Caso — Avaliação de carcaça bovina",
        topico: "classificacao",
        cenario:
          "Técnico precisa tipificar carcaça de novilho castrado, 30 meses, com 4 mm de EGS e boa conformação muscular na região do longissimus dorsi.",
        perguntas: [
          { texto: "Como classificar o sexo e a maturidade?", resposta: "Sexo: macho castrado (C). Maturidade: verificada pelo exame dos dentes incisivos permanentes — 30 meses indica animal jovem.", tipo: "dissertativa" },
          { texto: "Qual a categoria de acabamento de gordura com 4 mm de EGS?", resposta: "Gordura mediana (3) — acima de 3 até 6 mm de espessura.", tipo: "dissertativa" },
          { texto: "Que outros parâmetros o técnico deve avaliar?", resposta: "Peso da carcaça, área de olho de lombo (AOL), marmoreio (gordura intramuscular), conformação geral. Pode usar ultrassonografia ou AVI.", tipo: "dissertativa" },
        ],
      },
    ],

    topicos: {
      conceitos: "Conceitos gerais de Tecnologia de POA",
      "abate-bovinos": "Fluxograma de abate — Bovinos",
      "abate-suinos": "Fluxograma de abate — Suínos",
      "abate-aves": "Fluxograma de abate — Aves",
      insensibilizacao: "Métodos de insensibilização",
      transformacao: "Transformação do músculo em carne",
      maturacao: "Fases da maturação (rigor mortis)",
      falhas: "PSE, DFD e falhas no manejo pré-abate",
      classificacao: "Classificação e tipificação de carcaças",
    },
  },

  medicinaVet: {
    id: "medicinaVet",
    ordem: 40,
    emBreve: true,
    nome: "Técnica cirúrgica vet",
    icone: "📘",
    descricao: "Conteúdo futuro no app — em breve.",
    corPrimaria: "#1d4ed8",
    corSecundaria: "#60a5fa",
    cramFlashN: 18,
    cramMcN: 12,
    flashcards: [],
    multiplaEscolha: [],
    dissertativas: [],
    casosClinicos: [],
    topicos: {},
  },

  inspecaoPOA1: {
    id: "inspecaoPOA1",
    ordem: 50,
    emBreve: true,
    nome: "Inspeção POA-1",
    icone: "📋",
    descricao: "Em breve — matéria será adicionada quando chegar a vez.",
    corPrimaria: "#b45309",
    corSecundaria: "#fbbf24",
    cramFlashN: 18,
    cramMcN: 12,
    flashcards: [],
    multiplaEscolha: [],
    dissertativas: [],
    casosClinicos: [],
    topicos: {},
  },

  ornitopatologia: {
    id: "ornitopatologia",
    ordem: 60,
    emBreve: true,
    nome: "Ornitopatologia",
    icone: "🐦",
    descricao: "Em breve no calendário de estudos.",
    corPrimaria: "#0e7490",
    corSecundaria: "#22d3ee",
    cramFlashN: 18,
    cramMcN: 12,
    flashcards: [],
    multiplaEscolha: [],
    dissertativas: [],
    casosClinicos: [],
    topicos: {},
  },

  ginecologiaObstetricia: {
    id: "ginecologiaObstetricia",
    ordem: 70,
    emBreve: true,
    nome: "Ginecologia e obstetrícia animal",
    icone: "🤰",
    descricao: "Em breve — slot reservado para quando for a vez da prova.",
    corPrimaria: "#be185d",
    corSecundaria: "#f472b6",
    cramFlashN: 18,
    cramMcN: 12,
    flashcards: [],
    multiplaEscolha: [],
    dissertativas: [],
    casosClinicos: [],
    topicos: {},
  },

  anestesiologiaAnimal: {
    id: "anestesiologiaAnimal",
    ordem: 80,
    emBreve: true,
    nome: "Anestesiologia animal",
    icone: "💉",
    descricao: "Em breve — conteúdo entra com o tempo.",
    corPrimaria: "#6d28d9",
    corSecundaria: "#c4b5fd",
    cramFlashN: 18,
    cramMcN: 12,
    flashcards: [],
    multiplaEscolha: [],
    dissertativas: [],
    casosClinicos: [],
    topicos: {},
  },

};
