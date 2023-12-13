import { useRouteError } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  useEffect(() => {
    document.title = "Chris Greene - Error Page";

    return () => {
      document.title = "Chris Greene";
    };
  });

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
