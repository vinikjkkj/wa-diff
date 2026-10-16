__d(
  "WAWebBizAiExcludedChats",
  ["WAWebChatGetters", "WAWebProtobufsE2E.pb"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return Array.from(e).filter(function (e) {
        return o("WAWebChatGetters").getIsUser(e) && s(e);
      });
    }
    function s(e) {
      return (
        o("WAWebChatGetters").getCapiThreadControl(e) ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED &&
        o("WAWebChatGetters").getSuggestedRepliesEnabled(e) !== !0 &&
        o("WAWebChatGetters").getAiLastHandoffActor(e) === "BUSINESS"
      );
    }
    ((l.getBizAiExcludedChats = e), (l.isBizAiExcludedChat = s));
  },
  98,
);
