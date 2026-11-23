__d(
  "getMAIBAContextAtMentionViewportMargins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      if (e == null) return r;
      var o = e.getBoundingClientRect();
      return {
        bottom: Math.max(r.bottom, n - o.bottom),
        left: Math.max(r.left, o.left),
        right: Math.max(r.right, t - o.right),
        top: Math.max(r.top, o.top),
      };
    }
    i.default = e;
  },
  66,
);
