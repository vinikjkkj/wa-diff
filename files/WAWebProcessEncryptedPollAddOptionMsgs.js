__d(
  "WAWebProcessEncryptedPollAddOptionMsgs",
  [
    "Promise",
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
              if (e.kind !== o("WAWebMsgType").MsgKind.PollAddOptionEncrypted)
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
            Array.from(i.entries(), function (e) {
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
                    o("WAWebPollsValidationError")
                      .PollAddOptionValidationError ||
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
                          "\n",
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
            a = e.encIv,
            i = e.encPayload;
          if (t.messageSecret == null)
            throw new (o(
              "WAWebPollsValidationError",
            ).PollAddOptionValidationError)(
              o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                .MISSING_MESSAGE_SECRET,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var l = o("WAWebAddonEncryptionError").getValidatedMessageSecret(
              o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
              t,
            ),
            s = o("WAWebMsgGetters").getOriginalSender(t),
            u = o("WAWebMsgGetters").getSender(e);
          if (u == null)
            throw new (o(
              "WAWebPollsValidationError",
            ).PollAddOptionValidationError)(
              o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                .MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (s == null)
            throw new (o(
              "WAWebPollsValidationError",
            ).PollAddOptionValidationError)(
              o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                .MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (a == null)
            throw new (o(
              "WAWebPollsValidationError",
            ).PollAddOptionValidationError)(
              o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                .MISSING_ENC_IV,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (i == null)
            throw new (o(
              "WAWebPollsValidationError",
            ).PollAddOptionValidationError)(
              o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                .MISSING_ENC_PAYLOAD,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
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
              (c = (d = t.pollOptions) == null ? void 0 : d.length) != null
                ? c
                : 0;
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
            h = yield o("WAWebAddonEncryption").decryptAddOn(f, {
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
        })),
        p.apply(this, arguments)
      );
    }
    l.processEncryptedPollAddOptionMsgs = c;
  },
  98,
);
