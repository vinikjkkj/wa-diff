__d(
  "getErrorMessageFromMediaErrorCode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e) {
        case 1:
          return "The fetching process for the media resource was aborted by the user agent at the users request.";
        case 2:
          return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
        case 3:
          return "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
        case 4:
          return "The media resource indicated by the src attribute was not suitable.";
      }
      return null;
    }
    i.default = e;
  },
  66,
);
