import { createFileRoute } from '@tanstack/react-router';
import { Hero, OfficeSection, PracticeSection, TeamSection, MethodSection, PublicationsSection, ContactSection } from '@/components/institutional';
import { pageHead } from '@/lib/site-content';
export const Route = createFileRoute('/')({head:()=>pageHead('Advocacia & Consultoria','Estratégia jurídica com rigor e discrição. Conheça o modelo institucional de uma advocacia boutique em São Paulo.'),component:Index});
function Index() { return <><Hero/><OfficeSection/><PracticeSection/><TeamSection/><MethodSection/><PublicationsSection/><ContactSection/></>; }
