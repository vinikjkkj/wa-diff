__d(
  "WAWebLabyrinthParseBinary",
  ["WABase64", "WAResultOrError", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      try {
        return o("WAResultOrError").makeResult(t(o("WABase64").decodeB64(e)));
      } catch (e) {
        return o("WAResultOrError").makeError(r("getErrorSafe")(e));
      }
    }
    l.parseLabyrinthBinary = e;
  },
  98,
);
