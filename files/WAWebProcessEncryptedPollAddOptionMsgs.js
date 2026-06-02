__d(
  "WAWebProcessEncryptedPollAddOptionMsgs",
  [
    "WALogger",
    "WAWebAddonEncryption",
    "WAWebAddonEncryptionError",
    "WAWebAddonInfraError",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollAddOptionDecryptedMsgDataConversion",
    "WAWebPollsGatingUtils",
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
          if (e.kind !== o("WAWebMsgType").MsgKind.PollAddOptionEncrypted)
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
                o("WAWebPollsValidationError").PollAddOptionValidationError ||
              n instanceof
                o("WAWebAddonEncryptionError").DualEncryptionValidationError
            ) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Processing encrypted poll add option failed: ",
                      "",
                    ])),
                  n.code,
                )
                .sendLogs(n.code, { sampling: 0.1 });
              return;
            }
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose(
                    [
                      "Processing encrypted poll add option failed: ",
                      `
`,
                      "",
                    ],
                    [
                      "Processing encrypted poll add option failed: ",
                      "\\n",
                      "",
                    ],
                  )),
                n.message,
                n.stack,
              )
              .sendLogs("poll_add_option_unknown_error");
          }
        }
      });
    }
    async function c(e, t) {
      var n,
        a = e.encIv,
        i = e.encPayload;
      if (t.messageSecret == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_MESSAGE_SECRET,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
          o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
          t,
        ),
        s = o("WAWebMsgGetters").getOriginalSender(t),
        u = o("WAWebMsgGetters").getSender(e);
      if (u == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (s == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_MESSAGE_SENDER,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (a == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_ENC_IV,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (i == null)
        throw new (o("WAWebPollsValidationError").PollAddOptionValidationError)(
          o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
            .MISSING_ENC_PAYLOAD,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
        var c,
          d,
          m = r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(s, u),
          );
        if (!m && t.pollAllowAddOption !== !0)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .ADD_OPTION_NOT_ALLOWED,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var p =
          (c = (d = t.pollOptions) == null ? void 0 : d.length) != null ? c : 0;
        if (p >= o("WAWebPollsGatingUtils").getMaxPollOptionCount())
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .MAX_OPTIONS_REACHED,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var _ = t.pollEndTime;
        if (_ != null && e.t != null && e.t * 1e3 > _)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .PAST_END_TIME,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
      }
      var f = {
          type: o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
          encryptedAddOn: i,
        },
        g = o("WAWebWidFactory").asUserWidOrThrow(u),
        h = await o("WAWebAddonEncryption").decryptAddOn(f, {
          messageSecret: l,
          iv: a,
          stanzaId: t.id.id,
          originalMessageSender: s,
          addOnSender: g,
        }),
        y = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          h,
        ),
        C = o(
          "WAWebPollAddOptionDecryptedMsgDataConversion",
        ).protobufToPollAddOptionDecryptedMsgData(
          (n = o(
            "WAWebVerifyProtobufMsgObjectKeys",
          ).getUnwrappedProtobufMessage(y)) != null
            ? n
            : y,
          e,
          t,
        );
      if (
        t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
        t.pollOptions
      ) {
        var b = new Set(
          t.pollOptions.map(function (e) {
            return e.name;
          }),
        );
        if (b.has(C.pollAddedOption.name))
          throw new (o(
            "WAWebPollsValidationError",
          ).PollAddOptionValidationError)(
            o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
              .DUPLICATE_OPTIONS,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
      }
      return { parentMsg: t, decryptedAddOption: C };
    }
    l.processEncryptedPollAddOptionMsgs = u;
  },
  98,
);
