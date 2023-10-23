export interface ImageResponse {
  jsonapi: Jsonapi;
  data: ImageData;
  links: Links;
}

export interface ImageData {
  type: string;
  id: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

interface Relationships {
  uid: Uid;
  field_media_image: {
    data: {
      id: string;
    };
  };
}

interface Uid {
  data: Data;
  links: Links2;
}

interface Links2 {
  related: Self;
  self: Self;
}

interface Data {
  type: string;
  id: string;
  meta: Meta2;
}

interface Meta2 {
  drupal_internal__target_id: number;
}

interface Attributes {
  drupal_internal__fid: number;
  langcode: string;
  filename: string;
  uri: Uri;
  filemime: string;
  filesize: number;
  status: boolean;
  created: string;
  changed: string;
}

interface Uri {
  value: string;
  url: string;
}

interface Jsonapi {
  version: string;
  meta: Meta;
}

interface Meta {
  links: Links;
}

interface Links {
  self: Self;
}

interface Self {
  href: string;
}
