# Unir Boletas de Correo Argentino - Versión Estática

Esta es una versión estática de la aplicación para unir boletas de Correo Argentino que puede ser desplegada en cualquier servidor web o plataforma de hosting estático como GitHub Pages.

## 📁 Archivos Incluidos

### Archivos Principales
- `index.html` - Página principal con la funcionalidad completa
- `privacidad.html` - Página de política de privacidad
- `terminos.html` - Página de términos y condiciones
- `README.md` - Este archivo de documentación

### Imágenes
- `demo-before.png` - Imagen de ejemplo (antes del procesamiento)
- `demo-after.png` - Imagen de ejemplo (después del procesamiento)

## 🚀 Cómo Usar

### Opción 1: GitHub Pages
1. Crea un nuevo repositorio en GitHub
2. Sube todos los archivos de esta carpeta `static/`
3. Ve a Settings → Pages en tu repositorio
4. Selecciona "Deploy from a branch"
5. Elige la rama principal y la carpeta raíz
6. Guarda y tu sitio estará disponible en: `https://tu-usuario.github.io/tu-repositorio`

### Opción 2: Cualquier servidor web
1. Sube todos los archivos a cualquier servidor web (Apache, Nginx, etc.)
2. Asegúrate de que los archivos sean accesibles públicamente
3. La aplicación funcionará inmediatamente

### Opción 3: Hosting estático
Sube los archivos a cualquier plataforma de hosting estático:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## ✨ Características

- 📄 **Combinación de PDFs**: Une múltiples boletas en un solo documento
- 🎯 **Optimización inteligente**: Organiza 3 boletas por hoja en formato apaisado
- 🌓 **Modo oscuro/claro**: Interfaz adaptable a cualquier entorno
- 🔒 **Procesamiento local**: Los archivos nunca salen de tu navegador
- 📱 **Diseño responsive**: Funciona en móviles, tablets y escritorio
- ⚡ **Rápido y gratuito**: Sin límites de uso ni costos ocultos

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** con **Tailwind CSS** - Estilos modernos y responsive
- **JavaScript** vanilla - Lógica de la aplicación
- **PDF-Lib** - Procesamiento de archivos PDF
- **Lucide Icons** - Iconos modernos
- **CDNs** para todas las dependencias - No requiere construcción

## 📋 Requisitos

- Navegador web moderno con soporte para:
  - ES6+ (JavaScript moderno)
  - File API
  - Blob API
  - Fetch API
  - Web Workers (opcional, para mejor rendimiento)

## 🔧 Configuración

No se requiere ninguna configuración adicional. La aplicación está lista para usar:

1. **Sin dependencias**: Todas las librerías se cargan desde CDNs
2. **Sin construcción**: Archivos HTML/CSS/JS listos para producción
3. **Sin servidor**: Funciona completamente en el cliente
4. **Sin base de datos**: No almacena ningún dato

## 📱 Compatibilidad

### Navegadores soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos
- ✅ Escritorio
- ✅ Tablets
- ✅ Móviles
- ✅ Touch devices

## 🚨 Notas Importantes

### Privacidad y Seguridad
- **Procesamiento 100% local**: Los archivos PDF nunca se suben a ningún servidor
- **No se almacenan datos**: Todo se procesa en la memoria del navegador
- **Sin tracking**: No hay cookies ni seguimiento de usuarios
- **Seguro**: No hay conexión a servidores externos para procesamiento

### Limitaciones
- **Máximo 20 archivos** por operación para mantener buen rendimiento
- **Solo archivos PDF** con extensión `.pdf`
- **Tamaño máximo**: Depende de la memoria disponible en el dispositivo

### Rendimiento
- **Pequeños archivos** (1-10 páginas): Procesamiento instantáneo
- **Archivos medianos** (10-50 páginas): Algunos segundos
- **Archivos grandes** (50+ páginas): Puede tardar varios segundos

## 🔄 Actualizaciones

Para mantener la aplicación actualizada:

1. Reemplaza los archivos HTML con las versiones más recientes
2. Las dependencias de CDN se actualizan automáticamente
3. No se requiere migración de datos

## 🐛 Problemas Comunes

### Si las imágenes no se muestran
- Verifica que los archivos `demo-before.png` y `demo-after.png` estén en la misma carpeta
- Asegúrate de que los nombres de archivo coincidan exactamente

### Si la combinación de PDFs falla
- Verifica que los archivos sean PDFs válidos
- Asegúrate de tener suficiente memoria en el dispositivo
- Intenta con menos archivos a la vez

### Si el modo oscuro no funciona
- Verifica que JavaScript esté habilitado en el navegador
- Limpia la caché del navegador

## 📄 Licencia

Esta aplicación se proporciona bajo una licencia de código abierto. 
Puedes usarla, modificarla y distribuirla libremente.

## 📞 Contacto

Para preguntas, sugerencias o reporte de errores:
- Email: ramirodev7@gmail.com
- Web: https://ramiroev7.github.io/

---

**Nota**: Esta es una versión estática que funciona completamente en el navegador. 
No requiere servidor, base de datos ni ningún servicio externo para funcionar.