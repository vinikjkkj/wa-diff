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
    "WAWebMuteGetters",
    "WAWebMuteMenuItem.react",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumSurfaceType",
    "WAWebWidToJid",
    "WDSIconIcCancel.react",
    "WDSIconIcInfo.react",
    "WDSMenuItem.react",
    "react",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(t) {
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
      return p.jsx(
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
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return p.jsx(g, { chatId: e }, "mute");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.chatId,
        n = o("useWAWebMuteValues").useMuteValues(t, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        a = n[0];
      return p.jsx(r("WAWebMuteMenuItem.react"), {
        onMute: function (n) {
          var e = o("WAWebGetMaybeChatById").getMaybeChatById(t);
          if (e == null) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast-thread-menu] mute skipped, chat left the collection",
                ])),
            );
            return;
          }
          o("WAWebCmd").Cmd.muteChatFromEntryPoint(
            e,
            n,
            o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
              .CONVERSATION_SCREEN,
          );
        },
        chatId: t,
        isMuted: a,
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return p.jsx(
        r("WDSMenuItem.react"),
        {
          testid: "mi-close-chat",
          onPress: function () {
            var t = o("WAWebGetMaybeChatById").getMaybeChatById(e);
            if (t == null) {
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast-thread-menu] close chat skipped, chat left the collection",
                  ])),
              );
              return;
            }
            o("WAWebCmd").Cmd.closeChat(t);
          },
          Icon: r("WDSIconIcCancel.react"),
          title: s._(/*BTDS*/ ""),
        },
        "close",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return p.jsx(
        r("WAWebDeleteMenuItem.react"),
        {
          onDeleteOrExit: function () {
            var t = o("WAWebGetMaybeChatById").getMaybeChatById(e);
            if (t == null) {
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.getBroadcastAudienceInfoMenuItem = _),
      (l.getBroadcastMuteMenuItem = f),
      (l.getBroadcastCloseChatMenuItem = h),
      (l.getBroadcastDeleteMenuItem = y));
  },
  226,
);
