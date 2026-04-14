__d(
  "WAWebBizBrandingLine.react",
  [
    "fbt",
    "WAWebDetailImage.react",
    "WAWebName.react",
    "WDSFlex.stylex",
    "WDSText.react",
    "react",
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
      var n = t.contact,
        a = c.jsx(o("WAWebName.react").Name, { contact: n });
      return c.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WDSFlex.stylex").wdsFlex.flexRowCenter,
            o("WDSFlex.stylex").wdsFlex.columnGapSingle,
            d.container,
          ),
          {
            children: [
              c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: n.id,
                size: 16,
                loadAnimation: !1,
              }),
              c.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Managed by {contactTitle}", [
                  s._param("contactTitle", a),
                ]),
              }),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
