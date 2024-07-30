import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Item from "./Item";

describe("Item component", () => {
    const item = {
        "id":1,
        "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price":109.95,
        "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category":"men's clothing",
        "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating":{"rate":3.9,"count":120}
    }
    it('test image correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByRole('img').src).toMatch(item.image);
    })

    it('test heading correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByRole('heading').textContent).toMatch(item.title);
    })

    it('test description correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByText(item.description)).toBeInTheDocument();
    })

    it('test Rating & Count correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByText(`Rating: ${item.rating.rate} (${item.rating.count})`), {exact: false}).toBeInTheDocument();
    })

    it('test categroy correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByText(item.category)).toBeInTheDocument();
    })

    it('test Price correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByText(`Price: ${item.price}`), {exact: false}).toBeInTheDocument();
    })

    it('test Add to Cart button correct in Card', () =>{
        render(<Item item={item}/>)
        expect(screen.getByRole('button').textContent).toMatch(/Add to Cart/i);
    })
})