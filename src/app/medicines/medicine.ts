import { Drug } from "../medicines-database/drug";

export interface MedicineDose {
    name: string;
    applicationDate: Date;
}

export interface MedicineAssignment {
    dosageTime: Date;
    userId: number;
    medicineId: number;
}

export interface MedicineAssignments {
    doseInterval: number;
    startDate: string;
    numberOfDosage: number;
    user_id: number;
    medicine_id: number;
}

export interface DrugDto {
    dosageTime: Date;
    id: number;
    medicine: Drug;
    user: any;
}
