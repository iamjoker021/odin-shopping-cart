import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home component", () => {
    it("test if not item message when no items passed", () => {
        render(<Home />);
        expect(screen.getByText('Sorry No Item Found, Please try reloading and try after some time')).toBeInTheDocument();
    })

    it("test when items passed", () => {
        const itemList = [
            {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
            {"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}}
        ];
        render(<Home itemList={itemList} />);
        expect(screen.queryByText('Sorry No Item Found, Please try reloading and try after some time')).not.toBeInTheDocument();

        const cards = screen.getAllByRole('heading');
        expect(cards).toHaveLength(2);
        expect(cards[0].textContent).toMatch(itemList[0].title);
        expect(cards[1].textContent).toMatch(itemList[1].title);
    })
})