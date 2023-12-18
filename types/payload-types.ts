/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    posts: Post;
    dates: Date;
    media: Media;
    impressum: Impressum;
    datenschutz: Datenschutz;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ("admin" | "editor")[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Post {
  id: string;
  post: {
    titel: string;
    autor: string | User;
    datum: string;
    content: {
      root: {
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ("ltr" | "rtl") | null;
        format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
        indent: number;
        type: string;
        version: number;
      };
      [k: string]: unknown;
    };
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
export interface Date {
  id: string;
  termin: {
    titel: string;
    datum: string;
    startzeit?: string | null;
    endzeit?: string | null;
    abteilung?: string | null;
    ort: string;
    content: string;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface Impressum {
  id: string;
  impressum: {
    titel: string;
    datum: string;
    content: {
      root: {
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ("ltr" | "rtl") | null;
        format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
        indent: number;
        type: string;
        version: number;
      };
      [k: string]: unknown;
    };
    autor: string | User;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
export interface Datenschutz {
  id: string;
  datenschutz: {
    titel: string;
    datum: string;
    content: {
      root: {
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ("ltr" | "rtl") | null;
        format: "left" | "start" | "center" | "right" | "end" | "justify" | "";
        indent: number;
        type: string;
        version: number;
      };
      [k: string]: unknown;
    };
    autor: string | User;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ("draft" | "published") | null;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: "users";
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
