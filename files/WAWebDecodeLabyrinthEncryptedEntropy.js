__d(
  "WAWebDecodeLabyrinthEncryptedEntropy",
  ["WABase64", "WAResultOrError", "WAWebLabyrinthOpaqueTypes", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        return o("WAResultOrError").makeResult(
          e == null
            ? e
            : o("WAWebLabyrinthOpaqueTypes").makeEncryptedEntropy(
                o("WABase64").decodeB64(e),
              ),
        );
      } catch (e) {
        return o("WAResultOrError").makeError(r("getErrorSafe")(e));
      }
    }
    l.decodeLabyrinthEncryptedEntropy = e;
  },
  98,
);
