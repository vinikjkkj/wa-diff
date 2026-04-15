__d(
  "WAWebFrequentlyForwardedWarning.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebHighlyForwardedIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.frequentlyForwardedCount,
        a = e.totalCount,
        i;
      t[0] !== n || t[1] !== a
        ? ((i =
            n === 1 && a === 1
              ? s._(
                  /*BTDS*/ "This message will be marked as forwarded many times.",
                )
              : s._(
                  /*BTDS*/ "One or more messages will be marked as forwarded many times.",
                )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getFrequentlyForwardedFaqUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[3] = l))
        : (l = t[3]);
      var c;
      t[4] !== i
        ? ((c = u.jsxs("span", { children: [i, " ", l] })),
          (t[4] = i),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m,
        p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x78zum5 x1280gxy xso031l x1q0q8m5 x120ee7l" }),
          (p = u.jsx("div", {
            className: "x78zum5 x6s0dn4 x14iifvp xyxtwap x14ug900",
            children: u.jsx(
              o("WAWebHighlyForwardedIcon.react").HighlyForwardedIcon,
              { width: 24, height: 24 },
            ),
          })),
          (t[6] = m),
          (t[7] = p))
        : ((m = t[6]), (p = t[7]));
      var _;
      return (
        t[8] !== d
          ? ((_ = u.jsxs(
              "div",
              babelHelpers.extends({}, m, {
                children: [
                  p,
                  u.jsx(r("WAWebCellFrame.react"), {
                    theme: "plain",
                    primary: d,
                    idle: !0,
                  }),
                ],
              }),
            )),
            (t[8] = d),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    l.default = c;
  },
  226,
);
