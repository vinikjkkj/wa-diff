__d(
  "WAWebCoexV2SyncdBotPeerMessage",
  [
    "WALogger",
    "WAWebCoexV2BotWid",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        e.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT &&
        e.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
        e.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
      );
    }
    function u(e, t) {
      var n;
      return s(e)
        ? (n = t.protocolMessage) == null
          ? void 0
          : n.appStateSyncKeyRequest
        : null;
    }
    function c(t, n) {
      var r = u(t, n);
      return r != null
        ? { appStateSyncKeyRequest: r }
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] dropping a peer message from the CoExV2 bot that isn't a key request, id=",
                  "",
                ])),
              t.externalId,
            )
            .sendLogs("coexv2-bot-peer-message-dropped"),
          {
            deviceSent: null,
            senderKey: null,
            rootSecretDistribute: null,
            storeMsg: null,
            renderableMsgs: [],
          });
    }
    ((l.isCoexV2BotPeerMessage = s),
      (l.getCoexV2BotKeyRequest = u),
      (l.parseCoexV2BotPeerMessage = c));
  },
  98,
);
