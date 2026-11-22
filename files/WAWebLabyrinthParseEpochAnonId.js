__d(
  "WAWebLabyrinthParseEpochAnonId",
  ["WABase64", "WAResultOrError", "WAWebLabyrinthOpaqueTypes", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return o("WAResultOrError").makeResult(null);
      try {
        return o("WAWebLabyrinthOpaqueTypes").parseEpochAnonId(
          new TextDecoder().decode(o("WABase64").decodeB64(e)),
        );
      } catch (e) {
        return o("WAResultOrError").makeError(r("getErrorSafe")(e));
      }
    }
    l.parseLabyrinthEpochAnonId = e;
  },
  98,
);
