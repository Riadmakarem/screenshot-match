import { createFileRoute } from '@tanstack/react-router';
import { PageTitle, OfficeSection, MethodSection } from '@/components/institutional';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/escritorio')({head:()=>pageHead('O Escritório','Conheça a perspectiva independente e o método de trabalho do Almeida & Vasconcelos. Modelo demonstrativo.'),component:Page});
function Page(){return <><PageTitle label="O escritório" title="Uma advocacia de perspectiva independente." description="Rigor técnico, proximidade e discrição em cada questão jurídica."/><OfficeSection full/><MethodSection/></>;}