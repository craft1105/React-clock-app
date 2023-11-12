import Details from "./Details";
import Heading from "./Heading";
import Time from "./Time";

function Maincard() {
  return (
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">
          <Heading />
        </h5>
        <p class="card-text">
          <Details />
        </p>
        <p class="card-text">
          <Time />
        </p>
      </div>
    </div>
  );
}
export default Maincard;
