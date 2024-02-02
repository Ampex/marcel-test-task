import { Filter, Sample } from "types"
import samples from "test-samples.json"
import t from "i18n/common.json"

const uniqueFilter = (filter: keyof Sample) => [
  ...new Set(samples.map((sample: Sample) => sample[filter])),
]

export const defaultValues = {
  id: null,
  location: null,
  labTechnicianName: null,
}

export const fieldsData = [
  {
    name: Filter.ID,
    placeholder: t.labels.id,
    options: uniqueFilter(Filter.ID),
  },
  {
    name: Filter.LOCATION,
    placeholder: t.labels.location,
    options: uniqueFilter(Filter.LOCATION),
  },
  {
    name: Filter.LAB_TECHNICIAN_NAME,
    placeholder: t.labels.fullName,
    options: uniqueFilter(Filter.LAB_TECHNICIAN_NAME),
  },
]

export const createRow = (sample: Sample) => (
  <tr key={sample.id}>
    <td>{sample.id}</td>
    <td>{sample.buildingName}</td>
    <td>{sample.location}</td>
    <td>{sample.roomNumber}</td>
    <td>{sample.shelfNumber}</td>
    <td>{sample.labTechnicianName}</td>
  </tr>
)

export const columnHeaders = [
  "ID",
  "Building Name",
  "Location",
  "Room Number",
  "Shelf Number",
  "Lab Technician",
].map(header => <th key={header}>{header}</th>)
