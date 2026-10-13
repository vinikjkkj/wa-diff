__d(
  "WAWebParseBizAIMetadataSyncProto",
  [
    "WAWebBizAIMetadataSyncValidationError",
    "WAWebMsgType",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.baseMessage;
      if (t.id.fromMe || !t.from.isAiHub())
        throw new (o(
          "WAWebBizAIMetadataSyncValidationError",
        ).BizAIMetadataSyncValidationError)(
          o("WAWebBizAIMetadataSyncValidationError")
            .BizAIMetadataSyncValidationCode.UNEXPECTED_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      return {
        msgData: babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "biz_ai_metadata_sync",
        }),
        contextInfo: null,
      };
    }
    l.default = e;
  },
  98,
);
