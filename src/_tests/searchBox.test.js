import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { filterProductsReducer } from "../redux/products/products.reducer";
import { setSearchField } from "../redux/products/products.actions";

import SearchBox from '../components/searchBox/searchBox'

describe("<SearchBox />", () => {
 
  test('Render SearchField', () => {
    render(<SearchBox />);
 
    const inputEl = screen.getByTestId("searchBox");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "search");
  });
 
  test('Pass value to the SearchField', () => {
    render(<SearchBox />);
 
    const inputEl = screen.getByTestId("searchBox");
    userEvent.type(inputEl, "t-shirt");
 
    expect(screen.getByTestId("searchBox")).toHaveValue("t-shirt");
  });

  test('Should change state', () => {
    const previousState = {
      keyword: ""
    }
    expect(filterProductsReducer(previousState, setSearchField('New shirt'))).toEqual(
      {
        keyword: "New shirt"
      }
    )
  })
})