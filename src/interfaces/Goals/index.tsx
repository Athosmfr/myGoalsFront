export interface IGoal {
    id?: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string; // Como "CREATED", "IN_PROGRESS", "COMPLETED", etc.
}