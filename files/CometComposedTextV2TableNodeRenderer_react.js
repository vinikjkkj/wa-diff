__d(
  "CometComposedTextV2TableNodeRenderer.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        table: {
          alignSelf: "xoi2r2e",
          borderCollapse: "x1mwwwfo",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          width: "xh8yej3",
          $$css: !0,
        },
        tableFixed: {
          alignSelf: "xoi2r2e",
          borderCollapse: "x1mwwwfo",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          tableLayout: "x140o2bo",
          width: "xh8yej3",
          $$css: !0,
        },
        tableFixedMinWidth: function (t) {
          return [
            { minWidth: t != null ? "xkj4a21" : t, $$css: !0 },
            {
              "--x-minWidth": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.children,
        i = t.node,
        l;
      n[0] !== i ? ((l = i.getState()), (n[0] = i), (n[1] = l)) : (l = n[1]);
      var s = l.colWidths,
        c;
      e: {
        if (s != null) {
          for (var m = 0, p = 0; p < s.length; p++) m = m + s[p];
          c = m;
          break e;
        }
        c = null;
      }
      var _ = c,
        f;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            className:
              "xcjokc5 x68rvky x1p222ug x14h0grb xwyadqu x13uafn7 xz9w2bu xt0hpd5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 x1lliihq xw2csxc xh8yej3",
          }),
          (n[2] = f))
        : (f = n[2]);
      var g;
      n[3] !== s || n[4] !== _
        ? ((g = (e || (e = r("stylex"))).props(
            s != null ? d.tableFixed : d.table,
            _ != null && d.tableFixedMinWidth(_),
          )),
          (n[3] = s),
          (n[4] = _),
          (n[5] = g))
        : (g = n[5]);
      var h;
      n[6] !== a
        ? ((h = u.jsx("tbody", { children: a })), (n[6] = a), (n[7] = h))
        : (h = n[7]);
      var y;
      return (
        n[8] !== g || n[9] !== h
          ? ((y = u.jsx(
              "div",
              babelHelpers.extends({}, f, {
                children: u.jsx(
                  "table",
                  babelHelpers.extends({}, g, { children: h }),
                ),
              }),
            )),
            (n[8] = g),
            (n[9] = h),
            (n[10] = y))
          : (y = n[10]),
        y
      );
    }
    l.default = m;
  },
  98,
);
