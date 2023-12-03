import { screen, render, within, getByTestId } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
    const users = [
        { name: 'jane', email: 'jane@jane.com'},
        { name: 'sam', email: 'sam@sam.com'},
     ]

    render(<UserList users={users}/>)

     return { users }
}

test('Render one row per user', () => {
    // render the component
    renderComponent();
    // Find all the rows in the table

    const rows = within(screen.getByTestId('tbody')).getAllByRole('row')
    // Assertion: correct number of rows in the table
    expect(rows).toHaveLength(2)
})

test('Render the email and name of each user', () => {
    // render the component
    const { users } = renderComponent();


    for(let user of users) {
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { name: user.email })

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})