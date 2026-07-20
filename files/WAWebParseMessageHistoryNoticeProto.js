__d(
  "WAWebParseMessageHistoryNoticeProto",
  [
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGroupHistoryMsgData.flow",
    "WAWebMessageHistoryValidation",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n,
        r,
        a = t.baseMessage,
        i = t.messageProtobuf,
        l = i.messageHistoryNotice;
      if (l == null) return null;
      o("WAWebMessageHistoryValidation").validateMessageHistoryNotice(l);
      var s = (n = l.contextInfo) != null ? n : null,
        c = u(l.messageHistoryMetadata),
        d =
          (r = l.messageHistoryMetadata) == null
            ? void 0
            : r.historyReceivers.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(
                  o("WAWebWidFactory").createWid(e),
                );
              });
      if (d === !1 && a.id.fromMe === !1) {
        var m;
        return ((m = l.messageHistoryMetadata) == null
          ? void 0
          : m.oldestMessageTimestampInWindow) == null
          ? (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[GroupHistory] oldestMessageTimestampInWindow is null",
                ])),
            ),
            null)
          : {
              msgData: babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
                kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
                subtype: "message_history_notice",
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                groupHistoryBundleMetadata: c,
              }),
              contextInfo: s,
            };
      }
      return a.id.fromMe === !0
        ? {
            msgData: babelHelpers.extends({}, a, {
              type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
              kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .MessageHistoryNotice,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              groupHistoryBundleMetadata: c,
            }),
            contextInfo: s,
          }
        : {
            msgData: babelHelpers.extends({}, a, {
              type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
              kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .MessageHistoryNotice,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            }),
            contextInfo: s,
          };
    }
    function u(e) {
      return e == null
        ? null
        : babelHelpers.extends({}, e, {
            historyReceivers: e.historyReceivers.map(
              o("WAWebWidFactory").createWid,
            ),
            processState: o("WAWebGroupHistoryMsgData.flow")
              .MessageHistoryBundleProcessState.NONE,
            nonHistoryReceivers: e.nonHistoryReceivers.map(
              o("WAWebWidFactory").createWid,
            ),
          });
    }
    l.default = s;
  },
  98,
);
