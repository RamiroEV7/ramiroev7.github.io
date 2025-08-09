import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { FooterNav } from "@/components/footer-nav";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
            <p className="text-lg text-muted-foreground">
              Última actualización: 1 de enero de 2024
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información que Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Se recopila la siguiente información para el funcionamiento de la aplicación:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Datos Personales:</strong> No se recopila datos personales como nombre, correo electrónico o dirección.</li>
                <li><strong>Datos de Uso:</strong> Información sobre el uso de la aplicación, como la frecuencia de uso y funcionalidades utilizadas.</li>
                <li><strong>Datos Técnicos:</strong> Tipo de dispositivo, sistema operativo y otras estadísticas técnicas.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cómo se Utiliza la Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                La información recopilada se utiliza para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar y mejorar el servicio.</li>
                <li>Personalizar la experiencia del usuario.</li>
                <li>Mostrar anuncios relevantes para generar ingresos.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tratamiento de las Boletas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Procesamiento:</strong> La aplicación permite a los usuarios seleccionar y subir archivos PDF de boletas. Cada hoja del PDF se convierte en una imagen temporal, se recorta para extraer la boleta y se combina en un nuevo archivo PDF.</li>
                <li><strong>No Retención:</strong> Las imágenes procesadas no se almacenan permanentemente. Los archivos se eliminan una vez que el usuario ha descargado o compartido el PDF resultante.</li>
                <li><strong>No Extracción de Datos:</strong> No se extrae ni almacena datos de las boletas, ya que solo se manipulan como imágenes.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Publicidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Anuncios: La aplicación muestra anuncios para generar ingresos. Estos anuncios pueden ser proporcionados por terceros que pueden recopilar datos de uso y técnicos para personalizar la publicidad mostrada en la aplicación.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seguridad de la Información</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Implemento medidas de seguridad adecuadas para proteger tu información, incluyendo encriptación y acceso restringido, para garantizar que tus datos estén seguros.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Derechos de los Usuarios</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Dado que no se recopila ni almacena datos personales identificables, los usuarios no necesitan acceder, actualizar o eliminar sus datos en relación con las boletas procesadas.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retención de Datos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                No se retiene ninguna información personal o de las boletas procesadas más allá del tiempo necesario para completar el proceso de unión y permitir la descarga o compartición del PDF resultante.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cambios en la Política de Privacidad</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Me reservo el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaré sobre cualquier cambio a través de mi aplicación o por otros medios apropiados.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Si tienes preguntas o inquietudes sobre esta política de privacidad, contáctame en:
              </p>
              <p className="font-medium">ramirodev7@gmail.com</p>
              <p>
                Además, también puedes encontrarme en mi página web donde encontrarás más opciones de contacto.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <FooterNav />
      </main>
    </div>
  );
}