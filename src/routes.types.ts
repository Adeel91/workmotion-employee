type RouteTypeChildren = {
  path: string;
  element: JSX.Element;
}[];

export type RouteTypes = {
  path: string;
  children?: RouteTypeChildren;
  element?: JSX.Element;
}[];
