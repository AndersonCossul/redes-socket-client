import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import FileModel from '../../models/FileModel';

type Props = {
  rows: Array<FileModel>;
};

const FilesList = ({ rows }: Props) => (
  <TableContainer component={Paper}>
    <Table aria-label="files table">
      <TableHead>
        <TableRow>
          <TableCell align="center">ID</TableCell>
          <TableCell align="center">Nome</TableCell>
          <TableCell align="center">Ações</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">{row.id}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">
              <Button variant="outlined" color="primary">
                Download
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FilesList;
