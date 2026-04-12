__d(
  "WAWebNewsletterDirectoryActionButton.react",
  [
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterQuickFollowButton.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.directoryFunnelLogger,
        n = e.loggingOptions,
        a = e.newsletter,
        i = e.ref,
        l = o("useWAWebModelValues").useOptionalModelValues(
          a.newsletterMetadata,
          ["isPreview", "membershipType"],
        );
      if (
        l == null ||
        o("WAWebNewsletterMembershipUtil").iAmOwner(l) ||
        o("WAWebNewsletterMembershipUtil").iAmAdmin(l)
      )
        return null;
      var u = function () {
          t == null || t.logNewsletterFollow(a.id, n.directoryChannelIndex);
        },
        c = function () {
          t == null || t.logNewsletterUnfollow(a.id, n.directoryChannelIndex);
        };
      return s.jsx(r("WAWebNewsletterQuickFollowButton.react"), {
        ref: i,
        confirmUnfollow: !0,
        hasBorder: !0,
        onFollowAction: u,
        onUnfollowAction: c,
        following: l.isPreview === !1,
        loggingOptions: n,
        newsletter: a,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
