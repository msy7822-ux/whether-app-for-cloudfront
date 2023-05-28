import { Suspense } from "react";
import { Header } from "./components/common/header";
import { Weather } from "./components/weather/weather";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <Header></Header>
      <div className="px-4">
        <Suspense fallback={<>loading...</>}>
          <Weather></Weather>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
