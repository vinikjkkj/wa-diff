__d(
  "WAWebParseHatchMetadataSyncProto",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchDecodeError",
    "WAWebHatchMetadataOperationDecoder",
    "WAWebHatchMetadataSyncValidationError",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumE2eFailureReason",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      var t,
        n,
        r = e.baseMessage,
        a = e.messageProtobuf,
        i = a.protocolMessage;
      if (
        i == null ||
        i.type !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_METADATA_OPERATION
      )
        return null;
      var l = (t = r.id) == null ? void 0 : t.remote;
      if (l == null || !o("WAWebBotUtils").isHatchBot(l))
        throw new (o(
          "WAWebHatchMetadataSyncValidationError",
        ).HatchMetadataSyncValidationError)(
          o("WAWebHatchMetadataSyncValidationError")
            .HatchMetadataSyncValidationCode.UNEXPECTED_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var s = d(i.aiMetadataOperation);
      return (
        m(s, (n = r.id) == null ? void 0 : n.id),
        {
          msgData: babelHelpers.extends({}, r, {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "hatch_metadata_sync",
            hatchMetadataSync: s,
          }),
          contextInfo: null,
        }
      );
    }
    function d(t) {
      var n = t == null ? void 0 : t.hatchMetadataSync,
        a = n == null ? void 0 : n.data;
      if (a == null || a.byteLength === 0)
        throw new (o(
          "WAWebHatchMetadataSyncValidationError",
        ).HatchMetadataSyncValidationError)(
          o("WAWebHatchMetadataSyncValidationError")
            .HatchMetadataSyncValidationCode.EMPTY_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var i;
      try {
        i = o(
          "WAWebHatchMetadataOperationDecoder",
        ).decodeHatchMetadataOperation(
          a,
          n == null ? void 0 : n.timestampMs,
          n == null ? void 0 : n.requestId,
        );
      } catch (t) {
        throw t instanceof o("WAWebHatchDecodeError").HatchDecodeError
          ? (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: decode failed (",
                    ")",
                  ])),
                String(t.reason),
              )
              .sendLogs("hatch-metadata-decode-error"),
            new (o(
              "WAWebHatchMetadataSyncValidationError",
            ).HatchMetadataSyncValidationError)(
              o("WAWebHatchMetadataSyncValidationError")
                .HatchMetadataSyncValidationCode.DECODE_FAILURE,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            ))
          : (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-metadata: unexpected decode failure",
                  ])),
              )
              .catching(t instanceof Error ? t : r("err")(String(t)))
              .sendLogs("hatch-metadata-decode-unexpected-error"),
            new (o(
              "WAWebHatchMetadataSyncValidationError",
            ).HatchMetadataSyncValidationError)(
              o("WAWebHatchMetadataSyncValidationError")
                .HatchMetadataSyncValidationCode.UNEXPECTED_DECODE_FAILURE,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            ));
      }
      if (i == null)
        throw new (o(
          "WAWebHatchMetadataSyncValidationError",
        ).HatchMetadataSyncValidationError)(
          o("WAWebHatchMetadataSyncValidationError")
            .HatchMetadataSyncValidationCode.UNHANDLED_CONTROL,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .UNSUPPORTED_MESSAGE_TYPE,
        );
      return i;
    }
    function m(e, t) {
      try {
        o("WAWebHandleHatchMetadataSync").handleHatchMetadataSync(e, t);
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-metadata: apply failed",
              ])),
          )
          .catching(e instanceof Error ? e : r("err")(String(e)))
          .sendLogs("hatch-metadata-apply-error");
      }
    }
    l.default = c;
  },
  98,
);
