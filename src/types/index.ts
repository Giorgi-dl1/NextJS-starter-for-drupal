import { MenuItem } from "./Menu";

export interface MenuResponse {
  jsonapi?: Jsonapi;
  data: MenuItem[];
  links?: Links;
}

export interface PageResponse {
  jsonapi: Jsonapi;
  data: PageData;
  links: Links;
}

export interface PageData {
  type: string;
  id: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface GlobalConfig {
  data: GlobalConfigItem[];
  jsonapi: Jsonapi;
  links: Links;
}

export interface GlobalConfigItem {
  attributes: Attributes;
  id: string;
  links: Links;
  relationships: Relationships;
  type: string;
}

export interface LoadedParagraphs {
  data: LoadedParagraph[];
  links: Link;
}

export interface LoadedParagraph {
  attributes: Attributes;
  relationships: Relationships;
  type: string;
  id: string;
  links: Links;
}

interface Fieldimagetextelements {
  data: Data[];
  links: Links2;
}

interface Relationships {
  node_type: Nodetype;
  revision_uid: Revisionuid;
  uid: Revisionuid;
  field_elemente: Fieldelemente;
  field_image_text_elements: Fieldimagetextelements;
  field_teaser_image: FieldTeaserImage;
  field_icon: MediImage;
  field_hover_icon: MediImage;
  field_further_articles: {
    data: FurtherArticle[];
  };
}

interface MediImage {
  data: {
    id: string;
    meta: Meta;
    type: string;
  };
  links: Links;
}

interface FurtherArticle {
  id: string;
  type: string;
}

interface FieldTeaserImage {
  data: {
    id: string;
  };
}

export interface Fieldelemente {
  data: ParagraphData[];
  links: Links2;
}

export interface ParagraphData {
  type: string;
  id: string;
  meta: Meta4;
  relationships: Relationships;
  attributes: Attributes;
}

interface Meta4 {
  target_revision_id: number;
  drupal_internal__target_id: number;
}

interface Revisionuid {
  data: Data2;
  links: Links2;
}

interface Data2 {
  type: string;
  id: string;
  meta: Meta3;
}

interface Meta3 {
  drupal_internal__target_id: number;
}

interface Nodetype {
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
  drupal_internal__target_id: string;
}

interface Attributes {
  drupal_internal__nid: number;
  drupal_internal__vid: number;
  langcode: string;
  revision_timestamp: string;
  revision_log?: any;
  status: boolean;
  title: string;
  created: string;
  changed: string;
  promote: boolean;
  sticky: boolean;
  default_langcode: boolean;
  revision_translation_affected: boolean;
  metatag?: any;
  path: Path;
  content_translation_source: string;
  content_translation_outdated: boolean;
  field_meta_tags: Fieldmetatags;
  context: string;
  field_facebook_link: Link;
  field_instagram_link: Link;
  field_linkedin_link: Link;
  field_pinterest_link: Link;
  field_vimeo_link: Link;
  field_x_link: Link;
  field_youtube_link_: Link;
  field_footer_adresse: FullText;
  field_footer_newsletter_text: FullText;
}

interface FullText {
  format: string;
  processed: string;
  value: string;
}

interface Link {
  title: string;
  uri: string;
  url: string;
}

interface Fieldmetatags {
  description: string;
  title: string;
}

interface FullText {
  value: string;
  format: string;
  processed: string;
}

interface Path {
  alias: string;
  pid: number;
  langcode: string;
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

interface Datum {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
}

interface Attributes {
  description?: any;
  enabled: boolean;
  expanded: boolean;
  menu_name: string;
  meta: Meta2;
  options: any[];
  parent: string;
  provider: string;
  route: Route;
  title: string;
  url: string;
  weight: number;
  field_date: string;
  field_category: string;
  field_reading_duration: string;
}

interface Route {
  name: string;
  parameters: Parameters;
}

interface Parameters {
  node: string;
}

interface Meta2 {
  entity_id: string;
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

export interface FooterAboutResponse {
  [x: string]: any;
  jsonapi: Jsonapi;
  data: Datum[];
  links: Links;
}

interface Datum {
  type: string;
  id: string;
  attributes: Attributes;
}

interface Attributes {
  description?: any;
  enabled: boolean;
  expanded: boolean;
  menu_name: string;
  meta: Meta2;
  options: any[];
  parent: string;
  provider: string;
  route: Route;
  title: string;
  url: string;
  weight: number;
}

interface Route {
  name: string;
  parameters: Parameters;
}

interface Parameters {
  node: string;
}

interface Meta2 {
  entity_id: string;
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

interface Datum {
  type: string;
  id: string;
  attributes: Attributes;
}

interface Attributes {
  description?: any;
  enabled: boolean;
  expanded: boolean;
  menu_name: string;
  meta: Meta2;
  options: any[];
  parent: string;
  provider: string;
  route: Route;
  title: string;
  url: string;
  weight: number;
}

interface Route {
  name: string;
  parameters: Parameters;
}

interface Parameters {
  node: string;
}

interface Meta2 {
  entity_id: string;
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
