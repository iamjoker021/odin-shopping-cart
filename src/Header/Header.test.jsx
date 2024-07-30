import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header component', () => {
    it("renders correct heading title as passed", () => {
        const cartCount = 0;
        render(<Header title='SomeTitle' cartCount={cartCount} />);
        expect(screen.getByRole('heading').textContent).toMatch(/sometitle/i);
    })

    it("renders navbar with Home", () => {
        const cartCount = 0;
        render(<Header title='SomeTitle' cartCount={cartCount} />);
        expect(screen.getByRole('link', {name: 'Home'}).textContent).toMatch(/Home/i);
        
    })

    it("renders navbar with YourCart only when cartCount is 0", () => {
        const cartCount = 0;
        render(<Header title='SomeTitle' cartCount={cartCount} />);
        expect(screen.getByRole('link', {name: 'Your Cart'}).textContent).toMatch(/Your Cart/i);
    })

    it("renders navbar with YourCart only when cartCount is grater than 0", () => {
        const cartCount = 3;
        render(<Header title='SomeTitle' cartCount={cartCount} />);
        expect(screen.getByRole('link', {name: 'Your Cart '+ cartCount}).textContent).toMatch(/Your Cart/i);
    })
})