__d(
  "WAWebSafariLimited",
  ["fbt", "WAWebExternalLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(
        /*BTDS*/ "To use all of WhatsApp's features like photo capturing and Voice Message recording, we recommend using {=m2}, {=m5} or {=m8}.",
        [
          s._implicitParam(
            "=m2",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: "https://www.google.com/chrome",
              children: s._(/*BTDS*/ "Google Chrome"),
            }),
          ),
          s._implicitParam(
            "=m5",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: "http://www.firefox.com",
              children: s._(/*BTDS*/ "Mozilla Firefox"),
            }),
          ),
          s._implicitParam(
            "=m8",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: "http://www.opera.com",
              children: s._(/*BTDS*/ "Opera"),
            }),
          ),
        ],
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.SafariLimitedText = c));
  },
  226,
);
