__d(
  "LSJson",
  ["FBLogger", "I64", "LSDict", "LSVec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 512,
      u = { useLSTypes: !1 };
    function c(t, n) {
      var a = n === void 0 ? u : n,
        i = a.useLSTypes;
      function l(e, t) {
        return function () {
          return function (n) {
            var r = e()(n);
            if (r != null) {
              var o = r[0],
                a = r[1];
              return [t(o), a];
            }
          };
        };
      }
      function s(e) {
        return JSON.parse('"' + e + '"');
      }
      function c(e) {
        return function () {
          return function (t) {
            var n = s(e);
            if (t.startsWith(n)) return [n, t.substr(n.length)];
          };
        };
      }
      function d() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function () {
          return function (e) {
            var n = [],
              r = e;
            for (var o of t) {
              var a = o()(r);
              if (a == null) return;
              ((r = a[1]), n.push(a[0]));
            }
            return [n, r];
          };
        };
      }
      function m(e) {
        return function () {
          return function (t) {
            var n = e.exec(t);
            return n != null ? [n, t.substr(n[0].length)] : void 0;
          };
        };
      }
      function p() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return function () {
          return function (e) {
            for (var n of t) {
              var r = n()(e);
              if (r != null) return r;
            }
          };
        };
      }
      function _(e) {
        return function () {
          return function (t) {
            var n = e()(t);
            return n != null ? n : [void 0, t];
          };
        };
      }
      function f(e) {
        return function () {
          return function (t) {
            for (var n = e()(t), r = [], o = t; n != null; )
              ((o = n[1]), r.push(n[0]), (n = e()(o)));
            return [r, o];
          };
        };
      }
      var g = m(/^[\n\r\s]*/),
        h = l(m(/^\"((?:[^\"\\]|\\.)*)\"/), function (e) {
          var t = e[1];
          return s(t);
        }),
        y = l(m(/^-?\d+(?:(?:\.\d+)?[eE][-\+]?\d+|\.\d+)/), function (e) {
          var t = e[0];
          return Number(t);
        }),
        C = l(m(/^-?\d+/), function (t) {
          var n = t[0];
          return (e || (e = o("I64"))).of_string(n);
        }),
        b = l(c("null"), function (e) {
          return null;
        }),
        v = l(c("true"), function (e) {
          return !0;
        }),
        S = l(c("false"), function (e) {
          return !1;
        }),
        R = l(
          d(g, h, g, c(":"), function () {
            return T();
          }),
          function (e) {
            var t = e[1],
              n = e[4];
            return [t, n];
          },
        ),
        L = l(d(R, f(d(g, c(","), R))), function (e) {
          var t = e[0],
            n = e[1];
          return [t].concat(
            n.map(function (e) {
              var t = e[2];
              return t;
            }),
          );
        }),
        E = l(d(c("{"), _(L), g, c("}")), function (e) {
          var t = e[1],
            n = t === void 0 ? [] : t;
          return i ? new (r("LSDict"))(n) : Object.fromEntries(n);
        }),
        k = l(
          d(
            function () {
              return T();
            },
            f(
              d(g, c(","), function () {
                return T();
              }),
            ),
          ),
          function (e) {
            var t = e[0],
              n = e[1];
            return [t].concat(
              n.map(function (e) {
                var t = e[2];
                return t;
              }),
            );
          },
        ),
        I = l(d(c("["), g, _(k), g, c("]")), function (e) {
          var t = e[2],
            n = t === void 0 ? [] : t;
          return i ? r("LSVec").ofArray(n) : n;
        }),
        T = l(d(g, p(E, h, y, C, I, b, v, S), g), function (e) {
          var t = e[1];
          return t;
        }),
        D = T()(t);
      if (D == null)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "error parsing string",
        );
      if (D[1] !== "")
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected %s",
          D[1],
        );
      return D[0];
    }
    function d(t, n, a) {
      if ((n === void 0 && (n = 0), a === void 0 && (a = ""), n > s))
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "recursion limit exceeded",
        );
      if (typeof t == "string" || typeof t == "number")
        return JSON.stringify(t);
      if (typeof t == "boolean") return t ? "1" : "0";
      if (t == null) return "null";
      if (typeof t == "object") {
        if (Array.isArray(t)) {
          var i = Object.getOwnPropertyDescriptor(t, "tag"),
            l = i == null ? void 0 : i.value;
          if (typeof l == "string" && l === "ls-array")
            return (
              "[" +
              t
                .map(function (e, t) {
                  return d(e, n + 1, a + "/" + t.toString());
                })
                .join(",") +
              "]"
            );
          var u = Object.getOwnPropertyDescriptor(t, "_tag"),
            c = u == null ? void 0 : u.value;
          return (
            (typeof c != "string" || c !== "i64") &&
              r("FBLogger")("messenger_web").warn(
                "LSJson payload contains untagged i64: %s",
                a,
              ),
            (e || (e = o("I64"))).to_string(t)
          );
        } else if (t instanceof r("LSDict"))
          return (
            "{" +
            Array.from(t.entries())
              .map(function (e) {
                var t = e[0],
                  o = e[1];
                if (typeof t == "string")
                  return JSON.stringify(t) + ":" + d(o, n + 1, a + "/" + t);
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "key must be a string",
                );
              })
              .join(",") +
            "}"
          );
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "type not supported: %s, path: %s",
        typeof t,
        a,
      );
    }
    ((l.parse = c), (l.stringify = d));
  },
  98,
);
