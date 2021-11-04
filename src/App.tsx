import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import FilesList from './components/FilesList';
import FileModel from './models/FileModel';
import SocketService from './services/SocketService';

const App = () => {
  const [files, setFiles] = useState<Array<FileModel>>([]);
  const [loading, setLoading] = useState(true);
  const [downloadingFileId, setDownloadingFileId] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    SocketService.connect();

    SocketService.emitEvent('get-files', null, (response: Array<FileModel>) => {
      if (response) {
        setFiles(response);
      }
      setLoading(false);
    });

    return () => {
      SocketService.disconnect();
    };
  }, []);

  const onDownloadFile = (id: number) => {
    setDownloadingFileId(id);
    SocketService.emitEvent('download-file', { id }, (response: any) => {
      if (response && response.file && response.data) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          `${response.file.name}.${response.file.extension}`,
        );
        document.body.appendChild(link);
        link.click();
      }

      setDownloadingFileId(undefined);
    });
  };
  return (
    <div className="App">
      <Container maxWidth="lg">
        <h1>Redes</h1>
        {loading ? (
          <div className="loading-container">
            <CircularProgress />
          </div>
        ) : (
          <FilesList
            rows={files}
            downloadFileId={downloadingFileId}
            onDownloadFile={onDownloadFile}
          />
        )}
      </Container>
    </div>
  );
};

export default App;
