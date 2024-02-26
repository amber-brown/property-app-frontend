import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import * as propertiesService from "./services/properties";
import { Property } from "./types";
import { AxiosResponse } from "axios";

const getPropertiesSpy = jest.spyOn(propertiesService, "getProperties");

const mockGetPropertiesResponse = {
  data: [
    {
      id: "1",
      address: "Brick Street, London, W1J",
      price: 35000000,
      imageUri: "/images/house_1.jpeg",
    },
    {
      id: "2",
      address: "Avenue Road, NW8",
      price: 30000000,
      imageUri: "/images/house_2.jpeg",
    },
  ],
} as AxiosResponse<Property[], any>;

describe("Property App", () => {
  it("renders a property list", async () => {
    getPropertiesSpy.mockResolvedValueOnce(mockGetPropertiesResponse);

    act(() => {
      render(<App />);
    });

    await waitFor(() => {
      expect(screen.getByText("Brick Street, London, W1J")).toBeTruthy();
      expect(screen.getByText("£35,000,000")).toBeTruthy();

      expect(screen.getByText("Avenue Road, NW8")).toBeTruthy();
      expect(screen.getByText("£30,000,000")).toBeTruthy();
    });
  });

  it("renders an error if thre is a problem fetching the properties", async () => {
    getPropertiesSpy.mockRejectedValueOnce(new Error("There was an error"));

    act(() => {
      render(<App />);
    });

    await waitFor(() => {
      expect(
        screen.getByText("There was an error getting property listings")
      ).toBeTruthy();
    });
  });

  it("opens and closes the add properties form", async () => {
    act(() => {
      render(<App />);
    });

    await waitFor(() => {});
    const formTitle = "Add Property Form";

    fireEvent.click(screen.getByText("Add Property"));
    expect(screen.getByText(formTitle)).toBeTruthy();

    fireEvent.click(screen.getByText("close"));
    expect(screen.queryByText(formTitle)).toBeFalsy();
  });
});
