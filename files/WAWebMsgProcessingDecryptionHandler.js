__d(
  "WAWebMsgProcessingDecryptionHandler",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
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
      y = n("$InternalEnum").Mirrored([
        "SignalRetryable",
        "SignalDuplicateMessage",
        "UnknownDevice",
        "DeviceSentMessage",
        "InvalidProtobuf",
        "HsmMismatch",
        "BroadcastEphSettings",
        "Unknown",
      ]),
      C = new Set([y.SignalRetryable]);
    function b(e) {
      return e.message === "errDuplicateMsg"
        ? y.SignalDuplicateMessage
        : y.SignalRetryable;
    }
    function v(e) {
      return e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError
        ? y.UnknownDevice
        : e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError
          ? b(e)
          : e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
            ? y.SignalDuplicateMessage
            : e instanceof o("WAWebHandleMsgError").DeviceSentMessageError
              ? y.DeviceSentMessage
              : e instanceof o("WAWebHandleMsgError").MessageValidationError
                ? y.InvalidProtobuf
                : e instanceof o("WAWebHandleMsgCommon").HsmMismatchError
                  ? y.HsmMismatch
                  : e instanceof
                      o("WAWebEphemeralDecodeBroadcastSetting")
                        .BroadcastEphSettingsError
                    ? y.BroadcastEphSettings
                    : y.Unknown;
    }
    function S(e) {
      var t = {
        accessedEncs: new Set(),
        pkOrMsgFailedEnc: null,
        skMsgFailedEnc: null,
      };
      return {
        handleError: function (r, a) {
          var n = v(a);
          (r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? (t.skMsgFailedEnc = { enc: r, error: a, errorType: n })
            : (t.pkOrMsgFailedEnc = { enc: r, error: a, errorType: n }),
            I(e, { enc: r, error: a, errorType: n }));
        },
        canDecryptNext: function (n) {
          var e;
          r("gkx")("26258") || D();
          var o = (e = t.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
          return o != null && C.has(o)
            ? !1
            : (t.accessedEncs.add(n.e2eType), !0);
        },
        getResult: function (r) {
          return L(e, t, r);
        },
      };
    }
    function R(e) {
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
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          (k(e, t), T(e, t));
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
              u !== y.SignalDuplicateMessage &&
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
            u === y.SignalRetryable || u === y.UnknownDevice
              ? {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                  retryCount: l.retryCount,
                  retryReason: c,
                }
              : u === y.SignalDuplicateMessage
                ? {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SIGNAL_OLD_COUNTER_ERROR,
                    failedEnc: l,
                  }
                : u === y.DeviceSentMessage
                  ? {
                      result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                        .PARSE_VALIDATION_ERROR,
                    }
                  : u === y.InvalidProtobuf
                    ? {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .PARSE_VALIDATION_ERROR,
                        e2eFailureReason:
                          s instanceof
                          o("WAWebHandleMsgError").MessageValidationError
                            ? s.e2eFailureReason
                            : void 0,
                      }
                    : u === y.HsmMismatch
                      ? {
                          result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .HSM_MISMATCH,
                        }
                      : u === y.BroadcastEphSettings
                        ? {
                            result: o("WAWebHandleMsgTypes.flow")
                              .E2EProcessResult.RETRY,
                            retryCount: l.retryCount,
                            retryReason: c,
                            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
                              .E2E_FAILURE_REASON
                              .INVALID_BROADCAST_STANZA_ATTRIBUTE,
                          }
                        : u === y.Unknown
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = e.msgInfo,
        i = e.msgMeta,
        l = r != null ? r : n;
      if (l != null) {
        var s = l.enc,
          u = l.error,
          c = l.errorType;
        if (R(e)) {
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
          case y.SignalRetryable:
          case y.UnknownDevice:
          case y.HsmMismatch:
          case y.BroadcastEphSettings:
          case y.SignalDuplicateMessage:
            break;
          case y.InvalidProtobuf:
          case y.DeviceSentMessage: {
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
          case y.Unknown:
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
    function I(t, n) {
      var a = t.msgBotInfo,
        i = t.msgInfo,
        l = t.msgMeta,
        g = n.enc,
        h = n.error,
        C = n.errorType,
        b = o("WAWebMsgProcessingApiUtils").getFrom(i);
      switch (
        (o("WAWebPostE2eMessageRecvMetric").postFailureE2eMessageRecvMetric({
          enc: g,
          from: b,
          msgMeta: l,
          msgInfo: i,
          msgBotInfo: a,
          error:
            h instanceof o("WAWebHandleMsgError").MessageValidationError
              ? h
              : null,
        }),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "decryptE2EPayload: msgId::",
                " e2eType:",
                " error:",
                "",
              ])),
            i.externalId,
            g.e2eType,
            h.stack,
          )
          .tags("messaging"),
        C)
      ) {
        case y.SignalDuplicateMessage:
          break;
        case y.SignalRetryable:
        case y.UnknownDevice: {
          r("gkx")("26258") ||
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptE2EPayload: e2eType:",
                    " error:",
                    "",
                  ])),
                g.e2eType,
                h,
              )
              .tags("messaging")
              .sendLogs("handleMsg: decryption error");
          break;
        }
        case y.InvalidProtobuf: {
          h instanceof o("WAWebHandleMsgError").MessageValidationError &&
            (o("WAWebIsOfficialClient").isUnofficialStanzaId(i.externalId)
              ? o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        "",
                      ])),
                    g.e2eType,
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
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: e2eType:",
                          " error:",
                          "",
                        ])),
                      g.e2eType,
                      h,
                    )
                    .tags("messaging")
                    .sendLogs("(intern) handleMsg: " + h.name)
                : o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: e2eType:",
                          " error:",
                          "",
                        ])),
                      g.e2eType,
                      h,
                    )
                    .tags("messaging")
                    .sendLogs(
                      "handleMsg: " + h.name,
                      h.sendLogs === !0 ? void 0 : { sampling: h.sendLogs },
                    ));
          break;
        }
        case y.DeviceSentMessage: {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " infoType:",
                  " isDirect:",
                  " error:",
                  "",
                ])),
              g.e2eType,
              i.type,
              i.isDirect,
              h,
            )
            .tags("messaging")
            .sendLogs("handleMsg: parse device sent message error");
          break;
        }
        case y.HsmMismatch: {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              g.e2eType,
              h,
            )
            .tags("messaging")
            .sendLogs("handleMsg: hsm mismatch error");
          break;
        }
        case y.BroadcastEphSettings: {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              g.e2eType,
              h,
            )
            .tags("messaging")
            .sendLogs(
              "handleMsg: failed to decrypt broadcast ephemeral settings",
            );
          break;
        }
        case y.Unknown: {
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              g.e2eType,
              h,
            )
            .tags("messaging")
            .sendLogs("handleMsg: parse decrypted message error");
          break;
        }
      }
    }
    function T(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = r != null ? r : n;
      if (
        a != null &&
        o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
      ) {
        var i = e.msgInfo.chat;
        if ((i.isUser() || i.isGroup()) && !R(e)) {
          var l = null;
          switch (a.errorType) {
            case y.SignalRetryable:
            case y.SignalDuplicateMessage:
            case y.BroadcastEphSettings:
            case y.UnknownDevice:
              break;
            case y.DeviceSentMessage:
            case y.InvalidProtobuf: {
              l = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
              break;
            }
            case y.HsmMismatch:
            case y.Unknown: {
              l = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
          }
          if (l != null) {
            var s = e.msgInfo.externalId;
            (o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function D() {
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
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "Dropping incoming message with ",
                " error",
              ])),
            t,
          ),
          t)
        ) {
          case y.SignalRetryable:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errSignalErr",
            );
          case y.SignalDuplicateMessage:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errDuplicateMsg",
            );
          case y.InvalidProtobuf:
            throw new (o("WAWebHandleMsgError").MessageValidationError)(
              "test",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          case y.DeviceSentMessage:
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(1, 1);
          default:
            return;
        }
      }
    }
    ((l.DecryptionErrorType = y), (l.createDecryptionHandler = S));
  },
  98,
);
