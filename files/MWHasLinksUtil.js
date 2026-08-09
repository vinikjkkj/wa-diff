__d(
  "MWHasLinksUtil",
  ["URLMatcher", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("isStringNullOrEmpty")(e)
        ? !1
        : r("URLMatcher").match(e) != null;
    }
    l.getHasLinks = e;
  },
  98,
);
