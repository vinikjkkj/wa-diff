__d(
  "WAWebCellBorder.react",
  ["WAWebUISpacing", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        border: {
          boxSizing: "x9f619",
          height: "xjm9jq1",
          marginInlineStart: "xdln39a",
          backgroundColor: "x3x0x6p",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(5),
        a = t.noMargin,
        i = a === void 0 ? !1 : a,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xh8yej3 x1280gxy" }), (n[0] = l))
        : (l = n[0]);
      var s;
      n[1] !== i
        ? ((s = (e || (e = r("stylex"))).props(
            c.border,
            i && o("WAWebUISpacing").uiMargin.start0,
          )),
          (n[1] = i),
          (n[2] = s))
        : (s = n[2]);
      var d;
      return (
        n[3] !== s
          ? ((d = u.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: u.jsx("div", babelHelpers.extends({}, s)),
              }),
            )),
            (n[3] = s),
            (n[4] = d))
          : (d = n[4]),
        d
      );
    }
    l.default = d;
  },
  98,
);
