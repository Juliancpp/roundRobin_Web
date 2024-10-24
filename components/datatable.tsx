import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

export default function Datatable() {
  return (
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NOMBRE</TableColumn>
        <TableColumn>ROL</TableColumn>
        <TableColumn>HORA</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>Participante</TableCell>
          <TableCell>3:14</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Participante</TableCell>
          <TableCell>3:25</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Participante</TableCell>
          <TableCell>3:40</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Participante</TableCell>
          <TableCell>4:00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
