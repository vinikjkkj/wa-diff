__d(
  "styleq-0.2.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.styleq = void 0));
      var t = new WeakMap(),
        n = "$$css";
      function r(e) {
        var r, o, a;
        return (
          e != null &&
            ((r = e.disableCache === !0),
            (o = e.disableMix === !0),
            (a = e.transform)),
          function () {
            for (
              var e = [],
                i = "",
                l = null,
                s = "",
                u = r ? null : t,
                c = new Array(arguments.length),
                d = 0;
              d < arguments.length;
              d++
            )
              c[d] = arguments[d];
            for (; c.length > 0; ) {
              var m = c.pop();
              if (!(m == null || m === !1)) {
                if (Array.isArray(m)) {
                  for (var p = 0; p < m.length; p++) c.push(m[p]);
                  continue;
                }
                var _ = a != null ? a(m) : m;
                if (_.$$css != null) {
                  var f = "";
                  if (u != null && u.has(_)) {
                    var g = u.get(_);
                    g != null &&
                      ((f = g[0]),
                      (s = g[2]),
                      e.push.apply(e, g[1]),
                      (u = g[3]));
                  } else {
                    var h = [];
                    for (var y in _) {
                      var C = _[y];
                      if (y === n) {
                        var b = _[y];
                        b !== !0 && (s = s ? b + "; " + s : b);
                        continue;
                      }
                      typeof C == "string" || C === null
                        ? e.includes(y) ||
                          (e.push(y),
                          u != null && h.push(y),
                          typeof C == "string" && (f += f ? " " + C : C))
                        : "styleq: "
                            .concat(y, " typeof ")
                            .concat(String(C), ' is not "string" or "null".');
                    }
                    if (u != null) {
                      var v = new WeakMap();
                      (u.set(_, [f, h, s, v]), (u = v));
                    }
                  }
                  f && (i = i ? f + " " + i : f);
                } else if (o)
                  (l == null && (l = {}), (l = Object.assign({}, _, l)));
                else {
                  var S = null;
                  for (var R in _) {
                    var L = _[R];
                    L !== void 0 &&
                      (e.includes(R) ||
                        (L != null &&
                          (l == null && (l = {}),
                          S == null && (S = {}),
                          (S[R] = L)),
                        e.push(R),
                        (u = null)));
                  }
                  S != null && (l = Object.assign(S, l));
                }
              }
            }
            var E = [i, l, s];
            return E;
          }
        );
      }
      var o = (e.styleq = r());
      o.factory = r;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      m.exports = c();
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    function g(e) {
      switch (e) {
        case void 0:
          return f();
      }
    }
    a.exports = g;
  },
  null,
);
