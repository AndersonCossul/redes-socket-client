import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  CircularProgress,
} from '@mui/material';
import FileModel from '../../models/FileModel';

type Props = {
  rows: Array<FileModel>;
  downloadFileId: number | undefined;
  onDownloadFile: (id: number) => void;
};

const FilesList = ({ rows, downloadFileId, onDownloadFile }: Props) => (
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
              <Button
                onClick={() => onDownloadFile(row.id)}
                variant="outlined"
                color="primary"
                disabled={row.id === downloadFileId}
              >
                {row.id === downloadFileId ? (
                  <CircularProgress size={16} />
                ) : (
                  'Download'
                )}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FilesList;
