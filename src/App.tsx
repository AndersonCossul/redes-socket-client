import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import FilesList from './components/FilesList';
import FileModel from './models/FileModel';
import FilesService from './services/FilesService';

const App = () => {
  const [files, setFiles] = useState<Array<FileModel>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FilesService.getAll().then((data) => {
      setFiles(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <h1>Redes</h1>
        {loading ? (
          <div className="loading-container">
            <CircularProgress />
          </div>
        ) : (
          <FilesList rows={files} />
        )}
      </Container>
    </div>
  );
};

export default App;
