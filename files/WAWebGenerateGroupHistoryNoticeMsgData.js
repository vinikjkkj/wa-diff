__d(
  "WAWebGenerateGroupHistoryNoticeMsgData",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGroupHistoryGating",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.groupHistoryBundleMetadata;
          if (!o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled())
            throw r("err")(
              "[group-history] Group history sender is not enabled",
            );
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[group-history] generating notice msg data",
              ])),
          );
          var i = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            l = new (r("WAWebMsgKey"))({
              fromMe: !0,
              remote: n.id,
              id: yield r("WAWebMsgKey").newId(),
              participant: i,
            });
          return babelHelpers.extends(
            { id: l },
            o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
              l,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            {
              type: o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .MessageHistoryNotice,
              kind: o("WAWebMsgType").MsgKind.MessageHistoryNotice,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              t: o("WATimeUtils").unixTime(),
              isNewMsg: !0,
              local: !0,
              ack: o("WAWebAck").ACK.CLOCK,
              groupHistoryBundleMetadata: a,
            },
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.generateGroupHistoryNoticeMsgData = s;
  },
  98,
);
