__d(
  "WAWebBizBrandingLine.react",
  [
    "fbt",
    "WAWebDetailImage.react",
    "WAWebName.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          justifyContent: "x1nhvcw1",
          marginTop: "x1ci5j9l",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(10),
        a = t.contact,
        i;
      n[0] !== a
        ? ((i = c.jsx(o("WAWebName.react").Name, { contact: a })),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        u;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
            d.container,
          )),
          (n[2] = u))
        : (u = n[2]);
      var m;
      n[3] !== a.id
        ? ((m = c.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: a.id,
            size: 16,
            loadAnimation: !1,
          })),
          (n[3] = a.id),
          (n[4] = m))
        : (m = n[4]);
      var p;
      n[5] !== l
        ? ((p = c.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: s._(/*BTDS*/ "Managed by {contactTitle}", [
              s._param("contactTitle", l),
            ]),
          })),
          (n[5] = l),
          (n[6] = p))
        : (p = n[6]);
      var _;
      return (
        n[7] !== m || n[8] !== p
          ? ((_ = c.jsxs(
              "div",
              babelHelpers.extends({}, u, { children: [m, p] }),
            )),
            (n[7] = m),
            (n[8] = p),
            (n[9] = _))
          : (_ = n[9]),
        _
      );
    }
    l.default = m;
  },
  226,
);
