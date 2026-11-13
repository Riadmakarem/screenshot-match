import { createFileRoute } from '@tanstack/react-router';
import { PageTitle, TeamSection } from '@/components/institutional';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/equipe')({head:()=>pageHead('Nossa Equipe','Conheça os perfis ilustrativos dos sócios do Almeida & Vasconcelos e suas áreas de atuação.'),component:Page});
function Page(){return <><PageTitle label="Equipe" title="Experiência e atenção pessoal." description="Os sócios participam diretamente da análise e da condução de cada demanda. Perfis fictícios para apresentação do modelo."/><TeamSection/></>;}