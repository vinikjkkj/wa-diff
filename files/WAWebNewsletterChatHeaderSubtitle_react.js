__d(
  "WAWebNewsletterChatHeaderSubtitle.react",
  [
    "WAWebChatSubtitleText.react",
    "WAWebCommonNewsletterStrings",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.location,
        n = e.newsletterMetadata,
        a = o("useWAWebModelValues").useOptionalModelValues(n, ["size"]);
      if ((a == null ? void 0 : a.size) == null) return null;
      var i = o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
        a.size,
      );
      return s.jsx(r("WAWebChatSubtitleText.react"), {
        text: i,
        location: t != null ? t : "title",
        ariaLabel: i,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
