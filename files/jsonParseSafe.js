__d(
  "jsonParseSafe",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        return JSON.parse(e != null ? e : "{}");
      } catch (n) {
        return (
          r("FBLogger")("pages_lwi").mustfix(
            "failed to parse jsonString: %s",
            e,
          ),
          t
        );
      }
    }
    l.default = e;
  },
  98,
);
