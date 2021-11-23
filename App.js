import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";
const stdlib = loadStdlib(process.env);

const App = () => {
  return (
    <div>
      <h1>IDEA NATION</h1>
    </div>
  );
};

export default App;
