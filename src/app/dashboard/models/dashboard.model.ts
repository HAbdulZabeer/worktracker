export class DashboardDto {
    public _id: String | undefined;
    public userId: String | undefined;
    public listDataForTodo!:number[];
    public listDataForInProgress!: number[];
    public listDataForDone!: number[];
    public year: Number | undefined;
    public todayNoOfTodo: Number | undefined;
    public todayNoOfInProgress: Number | undefined;
    public todayNoOfDone: Number | undefined;
    public weekNoOfTodo: Number | undefined;
    public weekNoOfInProgress: Number | undefined;
    public weekNoOfDone: Number | undefined;

}