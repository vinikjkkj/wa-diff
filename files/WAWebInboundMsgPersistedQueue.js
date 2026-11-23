__d(
  "WAWebInboundMsgPersistedQueue",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 3,
      _ = [],
      f = 0,
      g = [],
      h = Promise.resolve(),
      y = 0,
      C = !1,
      b = [],
      v = 0,
      S = 0,
      R = new Set(),
      L = Promise.resolve(),
      E = !1,
      k = {
        flush: async function () {
          (o("WAWebInboundMsgDrain").isInboundMsgDrainBatchBuffering() ||
            o(
              "WAWebInboundMsgMessageWriter",
            ).inboundMsgMessageWriter.createSnapshot(),
            !E &&
              (await V(),
              D() &&
                o("WAWebInboundMsgQueueODS").logInboundMsgSignalStateHeld()));
        },
      };
    function I(e) {
      var t = e.entity,
        n = e.prepared,
        r = e.receipt,
        a = e.stanzaId;
      if (E) {
        (o("WAWebInboundMsgQueueODS").logInboundMsgStoppedRowsDropped(1),
          o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover([a]));
        return;
      }
      _.push({
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
    function T() {
      return f > 0;
    }
    function D() {
      return E || _.length > 0 || f > 0 || v > 0 || S > 0;
    }
    function x() {
      ((E = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgQueueStopped(
          _.length + b.length,
        ),
        o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover(
          [].concat(_, b, g).map(function (e) {
            var t = e.stanzaId;
            return t;
          }),
        ),
        (g = []),
        (_ = []),
        (b = []),
        (v = 0));
    }
    async function $() {
      if (
        (await V(),
        await o("WAWebInboundMsgDrain").waitForInboundMsgDrainIdle(),
        !(S > 0))
      ) {
        if (v === 0) {
          await L;
          return;
        }
        var e = new (o("WAResolvable").Resolvable)();
        (R.add(e), await Promise.race([L, e.promise]), R.delete(e));
      }
    }
    async function P() {
      var t = g.filter(function (e) {
        var t = e.signalStateWrite;
        return o("WAWebSignalStateOneQueueFlushable").isSignalStateWriteDurable(
          t,
        );
      });
      g = g.filter(function (e) {
        var t = e.signalStateWrite;
        return !o(
          "WAWebSignalStateOneQueueFlushable",
        ).isSignalStateWriteDurable(t);
      });
      var n = o(
          "WAWebInboundMsgMessageWriter",
        ).inboundMsgMessageWriter.takeWrittenReceipts(),
        a = n.filter(function (e) {
          var t = e.duplicateMsgReceiptInfo;
          return t == null;
        });
      N(
        n.filter(function (e) {
          var t = e.duplicateMsgReceiptInfo;
          return t != null;
        }),
      );
      var i = [];
      (t.forEach(function (e) {
        var t = e.receipt,
          n = e.stanzaId;
        e: {
          var r = t;
          if (
            ((typeof r == "object" && r !== null) || typeof r == "function") &&
            r.kind === "immediate" &&
            r.onceDrained === !0 &&
            "send" in r
          ) {
            var o = r.send;
            M(o, n);
            break e;
          }
          if (
            ((typeof r == "object" && r !== null) || typeof r == "function") &&
            r.kind === "immediate" &&
            "send" in r
          ) {
            var l = r.send;
            i.push({ receiptCount: 1, sent: l() });
            break e;
          }
          if (
            ((typeof r == "object" && r !== null) || typeof r == "function") &&
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
        a.length > 0 && i.push({ receiptCount: a.length, sent: A(a) }));
      var l = await Promise.allSettled(
        i.map(function (e) {
          var t = e.sent;
          return t;
        }),
      );
      l.forEach(function (t, n) {
        t.status === "rejected" &&
          (o("WAWebInboundMsgQueueODS").logInboundMsgReceiptFailed(
            i[n].receiptCount,
          ),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] receipt failed after commit",
                ])),
            )
            .catching(r("getErrorSafe")(t.reason))
            .tags("messaging"));
      });
    }
    function N(e) {
      if (e.length !== 0) {
        o("WAWebInboundMsgQueueODS").logInboundMsgDuplicatesDeferred(e.length);
        var t = e
          .map(function (e) {
            var t = e.duplicateMsgReceiptInfo;
            return t == null ? void 0 : t.externalId;
          })
          .filter(Boolean);
        w(t)
          .then(function () {
            return A(e);
          })
          .then(function (e) {
            e.length > 0 &&
              o("WAWebInboundMsgQueueODS").logInboundMsgDuplicatesNacked(
                e.length,
              );
          })
          .catch(function (t) {
            (o("WAWebInboundMsgQueueODS").logInboundMsgDuplicateReceiptsFailed(
              e.length,
            ),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[inbound-msg-queue] duplicate receipts failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("messaging"));
          });
      }
    }
    function M(e, t) {
      w([t])
        .then(e)
        .catch(function (e) {
          (o("WAWebInboundMsgQueueODS").logInboundMsgReceiptFailed(1),
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[inbound-msg-queue] receipt held for the drain failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("messaging"));
        });
    }
    async function w(e) {
      var t = globalThis.performance.now();
      await $();
      var n = globalThis.performance.now() - t;
      e.forEach(function (e) {
        return o("WAWebMessageReceiveFlow").addMessageReceiveInboundDrainWait(
          e,
          n,
        );
      });
    }
    async function A(e) {
      var t = e
          .map(function (e) {
            var t, n, r;
            return (t = (n = e.receiptInfo) == null ? void 0 : n.externalId) !=
              null
              ? t
              : (r = e.duplicateMsgReceiptInfo) == null
                ? void 0
                : r.externalId;
          })
          .filter(Boolean),
        n = await o("WAWebSendOfflineDeliveryReceiptJob")
          .sendAggregateOfflineReceipts(e, { waitForDanglingReceiptWrite: !1 })
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
    }
    function F() {
      ((C = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgFallbackInPlace(),
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] commits keep failing, writing messages in place",
              ])),
          )
          .tags("messaging")
          .sendLogs("inbound-msg-fallback-in-place"),
        O());
    }
    function O() {
      var e;
      ((e = b).push.apply(e, _),
        (v += _.length),
        (_ = []),
        (L = L.then(B).then(q).catch(U)));
    }
    async function B() {
      await o("WAWebInboundMsgDrain").waitForInboundMsgDrainIdle();
      var e = b.shift();
      if (!(e == null || E)) {
        var t = await o("WAWebInboundMsgDrain").applyInboundMsgInPlace(
          e.entity,
          W,
        );
        if (E) {
          o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover([
            e.stanzaId,
          ]);
          return;
        }
        (v--,
          t &&
            g.push({
              receipt: e.receipt,
              signalStateWrite: e.signalStateWrite,
              stanzaId: e.stanzaId,
            }),
          await B());
      }
    }
    function W(e) {
      (S++,
        R.forEach(function (e) {
          return e.resolve();
        }));
      var t = function () {
        return (S--, q());
      };
      e.then(t, t).catch(U);
    }
    async function q() {
      E ||
        v > 0 ||
        S > 0 ||
        (await o("WAWebOneQueue")
          .getWAWebOneQueue()
          .enqueue(
            function () {
              return Promise.resolve();
            },
            { flush: !0, operationType: "wa_web_inbound_msg_in_place_flush" },
          ));
    }
    function U(e) {
      o("WALogger")
        .ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[inbound-msg-queue] writing rows in place failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .tags("messaging")
        .sendLogs("inbound-msg-in-place-write-failed");
    }
    function V() {
      var e = h.then(H);
      return ((h = e.then(r("WAWebNoop"), r("WAWebNoop"))), e);
    }
    async function H() {
      if (E || _.length === 0) return !1;
      if (C) return (O(), !1);
      var e = _;
      _ = [];
      var t = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: !0 },
              string: { operationType: "inbound_commit" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
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
        f++);
      try {
        await o("QPLFlow").endWith(t, function () {
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
        return E
          ? (o("WAWebInboundMsgQueueODS").logInboundMsgStoppedRowsDropped(
              e.length,
            ),
            o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover(n),
            !1)
          : (o("WAWebInboundMsgQueueODS").logInboundMsgCommitFailed(),
            (_ = [].concat(e, _)),
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
            ++y >= p && F(),
            !1);
      } finally {
        (f--,
          o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
            n,
            "inbound_commit_end",
          ));
      }
      if (
        ((y = 0),
        o("WAWebInboundMsgQueueODS").logInboundMsgsCommitted(e.length),
        E)
      )
        o("WAWebMessageReceiveFlow").endMessageReceiveWithTakeover(n);
      else {
        var a;
        (o("WAWebMessageReceiveFlow").handOffMessageReceiveWrites(n),
          (a = g).push.apply(
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
    }
    ((l.inboundMsgPersistedQueueFlushable = k),
      (l.queueInboundMsgRow = I),
      (l.isInboundMsgCommitInFlight = T),
      (l.hasUnwrittenInboundMsgs = D),
      (l.stopInboundMsgCommits = x),
      (l.waitForEarlierInboundMsgs = $),
      (l.sendCommittedInboundMsgReceipts = P));
  },
  98,
);
