__d(
  "WAWebBroadcastConversationMenuItems",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebCmd",
    "WAWebDeleteMenuItem.react",
    "WAWebGetMaybeChatById",
    "WAWebMuteMenuItem.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSIconIcCancel.react",
    "WDSIconIcInfo.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(t) {
      var n = o("WAWebWidToJid").widToBroadcastJid(t),
        a = function () {
          var r = o("WAWebGetMaybeChatById").getMaybeChatById(t);
          if (r == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast-thread-menu] audience info skipped, chat left the collection",
                ])),
            );
            return;
          }
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.audienceInfoButtonClicked(
            o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
            n,
          ),
            o("WAWebCmd").Cmd.chatInfoDrawer(r));
        };
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-broadcast-info",
          onPress: a,
          Icon: r("WDSIconIcInfo.react"),
          title: o(
            "WAWebBizBroadcastsCreationStrings",
          ).getBroadcastAudienceInfoLabel(),
        },
        "info",
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return m.jsx(
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
          chatId: e.id,
          isMuted: !!e.mute.expiration,
        },
        "mute",
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return m.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-close-chat",
          onPress: function () {
            var t = o("WAWebGetMaybeChatById").getMaybeChatById(e);
            if (t == null) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast-thread-menu] close chat skipped, chat left the collection",
                  ])),
              );
              return;
            }
            o("WAWebCmd").Cmd.closeChat(t);
          },
          Icon: r("WDSIconIcCancel.react"),
          title: s._(/*BTDS*/ "Close chat"),
        },
        "close",
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return m.jsx(
        r("WAWebDeleteMenuItem.react"),
        {
          onDeleteOrExit: function () {
            var t = o("WAWebGetMaybeChatById").getMaybeChatById(e);
            if (t == null) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast-thread-menu] delete skipped, chat left the collection",
                  ])),
              );
              return;
            }
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(
              o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD,
              o("WAWebWidToJid").widToBroadcastJid(e),
            ),
              o("WAWebCmd").Cmd.deleteOrExitChat(t));
          },
          chatId: e,
        },
        "delete",
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.getBroadcastAudienceInfoMenuItem = p),
      (l.getBroadcastMuteMenuItem = _),
      (l.getBroadcastCloseChatMenuItem = f),
      (l.getBroadcastDeleteMenuItem = g));
  },
  226,
);
