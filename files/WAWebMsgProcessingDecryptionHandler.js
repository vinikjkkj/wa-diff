__d(
  "WAWebMsgProcessingDecryptionHandler",
  [
    "$InternalEnum",
    "WALogger",
    "WAProtoEntryLimitError",
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
              : e instanceof o("WAWebHandleMsgError").MessageValidationError ||
                  (e instanceof
                    o("WAProtoEntryLimitError").ProtobufEntryLimitError &&
                    r("justknobx")._("7544"))
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
      return e instanceof o("WAWebHandleMsgError").MessageValidationError
        ? e
        : e instanceof o("WAProtoEntryLimitError").ProtobufEntryLimitError &&
            r("justknobx")._("7544")
          ? new (o("WAWebHandleMsgError").MessageValidationError)(
              e.code,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_PROTOCOL_BUFFER,
            )
          : null;
    }
    function I(e) {
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
            M(e, { enc: r, error: a, errorType: n }));
        },
        canDecryptNext: function (n) {
          var e;
          r("gkx")("26258") || A();
          var o = (e = t.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
          return o != null && R.has(o)
            ? !1
            : (t.accessedEncs.add(n.e2eType), !0);
        },
        getResult: function (r, o) {
          return D({
            handlerState: t,
            hasInactiveMsg: r,
            isOrphanAddon: o,
            parsedMsgPayload: e,
          });
        },
      };
    }
    function T(e) {
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
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.handlerState,
            i = e.hasInactiveMsg,
            l = e.isOrphanAddon,
            s = e.parsedMsgPayload,
            u = (t = a.skMsgFailedEnc) != null ? t : a.pkOrMsgFailedEnc,
            c =
              u != null &&
              a.accessedEncs.has(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ) &&
              a.skMsgFailedEnc == null;
          if (u == null || c)
            return {
              result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
              hasInactiveMsg: i,
              isOrphanAddon: l,
            };
          (N(s, a), w(s, a));
          var d = u.enc,
            m = u.error,
            p = u.errorType,
            _ = !1,
            f;
          if (
            m instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ||
            m instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError ||
            m instanceof
              o("WAWebEphemeralDecodeBroadcastSetting")
                .BroadcastEphSettingsError
          )
            if (
              ((f = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(m)),
              p !== S.SignalDuplicateMessage)
            ) {
              if (!d.hideFail) {
                var g = yield v.load(),
                  h = g.processPlaceholderMsg;
                _ = yield h({
                  type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                  msgMeta: s.msgMeta,
                  msgInfo: s.msgInfo,
                  placeholderType: o("WAWebHandleMsgTypes").PlaceholderType.E2E,
                  placeholderAddReason: o(
                    "WAWebBackendJobsCommon",
                  ).getPlaceholderAddReason(m, s),
                });
              }
            } else
              s.msgInfo.chat.isGroup() &&
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
                      a.accessedEncs.has(
                        o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                      ),
                    ),
                    s.msgInfo.chat,
                    s.msgInfo.author,
                  )
                  .sendLogs("grouplidinfra-duplicate-skip-drop", {
                    sampling: 0.01,
                  });
          return p === S.SignalRetryable || p === S.UnknownDevice
            ? {
                result: o("WAWebHandleMsgTypes").E2EProcessResult.RETRY,
                retryCount: d.retryCount,
                retryReason: f,
                placeholderCreated: _,
                isOrphanAddon: l,
                failedEncType: d.e2eType,
              }
            : p === S.SignalDuplicateMessage
              ? {
                  result: o("WAWebHandleMsgTypes").E2EProcessResult
                    .SIGNAL_OLD_COUNTER_ERROR,
                  failedEnc: d,
                }
              : p === S.DeviceSentMessage
                ? {
                    result: o("WAWebHandleMsgTypes").E2EProcessResult
                      .PARSE_VALIDATION_ERROR,
                    e2eFailureReason:
                      m instanceof
                      o("WAWebHandleMsgError").DeviceSentMessageError
                        ? m.e2eFailureReason
                        : void 0,
                  }
                : p === S.InvalidProtobuf
                  ? {
                      result: o("WAWebHandleMsgTypes").E2EProcessResult
                        .PARSE_VALIDATION_ERROR,
                      e2eFailureReason:
                        (n = k(m)) == null ? void 0 : n.e2eFailureReason,
                    }
                  : p === S.HsmMismatch
                    ? {
                        result: o("WAWebHandleMsgTypes").E2EProcessResult
                          .HSM_MISMATCH,
                      }
                    : p === S.BroadcastEphSettings
                      ? {
                          result: o("WAWebHandleMsgTypes").E2EProcessResult
                            .RETRY,
                          retryCount: d.retryCount,
                          retryReason: f,
                          placeholderCreated: _,
                          e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
                            .E2E_FAILURE_REASON
                            .INVALID_BROADCAST_STANZA_ATTRIBUTE,
                        }
                      : p === S.OrphanBotMsg
                        ? u.error instanceof r("WAWebOrphanBotMsgError")
                          ? {
                              deferReason: u.error.reason,
                              result: o("WAWebHandleMsgTypes").E2EProcessResult
                                .DEFERRED,
                              targetMsgKey: u.error.targetMsgKey,
                            }
                          : {
                              result: o("WAWebHandleMsgTypes").E2EProcessResult
                                .PARSE_ERROR,
                            }
                        : p === S.BotMsgMissingSecret
                          ? {
                              result: o("WAWebHandleMsgTypes").E2EProcessResult
                                .PARSE_ERROR,
                              nackReason: $(),
                            }
                          : p === S.BotMsgDecryptFailure
                            ? {
                                result: o("WAWebHandleMsgTypes")
                                  .E2EProcessResult.PARSE_ERROR,
                                nackReason: P(s),
                              }
                            : p === S.Unknown
                              ? {
                                  result: o("WAWebHandleMsgTypes")
                                    .E2EProcessResult.PARSE_ERROR,
                                }
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      p,
                                  );
                                })();
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return r("justknobx")._("1714")
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function P(e) {
      return o("WAWebGroupAgentReceipts").isGroupAgentMsmsgDecryptNackEnabled(e)
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function N(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = e.msgInfo,
        i = e.msgMeta,
        l = r != null ? r : n;
      if (l != null) {
        var s = l.enc,
          u = l.error,
          c = l.errorType;
        if (T(e)) {
          var d;
          o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropExpired({
            msgInfo: a,
            msgMeta: i,
            enc: s,
            error: (d = k(u)) != null ? d : void 0,
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
            var m;
            o(
              "WAWebPostIncomingMessageDropMetric",
            ).postIncomingMessageDropInvalidProtobuf({
              msgInfo: a,
              msgMeta: i,
              enc: s,
              error: (m = k(u)) != null ? m : void 0,
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
    function M(t, n) {
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
          error: k(b),
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
          var L = k(b);
          L != null &&
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
                    sampling: L.sendLogs === !0 ? 0.01 : L.sendLogs,
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
                      L.sendLogs === !0 ? void 0 : { sampling: L.sendLogs },
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
            .tags("messaging");
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
    function w(e, t) {
      var n = t.pkOrMsgFailedEnc,
        a = t.skMsgFailedEnc,
        i = a != null ? a : n;
      if (
        i != null &&
        !(
          (i.error instanceof
            o("WAProtoEntryLimitError").ProtobufEntryLimitError ||
            (i.error instanceof
              o("WAWebHandleMsgError").MessageValidationError &&
              i.error.code === "sticker_pack_over_limit")) &&
          r("justknobx")._("7544")
        ) &&
        o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
      ) {
        var l = e.msgInfo.chat;
        if ((l.isUser() || l.isGroup()) && !T(e)) {
          var s = null;
          switch (i.errorType) {
            case S.SignalRetryable:
            case S.SignalDuplicateMessage:
            case S.BroadcastEphSettings:
            case S.UnknownDevice:
            case S.OrphanBotMsg:
              break;
            case S.DeviceSentMessage:
            case S.InvalidProtobuf: {
              s = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
              break;
            }
            case S.BotMsgMissingSecret: {
              var u;
              s =
                (u = $()) != null
                  ? u
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case S.BotMsgDecryptFailure: {
              var c;
              s =
                (c = P(e)) != null
                  ? c
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case S.HsmMismatch:
            case S.Unknown: {
              s = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
          }
          if (s != null) {
            var d = e.msgInfo.externalId;
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "messageDrop: insert a debug placeholder for ",
                    ", reason: ",
                    "",
                  ])),
                d,
                i.errorType,
              )
              .tags("messaging");
            var m = s;
            v.load().then(function (t) {
              t.processPlaceholderMsg({
                type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                msgInfo: e.msgInfo,
                nackReason: m,
              });
            });
          }
        }
      }
    }
    function A() {
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
    ((l.DecryptionErrorType = S), (l.createDecryptionHandler = I));
  },
  98,
);
