import {render, screen} from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import {describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom/jest-globals";
import StarRating from "./StarRating";

describe("StarRating", () => {
    it('render 5 stars by default', () => {
        render(<StarRating />);
        expect(screen.getAllByRole('button')).toHaveLength(5);
    });

    it('show customized max rating', () => {
        render(<StarRating maxRating={10}></StarRating>);

        expect(screen.getAllByRole('button')).toHaveLength(10);
    })

    it('Allows selecting a rating', async () => {
        const user = UserEvent.setup();

        render(<StarRating></StarRating>);
        const stars = screen.getAllByRole('button');

        await user.click(stars[2]);
        expect(screen.getByText('You rated 3/5')).toBeInTheDocument();
    });

    it('Highlight a star on hover', async () => {
        const user = UserEvent.setup();

        render(<StarRating/>);
        const stars = screen.getAllByRole('button');
        await user.hover(stars[2]);
        expect(stars[0]).toHaveClass('active');
        expect(stars[1]).toHaveClass('active');
        expect(stars[2]).toHaveClass('active');
    })

})