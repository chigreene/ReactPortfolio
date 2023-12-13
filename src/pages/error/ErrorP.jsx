import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    //   need to write css styling and import it
    <div id="">
      <h1>Whoops!</h1>
      <p>We are sorry, an unexpected error has occurred</p>
      <p>Its not you. Its us.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
