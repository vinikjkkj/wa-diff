__d(
  "WAWebProcessEncryptedMessageEditMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebHandleMsgValidate",
    "WAWebMessageEditDecryptedMsgDataConversion",
    "WAWebMessageEditValidationError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = new Map();
          if (
            (t.forEach(function (e) {
              if (e.kind !== o("WAWebMsgType").MsgKind.MessageEditEncrypted)
                throw new (o("WAWebAddonInfraError").AddonInfraError)(
                  o("WAWebAddonInfraError").AddonInfraErrorCode
                    .UnexpectedMsgType,
                );
              var t = a.getForAddon(e);
              i.set(e, t);
            }),
            i.size === 0)
          )
            return [];
          var l = yield (u || (u = n("Promise"))).allSettled(
            Array.from(i.entries()).map(function (e) {
              var t = e[0],
                n = e[1];
              return m(t, n);
            }),
          );
          return r("compactMap")(l, function (t) {
            switch (t.status) {
              case "fulfilled":
                return t.value;
              case "rejected": {
                var n = t.reason;
                if (
                  n instanceof
                    o("WAWebMessageEditValidationError")
                      .MessageEditValidationError ||
                  n instanceof
                    o("WAWebAddonEncryptionError").DualEncryptionValidationError
                ) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Processing encrypted message edit failed: ",
                          "",
                        ])),
                      n.code,
                    )
                    .sendLogs(n.code);
                  return;
                }
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose(
                        [
                          "Processing encrypted message edit failed: ",
                          "\n",
                          "",
                        ],
                        [
                          "Processing encrypted message edit failed: ",
                          "\\n",
                          "",
                        ],
                      )),
                    n.message,
                    n.stack,
                  )
                  .sendLogs("message_edit_unknown_error");
              }
            }
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a,
            i = e.encIv,
            l = e.encPayload,
            s = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.MessageEditEncrypted,
              t,
            ),
            u = o("WAWebMsgGetters").getOriginalSender(t),
            c = o("WAWebMsgGetters").getSender(e);
          if (c == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (u == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_PARENT_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (i == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_ENC_IV,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (l == null)
            throw new (o(
              "WAWebMessageEditValidationError",
            ).MessageEditValidationError)(
              o("WAWebMessageEditValidationError")
                .MessageEditValidationErrorCode.MISSING_ENC_PAYLOAD,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var d = {
              type: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
              encryptedAddOn: l,
            },
            m = o("WAWebWidFactory").asUserWidOrThrow(c),
            p = yield o("WAWebAddonEncryption").decryptAddOn(d, {
              messageSecret: s,
              iv: i,
              stanzaId: t.id.id,
              originalMessageSender: u,
              addOnSender: m,
            }),
            _ = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              p,
            ),
            f = o(
              "WAWebMessageEditDecryptedMsgDataConversion",
            ).protobufToMessageEditDecryptedMsgData(
              (n = o(
                "WAWebVerifyProtobufMsgObjectKeys",
              ).getUnwrappedProtobufMessage(_)) != null
                ? n
                : _,
              e,
              s,
            ),
            g =
              (r =
                (a = _.messageContextInfo) == null
                  ? void 0
                  : a.messageSecret) != null
                ? r
                : e.messageSecret,
            h = babelHelpers.extends({}, f, {
              plainProtobufBytes: new Uint8Array(p),
            });
          return (
            g != null && (h.messageSecret = new Uint8Array(g)),
            yield o(
              "WAWebHandleMsgValidate",
            ).validateAndProcessReportingTokenInfo({
              renderableMsgs: [h],
              forceDualEncryptedValidation: !0,
            }),
            o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, f)
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.processEncryptedMessageEditMsgs = c;
  },
  98,
);
