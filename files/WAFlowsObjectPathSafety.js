__d(
  "WAFlowsObjectPathSafety",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set(["__proto__", "constructor", "prototype"]);
    function l(t) {
      return !e.has(String(t));
    }
    function s(e) {
      var t =
        typeof e == "string"
          ? e.replaceAll("[", ".").replaceAll("]", "").split(".")
          : e;
      return t.every(l);
    }
    ((i.isSafeObjectKey = l), (i.isSafeObjectPath = s));
  },
  66,
);
