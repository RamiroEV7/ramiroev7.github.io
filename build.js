const esbuild = require('esbuild');
const fs = require('fs-extra');
const path = require('path');

const distDir = 'dist';

async function build() {
  try {
    // 1. Clean the dist directory
    console.log('Limpiando el directorio de distribución...');
    await fs.emptyDir(distDir);

    // 2. Run esbuild to bundle and minify/obfuscate the code
    console.log('Compilando y ofuscando el código (TSX -> JS)...');
    await esbuild.build({
      entryPoints: ['index.tsx'],
      bundle: true,
      minify: true, // This handles minification and basic obfuscation
      sourcemap: false,
      outfile: path.join(distDir, 'bundle.js'),
      loader: { '.tsx': 'tsx', '.ts': 'ts' },
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });

    // 3. Copy static assets (HTML, images)
    console.log('Copiando archivos estáticos (HTML, imágenes)...');
    const assets = ['index.html', 'antes.png', 'despues.png'];
    for (const asset of assets) {
      await fs.copy(asset, path.join(distDir, asset));
    }

    // 4. Modify the final HTML for production
    console.log('Actualizando index.html para producción...');
    const htmlPath = path.join(distDir, 'index.html');
    let htmlContent = await fs.readFile(htmlPath, 'utf8');

    // Remove the importmap script as it's not needed for the bundle
    htmlContent = htmlContent.replace(/<script type="importmap">[\s\S]*?<\/script>/s, '');
    
    // Update the script tag to point to the new JS bundle
    htmlContent = htmlContent.replace(
      '<script type="module" src="./index.tsx"></script>',
      '<script src="./bundle.js" defer></script>'
    );

    await fs.writeFile(htmlPath, htmlContent);

    console.log('\n¡Compilación completada! Tus archivos de producción están en la carpeta "dist".');

  } catch (e) {
    console.error('La compilación falló:', e);
    process.exit(1);
  }
}

build();
