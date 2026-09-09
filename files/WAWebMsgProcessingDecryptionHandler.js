__d(
  "WAWebMsgProcessingDecryptionHandler",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotMsgSecretError",
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
    "WAWebOrphanBotMsgError",
    "WAWebPostE2eMessageRecvMetric",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebSendRetryReceiptJob",
    "WAWebSignalCommonErrors",
    "WAWebWamEnumE2eFailureReason",
    "asyncToGeneratorRuntime",
    "cr:4122",
    "gkx",
    "justknobx",
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
      C,
      b,
      v = n("$InternalEnum").Mirrored([
        "SignalRetryable",
        "SignalDuplicateMessage",
        "UnknownDevice",
        "DeviceSentMessage",
        "InvalidProtobuf",
        "HsmMismatch",
        "BroadcastEphSettings",
        "OrphanBotMsg",
        "BotMsgMissingSecret",
        "Unknown",
      ]),
      S = new Set([v.SignalRetryable]);
    function R(e) {
      return e.message === "errDuplicateMsg"
        ? v.SignalDuplicateMessage
        : v.SignalRetryable;
    }
    function L(e) {
      return e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError
        ? v.UnknownDevice
        : e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError
          ? R(e)
          : e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
            ? v.SignalDuplicateMessage
            : e instanceof o("WAWebHandleMsgError").DeviceSentMessageError
              ? v.DeviceSentMessage
              : e instanceof o("WAWebHandleMsgError").MessageValidationError
                ? v.InvalidProtobuf
                : e instanceof o("WAWebHandleMsgCommon").HsmMismatchError
                  ? v.HsmMismatch
                  : e instanceof
                      o("WAWebEphemeralDecodeBroadcastSetting")
                        .BroadcastEphSettingsError
                    ? v.BroadcastEphSettings
                    : e instanceof r("WAWebOrphanBotMsgError")
                      ? v.OrphanBotMsg
                      : e instanceof r("WAWebBotMsgSecretError")
                        ? v.BotMsgMissingSecret
                        : v.Unknown;
    }
    function E(e) {
      var t = {
        accessedEncs: new Set(),
        pkOrMsgFailedEnc: null,
        skMsgFailedEnc: null,
      };
      return {
        handleError: function (r, a) {
          var n = L(a);
          (r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? (t.skMsgFailedEnc = { enc: r, error: a, errorType: n })
            : (t.pkOrMsgFailedEnc = { enc: r, error: a, errorType: n }),
            $(e, { enc: r, error: a, errorType: n }));
        },
        canDecryptNext: function (n) {
          var e;
          r("gkx")("26258") || N();
          var o = (e = t.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
          return o != null && S.has(o)
            ? !1
            : (t.accessedEncs.add(n.e2eType), !0);
        },
        getResult: function (r, o) {
          return I({
            handlerState: t,
            hasInactiveMsg: r,
            isOrphanAddon: o,
            parsedMsgPayload: e,
          });
        },
      };
    }
    function k(e) {
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
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.handlerState,
            a = e.hasInactiveMsg,
            i = e.isOrphanAddon,
            l = e.parsedMsgPayload,
            s = (t = n.skMsgFailedEnc) != null ? t : n.pkOrMsgFailedEnc,
            u =
              s != null &&
              n.accessedEncs.has(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ) &&
              n.skMsgFailedEnc == null;
          if (s == null || u)
            return {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
              hasInactiveMsg: a,
              isOrphanAddon: i,
            };
          (x(l, n), P(l, n));
          var c = s.enc,
            d = s.error,
            m = s.errorType,
            p = !1,
            _;
          return (
            (d instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ||
              d instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError ||
              d instanceof
                o("WAWebEphemeralDecodeBroadcastSetting")
                  .BroadcastEphSettingsError) &&
              ((_ = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(d)),
              m !== v.SignalDuplicateMessage
                ? c.hideFail ||
                  (p = yield o("WAWebHandleMsgProcess").processPlaceholderMsg({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: l.msgMeta,
                    msgInfo: l.msgInfo,
                    placeholderType: o("WAWebHandleMsgTypes.flow")
                      .PlaceholderType.E2E,
                    placeholderAddReason: o(
                      "WAWebBackendJobsCommon",
                    ).getPlaceholderAddReason(d, l),
                  }))
                : l.msgInfo.chat.isGroup() &&
                  o("WALogger")
                    .WARN(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "GroupLidInfra: duplicate-skip drop with no placeholder, skmsg = ",
                          ", group = ",
                          ", participant = ",
                          "",
                        ])),
                      String(
                        n.accessedEncs.has(
                          o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                        ),
                      ),
                      l.msgInfo.chat,
                      l.msgInfo.author,
                    )
                    .sendLogs("grouplidinfra-duplicate-skip-drop", {
                      sampling: 0.01,
                    })),
            m === v.SignalRetryable || m === v.UnknownDevice
              ? {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                  retryCount: c.retryCount,
                  retryReason: _,
                  placeholderCreated: p,
                  isOrphanAddon: i,
                }
              : m === v.SignalDuplicateMessage
                ? {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .SIGNAL_OLD_COUNTER_ERROR,
                    failedEnc: c,
                  }
                : m === v.DeviceSentMessage
                  ? {
                      result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                        .PARSE_VALIDATION_ERROR,
                    }
                  : m === v.InvalidProtobuf
                    ? {
                        result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                          .PARSE_VALIDATION_ERROR,
                        e2eFailureReason:
                          d instanceof
                          o("WAWebHandleMsgError").MessageValidationError
                            ? d.e2eFailureReason
                            : void 0,
                      }
                    : m === v.HsmMismatch
                      ? {
                          result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                            .HSM_MISMATCH,
                        }
                      : m === v.BroadcastEphSettings
                        ? {
                            result: o("WAWebHandleMsgTypes.flow")
                              .E2EProcessResult.RETRY,
                            retryCount: c.retryCount,
                            retryReason: _,
                            placeholderCreated: p,
                            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
                              .E2E_FAILURE_REASON
                              .INVALID_BROADCAST_STANZA_ATTRIBUTE,
                          }
                        : m === v.OrphanBotMsg
                          ? s.error instanceof r("WAWebOrphanBotMsgError")
                            ? {
                                result: o("WAWebHandleMsgTypes.flow")
                                  .E2EProcessResult.DEFERRED,
                                targetMsgKey: s.error.targetMsgKey,
                              }
                            : {
                                result: o("WAWebHandleMsgTypes.flow")
                                  .E2EProcessResult.PARSE_ERROR,
                              }
                          : m === v.BotMsgMissingSecret
                            ? {
                                result: o("WAWebHandleMsgTypes.flow")
                                  .E2EProcessResult.PARSE_ERROR,
                                nackReason: D(),
                              }
                            : m === v.Unknown
                              ? {
                                  result: o("WAWebHandleMsgTypes.flow")
                                    .E2EProcessResult.PARSE_ERROR,
                                }
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      m,
                                  );
                                })()
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return r("justknobx")._("1714")
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function x(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = e.msgInfo,
        i = e.msgMeta,
        l = r != null ? r : n;
      if (l != null) {
        var s = l.enc,
          u = l.error,
          c = l.errorType;
        if (k(e)) {
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
          case v.SignalRetryable:
          case v.UnknownDevice:
          case v.HsmMismatch:
          case v.BroadcastEphSettings:
          case v.SignalDuplicateMessage:
          case v.OrphanBotMsg:
            break;
          case v.InvalidProtobuf:
          case v.DeviceSentMessage: {
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
          case v.BotMsgMissingSecret:
          case v.Unknown:
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
    function $(t, n) {
      var a,
        i = t.msgBotInfo,
        l = t.msgInfo,
        y = t.msgMeta,
        C = n.enc,
        b = n.error,
        S = n.errorType,
        R = o("WAWebMsgProcessingApiUtils").getFrom(l);
      switch (
        (o("WAWebPostE2eMessageRecvMetric").postFailureE2eMessageRecvMetric({
          enc: C,
          from: R,
          msgMeta: y,
          msgInfo: l,
          msgBotInfo: i,
          error:
            b instanceof o("WAWebHandleMsgError").MessageValidationError
              ? b
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
            l.externalId,
            C.e2eType,
            (a = b.stack) != null ? a : String(b),
          )
          .tags("messaging"),
        S)
      ) {
        case v.SignalDuplicateMessage:
          break;
        case v.SignalRetryable:
        case v.UnknownDevice: {
          r("gkx")("26258") ||
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptE2EPayload: e2eType:",
                    " error:",
                    "",
                  ])),
                C.e2eType,
                b,
              )
              .tags("messaging")
              .sendLogs("handleMsg: decryption error");
          break;
        }
        case v.InvalidProtobuf: {
          b instanceof o("WAWebHandleMsgError").MessageValidationError &&
            (o("WAWebIsOfficialClient").isUnofficialStanzaId(l.externalId)
              ? o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: e2eType:",
                        " error:",
                        "",
                      ])),
                    C.e2eType,
                    b,
                  )
                  .tags("messaging")
                  .sendLogs("handleMsg from UC: " + b.name, {
                    sampling: b.sendLogs === !0 ? 0.01 : b.sendLogs,
                  })
              : r("gkx")("26259") &&
                  b instanceof
                    o("WAWebHandleMsgError").MessageProtobufInvalidMessageTypes
                ? o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: e2eType:",
                          " error:",
                          "",
                        ])),
                      C.e2eType,
                      b,
                    )
                    .tags("messaging")
                    .sendLogs("(intern) handleMsg: " + b.name)
                : o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: e2eType:",
                          " error:",
                          "",
                        ])),
                      C.e2eType,
                      b,
                    )
                    .tags("messaging")
                    .sendLogs(
                      "handleMsg: " + b.name,
                      b.sendLogs === !0 ? void 0 : { sampling: b.sendLogs },
                    ));
          break;
        }
        case v.DeviceSentMessage: {
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
              C.e2eType,
              l.type,
              l.isDirect,
              b,
            )
            .tags("messaging")
            .sendLogs("handleMsg: parse device sent message error");
          break;
        }
        case v.HsmMismatch: {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              C.e2eType,
              b,
            )
            .tags("messaging")
            .sendLogs("handleMsg: hsm mismatch error");
          break;
        }
        case v.BroadcastEphSettings: {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              C.e2eType,
              b,
            )
            .tags("messaging")
            .sendLogs(
              "handleMsg: failed to decrypt broadcast ephemeral settings",
            );
          break;
        }
        case v.OrphanBotMsg: {
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " orphan bot msg deferred",
                ])),
              C.e2eType,
            )
            .tags("messaging")
            .sendLogs("handleMsg: orphan bot message deferred");
          break;
        }
        case v.BotMsgMissingSecret: {
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              C.e2eType,
              b,
            )
            .tags("messaging")
            .sendLogs("handleMsg: bot message secret missing");
          break;
        }
        case v.Unknown: {
          o("WALogger")
            .WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptE2EPayload: e2eType:",
                  " error:",
                  "",
                ])),
              C.e2eType,
              b,
            )
            .tags("messaging")
            .sendLogs("handleMsg: parse decrypted message error");
          break;
        }
      }
    }
    function P(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = r != null ? r : n;
      if (
        a != null &&
        o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
      ) {
        var i = e.msgInfo.chat;
        if ((i.isUser() || i.isGroup()) && !k(e)) {
          var l = null;
          switch (a.errorType) {
            case v.SignalRetryable:
            case v.SignalDuplicateMessage:
            case v.BroadcastEphSettings:
            case v.UnknownDevice:
            case v.OrphanBotMsg:
              break;
            case v.DeviceSentMessage:
            case v.InvalidProtobuf: {
              l = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
              break;
            }
            case v.BotMsgMissingSecret: {
              var s;
              l =
                (s = D()) != null
                  ? s
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case v.HsmMismatch:
            case v.Unknown: {
              l = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
          }
          if (l != null) {
            var u = e.msgInfo.externalId;
            (o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "messageDrop: insert a debug placeholder for ",
                    ", reason: ",
                    "",
                  ])),
                u,
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
    function N() {
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
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "Dropping incoming message with ",
                " error",
              ])),
            t,
          ),
          t)
        ) {
          case v.SignalRetryable:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errSignalErr",
            );
          case v.SignalDuplicateMessage:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errDuplicateMsg",
            );
          case v.InvalidProtobuf:
            throw new (o("WAWebHandleMsgError").MessageValidationError)(
              "test",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          case v.DeviceSentMessage:
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(1, 1);
          default:
            return;
        }
      }
    }
    ((l.DecryptionErrorType = v), (l.createDecryptionHandler = E));
  },
  98,
);
