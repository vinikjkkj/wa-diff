__d(
  "WAWebNewsletterFailures.react",
  [
    "fbt",
    "WAWebBootstrapNewsletter",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { marginTop32: { marginTop: "x1ci5j9l", $$css: !0 } };
    function d() {
      var e = function () {
        return o("WAWebBootstrapNewsletter").bootstrapNewsletterBackend();
      };
      return u.jsxs(o("WAWebFlex.react").FlexContainer, {
        direction: "vertical",
        align: "center",
        justify: "center",
        xstyle: c.marginTop32,
        children: [
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            marginBottom: 16,
            children: s._(
              /*BTDS*/ "Channels couldn't load. Please try again later.",
            ),
          }),
          u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
            onClick: e,
            children: r("WAWebFbtCommon")("Try again"),
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
