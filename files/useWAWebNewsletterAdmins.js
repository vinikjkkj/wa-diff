__d(
  "useWAWebNewsletterAdmins",
  ["WAWebCommonNewsletterEnums", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = r("useWAWebEventTargetValue")(
          e == null || (t = e.newsletterMetadata) == null
            ? void 0
            : t.subscribers,
          ["add", "remove", "sort", "change"],
          function () {
            var t, n;
            return (t =
              e == null ||
              (n = e.newsletterMetadata) == null ||
              (n = n.subscribers) == null ||
              (n = n.filter(function (e) {
                return (
                  e.membership ===
                    o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                      .Admin ||
                  e.membership ===
                    o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                      .Owner
                );
              })) == null
                ? void 0
                : n.map(function (e) {
                    return e.contact;
                  })) != null
              ? t
              : [];
          },
        );
      return n;
    }
    l.useNewsletterAdmins = e;
  },
  98,
);
