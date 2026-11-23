__d(
  "WAWebCoexV2MessageAckProjection",
  [
    "WABatcher",
    "WALogger",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebBackendApi",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2MessageAckProjectionEligibility",
    "WAWebDBBulkGetRootMsgs",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebNoop",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "compactMap",
    "getErrorSafe",
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
      f = 1e3,
      g = new Set(),
      h = o("WABatcher").createSimpleBatcher(
        { delayMs: f },
        async function (e) {
          var t = await x(e);
          return (B(t), []);
        },
      );
    async function y(e) {
      var t = e.isOffline,
        n = e.msgIds,
        r = e.projectedAck,
        o = e.representedLid,
        a = h.accept({ msgIds: n, projectedAck: r, representedLid: o });
      if (!t) {
        await Promise.all([a, C()]);
        return;
      }
      await a;
    }
    function C() {
      return h
        .runActiveBatch()
        .then(r("WAWebNoop"))
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack projection: failed to flush",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-message-ack-projection-flush-failed");
        });
    }
    function b() {
      return Promise.all([C(), S()]).then(r("WAWebNoop"));
    }
    async function v(e, t, n, r) {
      var o = e.filter(P);
      if (o.length !== 0) {
        var a = E(o, t);
        if ((r == null ? void 0 : r.deferUntilMessagePersisted) === !0) {
          var i = R(a);
          L(i, n);
          return;
        }
        await k(await a, n);
      }
    }
    function S() {
      return Promise.all(Array.from(g)).then(r("WAWebNoop"));
    }
    function R(e) {
      var t = e.catch(function (e) {
          return (
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] message ack reconciliation: deferred projection failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coexv2-message-ack-reconciliation-deferred-failed"),
            null
          );
        }),
        n = t.then(r("WAWebNoop"));
      return (
        g.add(n),
        n.finally(function () {
          g.delete(n);
        }),
        t
      );
    }
    function L(e, t) {
      t != null &&
        e.then(function (e) {
          if (e != null)
            return t
              .then(function () {
                return W(e);
              })
              .catch(r("WAWebNoop"));
        });
    }
    async function E(e, t) {
      await t;
      var n = r("compactMap")(await Promise.all(e.map(I)), function (e) {
        return e;
      });
      return (await D(n), n);
    }
    async function k(e, t) {
      t != null && (await t, await W(e));
    }
    async function I(e) {
      var t,
        n,
        a = T(e);
      if (
        a == null ||
        !o(
          "WAWebCoexV2MessageAckProjectionEligibility",
        ).isCoexV2MessageAckProjectionTarget(a)
      )
        return null;
      var i =
        (t = (n = e.latestEditMsgKey) == null ? void 0 : n.id) != null
          ? t
          : e.id.id;
      try {
        var l = o(
          "WAWebCoexV2MessageAckProjectionEligibility",
        ).getEligibleCoexV2MessageAckProjection({
          projectedAck: await o(
            "WAWebApiCoexV2RelayReceiptStore",
          ).getCoexV2RelayMessageAck(i, a),
          representedLid: a,
        });
        return l == null && !N(e)
          ? null
          : {
              msgKey: e.id,
              receiptInfo:
                l == null
                  ? null
                  : { msgIds: [i], projectedAck: l, representedLid: a },
              representedLid: a,
            };
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack reconciliation: receipt lookup failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("coexv2-message-ack-reconciliation-lookup-failed"),
          { msgKey: e.id, receiptInfo: null, representedLid: a }
        );
      }
    }
    function T(e) {
      try {
        var t;
        return o("WAWebLidMigrationUtils").toUserLid(
          (t = e.preMatChat) != null ? t : e.id.remote,
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack reconciliation: represented LID lookup failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-message-ack-reconciliation-lid-lookup-failed"),
          null
        );
      }
    }
    async function D(e) {
      try {
        var t = await x(
          r("compactMap")(e, function (e) {
            return e.receiptInfo;
          }),
        );
        B(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack reconciliation: projection failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("coexv2-message-ack-reconciliation-projection-failed");
      }
    }
    async function x(e) {
      var t = $(e);
      return t.length === 0
        ? []
        : o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message", "chat"], async function (e) {
              var n = e[0],
                a = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(
                  t.map(function (e) {
                    return e.msgKey;
                  }),
                ),
                i = new Map();
              t.forEach(function (e, t) {
                M(e, a[t], i);
              });
              var l = r("compactMap")(Array.from(i.entries()), function (e) {
                var t,
                  n = e[0],
                  r = e[1],
                  o = r.ack,
                  a = r.msg;
                return o > ((t = a.ack) != null ? t : Number.NEGATIVE_INFINITY)
                  ? { id: n, ack: o }
                  : null;
              });
              return (
                l.length > 0 && (await n.bulkCreateOrMerge(l)),
                l.map(function (e) {
                  var t = e.ack,
                    n = e.id;
                  return { id: r("WAWebMsgKey").from(n), ack: t };
                })
              );
            });
    }
    function $(e) {
      var t = [];
      for (var n of e) {
        var a = n.msgIds,
          i = n.projectedAck,
          l = n.representedLid,
          s = o(
            "WAWebCoexV2MessageAckProjectionEligibility",
          ).getEligibleCoexV2MessageAckProjection({
            projectedAck: i,
            representedLid: l,
          });
        if (s != null)
          for (var u of a)
            t.push({
              ack: s,
              msgId: u,
              msgKey: new (r("WAWebMsgKey"))({
                id: u,
                remote: l,
                fromMe: !0,
              }).toString(),
            });
      }
      return t;
    }
    function P(e) {
      return (
        e.id.fromMe &&
        e.id.remote.isUser() &&
        (!N(e) ||
          (e.metaFrom != null &&
            o("WAWebUserUtils").isMeAccount(e.metaFrom))) &&
        e.isScheduledMsg !== !0 &&
        o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      );
    }
    function N(e) {
      var t;
      return (
        ((t = e.senderWithDevice) == null
          ? void 0
          : t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) === !0
      );
    }
    function M(e, t, n) {
      try {
        var a = w(e, t);
        if (t == null || a == null) return;
        var i = a.toString(),
          l = n.get(i);
        (l == null || e.ack > l.ack) && n.set(i, { ack: e.ack, msg: t });
      } catch (e) {
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack projection: invalid stored message",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("coexv2-message-ack-projection-invalid-message");
      }
    }
    function w(e, t) {
      if (t == null) return null;
      var n = r("WAWebMsgKey").fromString(t.id);
      return A(t, n) && O(t, n).includes(e.msgId) ? n : null;
    }
    function A(e, t) {
      return (
        t.fromMe &&
        t.remote.isUser() &&
        (!F(e) ||
          (e.metaFrom != null &&
            o("WAWebUserUtils").isMeAccount(
              o("WAWebWidFactory").createWidFromWidLike(e.metaFrom),
            ))) &&
        e.isScheduledMsg !== !0
      );
    }
    function F(e) {
      return (
        e.senderWithDevice != null &&
        o("WAWebWidFactory")
          .createWidFromWidLike(e.senderWithDevice)
          .equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
      );
    }
    function O(e, t) {
      if (e.latestEditMsgKey == null) return [t.id];
      var n = r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
      return F(e) ? [n] : [t.id, n];
    }
    function B(e) {
      if (e.length !== 0)
        try {
          o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
            updates: e,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack projection: frontend publish failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-message-ack-projection-publish-failed");
        }
    }
    async function W(e) {
      if (e.length !== 0) {
        var t;
        try {
          t = await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message", "chat"], async function () {
              var t = await o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(
                e.map(function (e) {
                  return e.msgKey.toString();
                }),
              );
              return r("compactMap")(t, function (t, n) {
                var a,
                  i = (a = e[n]) == null ? void 0 : a.representedLid;
                if (t == null || i == null) return null;
                var l = o(
                  "WAWebCoexV2MessageAckProjectionEligibility",
                ).getEligibleCoexV2MessageAckProjection({
                  projectedAck: t.ack,
                  representedLid: i,
                });
                return l == null
                  ? null
                  : { id: r("WAWebMsgKey").from(t.id), ack: l };
              });
            });
        } catch (e) {
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack reconciliation: refresh failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-message-ack-reconciliation-refresh-failed");
          return;
        }
        B(t);
      }
    }
    ((l.projectCoexV2ReadReceiptAck = y),
      (l.flushCoexV2MessageAckProjections = C),
      (l.flushCoexV2OfflineMessageAckWork = b),
      (l.reconcileCoexV2ReceiptAcksAfterMessagePersisted = v));
  },
  98,
);
