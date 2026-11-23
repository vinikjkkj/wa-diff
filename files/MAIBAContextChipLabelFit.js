__d(
  "MAIBAContextChipLabelFit",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "\u2026",
      l = 2,
      s = /[\s\u200B\uFEFF]/g;
    function u(e) {
      for (var t of Array.from(e.children))
        if (
          t instanceof HTMLElement &&
          t.textContent != null &&
          t.textContent.replace(s, "") !== ""
        )
          return t;
      return null;
    }
    function c(t, n, r) {
      for (var o = Array.from(n), a = 0, i = o.length - 1; a < i; ) {
        var l = Math.ceil((a + i) / 2),
          s = o.slice(0, l).join("").trimEnd() + e;
        t(s) <= r ? (a = l) : (i = l - 1);
      }
      return o.slice(0, a).join("").trimEnd() + e;
    }
    ((i.ELLIPSIS = e),
      (i.FIT_SAFETY_MARGIN_PX = l),
      (i.getTokenTextElement = u),
      (i.fitLabelToWidth = c));
  },
  66,
);
