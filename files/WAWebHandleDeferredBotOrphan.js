__d(
  "WAWebHandleDeferredBotOrphan",
  [
    "WALogger",
    "WAWap",
    "WAWebAddonQueryUtils",
    "WAWebCommonMsgUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebDBStoreMessageOrphans",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPostIncomingMessageDropMetric",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.canNack,
            n = e.decryptResult,
            a = e.input,
            i = e.node,
            l = a.msgInfo,
            c = a.msgMeta,
            d = yield b(a, n, i);
          if (d)
            try {
              yield _(n);
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
          var m = d
            ? {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.BACKFILL,
              }
            : {
                result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                  .PARSE_ERROR,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .UnhandledError,
              };
          (o("WAWebHandleMsgSendReceipt")
            .sendReceipt(l, c, m, { canNack: t })
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield g(e.targetMsgKey);
          t != null &&
            (yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(
              t,
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = r("WAWebMsgKey").fromString(e),
            n = yield y(t);
          if (n != null) return n;
          var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
          return a == null ? null : y(a);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([e]),
            r = (t = n.get(e.toString())) != null ? t : null;
          return r != null && o("WAWebCommonMsgUtils").isPlaceholderMsg(r.type)
            ? null
            : r;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a, i;
          try {
            var l,
              s,
              u,
              m = e.msgInfo;
            ((a = babelHelpers.extends(
              {},
              o("WAWebMsgProcessingApiUtils").generateBaseMsg(m),
              {
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
                subtype: "bot_orphan",
                botEditType:
                  (l = e.msgBotInfo) == null ? void 0 : l.botEditType,
                botEditTargetId:
                  (s = e.msgBotInfo) == null ? void 0 : s.botEditTargetId,
                botSenderTimestampMs: S(
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
        v.apply(this, arguments)
      );
    }
    function S(t) {
      if (t == null) return null;
      var n = Number(t);
      return Number.isFinite(n) && n > 0
        ? n
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "storeOrphanBotMsg: unusable bot sender timestamp",
                ])),
            )
            .tags("messaging")
            .sendLogs("bot-orphan-sender-time-unparseable", { sampling: 0.01 }),
          null);
    }
    l.handleDeferredBotOrphan = m;
  },
  98,
);
