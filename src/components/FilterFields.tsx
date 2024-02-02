import { Autocomplete, Grid } from "@mui/joy"
import { Controller, useFormContext } from "react-hook-form"
import { fieldsData } from "utils"

export default function FilterFields() {
  const { control } = useFormContext()

  const fieldsRenderer = fieldsData.map(props => (
    <Grid xs={4} key={props.name}>
      <Controller
        name={props.name}
        control={control}
        render={({ field: { ref, onChange, ...field } }) => (
          <Autocomplete size="lg" {...props} {...field} onChange={(_, data) => onChange(data)} />
        )}
      />
    </Grid>
  ))

  return (
    <Grid container spacing={2}>
      {fieldsRenderer}
    </Grid>
  )
}
