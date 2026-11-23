__d(
  "WAWebDefenseModeUtilsWAWebDefenseModeLearnMoreClickableLink",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebFaqUrl").getDefenseModeFaqUrl();
      return u.jsx(r("WAWebClickableLink.react"), {
        href: e,
        onClick: function (n) {
          (n.preventDefault(),
            o("WAWebExternalLink.react").openExternalLink(e));
        },
        children: s._(/*BTDS*/ ""),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.WAWebDefenseModeLearnMoreClickableLink = c));
  },
  226,
);
