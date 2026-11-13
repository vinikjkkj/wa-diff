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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.chatId,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebMuteGetters").getIsMuted]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMuteValues").useMuteValues(n, a),
        l = i[0],
        s;
      t[1] !== n
        ? ((s = function (t) {
            var e = o("WAWebGetMaybeChatById").getMaybeChatById(n);
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
              t,
              o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT
                .CONVERSATION_SCREEN,
            );
          }),
          (t[1] = n),
          (t[2] = s))
        : (s = t[2]);
      var c;
      return (
        t[3] !== n || t[4] !== l || t[5] !== s
          ? ((c = p.jsx(r("WAWebMuteMenuItem.react"), {
              onMute: s,
              chatId: n,
              isMuted: l,
            })),
            (t[3] = n),
            (t[4] = l),
            (t[5] = s),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
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
          title: s._(/*BTDS*/ "Close chat"),
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
