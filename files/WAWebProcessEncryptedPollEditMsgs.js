__d(
  "WAWebProcessEncryptedPollEditMsgs",
  [
    "WALogger",
    "WAWebAddonEncryptionError",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebHandleMsgValidate",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPollAddonProcessingUtils",
    "WAWebPollEditDecryptedMsgDataConversion",
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
            o("WAWebMsgType").MsgKind.PollEditEncrypted,
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
                        .PollCreationValidationError ||
                    t instanceof
                      o("WAWebPollsValidationError").PollEditValidationError ||
                    t instanceof
                      o("WAWebAddonEncryptionError")
                        .DualEncryptionValidationError
                  ) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Processing encrypted poll edit failed: ",
                            "",
                          ])),
                        t.code,
                      )
                      .sendLogs(t.code);
                    return;
                  }
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(
                          ["Processing encrypted poll edit failed: ", "\n", ""],
                          [
                            "Processing encrypted poll edit failed: ",
                            "\\n",
                            "",
                          ],
                        )),
                      t.message,
                      t.stack,
                    )
                    .sendLogs("poll_edit_unknown_error");
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
            a,
            i,
            l = e.encIv,
            s = e.encPayload;
          if (t.messageSecret == null)
            throw new (o("WAWebPollsValidationError").PollEditValidationError)(
              o("WAWebPollsValidationError").PollEditValidationErrorCode
                .MISSING_MESSAGE_SECRET,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
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
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (c == null)
            throw new (o("WAWebPollsValidationError").PollEditValidationError)(
              o("WAWebPollsValidationError").PollEditValidationErrorCode
                .MISSING_MESSAGE_SENDER,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (l == null)
            throw new (o("WAWebPollsValidationError").PollEditValidationError)(
              o("WAWebPollsValidationError").PollEditValidationErrorCode
                .MISSING_ENC_IV,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          if (s == null)
            throw new (o("WAWebPollsValidationError").PollEditValidationError)(
              o("WAWebPollsValidationError").PollEditValidationErrorCode
                .MISSING_ENC_PAYLOAD,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
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
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            o("WAWebPollAddonProcessingUtils").assertPollNotPastEndTime(
              t.pollEndTime,
              e.t,
              function () {
                return new (o(
                  "WAWebPollsValidationError",
                ).PollEditValidationError)(
                  o("WAWebPollsValidationError").PollEditValidationErrorCode
                    .PAST_END_TIME,
                  o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                    .INVALID_MESSAGE,
                );
              },
            );
          var m = yield o(
              "WAWebPollAddonProcessingUtils",
            ).decryptPollAddonPayload(
              o("WAWebMsgType").MsgKind.PollEditEncrypted,
              s,
              {
                addOnSender: o("WAWebWidFactory").asUserWidOrThrow(d),
                iv: l,
                messageSecret: u,
                originalMessageSender: c,
                stanzaId: t.id.id,
              },
            ),
            p = m.arrayBuffer,
            _ = m.protobuf,
            f = o(
              "WAWebPollEditDecryptedMsgDataConversion",
            ).protobufToPollEditDecryptedMsgData(
              (n = o(
                "WAWebVerifyProtobufMsgObjectKeys",
              ).getUnwrappedProtobufMessage(_)) != null
                ? n
                : _,
              e,
              t,
            ),
            g =
              (a =
                (i = _.messageContextInfo) == null
                  ? void 0
                  : i.messageSecret) != null
                ? a
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
        m.apply(this, arguments)
      );
    }
    l.processEncryptedPollEditMsgs = u;
  },
  98,
);
