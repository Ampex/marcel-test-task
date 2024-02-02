import { render, screen } from "@testing-library/react"
import SampleTable from "./SampleTable"

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    watch: () => {
      return {
        id: null,
        location: null,
        labTechnicianName: null,
      }
    },
  }),
}))

test("renders sample table", () => {
  render(<SampleTable />)

  // Assert that the table is rendered
  const tableElement = screen.getByRole("table")
  expect(tableElement).toBeInTheDocument()

  // Assert that the table has the correct headers
  const headerElements = screen.getAllByRole("columnheader")
  expect(headerElements).toHaveLength(6)
  expect(headerElements[0]).toHaveTextContent("ID")
  expect(headerElements[1]).toHaveTextContent("Building Name")
  expect(headerElements[2]).toHaveTextContent("Location")

  // Assert that the table has the correct data rows
  const rowElements = screen.getAllByRole("row")
  expect(rowElements).toHaveLength(51)
})
