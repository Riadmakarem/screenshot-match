import { createFileRoute } from '@tanstack/react-router';
import { PageTitle, PublicationsSection } from '@/components/institutional';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/publicacoes/')({head:()=>pageHead('Publicações','Reflexões informativas sobre governança, reforma tributária e contratos empresariais.'),component:Page});
function Page(){return <><PageTitle label="Publicações" title="Direito em perspectiva." description="Análises e reflexões sobre questões jurídicas do ambiente de negócios. Artigos de exemplo, de caráter exclusivamente informativo."/><PublicationsSection/></>;}