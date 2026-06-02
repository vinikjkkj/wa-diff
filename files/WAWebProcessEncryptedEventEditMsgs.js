__d(
  "WAWebProcessEncryptedEventEditMsgs",
  [
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebEventEditDecryptedMsgDataConversion",
    "WAWebEventsValidationError",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
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
          if (e.kind !== o("WAWebMsgType").MsgKind.EventEditEncrypted)
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
        Array.from(a.entries(), function (e) {
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
                o("WAWebEventsValidationError").EventCreationValidationError ||
              n instanceof
                o("WAWebEventsValidationError")
                  .EncryptedEventEditValidationError ||
              n instanceof
                o("WAWebAddonEncryptionError").DualEncryptionValidationError
            ) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Processing encrypted event edit failed: ",
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
                      "Processing encrypted event edit failed: ",
                      `
`,
                      "",
                    ],
                    ["Processing encrypted event edit failed: ", "\\n", ""],
                  )),
                n.message,
                n.stack,
              )
              .sendLogs("event_edit_unknown_error");
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
          o("WAWebMsgType").MsgKind.EventEditEncrypted,
          t,
        ),
        c = o("WAWebMsgGetters").getOriginalSender(t),
        d = o("WAWebMsgGetters").getSender(e);
      if (d == null)
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (c == null)
        throw new (o(
          "WAWebEventsValidationError",
        ).EventCreationValidationError)(
          o("WAWebEventsValidationError").EventCreationValidationErrorCode
            .EVENT_CREATION_MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (l == null)
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_MISSING_ENC_IV,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (s == null)
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_MISSING_ENC_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        !r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(d, c),
        )
      )
        throw new (o(
          "WAWebEventsValidationError",
        ).EncryptedEventEditValidationError)(
          o("WAWebEventsValidationError").EncryptedEventEditValidationErrorCode
            .EVENT_EDIT_PARENT_SENDER_MISMATCH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var m = {
          type: o("WAWebMsgType").MsgKind.EventEditEncrypted,
          encryptedAddOn: s,
        },
        p = o("WAWebWidFactory").asUserWidOrThrow(d),
        _ = await o("WAWebAddonEncryption").decryptAddOn(m, {
          messageSecret: u,
          iv: l,
          stanzaId: t.id.id,
          originalMessageSender: c,
          addOnSender: p,
        }),
        f = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          _,
        ),
        g = o(
          "WAWebEventEditDecryptedMsgDataConversion",
        ).protobufToEventEditDecryptedMsgData(
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(f)) != null
            ? n
            : f,
          e,
          u,
        ),
        h =
          (a = (i = f.messageContextInfo) == null ? void 0 : i.messageSecret) !=
          null
            ? a
            : e.messageSecret,
        y = babelHelpers.extends({}, g, {
          plainProtobufBytes: new Uint8Array(_),
        });
      return (
        h != null && (y.messageSecret = new Uint8Array(h)),
        await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
          renderableMsgs: [y],
          forceDualEncryptedValidation: !0,
        }),
        o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, g)
      );
    }
    l.processEncryptedEventEditMsgs = u;
  },
  98,
);
