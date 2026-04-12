__d(
  "WAWebMediaHubViewMore.react",
  ["fbt", "WAWebButton.react", "WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClick,
        n = e.searchType;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        paddingTop: 4,
        marginTop: 2,
        justify: "end",
        marginEnd: 24,
        paddingEnd: 4,
        marginBottom: n === "caption" ? 8 : 0,
        children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
          onClick: t,
          children: s._(/*BTDS*/ "View more results"),
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
