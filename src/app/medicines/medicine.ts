export interface MedicineDose {
    name: string;
    applicationDate: Date;
}

export interface Medicine {
    name: string;
    startDate: Date;
    endDate: Date;
    interval: number;
}
