__d(
  "useWAWebCommunityNux",
  [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCommunityPopupNux.react",
    "WAWebGroupType",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebOpenCommunityAdminPromotionNotificationPopupAction",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect;
    function m(e) {
      var t,
        n,
        a = e == null || (t = e.groupMetadata) == null ? void 0 : t.groupType,
        i = r("useWAWebNux")(o("WAWebNux").NUX.COMMUNITY_HOME),
        l = i[0],
        u = i[1],
        m = r("useWAWebEventTargetValue")(
          o("WAWebChatCollection").ChatCollection,
          ["add"],
          function () {
            var t;
            return a === o("WAWebGroupType").GroupType.COMMUNITY
              ? e
              : e == null || (t = e.groupMetadata) == null
                ? void 0
                : t.getParentGroupChat();
          },
        ),
        p = r("useWAWebEventTargetValue")(
          m == null || (n = m.groupMetadata) == null ? void 0 : n.participants,
          ["bulk_add"],
          function () {
            var e;
            return !!(
              !(m == null || (e = m.groupMetadata) == null) &&
              e.participants.iAmAdmin()
            );
          },
        ),
        _ = c(
          function () {
            var t;
            if (!l || p) {
              o(
                "WAWebOpenCommunityAdminPromotionNotificationPopupAction",
              ).shouldOpenCommunityAdminPromotionNotificationPopup(e) &&
                o(
                  "WAWebOpenCommunityAdminPromotionNotificationPopupAction",
                ).openCommunityAdminPromotionNotificationPopup(e);
              return;
            }
            e != null &&
              o("WAWebChatGetters").getIsGroup(e) &&
              (a == null ||
                a === o("WAWebGroupType").GroupType.DEFAULT ||
                (a !== o("WAWebGroupType").GroupType.COMMUNITY &&
                  !(
                    (t = e.groupMetadata) != null && t.participants.iAmMember()
                  )) ||
                (m != null &&
                  o("WAWebModalManager").ModalManager.open(
                    s.jsx(r("WAWebCommunityPopupNux.react"), {
                      parentChat: m,
                      onClose: function () {
                        u();
                      },
                    }),
                  )));
          },
          [p],
        );
      d(
        function () {
          _();
        },
        [_],
      );
    }
    l.default = m;
  },
  98,
);
