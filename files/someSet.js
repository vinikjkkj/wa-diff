__d(
  "someSet",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (var r = e.entries(), o = r.next(); !o.done; ) {
        var a = o.value;
        if (t.call(n, a[1], a[0], e)) return !0;
        o = r.next();
      }
      return !1;
    }
    i.default = e;
  },
  66,
);
