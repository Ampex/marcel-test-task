import { Card, Table, Typography } from "@mui/joy"
import t from "i18n/common.json"
import { useFormContext } from "react-hook-form"
import samples from "test-samples.json"
import { columnHeaders, createRow } from "utils"

export default function SampleTable() {
  const { watch } = useFormContext()
  const { id, location, labTechnicianName } = watch()

  const filteredSamples = samples
    .filter(sample => (id ? sample.id === id : sample))
    .filter(sample => (location ? sample.location === location : sample))
    .filter(sample => (labTechnicianName ? sample.labTechnicianName === labTechnicianName : sample))

  return (
    <Card>
      {!filteredSamples.length ? (
        <Typography>{t.noResults}</Typography>
      ) : (
        <Table aria-label="simples table">
          <thead>
            <tr>{columnHeaders}</tr>
          </thead>
          <tbody>{filteredSamples.map(sample => ({ ...createRow(sample) }))}</tbody>
        </Table>
      )}
    </Card>
  )
}
