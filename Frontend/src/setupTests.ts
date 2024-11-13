/** @format */

import "@testing-library/dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./Mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
