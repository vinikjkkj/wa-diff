__d(
  "WAWebJoinEventCallAction",
  [
    "WAWebApiParse",
    "WAWebChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebVoipStackInterface",
    "WAWebWamEnumLobbyEntryPointType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              u = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            yield u == null ? void 0 : u.previewCallLink(a, i, l, s);
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.joinEventCall = e;
  },
  98,
);
