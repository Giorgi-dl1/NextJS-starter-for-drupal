export type MenuItem = {
  id: string;
  type: string;
  attributes: {
    description: string | null;
    enabled: boolean;
    expanded: boolean;
    menu_name: string;
    parent: string | null;
    provider: string;
    title: string;
    url: string;
    weight: number;
    meta: {
      entity_id: string;
    };
    options: any[];
    route: {
      name: string;
      parameters: {
        node: string;
      };
    };
  };
};
