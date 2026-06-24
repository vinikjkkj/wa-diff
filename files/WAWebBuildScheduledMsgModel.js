__d(
  "WAWebBuildScheduledMsgModel",
  [
    "WALogger",
    "WAWebAck",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "scheduled-drawer-";
    function u(t, n) {
      var a = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(n);
      if (a == null) return null;
      var i;
      try {
        i = o("WAWebWidFactory").createWid(t.chatId);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] could not build display model: invalid chatId",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("scheduled-msg-build-model-invalid-chat-id"),
          null
        );
      }
      var l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        u = i.isGroup(),
        c = o(
          "WAWebScheduledMsgOutgoingMsgKey",
        ).buildScheduledMsgOutgoingMsgKey(t.msgId, i, l),
        d = new (r("WAWebMsgKey"))({
          fromMe: c.fromMe,
          remote: c.remote,
          id: "" + s + c.id,
          participant: c.participant,
        });
      return babelHelpers.extends(
        {
          id: d,
          from: l,
          to: i,
          author: u ? l : void 0,
          type: o("WAWebMsgType").MSG_TYPE.CHAT,
          kind: o("WAWebMsgType").MsgKind.Chat,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          body: a,
        },
        o(
          "WAWebExtractEphemeralFieldsFromScheduledMsg",
        ).extractEphemeralFieldsFromScheduledMsg(n, l),
        o(
          "WAWebExtractMentionFieldsFromScheduledMsg",
        ).extractMentionFieldsFromScheduledMsg(n),
        o(
          "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
        ).extractLinkPreviewFieldsFromScheduledMsg(n),
        o(
          "WAWebExtractQuoteFieldsFromScheduledMsg",
        ).extractQuoteFieldsFromScheduledMsg(n, d),
        { t: t.scheduledTimestampS, ack: o("WAWebAck").ACK.SENT, invis: !1 },
      );
    }
    ((l.SCHEDULED_DRAWER_MSG_ID_PREFIX = s),
      (l.buildScheduledMsgDataFromRecord = u));
  },
  98,
);
