# Casa Qi Manager Master v2.0

Proyecto maestro para la aplicación interna de Casa Qi Hotel Boutique.

## Estado del proyecto

- Conectado a GitHub.
- Preparado para Netlify.
- Preparado como PWA.
- Preparado para Google Sheets mediante Apps Script.

## Estructura

- `index.html`: aplicación principal.
- `config.js`: URL de Google Apps Script.
- `manifest.json`: instalación como app/PWA.
- `service-worker.js`: caché de la PWA.
- `netlify.toml`: configuración de Netlify.
- `icons/`: iconos usados por la PWA.
- `fotos/`: compatibilidad con fotos actuales.
- `assets/`: estructura organizada para nuevas imágenes.
- `google-apps-script/codigo.gs`: script maestro actual para Google Sheets.
- `docs/`: documentación del proyecto.

## Importante

Para actualizar el sitio:
1. Subir/reemplazar estos archivos en GitHub.
2. Hacer Commit.
3. Netlify publicará automáticamente en casaqitrabajadores.netlify.app.
