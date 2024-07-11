export enum UserRole {
    HR_EMPLOYEE = 1,
    MANAGEMENT_EMPLOYEE = 2,
    SALES_EMPLOYEE = 3,
    STANDARD_EMPLOYEE = 4
}

export type JwtToken = {
    Role: UserRole
}