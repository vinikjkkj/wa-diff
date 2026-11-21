__d(
  "WAWebInboundMsgDrain",
  [
    "NativeSchedulerTickStrategy",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      L,
      E = 5,
      k = 1e3,
      I = 3e4,
      T = 5,
      D = 6e4,
      x = 1e3,
      $ = 0.01,
      P = 300,
      N = !1,
      M = !1,
      w = !1,
      A = !1,
      F = !1,
      O = !1,
      B = !1,
      W = [],
      q = !1,
      U = 0,
      V = !1,
      H = 0,
      G = !1,
      z = 0,
      j = new Set(),
      K = k,
      Q = [],
      X = new Set(),
      Y = !1,
      J = null,
      Z = new Set(),
      ee = new Map(),
      te = null,
      ne = !0,
      re = null,
      oe = null,
      ae = null,
      ie = null;
    function le() {
      N ||
        ((N = !0),
        (q = !0),
        o(
          "WAWebInboundMsgDrainActiveChat",
        ).setInboundMsgDrainChatOpenedListener(function (e) {
          o("WAWebInboundMsgChatIndex").hasQueuedInboundMsgs(e) && $e();
        }),
        Ee());
    }
    function se() {
      var e;
      ((M = !0), z++, ee.clear(), (e = oe) == null || e.resolve(), Oe());
    }
    function ue(e, t) {
      var n = { abandoned: !1 },
        r = ce(e, 1, n);
      return o("WAPromiseTimeout")
        .promiseTimeout(r, D)
        .catch(function (e) {
          if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
          return ((n.abandoned = !0), _e(), t(r), !1);
        });
    }
    function ce(e, t, n) {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            try {
              var i = r("nullthrows")(
                  yield Ct(e, { batched: !1, batchMsgIds: new Set() }),
                ),
                l = i.writes;
              return (
                yield me(l),
                yield o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
                (Y = !1),
                !0
              );
            } catch (i) {
              return (
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-queue] writing a row in place failed, attempt ",
                        "",
                      ])),
                    t,
                  )
                  .catching(r("getErrorSafe")(i))
                  .tags("messaging"),
                a.abandoned || Y || t >= E
                  ? (a.abandoned || (Y = !0), yield Wt(e, t), !1)
                  : (yield new (L || (L = n("Promise")))(function (e) {
                      return globalThis.setTimeout(e, Ae(t));
                    }),
                    ce(e, t + 1, a))
              );
            }
          },
        )),
        de.apply(this, arguments)
      );
    }
    function me(e) {
      return pe.apply(this, arguments);
    }
    function pe() {
      return (
        (pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebInboundMsgMessageWriter")
            .getInboundMsgDrainMessageCache()
            .createSnapshot(),
            yield (L || (L = n("Promise"))).all(e));
        })),
        pe.apply(this, arguments)
      );
    }
    function _e() {
      ((Y = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgInPlaceWriteAbandoned(),
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[inbound-msg-queue] writing a row in place is stuck, abandoning it",
              ])),
          )
          .tags("messaging")
          .sendLogs("inbound-msg-in-place-write-stuck"));
    }
    function fe(e, t) {
      (t == null ||
        t.forEach(function (e, t) {
          M || ge(t, e);
        }),
        o("WAWebInboundMsgChatIndex").addQueuedInboundMsgs(e),
        (q = !0),
        U++,
        xe(),
        Ee());
    }
    function ge(e, t) {
      if (ee.size >= x) {
        var n = ee.keys().next().value;
        n != null && ee.delete(n);
      }
      ee.set(e, t);
    }
    function he() {
      return ie === z;
    }
    function ye() {
      return O;
    }
    function Ce() {
      return q || !O;
    }
    function be() {
      return O
        ? (L || (L = n("Promise"))).resolve()
        : new (L || (L = n("Promise")))(function (e) {
            W.push(e);
          });
    }
    function ve() {
      return G || M || !q
        ? (L || (L = n("Promise"))).resolve()
        : new (L || (L = n("Promise")))(function (e) {
            Q.push(e);
          });
    }
    function Se(e) {
      if (
        (o("WAWebInboundMsgDrainOrder").takeInboundMsgDrainStartupChats(),
        G ||
          M ||
          !q ||
          !o(
            "WAWebInboundMsgDrainOrder",
          ).hasQueuedInboundMsgDrainStartupChats())
      )
        return (L || (L = n("Promise"))).resolve();
      var t = new (o("WAResolvable").Resolvable)();
      return (
        (re = t),
        $e(),
        o("WAPromiseTimeout")
          .promiseTimeout(t.promise, e)
          .catch(r("WAWebNoop"))
          .then(function () {
            re === t && (re = null);
          })
      );
    }
    function Re() {
      var e, t;
      return o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd || M
        ? (L || (L = n("Promise"))).resolve()
        : (ae != null ||
            (ae = r("WAWebEventsWaitForMainStreamReadyMd")().then(function () {
              ae = null;
            })),
          (e = (t = oe) == null ? void 0 : t.promise) != null
            ? e
            : (L || (L = n("Promise"))).resolve());
    }
    function Le() {
      if (
        !o("WAWebInboundMsgDrainOrder").hasQueuedInboundMsgDrainStartupChats()
      ) {
        var e;
        (e = re) == null || e.resolve();
      }
    }
    function Ee() {
      ((F = !0), A || ke());
    }
    function ke() {
      if (!M) {
        A = !0;
        var e = ae;
        if (e != null) {
          e.then(function () {
            ((A = !1), ke());
          });
          return;
        }
        F = !1;
        var t = ++z,
          n = new (o("WAResolvable").Resolvable)();
        oe = n;
        var a = Pe();
        (o("WAWebInboundMsgDrainOrder").isVisibleChatsSelector(a)
          ? Ie(t, a)
          : De(t, a)
        ).then(
          function (e) {
            (n.resolve(), t === z && Me(e));
          },
          function (e) {
            (n.resolve(),
              t === z &&
                (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-queue] drain batch failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("messaging")
                  .sendLogs("inbound-msg-drain-failed", { sampling: $ }),
                Me("failed")));
          },
        );
      }
    }
    function Ie(e, t) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            yield o("NativeSchedulerTickStrategy")
              .makeNativeSchedulerTickStrategy()
              .tick(o("TaskSchedulerPriority").HIGH_PRIORITY),
            e === z ? We(e, t, null) : "more"
          );
        })),
        Te.apply(this, arguments)
      );
    }
    function De(e, t) {
      var r = new (o("WAResolvable").Resolvable)();
      te = r;
      var a = "waiting",
        i = en().run(
          function () {
            return a === "gave_way" || e !== z
              ? (L || (L = n("Promise"))).resolve("more")
              : ((a = "started"),
                (ne = !0),
                r.resolveWasCalled() &&
                  ((r = new (o("WAResolvable").Resolvable)()), (te = r)),
                We(e, t, r));
          },
          {
            name: "drain_inbound_msgs",
            priority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
          },
        ).promise,
        l = function (n) {
          return n.promise.then(function () {
            if (a !== "waiting") return i;
            var t = ne ? Ne() : null;
            return t == null
              ? ((r = new (o("WAResolvable").Resolvable)()), (te = r), l(r))
              : ((a = "gave_way"), (ne = !1), Ie(e, t));
          });
        },
        s = l(r),
        u = i.then(
          function (e) {
            return a === "gave_way" ? s : e;
          },
          function (e) {
            return a === "gave_way" ? s : (L || (L = n("Promise"))).reject(e);
          },
        );
      return (L || (L = n("Promise"))).race([u, s]).finally(function () {
        te === r && (te = null);
      });
    }
    function xe() {
      if (Ne() != null) {
        var e;
        (e = te) == null || e.resolve();
      }
    }
    function $e() {
      ((ne = !0), xe());
    }
    function Pe() {
      return w
        ? o("WAWebInboundMsgDrainOrder").selectInboundMsgDrainChats()
        : o("WAWebInboundMsgDrainOrder").FIFO_SELECTOR;
    }
    function Ne() {
      return w
        ? o("WAWebInboundMsgDrainOrder").selectInboundMsgDrainVisibleChats()
        : null;
    }
    function Me(e) {
      ((A = !1), e !== "failed" && (H = 0));
      e: {
        if (e === "more") {
          ((G = !1), ke());
          break e;
        }
        if (e === "retry") {
          ((G = !1), Fe(K));
          break e;
        }
        if (e === "failed") {
          we();
          break e;
        }
        if (e === "empty") {
          if (((G = !1), F)) {
            ke();
            return;
          }
          Oe();
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function we() {
      (H++,
        H >= T &&
          !G &&
          ((G = !0),
          o("WAWebInboundMsgQueueODS").logInboundMsgDrainStalled(),
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] drain keeps failing, releasing its waiters",
                ])),
            )
            .tags("messaging")
            .sendLogs("inbound-msg-drain-stalled"),
          Oe()),
        Fe(Ae(H)));
    }
    function Ae(e) {
      return Math.min(k * Math.pow(2, e - 1), I);
    }
    function Fe(e) {
      ((A = !0),
        globalThis.setTimeout(function () {
          ((A = !1), ke());
        }, e));
    }
    function Oe() {
      var e,
        t = Q;
      ((Q = []),
        t.forEach(function (e) {
          return e();
        }),
        (e = re) == null || e.resolve(),
        o("WAWebInboundMsgDrainOrder").clearInboundMsgDrainStartupChats());
    }
    function Be() {
      O = !0;
      var e = W;
      ((W = []),
        e.forEach(function (e) {
          return e();
        }));
    }
    function We(e, t, n) {
      var r = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: !0 },
              string: { drainTier: t.tier, operationType: "inbound_drain" },
            },
            timeoutInMs:
              (D * tt()) / o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
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
        Ue(a, null),
        o("QPLFlow")
          .endWith(r, function () {
            return He(a).finally(function () {
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
    function qe(e) {
      var t;
      if (!Ve(e)) {
        (G || o("WAWebInboundMsgQueueODS").logInboundMsgDrainStalled(),
          o("WAWebInboundMsgQueueODS").logInboundMsgDrainBatchAbandoned(),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] drain batch is stuck, abandoning it",
                ])),
            )
            .tags("messaging")
            .sendLogs("inbound-msg-drain-stuck"));
        var n = e.applying;
        (n != null && j.add(n.queueId),
          o("WAWebInboundMsgMessageWriter")
            .getInboundMsgDrainMessageCache()
            .createSnapshot(),
          (G = !0),
          Oe(),
          z++,
          (t = oe) == null || t.resolve(),
          (A = !1),
          n == null ? we() : ke());
      }
    }
    function Ue(e, t) {
      ((e.applying = t),
        globalThis.clearTimeout(e.stuckTimer),
        (e.stuckTimer = globalThis.setTimeout(function () {
          return qe(e);
        }, D)));
    }
    function Ve(e) {
      return e.generation !== z;
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.selector.chatKeys;
          if (t.length > 0) return ze(e, t);
          var n = U,
            r = yield et(
              e.flow,
              o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL,
            );
          return Ve(e)
            ? "retry"
            : ((r.length === 0 ||
                !o("WAWebInboundMsgQueueStore").isLeftoverInboundMsg(
                  r[0].queueId,
                )) &&
                (w = !0),
              r.length > 0
                ? ot(e, r)
                : (n === U && ((q = !1), Oe(), Ke()), Xe(e)));
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebInboundMsgQueueStore").readInboundMsgsForChats(
            e.flow,
            t,
            o("WAWebInboundMsgChatIndex").getChatRowRange(),
            tt(),
            nt,
          );
          if (Ve(e)) return "retry";
          (n.forEach(function (e, t) {
            e.length === 0 &&
              o("WAWebInboundMsgChatIndex").forgetQueuedInboundMsgChat(t);
          }),
            Le());
          var r = Array.from(n.values()).flat();
          return r.length === 0 ? "more" : ot(e, r, { orderedByChat: !0 });
        })),
        je.apply(this, arguments)
      );
    }
    function Ke() {
      var e = J,
        t = Z;
      ((J = null),
        (Z = new Set()),
        !(e == null || t.size === 0) &&
          Qe(
            e.filter(function (e) {
              return t.has(e.id.id);
            }),
          ));
    }
    function Qe(e) {
      o("WAPromiseReduce").promiseReduce(
        o("WAArrayChunk").chunk(
          e,
          o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT,
        ),
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              try {
                yield (L || (L = n("Promise"))).all(
                  t.map(function (e) {
                    return o(
                      "WAWebHandleOrphansForNewMsg",
                    ).handleOrphansForNewMsg(e);
                  }),
                );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[inbound-msg-queue] replaying the orphans of drained messages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .tags("messaging")
                  .sendLogs("inbound-msg-orphan-replay-failed", {
                    sampling: $,
                  });
              }
            },
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        void 0,
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = O
            ? null
            : yield o("WAWebInboundMsgQueueStore").readOldestInboundMsg(e.flow);
          if (
            (!O && t == null && Be(),
            !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd)
          )
            return (Ze(), "empty");
          var n = yield et(
            e.flow,
            o("WAWebInboundMsgQueueRow").InboundRowPriority.LOW,
          );
          return n.length > 0 ? ot(e, n) : (Je(t), "empty");
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je(e) {
      B ||
        e == null ||
        rt(e) ||
        ((B = !0),
        o("WAWebInboundMsgQueueODS").logInboundMsgUndrainableRowsLeft());
    }
    function Ze() {
      V ||
        ((V = !0),
        o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
          function () {
            ((V = !1), Ee());
          },
        ));
    }
    function et(e, t) {
      return o("WAWebInboundMsgQueueStore").readInboundMsgs(e, t, tt(), rt);
    }
    function tt() {
      return o("WAWebInboundMsgQueueGating").isWAWebPersistedQueueEnabled()
        ? P
        : o("WAWormQueueDef").WA_WORM_QUEUE_DRAIN_LIMIT;
    }
    function nt(e) {
      return (
        e.priority === o("WAWebInboundMsgQueueRow").InboundRowPriority.NORMAL &&
        rt(e)
      );
    }
    function rt(e) {
      var t = e.row;
      return t.kind === "message"
        ? t.version === 1 || t.version === 2
        : t.kind === "stanza" &&
            t.version === 1 &&
            o("WAWebInboundStanzaRowHandlers").hasInboundStanzaHandler(
              t.handler,
            );
    }
    function ot(e, t, n) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r,
              a = n === void 0 ? {} : n,
              i = a.orderedByChat,
              l = i === void 0 ? !1 : i,
              s = o(
                "WAWebInboundMsgQueueGating",
              ).isWAWebPersistedQueueEnabled(),
              u = yield lt(e, it(t), s),
              c = u.applied,
              d = u.failed,
              m = yield ht(c);
            if (m == null) return "failed";
            if (s) {
              (Ue(e, null),
                yield o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb());
              var p = c.slice(0, m.written.length);
              (yield o("WAWebInboundMsgDrainUIUpdate").updateUIOfDrainedBatch(
                p.flatMap(function (e) {
                  var t = e.postprocess;
                  return t;
                }),
              ),
                Qe(
                  p.flatMap(function (e) {
                    var t = e.msgsForOrphanDrain;
                    return t;
                  }),
                ));
            }
            ((yield Mt(e, m.written)) &&
              (ct(m.written),
              o("WAWebInboundMsgQueueODS").logInboundMsgCopRowsDrained(
                e.selector.tier,
                m.written.length,
              ),
              e.flow.addAnnotations({ int: { rowCount: m.written.length } }),
              ut(c.slice(0, m.written.length), l)),
              Ve(e) ||
                m.sharedFailures.forEach(function (e) {
                  var t = e.queueId;
                  X.add(t);
                }));
            var _ = (r = m.failed) != null ? r : d;
            return _ == null ? "more" : At(e, _);
          },
        )),
        at.apply(this, arguments)
      );
    }
    function it(e) {
      var t = e.findIndex(function (e) {
        var t = e.queueId;
        return X.has(t);
      });
      return t === -1 ? e : e.slice(0, t === 0 ? 1 : t);
    }
    function lt(e, t, n) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!n) return dt(e, t, !1);
            ie = e.generation;
            try {
              var r = yield dt(e, t, !0);
              return (
                yield o(
                  "WAWebInboundMsgLidMetadata",
                ).writeInboundMsgLidMetadata(
                  r.applied.flatMap(function (e) {
                    var t = e.lidMetadataUpdates;
                    return t;
                  }),
                ),
                r
              );
            } finally {
              ie === e.generation && (ie = null);
            }
          },
        )),
        st.apply(this, arguments)
      );
    }
    function ut(e, t) {
      t && (J != null || (J = []));
      var n = J;
      n != null &&
        e.forEach(function (e) {
          var t = e.addOnParentIds,
            r = e.msgsForOrphanReplay;
          (n.push.apply(n, r),
            t.forEach(function (e) {
              return Z.add(e);
            }));
        });
    }
    function ct(e) {
      o("WAWebInboundMsgQueueODS").logInboundMsgsDrained(e.length);
      var t = e.filter(function (e) {
        var t = e.queueId;
        return o("WAWebInboundMsgQueueStore").isLeftoverInboundMsg(t);
      }).length;
      t > 0 && o("WAWebInboundMsgQueueODS").logInboundMsgRowsLeftAtStart(t);
    }
    function dt(e, t, n) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (
        (mt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a) {
            var i = [],
              l = new Set(),
              s = !1,
              u = !1,
              c = yield o("WAPromiseReduce").promiseReduce(
                t,
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t, n) {
                      if (t != null || s || u || Ve(e)) return t;
                      if (gt(n)) return n;
                      if (((s = yield pt(e, i.length > 0)), Ve(e))) return null;
                      if (s) return (Ue(e, null), null);
                      Ue(e, n);
                      try {
                        var c = yield Ct(n, { batched: a, batchMsgIds: l });
                        if (c == null) return ((u = !0), null);
                        i.push(babelHelpers.extends({ entity: n }, c));
                      } catch (e) {
                        return (
                          o("WALogger")
                            .WARN(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
                                  "[inbound-msg-queue] row failed, attempt ",
                                  "",
                                ])),
                              n.attemptCount + 1,
                            )
                            .catching(r("getErrorSafe")(e))
                            .tags("messaging"),
                          n
                        );
                      } finally {
                        Ue(e, null);
                      }
                      return null;
                    },
                  );
                  return function (e, n) {
                    return t.apply(this, arguments);
                  };
                })(),
                null,
              );
            return { applied: i, failed: c };
          },
        )),
        mt.apply(this, arguments)
      );
    }
    function pt(e, t) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.giveWay;
          if (r == null) return !1;
          var a = function () {
            return r.resolveWasCalled() && Ne() != null;
          };
          if (
            !a() &&
            o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() !=
              null &&
            o("WAWebOneQueue").hasQueuedOneQueueTasks()
          ) {
            var i = globalThis.performance.now();
            (yield r.resolveWasCalled()
              ? ft(e)
              : (L || (L = n("Promise"))).race([ft(e), r.promise]),
              (e.oneQueueYieldMs += globalThis.performance.now() - i));
          }
          return t && a();
        })),
        _t.apply(this, arguments)
      );
    }
    function ft(e) {
      return (
        globalThis.clearTimeout(e.stuckTimer),
        o("NativeSchedulerTickStrategy")
          .makeNativeSchedulerTickStrategy()
          .tick(o("TaskSchedulerPriority").NORMAL_PRIORITY)
      );
    }
    function gt(e) {
      return j.delete(e.queueId)
        ? (o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[inbound-msg-queue] a batch got stuck applying this row",
                ])),
            )
            .tags("messaging"),
          !0)
        : !1;
    }
    function ht(e) {
      return yt.apply(this, arguments);
    }
    function yt() {
      return (
        (yt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
            var t = e.entity;
            return t;
          });
          if (e.length === 0)
            return { failed: null, sharedFailures: [], written: t };
          var a = o(
            "WAWebInboundMsgMessageWriter",
          ).getInboundMsgDrainMessageCache();
          a.createSnapshot();
          var i = yield (L || (L = n("Promise"))).allSettled(
              e.map(function (e) {
                var t = e.writes;
                return (L || (L = n("Promise"))).all(t);
              }),
            ),
            l = i.findIndex(function (e) {
              var t = e.status;
              return t === "rejected";
            }),
            s = i[l];
          if ((s == null ? void 0 : s.status) !== "rejected")
            return { failed: null, sharedFailures: [], written: t };
          if (
            (o("WALogger")
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[inbound-msg-queue] message write failed",
                  ])),
              )
              .catching(r("getErrorSafe")(s.reason))
              .tags("messaging"),
            o("WAWebInboundMsgQueueODS").logInboundMsgWriteFailed(),
            a.isFailClosed())
          )
            return null;
          var u = t.filter(function (e, t) {
            return i[t].status === "rejected";
          });
          return {
            failed: u.length > 1 ? null : t[l],
            sharedFailures: u.length > 1 ? u : [],
            written: t.slice(0, l),
          };
        })),
        yt.apply(this, arguments)
      );
    }
    function Ct(e, t) {
      return bt.apply(this, arguments);
    }
    function bt() {
      return (
        (bt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.addedAtMs,
            a = e.queueId,
            i = e.row,
            l = t.batched,
            s = t.batchMsgIds;
          if (i.kind === "stanza") return vt(yield Tt(i));
          var u = xt(a, r),
            c = u != null ? u : yield $t(i, a, r, l);
          if (l && St(c, s)) return null;
          (Lt(c, s),
            o("WAWebInboundMsgQueueODS").logInboundMsgRowApplied(
              u != null ? "prepared" : "replayed",
            ));
          var d = c.lidMetadataUpdates,
            m = c.msgInfo,
            p = c.msgMeta,
            _ = c.placeholder,
            f = c.prepared,
            g = [],
            h = [],
            y = [],
            C = [],
            b = [];
          if (
            (yield o("WAPromiseReduce").promiseReduce(
              f,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n = kt(t.info, l),
                      r = n.flushedByCaller,
                      a = n.info,
                      i = yield o("WAWebHandleMsgProcess").applyPreparedMessage(
                        babelHelpers.extends(
                          {},
                          o("WAWebHandleMsgProcess").withoutCryptoStateInstalls(
                            t,
                          ),
                          { info: a },
                        ),
                        { callerHandles: It(r, l) },
                      ),
                      s = i.staged;
                    (Et(s, b, C),
                      r && g.push.apply(g, t.renderableMsgs),
                      l &&
                        !kt(t.info, !1).flushedByCaller &&
                        h.push.apply(h, t.renderableMsgs),
                      t.renderableMsgs.forEach(function (e) {
                        var t = o(
                          "WAWebHandleMsgProcess",
                        ).getOrphanCheckParentKey(e);
                        t != null && y.push(t.id);
                      }));
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              void 0,
            ),
            _ != null)
          ) {
            var v = kt(m, l),
              S = v.flushedByCaller,
              R = v.info,
              L = yield o(
                "WAWebMessageProcessPlaceholder",
              ).processPlaceholderMessage(
                o("WAWebInboundMsgRowPlaceholder").toPlaceholderParams(_, R, p),
                { callerHandles: It(S, l) },
              );
            Et(L, b, C);
          }
          return {
            addOnParentIds: y,
            lidMetadataUpdates: l ? d : [],
            msgsForOrphanDrain: h,
            msgsForOrphanReplay: g,
            postprocess: C,
            writes: b,
          };
        })),
        bt.apply(this, arguments)
      );
    }
    function vt(e) {
      return {
        addOnParentIds: [],
        lidMetadataUpdates: [],
        msgsForOrphanDrain: [],
        msgsForOrphanReplay: [],
        postprocess: [],
        writes: e == null ? [] : [e.written],
      };
    }
    function St(e, t) {
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
                      : Rt(e)) != null
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
    function Rt(e) {
      return e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL
        ? null
        : e.subtype === "sender_revoke" || e.subtype === "admin_revoke"
          ? e.protocolMessageKey
          : null;
    }
    function Lt(e, t) {
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
    function Et(e, t, n) {
      e != null &&
        (t.push(e.written), e.uiUpdate != null && n.push(e.uiUpdate));
    }
    function kt(e, t) {
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
    function It(e, t) {
      var n = ["errors"];
      return (e && n.push("flush"), t && n.push("ui"), new Set(n));
    }
    function Tt(e) {
      return Dt.apply(this, arguments);
    }
    function Dt() {
      return (
        (Dt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebInboundStanzaRowHandlers").applyInboundStanza(
            e.handler,
            yield o("WAWebInboundMsgRowCodec").decodeInboundStanzaRow(e),
          );
        })),
        Dt.apply(this, arguments)
      );
    }
    function xt(e, t) {
      var n = ee.get(e);
      if (n == null) return null;
      ee.delete(e);
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
    function $t(e, t, n, r) {
      return Pt.apply(this, arguments);
    }
    function Pt() {
      return (
        (Pt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = yield o("WAWebInboundMsgRowCodec").decodeInboundMsgRow(e),
              l = i.input,
              s = i.parts,
              u = i.placeholder,
              c = l.bizInfo,
              d = l.hsmInfo,
              m = l.msgBotInfo,
              p = l.msgInfo,
              _ = l.msgMeta,
              f = l.paymentInfo,
              g = l.rcat;
            p.msgProcessEndTsMillis = r;
            var h = o("WAWebInboundMsgQueueStore").isLeftoverInboundMsg(t),
              y = [];
            yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
              entryPoint: "pq-handle-message",
              deferredWrites: a ? { lidMetadataUpdates: y } : void 0,
              msgInfo: p,
              msgMeta: _,
            });
            var C = yield o("WAPromiseReduce").promiseReduce(
              s,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n = t.enc,
                      r = t.plaintext,
                      a = t.quarantineAction,
                      i = t.scheduledMsgViewMode,
                      s = yield o(
                        "WAWebHandleMsgProcess",
                      ).prepareReplayedMessage(
                        {
                          bizInfo: c,
                          e2eInfo: o("WAWebMsgProcessingDecryptApi").toE2EInfo(
                            n,
                          ),
                          hsmInfo: d,
                          info: p,
                          msgBotInfo: m,
                          msgMeta: _,
                          paymentInfo: f,
                          rcat: g,
                          reportingTokenInfo: l.reportingTokenInfo,
                        },
                        r,
                        { quarantineAction: a, scheduledMsgViewMode: i },
                      );
                    return s == null ? e : [].concat(e, [s]);
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [],
            );
            return {
              lidMetadataUpdates: y,
              msgInfo: p,
              msgMeta: _,
              placeholder: u,
              prepared: h ? C.map(Nt) : C,
            };
          },
        )),
        Pt.apply(this, arguments)
      );
    }
    function Nt(t) {
      return babelHelpers.extends({}, t, {
        renderableMsgs: t.renderableMsgs.map(function (t) {
          if (t.isOffline !== !1) return t;
          var n = t.isOffline,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
          return r;
        }),
      });
    }
    function Mt(e, t) {
      return wt.apply(this, arguments);
    }
    function wt() {
      return (
        (wt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.length === 0 || Ve(e)
            ? !1
            : (yield o("WAWebInboundMsgQueueStore").ackInboundMsgs(
                e.flow,
                t.map(function (e) {
                  var t = e.queueId;
                  return t;
                }),
              ),
              t.forEach(function (e) {
                var t = e.queueId;
                X.delete(t);
              }),
              o("WAWebInboundMsgChatIndex").removeQueuedInboundMsgs(t),
              Le(),
              !0);
        })),
        wt.apply(this, arguments)
      );
    }
    function At(e, t) {
      return Ft.apply(this, arguments);
    }
    function Ft() {
      return (
        (Ft = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (Ve(e)) return "retry";
          var n = t.attemptCount + 1;
          return n >= E
            ? ((K = k),
              (yield Ot(e, t, n)) || Ve(e)
                ? "retry"
                : (yield o("WAWebInboundMsgQueueStore").putInboundMsgs(e.flow, [
                    babelHelpers.extends({}, t, {
                      attemptCount: n,
                      changedAtMs: o("WATimeUtils").unixTimeMs(),
                    }),
                  ]),
                  "failed"))
            : ((K = Ae(n)),
              o("WAWebInboundMsgQueueODS").logInboundMsgRowRetried(),
              yield o("WAWebInboundMsgQueueStore").putInboundMsgs(e.flow, [
                babelHelpers.extends({}, t, {
                  attemptCount: n,
                  changedAtMs: o("WATimeUtils").unixTimeMs(),
                }),
              ]),
              "retry");
        })),
        Ft.apply(this, arguments)
      );
    }
    function Ot(e, t, n) {
      return Bt.apply(this, arguments);
    }
    function Bt() {
      return (
        (Bt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            o("WAWebInboundMsgQueueODS").logInboundMsgDeadLetter();
            var r = t.row;
            return r.kind === "stanza"
              ? (yield Ht(e, t, r), !0)
              : (yield Ut(r, n))
                ? (yield Mt(e, [t]), !0)
                : !1;
          },
        )),
        Bt.apply(this, arguments)
      );
    }
    function Wt(e, t) {
      return qt.apply(this, arguments);
    }
    function qt() {
      return (
        (qt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.row;
          (o("WAWebInboundMsgQueueODS").logInboundMsgDeadLetter(),
            n.kind === "message" && (yield Ut(n, t)));
        })),
        qt.apply(this, arguments)
      );
    }
    function Ut(e, t) {
      return Vt.apply(this, arguments);
    }
    function Vt() {
      return (
        (Vt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t < 2 * E ? yield zt(e) : null;
          return n != null && !(yield Jt(n, e.placeholder))
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
        })),
        Vt.apply(this, arguments)
      );
    }
    function Ht(e, t, n) {
      return Gt.apply(this, arguments);
    }
    function Gt() {
      return (
        (Gt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
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
                E,
              )
              .tags("messaging")
              .sendLogs("inbound-msg-dead-letter-stanza"),
              yield Mt(e, [t]));
          },
        )),
        Gt.apply(this, arguments)
      );
    }
    function zt(e) {
      return jt.apply(this, arguments);
    }
    function jt() {
      return (
        (jt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = (t = yield Kt(e)) != null ? t : yield Xt(e);
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
            yield o("WAWebProcessMsgInfoForLid").maybeProcessMsgInfoForLid({
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
        })),
        jt.apply(this, arguments)
      );
    }
    function Kt(e) {
      return Qt.apply(this, arguments);
    }
    function Qt() {
      return (
        (Qt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebInboundMsgRowCodec").decodeInboundMsgRow(e),
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
        })),
        Qt.apply(this, arguments)
      );
    }
    function Xt(e) {
      return Yt.apply(this, arguments);
    }
    function Yt() {
      return (
        (Yt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t,
              a,
              i,
              l = yield o("WAWap").decodeStanza(e.stanza.slice(), function () {
                return (L || (L = n("Promise"))).reject(
                  r("err")("persisted stanza is compressed"),
                );
              }),
              s = o("WAWebHandleMsgParser").incomingMsgParserForAckOnly.parse(
                l,
              ),
              u = (t = s.success) == null ? void 0 : t.msgInfo;
            if (u == null) return null;
            o("WAWebInboundMsgRowCodec").applyInboundMsgIntakeState(
              u,
              e.intake,
            );
            var c = {
              appdata: null,
              isUnavailable: !1,
              origin: null,
              pollType: null,
              rawTs: String(u.ts),
              type:
                (a = (i = s.success) == null ? void 0 : i.type) != null
                  ? a
                  : o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.text,
              urlNumber: !1,
              urlText: !1,
            };
            return (
              e.isGroupStatusStanza && (c.isGroupStatus = !0),
              e.isStatusStanza && (c.isStatusStanza = !0),
              { msgInfo: u, msgMeta: c }
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
        })),
        Yt.apply(this, arguments)
      );
    }
    function Jt(e, t) {
      return Zt.apply(this, arguments);
    }
    function Zt() {
      return (
        (Zt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.msgInfo,
            a = e.msgMeta;
          try {
            var i = kt(n, !1),
              l = i.flushedByCaller,
              s = i.info,
              u = yield o(
                "WAWebMessageProcessPlaceholder",
              ).processPlaceholderMessage(
                t == null
                  ? {
                      msgInfo: s,
                      msgMeta: a,
                      placeholderType: o("WAWebHandleMsgTypes").PlaceholderType
                        .E2E,
                      type: o("WAWebMsgType").MSG_TYPE.CIPHERTEXT,
                    }
                  : o("WAWebInboundMsgRowPlaceholder").toPlaceholderParams(
                      t,
                      s,
                      a,
                    ),
                { callerHandles: It(l, !1) },
              );
            yield me(u == null ? [] : [u.written]);
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
                  sampling: $,
                }),
              !1
            );
          }
          return !0;
        })),
        Zt.apply(this, arguments)
      );
    }
    function en() {
      return o("TaskScheduler").taskScheduler(
        "waweb-inbound-msg-drain",
        { concurrency: 1, failOnTimeout: !1, timeoutMs: D },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    }
    ((l.startInboundMsgDrain = le),
      (l.stopInboundMsgDrain = se),
      (l.applyInboundMsgInPlace = ue),
      (l.onInboundMsgCommitted = fe),
      (l.isInboundMsgDrainBatchBuffering = he),
      (l.isInboundMsgRecoveryDone = ye),
      (l.hasUndrainedInboundMsgs = Ce),
      (l.whenInboundMsgRecoveryDone = be),
      (l.waitForInboundMsgDrainIdle = ve),
      (l.waitForInboundMsgStartupChatsDrained = Se),
      (l.pauseInboundMsgDrainUntilMainStreamReady = Re));
  },
  98,
);
