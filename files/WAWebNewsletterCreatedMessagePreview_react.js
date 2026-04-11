__d(
  "WAWebNewsletterCreatedMessagePreview.react",
  ["WAWebCommonNewsletterStrings", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = o("react-compiler-runtime").c(4),
        r = e.chat,
        a = (t = r.newsletterMetadata) == null ? void 0 : t.name,
        i;
      n[0] !== a
        ? ((i = o(
            "WAWebCommonNewsletterStrings",
          ).getYouCreatedChannelWithNameText(a)),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        u;
      return (
        n[2] !== l
          ? ((u = s.jsx("span", { title: l, children: l })),
            (n[2] = l),
            (n[3] = u))
          : (u = n[3]),
        u
      );
    }
    l.default = u;
  },
  98,
);
