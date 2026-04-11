__d(
  "getSanitizedUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = ["stp", "cstp", "ctp", "se", "cb2", "cb"];
    function l(t) {
      try {
        var n = new URL(t),
          r = new URLSearchParams();
        for (var o of e) {
          var a = n.searchParams.get(o);
          a != null && r.set(o, a);
        }
        var i = r.toString();
        return n.origin + n.pathname + (i ? "?" + i : "");
      } catch (e) {
        return "";
      }
    }
    i.default = l;
  },
  66,
);
