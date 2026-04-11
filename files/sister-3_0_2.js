__d(
  "sister-3.0.2",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      var e;
      ((e = function () {
        var e = {},
          t = {};
        return (
          (e.on = function (e, n) {
            var r = { name: e, handler: n };
            return ((t[e] = t[e] || []), t[e].unshift(r), r);
          }),
          (e.off = function (e) {
            var n = t[e.name].indexOf(e);
            n !== -1 && t[e.name].splice(n, 1);
          }),
          (e.trigger = function (e, n) {
            var r = t[e],
              o;
            if (r) for (o = r.length; o--; ) r[o].handler(n);
          }),
          e
        );
      }),
        (l.exports = e));
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
