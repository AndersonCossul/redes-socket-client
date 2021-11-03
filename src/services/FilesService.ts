import FileModel from '../models/FileModel';

const getAll = (): Promise<FileModel[]> => {
  const promise = new Promise<FileModel[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          binary: new File([], ''),
          name: 'Teste',
        },
      ]);
    }, 500);
  });

  return promise;
};

export default {
  getAll,
};
