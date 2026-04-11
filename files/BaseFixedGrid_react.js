__d(
  "BaseFixedGrid.react",
  ["Locale", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.children,
        r = e.columns,
        a = e.gap,
        i,
        l,
        u,
        c;
      if (t[0] !== n || t[1] !== r || t[2] !== a) {
        c = Symbol.for("react.early_return_sentinel");
        e: {
          var d = s.Children.toArray(n).filter(Boolean),
            m = s.Children.count(d);
          if (m === 0) {
            c = null;
            break e;
          }
          var p = o("Locale").isRTL() ? "marginRight" : "marginLeft";
          (t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { className: "x78zum5 x1q0g3np x1a02dak xh8yej3" }),
              (t[7] = i))
            : (i = t[7]),
            (l = "list"));
          var _;
          (t[8] !== r || t[9] !== a
            ? ((_ = function (t, n) {
                var e,
                  o = n % r,
                  i = n < r,
                  l = o === 0,
                  u =
                    ((e = {}),
                    (e[p] = l ? 0 : a),
                    (e.marginTop = i ? 0 : a),
                    (e.width =
                      "calc( (100% - " + (r - 1) * a + "px) / " + r + ")"),
                    e);
                return s.jsx("div", {
                  role: "listitem",
                  style: u,
                  children: t,
                });
              }),
              (t[8] = r),
              (t[9] = a),
              (t[10] = _))
            : (_ = t[10]),
            (u = s.Children.map(d, _)));
        }
        ((t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u),
          (t[6] = c));
      } else ((i = t[3]), (l = t[4]), (u = t[5]), (c = t[6]));
      if (c !== Symbol.for("react.early_return_sentinel")) return c;
      var f;
      return (
        t[11] !== i || t[12] !== l || t[13] !== u
          ? ((f = s.jsx(
              "div",
              babelHelpers.extends({}, i, { role: l, children: u }),
            )),
            (t[11] = i),
            (t[12] = l),
            (t[13] = u),
            (t[14] = f))
          : (f = t[14]),
        f
      );
    }
    l.default = u;
  },
  98,
);
