__d(
  "WAWebForwardRichResponseHandler",
  [
    "WAWebGetPlainTextFromBotMsg",
    "WAWebIsAiRichResponseForwardable",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      ((t.botPluginType = e.botPluginType),
        (t.botPluginReferenceIndex = e.botPluginReferenceIndex),
        (t.botPluginSearchProvider = e.botPluginSearchProvider),
        (t.botPluginSearchUrl = e.botPluginSearchUrl),
        (t.botPluginSearchQuery = e.botPluginSearchQuery),
        (t.botPluginMaybeParent = e.botPluginMaybeParent));
      var n = o("WAWebIsAiRichResponseForwardable").isAiRichResponseForwardable(
        e,
      );
      if (n) {
        var r;
        ((t.richResponse = e.richResponse),
          (t.unifiedResponse = e.unifiedResponse),
          (t.unifiedResponseRawData = e.unifiedResponseRawData),
          (t.botSignatureVerificationMetadata =
            e.botSignatureVerificationMetadata),
          (t.type = o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE),
          (t.kind = o("WAWebMsgType").MsgKind.RichResponse),
          (t.body =
            (r = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e)) !=
            null
              ? r
              : ""));
      } else {
        var a;
        ((t.type = o("WAWebMsgType").MSG_TYPE.CHAT),
          (t.body =
            (a = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e)) !=
            null
              ? a
              : ""),
          (t.richResponse = void 0),
          (t.unifiedResponse = void 0),
          (t.unifiedResponseRawData = void 0),
          (t.botSignatureVerificationMetadata = void 0));
      }
    }
    l.updateRichResponseFields = e;
  },
  98,
);
