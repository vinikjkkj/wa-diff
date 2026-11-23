__d(
  "WAWebProcessEncryptedMessageEditMsgs",
  [
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMessageEditDecryptedMsgDataConversion",
    "WAWebMessageEditValidationError",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "WAWebWidFactory",
    "compactMap",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var a = new Map();
      if (
        (t.forEach(function (e) {
          if (e.kind !== o("WAWebMsgType").MsgKind.MessageEditEncrypted)
            throw new (o("WAWebAddonInfraError").AddonInfraError)(
              o("WAWebAddonInfraError").AddonInfraErrorCode.UnexpectedMsgType,
            );
          var t = n.getForAddon(e);
          a.set(e, t);
        }),
        a.size === 0)
      )
        return [];
      var i = await Promise.allSettled(
        Array.from(a.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return c(t, n);
        }),
      );
      return r("compactMap")(i, function (t) {
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
                      `
`,
                      "",
                    ],
                    ["Processing encrypted message edit failed: ", "\\n", ""],
                  )),
                n.message,
                n.stack,
              )
              .sendLogs("message_edit_unknown_error");
          }
        }
      });
    }
    async function c(e, t) {
      var n,
        a,
        i,
        l = e.encIv,
        s = e.encPayload,
        u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
          o("WAWebMsgType").MsgKind.MessageEditEncrypted,
          t,
        ),
        c = o("WAWebMsgGetters").getOriginalSender(t),
        d = o("WAWebMsgGetters").getSender(e),
        m = o("WAWebMsgGetters").getSender(t);
      if (d == null)
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (c == null || m == null)
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .MISSING_PARENT_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var p = o("WAWebLidMigrationUtils")
        .toCommonAddressingMode(d, m)
        .filter(Boolean);
      if (p.length === 2 && !r("WAWebWid").equals.apply(r("WAWebWid"), p))
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .PARENT_SENDER_MISMATCH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (l == null)
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .MISSING_ENC_IV,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (s == null)
        throw new (o(
          "WAWebMessageEditValidationError",
        ).MessageEditValidationError)(
          o("WAWebMessageEditValidationError").MessageEditValidationErrorCode
            .MISSING_ENC_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var _ = {
          type: o("WAWebMsgType").MsgKind.MessageEditEncrypted,
          encryptedAddOn: s,
        },
        f = o("WAWebWidFactory").asUserWidOrThrow(d),
        g = await o("WAWebAddonEncryption").decryptAddOn(_, {
          messageSecret: u,
          iv: l,
          stanzaId: t.id.id,
          originalMessageSender: c,
          addOnSender: f,
        }),
        h = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          g,
        ),
        y = o(
          "WAWebMessageEditDecryptedMsgDataConversion",
        ).protobufToMessageEditDecryptedMsgData(
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(h)) != null
            ? n
            : h,
          e,
          u,
        ),
        C =
          (a = (i = h.messageContextInfo) == null ? void 0 : i.messageSecret) !=
          null
            ? a
            : e.messageSecret,
        b = babelHelpers.extends({}, y, {
          plainProtobufBytes: new Uint8Array(g),
        });
      return (
        C != null && (b.messageSecret = new Uint8Array(C)),
        await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
          renderableMsgs: [b],
          forceDualEncryptedValidation: !0,
        }),
        o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, y)
      );
    }
    l.processEncryptedMessageEditMsgs = u;
  },
  98,
);
