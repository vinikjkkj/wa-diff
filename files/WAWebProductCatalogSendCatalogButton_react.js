__d(
  "WAWebProductCatalogSendCatalogButton.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebRoundShape.react",
    "WDSIconIcStoreFilled.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { iconColor: { color: "x1pse0pq", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.disabled,
        a = e.onClick,
        i;
      t[0] !== n
        ? ((i = n ? "xt0e3qv" : ""), (t[0] = n), (t[1] = i))
        : (i = t[1]);
      var l = i,
        d;
      t[2] !== n
        ? ((d = n ? "xhslqc4" : ""), (t[2] = n), (t[3] = d))
        : (d = t[3]);
      var m = d,
        p = n ? null : a,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Send catalog")), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== m
        ? ((f = u.jsx("span", { className: m, children: _ })),
          (t[5] = m),
          (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WDSIconIcStoreFilled.react"), {})), (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== n
        ? ((y = u.jsx(r("WAWebRoundShape.react"), {
            theme: "compact",
            disabled: n,
            xstyle: c.iconColor,
            children: h,
          })),
          (t[8] = n),
          (t[9] = y))
        : (y = t[9]);
      var C = y,
        b;
      return (
        t[10] !== l || t[11] !== p || t[12] !== C || t[13] !== g
          ? ((b = u.jsx(r("WAWebCellFrame.react"), {
              image: C,
              onClick: p,
              primary: g,
              theme: "list-button-compact",
              className: l,
            })),
            (t[10] = l),
            (t[11] = p),
            (t[12] = C),
            (t[13] = g),
            (t[14] = b))
          : (b = t[14]),
        b
      );
    }
    l.default = d;
  },
  226,
);
