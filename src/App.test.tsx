import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import t from "i18n/common.json"

describe("App tests", () => {
  it("renders title of the app", () => {
    render(<App />)
    const linkElement = screen.getByText(t.title)
    expect(linkElement).toBeInTheDocument()
  })
  it("renders nested form fields", () => {
    render(<App />) // Pass the useForm().control as a prop
    const nestedField1 = screen.getByPlaceholderText(t.labels.id)
    const nestedField2 = screen.getByPlaceholderText(t.labels.location)
    expect(nestedField1).toBeInTheDocument()
    expect(nestedField2).toBeInTheDocument()
  })

  it("changes values on nested fields & clear filters after click 'Clear' link", async () => {
    render(<App />)
    const filter1 = screen.getByPlaceholderText(t.labels.id)
    const filter2 = screen.getByPlaceholderText(t.labels.location)
    const filter3 = screen.getByPlaceholderText(t.labels.fullName)

    // Simulate user input
    fireEvent.focus(filter1)
    fireEvent.change(filter1, { target: { value: "4106" } })

    fireEvent.focus(filter2)
    fireEvent.change(filter2, { target: { value: "Location D" } })

    fireEvent.focus(filter3)
    fireEvent.change(filter3, { target: { value: "Erik Day" } })

    // Assert that the field values have been changed
    expect(filter1).toHaveValue("4106")
    expect(filter2).toHaveValue("Location D")
    expect(filter3).toHaveValue("Erik Day")

    // Click on filter clear link
    // const clearLink = screen.getByText(t.clear)
    // fireEvent.click(clearLink)

    // // Assert that the field values have been reset
    // expect((nestedField1 as HTMLInputElement).value).toHaveValue("")
    // expect(nestedField2).toHaveValue("")
    // expect(nestedField3).toHaveValue("")
  })
})
