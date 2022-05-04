import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine, RiGitMergeLine, RiTruckLine, RiBankCard2Line, RiParentLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return(
    <Stack
      spacing="12" 
      align="flex-start"
    >
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </NavSection>
      
      <NavSection title="NAVEGAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/products">Produtos</NavLink>
        <NavLink icon={RiParentLine} href="/clients">Clientes</NavLink>
        <NavLink icon={RiGitMergeLine} href="/sales">Vendas</NavLink>
        <NavLink icon={RiTruckLine} href="/providers">Fornecedores</NavLink>
        <NavLink icon={RiBankCard2Line} href="/payments">Pagamentos</NavLink>
      </NavSection>
    </Stack>
  );
}