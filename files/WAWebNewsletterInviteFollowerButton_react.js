__d(
  "WAWebNewsletterInviteFollowerButton.react",
  [
    "fbt",
    "WAWebCellV2.react",
    "WAWebNewsletterFollowerSelectionFlow.react",
    "WAWebNewsletterGatingUtils",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "WDSIconIcPersonAddFilled.react",
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
        a = c(
          function () {
            o(
              "WAWebNewsletterFollowerSelectionFlow.react",
            ).startFollowerInviteFlow({ chat: n });
          },
          [n],
        );
      if (
        !o(
          "WAWebNewsletterGatingUtils",
        ).isChannelInviteContactsToFollowProducerEnabled()
      )
        return null;
      var i = u.jsx(r("WAWebRoundShape.react"), {
        theme: "group-modal",
        children: u.jsx(r("WDSIconIcPersonAddFilled.react"), {
          directional: !0,
        }),
      });
      return u.jsx(r("WAWebCellV2.react"), {
        testid: void 0,
        detailLeft: i,
        primary: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
          children: s._(/*BTDS*/ "Invite followers"),
        }),
        onClick: a,
        size: "medium",
        isRefresh: !0,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
