export interface Trail {
    $key?: string;
    date?: string;
    id?: string;
    name?: string;
    note?: string;
    creatorName?: string;
    location?: string;
    routeType?: ({
        typeOfRoute: string;
    })
}
