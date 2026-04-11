__d(
  "WAWebBroadcastConversationMenuItems",
  [
    "fbt",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCloseCircleRefreshedIcon.react",
    "WAWebCmd",
    "WAWebDeleteMenuItem.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebMuteMenuItem.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("WAWebWidToJid").widToBroadcastJid(e.id),
        n = function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoButtonClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
            t,
          ),
            o("WAWebCmd").Cmd.chatInfoDrawer(e));
        };
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: n,
          Icon: o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
          title: o(
            "WAWebBizBroadcastsCreationStrings",
          ).getBroadcastAudienceInfoLabel(),
        },
        "info",
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return u.jsx(
        r("WAWebMuteMenuItem.react"),
        {
          onMute: function (n) {
            return o("WAWebCmd").Cmd.muteChatFromEntryPoint(
              e,
              n,
              o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                .CONVERSATION_SCREEN,
            );
          },
          chat: e,
          isMuted: !!e.mute.expiration,
        },
        "mute",
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      return u.jsx(
        r("WDSMenuItem.react"),
        {
          testid: void 0,
          onPress: function () {
            return o("WAWebCmd").Cmd.closeChat(e);
          },
          Icon: o("WAWebCloseCircleRefreshedIcon.react")
            .CloseCircleRefreshedIcon,
          title: s._(/*BTDS*/ "Close chat"),
        },
        "close",
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return u.jsx(
        r("WAWebDeleteMenuItem.react"),
        {
          onDeleteOrExit: function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
              o("WAWebWidToJid").widToBroadcastJid(e.id),
            ),
              o("WAWebCmd").Cmd.deleteOrExitChat(e));
          },
          chat: e,
        },
        "delete",
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.getBroadcastAudienceInfoMenuItem = c),
      (l.getBroadcastMuteMenuItem = d),
      (l.getBroadcastCloseChatMenuItem = m),
      (l.getBroadcastDeleteMenuItem = p));
  },
  226,
);
