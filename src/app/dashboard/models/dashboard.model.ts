export class DashboardDto {
    public listDataForTodo!:number[];
    public listDataForInProgress!: number[];
    public listDataForDone!: number[];
    public todayNoOfTodo: Number | undefined;
    public todayNoOfInProgress: Number | undefined;
    public todayNoOfDone: Number | undefined;
    public weekNoOfTodo: Number | undefined;
    public weekNoOfInProgress: Number | undefined;
    public weekNoOfDone: Number | undefined;

}