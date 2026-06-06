__d(
  "WAWebProcessEncryptedPollEditMsgs",
  [
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollEditDecryptedMsgDataConversion",
    "WAWebPollsValidationError",
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
          if (e.kind !== o("WAWebMsgType").MsgKind.PollEditEncrypted)
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
                o("WAWebPollsValidationError").PollCreationValidationError ||
              n instanceof
                o("WAWebPollsValidationError").PollEditValidationError ||
              n instanceof
                o("WAWebAddonEncryptionError").DualEncryptionValidationError
            ) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Processing encrypted poll edit failed: ",
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
                      "Processing encrypted poll edit failed: ",
                      `
`,
                      "",
                    ],
                    ["Processing encrypted poll edit failed: ", "\\n", ""],
                  )),
                n.message,
                n.stack,
              )
              .sendLogs("poll_edit_unknown_error");
          }
        }
      });
    }
    async function c(e, t) {
      var n,
        a,
        i,
        l = e.encIv,
        s = e.encPayload;
      if (t.messageSecret == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_MESSAGE_SECRET,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var u = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
          o("WAWebMsgType").MsgKind.PollEditEncrypted,
          t,
        ),
        c = o("WAWebMsgGetters").getOriginalSender(t),
        d = o("WAWebMsgGetters").getSender(e);
      if (d == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (c == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (l == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_ENC_IV,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (s == null)
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .MISSING_ENC_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (
        !r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(d, c),
        )
      )
        throw new (o("WAWebPollsValidationError").PollEditValidationError)(
          o("WAWebPollsValidationError").PollEditValidationErrorCode
            .PARENT_SENDER_MISMATCH,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var m = t.pollEndTime;
        if (m != null && e.t != null && e.t * 1e3 > m)
          throw new (o("WAWebPollsValidationError").PollEditValidationError)(
            o("WAWebPollsValidationError").PollEditValidationErrorCode
              .PAST_END_TIME,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
      }
      var p = {
          type: o("WAWebMsgType").MsgKind.PollEditEncrypted,
          encryptedAddOn: s,
        },
        _ = o("WAWebWidFactory").asUserWidOrThrow(d),
        f = await o("WAWebAddonEncryption").decryptAddOn(p, {
          messageSecret: u,
          iv: l,
          stanzaId: t.id.id,
          originalMessageSender: c,
          addOnSender: _,
        }),
        g = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          f,
        ),
        h = o(
          "WAWebPollEditDecryptedMsgDataConversion",
        ).protobufToPollEditDecryptedMsgData(
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(g)) != null
            ? n
            : g,
          e,
          t,
        ),
        y =
          (a = (i = g.messageContextInfo) == null ? void 0 : i.messageSecret) !=
          null
            ? a
            : e.messageSecret,
        C = babelHelpers.extends({}, h, {
          plainProtobufBytes: new Uint8Array(f),
        });
      return (
        y != null && (C.messageSecret = new Uint8Array(y)),
        await o("WAWebHandleMsgValidate").validateAndProcessReportingTokenInfo({
          renderableMsgs: [C],
          forceDualEncryptedValidation: !0,
        }),
        o("WAWebDBProcessEditProtocolMsgs").generateMessageEdit(t, h)
      );
    }
    l.processEncryptedPollEditMsgs = u;
  },
  98,
);
