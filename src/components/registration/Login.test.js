import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "./Login"

jest.mock('axios', () => ({
    __esModule: true,
    default: {
        get: () => ({
            data: { id: 1, name: 'John' }
        })
    }
}))


test('user input should be rendered', () => {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    expect(userInput).toBeInTheDocument()
})

test('password input should be rendered', () => {
    render(<Login/>)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test('button input should be rendered', () => {
    render(<Login/>)
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument() 
})

test('loading should not be rendered', () => {
    render(<Login/>)
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).not.toHaveTextContent(/loading/i)
})

test('user input should be empty', () => {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    expect(userInput.value).toBe('')
})

test('password input should be empty', () => {
    render(<Login/>)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl.value).toBe('')
})

test('button input should be disabled', () => {
    render(<Login/>)
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeDisabled()
})

test('error element should not be visible', () => {
    render(<Login/>)
    const errorEl = screen.getByTestId('error')
    expect(errorEl).not.toBeVisible()
})

test('user input should change', () => {
    render(<Login/>)
    const testValue = 'sabbir'
    const userInput = screen.getByPlaceholderText(/username/i)
    fireEvent.change(userInput, { target: { value: testValue }})
    expect(userInput.value).toBe(testValue)

})

test('password input should change', () => {
    render(<Login/>)
    const testValue = 'sabbir123'
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    fireEvent.change(passwordInputEl, { target: { value: testValue }})
    expect(passwordInputEl.value).toBe(testValue)
})

test('submit button should not be disabled when user and password value exist', () => {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const submitBtn = screen.getByRole('button');

    const testValue = 'test'
    fireEvent.change(userInput, { target: { value: testValue }})
    fireEvent.change(passwordInputEl, { target: { value: testValue }})
    expect(submitBtn).not.toBeDisabled();
})

test('loading button should be rendered when button click', () => {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const submitBtn = screen.getByRole('button');

    const testValue = 'test'
    fireEvent.change(userInput, { target: { value: testValue }})
    fireEvent.change(passwordInputEl, { target: { value: testValue }})
    fireEvent.click(submitBtn)

    expect(submitBtn).toHaveTextContent(/loading/i)
})

test('loading button should not be rendered after fetching', async () => {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const submitBtn = screen.getByRole('button');

    const testValue = 'test'
    fireEvent.change(userInput, { target: { value: testValue }})
    fireEvent.change(passwordInputEl, { target: { value: testValue }})
    fireEvent.click(submitBtn)

    await waitFor(() => expect(submitBtn).not.toHaveTextContent(/loading/i)) 
})
 

test('user name should be rendered after fetching', async () => {
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    const submitBtn = screen.getByRole('button');

    const testValue = 'test'
    fireEvent.change(userInput, { target: { value: testValue }})
    fireEvent.change(passwordInputEl, { target: { value: testValue }})
    fireEvent.click(submitBtn)

    const user = await screen.findByText('John')

    expect(user).toBeInTheDocument()
})
   