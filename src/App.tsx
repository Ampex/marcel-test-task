import { Container, Grid, Link, Stack, Typography } from "@mui/joy"
import FilterFields from "components/FilterFields"
import SampleTable from "components/SampleTable"
import t from "i18n/common.json"
import { defaultValues } from "utils"

import { FormProvider, useForm } from "react-hook-form"

export default function App() {
  const methods = useForm({ defaultValues })
  const onFilterClear = () => methods.reset(defaultValues)

  return (
    <Container sx={{ py: 4 }}>
      <Typography level="h1" py={4}>
        {t.title}
      </Typography>
      <Grid container direction="column" spacing={2}>
        <FormProvider {...methods}>
          <Grid xs>
            <Stack direction="row" justifyContent="space-between">
              <Typography>{t.filters}</Typography>
              {methods.formState.isDirty && (
                <Link onClick={onFilterClear} fontWeight={600}>
                  {t.clear}
                </Link>
              )}
            </Stack>
          </Grid>
          <Grid xs>
            <FilterFields />
          </Grid>
          <Grid xs>
            <SampleTable />
          </Grid>
        </FormProvider>
      </Grid>
    </Container>
  )
}
