__d(
  "WAWebCreateAiMediaCollectionMsgData",
  [
    "WAWebBotLoggingUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebResolveMetaAiPersonaId",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.botPersonaId,
        n = e.chat,
        r = e.collectionId,
        a = e.expectedMediaCount,
        i = e.hasGlobalCaption,
        l = e.threadId,
        s = self.crypto.getRandomValues(new Uint8Array(32)),
        u =
          t != null && t !== ""
            ? t
            : o("WAWebResolveMetaAiPersonaId").resolveMetaAiPersonaId(n),
        c = babelHelpers.extends(
          {},
          await o("WAWebMsgDataUtils").genOutgoingMsgData(
            n,
            o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          ),
          {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.AiMediaCollection,
            subtype: "ai_media_collection",
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            messageSecret: s,
            aiMediaCollectionInfo: {
              collectionId: r,
              expectedMediaCount: a,
              hasGlobalCaption: i,
            },
            botPersonaId: u,
            threadIds: l != null ? [l] : void 0,
          },
        ),
        d = await o(
          "WAWebMaybeGetAppendedAiThreadAttributes",
        ).maybeGetAppendedAiThreadAttributes(c),
        m = d[0],
        p = d[1],
        _ = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(c);
      return babelHelpers.extends({}, c, {
        threadIds: m,
        aiThreadInfo: p,
        botMetricsMetadata: _,
      });
    }
    l.createAiMediaCollectionMsgData = e;
  },
  98,
);
