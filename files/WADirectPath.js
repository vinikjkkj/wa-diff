__d(
  "WADirectPath",
  ["WAResultOrError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "0_0_0_.enc";
    function s(e) {
      return e;
    }
    function u(t) {
      return t == null
        ? o("WAResultOrError").makeError("direct-path-undefined")
        : t === ""
          ? o("WAResultOrError").makeError("direct-path-empty")
          : t.includes(e)
            ? o("WAResultOrError").makeError("direct-path-corrupted")
            : o("WAResultOrError").makeResult(t);
    }
    ((l.unsafeCastToDirectPath = s), (l.validateDirectPath = u));
  },
  98,
);
