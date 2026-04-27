__d(
  "WAWebMsgProcessingDecryptionHandler",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebCreateNackFromStanza",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes.flow",
    "WAWebIsOfficialClient",
    "WAWebMessagingGatingUtils",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebPostE2eMessageRecvMetric",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSendRetryReceiptJob",
    "WAWebSignalCommonErrors",
    "WAWebWamEnumE2eFailureReason",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = n("$InternalEnum").Mirrored([
        "SignalRetryable",
        "SignalDuplicateMessage",
        "UnknownDevice",
        "DeviceSentMessage",
        "InvalidProtobuf",
        "HsmMismatch",
        "BroadcastEphSettings",
        "Unknown",
      ]),
      b = new Set([C.SignalRetryable]);
    function v(e) {
      return e.message === "errDuplicateMsg"
        ? C.SignalDuplicateMessage
        : C.SignalRetryable;
    }
    function S(e) {
      return e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError
        ? C.UnknownDevice
        : e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError
          ? v(e)
          : e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
            ? C.SignalDuplicateMessage
            : e instanceof o("WAWebHandleMsgError").DeviceSentMessageError
              ? C.DeviceSentMessage
              : e instanceof o("WAWebHandleMsgError").MessageValidationError
                ? C.InvalidProtobuf
                : e instanceof o("WAWebHandleMsgCommon").HsmMismatchError
                  ? C.HsmMismatch
                  : e instanceof
                      o("WAWebEphemeralDecodeBroadcastSetting")
                        .BroadcastEphSettingsError
                    ? C.BroadcastEphSettings
                    : C.Unknown;
    }
    function R(e) {
      var t = {
        accessedEncs: new Set(),
        pkOrMsgFailedEnc: null,
        skMsgFailedEnc: null,
      };
      return {
        handleError: function (r, a) {
          var n = S(a);
          (r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? (t.skMsgFailedEnc = { enc: r, error: a, errorType: n })
            : (t.pkOrMsgFailedEnc = { enc: r, error: a, errorType: n }),
            D(e, { enc: r, error: a, errorType: n }));
        },
        canDecryptNext: function (n) {
          var e;
          r("gkx")("26258") || $();
          var o = (e = t.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
          return o != null && b.has(o)
            ? !1
            : (t.accessedEncs.add(n.e2eType), !0);
        },
        getResult: function (r) {
          return E(e, t, r);
        },
      };
    }
    function L(e) {
      var t = e.msgInfo,
        n = t.chat,
        r = t.ts;
      if (n.isStatus()) {
        var a =
          o("WATimeUtils").unixTimeWithoutClockSkewCorrection() -
          (r + o("WATimeUtils").DAY_SECONDS);
        return a > 0;
      }
      return !1;
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = (r = t.skMsgFailedEnc) != null ? r : t.pkOrMsgFailedEnc,
            i =
              a != null &&
              t.accessedEncs.has(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ) &&
              t.skMsgFailedEnc == null;
          if (a == null || i)
            return {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
              hasInactiveMsg: n,
            };
          (I(e, t), x(e, t));
          var l = a.enc,
            s = a.error,
            u = a.errorType,
            c;
          return (
            (s instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ||
              s instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError ||
              s instanceof
                o("WAWebEphemeralDecodeBroadcastSetting")
                  .BroadcastEphSettingsError) &&
              ((c = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(s)),
              u !== C.SignalDuplicateMessage &&
                (l.hideFail ||
                  (yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: e.msgMeta,
                    msgInfo: e.msgInfo,
                    placeholderType: o("WAWebHandleMsgTypes.flow")
                      .PlaceholderType.E2E,
                    placeholderAddReason: o(
                      "WAWebBackendJobsCommon",
                    ).getPlaceholderAddReason(s, e),
                  })))),
            u === C.SignalRetryable || u === C.UnknownDevice
              ? {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                  retryCount: l.retryCount,
                  retryReason: c,
                }
              : u === C.SignalDuplicateMessage
                ? {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SIGNAL_OLD_COUNTER_ERROR,
                    failedEnc: l,
                  }
                : u === C.DeviceSentMessage
                  ? {
                      result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                        .PARSE_VALIDATION_ERROR,
                    }
                  : u === C.InvalidProtobuf
                    ? {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .PARSE_VALIDATION_ERROR,
                        e2eFailureReason:
                          s instanceof
                          o("WAWebHandleMsgError").MessageValidationError
                            ? s.e2eFailureReason
                            : void 0,
                      }
                    : u === C.HsmMismatch
                      ? {
                          result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .HSM_MISMATCH,
                        }
                      : u === C.BroadcastEphSettings
                        ? {
                            result: o("WAWebHandleMsgTypes.flow")
                              .E2EProcessResult.RETRY,
                            retryCount: l.retryCount,
                            retryReason: c,
                            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
                              .E2E_FAILURE_REASON
                              .INVALID_BROADCAST_STANZA_ATTRIBUTE,
                          }
                        : u === C.Unknown
                          ? {
                              result: o("WAWebHandleMsgTypes.flow")
                                .E2EProcessResult.PARSE_ERROR,
                            }
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  u,
                              );
                            })()
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = e.msgInfo,
        i = e.msgMeta,
        l = r != null ? r : n;
      if (l != null) {
        var s = l.enc,
          u = l.error,
          c = l.errorType;
        if (L(e)) {
          o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropExpired({
            msgInfo: a,
            msgMeta: i,
            enc: s,
            error:
              u instanceof o("WAWebHandleMsgError").MessageValidationError
                ? u
                : void 0,
          });
          return;
        }
        switch (c) {
          case C.SignalRetryable:
          case C.UnknownDevice:
          case C.HsmMismatch:
          case C.BroadcastEphSettings:
          case C.SignalDuplicateMessage:
            break;
          case C.InvalidProtobuf:
          case C.DeviceSentMessage: {
            o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropInvalidProtobuf({
              msgInfo: a,
              msgMeta: i,
              enc: s,
              error:
                u instanceof o("WAWebHandleMsgError").MessageValidationError
                  ? u
                  : void 0,
            });
            break;
          }
          case C.Unknown:
            o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropInvalidStanzaFromDecryptedMessageInfo({
              msgInfo: a,
              msgMeta: i,
              enc: s,
            });
        }
      }
    }
    function T(t, n, r) {
      var a, i, l, s, u, c, d, m, p, _;
      o("WAWebABProps").getABPropConfigValue("web_pnless_stanzas") === !0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pnless-stanza] duplicate msg id:",
                " e2eType:",
                " chat:",
                " from:",
                " senderPn:",
                " senderLid:",
                " participant:",
                " participantPn:",
                " participantLid:",
                "",
              ])),
            t.externalId,
            n.e2eType,
            t.chat.toLogString(),
            r.toLogString(),
            (a = (i = t.senderPn) == null ? void 0 : i.toLogString()) != null
              ? a
              : "null",
            (l = (s = t.senderLid) == null ? void 0 : s.toLogString()) != null
              ? l
              : "null",
            (u = (c = t.participant) == null ? void 0 : c.toLogString()) != null
              ? u
              : "null",
            (d = (m = t.participantPn) == null ? void 0 : m.toLogString()) !=
              null
              ? d
              : "null",
            (p = (_ = t.participantLid) == null ? void 0 : _.toLogString()) !=
              null
              ? p
              : "null",
          )
          .tags("messaging", "pnless-stanzas")
          .sendLogs("pnless-duplicate-msg");
    }
    function D(e, t) {
      var n = e.msgBotInfo,
        a = e.msgInfo,
        i = e.msgMeta,
        l = t.enc,
        h = t.error,
        y = t.errorType,
        b = o("WAWebMsgProcessingApiUtils").getFrom(a);
      switch (
        (o("WAWebPostE2eMessageRecvMetric").postFailureE2eMessageRecvMetric({
          enc: l,
          from: b,
          msgMeta: i,
          msgInfo: a,
          msgBotInfo: n,
          error:
            h instanceof o("WAWebHandleMsgError").MessageValidationError
              ? h
              : null,
        }),
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "decryptE2EPayload: msgId::",
                " e2eType:",
                " error:",
                "",
              ])),
            a.externalId,
            l.e2eType,
            h.stack,
          )
          .tags("messaging"),
        y)
      ) {
        case C.SignalDuplicateMessage: {
          T(a, l, b);
          break;
        }
        case C.SignalRetryable:
        case C.UnknownDevice: {
          r("gkx")("26258") ||
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptE2EPayload: e2eType:",
                    " error:",
                    "",
                  ])),
                l.e2eType,
                h,
              )
              .tags("messaging")
              .sendLogs("handleMsg: decryption error");
          break;
        }
        case C.InvalidProtobuf: {
          h instanceof o("WAWebHandleMsgError").MessageValidationError &&
            (o("WAWebIsOfficialClient").isUnofficialStanzaId(a.externalId)
              ? o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        "",
                      ])),
                    l.e2eType,
                    h,
                  )
                  .tags("messaging")
                  .sendLogs("handleMsg from UC: " + h.name, {
                    sampling: h.sendLogs === !0 ? 0.01 : h.sendLogs,
                  })
              : r("gkx")("26259") &&
                  h instanceof
                    o("WAWebHandleMsgError").MessageProtobufInvalidMessageTypes
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: e2eType:",
                          " error:",
                          "",
                        ])),
                      l.e2eType,
                      h,
                    )
                    .tags("messaging")
                    .sendLogs("(intern) handleMsg: " + h.name)
                : o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: e2eType:",
                          " error:",
                          "",
                        ])),
                      l.e2eType,
                      h,
                    )
                    .tags("messaging")
                    .sendLogs(
                      "handleMsg: " + h.name,
                      h.sendLogs === !0 ? void 0 : { sampling: h.sendLogs },
                    ));
          break;
        }
        case C.DeviceSentMessage: {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " infoType:",
                  " isDirect:",
                  " error:",
                  "",
                ])),
              l.e2eType,
              a.type,
              a.isDirect,
              h,
            )
            .tags("messaging")
            .sendLogs("handleMsg: parse device sent message error");
          break;
        }
        case C.HsmMismatch: {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              l.e2eType,
              h,
            )
            .tags("messaging")
            .sendLogs("handleMsg: hsm mismatch error");
          break;
        }
        case C.BroadcastEphSettings: {
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              l.e2eType,
              h,
            )
            .tags("messaging")
            .sendLogs(
              "handleMsg: failed to decrypt broadcast ephemeral settings",
            );
          break;
        }
        case C.Unknown: {
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              l.e2eType,
              h,
            )
            .tags("messaging")
            .sendLogs("handleMsg: parse decrypted message error");
          break;
        }
      }
    }
    function x(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = r != null ? r : n;
      if (
        a != null &&
        o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
      ) {
        var i = e.msgInfo.chat;
        if ((i.isUser() || i.isGroup()) && !L(e)) {
          var l = null;
          switch (a.errorType) {
            case C.SignalRetryable:
            case C.SignalDuplicateMessage:
            case C.BroadcastEphSettings:
            case C.UnknownDevice:
              break;
            case C.DeviceSentMessage:
            case C.InvalidProtobuf: {
              l = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
              break;
            }
            case C.HsmMismatch:
            case C.Unknown: {
              l = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
          }
          if (l != null) {
            var s = e.msgInfo.externalId;
            (o("WALogger")
              .WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "messageDrop: insert a debug placeholder for ",
                    ", reason: ",
                    "",
                  ])),
                s,
                a.errorType,
              )
              .tags("messaging"),
              o("WAWebHandleMsgProcess").processPlaceholderMsg({
                type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                msgInfo: e.msgInfo,
                nackReason: l,
              }));
          }
        }
      }
    }
    function $() {
      if (!r("gkx")("26258")) {
        var e,
          t =
            (e =
              n("cr:4122") == null
                ? void 0
                : n("cr:4122").isNextMessageDropped()) != null
              ? e
              : null;
        if (t == null) return;
        switch (
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "Dropping incoming message with ",
                " error",
              ])),
            t,
          ),
          t)
        ) {
          case C.SignalRetryable:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errSignalErr",
            );
          case C.SignalDuplicateMessage:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errDuplicateMsg",
            );
          case C.InvalidProtobuf:
            throw new (o("WAWebHandleMsgError").MessageValidationError)(
              "test",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          case C.DeviceSentMessage:
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(1, 1);
          default:
            return;
        }
      }
    }
    ((l.DecryptionErrorType = C), (l.createDecryptionHandler = R));
  },
  98,
);
