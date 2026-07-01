__d(
  "WAWebBizAdCreationHawkUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e == null
        ? "null"
        : typeof e == "object"
          ? JSON.stringify(e, null, 2)
          : String(e);
    }
    function l(e) {
      return e != null && typeof e == "object";
    }
    function s(e, t) {
      t === void 0 && (t = 2);
      var n = e.split("\n");
      return n.length <= t ? e : n.slice(0, t).join("\n") + "\n...";
    }
    ((i.formatValue = e), (i.isJsonValue = l), (i.getTruncatedJson = s));
  },
  66,
);
