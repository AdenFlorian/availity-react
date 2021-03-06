export interface SpacesProps {
    clientId: string;
    children?: React.ReactType;
    query?: string;
    variables?: Object;
    spaceIds: Array<string>;
    payerIds: Array<string>;
}

declare const Spaces: React.FunctionComponent<SpacesProps>;

export default Spaces;
