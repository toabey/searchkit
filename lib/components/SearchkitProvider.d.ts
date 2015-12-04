import { Component } from "react";
import ESClient from "../domain/ESClient";
import * as Rx from "rx";
export interface ISearcherProvider {
    searcher: ESClient;
    children?: any;
}
export default class SearchkitProvider extends Component<ISearcherProvider, any> {
    static childContextTypes: {
        searcher: React.Requireable<any>;
    };
    private searcher;
    results: any;
    searcherUnsubscribe: Rx.IDisposable;
    constructor(props: ISearcherProvider);
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getChildContext(): {
        searcher: ESClient;
    };
    render(): any;
}