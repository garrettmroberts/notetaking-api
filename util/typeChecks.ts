const isBinder = (obj: Binder) => {
  return obj.title && obj.meta.color && obj.folders;
};

const isFolder = (obj: Folder) => {
  return obj.title && obj.meta.color && obj.pages;
};

const isPage = (obj: Page) => {
  return obj.title && obj.content;
};

export { isBinder, isFolder, isPage };
