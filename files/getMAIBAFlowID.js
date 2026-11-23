__d(
  "getMAIBAFlowID",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e !== "boost" && e !== "mbs_creation"
        ? null
        : t != null && t !== ""
          ? "maiba-" + t
          : null;
    }
    i.default = e;
  },
  66,
);
