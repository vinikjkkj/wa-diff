__d(
  "findCometScrollableLayoutActiveNode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      if (t == null) return null;
      if (t.tagName === "LI")
        return t.getAttribute("aria-selected") === "true" ? t : null;
      if (t.children == null) return null;
      for (var n of Array.from(t.children)) {
        var r = e(n);
        if (r != null) return r;
      }
      return null;
    }
    i.default = e;
  },
  66,
);
