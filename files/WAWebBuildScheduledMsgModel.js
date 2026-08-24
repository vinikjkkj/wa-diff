__d(
  "WAWebBuildScheduledMsgModel",
  [
    "WALogger",
    "WAWebAck",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
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
      var a = o(
          "WAWebExtractMediaFieldsFromScheduledMsg",
        ).extractMediaFieldsFromScheduledMsg(n),
        i = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(n);
      if (a == null && i == null) return null;
      var l;
      try {
        l = o("WAWebWidFactory").createWid(t.chatId);
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
      var u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        c = l.isGroup(),
        d = o(
          "WAWebScheduledMsgOutgoingMsgKey",
        ).buildScheduledMsgOutgoingMsgKey(t.msgId, l, u),
        m = new (r("WAWebMsgKey"))({
          fromMe: d.fromMe,
          remote: d.remote,
          id: "" + s + d.id,
          participant: d.participant,
        }),
        p = babelHelpers.extends(
          {
            id: m,
            from: u,
            to: l,
            author: c ? u : void 0,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          },
          o(
            "WAWebExtractMentionFieldsFromScheduledMsg",
          ).extractMentionFieldsFromScheduledMsg(n),
          o(
            "WAWebExtractQuoteFieldsFromScheduledMsg",
          ).extractQuoteFieldsFromScheduledMsg(n, m),
          { t: t.scheduledTimestampS, ack: o("WAWebAck").ACK.SENT, invis: !1 },
        );
      return a != null
        ? babelHelpers.extends({}, p, a)
        : babelHelpers.extends(
            {},
            p,
            {
              type: o("WAWebMsgType").MSG_TYPE.CHAT,
              kind: o("WAWebMsgType").MsgKind.Chat,
              body: i != null ? i : "",
            },
            o(
              "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
            ).extractLinkPreviewFieldsFromScheduledMsg(n),
          );
    }
    ((l.SCHEDULED_DRAWER_MSG_ID_PREFIX = s),
      (l.buildScheduledMsgDataFromRecord = u));
  },
  98,
);
