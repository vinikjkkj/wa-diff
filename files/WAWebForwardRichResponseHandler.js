__d(
  "WAWebForwardRichResponseHandler",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      ((t.botPluginType = e.botPluginType),
        (t.botPluginReferenceIndex = e.botPluginReferenceIndex),
        (t.botPluginSearchProvider = e.botPluginSearchProvider),
        (t.botPluginSearchUrl = e.botPluginSearchUrl),
        (t.botPluginSearchQuery = e.botPluginSearchQuery),
        (t.botPluginMaybeParent = e.botPluginMaybeParent),
        (t.richResponse = e.richResponse),
        (t.unifiedResponse = e.unifiedResponse),
        (t.unifiedResponseRawData = e.unifiedResponseRawData),
        (t.botSignatureVerificationMetadata =
          e.botSignatureVerificationMetadata),
        (t.type = o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE),
        (t.kind = o("WAWebMsgType").MsgKind.RichResponse));
    }
    l.updateRichResponseFields = e;
  },
  98,
);
