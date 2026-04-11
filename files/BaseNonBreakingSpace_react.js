__d(
  "BaseNonBreakingSpace.react",
  [
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { marginInlineEnd: "x1c9tiao", $$css: !0 },
      c = {
        marginInlineEnd: function (t) {
          return [
            u,
            {
              "--x-marginInlineEnd": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "ch"),
            },
          ];
        },
        marginInlineEndPx: function (t) {
          return [
            { marginInlineEnd: t != null ? "x1c9tiao" : t, $$css: !0 },
            {
              "--x-marginInlineEnd": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.size,
        r = e.sizePx;
      if (o("XPlatReactEnvironment").isWeb()) {
        if (r != null) {
          var a;
          t[0] !== r
            ? ((a = c.marginInlineEndPx(r)), (t[0] = r), (t[1] = a))
            : (a = t[1]);
          var i;
          return (
            t[2] !== a
              ? ((i = s.jsx(o("react-strict-dom").html.span, {
                  style: a,
                  children: "\uFEFF",
                })),
                (t[2] = a),
                (t[3] = i))
              : (i = t[3]),
            i
          );
        }
        if (n != null) {
          var l;
          t[4] !== n
            ? ((l = c.marginInlineEnd(n)), (t[4] = n), (t[5] = l))
            : (l = t[5]);
          var u;
          return (
            t[6] !== l
              ? ((u = s.jsx(o("react-strict-dom").html.span, {
                  style: l,
                  children: "\uFEFF",
                })),
                (t[6] = l),
                (t[7] = u))
              : (u = t[7]),
            u
          );
        }
      }
      var d;
      return (
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s.jsx(o("react-strict-dom").html.span, { children: "\xA0" })),
            (t[8] = d))
          : (d = t[8]),
        d
      );
    }
    l.default = d;
  },
  98,
);
