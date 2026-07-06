# EasyJur — Landing Page Legal Operations

Landing page de conversão (React + TypeScript + Vite + Tailwind v4). Tema claro/escuro com toggle na navbar (persistido em `localStorage`, respeita `prefers-color-scheme`).

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # typecheck + build em dist/
npm run preview   # serve o build
```

## Deploy no GitHub Pages

O repositório já tem o workflow `.github/workflows/deploy.yml` e o Vite usa `base: './'`, então funciona sob qualquer nome de repositório.

1. `git init && git add -A && git commit -m "landing page"`
2. Crie o repositório e faça push: `gh repo create <nome> --public --source . --push`
3. No GitHub: **Settings → Pages → Source: GitHub Actions**
4. Todo push na `main` publica automaticamente.

## Pendências antes de ir ao ar

- Vídeo do hero (placeholder de 30–60s, autoplay mudo)
- Formulário do CTA: substituir pelo embed do HubSpot + dataLayer do GTM no submit
- Validar claims com o cliente (+200.000 peças, 1.500 escritórios, 100% SLA, 4,9/5) e remover o aviso do rodapé
- Seções parked (fora do App, prontas para reativar): `LogoStrip` (aguarda logos autorizados), `SocialProof` (aguarda depoimentos reais com nome/OAB)
