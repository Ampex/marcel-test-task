export type Sample = {
  id: string
  buildingName: string
  location: string
  roomNumber: string
  shelfNumber: string
  labTechnicianName: string
}

export enum Filter {
  ID = "id",
  LOCATION = "location",
  LAB_TECHNICIAN_NAME = "labTechnicianName",
}
