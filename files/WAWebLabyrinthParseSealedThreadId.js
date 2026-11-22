__d(
  "WAWebLabyrinthParseSealedThreadId",
  ["WABase64", "WAResultOrError", "WAWebLabyrinthOpaqueTypes", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return o("WAResultOrError").makeResult(null);
      try {
        return o("WAResultOrError").makeResult(
          o("WAWebLabyrinthOpaqueTypes").makeSealedThreadId(
            o("WABase64").decodeB64(e),
          ),
        );
      } catch (e) {
        return o("WAResultOrError").makeError(r("getErrorSafe")(e));
      }
    }
    l.parseLabyrinthSealedThreadId = e;
  },
  98,
);
