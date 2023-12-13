import { queries, render, screen } from "@testing-library/react"
import Test from "./Test"
import { rest } from 'msw'
jest.mock(('../tree/FileIcon', () => {
    return () => {
        return 'File Icon Component'
    }
}))

const handlers = [
    rest.get('api/repositories', (req, res, ctx) => {
        const query = req.url.searchParams.get('q')
        console.log(query)
        return res(
            ctx.json({
                items: [
                    { id: 1, full_name: 'full name'},
                    { id: 2, full_name: 'other name'}
                ]
            })
        )
    })
]

const server = setupServer(...handlers)

beforeAll(() => {
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
})

afterAll(() => {
    server.close()
})








test('specific element', async () => {


    render(<Test />)
    const element = screen.queryByRole('textbox');
    expect(element).not.toBeInTheDocument();

})