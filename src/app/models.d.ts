interface IRouteItem {
    name?: string;
    route?: string;
    img?: string;
}
interface INavigationItem extends IRouteItem {
    children?: IRouteItem[];
}