import "./App.css";
import FOLDER_DIR, { IFolder } from "./constants/data";
import Folder from "./components/folders";

export default function App() {
/**
 * The function sorts the items in a folder by moving folders to the top of the list.
 * @param {IFolder} folder - The parameter `folder` is an object of type `IFolder`, which represents a
 * folder in a directory. It contains an array of `items`, where each item can be either a file or a
 * folder. The function `sortFolders` sorts the `items` array of the given `folder`
 * @returns the `FOLDER_DIR` object, which is not being modified within the function. It seems like the
 * intention was to return the sorted `folder` object instead.
 */
  const sortFolders = (folder: IFolder): IFolder => {
    folder.items.sort((a, b) => {
      if (a.isFolder && !b.isFolder) {
        return -1;
      }
      if (!a.isFolder && b.isFolder) {
        return 1;
      }
      return 0;
    });

    folder.items.forEach((item) => {
      if (item.isFolder) {
        sortFolders(item);
      }
    });
    return FOLDER_DIR;
  };
  return (
    <div className="App">
      <Folder explorer={sortFolders(FOLDER_DIR)} />
    </div>
  );
}
