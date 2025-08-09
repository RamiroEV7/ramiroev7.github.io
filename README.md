# Unir Boletas de Correo Argentino

Aplicación web para combinar múltiples boletas de Correo Argentino en un solo documento optimizado con 3 boletas por hoja.

## Características

- 📄 Combina múltiples PDFs en uno solo
- 🎯 Optimiza con 3 boletas por hoja para ahorrar al imprimir
- 🌓 Modo oscuro/claro
- 🔒 Procesamiento local (los archivos nunca se suben a servidores)
- 📱 Diseño responsive
- ⚡ Rápido y gratuito

## Despliegue en GitHub Pages

### Pasos para desplegar:

1. **Fork o clona este repositorio**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura el basePath en next.config.ts**
   - Descomenta y ajusta las líneas:
   ```typescript
   basePath: '/nombre-de-tu-repo',
   assetPrefix: '/nombre-de-tu-repo',
   ```
   - Reemplaza `nombre-de-tu-repo` con el nombre real de tu repositorio

4. **Construye y exporta el sitio**
   ```bash
   npm run export
   ```

5. **Sube los cambios a GitHub**
   ```bash
   git add .
   git commit -m "Configuración para GitHub Pages"
   git push origin main
   ```

6. **Configura GitHub Pages**
   - Ve a la configuración de tu repositorio en GitHub
   - Navega a "Pages" en el menú lateral
   - En "Source", selecciona "Deploy from a branch"
   - Selecciona la rama `main` (o `master`)
   - Selecciona la carpeta `/docs` como directorio de publicación
   - Haz clic en "Save"

7. **Mueve los archivos exportados a la carpeta docs**
   ```bash
   # Crea la carpeta docs si no existe
   mkdir -p docs
   
   # Mueve todo el contenido de out a docs
   mv out/* docs/
   
   # Sube los cambios
   git add docs/
   git commit -m "Añadir sitio estático para GitHub Pages"
   git push origin main
   ```

### Notas importantes:

- **Funcionalidad**: La aplicación funciona completamente en el cliente, por lo que todas las características estarán disponibles en GitHub Pages.
- **Procesamiento de PDF**: El procesamiento de archivos PDF se realiza localmente en el navegador del usuario, no se requiere servidor.
- **Rutas API**: Las rutas API han sido eliminadas ya que GitHub Pages no soporta funciones del lado del servidor.
- **Imágenes**: Las imágenes están configuradas para no ser optimizadas por Next.js (`unoptimized: true`) para mejor compatibilidad.

## Desarrollo local

Para ejecutar el proyecto en desarrollo:

```bash
npm install
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

## Tecnologías utilizadas

- Next.js 15 con TypeScript
- Tailwind CSS 4
- shadcn/ui components
- pdf-lib para procesamiento de PDF
- React Dropzone para carga de archivos
- Next Themes para modo oscuro/claro

## Licencia

Este proyecto es de código abierto.