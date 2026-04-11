__d(
  "WAWebPipelineColumnHeader.react",
  [
    "WAWebLeadStageNames",
    "WDSIconIcMoreVert.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = { separator: { marginInlineStart: "x1e9n31h", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.count,
        a = e.stage,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "x78zum5 x6s0dn4 x1qughib x1p57kb1 xvpt6g3 xdx6fka xvtqlqk",
          }),
          (t[0] = i))
        : (i = t[0]);
      var l = "pipeline-column-header-" + String(a),
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { className: "x78zum5 x6s0dn4 x1s70e7g" }), (t[1] = c))
        : (c = t[1]);
      var d;
      t[2] !== a
        ? ((d = o("WAWebLeadStageNames").getLeadStageName(a)),
          (t[2] = a),
          (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== d
        ? ((m = s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: d,
          })),
          (t[4] = d),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            xstyle: u.separator,
            children: " \xB7 ",
          })),
          (t[6] = p))
        : (p = t[6]);
      var _ = String(n),
        f;
      t[7] !== _
        ? ((f = s.jsx(r("WDSText.react"), {
            type: "Body1Emphasized",
            colorName: "contentDefault",
            children: _,
          })),
          (t[7] = _),
          (t[8] = f))
        : (f = t[8]);
      var g;
      t[9] !== m || t[10] !== f
        ? ((g = s.jsxs(
            "div",
            babelHelpers.extends({}, c, { children: [m, p, f] }),
          )),
          (t[9] = m),
          (t[10] = f),
          (t[11] = g))
        : (g = t[11]);
      var h;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s.jsx("div", {
            className: "xuzhngd xt0e3qv",
            children: s.jsx(r("WDSIconIcMoreVert.react"), {}),
          })),
          (t[12] = h))
        : (h = t[12]);
      var y;
      return (
        t[13] !== l || t[14] !== g
          ? ((y = s.jsxs(
              "div",
              babelHelpers.extends({}, i, {
                "data-testid": void 0,
                children: [g, h],
              }),
            )),
            (t[13] = l),
            (t[14] = g),
            (t[15] = y))
          : (y = t[15]),
        y
      );
    }
    l.default = c;
  },
  98,
);
