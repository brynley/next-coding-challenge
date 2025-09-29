import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Home from '@/app/page';
import Header from '@/components/Header';
import { BasketProvider } from '@/context/Basket/BasketProvider';

const renderPage = () => {
    return (
        <BasketProvider>
            <Header />
            <Home />
        </BasketProvider>
    )
}

describe('Home', () => {
    it('renders an empty basket', () => {
        render(renderPage());

        const basketLink = screen.getByRole('link', {
            name: /Basket:/i,
        });

        expect(basketLink).toHaveTextContent('Basket: 0 items');
    });

    it('renders a basket with 1 item', async () => {
        const user = userEvent.setup()
        render(renderPage());

        const buttons = screen.getAllByRole('button', {
            name: /Add Item /i,
        });

        await user.click(buttons[0]);

        const basketButton = screen.getByRole('link', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent(/Basket: 1 item$/);
    });

    it('renders a basket with 1 of item 1 and 2 of item 2', async () => {
        const user = userEvent.setup()
        render(renderPage());

        const buttons = screen.getAllByRole('button', {
            name: /Add Item /i,
        });

        await user.click(buttons[0]);
        await user.click(buttons[1]);
        await user.click(buttons[1]);

        const basketButton = screen.getByRole('link', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent(/Basket: 3 items$/);
    });
});
