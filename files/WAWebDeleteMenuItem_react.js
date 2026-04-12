__d(
  "WAWebDeleteMenuItem.react",
  [
    "fbt",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebChatFlowTypes",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFrontendChatGetters",
    "WAWebGroupIntegrityUtils",
    "WAWebMiscGatingUtils",
    "WAWebSuspendedGroupUtils",
    "WDSIconIcDelete.react",
    "WDSIconIcLogout.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.memo;
    function d(e) {
      var t = e.chat,
        n = e.disabled,
        a = e.onDeleteOrExit,
        i = function () {
          o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(t);
        },
        l = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getIsReadOnly,
          o("WAWebFrontendChatGetters").getKind,
        ]),
        c = l[0],
        d = l[1],
        m,
        p = a,
        _ = r("WDSIconIcDelete.react");
      if (d != null)
        switch (d) {
          case o("WAWebChatFlowTypes").ChatKindType.Group:
            c
              ? (m = s._(/*BTDS*/ "Delete group"))
              : !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) &&
                  o("WAWebChatGroupUtils").isSuspendedGroup(t) &&
                  o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
                ? ((m = s._(/*BTDS*/ "Exit group and delete")), (p = i))
                : ((m = o("WAWebGroupIntegrityUtils").getLeaveGroupString(t)),
                  (_ = r("WDSIconIcLogout.react")));
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast:
            m = o(
              "WAWebBizBroadcastsCreationStrings",
            ).getDeleteBroadcastAudienceLabel();
            break;
          case o("WAWebChatFlowTypes").ChatKindType.Chat:
            m = s._(/*BTDS*/ "Delete chat");
            break;
          default:
            break;
        }
      return u.jsx(r("WDSMenuItem.react"), {
        Icon: _,
        title: m,
        onPress: p,
        testid: void 0,
        disabled: n,
        destructive: !0,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = c(d);
    l.default = m;
  },
  226,
);
