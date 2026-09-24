__d(
  "WAWebCoexV2MessageAckProjection",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      f,
      g = 1e3,
      h = new Set(),
      y = o("WABatcher").createSimpleBatcher(
        { delayMs: g },
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield F(e);
            return (G(t), []);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isOffline,
            r = e.msgIds,
            o = e.projectedAck,
            a = e.representedLid,
            i = y.accept({ msgIds: r, projectedAck: o, representedLid: a });
          if (!t) {
            yield (f || (f = n("Promise"))).all([i, v()]);
            return;
          }
          yield i;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return y
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
    function S() {
      return (f || (f = n("Promise"))).all([v(), E()]).then(r("WAWebNoop"));
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = e.filter(W);
            if (o.length !== 0) {
              var a = T(o, t);
              if ((r == null ? void 0 : r.deferUntilMessagePersisted) === !0) {
                var i = k(a);
                I(i, n);
                return;
              }
              yield x(yield a, n);
            }
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E() {
      return (f || (f = n("Promise"))).all(Array.from(h)).then(r("WAWebNoop"));
    }
    function k(e) {
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
        h.add(n),
        n.finally(function () {
          h.delete(n);
        }),
        t
      );
    }
    function I(e, t) {
      t != null &&
        e.then(function (e) {
          if (e != null)
            return t
              .then(function () {
                return z(e);
              })
              .catch(r("WAWebNoop"));
        });
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield t;
          var o = r("compactMap")(
            yield (f || (f = n("Promise"))).all(e.map(P)),
            function (e) {
              return e;
            },
          );
          return (yield w(o), o);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t != null && (yield t, yield z(e));
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = M(e);
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
              projectedAck: yield o(
                "WAWebApiCoexV2RelayReceiptStore",
              ).getCoexV2RelayMessageAck(i, a),
              representedLid: a,
            });
            return {
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] message ack reconciliation: receipt lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("coexv2-message-ack-reconciliation-lookup-failed"),
              { msgKey: e.id, receiptInfo: null, representedLid: a }
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      try {
        var t;
        return o("WAWebLidMigrationUtils").toUserLid(
          (t = e.preMatChat) != null ? t : e.id.remote,
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack reconciliation: represented LID lookup failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-message-ack-reconciliation-lid-lookup-failed"),
          null
        );
      }
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield F(
              r("compactMap")(e, function (e) {
                return e.receiptInfo;
              }),
            );
            G(t);
          } catch (e) {
            o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] message ack reconciliation: projection failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coexv2-message-ack-reconciliation-projection-failed");
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = B(e);
          return t.length === 0
            ? []
            : o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["message", "chat"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = e[0],
                          a = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(
                            t.map(function (e) {
                              return e.msgKey;
                            }),
                          ),
                          i = new Map();
                        t.forEach(function (e, t) {
                          q(e, a[t], i);
                        });
                        var l = r("compactMap")(
                          Array.from(i.entries()),
                          function (e) {
                            var t,
                              n = e[0],
                              r = e[1],
                              o = r.ack,
                              a = r.msg;
                            return o >
                              ((t = a.ack) != null
                                ? t
                                : Number.NEGATIVE_INFINITY)
                              ? { id: n, ack: o }
                              : null;
                          },
                        );
                        return (
                          l.length > 0 && (yield n.bulkCreateOrMerge(l)),
                          l.map(function (e) {
                            var t = e.ack,
                              n = e.id;
                            return { id: r("WAWebMsgKey").from(n), ack: t };
                          })
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
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
    function W(e) {
      var t;
      return (
        e.id.fromMe &&
        e.id.remote.isUser() &&
        ((t = e.senderWithDevice) == null
          ? void 0
          : t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) === !0 &&
        e.metaFrom != null &&
        o("WAWebUserPrefsMeUser").isMeAccount(e.metaFrom) &&
        e.isScheduledMsg !== !0 &&
        o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      );
    }
    function q(e, t, n) {
      try {
        var a = U(e, t);
        if (t == null || a == null) return;
        var i = a.toString(),
          l = n.get(i);
        (l == null || e.ack > l.ack) && n.set(i, { ack: e.ack, msg: t });
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] message ack projection: invalid stored message",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("coexv2-message-ack-projection-invalid-message");
      }
    }
    function U(e, t) {
      if (t == null) return null;
      var n = r("WAWebMsgKey").fromString(t.id);
      if (!V(t, n)) return null;
      var o = H(t, n);
      return o === e.msgId ? n : null;
    }
    function V(e, t) {
      return (
        t.fromMe &&
        t.remote.isUser() &&
        e.senderWithDevice != null &&
        o("WAWebWidFactory")
          .createWidFromWidLike(e.senderWithDevice)
          .equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        e.metaFrom != null &&
        o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWidFromWidLike(e.metaFrom),
        ) &&
        e.isScheduledMsg !== !0
      );
    }
    function H(e, t) {
      return e.latestEditMsgKey == null
        ? t.id
        : r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
    }
    function G(e) {
      if (e.length !== 0)
        try {
          o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
            updates: e,
          });
        } catch (e) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] message ack projection: frontend publish failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("coexv2-message-ack-projection-publish-failed");
        }
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t;
            try {
              t = yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["message", "chat"],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var t = yield o("WAWebDBBulkGetRootMsgs").bulkGetRootMsgs(
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
                  }),
                );
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
            G(t);
          }
        })),
        j.apply(this, arguments)
      );
    }
    ((l.projectCoexV2ReadReceiptAck = C),
      (l.flushCoexV2MessageAckProjections = v),
      (l.flushCoexV2OfflineMessageAckWork = S),
      (l.reconcileCoexV2ReceiptAcksAfterMessagePersisted = R));
  },
  98,
);
