__d(
  "WAWebNewsletterDirectoryActionButton.react",
  [
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterQuickFollowButton.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.directoryFunnelLogger,
        a = e.loggingOptions,
        i = e.newsletter,
        l = e.ref,
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["isPreview", "membershipType"]), (t[0] = u))
        : (u = t[0]);
      var c = o("useWAWebModelValues").useOptionalModelValues(
        i.newsletterMetadata,
        u,
      );
      if (
        c == null ||
        o("WAWebNewsletterMembershipUtil").iAmOwner(c) ||
        o("WAWebNewsletterMembershipUtil").iAmAdmin(c)
      )
        return null;
      var d;
      t[1] !== n || t[2] !== a || t[3] !== i.id
        ? ((d = function () {
            n == null || n.logNewsletterFollow(i.id, a.directoryChannelIndex);
          }),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i.id),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p;
      t[5] !== n || t[6] !== a || t[7] !== i.id
        ? ((p = function () {
            n == null || n.logNewsletterUnfollow(i.id, a.directoryChannelIndex);
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = i.id),
          (t[8] = p))
        : (p = t[8]);
      var _ = p,
        f = c.isPreview === !1,
        g;
      return (
        t[9] !== m ||
        t[10] !== _ ||
        t[11] !== a ||
        t[12] !== i ||
        t[13] !== l ||
        t[14] !== f
          ? ((g = s.jsx(r("WAWebNewsletterQuickFollowButton.react"), {
              ref: l,
              confirmUnfollow: !0,
              hasBorder: !0,
              onFollowAction: m,
              onUnfollowAction: _,
              following: f,
              loggingOptions: a,
              newsletter: i,
            })),
            (t[9] = m),
            (t[10] = _),
            (t[11] = a),
            (t[12] = i),
            (t[13] = l),
            (t[14] = f),
            (t[15] = g))
          : (g = t[15]),
        g
      );
    }
    l.default = u;
  },
  98,
);
