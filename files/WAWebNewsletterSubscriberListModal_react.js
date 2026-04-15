__d(
  "WAWebNewsletterSubscriberListModal.react",
  [
    "$InternalEnum",
    "WAWebNewsletterFullPendingInvitesList.react",
    "WAWebNewsletterFullSubscriberList.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Followers", "PendingInvites"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.initialStep,
        a = e.newsletter,
        i = e.onTransferOwnershipSelection,
        l = e.onVerification,
        c = n === void 0 ? u.Followers : n,
        d = o("useWAWebFlow").useFlow(c),
        m = d[1];
      if (!m.step) return null;
      switch (m.step) {
        case u.Followers: {
          var p;
          t[0] !== m
            ? ((p = function () {
                return m.pop();
              }),
              (t[0] = m),
              (t[1] = p))
            : (p = t[1]);
          var _;
          return (
            t[2] !== a || t[3] !== i || t[4] !== l || t[5] !== p
              ? ((_ = s.jsx(r("WAWebNewsletterFullSubscriberList.react"), {
                  onCancel: p,
                  newsletter: a,
                  onVerification: l,
                  onTransferOwnershipSelection: i,
                })),
                (t[2] = a),
                (t[3] = i),
                (t[4] = l),
                (t[5] = p),
                (t[6] = _))
              : (_ = t[6]),
            _
          );
        }
        case u.PendingInvites: {
          var f;
          t[7] !== m
            ? ((f = function () {
                return m.pop();
              }),
              (t[7] = m),
              (t[8] = f))
            : (f = t[8]);
          var g;
          return (
            t[9] !== a || t[10] !== l || t[11] !== f
              ? ((g = s.jsx(r("WAWebNewsletterFullPendingInvitesList.react"), {
                  onCancel: f,
                  newsletter: a,
                  onVerification: l,
                })),
                (t[9] = a),
                (t[10] = l),
                (t[11] = f),
                (t[12] = g))
              : (g = t[12]),
            g
          );
        }
      }
    }
    ((l.FollowersFlowStep = u), (l.NewsletterSubscriberListModal = c));
  },
  98,
);
