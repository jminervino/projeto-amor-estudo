// ============================================================
// FelixStudy — Base de Dados Multi-Matéria
// Para adicionar uma nova matéria, crie um novo objeto seguindo
// o mesmo modelo de "felinos" e adicione ao objeto MATERIAS.
// ============================================================

const MATERIAS = {
  felinos: {
    id: 'felinos',
    nome: 'Eletiva II – Felinos',
    icone: '🐱',
    descricao: 'Medicina Veterinária de Felinos',
    corPrimaria: '#7c3aed',
    corSecundaria: '#f59e0b',

    flashcards: [
      // --- Práticas Cat Friendly ---
      { id: 'fc1', frente: 'Quais são os 5 princípios Cat Friendly?', verso: '1) Lugar seguro\n2) Múltiplos recursos ambientais\n3) Brincadeiras predatórias\n4) Relação positiva e negativa homem/gato\n5) Estímulos sensoriais agradáveis', topico: 'catfriendly' },
      { id: 'fc2', frente: 'Como orientar o tutor para transporte Cat Friendly?', verso: 'Acostumar o paciente na caixa de transporte, colocar pano/toalha por cima para reduzir estresse, ensaiar visitas ao veterinário.', topico: 'catfriendly' },
      { id: 'fc3', frente: 'Como deve ser o ambiente veterinário Cat Friendly?', verso: 'Sala/área exclusiva para felinos, difusores de feromônio, ambiente silencioso.', topico: 'catfriendly' },

      // --- Neonato Órfão ---
      { id: 'fc4', frente: 'Quais são os cuidados iniciais com um neonato órfão felino?', verso: '1) Limpar com gaze/flanela levemente umedecida com água morna\n2) Secar cuidadosamente e aquecer\n3) Alimentar\n4) Estimular micção e defecação', topico: 'neonato-orfao' },
      { id: 'fc5', frente: 'Como estimular micção e defecação em neonatos órfãos?', verso: 'Com gaze ou algodão umedecido em água morna, fazer movimentos suaves na região perineal, simulando a lambida da mãe.', topico: 'neonato-orfao' },

      // --- Convívio entre gatos ---
      { id: 'fc6', frente: 'Quais estratégias para melhorar o convívio entre gatos?', verso: 'Troca de cheiros, aromatizador ambiente, música instrumental, cromoterapia, desvio de atenção com brincadeiras, feromônios sintéticos.', topico: 'catfriendly' },

      // --- Intoxicação por Paracetamol ---
      { id: 'fc7', frente: 'Quais os sinais clínicos de intoxicação por paracetamol em gatos?', verso: 'Cianose, icterícia, mucosas pálidas, depressão, vômitos, anorexia, hipóxia, edema de membros e face, letargia.', topico: 'intox-paracetamol' },
      { id: 'fc8', frente: 'Qual o tratamento para intoxicação por paracetamol em gatos?', verso: 'NÃO induzir vômito | Oxigenioterapia e fluidoterapia | Acetilcisteína (antídoto) | Carvão ativado até 1h após ingestão | Ácido ascórbico.', topico: 'intox-paracetamol' },
      { id: 'fc9', frente: 'Qual o antídoto para intoxicação por paracetamol?', verso: 'Acetilcisteína (N-acetilcisteína).', topico: 'intox-paracetamol' },
      { id: 'fc10', frente: 'Deve-se induzir vômito na intoxicação por paracetamol em gatos?', verso: 'NÃO. O paracetamol causa metemoglobinemia e a emese pode piorar o quadro. O tratamento é suporte + antídoto.', topico: 'intox-paracetamol' },

      // --- Intoxicação por Organofosforado ---
      { id: 'fc11', frente: 'Quais os sinais clínicos de intoxicação por organofosforado em gatos?', verso: 'Convulsões, vômitos, hiper/hipoexcitabilidade, sialorreia, diarreia, apatia, bradicardia, cianose, paralisia e morte.', topico: 'intox-organofosforado' },
      { id: 'fc12', frente: 'Qual o antídoto para intoxicação por organofosforado?', verso: 'Atropina — reverte efeitos muscarínicos: hipersalivação, bradicardia, miose, secreções pulmonares.', topico: 'intox-organofosforado' },
      { id: 'fc13', frente: 'Qual o tratamento completo para intoxicação por organofosforado?', verso: 'Oxigenioterapia | Anticonvulsivo (diazepam) | Atropina (antídoto) | Descontaminação oral: carvão ativado até 1h | Descontaminação cutânea: lavar com água morna e sabão neutro | Monitorar FC e FR.', topico: 'intox-organofosforado' },

      // --- Quinolonas e AINES ---
      { id: 'fc14', frente: 'Quais os efeitos indesejados das Quinolonas em gatos?', verso: 'Incoordenação, tremor, nistagmo, convulsão e cegueira aguda irreversível.', topico: 'farmacos-quinolona-aines' },
      { id: 'fc15', frente: 'Quais os efeitos indesejados dos AINES em gatos?', verso: 'Intoxicação, anorexia, vômitos, letargia, melena, ataxia e polidipsia.', topico: 'farmacos-quinolona-aines' },

      // --- Odontologia Felina ---
      { id: 'fc16', frente: 'Como é feito o diagnóstico de gengivite felina?', verso: 'Radiografia intraoral, anamnese + exame físico oral detalhado, hemograma e bioquímico hepático e renal, sondagem periodontal.', topico: 'odontologia-felina' },
      { id: 'fc17', frente: 'Qual o tratamento da gengivite felina?', verso: 'Limpeza supra e subgengival, remoção dos depósitos dentários (placa e cálculo) e profilaxia.', topico: 'odontologia-felina' },
      { id: 'fc18', frente: 'Como diferenciar gengivite de periodontite no tratamento?', verso: 'Gengivite: limpeza + remoção de placa/cálculo + profilaxia.\nPeriodontite: limpeza + extração dentária com perda de inserção + profilaxia rigorosa.', topico: 'odontologia-felina' },
      { id: 'fc19', frente: 'Qual o tratamento da reabsorção dentária felina?', verso: 'Profilaxia e controle + extração cirúrgica.', topico: 'odontologia-felina' },
      { id: 'fc20', frente: 'Qual o tratamento da gengivoestomatite crônica felina?', verso: 'Analgésico (tramadol) | AIE (prednisolona) ou AINE (meloxicam) | Antibiótico em quadros agudos, pré ou pós-cirúrgico (metronidazol).', topico: 'odontologia-felina' },

      // --- Lipidose Hepática ---
      { id: 'fc21', frente: 'Quais as causas da lipidose hepática felina?', verso: 'Obesidade, diabetes, pancreatite, hiperparatireoidismo, cardiopatia, anorexia prolongada, retirada de proteínas.', topico: 'lipidose-hepatica' },
      { id: 'fc22', frente: 'Quais os sinais clínicos da lipidose hepática?', verso: 'Anorexia prolongada, letargia, depressão, perda de peso, icterícia, desidratação e hepatomegalia.', topico: 'lipidose-hepatica' },
      { id: 'fc23', frente: 'Qual o tratamento da lipidose hepática felina?', verso: 'Hepato e gastroprotetores | Correção e monitoração hidroeletrolítica (K, P e Na) | Suporte nutricional | Antieméticos e procinéticos.', topico: 'lipidose-hepatica' },

      // --- Pancreatite ---
      { id: 'fc24', frente: 'Quais os sinais clínicos da pancreatite felina?', verso: 'Anorexia, letargia, vômitos, diarreia, perda de peso, PU/PD, dor abdominal, desidratação, mucosas pálidas, icterícia, hipo/hipertermia, ascite e massa abdominal palpável.', topico: 'pancreatite' },
      { id: 'fc25', frente: 'Qual o exame padrão-ouro para pancreatite felina?', verso: 'Lipase imunoespecífica SPEC FPLI.', topico: 'pancreatite' },
      { id: 'fc26', frente: 'Qual o tratamento da pancreatite felina?', verso: 'Fluidoterapia | Corrigir hipocalcemia e hipocalemia | Analgesia (fentanil) | Antieméticos (ondasetrona) | Dieta hiperproteica (cobalamina e ômega 3).', topico: 'pancreatite' },

      // --- Platinossomose ---
      { id: 'fc27', frente: 'Qual o ciclo da platinossomose?', verso: 'Gato (HD) ingere isópodes terrestres, caramujos ou lagartixas (HI) → infecção por predação → eliminação dos ovos nas fezes → HI ingerem os ovos → gato preda os HI.', topico: 'platinossomose' },
      { id: 'fc28', frente: 'Qual o tratamento da platinossomose?', verso: 'Praziquantel.', topico: 'platinossomose' },
      { id: 'fc29', frente: 'Qual a patogenia da platinossomose?', verso: 'Parasita migra para fígado, vesícula biliar e ductos biliares → irritação e inflamação crônica do epitélio biliar → espessamento dos ductos biliares → pode causar colangiohepatite, fibrose biliar, cirrose e/ou obstrução biliar.', topico: 'platinossomose' },

      // --- CRVF ---
      { id: 'fc30', frente: 'Como diferenciar FHV de FCV clinicamente?', verso: 'FHV: ceratite ulcerativa, espirros frequentes, secreção nasal/ocular INTENSA, aborto.\nFCV: úlceras ORAIS, poliartrite, espirros leve a moderados, sialorreia, claudicação.', topico: 'crvf-fhv-fcv' },
      { id: 'fc31', frente: 'Qual o tratamento para CRVF (FHV/FCV)?', verso: 'Dipirona (febre) | Omiclom A orabase (úlceras orais) | Antibiótico (amoxicilina, azitromicina ou doxiciclina).', topico: 'crvf-fhv-fcv' },
      { id: 'fc32', frente: 'Qual o esquema vacinal da V3 para adultos?', verso: 'Duas doses com intervalo de 21/30 dias, reforço a cada 3 anos ou anual.', topico: 'crvf-fhv-fcv' },

      // --- Rinite ---
      { id: 'fc33', frente: 'O que a rinite unilateral sugere como causas?', verso: 'Corpo estranho, neoplasias, pólipos, infecção fúngica, fístula oronasal.', topico: 'rinite' },
      { id: 'fc34', frente: 'Qual o tratamento da rinite felina?', verso: 'Fluidoterapia | Lavagem nasal e nebulização | Descongestionantes e histamínicos | Anti-inflamatórios (meloxicam ou prednisolona) | Antifúngico e antibiótico (apenas confirmatório) | Cirurgia (neoplasias e pólipos).', topico: 'rinite' },

      // --- Bronquite e Asma ---
      { id: 'fc35', frente: 'Como diferenciar asma de bronquite felina?', verso: 'Asma: tosse episódica, postura ortopneica, eosinófilos >20%, quadro AGUDO (cianose).\nBronquite: tosse frequente, neutrófilos >10%, quadro CRÔNICO (dispneia, taquipneia, sibilos).', topico: 'bronquite-asma' },
      { id: 'fc36', frente: 'Qual o tratamento da asma/bronquite felina?', verso: 'Oxigenioterapia | Broncodilatadores (Terbutalina) | AIES (Prednisolona) | Eliminação do alérgeno.', topico: 'bronquite-asma' },
    ],

    multiplaEscolha: [
      // --- Intoxicação por Paracetamol ---
      { id: 'mc1', pergunta: 'Qual é o antídoto para intoxicação por paracetamol em felinos?', alternativas: [{ texto: 'Atropina', correta: false }, { texto: 'Acetilcisteína', correta: true }, { texto: 'Diazepam', correta: false }, { texto: 'Vitamina K', correta: false }], topico: 'intox-paracetamol', explicacao: 'A acetilcisteína (N-acetilcisteína) é o antídoto específico pois repõe os estoques de glutationa hepática.' },
      { id: 'mc2', pergunta: 'Na intoxicação por paracetamol em gatos, deve-se:', alternativas: [{ texto: 'Induzir vômito imediatamente', correta: false }, { texto: 'Administrar carvão ativado até 1h após ingestão + Acetilcisteína', correta: true }, { texto: 'Administrar atropina IV', correta: false }, { texto: 'Fazer lavagem gástrica com água oxigenada', correta: false }], topico: 'intox-paracetamol', explicacao: 'NÃO se induz vômito. O tratamento inclui oxigenioterapia, fluidoterapia, acetilcisteína, carvão ativado até 1h e ácido ascórbico.' },
      { id: 'mc3', pergunta: 'Quais sinais clínicos são compatíveis com intoxicação por paracetamol em felinos?', alternativas: [{ texto: 'Poliúria, polidipsia e polifagia', correta: false }, { texto: 'Cianose, icterícia, edema de face e membros', correta: true }, { texto: 'Diarreia sanguinolenta e melena', correta: false }, { texto: 'Convulsões tônico-clônicas e opistótono', correta: false }], topico: 'intox-paracetamol', explicacao: 'A intoxicação por paracetamol causa metemoglobinemia (cianose), lesão hepática (icterícia) e edema de face e membros.' },

      // --- Intoxicação por Organofosforado ---
      { id: 'mc4', pergunta: 'Qual é o antídoto para intoxicação por organofosforado em felinos?', alternativas: [{ texto: 'Acetilcisteína', correta: false }, { texto: 'Flumazenil', correta: false }, { texto: 'Atropina', correta: true }, { texto: 'Naloxona', correta: false }], topico: 'intox-organofosforado', explicacao: 'Atropina reverte os efeitos muscarínicos: hipersalivação, bradicardia, miose e secreções pulmonares.' },
      { id: 'mc5', pergunta: 'Na intoxicação por organofosforado, a atropina é usada para reverter:', alternativas: [{ texto: 'Efeitos nicotínicos como fasciculações musculares', correta: false }, { texto: 'Efeitos muscarínicos como bradicardia e sialorreia', correta: true }, { texto: 'Efeitos centrais como convulsões', correta: false }, { texto: 'Efeitos hepatotóxicos como icterícia', correta: false }], topico: 'intox-organofosforado', explicacao: 'A atropina é anticolinérgico que reverte efeitos muscarínicos: hipersalivação, bradicardia, miose e secreções pulmonares.' },
      { id: 'mc6', pergunta: 'Qual anticonvulsivo é indicado na intoxicação por organofosforado?', alternativas: [{ texto: 'Fenobarbital', correta: false }, { texto: 'Gabapentina', correta: false }, { texto: 'Diazepam', correta: true }, { texto: 'Levetiracetam', correta: false }], topico: 'intox-organofosforado', explicacao: 'O diazepam é o anticonvulsivo de escolha para controle das convulsões na intoxicação por organofosforado.' },
      { id: 'mc7', pergunta: 'Como deve ser a descontaminação cutânea na intoxicação por organofosforado?', alternativas: [{ texto: 'Lavar com álcool iodado', correta: false }, { texto: 'Lavar com água morna e sabão neutro', correta: true }, { texto: 'Aplicar vaselina sobre a pele', correta: false }, { texto: 'Não é necessária descontaminação cutânea', correta: false }], topico: 'intox-organofosforado', explicacao: 'A descontaminação cutânea é feita lavando com água morna e sabão neutro para remover o produto da pele.' },

      // --- Lipidose Hepática ---
      { id: 'mc8', pergunta: 'Qual achado hematológico é característico da lipidose hepática felina?', alternativas: [{ texto: 'Leucocitose com desvio à esquerda', correta: false }, { texto: 'Anemia com poiquilocitose', correta: true }, { texto: 'Trombocitopenia severa', correta: false }, { texto: 'Policitemia', correta: false }], topico: 'lipidose-hepatica', explicacao: 'No hemograma da lipidose hepática encontramos anemia com poiquilocitose (hemácias de formas anormais).' },
      { id: 'mc9', pergunta: 'Qual é o tratamento da lipidose hepática felina?', alternativas: [{ texto: 'Antibioticoterapia agressiva + jejum', correta: false }, { texto: 'Hepatoprotetores + correção hidroeletrolítica + suporte nutricional + antieméticos', correta: true }, { texto: 'Apenas fluidoterapia e observação', correta: false }, { texto: 'Cirurgia hepática de emergência', correta: false }], topico: 'lipidose-hepatica', explicacao: 'O tratamento inclui hepato e gastroprotetores, correção hidroeletrolítica (K, P e Na), suporte nutricional e antieméticos/procinéticos.' },
      { id: 'mc10', pergunta: 'Quais eletrólitos devem ser monitorados na lipidose hepática?', alternativas: [{ texto: 'Cálcio e magnésio', correta: false }, { texto: 'Potássio, fósforo e sódio', correta: true }, { texto: 'Ferro e zinco', correta: false }, { texto: 'Cloro e bicarbonato', correta: false }], topico: 'lipidose-hepatica', explicacao: 'Na lipidose hepática é fundamental corrigir e monitorar K, P e Na (hipocalemia, hipofosfatemia).' },

      // --- Pancreatite ---
      { id: 'mc11', pergunta: 'Qual é o exame padrão-ouro para diagnóstico de pancreatite felina?', alternativas: [{ texto: 'Amilase sérica', correta: false }, { texto: 'Lipase imunoespecífica SPEC FPLI', correta: true }, { texto: 'Radiografia abdominal', correta: false }, { texto: 'Hemograma completo', correta: false }], topico: 'pancreatite', explicacao: 'A lipase imunoespecífica SPEC FPLI é o padrão-ouro por sua alta sensibilidade e especificidade para pancreatite felina.' },
      { id: 'mc12', pergunta: 'Qual analgésico é indicado no tratamento da pancreatite felina?', alternativas: [{ texto: 'Meloxicam', correta: false }, { texto: 'Tramadol', correta: false }, { texto: 'Fentanil', correta: true }, { texto: 'Dipirona', correta: false }], topico: 'pancreatite', explicacao: 'A analgesia na pancreatite felina é feita com fentanil, um opioide potente para dor visceral intensa.' },
      { id: 'mc13', pergunta: 'Qual antiemético é indicado no tratamento da pancreatite felina?', alternativas: [{ texto: 'Metoclopramida', correta: false }, { texto: 'Ondasetrona', correta: true }, { texto: 'Domperidona', correta: false }, { texto: 'Ranitidina', correta: false }], topico: 'pancreatite', explicacao: 'A ondasetrona (ondansetrona) é o antiemético de escolha no tratamento da pancreatite felina.' },
      { id: 'mc14', pergunta: 'Qual dieta é recomendada na pancreatite felina?', alternativas: [{ texto: 'Dieta hipoproteica e hiperlipídica', correta: false }, { texto: 'Jejum prolongado por 72h', correta: false }, { texto: 'Dieta hiperproteica com cobalamina e ômega 3', correta: true }, { texto: 'Dieta à base de carboidratos complexos', correta: false }], topico: 'pancreatite', explicacao: 'Na pancreatite felina recomenda-se dieta hiperproteica suplementada com cobalamina e ômega 3.' },

      // --- Platinossomose ---
      { id: 'mc15', pergunta: 'Qual é o tratamento da platinossomose?', alternativas: [{ texto: 'Metronidazol', correta: false }, { texto: 'Fenbendazol', correta: false }, { texto: 'Praziquantel', correta: true }, { texto: 'Ivermectina', correta: false }], topico: 'platinossomose', explicacao: 'O praziquantel é o fármaco de escolha para o tratamento da platinossomose.' },
      { id: 'mc16', pergunta: 'Quais são os hospedeiros intermediários do Platynosomum?', alternativas: [{ texto: 'Pulgas e carrapatos', correta: false }, { texto: 'Isópodes terrestres, caramujos e lagartixas', correta: true }, { texto: 'Mosquitos e borrachudos', correta: false }, { texto: 'Ratos e camundongos', correta: false }], topico: 'platinossomose', explicacao: 'Os HI são isópodes terrestres, caramujos e lagartixas. O gato se infecta ao predá-los.' },
      { id: 'mc17', pergunta: 'Para onde migra o Platynosomum no organismo do gato?', alternativas: [{ texto: 'Pulmões e brônquios', correta: false }, { texto: 'Fígado, vesícula biliar e ductos biliares', correta: true }, { texto: 'Rins e bexiga', correta: false }, { texto: 'Intestino delgado e ceco', correta: false }], topico: 'platinossomose', explicacao: 'O parasita migra para fígado, vesícula biliar e ductos biliares, causando inflamação crônica do epitélio biliar.' },

      // --- CRVF ---
      { id: 'mc18', pergunta: 'Qual vírus causa úlceras orais, poliartrite e claudicação em felinos?', alternativas: [{ texto: 'FHV (Herpesvírus felino)', correta: false }, { texto: 'FCV (Calicivírus felino)', correta: true }, { texto: 'FIV (Imunodeficiência felina)', correta: false }, { texto: 'FeLV (Leucemia felina)', correta: false }], topico: 'crvf-fhv-fcv', explicacao: 'O FCV causa úlceras orais, poliartrite, claudicação e sialorreia. O FHV causa ceratite ulcerativa e secreção intensa.' },
      { id: 'mc19', pergunta: 'Qual o intervalo entre doses da V3 para gatos adultos?', alternativas: [{ texto: '7 dias', correta: false }, { texto: '14 dias', correta: false }, { texto: '21 a 30 dias', correta: true }, { texto: '60 dias', correta: false }], topico: 'crvf-fhv-fcv', explicacao: 'Para adultos: duas doses com intervalo de 21/30 dias, reforço a cada 3 anos ou anual.' },
      { id: 'mc20', pergunta: 'Qual antibiótico pode ser usado no tratamento de CRVF?', alternativas: [{ texto: 'Cefalexina', correta: false }, { texto: 'Enrofloxacina', correta: false }, { texto: 'Amoxicilina, azitromicina ou doxiciclina', correta: true }, { texto: 'Gentamicina', correta: false }], topico: 'crvf-fhv-fcv', explicacao: 'Os antibióticos indicados para prevenir infecções secundárias na CRVF são amoxicilina, azitromicina ou doxiciclina.' },
      { id: 'mc21', pergunta: 'Qual medicamento é indicado para úlceras orais na CRVF?', alternativas: [{ texto: 'Nistatina', correta: false }, { texto: 'Omiclom A orabase', correta: true }, { texto: 'Omeprazol', correta: false }, { texto: 'Sucralfato', correta: false }], topico: 'crvf-fhv-fcv', explicacao: 'Omiclom A orabase é indicado para tratamento das úlceras orais causadas pelo FCV.' },

      // --- Odontologia Felina ---
      { id: 'mc22', pergunta: 'Qual a diferença no tratamento entre gengivite e periodontite felina?', alternativas: [{ texto: 'Gengivite: extração dentária | Periodontite: apenas profilaxia', correta: false }, { texto: 'Gengivite: limpeza + profilaxia | Periodontite: limpeza + extração com perda de inserção + profilaxia', correta: true }, { texto: 'Não há diferença no tratamento', correta: false }, { texto: 'Ambas requerem extração total dos dentes', correta: false }], topico: 'odontologia-felina', explicacao: 'Na gengivite: limpeza supra/subgengival + remoção de placa/cálculo + profilaxia. Na periodontite: inclui extração dentária com perda de inserção.' },
      { id: 'mc23', pergunta: 'Qual analgésico é usado na gengivoestomatite crônica felina?', alternativas: [{ texto: 'Fentanil', correta: false }, { texto: 'Morfina', correta: false }, { texto: 'Tramadol', correta: true }, { texto: 'Dipirona', correta: false }], topico: 'odontologia-felina', explicacao: 'O tramadol é o analgésico indicado na gengivoestomatite crônica felina.' },
      { id: 'mc24', pergunta: 'Qual antibiótico é indicado na gengivoestomatite crônica felina em quadros agudos?', alternativas: [{ texto: 'Amoxicilina', correta: false }, { texto: 'Metronidazol', correta: true }, { texto: 'Doxiciclina', correta: false }, { texto: 'Cefalexina', correta: false }], topico: 'odontologia-felina', explicacao: 'O metronidazol é o antibiótico de escolha em quadros agudos, pré ou pós-cirúrgicos de gengivoestomatite crônica.' },
      { id: 'mc25', pergunta: 'Qual achado histopatológico é característico da gengivoestomatite crônica felina?', alternativas: [{ texto: 'Granulomas caseosos', correta: false }, { texto: 'Hiperplasia do epitélio oral, ulcerações profundas e infiltrados linfoplasmocitários', correta: true }, { texto: 'Necrose coagulativa difusa', correta: false }, { texto: 'Metaplasia escamosa', correta: false }], topico: 'odontologia-felina', explicacao: 'O histopatológico revela hiperplasia do epitélio oral, ulcerações profundas e infiltrados linfoplasmocitários.' },

      // --- Rinite ---
      { id: 'mc26', pergunta: 'Rinite unilateral em felinos sugere:', alternativas: [{ texto: 'Infecção viral (FHV)', correta: false }, { texto: 'Corpo estranho, neoplasia, pólipo ou infecção fúngica', correta: true }, { texto: 'Bronquite crônica', correta: false }, { texto: 'Alergia alimentar', correta: false }], topico: 'rinite', explicacao: 'Rinite unilateral sugere: corpo estranho, neoplasias, pólipos, infecção fúngica ou fístula oronasal. Bilateral: viral e inflamatória.' },
      { id: 'mc27', pergunta: 'Qual o tratamento completo da rinite felina?', alternativas: [{ texto: 'Apenas antibiótico por 14 dias', correta: false }, { texto: 'Fluidoterapia + lavagem nasal + descongestionantes + anti-inflamatórios + antifúngico/antibiótico se confirmado', correta: true }, { texto: 'Corticoides sistêmicos por 30 dias', correta: false }, { texto: 'Cirurgia imediata', correta: false }], topico: 'rinite', explicacao: 'O tratamento inclui fluidoterapia, lavagem nasal/nebulização, descongestionantes, anti-inflamatórios e antibiótico/antifúngico apenas se confirmado.' },

      // --- Bronquite e Asma ---
      { id: 'mc28', pergunta: 'Na asma felina, qual tipo celular predomina com >20% no lavado bronquial?', alternativas: [{ texto: 'Neutrófilos', correta: false }, { texto: 'Linfócitos', correta: false }, { texto: 'Eosinófilos', correta: true }, { texto: 'Monócitos', correta: false }], topico: 'bronquite-asma', explicacao: 'Na asma felina há infiltrado de eosinófilos >20%. Na bronquite, predominam neutrófilos >10%.' },
      { id: 'mc29', pergunta: 'Qual broncodilatador é indicado no tratamento da asma/bronquite felina?', alternativas: [{ texto: 'Aminofilina', correta: false }, { texto: 'Salbutamol', correta: false }, { texto: 'Terbutalina', correta: true }, { texto: 'Teofilina', correta: false }], topico: 'bronquite-asma', explicacao: 'A terbutalina é o broncodilatador indicado no tratamento da asma e bronquite felina.' },
      { id: 'mc30', pergunta: 'Qual corticoide é usado no tratamento da asma felina?', alternativas: [{ texto: 'Dexametasona', correta: false }, { texto: 'Prednisolona', correta: true }, { texto: 'Hidrocortisona', correta: false }, { texto: 'Betametasona', correta: false }], topico: 'bronquite-asma', explicacao: 'O AIES utilizado é a prednisolona.' },

      // --- Neonato Órfão ---
      { id: 'mc31', pergunta: 'Qual é a ordem correta dos cuidados com neonato órfão felino?', alternativas: [{ texto: 'Alimentar → Aquecer → Limpar → Estimular', correta: false }, { texto: 'Limpar → Secar/Aquecer → Alimentar → Estimular micção/defecação', correta: true }, { texto: 'Estimular → Limpar → Alimentar → Aquecer', correta: false }, { texto: 'Aquecer → Alimentar → Estimular → Limpar', correta: false }], topico: 'neonato-orfao', explicacao: 'A ordem é: limpar com gaze umedecida → secar e aquecer → alimentar → estimular micção e defecação.' },

      // --- Cat Friendly ---
      { id: 'mc32', pergunta: 'Quais recursos são indicados para reduzir o estresse no transporte de felinos?', alternativas: [{ texto: 'Sedar o animal antes do transporte', correta: false }, { texto: 'Acostumar à caixa + cobrir com pano + ensaiar visitas', correta: true }, { texto: 'Transportar no colo sem caixa', correta: false }, { texto: 'Usar caixa aberta para ventilação', correta: false }], topico: 'catfriendly', explicacao: 'Orientações Cat Friendly: acostumar na caixa de transporte, cobrir com pano/toalha, ensaiar visitas.' },

      // --- Fármacos extras focados em tratamento ---
      { id: 'mc33', pergunta: 'Qual é o antipirético indicado no tratamento de CRVF felina?', alternativas: [{ texto: 'Meloxicam', correta: false }, { texto: 'Dipirona', correta: true }, { texto: 'Ibuprofeno', correta: false }, { texto: 'Paracetamol', correta: false }], topico: 'crvf-fhv-fcv', explicacao: 'Dipirona é o antipirético indicado para febre na CRVF. Paracetamol é TÓXICO para gatos!' },
      { id: 'mc34', pergunta: 'Qual efeito indesejado grave e irreversível as quinolonas podem causar em gatos?', alternativas: [{ texto: 'Insuficiência renal aguda', correta: false }, { texto: 'Cegueira aguda irreversível', correta: true }, { texto: 'Surdez bilateral', correta: false }, { texto: 'Paralisia dos membros pélvicos', correta: false }], topico: 'farmacos-quinolona-aines', explicacao: 'As quinolonas em gatos podem causar cegueira aguda irreversível, além de incoordenação, tremor, nistagmo e convulsão.' },
      { id: 'mc35', pergunta: 'Quais achados bioquímicos são encontrados na lipidose hepática felina?', alternativas: [{ texto: 'Hiperalbuminemia e hipercalcemia', correta: false }, { texto: 'ALT, GGT e FA aumentados, hipoalbuminemia, hipocalcemia', correta: true }, { texto: 'Todos os valores normais', correta: false }, { texto: 'Apenas ureia e creatinina aumentadas', correta: false }], topico: 'lipidose-hepatica', explicacao: 'Na lipidose hepática: ALT, GGT e FA aumentados, hipoalbuminemia, hipocalcemia, hipofosfatemia e hiperamonemia.' },
      { id: 'mc36', pergunta: 'Qual exame de imagem é indicado no diagnóstico da platinossomose?', alternativas: [{ texto: 'Radiografia torácica', correta: false }, { texto: 'Ultrassonografia abdominal', correta: true }, { texto: 'Ressonância magnética', correta: false }, { texto: 'Ecocardiograma', correta: false }], topico: 'platinossomose', explicacao: 'A ultrassonografia abdominal é indicada para avaliar fígado, vesícula biliar e ductos biliares na platinossomose.' },
      { id: 'mc37', pergunta: 'Qual anti-inflamatório pode ser usado na rinite felina?', alternativas: [{ texto: 'Carprofeno', correta: false }, { texto: 'Meloxicam ou prednisolona', correta: true }, { texto: 'Ibuprofeno', correta: false }, { texto: 'Fenilbutazona', correta: false }], topico: 'rinite', explicacao: 'Na rinite felina podem ser usados meloxicam (AINE) ou prednisolona (AIES).' },
      { id: 'mc38', pergunta: 'Qual é o diagnóstico da reabsorção dentária felina?', alternativas: [{ texto: 'Apenas anamnese', correta: false }, { texto: 'Exame físico oral + radiografia dentária', correta: true }, { texto: 'Hemograma completo', correta: false }, { texto: 'Ultrassonografia cervical', correta: false }], topico: 'odontologia-felina', explicacao: 'Exame físico oral detalhado + anamnese + radiografia dentária (PO).' },
      { id: 'mc39', pergunta: 'Quais as causas da pancreatite felina?', alternativas: [{ texto: 'Apenas alimentação inadequada', correta: false }, { texto: 'Hipercalcemia, intoxicações, doenças hepatobiliares, lipídeos, diabetes, infecção, linfoma', correta: true }, { texto: 'Somente infecção bacteriana', correta: false }, { texto: 'Exercício excessivo', correta: false }], topico: 'pancreatite', explicacao: 'As causas incluem hipercalcemia, intoxicações, doenças hepatobiliares, lipídeos, diabetes, infecção e linfoma.' },
      { id: 'mc40', pergunta: 'Qual AIE é usado na gengivoestomatite crônica felina?', alternativas: [{ texto: 'Dexametasona', correta: false }, { texto: 'Prednisolona', correta: true }, { texto: 'Triancinolona', correta: false }, { texto: 'Betametasona', correta: false }], topico: 'odontologia-felina', explicacao: 'A prednisolona é o AIE de escolha, podendo-se usar meloxicam como AINE alternativo.' },
    ],

    dissertativas: [
      { id: 'd1', pergunta: 'Descreva o tratamento completo para intoxicação por paracetamol em felinos.', respostaEsperada: 'NÃO induzir vômito. Oxigenioterapia e fluidoterapia. Acetilcisteína (antídoto — repõe glutationa hepática). Carvão ativado até 1h após a ingestão. Ácido ascórbico.', topico: 'intox-paracetamol' },
      { id: 'd2', pergunta: 'Descreva o tratamento completo para intoxicação por organofosforado em felinos.', respostaEsperada: 'Oxigenioterapia. Anticonvulsivo (diazepam). Atropina (antídoto — reverte efeitos muscarínicos). Descontaminação oral: carvão ativado até 1h. Descontaminação cutânea: lavar com água morna e sabão neutro. Monitorar FC e FR.', topico: 'intox-organofosforado' },
      { id: 'd3', pergunta: 'Quais são os sinais clínicos e o tratamento da lipidose hepática felina?', respostaEsperada: 'Sinais clínicos: anorexia prolongada, letargia, depressão, perda de peso, icterícia, desidratação e hepatomegalia. Tratamento: hepato e gastroprotetores, correção e monitoração hidroeletrolítica (K, P e Na), suporte nutricional, antieméticos e procinéticos.', topico: 'lipidose-hepatica' },
      { id: 'd4', pergunta: 'Descreva o diagnóstico e tratamento da pancreatite felina.', respostaEsperada: 'Diagnóstico: exame físico + anamnese, lipase imunoespecífica SPEC FPLI (padrão-ouro), ultrassonografia abdominal, histopatológico, hemograma e bioquímicos. Tratamento: fluidoterapia, corrigir hipocalcemia e hipocalemia, analgesia (fentanil), antieméticos (ondasetrona), dieta hiperproteica (cobalamina e ômega 3).', topico: 'pancreatite' },
      { id: 'd5', pergunta: 'Descreva o ciclo, patogenia e tratamento da platinossomose.', respostaEsperada: 'Ciclo: gato (HD) ingere HI (isópodes, caramujos, lagartixas) → infecção por predação → ovos nas fezes → HI ingerem ovos → gato preda HI. Patogenia: parasita migra para fígado, vesícula e ductos biliares → inflamação crônica → espessamento dos ductos → colangiohepatite, fibrose, cirrose ou obstrução biliar. Tratamento: Praziquantel.', topico: 'platinossomose' },
      { id: 'd6', pergunta: 'Como diferenciar FHV de FCV clinicamente? Qual o tratamento?', respostaEsperada: 'FHV: aborto, morte neonatal, ceratite ulcerativa, espirros frequentes, secreção nasal/ocular intensa, conjuntivite, febre, apatia. FCV: poliartrite, pneumonia branda, estomatite ulcerativa, úlceras orais, espirros leve a moderado, sialorreia, febre, apatia, claudicação. Tratamento: dipirona (febre), Omiclom A orabase (úlceras orais), antibiótico (amoxicilina, azitromicina ou doxiciclina).', topico: 'crvf-fhv-fcv' },
      { id: 'd7', pergunta: 'Descreva o tratamento completo da rinite felina.', respostaEsperada: 'Fluidoterapia. Lavagem nasal e nebulização. Descongestionantes e histamínicos (alívio da secreção e espirros). Anti-inflamatórios (meloxicam ou prednisolona). Antifúngico e antibiótico (apenas em caso confirmatório). Cirurgia (neoplasias e pólipos).', topico: 'rinite' },
      { id: 'd8', pergunta: 'Qual a diferença entre asma e bronquite felina? Qual o tratamento?', respostaEsperada: 'Asma: tosse episódica, postura ortopneica, eosinófilos >20%, quadro agudo (cianose). Bronquite: tosse frequente, neutrófilos >10%, quadro crônico (dispneia, taquipneia, sibilos). Tratamento: oxigenioterapia, broncodilatadores (terbutalina), AIES (prednisolona), eliminação do alérgeno.', topico: 'bronquite-asma' },
      { id: 'd9', pergunta: 'Descreva o tratamento da gengivoestomatite crônica felina.', respostaEsperada: 'Analgésico (tramadol). AIE (prednisolona) ou AINE (meloxicam). Antibiótico em quadros agudos, pré ou pós-cirúrgico (metronidazol).', topico: 'odontologia-felina' },
      { id: 'd10', pergunta: 'Quais os cuidados iniciais com um neonato órfão felino? Descreva na ordem correta.', respostaEsperada: '1) Limpar com gaze/flanela levemente umedecida com água morna. 2) Secar cuidadosamente e aquecer. 3) Alimentar. 4) Estimular micção e defecação.', topico: 'neonato-orfao' },
      { id: 'd11', pergunta: 'Quais são os 5 princípios Cat Friendly e como orientar o tutor para transporte?', respostaEsperada: '5 princípios: lugar seguro, múltiplos recursos ambientais, brincadeiras predatórias, relação positiva/negativa homem-gato, estímulos sensoriais agradáveis. Transporte: acostumar na caixa, cobrir com pano/toalha, ensaiar visitas ao vet.', topico: 'catfriendly' },
      { id: 'd12', pergunta: 'Quais os efeitos indesejados de quinolonas e AINES em gatos?', respostaEsperada: 'Quinolonas: incoordenação, tremor, nistagmo, convulsão e cegueira aguda irreversível. AINES: intoxicação, anorexia, vômitos, letargia, melena, ataxia e polidipsia.', topico: 'farmacos-quinolona-aines' },
    ],

    casosClinicos: [
      {
        id: 'cc1', titulo: 'Caso 1 — Intoxicação por Paracetamol', topico: 'intox-paracetamol',
        cenario: 'Félix, gato doméstico, 4 anos, é trazido pelo tutor com histórico de ingestão acidental de paracetamol há 2 horas. No exame físico: mucosas cianóticas, ictéricas, edema de face e membros, depressão e letargia.',
        perguntas: [
          { texto: 'Quais são os sinais clínicos compatíveis com este quadro?', resposta: 'Cianose (mucosas cianóticas), icterícia (mucosas ictéricas), edema de face e membros, depressão e letargia. Outros sinais possíveis: mucosas pálidas, vômitos, anorexia e hipóxia.', tipo: 'dissertativa' },
          { texto: 'Qual é o tratamento emergencial indicado? Liste todos os passos.', resposta: '1) NÃO induzir vômito\n2) Oxigenioterapia e fluidoterapia\n3) Acetilcisteína (antídoto)\n4) Carvão ativado (até 1h após ingestão — neste caso já passou 2h, avaliar)\n5) Ácido ascórbico', tipo: 'dissertativa' },
          { texto: 'Deve-se induzir o vômito neste paciente? Justifique.', resposta: 'NÃO. A indução de vômito não é recomendada na intoxicação por paracetamol em gatos pois o paracetamol causa metemoglobinemia e lesão hepática, e a emese pode piorar o quadro clínico. Além disso, já se passaram 2 horas da ingestão.', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc2', titulo: 'Caso 2 — Lipidose Hepática', topico: 'lipidose-hepatica',
        cenario: 'Luna, gata SRD, 7 anos, apresenta anorexia há 10 dias, letargia intensa, perda de peso progressiva, mucosas ictéricas e hepatomegalia. A tutora relata que a gata parou de comer após chegada de novo pet.',
        perguntas: [
          { texto: 'Qual é a suspeita diagnóstica principal?', resposta: 'Lipidose hepática felina. A anorexia prolongada (10 dias) em gata com icterícia e hepatomegalia, desencadeada por estresse (novo pet), é altamente sugestiva.', tipo: 'dissertativa' },
          { texto: 'Quais exames confirmariam? Mencione o padrão-ouro.', resposta: 'Hemograma (anemia com poiquilocitose), bioquímicos (ALT, GGT e FA aumentados, hipoalbuminemia, hipocalcemia, hipofosfatemia e hiperamonemia), ultrassonografia abdominal e histopatológico (padrão-ouro).', tipo: 'dissertativa' },
          { texto: 'Descreva o tratamento completo.', resposta: 'Hepato e gastroprotetores. Correção e monitoração hidroeletrolítica (K, P e Na). Suporte nutricional (fundamental — pode ser necessário sonda esofágica). Antieméticos e procinéticos.', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc3', titulo: 'Caso 3 — Asma Felina', topico: 'bronquite-asma',
        cenario: 'Mimi, gata Maine Coon, 3 anos, chega com tosse episódica, postura ortopneica e em um episódio teve cianose. Hemograma: eosinofilia >20%. Radiografia: padrão intersticial.',
        perguntas: [
          { texto: 'Qual é o diagnóstico mais provável?', resposta: 'Asma felina. Baseado em: tosse episódica, postura ortopneica, episódio de cianose (quadro agudo), eosinofilia >20% e padrão intersticial na radiografia.', tipo: 'dissertativa' },
          { texto: 'Como diferenciar de bronquite felina?', resposta: 'Asma: tosse episódica, postura ortopneica, eosinófilos >20%, quadro AGUDO (cianose).\nBronquite: tosse frequente, neutrófilos >10%, quadro CRÔNICO (dispneia, taquipneia, respiração com esforço expiratório e sibilos/chiados na ausculta).', tipo: 'dissertativa' },
          { texto: 'Qual o tratamento indicado?', resposta: 'Oxigenioterapia, broncodilatadores (terbutalina), AIES (prednisolona) e eliminação do alérgeno.', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc4', titulo: 'Caso 4 — Platinossomose', topico: 'platinossomose',
        cenario: 'Bob, gato caramelo, 2 anos, interior, apresenta vômitos, anorexia, perda de peso, icterícia e letargia. Caça lagartixas e caramujos. Hemograma: eosinofilia após 3 semanas. Bioquímicos: ALT, AST, GGT e FA discretamente aumentadas.',
        perguntas: [
          { texto: 'Qual parasita é o agente mais provável?', resposta: 'Platynosomum spp. (platinossomose). Gato de interior que caça lagartixas e caramujos (HI), com sinais hepáticos e eosinofilia.', tipo: 'dissertativa' },
          { texto: 'Descreva o ciclo deste parasita.', resposta: 'Gato (hospedeiro definitivo) ingere HI (isópodes terrestres, caramujos ou lagartixas) → infecção por predação → parasita migra para fígado, vesícula biliar e ductos biliares → eliminação dos ovos nas fezes → HI ingerem os ovos → gato preda os HI, completando o ciclo.', tipo: 'dissertativa' },
          { texto: 'Qual o tratamento?', resposta: 'Praziquantel.', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc5', titulo: 'Caso 5 — Rinite Felina', topico: 'rinite',
        cenario: 'Nala, gata Persa, 5 anos, espirros paroxísticos, secreção nasal serosanguinolenta UNILATERAL há 3 semanas, epífora e anorexia.',
        perguntas: [
          { texto: 'A rinite unilateral sugere quais causas?', resposta: 'Corpo estranho, neoplasias, pólipos, infecção fúngica ou fístula oronasal. (Rinite bilateral sugere: viral e inflamatória.)', tipo: 'dissertativa' },
          { texto: 'Quais exames diagnósticos solicitar?', resposta: 'Rinoscopia, anamnese detalhada, radiografia/tomografia (neoplasias e corpo estranho), citologia da secreção, cultura bacteriana e fúngica, PCR viral.', tipo: 'dissertativa' },
          { texto: 'Descreva o tratamento completo.', resposta: 'Fluidoterapia. Lavagem nasal e nebulização. Descongestionantes e histamínicos (alívio da secreção e espirros). Anti-inflamatórios (meloxicam ou prednisolona). Antifúngico e antibiótico (apenas em caso confirmatório). Cirurgia (se neoplasia ou pólipo).', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc6', titulo: 'Caso 6 — CRVF (Calicivírus)', topico: 'crvf-fhv-fcv',
        cenario: 'Thor, gato, 1 ano, vacinado apenas com V8, apresenta úlceras orais, poliartrite, espirros leve a moderados, sialorreia e claudicação.',
        perguntas: [
          { texto: 'Qual vírus é o agente mais provável? Como diferenciar do FHV?', resposta: 'FCV (Calicivírus felino). Diferenças: FCV causa úlceras ORAIS, poliartrite, claudicação, sialorreia, espirros leve a moderados. FHV causa ceratite ulcerativa, espirros frequentes, secreção nasal/ocular INTENSA, conjuntivite, aborto.', tipo: 'dissertativa' },
          { texto: 'Qual o tratamento?', resposta: 'Dipirona (febre), Omiclom A orabase (úlceras orais), antibiótico (amoxicilina, azitromicina ou doxiciclina).', tipo: 'dissertativa' },
          { texto: 'Qual vacina deveria ter sido usada? Esquema para adultos?', resposta: 'Vacina V3 (quádrupla felina — FHV, FCV, FPV). V8 é vacina de CÃES. Esquema para adultos: duas doses com intervalo de 21/30 dias, reforço a cada 3 anos ou anual.', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc7', titulo: 'Caso 7 — Gengivite Felina', topico: 'odontologia-felina',
        cenario: 'Simba, gato, 4 anos, gengivite confirmada. Nunca fez profilaxia dental.',
        perguntas: [
          { texto: 'Como é feito o diagnóstico?', resposta: 'Radiografia intraoral, anamnese + exame físico oral detalhado, hemograma e bioquímico hepático e renal, sondagem periodontal.', tipo: 'dissertativa' },
          { texto: 'Qual é o tratamento?', resposta: 'Limpeza supra e subgengival, remoção dos depósitos dentários (placa e cálculo) e profilaxia.', tipo: 'dissertativa' },
          { texto: 'Como diferenciar de periodontite no tratamento?', resposta: 'Gengivite: limpeza supra/subgengival + remoção de placa/cálculo + profilaxia.\nPeriodontite: limpeza supra/subgengival + extração dentária com perda de inserção + profilaxia rigorosa.', tipo: 'dissertativa' },
        ]
      },
      {
        id: 'cc8', titulo: 'Caso 8 — Intoxicação por Organofosforado', topico: 'intox-organofosforado',
        cenario: 'Cleo, gata, 6 anos, convulsões, bradicardia, cianose, sialorreia e paralisia. Tutor aplicou carrapaticida organofosforado há 1 hora.',
        perguntas: [
          { texto: 'Quais são os sinais clínicos de intoxicação por organofosforado?', resposta: 'Convulsões, vômitos, hiper ou hipoexcitabilidade, sialorreia, diarreia, apatia, bradicardia, cianose, paralisia e morte.', tipo: 'dissertativa' },
          { texto: 'Qual é o antídoto e por que é usado?', resposta: 'Atropina. É usada porque reverte os efeitos muscarínicos da intoxicação: hipersalivação, bradicardia, miose e secreções pulmonares. É um anticolinérgico que bloqueia os receptores muscarínicos.', tipo: 'dissertativa' },
          { texto: 'Descreva o tratamento completo incluindo descontaminação.', resposta: 'Oxigenioterapia. Anticonvulsivo (diazepam). Atropina (antídoto). Descontaminação oral: carvão ativado até 1h. Descontaminação cutânea: lavar com água morna e sabão neutro. Monitorar FC e FR.', tipo: 'dissertativa' },
        ]
      },
    ],

    // Tags dos tópicos para o sistema de pontos fracos
    topicos: {
      'intox-paracetamol': 'Intoxicação por Paracetamol',
      'intox-organofosforado': 'Intoxicação por Organofosforado',
      'lipidose-hepatica': 'Lipidose Hepática',
      'pancreatite': 'Pancreatite Felina',
      'platinossomose': 'Platinossomose',
      'bronquite-asma': 'Bronquite e Asma Felina',
      'rinite': 'Rinite Felina',
      'crvf-fhv-fcv': 'CRVF — FHV e FCV',
      'odontologia-felina': 'Odontologia Felina',
      'neonato-orfao': 'Neonato Órfão',
      'catfriendly': 'Práticas Cat Friendly',
      'farmacos-quinolona-aines': 'Fármacos — Quinolonas e AINES',
    }
  },

  // ============================================================
  // TEMPLATE PARA NOVA MATÉRIA — copie e preencha:
  // ============================================================
  // novaMateria: {
  //   id: 'novaMateria',
  //   nome: 'Nome da Matéria',
  //   icone: '📚',
  //   descricao: 'Descrição curta',
  //   corPrimaria: '#7c3aed',
  //   corSecundaria: '#f59e0b',
  //   flashcards: [],
  //   multiplaEscolha: [],
  //   dissertativas: [],
  //   casosClinicos: [],
  //   topicos: {}
  // },
};
