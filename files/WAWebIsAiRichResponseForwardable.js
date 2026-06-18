__d(
  "WAWebIsAiRichResponseForwardable",
  [
    "WAWebBotTypes",
    "WAWebBotUnifiedResponseGating",
    "WAWebFrontendMsgGetters",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebFrontendMsgGetters").getAsRichResponse(e);
      if (
        t == null ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.FIRST ||
        e.botEditType === o("WAWebBotTypes").BotMsgEditType.INNER ||
        !o(
          "WAWebBotUnifiedResponseGating",
        ).isAiRichResponseForwardingSenderEnabled(e.t) ||
        o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(
          t.unifiedResponse,
        )
      )
        return !1;
      if (o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e)) return !0;
      var n = t.richResponse.fragments;
      return n.length === 0
        ? !1
        : n.every(function (e) {
            return (
              e.type ===
                o("WAWebRichResponse.flow").RichResponseFragmentType.Text ||
              e.type ===
                o("WAWebRichResponse.flow").RichResponseFragmentType.Table
            );
          });
    }
    l.isAiRichResponseForwardable = e;
  },
  98,
);
