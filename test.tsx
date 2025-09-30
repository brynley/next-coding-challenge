import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Home from '@/app/page';
import Header from '@/components/Header';
import { BasketProvider } from '@/context/Basket/BasketProvider';

const renderPage = async () => {
    const home = await Home();
    return (
        <BasketProvider>
            <Header />
            {home}
        </BasketProvider>
    );
};

describe('Home', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => {
            return Promise.resolve({
                ok: true,
                json: () =>
                    Promise.resolve({
                    products: [
                        {
                            id: 1,
                            name: { us: 'US copy 1', uk: 'UK copy 1' },
                            price: { usd: 111.111, gbp: 11.11 },
                            stock: 11
                        },
                        {
                            id: 1,
                            name: { us: 'US copy 2', uk: 'UK copy 2' },
                            price: { usd: 222.222, gbp: 22.22 },
                            stock: 22
                        }
                    ],
                    }),
                })
            }
        ) as any
    })
    it('renders an empty basket', async () => {
        render(await renderPage());

        const basketLink = screen.getByRole('link', {
            name: /Basket:/i,
        });

        expect(basketLink).toHaveTextContent('Basket: 0 items');
    });

    it('renders a basket with 1 item', async () => {
        const user = userEvent.setup()
        render(await renderPage());

        const buttons = await screen.findAllByRole('button', {
            name: /UK copy /i,
        });

        await user.click(buttons[0]);

        const basketButton = await screen.findByRole('link', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent(/Basket: 1 item$/);
    });

    it('renders a basket with 1 of item 1 and 2 of item 2', async () => {
        const user = userEvent.setup()
        render(await renderPage());

        const buttons = await screen.findAllByRole('button', {
            name: /UK copy /i,
        });

        await user.click(buttons[0]);
        await user.click(buttons[1]);
        await user.click(buttons[1]);

        const basketButton = await screen.findByRole('link', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent(/Basket: 3 items$/);
    });
});
