type Binder = {
  title: string;
  meta: {
    color: string;
    tags?: [string];
  };
  folders: [Folder];
};

type Folder = {
  title: string;
  meta: {
    color: string;
    tags?: [string];
  };
  pages: [Page];
};

type Page = {
  title: string; // markdown
  content: string;
  meta?: {
    tags?: [string];
  };
};
