__d(
  "useWAWebNewsletterAdmins",
  [
    "WAWebCommonNewsletterEnums",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(3),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["add", "remove", "sort", "change"]), (a[0] = i))
        : (i = a[0]);
      var l;
      if (
        a[1] !==
        (e == null || (t = e.newsletterMetadata) == null
          ? void 0
          : t.subscribers)
      ) {
        var c;
        ((l = function () {
          var t, n;
          return (t =
            e == null ||
            (n = e.newsletterMetadata) == null ||
            (n = n.subscribers) == null ||
            (n = n.filter(u)) == null
              ? void 0
              : n.map(s)) != null
            ? t
            : [];
        }),
          (a[1] =
            e == null || (c = e.newsletterMetadata) == null
              ? void 0
              : c.subscribers),
          (a[2] = l));
      } else l = a[2];
      var d = r("useWAWebEventTargetValue")(
        e == null || (n = e.newsletterMetadata) == null
          ? void 0
          : n.subscribers,
        i,
        l,
      );
      return d;
    }
    function s(e) {
      return e.contact;
    }
    function u(e) {
      return (
        e.membership ===
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin ||
        e.membership ===
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
      );
    }
    l.useNewsletterAdmins = e;
  },
  98,
);
