__d(
  "toposort-1.0.3",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      ((l.exports = e =
        function (e) {
          return t(n(e), e);
        }),
        (e.array = t));
      function t(e, t) {
        for (var n = e.length, r = new Array(n), o = {}, a = n; a--; )
          o[a] || i(e[a], a, []);
        return r;
        function i(a, l, s) {
          if (s.indexOf(a) >= 0)
            throw new Error("Cyclic dependency: " + JSON.stringify(a));
          if (!~e.indexOf(a))
            throw new Error(
              "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
                JSON.stringify(a),
            );
          if (!o[l]) {
            o[l] = !0;
            var u = t.filter(function (e) {
              return e[0] === a;
            });
            if ((l = u.length)) {
              var c = s.concat(a);
              do {
                var d = u[--l][1];
                i(d, e.indexOf(d), c);
              } while (l);
            }
            r[--n] = a;
          }
        }
      }
      function n(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) {
          var o = e[n];
          (t.indexOf(o[0]) < 0 && t.push(o[0]),
            t.indexOf(o[1]) < 0 && t.push(o[1]));
        }
        return t;
      }
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
