__d(
  "WAWebSmbLearnMore.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebL10N",
    "WAWebURLUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "https://www.whatsapp.com/legal/small-business-terms/";
    function d() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = r("WAWebURLUtils").build(c, {
            lg: r("WAWebL10N").getNormalizedLocale(),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function (t) {
            (t.preventDefault(),
              self.setTimeout(function () {
                return o("WAWebExternalLink.react").openExternalLink(n);
              }, 10));
          }),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(r("WAWebClickableLink.react"), {
              href: n,
              onClick: i,
              children: s._(/*BTDS*/ "Learn more"),
            })),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    l.default = d;
  },
  226,
);
