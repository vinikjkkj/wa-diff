__d(
  "WAWebMsgProcessingDecryptionHandler",
  [
    "$InternalEnum",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebBotMsgDecryptError",
    "WAWebBotMsgSecretError",
    "WAWebCreateNackFromStanza",
    "WAWebEphemeralDecodeBroadcastSetting",
    "WAWebGroupAgentReceipts",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgError",
    "WAWebHandleMsgTypes",
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
    "requireDeferred",
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
      v = r("requireDeferred")("WAWebHandleMsgProcess").__setRef(
        "WAWebMsgProcessingDecryptionHandler",
      ),
      S = n("$InternalEnum").Mirrored([
        "SignalRetryable",
        "SignalDuplicateMessage",
        "UnknownDevice",
        "DeviceSentMessage",
        "InvalidProtobuf",
        "HsmMismatch",
        "BroadcastEphSettings",
        "OrphanBotMsg",
        "BotMsgMissingSecret",
        "BotMsgDecryptFailure",
        "Unknown",
      ]),
      R = new Set([S.SignalRetryable]);
    function L(e) {
      return e.message === "errDuplicateMsg"
        ? S.SignalDuplicateMessage
        : S.SignalRetryable;
    }
    function E(e) {
      return e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError
        ? S.UnknownDevice
        : e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError
          ? L(e)
          : e instanceof o("WAWebSignalCommonErrors").SignalMessageCounterError
            ? S.SignalDuplicateMessage
            : e instanceof o("WAWebHandleMsgError").DeviceSentMessageError
              ? S.DeviceSentMessage
              : e instanceof o("WAWebHandleMsgError").MessageValidationError
                ? S.InvalidProtobuf
                : e instanceof o("WAWebHandleMsgCommon").HsmMismatchError
                  ? S.HsmMismatch
                  : e instanceof
                      o("WAWebEphemeralDecodeBroadcastSetting")
                        .BroadcastEphSettingsError
                    ? S.BroadcastEphSettings
                    : e instanceof r("WAWebOrphanBotMsgError")
                      ? S.OrphanBotMsg
                      : e instanceof r("WAWebBotMsgSecretError")
                        ? S.BotMsgMissingSecret
                        : e instanceof r("WAWebBotMsgDecryptError")
                          ? S.BotMsgDecryptFailure
                          : S.Unknown;
    }
    function k(e) {
      var t = {
        accessedEncs: new Set(),
        pkOrMsgFailedEnc: null,
        skMsgFailedEnc: null,
      };
      return {
        handleError: function (r, a) {
          var n = E(a);
          (r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? (t.skMsgFailedEnc = { enc: r, error: a, errorType: n })
            : (t.pkOrMsgFailedEnc = { enc: r, error: a, errorType: n }),
            N(e, { enc: r, error: a, errorType: n }));
        },
        canDecryptNext: function (n) {
          var e;
          r("gkx")("26258") || w();
          var o = (e = t.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
          return o != null && R.has(o)
            ? !1
            : (t.accessedEncs.add(n.e2eType), !0);
        },
        getResult: function (r, o) {
          return T({
            handlerState: t,
            hasInactiveMsg: r,
            isOrphanAddon: o,
            parsedMsgPayload: e,
          });
        },
      };
    }
    function I(e) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
              hasInactiveMsg: a,
              isOrphanAddon: i,
            };
          (P(l, n), M(l, n));
          var c = s.enc,
            d = s.error,
            m = s.errorType,
            p = !1,
            _;
          if (
            d instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ||
            d instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError ||
            d instanceof
              o("WAWebEphemeralDecodeBroadcastSetting")
                .BroadcastEphSettingsError
          )
            if (
              ((_ = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(d)),
              m !== S.SignalDuplicateMessage)
            ) {
              if (!c.hideFail) {
                var f = yield v.load(),
                  g = f.processPlaceholderMsg;
                p = yield g({
                  type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                  msgMeta: l.msgMeta,
                  msgInfo: l.msgInfo,
                  placeholderType: o("WAWebHandleMsgTypes").PlaceholderType.E2E,
                  placeholderAddReason: o(
                    "WAWebBackendJobsCommon",
                  ).getPlaceholderAddReason(d, l),
                });
              }
            } else
              l.msgInfo.chat.isGroup() &&
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
                  });
          return m === S.SignalRetryable || m === S.UnknownDevice
            ? {
                result: o("WAWebHandleMsgTypes").E2EProcessResult.RETRY,
                retryCount: c.retryCount,
                retryReason: _,
                placeholderCreated: p,
                isOrphanAddon: i,
                failedEncType: c.e2eType,
              }
            : m === S.SignalDuplicateMessage
              ? {
                  result: o("WAWebHandleMsgTypes").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR,
                  failedEnc: c,
                }
              : m === S.DeviceSentMessage
                ? {
                    result: o("WAWebHandleMsgTypes").E2EProcessResult
                      .PARSE_VALIDATION_ERROR,
                    e2eFailureReason:
                      d instanceof
                      o("WAWebHandleMsgError").DeviceSentMessageError
                        ? d.e2eFailureReason
                        : void 0,
                  }
                : m === S.InvalidProtobuf
                  ? {
                      result: o("WAWebHandleMsgTypes").E2EProcessResult
                        .PARSE_VALIDATION_ERROR,
                      e2eFailureReason:
                        d instanceof
                        o("WAWebHandleMsgError").MessageValidationError
                          ? d.e2eFailureReason
                          : void 0,
                    }
                  : m === S.HsmMismatch
                    ? {
                        result: o("WAWebHandleMsgTypes").E2EProcessResult
                          .HSM_MISMATCH,
                      }
                    : m === S.BroadcastEphSettings
                      ? {
                          result: o("WAWebHandleMsgTypes").E2EProcessResult
                            .RETRY,
                          retryCount: c.retryCount,
                          retryReason: _,
                          placeholderCreated: p,
                          e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
                            .E2E_FAILURE_REASON
                            .INVALID_BROADCAST_STANZA_ATTRIBUTE,
                        }
                      : m === S.OrphanBotMsg
                        ? s.error instanceof r("WAWebOrphanBotMsgError")
                          ? {
                              deferReason: s.error.reason,
                              result: o("WAWebHandleMsgTypes").E2EProcessResult
                                .DEFERRED,
                              targetMsgKey: s.error.targetMsgKey,
                            }
                          : {
                              result: o("WAWebHandleMsgTypes").E2EProcessResult
                                .PARSE_ERROR,
                            }
                        : m === S.BotMsgMissingSecret
                          ? {
                              result: o("WAWebHandleMsgTypes").E2EProcessResult
                                .PARSE_ERROR,
                              nackReason: x(),
                            }
                          : m === S.BotMsgDecryptFailure
                            ? {
                                result: o("WAWebHandleMsgTypes")
                                  .E2EProcessResult.PARSE_ERROR,
                                nackReason: $(l),
                              }
                            : m === S.Unknown
                              ? {
                                  result: o("WAWebHandleMsgTypes")
                                    .E2EProcessResult.PARSE_ERROR,
                                }
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      m,
                                  );
                                })();
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return r("justknobx")._("1714")
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function $(e) {
      return o("WAWebGroupAgentReceipts").isGroupAgentMsmsgDecryptNackEnabled(e)
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function P(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = e.msgInfo,
        i = e.msgMeta,
        l = r != null ? r : n;
      if (l != null) {
        var s = l.enc,
          u = l.error,
          c = l.errorType;
        if (I(e)) {
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
          case S.SignalRetryable:
          case S.UnknownDevice:
          case S.HsmMismatch:
          case S.BroadcastEphSettings:
          case S.SignalDuplicateMessage:
          case S.OrphanBotMsg:
            break;
          case S.InvalidProtobuf:
          case S.DeviceSentMessage: {
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
          case S.BotMsgMissingSecret:
          case S.BotMsgDecryptFailure:
          case S.Unknown:
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
    function N(t, n) {
      var a,
        i = t.msgBotInfo,
        l = t.msgInfo,
        y = t.msgMeta,
        C = n.enc,
        b = n.error,
        v = n.errorType,
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
        v)
      ) {
        case S.SignalDuplicateMessage:
          break;
        case S.SignalRetryable:
        case S.UnknownDevice: {
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
        case S.InvalidProtobuf: {
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
        case S.DeviceSentMessage: {
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
        case S.HsmMismatch: {
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
        case S.BroadcastEphSettings: {
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
        case S.OrphanBotMsg: {
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
        case S.BotMsgMissingSecret: {
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
        case S.BotMsgDecryptFailure:
        case S.Unknown: {
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
    function M(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = r != null ? r : n;
      if (
        a != null &&
        o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
      ) {
        var i = e.msgInfo.chat;
        if ((i.isUser() || i.isGroup()) && !I(e)) {
          var l = null;
          switch (a.errorType) {
            case S.SignalRetryable:
            case S.SignalDuplicateMessage:
            case S.BroadcastEphSettings:
            case S.UnknownDevice:
            case S.OrphanBotMsg:
              break;
            case S.DeviceSentMessage:
            case S.InvalidProtobuf: {
              l = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
              break;
            }
            case S.BotMsgMissingSecret: {
              var s;
              l =
                (s = x()) != null
                  ? s
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case S.BotMsgDecryptFailure: {
              var u;
              l =
                (u = $(e)) != null
                  ? u
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case S.HsmMismatch:
            case S.Unknown: {
              l = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
          }
          if (l != null) {
            var c = e.msgInfo.externalId;
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "messageDrop: insert a debug placeholder for ",
                    ", reason: ",
                    "",
                  ])),
                c,
                a.errorType,
              )
              .tags("messaging");
            var d = l;
            v.load().then(function (t) {
              t.processPlaceholderMsg({
                type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                msgInfo: e.msgInfo,
                nackReason: d,
              });
            });
          }
        }
      }
    }
    function w() {
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
          case S.SignalRetryable:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errSignalErr",
            );
          case S.SignalDuplicateMessage:
            throw new (o("WAWebSignalCommonErrors").SignalDecryptionError)(
              "errDuplicateMsg",
            );
          case S.InvalidProtobuf:
            throw new (o("WAWebHandleMsgError").MessageValidationError)(
              "test",
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          case S.DeviceSentMessage:
            throw new (o("WAWebHandleMsgError").DeviceSentMessageError)(1, 1);
          default:
            return;
        }
      }
    }
    ((l.DecryptionErrorType = S), (l.createDecryptionHandler = k));
  },
  98,
);
