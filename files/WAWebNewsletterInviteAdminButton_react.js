__d(
  "WAWebNewsletterInviteAdminButton.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebNewsletterAdminSelectionFlow.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebPlusIcon.react",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t = e.chat,
        n = o("useWAWebModelValues").useModelValues(t, ["newsletterMetadata"]),
        r = c(
          function () {
            o("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow({
              chat: n,
            });
          },
          [n],
        );
      return !o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() ||
        !o("WAWebNewsletterMembershipUtil").iAmOwner(n.newsletterMetadata)
        ? null
        : u.jsx(m, { onInviteAdmin: r });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.onInviteAdmin,
        n = u.jsx(r("WAWebRoundShape.react"), {
          theme: "group-modal",
          children: u.jsx(o("WAWebPlusIcon.react").PlusIcon, {
            directional: !0,
          }),
        });
      return u.jsx(r("WAWebCellV2.react"), {
        testid: void 0,
        detailLeft: n,
        primary: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
          children: s._(/*BTDS*/ "Invite admins"),
        }),
        onClick: t,
        size: "medium",
        isRefresh: !0,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
