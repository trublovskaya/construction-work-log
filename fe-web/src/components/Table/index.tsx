import { Table as HeroTable } from '@heroui/react';

export const Table = () => {
return (
  <HeroTable>
    <HeroTable.ScrollContainer>
      <HeroTable.Content aria-label="Team members" className="min-w-[600px]">
        <HeroTable.Header>
          <HeroTable.Column isRowHeader>Name</HeroTable.Column>
          <HeroTable.Column>Role</HeroTable.Column>
          <HeroTable.Column>Status</HeroTable.Column>
          <HeroTable.Column>Email</HeroTable.Column>
        </HeroTable.Header>
        <HeroTable.Body>
          <HeroTable.Row>
            <HeroTable.Cell>Kate Moore</HeroTable.Cell>
            <HeroTable.Cell>CEO</HeroTable.Cell>
            <HeroTable.Cell>Active</HeroTable.Cell>
            <HeroTable.Cell>kate@acme.com</HeroTable.Cell>
          </HeroTable.Row>
          <HeroTable.Row>
            <HeroTable.Cell>John Smith</HeroTable.Cell>
            <HeroTable.Cell>CTO</HeroTable.Cell>
            <HeroTable.Cell>Active</HeroTable.Cell>
            <HeroTable.Cell>john@acme.com</HeroTable.Cell>
          </HeroTable.Row>
          <HeroTable.Row>
            <HeroTable.Cell>Sara Johnson</HeroTable.Cell>
            <HeroTable.Cell>CMO</HeroTable.Cell>
            <HeroTable.Cell>On Leave</HeroTable.Cell>
            <HeroTable.Cell>sara@acme.com</HeroTable.Cell>
          </HeroTable.Row>
          <HeroTable.Row>
            <HeroTable.Cell>Michael Brown</HeroTable.Cell>
            <HeroTable.Cell>CFO</HeroTable.Cell>
            <HeroTable.Cell>Active</HeroTable.Cell>
            <HeroTable.Cell>michael@acme.com</HeroTable.Cell>
          </HeroTable.Row>
        </HeroTable.Body>
      </HeroTable.Content>
    </HeroTable.ScrollContainer>
  </HeroTable>
)
}
