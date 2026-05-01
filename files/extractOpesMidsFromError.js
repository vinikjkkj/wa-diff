__d(
  "extractOpesMidsFromError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = [];
      return (
        Array.isArray(e == null ? void 0 : e.opes_mids) &&
          n.push.apply(n, e.opes_mids),
        Array.isArray(e == null ? void 0 : e.mids) && n.push.apply(n, e.mids),
        Array.isArray(
          e == null || (t = e.source) == null ? void 0 : t.opes_mids,
        ) && n.push.apply(n, e.source.opes_mids),
        typeof (e == null ? void 0 : e.mid) == "string" && n.push(e.mid),
        n
      );
    }
    i.default = e;
  },
  66,
);
