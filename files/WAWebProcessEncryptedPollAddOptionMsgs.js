__d(
  "WAWebProcessEncryptedPollAddOptionMsgs",
  [
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollAddOptionDecryptedMsgDataConversion",
    "WAWebPollAddonProcessingUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebVerifyProtobufMsgObjectKeys",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebPollAddonProcessingUtils").buildAddonParentMap(
            t,
            n,
            o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
          );
          return r.size === 0
            ? []
            : o("WAWebPollAddonProcessingUtils").settleAddonResults(
                Array.from(r.entries(), function (e) {
                  var t = e[0],
                    n = e[1];
                  return d(t, n);
                }),
                function (t) {
                  if (
                    t instanceof
                      o("WAWebPollsValidationError")
                        .PollAddOptionValidationError ||
                    t instanceof
                      o("WAWebAddonEncryptionError")
                        .DualEncryptionValidationError
                  ) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Processing encrypted poll add option failed: ",
                            "",
                          ])),
                        t.code,
                      )
                      .sendLogs(t.code, { sampling: 0.1 });
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
                      t.message,
                      t.stack,
                    )
                    .sendLogs("poll_add_option_unknown_error");
                },
              );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            o("WAWebPollAddonProcessingUtils").assertPollNotPastEndTime(
              t.pollEndTime,
              e.t,
              function () {
                return new (o(
                  "WAWebPollsValidationError",
                ).PollAddOptionValidationError)(
                  o("WAWebPollsValidationError")
                    .PollAddOptionValidationErrorCode.PAST_END_TIME,
                  o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                    .INVALID_MESSAGE,
                );
              },
            );
          }
          var _ = yield o(
              "WAWebPollAddonProcessingUtils",
            ).decryptPollAddonPayload(
              o("WAWebMsgType").MsgKind.PollAddOptionEncrypted,
              i,
              {
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(u),
                iv: a,
                messageSecret: l,
                originalMessageSender: s,
                stanzaId: t.id.id,
              },
            ),
            f = _.protobuf,
            g = o(
              "WAWebPollAddOptionDecryptedMsgDataConversion",
            ).protobufToPollAddOptionDecryptedMsgData(
              (n = o(
                "WAWebVerifyProtobufMsgObjectKeys",
              ).getUnwrappedProtobufMessage(f)) != null
                ? n
                : f,
              e,
              t,
            );
          if (
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            t.pollOptions
          ) {
            var h = new Set(
              t.pollOptions.map(function (e) {
                return e.name;
              }),
            );
            if (h.has(g.pollAddedOption.name))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollAddOptionValidationError)(
                o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                  .DUPLICATE_OPTIONS,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
          }
          return { parentMsg: t, decryptedAddOption: g };
        })),
        m.apply(this, arguments)
      );
    }
    l.processEncryptedPollAddOptionMsgs = u;
  },
  98,
);
