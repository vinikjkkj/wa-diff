__d(
  "WAWebSmbLearnMore.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebL10N",
    "WAWebURLUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "https://www.whatsapp.com/legal/small-business-terms/";
    function d() {
      var e = r("WAWebURLUtils").build(c, {
          lg: r("WAWebL10N").getNormalizedLocale(),
        }),
        t = function (n) {
          (n.preventDefault(),
            self.setTimeout(function () {
              return o("WAWebExternalLink.react").openExternalLink(e);
            }, 10));
        };
      return u.jsx(r("WAWebClickableLink.react"), {
        href: e,
        onClick: t,
        children: s._(/*BTDS*/ "Learn more"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
