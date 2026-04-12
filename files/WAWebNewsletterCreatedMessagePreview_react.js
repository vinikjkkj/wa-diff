__d(
  "WAWebNewsletterCreatedMessagePreview.react",
  ["WAWebCommonNewsletterStrings", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.chat,
        r = o("WAWebCommonNewsletterStrings").getYouCreatedChannelWithNameText(
          (t = n.newsletterMetadata) == null ? void 0 : t.name,
        );
      return s.jsx("span", { title: r, children: r });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
