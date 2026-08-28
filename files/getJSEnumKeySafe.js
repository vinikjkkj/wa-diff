__d(
  "getJSEnumKeySafe",
  ["expectationViolation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t == null) return null;
      if (!Object.prototype.hasOwnProperty.call(e, t))
        return (
          r("expectationViolation")(
            "getJSEnumSafe key argument " +
              t +
              " was not found in map argument",
          ),
          null
        );
      var n = t;
      return n;
    }
    l.default = e;
  },
  98,
);
