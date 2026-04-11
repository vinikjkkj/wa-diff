__d(
  "WAWebParseMessageHistoryNoticeProto",
  [
    "WALogger",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGroupHistoryGating",
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
      var s =
        (n = l.messageHistoryMetadata) == null
          ? void 0
          : n.historyReceivers.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            });
      if (!o("WAWebGroupHistoryGating").isGroupHistoryNoticeReceiverEnabled()) {
        var u;
        return {
          msgData: babelHelpers.extends({}, a, {
            type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            kind: o("WAWebMsgType").MsgKind.Unknown,
            viewMode:
              s === !1 && a.id.fromMe === !1
                ? o("WAWebViewMode.flow").ViewModeType.VISIBLE
                : o("WAWebViewMode.flow").ViewModeType.HIDDEN,
            futureproofType: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
            futureproofSubtype: "message_history_notice",
          }),
          contextInfo: (u = l.contextInfo) != null ? u : null,
        };
      }
      if (s === !1 && a.id.fromMe === !1) {
        var c,
          d,
          m,
          p,
          _ =
            (c = l.messageHistoryMetadata) == null
              ? void 0
              : c.oldestMessageTimestampInWindow;
        return _ == null
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
                groupHistoryBundleMetadata: l.messageHistoryMetadata
                  ? babelHelpers.extends({}, l.messageHistoryMetadata, {
                      historyReceivers:
                        l.messageHistoryMetadata.historyReceivers.map(
                          o("WAWebWidFactory").createWid,
                        ),
                      processState: o("WAWebGroupHistoryMsgData.flow")
                        .MessageHistoryBundleProcessState.NONE,
                      nonHistoryReceivers:
                        (d =
                          (m = l.messageHistoryMetadata) == null
                            ? void 0
                            : m.nonHistoryReceivers.map(
                                o("WAWebWidFactory").createWid,
                              )) != null
                          ? d
                          : [],
                    })
                  : null,
              }),
              contextInfo: (p = l.contextInfo) != null ? p : null,
            };
      }
      return {
        msgData: babelHelpers.extends({}, a, {
          type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
          kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .MessageHistoryNotice,
          viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        }),
        contextInfo: (r = l.contextInfo) != null ? r : null,
      };
    }
    l.default = s;
  },
  98,
);
