__d(
  "WAWebHandleDeferredBotOrphan",
  [
    "WALogger",
    "WAWap",
    "WAWebAddonQueryUtils",
    "WAWebCreateNackFromStanza",
    "WAWebDBProcessOrphansForNewMsg",
    "WAWebDBStoreMessageOrphans",
    "WAWebHandleMsgSendReceipt",
    "WAWebHandleMsgTypes.flow",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebPostIncomingMessageDropMetric",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.canNack,
            a = t.decryptResult,
            i = t.input,
            l = t.node,
            u = i.msgInfo,
            c = i.msgMeta,
            d = yield h(i, a, l);
          if (d)
            try {
              yield p(a);
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleDeferredBotOrphan: settling the freshly stored bot orphan failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
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
            .sendReceipt(u, c, m, { canNack: n })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "sendReceipt failed for deferred orphan bot message",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("send-receipt-orphan-bot-error", { sampling: 0.01 });
            }),
            u.offline != null &&
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.processMessageDecryptResult(m.result));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e.targetMsgKey);
          t != null &&
            (yield o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(
              t,
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e == null) return null;
          var n = r("WAWebMsgKey").fromString(e),
            a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([n]);
          return (t = a.get(n.toString())) != null ? t : null;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a, i;
          try {
            var l,
              s,
              d = e.msgInfo;
            ((a = babelHelpers.extends(
              {},
              o("WAWebMsgProcessingApiUtils").generateBaseMsg(d),
              {
                type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                kind: o("WAWebMsgType").MsgKind.PlaceholderMessage,
                subtype: "bot_orphan",
                botEditType:
                  (l = e.msgBotInfo) == null ? void 0 : l.botEditType,
                botEditTargetId:
                  (s = e.msgBotInfo) == null ? void 0 : s.botEditTargetId,
                botOrphanStanza: o("WAWap").encodeStanza(n),
              },
            )),
              (i = r("WAWebMsgKey").fromString(t.targetMsgKey)));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        y.apply(this, arguments)
      );
    }
    l.handleDeferredBotOrphan = d;
  },
  98,
);
