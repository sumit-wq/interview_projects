export interface IFolder {
    id: number;
    isFolder: boolean;
    name: string;
    items: IFolder[] | [];
  }
  
  const FOLDER_DIR = {
    id: 1,
    isFolder: true,
    name: "root",
    items: [
      {
        id: 2,
        name: "public",
        isFolder: true,
        items: [
          {
            id: 4,
            name: "index.html",
            isFolder: false,
            items: []
          },
          {
            id: 5,
            name: "nested public",
            isFolder: true,
            items: [
              {
                id: 6,
                name: "index.html",
                isFolder: false,
                items: []
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "src",
        isFolder: true,
        items: [
          {
            id: 9,
            name: "App.tsx",
            isFolder: false,
            items: []
          },
          {
            id: 10,
            name: "styles.css",
            isFolder: false,
            items: []
          },
          {
            id: 11,
            name: "index.tsx",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id: 7,
        name: "package.json",
        isFolder: false,
        items: []
      },
      {
        id: 8,
        name: "tsconfig.jsoc",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default FOLDER_DIR;
  