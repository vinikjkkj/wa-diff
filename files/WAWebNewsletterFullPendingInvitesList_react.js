__d(
  "WAWebNewsletterFullPendingInvitesList.react",
  [
    "WAWebBoolFunc",
    "WAWebCommonNewsletterStrings",
    "WAWebContactsModal.react",
    "react",
    "useWAWebNewsletterPendingInvites",
    "useWAWebNewsletterSubscribersContextMenu",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.newsletter,
        n = e.onCancel,
        a = e.onVerification,
        i = o("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(
          t,
        ),
        l = o(
          "useWAWebNewsletterSubscribersContextMenu",
        ).useNewsletterSubscribersContextMenu({
          chat: t,
          isFullModal: !0,
          onVerification: a,
          followerInformation: new Map(
            i.map(function (e) {
              return [e.id, { newsletterRole: null }];
            }),
          ),
          newsletter: t,
        }),
        u = l[0],
        c = l[1];
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(r("WAWebContactsModal.react"), {
            title: o(
              "WAWebCommonNewsletterStrings",
            ).getSearchForPendingInvitesText(),
            onCancel: n,
            contacts: i,
            isParentGroup: !0,
            newsletterRoles: new Map(
              i.map(function (e) {
                return [e.id, { pendingInvitee: !0 }];
              }),
            ),
            openContextOnClick: !0,
            contextEnabled: o("WAWebBoolFunc").returnFalse,
            contextMenu: o("WAWebBoolFunc").returnTrue,
            onContext: c,
          }),
          u,
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
