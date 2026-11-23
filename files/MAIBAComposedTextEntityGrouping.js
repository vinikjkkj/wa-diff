__d(
  "MAIBAComposedTextEntityGrouping",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t,
        n = Array.from((t = e.text) != null ? t : ""),
        r = new Array(n.length).fill(!1);
      for (var o of (a = e.entity_ranges) != null ? a : []) {
        var a,
          i = o == null ? void 0 : o.offset,
          l = o == null ? void 0 : o.length;
        if (!(typeof i != "number" || typeof l != "number"))
          for (var s = Math.max(i, 0); s < i + l; s++) r[s] = !0;
      }
      return n.some(function (e, t) {
        return !r[t] && e !== "\u200B" && /\S/.test(e);
      });
    }
    function l(t, n, r, o, a) {
      (r === void 0 && (r = !1),
        o === void 0 && (o = !1),
        a === void 0 && (a = !1));
      var i = [],
        l = [],
        s = function () {
          l.length > 0 && (i.push(l), (l = []));
        };
      for (var u of t) {
        if (u == null) {
          s();
          continue;
        }
        var c = [],
          d = a && e(u);
        for (var m of (p = u.entity_ranges) != null ? p : []) {
          var p,
            _ = m == null ? void 0 : m.entity;
          if (_ != null) {
            var f = n(_);
            f != null ? c.push(f) : (d = !0);
          }
        }
        if (!(o && c.length === 0 && !d))
          if (c.length > 0 && !d) for (var g of c) l.push(g);
          else (s(), r && c.length > 0 && i.push(c));
      }
      return (s(), i);
    }
    i.groupConsecutiveEntityRuns = l;
  },
  66,
);
