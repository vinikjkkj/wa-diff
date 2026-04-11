__d(
  "WAWebNewsletterChatHeaderSubtitle.react",
  [
    "WAWebChatSubtitleText.react",
    "WAWebCommonNewsletterStrings",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.location,
        a = e.newsletterMetadata,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["size"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useOptionalModelValues(a, i);
      if ((l == null ? void 0 : l.size) == null) return null;
      var u;
      t[1] !== l.size
        ? ((u = o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
            l.size,
          )),
          (t[1] = l.size),
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        d = n != null ? n : "title",
        m;
      return (
        t[3] !== d || t[4] !== c
          ? ((m = s.jsx(r("WAWebChatSubtitleText.react"), {
              text: c,
              location: d,
              ariaLabel: c,
            })),
            (t[3] = d),
            (t[4] = c),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = u;
  },
  98,
);
