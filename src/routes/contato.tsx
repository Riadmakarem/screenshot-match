import { createFileRoute } from '@tanstack/react-router';
import { PageTitle, ContactSection } from '@/components/institutional';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/contato')({head:()=>pageHead('Contato','Informações de contato e formulário demonstrativo do Almeida & Vasconcelos, em São Paulo.'),component:Page});
function Page(){return <><PageTitle label="Contato" title="Disponibilidade para escutar." description="Entre em contato com o escritório. Nesta apresentação, o formulário e os dados de atendimento são apenas demonstrativos."/><ContactSection/></>;}