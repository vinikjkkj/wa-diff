__d(
  "WAWebNewsletterAdminInsightsFailedToLoad.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        justify: "center",
        align: "center",
        paddingBottom: 4,
        children: [
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            marginTop: 12,
            marginBottom: 2,
            children: s._(/*BTDS*/ "Couldn't load the data"),
          }),
          u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
            onClick: t,
            children: r("WAWebFbtCommon")("Try again"),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
