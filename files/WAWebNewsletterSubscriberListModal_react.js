__d(
  "WAWebNewsletterSubscriberListModal.react",
  [
    "$InternalEnum",
    "WAWebNewsletterFullPendingInvitesList.react",
    "WAWebNewsletterFullSubscriberList.react",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["Followers", "PendingInvites"]);
    function c(e) {
      var t = e.initialStep,
        n = t === void 0 ? u.Followers : t,
        a = e.newsletter,
        i = e.onTransferOwnershipSelection,
        l = e.onVerification,
        c = o("useWAWebFlow").useFlow(n),
        d = c[1];
      if (!d.step) return null;
      switch (d.step) {
        case u.Followers:
          return s.jsx(r("WAWebNewsletterFullSubscriberList.react"), {
            onCancel: function () {
              return d.pop();
            },
            newsletter: a,
            onVerification: l,
            onTransferOwnershipSelection: i,
          });
        case u.PendingInvites:
          return s.jsx(r("WAWebNewsletterFullPendingInvitesList.react"), {
            onCancel: function () {
              return d.pop();
            },
            newsletter: a,
            onVerification: l,
          });
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.FollowersFlowStep = u),
      (l.NewsletterSubscriberListModal = c));
  },
  98,
);
