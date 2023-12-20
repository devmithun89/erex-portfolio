import React from "react";
import { Hero } from "./container";
import Service from "./container/service/Service";
import Client from "./container/client/Client";

export default function App() {
  return (
    <>
      <Hero />
      <Service />
      <Client />
    </>
  );
}
