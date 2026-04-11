__d(
  "WAWebGetUnifiedContentResponseTitle",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e === "citations"
        ? s._(/*BTDS*/ "Source")
        : (function () {
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })();
    }
    l.getUnifiedResponseContentTitle = e;
  },
  226,
);
