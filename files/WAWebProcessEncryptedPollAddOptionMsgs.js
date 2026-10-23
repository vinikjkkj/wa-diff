__d(
  "WAWebProcessEncryptedPollAddOptionMsgs",
  [
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebHandleMsgValidate",
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
            var c = r("WAWebWid").equals.apply(
              r("WAWebWid"),
              o("WAWebLidMigrationUtils").toCommonAddressingMode(s, u),
            );
            if (!c && t.pollAllowAddOption !== !0)
              throw new (o(
                "WAWebPollsValidationError",
              ).PollAddOptionValidationError)(
                o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                  .ADD_OPTION_NOT_ALLOWED,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            if (
              p(t).length >= o("WAWebPollsGatingUtils").getMaxPollOptionCount()
            )
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
          var d = yield o(
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
            m = d.arrayBuffer,
            _ = d.protobuf,
            f = o(
              "WAWebPollAddOptionDecryptedMsgDataConversion",
            ).protobufToPollAddOptionDecryptedMsgData(
              (n = o(
                "WAWebVerifyProtobufMsgObjectKeys",
              ).getUnwrappedProtobufMessage(_)) != null
                ? n
                : _,
              e,
              t,
            );
          if (t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
            var g = new Set(
              p(t).map(function (e) {
                return e.name;
              }),
            );
            if (g.has(f.pollAddedOption.name))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollAddOptionValidationError)(
                o("WAWebPollsValidationError").PollAddOptionValidationErrorCode
                  .DUPLICATE_OPTIONS,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
          }
          return (
            yield o(
              "WAWebHandleMsgValidate",
            ).validateAndProcessReportingTokenInfo({
              renderableMsgs: [
                babelHelpers.extends({}, f, {
                  plainProtobufBytes: new Uint8Array(m),
                }),
              ],
              forceDualEncryptedValidation: !0,
            }),
            { parentMsg: t, decryptedAddOption: f }
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t;
      return ((t = e.pollOptions) != null ? t : []).filter(function (e) {
        return e.addOptionMsgKey == null;
      });
    }
    l.processEncryptedPollAddOptionMsgs = u;
  },
  98,
);
