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
    async function g(t) {
      var n = t.canNack,
        a = t.decryptResult,
        i = t.input,
        l = t.node,
        u = i.msgInfo,
        c = i.msgMeta,
        d = await v(i, a, l);
      if (d) {
        await h(i, a.deferReason);
        try {
          await y(a);
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
          u.externalId,
          o("WAWebHandleMsgSendReceipt").sendReceipt(u, c, m, { canNack: n }),
          a.result,
        )
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
    }
    async function h(e, t) {
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
          await o(
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "showDeferredPlaceholder: the deferred placeholder could not be shown",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("bot-orphan-placeholder-failed", { sampling: 0.01 });
        }
    }
    async function y(e) {
      if (e.deferReason !== "secretless-target-row") {
        var t = await C(e.targetMsgKey);
        t != null &&
          (await o("WAWebDBProcessOrphansForNewMsg").processOrphansForNewMsg(
            t,
          ));
      }
    }
    async function C(e) {
      if (e == null) return null;
      var t = r("WAWebMsgKey").fromString(e),
        n = await b(t);
      if (n != null) return n;
      var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(t);
      return a == null ? null : b(a);
    }
    async function b(e) {
      var t,
        n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey([e]),
        r = (t = n.get(e.toString())) != null ? t : null;
      return r != null && o("WAWebCommonMsgUtils").isPlaceholderMsg(r.type)
        ? null
        : r;
    }
    async function v(e, t, n) {
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
            botEditType: (l = e.msgBotInfo) == null ? void 0 : l.botEditType,
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
            .sendLogs("store-orphan-bot-msg-build-failed", { sampling: 0.01 }),
          o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropInternalError(n),
          !1
        );
      }
      try {
        return (
          await o("WAWebDBStoreMessageOrphans").storeMessageOrphans(
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
    }
    function S(e) {
      if (e == null || e === p) return null;
      var t = Number(e);
      return Number.isFinite(t) && t > 0
        ? t
        : (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "storeOrphanBotMsg: unusable bot sender timestamp ",
                  "",
                ])),
              JSON.stringify(e.slice(0, _)),
            )
            .tags("messaging")
            .sendLogs("bot-orphan-sender-time-unparseable", { sampling: 0.01 }),
          null);
    }
    l.handleDeferredBotOrphan = g;
  },
  98,
);
