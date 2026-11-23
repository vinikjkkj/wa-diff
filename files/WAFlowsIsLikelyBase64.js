__d(
  "WAFlowsIsLikelyBase64",
  ["WAFlowsComponentUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (
        typeof e != "string" ||
        e.length === 0 ||
        e.length < 8 ||
        e.length % 4 !== 0 ||
        !o("WAFlowsComponentUtils").BASE_64_ENCODING.test(e) ||
        (e.includes("=") && !e.endsWith("="))
      )
        return !1;
      try {
        return btoa(atob(e)) === e;
      } catch (e) {
        return !1;
      }
    }
    l.default = e;
  },
  98,
);
