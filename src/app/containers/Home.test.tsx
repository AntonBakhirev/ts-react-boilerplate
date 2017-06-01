// import { renderComponent } from "../helpers/TestHelper";
import { shallow } from "enzyme";
import * as React from "react";
import { Home, Styles } from "./Home";
describe("<Home />", () => {

  const component = shallow(<Home />);
  it("Renders with correct style", () => {
    expect(component.find(`.${Styles.home}`)).toBeDefined();
  });

  it("Renders Barbar Logo", () => {
    expect(component.find("img")).toBeDefined();
  });

  it("Has a p element that says Hello!", () => {
    expect(component.find("p").text()).toEqual("Hello!");
  });

});
