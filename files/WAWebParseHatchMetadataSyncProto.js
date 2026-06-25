__d(
  "WAWebParseHatchMetadataSyncProto",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebHandleHatchMetadataSync",
    "WAWebHatchDecodeError",
    "WAWebHatchMetadataExchangeManager",
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
        r,
        a = e.baseMessage,
        i = e.messageProtobuf,
        l = i.protocolMessage;
      if (
        l == null ||
        l.type !==
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type
            .AI_METADATA_OPERATION
      )
        return null;
      var s = (t = a.id) == null ? void 0 : t.remote;
      if (s == null || !o("WAWebBotUtils").isHatchBot(s))
        throw new (o(
          "WAWebHatchMetadataSyncValidationError",
        ).HatchMetadataSyncValidationError)(
          o("WAWebHatchMetadataSyncValidationError")
            .HatchMetadataSyncValidationCode.UNEXPECTED_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var u = d(
        l.aiMetadataOperation,
        (n = a.id) == null ? void 0 : n.toString(),
      );
      return (
        m(u, (r = a.id) == null ? void 0 : r.id),
        {
          msgData: babelHelpers.extends({}, a, {
            type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
            kind: o("WAWebMsgType").MsgKind.Protocol,
            subtype: "hatch_metadata_sync",
            hatchMetadataSync: u,
          }),
          contextInfo: null,
        }
      );
    }
    function d(t, n) {
      var a = t == null ? void 0 : t.hatchMetadataSync,
        i = a == null ? void 0 : a.data;
      if (i == null || i.byteLength === 0)
        throw new (o(
          "WAWebHatchMetadataSyncValidationError",
        ).HatchMetadataSyncValidationError)(
          o("WAWebHatchMetadataSyncValidationError")
            .HatchMetadataSyncValidationCode.EMPTY_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var l;
      try {
        l = o(
          "WAWebHatchMetadataOperationDecoder",
        ).decodeHatchMetadataOperation(
          i,
          a == null ? void 0 : a.timestampMs,
          a == null ? void 0 : a.requestId,
          n,
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
            r("WAWebHatchMetadataExchangeManager").failRequest(
              a == null ? void 0 : a.requestId,
              "decode_failed",
            ),
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
      if (l == null)
        throw new (o(
          "WAWebHatchMetadataSyncValidationError",
        ).HatchMetadataSyncValidationError)(
          o("WAWebHatchMetadataSyncValidationError")
            .HatchMetadataSyncValidationCode.UNHANDLED_CONTROL,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
            .UNSUPPORTED_MESSAGE_TYPE,
        );
      return l;
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
