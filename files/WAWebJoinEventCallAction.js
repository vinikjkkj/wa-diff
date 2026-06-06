__d(
  "WAWebJoinEventCallAction",
  [
    "WAWebApiParse",
    "WAWebChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebApiParse").parseCallLink(e.callLink);
      if (t != null) {
        var n = t.data,
          r = n.callType,
          a = n.token,
          i = r === "video",
          l = o("WAWebChatGetters").getIsGroup(e.chat)
            ? o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                .EVENT_GROUP_CHAT
            : o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE
                .EVENT_INDIVIDUAL_CHAT,
          s = o("WAWebFrontendContactGetters").getMyUsername(),
          u = await o("WAWebVoipStackInterface").getVoipStackInterface();
        await (u == null ? void 0 : u.previewCallLink(a, i, l, s));
      }
    }
    l.joinEventCall = e;
  },
  98,
);
