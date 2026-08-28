__d(
  "MAIBAComposedTextEntityGrouping",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var r = [],
        o = [],
        a = function () {
          o.length > 0 && (r.push(o), (o = []));
        };
      for (var i of e) {
        if (i == null) {
          a();
          continue;
        }
        var l = [],
          s = !1;
        for (var u of (c = i.entity_ranges) != null ? c : []) {
          var c,
            d = u == null ? void 0 : u.entity;
          if (d != null) {
            var m = t(d);
            m != null ? l.push(m) : (s = !0);
          }
        }
        if (l.length > 0 && !s) for (var p of l) o.push(p);
        else (a(), n && l.length > 0 && r.push(l));
      }
      return (a(), r);
    }
    i.groupConsecutiveEntityRuns = e;
  },
  66,
);
