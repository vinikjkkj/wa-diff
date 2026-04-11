__d(
  "WAWebChatMuteLogger",
  [
    "WAWebChatGetters",
    "WAWebChatMuteWamEvent",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumMuteChatType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a,
        i = o("WAWebChatGetters").getIsGroup(e);
      new (o("WAWebChatMuteWamEvent").ChatMuteWamEvent)(
        babelHelpers.extends(
          {
            actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED
              .MUTE,
            muteChatType: u(e),
            muteDuration: n,
            muteEntryPoint: t,
          },
          i
            ? {
                muteGroupSize:
                  (r =
                    (a = e.groupMetadata) == null ||
                    (a = a.participants) == null
                      ? void 0
                      : a.length) != null
                    ? r
                    : 0,
              }
            : {},
        ),
      ).commit();
    }
    function s(e, t) {
      var n,
        r,
        a = o("WAWebChatGetters").getIsGroup(e);
      new (o("WAWebChatMuteWamEvent").ChatMuteWamEvent)(
        babelHelpers.extends(
          {
            actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED
              .UNMUTE,
            muteChatType: u(e),
            muteEntryPoint: t,
          },
          a
            ? {
                muteGroupSize:
                  (n =
                    (r = e.groupMetadata) == null ||
                    (r = r.participants) == null
                      ? void 0
                      : r.length) != null
                    ? n
                    : 0,
              }
            : {},
        ),
      ).commit();
    }
    function u(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.GROUP
        : o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE;
    }
    ((l.logChatMute = e), (l.logChatUnmute = s));
  },
  98,
);
