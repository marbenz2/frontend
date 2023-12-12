export type DateType = {
  id: number;
  attributes: {
    title: string;
    department: string;
    date: string;
    time: string;
    location: string;
    description: [
      {
        type: string;
        children: [
          {
            text: string;
            type: string;
          },
        ];
      },
    ];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    createdBy: string;
    updatedBy: string;
  };
};

export type ErrorType = {
  message: string;
  code: string;
};

export type NewsType = {
  id: number;
  attributes: {
    title: string;
    date: string;
    content: [BlocktextType];
    picture: string;
    authors: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    createdBy: string;
    updatedBy: string;
  };
};

type BlocktextType = {
  children: [ChildrenType];
  image: {
    url: string;
    alternativeText: string;
    hash: string;
    height: number;
    width: number;
  };
  type: string;
  format: string;
  level: number;
};

type ChildrenType = {
  text: string;
  type: string;
  format: string;
  level: number;
  bold: boolean;
  strikethrough: boolean;
  underline: boolean;
  italic: boolean;
  children: [ChildrenType];
  url: string;
};
