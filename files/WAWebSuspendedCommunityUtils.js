__d(
  "WAWebSuspendedCommunityUtils",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebCxtUrl",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebSuspendedCommunityModalLoadable",
    "WAWebSuspendedGroupRedesignModalLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "community-suspend-appeal";
    function d() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "suspended-community",
          },
          onOK: o("WAWebModalManager").closeModalManager,
          onCancel: function () {
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
              ));
          },
          okText: s._(/*BTDS*/ "Dismiss"),
          cancelText: s._(/*BTDS*/ "Learn more"),
          title: s._(/*BTDS*/ "This community is no longer available."),
        }),
        { transition: "modal-flow" },
      );
    }
    function m(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.parentGroup;
      if (n != null) {
        var r = o("WAWebChatCollection").ChatCollection.get(n);
        r != null &&
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebSuspendedCommunityModalLoadable")
                .SuspendedCommunityModalLoadable,
              { community: r },
            ),
            { transition: "modal-flow" },
          );
      }
    }
    function p(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.parentGroup;
      if (n != null) {
        var r = o("WAWebChatCollection").ChatCollection.get(n);
        r != null &&
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebSuspendedGroupRedesignModalLoadable")
                .SuspendedGroupRedesignModalLoadable,
              { chat: r, isCommunity: !0 },
            ),
            { transition: "modal-flow" },
          );
      }
    }
    ((l.SUSPENDED_COMMUNITY_SUPPORT_TAG = c),
      (l.openTerminatedCommunityModal = d),
      (l.openSuspendedCommunityModal = m),
      (l.openSuspendedCommunityRedesignModal = p));
  },
  226,
);
