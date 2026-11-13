import { createFileRoute } from '@tanstack/react-router';
import { PageTitle, PracticeSection } from '@/components/institutional';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/atuacao')({head:()=>pageHead('Áreas de Atuação','Direito Empresarial, Tributário, Contratos e Contencioso Estratégico. Conheça nossas frentes de atuação.'),component:Page});
function Page(){return <><PageTitle label="Atuação" title="Especialização com visão de conjunto." description="Assessoria jurídica atenta às particularidades de cada negócio e às conexões entre as diferentes áreas do direito."/><PracticeSection/></>;}