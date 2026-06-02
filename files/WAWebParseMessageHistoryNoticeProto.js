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
      var s =
        (n = l.messageHistoryMetadata) == null
          ? void 0
          : n.historyReceivers.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            });
      if (s === !1 && a.id.fromMe === !1) {
        var u,
          c,
          d,
          m,
          p =
            (u = l.messageHistoryMetadata) == null
              ? void 0
              : u.oldestMessageTimestampInWindow;
        return p == null
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
                        (c =
                          (d = l.messageHistoryMetadata) == null
                            ? void 0
                            : d.nonHistoryReceivers.map(
                                o("WAWebWidFactory").createWid,
                              )) != null
                          ? c
                          : [],
                    })
                  : null,
              }),
              contextInfo: (m = l.contextInfo) != null ? m : null,
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
