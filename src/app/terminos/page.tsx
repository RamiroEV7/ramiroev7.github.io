import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { FooterNav } from "@/components/footer-nav";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones</h1>
            <p className="text-lg text-muted-foreground">
              Última actualización: 1 de enero de 2024
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Aceptación de los términos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Al utilizar esta herramienta de unión de boletas, aceptas estos 
                términos y condiciones. Si no estás de acuerdo con estos términos, 
                por favor no utilices este servicio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Descripción del servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Este sitio web ofrece una herramienta gratuita que permite unir 
                múltiples archivos PDF de boletas en un solo documento optimizado. 
                El servicio se proporciona "tal cual" sin garantías de ningún tipo.
              </p>
              <p>
                Características principales:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unión de múltiples archivos PDF de boletas</li>
                <li>Optimización con 3 boletas por hoja para ahorrar papel</li>
                <li>Procesamiento local en el navegador</li>
                <li>Descarga inmediata del resultado</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Responsabilidades del usuario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Como usuario, eres responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Asegurarse de tener los derechos necesarios para unir los archivos PDF de boletas</li>
                <li>No utilizar la herramienta para fines ilegales o no autorizados</li>
                <li>No subir archivos que contengan virus, malware o código dañino</li>
                <li>No violar los derechos de propiedad intelectual de terceros</li>
                <li>No intentar acceder indebidamente al sistema o servidores</li>
                <li>Utilizar la herramienta únicamente para boletas de Correo Argentino</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitación de responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Esta herramienta se proporciona gratuitamente y sin garantías. 
                No nos hacemos responsables de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cualquier daño o pérdida resultante del uso de esta herramienta</li>
                <li>La calidad o precisión de los PDFs de boletas unidos</li>
                <li>La pérdida de datos durante el proceso de unión</li>
                <li>La interrupción del servicio o errores técnicos</li>
                <li>El uso indebido de la herramienta por parte de los usuarios</li>
                <li>El ahorro de papel o tinta que pueda obtenerse al usar la herramienta</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedad intelectual</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Esta herramienta y su código fuente son propiedad de sus desarrolladores. 
                Los usuarios mantienen los derechos de propiedad intelectual sobre sus 
                archivos PDF originales de boletas y los documentos resultantes.
              </p>
              <p>
                Las boletas procesadas son propiedad de sus respectivos dueños y 
                Correo Argentino. Esta herramienta solo facilita su organización.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacidad y datos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Respetamos tu privacidad. Los archivos PDF de boletas se procesan localmente 
                en tu navegador y no se almacenan en nuestros servidores. 
                Para más información, consulta nuestra Política de Privacidad.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modificaciones del servicio</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nos reservamos el derecho de modificar, suspender o discontinuar 
                el servicio en cualquier momento sin previo aviso. Tampoco somos 
                responsables de la actualización de la herramienta.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ley aplicable</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Estos términos y condiciones se rigen por las leyes de la República 
                Argentina. Cualquier disputa será resuelta en los tribunales 
                competentes de la jurisdicción correspondiente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Si tienes preguntas sobre estos términos y condiciones, 
                por favor contáctame a través de los canales disponibles en el sitio.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <FooterNav />
      </main>
    </div>
  );
}