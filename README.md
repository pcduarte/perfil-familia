# Perfil Familia

Jogo de deducao em Blazor WebAssembly, pensado para rodar localmente em um unico dispositivo.

## Publicar no GitHub Pages

Este projeto pode ser publicado no GitHub Pages. Como o Pages serve um site estatico, o app precisa do `base href` apontando para o nome do repositorio.

1. Abra `wwwroot/index.html` e `wwwroot/404.html`.
2. Troque `<base href="/" />` por `<base href="/NOME-DO-REPOSITORIO/" />`.
3. Publique o app:

```bash
 dotnet publish -c Release
```

4. Copie a pasta publicada para `docs`:

```bash
 Remove-Item -Recurse -Force docs -ErrorAction SilentlyContinue
 Copy-Item -Recurse bin/Release/net10.0/publish/wwwroot docs
```

5. No GitHub, em Settings > Pages, selecione a branch `main` e a pasta `/docs`.

Pronto: o app sera servido em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Estrutura

- `Pages/Index.razor`: UI e regras do jogo
- `wwwroot/data`: cartas em JSON
- `wwwroot/css/app.css`: design system e layout responsivo
