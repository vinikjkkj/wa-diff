__d(
  "looksLikeCompleteJson",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.trim();
      if (t.length < 2) return !1;
      var n = t[0];
      if (n !== "[" && n !== "{") return !1;
      for (var r = 0, o = !1, a = !1, i = !1, l = 0; l < t.length; l++) {
        var s = t[l];
        if (i) {
          i = !1;
          continue;
        }
        if (a) {
          s === "\\" ? (i = !0) : s === '"' && (a = !1);
          continue;
        }
        if (o) {
          if (s === " " || s === "	" || s === "\n" || s === "\r") continue;
          return !1;
        }
        if (s === '"') a = !0;
        else if (s === "[" || s === "{") r++;
        else if (s === "]" || s === "}") {
          if ((r--, r < 0)) return !1;
          r === 0 && (o = !0);
        }
      }
      return !a && o;
    }
    i.default = e;
  },
  66,
);
