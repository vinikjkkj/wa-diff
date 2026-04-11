__d(
  "isContentEditable",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = e; t instanceof HTMLElement; ) {
        if (
          t.contentEditable === "true" ||
          t.contentEditable === "plaintext-only"
        )
          return !0;
        t = t.parentElement;
      }
      return !1;
    }
    i.default = e;
  },
  66,
);
