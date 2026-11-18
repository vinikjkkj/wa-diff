__d(
  "WAWebHandleDeferredBotOrphan",
  [
    "WALogger",
    "WAWap",
    "WAWebAddonQueryUtils",
    "WAWebBotTypes",
    "WAWebCommonMsgUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebDBStoreMessageOrphans",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebMessageInsertDeferredPlaceholder",
    "WAWebMessageReceiveFlow",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPostIncomingMessageDropMetric",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "0",
      _ = 32,
      f = {
        "no-target-row":
          "bot reply deferred: waiting for the message it replies to",
        "placeholder-target-row":
          "bot reply deferred: the message it replies to has not decrypted yet",
        "secretless-target-row":
          "bot reply deferred: the message it replies to has no message secret",
        "wasa-root-secret-missing":
          "bot reply deferred: no Hatch key here and syncd had none to restore",
      };
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canNack,
            n = e.decryptResult,
            a = e.input,
            i = e.node,
            l = a.msgInfo,
            c = a.msgMeta,
            d = yield k(a, n, i);
          if (d) {
            yield y(a, n.deferReason);
            try {
              yield b(n);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "handleDeferredBotOrphan: settling the freshly stored bot orphan failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-settle-failed", { sampling: 0.01 });
            }
          }
          var m = d
            ? { result: o("WAWebHandleMsgTypes").E2EProcessResult.BACKFILL }
            : {
                result: o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_ERROR,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .UnhandledError,
              };
          (o("WAWebMessageReceiveFlow")
            .trackMessageReceiveReceipt(
              l.externalId,
              o("WAWebHandleMsgSendReceipt").sendReceipt(l, c, m, {
                canNack: t,
              }),
              n.result,
            )
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "sendReceipt failed for deferred orphan bot message",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("send-receipt-orphan-bot-error", { sampling: 0.01 });
            }),
            l.offline != null &&
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.processMessageDecryptResult(m.result));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = (n = e.msgBotInfo) == null ? void 0 : n.botEditType;
          if (
            !(
              a != null &&
              a !== o("WAWebBotTypes").BotMsgEditType.FIRST &&
              a !== o("WAWebBotTypes").BotMsgEditType.FULL
            )
          )
            try {
              yield o(
                "WAWebMessageInsertDeferredPlaceholder",
              ).maybeInsertDeferredPlaceholder({
                msgInfo: e.msgInfo,
                reason:
                  t != null
                    ? f[t]
                    : "bot reply deferred, waiting for its target message",
              });
            } catch (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "showDeferredPlaceholder: the deferred placeholder could not be shown",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-placeholder-failed", { sampling: 0.01 });
            }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.deferReason !== "secretless-target-row") {
            var t = yield S(e.targetMsgKey);
            t != null &&
              (yield o(
                "WAWebDBProcessOrphansForNewMsg",
              ).processOrphansForNewMsg(t));
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = r("WAWebMsgKey").fromString(e),
            n = yield L(t);
          if (n != null) return n;
          var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
          return a == null ? null : L(a);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([e]),
            r = (t = n.get(e.toString())) != null ? t : null;
          return r != null && o("WAWebCommonMsgUtils").isPlaceholderMsg(r.type)
            ? null
            : r;
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a, i;
          try {
            var l,
              s,
              u,
              c = e.msgInfo;
            ((a = babelHelpers.extends(
              {},
              o("WAWebMsgProcessingApiUtils").generateBaseMsg(c),
              {
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
                subtype: "bot_orphan",
                botEditType:
                  (l = e.msgBotInfo) == null ? void 0 : l.botEditType,
                botEditTargetId:
                  (s = e.msgBotInfo) == null ? void 0 : s.botEditTargetId,
                botSenderTimestampMs: T(
                  (u = e.msgBotInfo) == null ? void 0 : u.botSenderTimestampMs,
                ),
                botOrphanStanza: o("WAWap").encodeStanza(n),
              },
            )),
              (i = r("WAWebMsgKey").fromString(t.targetMsgKey)));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "storeOrphanBotMsg: could not build the orphan row",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("store-orphan-bot-msg-build-failed", {
                  sampling: 0.01,
                }),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropInternalError(n),
              !1
            );
          }
          try {
            return (
              yield o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
                [a],
                function () {
                  return i;
                },
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "storeOrphanBotMsg: failed to store orphan",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("store-orphan-bot-msg-failed", { sampling: 0.01 }),
              o(
                "WAWebPostIncomingMessageDropMetric",
              ).postIncomingMessageDropDBOperationFailed(n),
              !1
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(t) {
      if (t == null || t === p) return null;
      var n = Number(t);
      return Number.isFinite(n) && n > 0
        ? n
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "storeOrphanBotMsg: unusable bot sender timestamp ",
                  "",
                ])),
              JSON.stringify(t.slice(0, _)),
            )
            .tags("messaging")
            .sendLogs("bot-orphan-sender-time-unparseable", { sampling: 0.01 }),
          null);
    }
    l.handleDeferredBotOrphan = g;
  },
  98,
);
