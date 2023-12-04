import { render, screen } from "@testing-library/react"
import Test from "./Test"


test('specific element', async () => {
    render(<Test/>)

    const element = screen.queryByRole('textbox');

    expect(element).not.toBeInTheDocument();
    
}) 