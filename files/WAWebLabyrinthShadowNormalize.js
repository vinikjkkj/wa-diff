__d(
  "WAWebLabyrinthShadowNormalize",
  [
    "WALogger",
    "WAWebHistorySyncLidChatGating",
    "WAWebHistorySyncMsgKeyOverrideUtils",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebParseWebMessageInfoApi",
    "WAWebProtobufsE2E.pb",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
          .BOT_MEMU_ONBOARDING_MESSAGE,
        o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
          .REQUEST_WELCOME_MESSAGE,
      ]);
    function u(t) {
      var n,
        a,
        i = t.dbChatId,
        l = t.labyrinthChatId,
        u = t.webMessageInfo;
      if (
        s.has(
          (n = u.message) == null || (n = n.protocolMessage) == null
            ? void 0
            : n.type,
        ) ||
        u.scheduledMessageMetadata != null ||
        ((a = u.message) == null ? void 0 : a.conditionalRevealMessage) != null
      )
        return null;
      var c;
      try {
        c = o("WAWebParseWebMessageInfoApi").parseWebMessageInfo(u);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth][shadow] parseWebMessageInfo failed",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          null
        );
      }
      return c == null ||
        o(
          "WAWebKeepAndApplyBrazilPaymentStateUpdates",
        ).isRoutedBrazilPaymentStateUpdateMsg(c)
        ? null
        : l.isRegularUserPn()
          ? o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
            ? i.isLid()
              ? o(
                  "WAWebHistorySyncMsgKeyOverrideUtils",
                ).maybeOverrideMsgKeyRemoteWithChatId(c, i)
              : c
            : o(
                "WAWebHistorySyncMsgKeyOverrideUtils",
              ).maybeOverrideMsgKeyRemoteWithChatId(c, l)
          : c;
    }
    l.normalizeLabyrinthShadowMessage = u;
  },
  98,
);
