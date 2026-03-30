# CarineStudy — contexto do projeto (leia antes de editar)

## O que é
App **estático** de revisão (HTML/CSS/JS). Uma matéria ativa com PDF/clínica; felinos só arquivo; outras `emBreve`. Deploy na **Vercel**, sem bundler.

## Arquivos (não re-explorar tudo)
| Arquivo | Papel |
|---------|--------|
| `index.html` | Views (`view-*`), modal fim de sessão, `#sound-toggle` fora de `#app` |
| `style.css` | Tema, grid matérias, flash/MC/sessões, `.sound-fab`, mobile ≤520px |
| `data.js` | `MATERIAS` — `ordem`, `provaAtual`, `emBreve`, `apenasMemoria`, conteúdo |
| `app.js` | Estado, `localStorage` key `carinestudy_clinica_v1`, sons via `CarineStudyAudio` |
| `sounds.js` | Web Audio API, pref `carinestudy_sound_v1` |
| `vercel.json` | `cleanUrls: true` |

## Vercel — CSS/JS “não pegam”
1. **Root Directory** no dashboard = pasta onde estão `index.html` **e** `style.css` (se o repo tiver pasta pai, apontar para a subpasta certa).
2. **Sem** rewrite estilo SPA: `/(.*) → /index.html` sem excluir `.css`/`.js` → o browser recebe HTML no lugar do CSS (**Network**: `style.css` 200 mas **type text/html**).
3. HTML já usa paths **absolutos**: `/style.css`, `/data.js`, `/sounds.js`, `/app.js`.
4. **Dev local:** abrir `index.html` via `file://` **não** carrega `/style.css`; usar `npx serve .` na raiz.

## Convenções
- Respostas ao usuário: **pt-BR**.
- Mudanças mínimas e alinhadas ao estilo existente.
- Não criar README/.md extra sem pedido (exceto este).

## Onde mexer por tarefa
- Texto/ordem matérias → `data.js`
- Lógica/UI → `app.js`
- Aparência → `style.css`
- Deploy estático → `vercel.json` + settings Vercel (sem build)
