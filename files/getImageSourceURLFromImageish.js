__d(
  "getImageSourceURLFromImageish",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return typeof e == "string"
        ? e
        : e != null &&
            typeof e == "object" &&
            !e.sprited &&
            e.uri &&
            typeof e.uri == "string"
          ? e.uri
          : "";
    }
    i.default = e;
  },
  66,
);
