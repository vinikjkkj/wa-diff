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
      return v.load().then(function (t) {
        var n = t.processPlaceholderMsg;
        return n(e);
      });
    }
    function T(e, t) {
      t === void 0 && (t = I);
      var n = {
        accessedEncs: new Set(),
        pkOrMsgFailedEnc: null,
        skMsgFailedEnc: null,
      };
      return {
        handleError: function (r, a) {
          var t = E(a);
          (r.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            ? (n.skMsgFailedEnc = { enc: r, error: a, errorType: t })
            : (n.pkOrMsgFailedEnc = { enc: r, error: a, errorType: t }),
            w(e, { enc: r, error: a, errorType: t }));
        },
        canDecryptNext: function (t) {
          var e;
          r("gkx")("26258") || F();
          var o = (e = n.pkOrMsgFailedEnc) == null ? void 0 : e.errorType;
          return o != null && R.has(o)
            ? !1
            : (n.accessedEncs.add(t.e2eType), !0);
        },
        getResult: function (o, a) {
          return x({
            handlerState: n,
            hasInactiveMsg: o,
            isOrphanAddon: a,
            parsedMsgPayload: e,
            writePlaceholder: t,
          });
        },
      };
    }
    function D(e) {
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
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.handlerState,
            i = e.hasInactiveMsg,
            l = e.isOrphanAddon,
            s = e.parsedMsgPayload,
            u = e.writePlaceholder,
            c = (t = a.skMsgFailedEnc) != null ? t : a.pkOrMsgFailedEnc,
            d =
              c != null &&
              a.accessedEncs.has(
                o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
              ) &&
              a.skMsgFailedEnc == null;
          if (c == null || d)
            return {
              result: o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
              hasInactiveMsg: i,
              isOrphanAddon: l,
            };
          (M(s, a), A(s, a, u));
          var m = c.enc,
            p = c.error,
            _ = c.errorType,
            f = !1,
            g;
          return (
            (p instanceof o("WAWebSignalCommonErrors").SignalDecryptionError ||
              p instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError ||
              p instanceof
                o("WAWebEphemeralDecodeBroadcastSetting")
                  .BroadcastEphSettingsError) &&
              ((g = o("WAWebSendRetryReceiptJob").getRetryReasonFromError(p)),
              _ !== S.SignalDuplicateMessage
                ? m.hideFail ||
                  (f = yield u({
                    type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    msgMeta: s.msgMeta,
                    msgInfo: s.msgInfo,
                    placeholderType: o("WAWebHandleMsgTypes").PlaceholderType
                      .E2E,
                    placeholderAddReason: o(
                      "WAWebBackendJobsCommon",
                    ).getPlaceholderAddReason(p, s),
                  }))
                : s.msgInfo.chat.isGroup() &&
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
                    })),
            _ === S.SignalRetryable || _ === S.UnknownDevice
              ? {
                  result: o("WAWebHandleMsgTypes").E2EProcessResult.RETRY,
                  retryCount: m.retryCount,
                  retryReason: g,
                  placeholderCreated: f,
                  isOrphanAddon: l,
                  failedEncType: m.e2eType,
                }
              : _ === S.SignalDuplicateMessage
                ? {
                    result: o("WAWebHandleMsgTypes").E2EProcessResult
                      .SIGNAL_OLD_COUNTER_ERROR,
                    failedEnc: m,
                  }
                : _ === S.DeviceSentMessage
                  ? {
                      result: o("WAWebHandleMsgTypes").E2EProcessResult
                        .PARSE_VALIDATION_ERROR,
                      e2eFailureReason:
                        p instanceof
                        o("WAWebHandleMsgError").DeviceSentMessageError
                          ? p.e2eFailureReason
                          : void 0,
                    }
                  : _ === S.InvalidProtobuf
                    ? {
                        result: o("WAWebHandleMsgTypes").E2EProcessResult
                          .PARSE_VALIDATION_ERROR,
                        e2eFailureReason:
                          (n = k(p)) == null ? void 0 : n.e2eFailureReason,
                      }
                    : _ === S.HsmMismatch
                      ? {
                          result: o("WAWebHandleMsgTypes").E2EProcessResult
                            .HSM_MISMATCH,
                        }
                      : _ === S.BroadcastEphSettings
                        ? {
                            result: o("WAWebHandleMsgTypes").E2EProcessResult
                              .RETRY,
                            retryCount: m.retryCount,
                            retryReason: g,
                            placeholderCreated: f,
                            e2eFailureReason: o("WAWebWamEnumE2eFailureReason")
                              .E2E_FAILURE_REASON
                              .INVALID_BROADCAST_STANZA_ATTRIBUTE,
                          }
                        : _ === S.OrphanBotMsg
                          ? c.error instanceof r("WAWebOrphanBotMsgError")
                            ? {
                                deferReason: c.error.reason,
                                result: o("WAWebHandleMsgTypes")
                                  .E2EProcessResult.DEFERRED,
                                targetMsgKey: c.error.targetMsgKey,
                              }
                            : {
                                result: o("WAWebHandleMsgTypes")
                                  .E2EProcessResult.PARSE_ERROR,
                              }
                          : _ === S.BotMsgMissingSecret
                            ? {
                                result: o("WAWebHandleMsgTypes")
                                  .E2EProcessResult.PARSE_ERROR,
                                nackReason: P(),
                              }
                            : _ === S.BotMsgDecryptFailure
                              ? {
                                  result: o("WAWebHandleMsgTypes")
                                    .E2EProcessResult.PARSE_ERROR,
                                  nackReason: N(s),
                                }
                              : _ === S.Unknown
                                ? {
                                    result: o("WAWebHandleMsgTypes")
                                      .E2EProcessResult.PARSE_ERROR,
                                  }
                                : (function () {
                                    throw Error(
                                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                        _,
                                    );
                                  })()
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return r("justknobx")._("1714")
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function N(e) {
      return o("WAWebGroupAgentReceipts").isGroupAgentMsmsgDecryptNackEnabled(e)
        ? o("WAWebCreateNackFromStanza").NackReason.MissingMessageSecret
        : void 0;
    }
    function M(e, t) {
      var n = t.pkOrMsgFailedEnc,
        r = t.skMsgFailedEnc,
        a = e.msgInfo,
        i = e.msgMeta,
        l = r != null ? r : n;
      if (l != null) {
        var s = l.enc,
          u = l.error,
          c = l.errorType;
        if (D(e)) {
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
    function w(t, n) {
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
    function A(e, t, n) {
      var a = t.pkOrMsgFailedEnc,
        i = t.skMsgFailedEnc,
        l = i != null ? i : a;
      if (
        l != null &&
        !(
          (l.error instanceof
            o("WAProtoEntryLimitError").ProtobufEntryLimitError ||
            (l.error instanceof
              o("WAWebHandleMsgError").MessageValidationError &&
              l.error.code === "sticker_pack_over_limit")) &&
          r("justknobx")._("7544")
        ) &&
        o("WAWebMessagingGatingUtils").isMessageDropPlaceholderEnabled()
      ) {
        var s = e.msgInfo.chat;
        if ((s.isUser() || s.isGroup()) && !D(e)) {
          var u = null;
          switch (l.errorType) {
            case S.SignalRetryable:
            case S.SignalDuplicateMessage:
            case S.BroadcastEphSettings:
            case S.UnknownDevice:
            case S.OrphanBotMsg:
              break;
            case S.DeviceSentMessage:
            case S.InvalidProtobuf: {
              u = o("WAWebCreateNackFromStanza").NackReason.InvalidProtobuf;
              break;
            }
            case S.BotMsgMissingSecret: {
              var c;
              u =
                (c = P()) != null
                  ? c
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case S.BotMsgDecryptFailure: {
              var d;
              u =
                (d = N(e)) != null
                  ? d
                  : o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
            case S.HsmMismatch:
            case S.Unknown: {
              u = o("WAWebCreateNackFromStanza").NackReason.ParsingError;
              break;
            }
          }
          if (u != null) {
            var m = e.msgInfo.externalId;
            (o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "messageDrop: insert a debug placeholder for ",
                    ", reason: ",
                    "",
                  ])),
                m,
                l.errorType,
              )
              .tags("messaging"),
              n({
                type: o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER,
                msgInfo: e.msgInfo,
                nackReason: u,
              }));
          }
        }
      }
    }
    function F() {
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
    ((l.DecryptionErrorType = S), (l.createDecryptionHandler = T));
  },
  98,
);
