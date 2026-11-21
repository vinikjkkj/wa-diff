__d(
  "WAWebInboundMsgPersistedQueue",
  [
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAResolvable",
    "WAWebInboundMsgDrain",
    "WAWebInboundMsgMessageWriter",
    "WAWebInboundMsgQueueODS",
    "WAWebInboundMsgQueuePref",
    "WAWebInboundMsgQueueStore",
    "WAWebMessageReceiveFlow",
    "WAWebNoop",
    "WAWebOneQueue",
    "WAWebPersistedQueueIds",
    "WAWebPersistedQueueQpl",
    "WAWebSendOfflineDeliveryReceiptJob",
    "WAWebSignalStateOneQueueFlushable",
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
      p,
      _ = 3,
      f = [],
      g = 0,
      h = [],
      y = (p || (p = n("Promise"))).resolve(),
      C = 0,
      b = !1,
      v = [],
      S = 0,
      R = 0,
      L = new Set(),
      E = p.resolve(),
      k = !1,
      I = {
        flush: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebInboundMsgDrain").isInboundMsgDrainBatchBuffering() ||
              o(
                "WAWebInboundMsgMessageWriter",
              ).inboundMsgMessageWriter.createSnapshot(),
              !k &&
                (yield X(),
                x() &&
                  o("WAWebInboundMsgQueueODS").logInboundMsgSignalStateHeld()));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
    function T(e) {
      var t = e.entity,
        n = e.prepared,
        r = e.receipt,
        a = e.stanzaId;
      if (k) {
        (o("WAWebInboundMsgQueueODS").logInboundMsgStoppedRowsDropped(1),
          o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover([a]));
        return;
      }
      f.push({
        entity: babelHelpers.extends({}, t, {
          queueId: o("WAWebPersistedQueueIds").nextPersistedQueueId(),
        }),
        prepared: n,
        receipt: r,
        signalStateWrite: o(
          "WAWebSignalStateOneQueueFlushable",
        ).getNextSignalStateWrite(),
        stanzaId: a,
      });
    }
    function D() {
      return g > 0;
    }
    function x() {
      return k || f.length > 0 || g > 0 || S > 0 || R > 0;
    }
    function $() {
      ((k = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgQueueStopped(
          f.length + v.length,
        ),
        o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover(
          [].concat(f, v, h).map(function (e) {
            var t = e.stanzaId;
            return t;
          }),
        ),
        (h = []),
        (f = []),
        (v = []),
        (S = 0));
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (yield X(),
            yield o("WAWebInboundMsgDrain").waitForInboundMsgDrainIdle(),
            !(R > 0))
          ) {
            if (S === 0) {
              yield E;
              return;
            }
            var e = new (o("WAResolvable").Resolvable)();
            (L.add(e),
              yield (p || (p = n("Promise"))).race([E, e.promise]),
              L.delete(e));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = h.filter(function (e) {
            var t = e.signalStateWrite;
            return o(
              "WAWebSignalStateOneQueueFlushable",
            ).isSignalStateWriteDurable(t);
          });
          h = h.filter(function (e) {
            var t = e.signalStateWrite;
            return !o(
              "WAWebSignalStateOneQueueFlushable",
            ).isSignalStateWriteDurable(t);
          });
          var t = o(
              "WAWebInboundMsgMessageWriter",
            ).inboundMsgMessageWriter.takeWrittenReceipts(),
            a = t.filter(function (e) {
              var t = e.duplicateMsgReceiptInfo;
              return t == null;
            });
          A(
            t.filter(function (e) {
              var t = e.duplicateMsgReceiptInfo;
              return t != null;
            }),
          );
          var i = [];
          (e.forEach(function (e) {
            var t = e.receipt,
              n = e.stanzaId;
            e: {
              var r = t;
              if (
                ((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                r.kind === "immediate" &&
                r.onceDrained === !0 &&
                "send" in r
              ) {
                var o = r.send;
                F(o, n);
                break e;
              }
              if (
                ((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                r.kind === "immediate" &&
                "send" in r
              ) {
                var l = r.send;
                i.push({ receiptCount: 1, sent: l() });
                break e;
              }
              if (
                ((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                r.kind === "aggregated" &&
                "receiptInfo" in r
              ) {
                var s = r.receiptInfo;
                a.push({ receiptInfo: s });
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  r,
              );
            }
          }),
            a.length > 0 && i.push({ receiptCount: a.length, sent: W(a) }));
          var l = yield (p || (p = n("Promise"))).allSettled(
            i.map(function (e) {
              var t = e.sent;
              return t;
            }),
          );
          l.forEach(function (e, t) {
            e.status === "rejected" &&
              (o("WAWebInboundMsgQueueODS").logInboundMsgReceiptFailed(
                i[t].receiptCount,
              ),
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[inbound-msg-queue] receipt failed after commit",
                    ])),
                )
                .catching(r("getErrorSafe")(e.reason))
                .tags("messaging"));
          });
        })),
        w.apply(this, arguments)
      );
    }
    function A(t) {
      if (t.length !== 0) {
        o("WAWebInboundMsgQueueODS").logInboundMsgDuplicatesDeferred(t.length);
        var n = t
          .map(function (e) {
            var t = e.duplicateMsgReceiptInfo;
            return t == null ? void 0 : t.externalId;
          })
          .filter(Boolean);
        O(n)
          .then(function () {
            return W(t);
          })
          .then(function (e) {
            e.length > 0 &&
              o("WAWebInboundMsgQueueODS").logInboundMsgDuplicatesNacked(
                e.length,
              );
          })
          .catch(function (n) {
            (o("WAWebInboundMsgQueueODS").logInboundMsgDuplicateReceiptsFailed(
              t.length,
            ),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[inbound-msg-queue] duplicate receipts failed",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .tags("messaging"));
          });
      }
    }
    function F(e, t) {
      O([t])
        .then(e)
        .catch(function (e) {
          (o("WAWebInboundMsgQueueODS").logInboundMsgReceiptFailed(1),
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[inbound-msg-queue] receipt held for the drain failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("messaging"));
        });
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = globalThis.performance.now();
          yield P();
          var n = globalThis.performance.now() - t;
          e.forEach(function (e) {
            return o(
              "WAWebMessageReceiveFlow",
            ).addMessageReceiveInboundDrainWait(e, n);
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
              .map(function (e) {
                var t, n, r;
                return (t =
                  (n = e.receiptInfo) == null ? void 0 : n.externalId) != null
                  ? t
                  : (r = e.duplicateMsgReceiptInfo) == null
                    ? void 0
                    : r.externalId;
              })
              .filter(Boolean),
            n = yield o("WAWebSendOfflineDeliveryReceiptJob")
              .sendAggregateOfflineReceipts(e, {
                waitForDanglingReceiptWrite: !1,
              })
              .catch(function (e) {
                throw (
                  o("WAWebMessageReceiveFlow").failMessageReceiveCheckpoint(t),
                  e
                );
              });
          return (
            o("WAWebMessageReceiveFlow").endMessageReceiveWithNack(n),
            o("WAWebMessageReceiveFlow").endMessageReceiveWithAggregatedReceipt(
              t.filter(function (e) {
                return !n.includes(e);
              }),
              { batchSize: e.length },
            ),
            n
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      ((b = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgFallbackInPlace(),
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] commits keep failing, writing messages in place",
              ])),
          )
          .tags("messaging")
          .sendLogs("inbound-msg-fallback-in-place"),
        V());
    }
    function V() {
      var e;
      ((e = v).push.apply(e, f),
        (S += f.length),
        (f = []),
        (E = E.then(H).then(j).catch(Q)));
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebInboundMsgDrain").waitForInboundMsgDrainIdle();
          var e = v.shift();
          if (!(e == null || k)) {
            var t = yield o("WAWebInboundMsgDrain").applyInboundMsgInPlace(
              e.entity,
              z,
            );
            if (k) {
              o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover([
                e.stanzaId,
              ]);
              return;
            }
            (S--,
              t &&
                h.push({
                  receipt: e.receipt,
                  signalStateWrite: e.signalStateWrite,
                  stanzaId: e.stanzaId,
                }),
              yield H());
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      (R++,
        L.forEach(function (e) {
          return e.resolve();
        }));
      var t = function () {
        return (R--, j());
      };
      e.then(t, t).catch(Q);
    }
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k ||
            S > 0 ||
            R > 0 ||
            (yield o("WAWebOneQueue")
              .getWAWebOneQueue()
              .enqueue(
                function () {
                  return (p || (p = n("Promise"))).resolve();
                },
                {
                  flush: !0,
                  operationType: "wa_web_inbound_msg_in_place_flush",
                },
              ));
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      o("WALogger")
        .ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[inbound-msg-queue] writing rows in place failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .tags("messaging")
        .sendLogs("inbound-msg-in-place-write-failed");
    }
    function X() {
      var e = y.then(Y);
      return ((y = e.then(r("WAWebNoop"), r("WAWebNoop"))), e);
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (k || f.length === 0) return !1;
          if (b) return (V(), !1);
          var e = f;
          f = [];
          var t = o("QPLFlow").startQPLFlow(
              o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
              {
                annotations: {
                  bool: { isPQ: !0 },
                  string: { operationType: "inbound_commit" },
                },
                timeoutInMs: o("WAWebPersistedQueueQpl")
                  .PERSISTED_QUEUE_TIMEOUT_MS,
              },
            ),
            n = e.map(function (e) {
              var t = e.stanzaId;
              return t;
            });
          (o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
            n,
            "inbound_commit_start",
          ),
            g++);
          try {
            yield o("QPLFlow").endWith(t, function () {
              return (
                o("WAWebInboundMsgQueuePref").markInboundMsgQueueMayHaveRows(),
                o("WAWebInboundMsgQueueStore").putNewInboundMsgs(
                  t,
                  e.map(function (e) {
                    var t = e.entity;
                    return t;
                  }),
                )
              );
            });
          } catch (t) {
            return k
              ? (o("WAWebInboundMsgQueueODS").logInboundMsgStoppedRowsDropped(
                  e.length,
                ),
                o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover(n),
                !1)
              : (o("WAWebInboundMsgQueueODS").logInboundMsgCommitFailed(),
                (f = [].concat(e, f)),
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-queue] commit failed, keeping ",
                        " rows for the next flush",
                      ])),
                    e.length,
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("messaging")
                  .sendLogs("inbound-msg-commit-failed", { sampling: 0.01 }),
                ++C >= _ && U(),
                !1);
          } finally {
            (g--,
              o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
                n,
                "inbound_commit_end",
              ));
          }
          if (
            ((C = 0),
            o("WAWebInboundMsgQueueODS").logInboundMsgsCommitted(e.length),
            k)
          )
            o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover(n);
          else {
            var a;
            (o("WAWebMessageReceiveFlow").handOffMessageReceiveWrites(n),
              (a = h).push.apply(
                a,
                e.map(function (e) {
                  var t = e.receipt,
                    n = e.signalStateWrite,
                    r = e.stanzaId;
                  return { receipt: t, signalStateWrite: n, stanzaId: r };
                }),
              ));
          }
          return (
            o("WAWebInboundMsgDrain").onInboundMsgCommitted(
              e.map(function (e) {
                var t = e.entity;
                return t;
              }),
              new Map(
                e.flatMap(function (e) {
                  var t = e.entity,
                    n = e.prepared;
                  return n != null ? [[t.queueId, n]] : [];
                }),
              ),
            ),
            !0
          );
        })),
        J.apply(this, arguments)
      );
    }
    ((l.inboundMsgPersistedQueueFlushable = I),
      (l.queueInboundMsgRow = T),
      (l.isInboundMsgCommitInFlight = D),
      (l.hasUnwrittenInboundMsgs = x),
      (l.stopInboundMsgCommits = $),
      (l.waitForEarlierInboundMsgs = P),
      (l.sendCommittedInboundMsgReceipts = M));
  },
  98,
);
