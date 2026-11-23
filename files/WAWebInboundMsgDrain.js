__d(
  "WAWebInboundMsgDrain",
  [
    "NativeSchedulerTickStrategy",
    "QPLFlow",
    "TaskScheduler",
    "TaskSchedulerPriority",
    "WAArrayChunk",
    "WACustomError",
    "WALogger",
    "WAPromiseReduce",
    "WAPromiseTimeout",
    "WAResolvable",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendEventBus",
    "WAWebDBCreateLidPnMappings",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgParser",
    "WAWebHandleMsgProcess",
    "WAWebHandleMsgTypes",
    "WAWebHandleOrphansForNewMsg",
    "WAWebInboundMsgChatIndex",
    "WAWebInboundMsgDrainActiveChat",
    "WAWebInboundMsgDrainOrder",
    "WAWebInboundMsgDrainUIUpdate",
    "WAWebInboundMsgLidMetadata",
    "WAWebInboundMsgMessageWriter",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebInboundMsgQueueGating",
    "WAWebInboundMsgQueueODS",
    "WAWebInboundMsgQueueRow",
    "WAWebInboundMsgQueueStore",
    "WAWebInboundMsgRowCodec",
    "WAWebInboundMsgRowPlaceholder",
    "WAWebInboundStanzaRowHandlers",
    "WAWebMessageProcessPlaceholder",
    "WAWebMessageQueueImpl",
    "WAWebMsgProcessingDecryptApi",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOneQueue",
    "WAWebPersistedQueueQpl",
    "WAWebProcessMsgInfoForLid",
    "WAWormQueueDef",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["isOffline"],
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
      v,
      S,
      R,
      L = 5,
      E = 1e3,
      k = 3e4,
      I = 5,
      T = 6e4,
      D = 1e3,
      x = 0.01,
      $ = 300,
      P = !1,
      N = !1,
      M = !1,
      w = !1,
      A = !1,
      F = !1,
      O = !1,
      B = [],
      W = !1,
      q = 0,
      U = !1,
      V = 0,
      H = !1,
      G = 0,
      z = new Set(),
      j = E,
      K = [],
      Q = new Set(),
      X = !1,
      Y = null,
      J = new Set(),
      Z = new Map(),
      ee = null,
      te = !0,
      ne = null,
      re = null,
      oe = null,
      ae = null;
    function ie() {
      P ||
        ((P = !0),
        (W = !0),
        o(
          "WAWebInboundMsgDrainActiveChat",
        ).setInboundMsgDrainChatOpenedListener(function (e) {
          o("WAWebInboundMsgChatIndex").hasQueuedInboundMsgs(e) && Ie();
        }),
        Se());
    }
    function le() {
      var e;
      ((N = !0), G++, Z.clear(), (e = re) == null || e.resolve(), Me());
    }
    function se(e, t) {
      var n = { abandoned: !1 },
        r = ue(e, 1, n);
      return o("WAPromiseTimeout")
        .promiseTimeout(r, T)
        .catch(function (e) {
          if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
          return ((n.abandoned = !0), de(), t(r), !1);
        });
    }
    async function ue(e, t, n) {
      try {
        var a = r("nullthrows")(
            await lt(e, { batched: !1, batchMsgIds: new Set() }),
          ),
          i = a.writes;
        return (
          await ce(i),
          await o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
          (X = !1),
          !0
        );
      } catch (a) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] writing a row in place failed, attempt ",
                  "",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(a))
            .tags("messaging"),
          n.abandoned || X || t >= L
            ? (n.abandoned || (X = !0), await St(e, t), !1)
            : (await new Promise(function (e) {
                return globalThis.setTimeout(e, Pe(t));
              }),
              ue(e, t + 1, n))
        );
      }
    }
    async function ce(e) {
      (o("WAWebInboundMsgMessageWriter")
        .getInboundMsgDrainMessageCache()
        .createSnapshot(),
        await Promise.all(e));
    }
    function de() {
      ((X = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgInPlaceWriteAbandoned(),
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] writing a row in place is stuck, abandoning it",
              ])),
          )
          .tags("messaging")
          .sendLogs("inbound-msg-in-place-write-stuck"));
    }
    function me(e, t) {
      (t == null ||
        t.forEach(function (e, t) {
          N || pe(t, e);
        }),
        o("WAWebInboundMsgChatIndex").addQueuedInboundMsgs(e),
        (W = !0),
        q++,
        ke(),
        Se());
    }
    function pe(e, t) {
      if (Z.size >= D) {
        var n = Z.keys().next().value;
        n != null && Z.delete(n);
      }
      Z.set(e, t);
    }
    function _e() {
      return ae === G;
    }
    function fe() {
      return F;
    }
    function ge() {
      return W || !F;
    }
    function he() {
      return F
        ? Promise.resolve()
        : new Promise(function (e) {
            B.push(e);
          });
    }
    function ye() {
      return H || N || !W
        ? Promise.resolve()
        : new Promise(function (e) {
            K.push(e);
          });
    }
    function Ce(e) {
      if (
        (o("WAWebInboundMsgDrainOrder").takeInboundMsgDrainStartupChats(),
        H ||
          N ||
          !W ||
          !o(
            "WAWebInboundMsgDrainOrder",
          ).hasQueuedInboundMsgDrainStartupChats())
      )
        return Promise.resolve();
      var t = new (o("WAResolvable").Resolvable)();
      return (
        (ne = t),
        Ie(),
        o("WAPromiseTimeout")
          .promiseTimeout(t.promise, e)
          .catch(r("WAWebNoop"))
          .then(function () {
            ne === t && (ne = null);
          })
      );
    }
    function be() {
      var e, t;
      return o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || N
        ? Promise.resolve()
        : (oe != null ||
            (oe = r("WAWebEventsWaitForMainStreamReadyMd")().then(function () {
              oe = null;
            })),
          (e = (t = re) == null ? void 0 : t.promise) != null
            ? e
            : Promise.resolve());
    }
    function ve() {
      if (
        !o("WAWebInboundMsgDrainOrder").hasQueuedInboundMsgDrainStartupChats()
      ) {
        var e;
        (e = ne) == null || e.resolve();
      }
    }
    function Se() {
      ((A = !0), w || Re());
    }
    function Re() {
      if (!N) {
        w = !0;
        var e = oe;
        if (e != null) {
          e.then(function () {
            ((w = !1), Re());
          });
          return;
        }
        A = !1;
        var t = ++G,
          n = new (o("WAResolvable").Resolvable)();
        re = n;
        var a = Te();
        (o("WAWebInboundMsgDrainOrder").isVisibleChatsSelector(a)
          ? Le(t, a)
          : Ee(t, a)
        ).then(
          function (e) {
            (n.resolve(), t === G && xe(e));
          },
          function (e) {
            (n.resolve(),
              t === G &&
                (o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-queue] drain batch failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("messaging")
                  .sendLogs("inbound-msg-drain-failed", { sampling: x }),
                xe("failed")));
          },
        );
      }
    }
    async function Le(e, t) {
      return (
        await o("NativeSchedulerTickStrategy")
          .makeNativeSchedulerTickStrategy()
          .tick(o("TaskSchedulerPriority").HIGH_PRIORITY),
        e === G ? Ae(e, t, null) : "more"
      );
    }
    function Ee(e, t) {
      var n = new (o("WAResolvable").Resolvable)();
      ee = n;
      var r = "waiting",
        a = Dt().run(
          function () {
            return r === "gave_way" || e !== G
              ? Promise.resolve("more")
              : ((r = "started"),
                (te = !0),
                n.resolveWasCalled() &&
                  ((n = new (o("WAResolvable").Resolvable)()), (ee = n)),
                Ae(e, t, n));
          },
          {
            name: "drain_inbound_msgs",
            priority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
          },
        ).promise,
        i = function (l) {
          return l.promise.then(function () {
            if (r !== "waiting") return a;
            var t = te ? De() : null;
            return t == null
              ? ((n = new (o("WAResolvable").Resolvable)()), (ee = n), i(n))
              : ((r = "gave_way"), (te = !1), Le(e, t));
          });
        },
        l = i(n),
        s = a.then(
          function (e) {
            return r === "gave_way" ? l : e;
          },
          function (e) {
            return r === "gave_way" ? l : Promise.reject(e);
          },
        );
      return Promise.race([s, l]).finally(function () {
        ee === n && (ee = null);
      });
    }
    function ke() {
      if (De() != null) {
        var e;
        (e = ee) == null || e.resolve();
      }
    }
    function Ie() {
      ((te = !0), ke());
    }
    function Te() {
      return M
        ? o("WAWebInboundMsgDrainOrder").selectInboundMsgDrainChats()
        : o("WAWebInboundMsgDrainOrder").FIFO_SELECTOR;
    }
    function De() {
      return M
        ? o("WAWebInboundMsgDrainOrder").selectInboundMsgDrainVisibleChats()
        : null;
    }
    function xe(e) {
      ((w = !1), e !== "failed" && (V = 0));
      e: {
        if (e === "more") {
          ((H = !1), Re());
          break e;
        }
        if (e === "retry") {
          ((H = !1), Ne(j));
          break e;
        }
        if (e === "failed") {
          $e();
          break e;
        }
        if (e === "empty") {
          if (((H = !1), A)) {
            Re();
            return;
          }
          Me();
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function $e() {
      (V++,
        V >= I &&
          !H &&
          ((H = !0),
          o("WAWebInboundMsgQueueODS").logInboundMsgDrainStalled(),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] drain keeps failing, releasing its waiters",
                ])),
            )
            .tags("messaging")
            .sendLogs("inbound-msg-drain-stalled"),
          Me()),
        Ne(Pe(V)));
    }
    function Pe(e) {
      return Math.min(E * Math.pow(2, e - 1), k);
    }
    function Ne(e) {
      ((w = !0),
        globalThis.setTimeout(function () {
          ((w = !1), Re());
        }, e));
    }
    function Me() {
      var e,
        t = K;
      ((K = []),
        t.forEach(function (e) {
          return e();
        }),
        (e = ne) == null || e.resolve(),
        o("WAWebInboundMsgDrainOrder").clearInboundMsgDrainStartupChats());
    }
    function we() {
      F = !0;
      var e = B;
      ((B = []),
        e.forEach(function (e) {
          return e();
        }));
    }
    function Ae(e, t, n) {
      var r = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: !0 },
              string: { drainTier: t.tier, operationType: "inbound_drain" },
            },
            timeoutInMs:
              (T * Ke()) / o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
          },
        ),
        a = {
          applying: null,
          flow: r,
          generation: e,
          giveWay: n,
          oneQueueYieldMs: 0,
          selector: t,
        };
      return (
        Oe(a, null),
        o("QPLFlow")
          .endWith(r, function () {
            return We(a).finally(function () {
              r.addAnnotations({
                int: { oneQueueYieldMs: Math.round(a.oneQueueYieldMs) },
              });
            });
          })
          .finally(function () {
            globalThis.clearTimeout(a.stuckTimer);
          })
      );
    }
    function Fe(e) {
      var t;
      if (!Be(e)) {
        (H || o("WAWebInboundMsgQueueODS").logInboundMsgDrainStalled(),
          o("WAWebInboundMsgQueueODS").logInboundMsgDrainBatchAbandoned(),
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] drain batch is stuck, abandoning it",
                ])),
            )
            .tags("messaging")
            .sendLogs("inbound-msg-drain-stuck"));
        var n = e.applying;
        (n != null && z.add(n.queueId),
          o("WAWebInboundMsgMessageWriter")
            .getInboundMsgDrainMessageCache()
            .createSnapshot(),
          (H = !0),
          Me(),
          G++,
          (t = re) == null || t.resolve(),
          (w = !1),
          n == null ? $e() : Re());
      }
    }
    function Oe(e, t) {
      ((e.applying = t),
        globalThis.clearTimeout(e.stuckTimer),
        (e.stuckTimer = globalThis.setTimeout(function () {
          return Fe(e);
        }, T)));
    }
    function Be(e) {
      return e.generation !== G;
    }
    async function We(e) {
      var t = e.selector.chatKeys;
      if (t.length > 0) return qe(e, t);
      var n = q,
        r = await je(
          e.flow,
          o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
        );
      return Be(e)
        ? "retry"
        : ((r.length === 0 ||
            !o("WAWebInboundMsgQueueStore").isLeftoverInboundMsg(
              r[0].queueId,
            )) &&
            (M = !0),
          r.length > 0 ? Ye(e, r) : (n === q && ((W = !1), Me(), Ue()), He(e)));
    }
    async function qe(e, t) {
      var n = await o("WAWebInboundMsgQueueStore").readInboundMsgsForChats(
        e.flow,
        t,
        o("WAWebInboundMsgChatIndex").getChatRowRange(),
        Ke(),
        Qe,
      );
      if (Be(e)) return "retry";
      (n.forEach(function (e, t) {
        e.length === 0 &&
          o("WAWebInboundMsgChatIndex").forgetQueuedInboundMsgChat(t);
      }),
        ve());
      var r = Array.from(n.values()).flat();
      return r.length === 0 ? "more" : Ye(e, r, { orderedByChat: !0 });
    }
    function Ue() {
      var e = Y,
        t = J;
      ((Y = null),
        (J = new Set()),
        !(e == null || t.size === 0) &&
          Ve(
            e.filter(function (e) {
              return t.has(e.id.id);
            }),
          ));
    }
    function Ve(e) {
      o("WAPromiseReduce").promiseReduce(
        o("WAArrayChunk").chunk(
          e,
          o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
        ),
        async function (e, t) {
          try {
            await Promise.all(
              t.map(function (e) {
                return o("WAWebHandleOrphansForNewMsg").handleOrphansForNewMsg(
                  e,
                );
              }),
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[inbound-msg-queue] replaying the orphans of drained messages failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .tags("messaging")
              .sendLogs("inbound-msg-orphan-replay-failed", { sampling: x });
          }
        },
        void 0,
      );
    }
    async function He(e) {
      var t = F
        ? null
        : await o("WAWebInboundMsgQueueStore").readOldestInboundMsg(e.flow);
      if (
        (!F && t == null && we(),
        !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd)
      )
        return (ze(), "empty");
      var n = await je(
        e.flow,
        o("WAWebInboundMsgQueueRow").InboundRowPriority.LOW,
      );
      return n.length > 0 ? Ye(e, n) : (Ge(t), "empty");
    }
    function Ge(e) {
      O ||
        e == null ||
        Xe(e) ||
        ((O = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgUndrainableRowsLeft());
    }
    function ze() {
      U ||
        ((U = !0),
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
          function () {
            ((U = !1), Se());
          },
        ));
    }
    function je(e, t) {
      return o("WAWebInboundMsgQueueStore").readInboundMsgs(e, t, Ke(), Xe);
    }
    function Ke() {
      return o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
        ? $
        : o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT;
    }
    function Qe(e) {
      return (
        e.priority === o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL &&
        Xe(e)
      );
    }
    function Xe(e) {
      var t = e.row;
      return t.kind === "message"
        ? t.version === 1 || t.version === 2
        : t.kind === "stanza" &&
            t.version === 1 &&
            o("WAWebInboundStanzaRowHandlers").hasInboundStanzaHandler(
              t.handler,
            );
    }
    async function Ye(e, t, n) {
      var r,
        a = n === void 0 ? {} : n,
        i = a.orderedByChat,
        l = i === void 0 ? !1 : i,
        s = o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled(),
        u = await Ze(e, Je(t), s),
        c = u.applied,
        d = u.failed,
        m = await it(c);
      if (m == null) return "failed";
      if (s) {
        (Oe(e, null),
          await o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb());
        var p = c.slice(0, m.written.length);
        (await o("WAWebInboundMsgDrainUIUpdate").updateUIOfDrainedBatch(
          p.flatMap(function (e) {
            var t = e.postprocess;
            return t;
          }),
        ),
          Ve(
            p.flatMap(function (e) {
              var t = e.msgsForOrphanDrain;
              return t;
            }),
          ));
      }
      ((await Ct(e, m.written)) &&
        (tt(m.written),
        o("WAWebInboundMsgQueueODS").logInboundMsgCopRowsDrained(
          e.selector.tier,
          m.written.length,
        ),
        e.flow.addAnnotations({ int: { rowCount: m.written.length } }),
        et(c.slice(0, m.written.length), l)),
        Be(e) ||
          m.sharedFailures.forEach(function (e) {
            var t = e.queueId;
            Q.add(t);
          }));
      var _ = (r = m.failed) != null ? r : d;
      return _ == null ? "more" : bt(e, _);
    }
    function Je(e) {
      var t = e.findIndex(function (e) {
        var t = e.queueId;
        return Q.has(t);
      });
      return t === -1 ? e : e.slice(0, t === 0 ? 1 : t);
    }
    async function Ze(e, t, n) {
      if (!n) return nt(e, t, !1);
      ae = e.generation;
      try {
        var r = await nt(e, t, !0);
        return (
          await o("WAWebInboundMsgLidMetadata").writeInboundMsgLidMetadata(
            r.applied.flatMap(function (e) {
              var t = e.lidMetadataUpdates;
              return t;
            }),
          ),
          r
        );
      } finally {
        ae === e.generation && (ae = null);
      }
    }
    function et(e, t) {
      t && (Y != null || (Y = []));
      var n = Y;
      n != null &&
        e.forEach(function (e) {
          var t = e.addOnParentIds,
            r = e.msgsForOrphanReplay;
          (n.push.apply(n, r),
            t.forEach(function (e) {
              return J.add(e);
            }));
        });
    }
    function tt(e) {
      o("WAWebInboundMsgQueueODS").logInboundMsgsDrained(e.length);
      var t = e.filter(function (e) {
        var t = e.queueId;
        return o("WAWebInboundMsgQueueStore").isLeftoverInboundMsg(t);
      }).length;
      t > 0 && o("WAWebInboundMsgQueueODS").logInboundMsgRowsLeftAtStart(t);
    }
    async function nt(e, t, n) {
      var a = [],
        i = new Set(),
        l = !1,
        s = !1,
        u = await o("WAPromiseReduce").promiseReduce(
          t,
          async function (t, u) {
            if (t != null || l || s || Be(e)) return t;
            if (at(u)) return u;
            if (((l = await rt(e, a.length > 0)), Be(e))) return null;
            if (l) return (Oe(e, null), null);
            Oe(e, u);
            try {
              var c = await lt(u, { batched: n, batchMsgIds: i });
              if (c == null) return ((s = !0), null);
              a.push(babelHelpers.extends({ entity: u }, c));
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-queue] row failed, attempt ",
                        "",
                      ])),
                    u.attemptCount + 1,
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("messaging"),
                u
              );
            } finally {
              Oe(e, null);
            }
            return null;
          },
          null,
        );
      return { applied: a, failed: u };
    }
    async function rt(e, t) {
      var n = e.giveWay;
      if (n == null) return !1;
      var r = function () {
        return n.resolveWasCalled() && De() != null;
      };
      if (
        !r() &&
        o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() !=
          null &&
        o("WAWebOneQueue").hasQueuedOneQueueTasks()
      ) {
        var a = globalThis.performance.now();
        (await (n.resolveWasCalled()
          ? ot(e)
          : Promise.race([ot(e), n.promise])),
          (e.oneQueueYieldMs += globalThis.performance.now() - a));
      }
      return t && r();
    }
    function ot(e) {
      return (
        globalThis.clearTimeout(e.stuckTimer),
        o("NativeSchedulerTickStrategy")
          .makeNativeSchedulerTickStrategy()
          .tick(o("TaskSchedulerPriority").NORMAL_PRIORITY)
      );
    }
    function at(e) {
      return z.delete(e.queueId)
        ? (o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] a batch got stuck applying this row",
                ])),
            )
            .tags("messaging"),
          !0)
        : !1;
    }
    async function it(e) {
      var t = e.map(function (e) {
        var t = e.entity;
        return t;
      });
      if (e.length === 0)
        return { failed: null, sharedFailures: [], written: t };
      var n = o(
        "WAWebInboundMsgMessageWriter",
      ).getInboundMsgDrainMessageCache();
      n.createSnapshot();
      var a = await Promise.allSettled(
          e.map(function (e) {
            var t = e.writes;
            return Promise.all(t);
          }),
        ),
        i = a.findIndex(function (e) {
          var t = e.status;
          return t === "rejected";
        }),
        l = a[i];
      if ((l == null ? void 0 : l.status) !== "rejected")
        return { failed: null, sharedFailures: [], written: t };
      if (
        (o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] message write failed",
              ])),
          )
          .catching(r("getErrorSafe")(l.reason))
          .tags("messaging"),
        o("WAWebInboundMsgQueueODS").logInboundMsgWriteFailed(),
        n.isFailClosed())
      )
        return null;
      var s = t.filter(function (e, t) {
        return a[t].status === "rejected";
      });
      return {
        failed: s.length > 1 ? null : t[i],
        sharedFailures: s.length > 1 ? s : [],
        written: t.slice(0, i),
      };
    }
    async function lt(e, t) {
      var n = e.addedAtMs,
        r = e.queueId,
        a = e.row,
        i = t.batched,
        l = t.batchMsgIds;
      if (a.kind === "stanza") return st(await ft(a));
      var s = gt(r, n),
        u = s != null ? s : await ht(a, r, n, i);
      if (i && ut(u, l)) return null;
      (dt(u, l),
        o("WAWebInboundMsgQueueODS").logInboundMsgRowApplied(
          s != null ? "prepared" : "replayed",
        ));
      var c = u.lidMetadataUpdates,
        d = u.msgInfo,
        m = u.msgMeta,
        p = u.placeholder,
        _ = u.prepared,
        f = [],
        g = [],
        h = [],
        y = [],
        C = [];
      if (
        (await o("WAPromiseReduce").promiseReduce(
          _,
          async function (e, t) {
            var n = pt(t.info, i),
              r = n.flushedByCaller,
              a = n.info,
              l = await o("WAWebHandleMsgProcess").applyPreparedMessage(
                babelHelpers.extends(
                  {},
                  o("WAWebHandleMsgProcess").withoutCryptoStateInstalls(t),
                  { info: a },
                ),
                { callerHandles: _t(r, i) },
              ),
              s = l.staged;
            (mt(s, C, y),
              r && f.push.apply(f, t.renderableMsgs),
              i &&
                !pt(t.info, !1).flushedByCaller &&
                g.push.apply(g, t.renderableMsgs),
              t.renderableMsgs.forEach(function (e) {
                var t = o("WAWebHandleMsgProcess").getOrphanCheckParentKey(e);
                t != null && h.push(t.id);
              }));
          },
          void 0,
        ),
        p != null)
      ) {
        var b = pt(d, i),
          v = b.flushedByCaller,
          S = b.info,
          R = await o(
            "WAWebMessageProcessPlaceholder",
          ).processPlaceholderMessage(
            o("WAWebInboundMsgRowPlaceholder").toPlaceholderParams(p, S, m),
            { callerHandles: _t(v, i) },
          );
        mt(R, C, y);
      }
      return {
        addOnParentIds: h,
        lidMetadataUpdates: i ? c : [],
        msgsForOrphanDrain: g,
        msgsForOrphanReplay: f,
        postprocess: y,
        writes: C,
      };
    }
    function st(e) {
      return {
        addOnParentIds: [],
        lidMetadataUpdates: [],
        msgsForOrphanDrain: [],
        msgsForOrphanReplay: [],
        postprocess: [],
        writes: e == null ? [] : [e.written],
      };
    }
    function ut(e, t) {
      var n = e.prepared;
      return n.some(function (e) {
        var n = e.renderableMsgs;
        return n.some(function (e) {
          var n,
            r,
            a,
            i,
            l =
              (n =
                (r =
                  (a =
                    (i = o("WAWebHandleMsgProcess").getOrphanCheckParentKey(
                      e,
                    )) != null
                      ? i
                      : ct(e)) != null
                    ? a
                    : e.paymentRequestMessageKey) == null
                  ? void 0
                  : r.id) != null
                ? n
                : e.botResponseTargetId;
          return l != null && t.has(l);
        });
      });
    }
    function ct(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL
        ? null
        : e.subtype === "sender_revoke" || e.subtype === "admin_revoke"
          ? e.protocolMessageKey
          : null;
    }
    function dt(e, t) {
      var n = e.msgInfo,
        r = e.prepared;
      (t.add(n.externalId),
        r.forEach(function (e) {
          var n = e.renderableMsgs;
          n.forEach(function (e) {
            t.add(e.id.id);
          });
        }));
    }
    function mt(e, t, n) {
      e != null &&
        (t.push(e.written), e.uiUpdate != null && n.push(e.uiUpdate));
    }
    function pt(e, t) {
      if (t) return { info: e, flushedByCaller: !0 };
      var n = o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd,
        r =
          n &&
          e.offline != null &&
          !o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()
            ? babelHelpers.extends({}, e, { offline: null })
            : e;
      return {
        info: r,
        flushedByCaller: !o(
          "WAWebMessageQueueImpl",
        ).shouldFlushMessageImmediately(r.offline != null, n),
      };
    }
    function _t(e, t) {
      var n = ["errors"];
      return (e && n.push("flush"), t && n.push("ui"), new Set(n));
    }
    async function ft(e) {
      return o("WAWebInboundStanzaRowHandlers").applyInboundStanza(
        e.handler,
        await o("WAWebInboundMsgRowCodec").decodeInboundStanzaRow(e),
      );
    }
    function gt(e, t) {
      var n = Z.get(e);
      if (n == null) return null;
      Z.delete(e);
      var r = babelHelpers.extends({}, n.msgInfo);
      return (
        (r.msgProcessEndTsMillis = t),
        babelHelpers.extends({}, n, {
          msgInfo: r,
          prepared: n.prepared.map(function (e) {
            return babelHelpers.extends({}, e, { info: r });
          }),
        })
      );
    }
    async function ht(e, t, n, r) {
      var a = await o("WAWebInboundMsgRowCodec").decodeInboundMsgRow(e),
        i = a.input,
        l = a.parts,
        s = a.placeholder,
        u = i.bizInfo,
        c = i.hsmInfo,
        d = i.msgBotInfo,
        m = i.msgInfo,
        p = i.msgMeta,
        _ = i.paymentInfo,
        f = i.rcat;
      m.msgProcessEndTsMillis = n;
      var g = o("WAWebInboundMsgQueueStore").isLeftoverInboundMsg(t),
        h = [];
      await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
        entryPoint: "pq-handle-message",
        deferredWrites: r ? { lidMetadataUpdates: h } : void 0,
        msgInfo: m,
        msgMeta: p,
      });
      var y = await o("WAPromiseReduce").promiseReduce(
        l,
        async function (e, t) {
          var n = t.enc,
            r = t.plaintext,
            a = t.quarantineAction,
            l = t.scheduledMsgViewMode,
            s = await o("WAWebHandleMsgProcess").prepareReplayedMessage(
              {
                bizInfo: u,
                e2eInfo: o("WAWebMsgProcessingDecryptApi").toE2EInfo(n),
                hsmInfo: c,
                info: m,
                msgBotInfo: d,
                msgMeta: p,
                paymentInfo: _,
                rcat: f,
                reportingTokenInfo: i.reportingTokenInfo,
              },
              r,
              { quarantineAction: a, scheduledMsgViewMode: l },
            );
          return s == null ? e : [].concat(e, [s]);
        },
        [],
      );
      return {
        lidMetadataUpdates: h,
        msgInfo: m,
        msgMeta: p,
        placeholder: s,
        prepared: g ? y.map(yt) : y,
      };
    }
    function yt(t) {
      return babelHelpers.extends({}, t, {
        renderableMsgs: t.renderableMsgs.map(function (t) {
          if (t.isOffline !== !1) return t;
          var n = t.isOffline,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
          return r;
        }),
      });
    }
    async function Ct(e, t) {
      return t.length === 0 || Be(e)
        ? !1
        : (await o("WAWebInboundMsgQueueStore").ackInboundMsgs(
            e.flow,
            t.map(function (e) {
              var t = e.queueId;
              return t;
            }),
          ),
          t.forEach(function (e) {
            var t = e.queueId;
            Q.delete(t);
          }),
          o("WAWebInboundMsgChatIndex").removeQueuedInboundMsgs(t),
          ve(),
          !0);
    }
    async function bt(e, t) {
      if (Be(e)) return "retry";
      var n = t.attemptCount + 1;
      return n >= L
        ? ((j = E),
          (await vt(e, t, n)) || Be(e)
            ? "retry"
            : (await o("WAWebInboundMsgQueueStore").putInboundMsgs(e.flow, [
                babelHelpers.extends({}, t, {
                  attemptCount: n,
                  changedAtMs: o("WATimeUtils").unixTimeMs(),
                }),
              ]),
              "failed"))
        : ((j = Pe(n)),
          o("WAWebInboundMsgQueueODS").logInboundMsgRowRetried(),
          await o("WAWebInboundMsgQueueStore").putInboundMsgs(e.flow, [
            babelHelpers.extends({}, t, {
              attemptCount: n,
              changedAtMs: o("WATimeUtils").unixTimeMs(),
            }),
          ]),
          "retry");
    }
    async function vt(e, t, n) {
      o("WAWebInboundMsgQueueODS").logInboundMsgDeadLetter();
      var r = t.row;
      return r.kind === "stanza"
        ? (await Lt(e, t, r), !0)
        : (await Rt(r, n))
          ? (await Ct(e, [t]), !0)
          : !1;
    }
    async function St(e, t) {
      var n = e.row;
      (o("WAWebInboundMsgQueueODS").logInboundMsgDeadLetter(),
        n.kind === "message" && (await Rt(n, t)));
    }
    async function Rt(e, t) {
      var n = t < 2 * L ? await Et(e) : null;
      return n != null && !(await Tt(n, e.placeholder))
        ? !1
        : (o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] dead-lettered a row after ",
                  " attempts",
                ])),
              t,
            )
            .tags("messaging")
            .sendLogs("inbound-msg-dead-letter"),
          !0);
    }
    async function Lt(e, t, n) {
      var r = n.handler;
      (o("WALogger")
        .ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[inbound-msg-queue] dropping a ",
              " row after ",
              " attempts",
            ])),
          r,
          L,
        )
        .tags("messaging")
        .sendLogs("inbound-msg-dead-letter-stanza"),
        await Ct(e, [t]));
    }
    async function Et(e) {
      var t,
        n = (t = await kt(e)) != null ? t : await It(e);
      if (n == null)
        return (
          o("WAWebInboundMsgQueueODS").logInboundMsgDeadLetterUndecodable(),
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] dropping a row that cannot be decoded",
                ])),
            )
            .tags("messaging")
            .sendLogs("inbound-msg-dead-letter-undecodable"),
          null
        );
      try {
        await o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
          entryPoint: "pq-handle-message",
          msgInfo: n.msgInfo,
          msgMeta: n.msgMeta,
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] could not resolve the chat of a dead-lettered row",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("messaging");
      }
      return n;
    }
    async function kt(e) {
      try {
        var t = await o("WAWebInboundMsgRowCodec").decodeInboundMsgRow(e),
          n = t.input;
        return { msgInfo: n.msgInfo, msgMeta: n.msgMeta };
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] dead-lettered row no longer parses",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("messaging"),
          null
        );
      }
    }
    async function It(e) {
      try {
        var t,
          n,
          a,
          i = await o("WAWap").decodeStanza(e.stanza.slice(), function () {
            return Promise.reject(r("err")("persisted stanza is compressed"));
          }),
          l = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(i),
          s = (t = l.success) == null ? void 0 : t.msgInfo;
        if (s == null) return null;
        o("WAWebInboundMsgRowCodec").applyInboundMsgIntakeState(s, e.intake);
        var u = {
          appdata: null,
          isUnavailable: !1,
          origin: null,
          pollType: null,
          rawTs: String(s.ts),
          type:
            (n = (a = l.success) == null ? void 0 : a.type) != null
              ? n
              : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text,
          urlNumber: !1,
          urlText: !1,
        };
        return (
          e.isGroupStatusStanza && (u.isGroupStatus = !0),
          e.isStatusStanza && (u.isStatusStanza = !0),
          { msgInfo: s, msgMeta: u }
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] dead-lettered row has no readable stanza",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("messaging"),
          null
        );
      }
    }
    async function Tt(e, t) {
      var n = e.msgInfo,
        a = e.msgMeta;
      try {
        var i = pt(n, !1),
          l = i.flushedByCaller,
          s = i.info,
          u = await o(
            "WAWebMessageProcessPlaceholder",
          ).processPlaceholderMessage(
            t == null
              ? {
                  msgInfo: s,
                  msgMeta: a,
                  placeholderType: o("WAWebHandleMsgTypes").PlaceholderType.E2E,
                  type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                }
              : o("WAWebInboundMsgRowPlaceholder").toPlaceholderParams(t, s, a),
            { callerHandles: _t(l, !1) },
          );
        await ce(u == null ? [] : [u.written]);
      } catch (e) {
        return (
          o(
            "WAWebInboundMsgQueueODS",
          ).logInboundMsgDeadLetterPlaceholderFailed(),
          o("WALogger")
            .ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] the placeholder of a dead-lettered row failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .tags("messaging")
            .sendLogs("inbound-msg-dead-letter-placeholder-failed", {
              sampling: x,
            }),
          !1
        );
      }
      return !0;
    }
    function Dt() {
      return o("TaskScheduler").taskScheduler(
        "waweb-inbound-msg-drain",
        { concurrency: 1, failOnTimeout: !1, timeoutMs: T },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    }
    ((l.startInboundMsgDrain = ie),
      (l.stopInboundMsgDrain = le),
      (l.applyInboundMsgInPlace = se),
      (l.onInboundMsgCommitted = me),
      (l.isInboundMsgDrainBatchBuffering = _e),
      (l.isInboundMsgRecoveryDone = fe),
      (l.hasUndrainedInboundMsgs = ge),
      (l.whenInboundMsgRecoveryDone = he),
      (l.waitForInboundMsgDrainIdle = ye),
      (l.waitForInboundMsgStartupChatsDrained = Ce),
      (l.pauseInboundMsgDrainUntilMainStreamReady = be));
  },
  98,
);
