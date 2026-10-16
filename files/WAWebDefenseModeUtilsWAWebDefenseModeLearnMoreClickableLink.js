__d(
  "WAWebDefenseModeUtilsWAWebDefenseModeLearnMoreClickableLink",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o("WAWebFaqUrl").getDefenseModeFaqUrl()), (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsx(r("WAWebClickableLink.react"), {
              href: n,
              onClick: function (t) {
                (t.preventDefault(),
                  o("WAWebExternalLink.react").openExternalLink(n));
              },
              children: s._(/*BTDS*/ "Learn more"),
            })),
            (e[1] = a))
          : (a = e[1]),
        a
      );
    }
    l.WAWebDefenseModeLearnMoreClickableLink = c;
  },
  226,
);
