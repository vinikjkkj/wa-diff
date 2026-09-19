__d(
  "FalcoLoggerTransports",
  [
    "AnalyticsCoreData",
    "Banzai",
    "ExecutionEnvironment",
    "FalcoUtils",
    "ODS",
    "PersistedQueue",
    "Queue",
    "WebSession",
    "performanceAbsoluteNow",
    "promiseDone",
    "requireDeferredForDisplay",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferredForDisplay")(
        "TransportSelectingClientSingletonConditional",
      ).__setRef("FalcoLoggerTransports"),
      f = 5 * 1024,
      g =
        (e = (d || (d = r("AnalyticsCoreData"))).max_delay_br_queue) != null
          ? e
          : 60 * 1e3,
      h =
        (s = (d || (d = r("AnalyticsCoreData")))
          .max_delay_br_queue_immediate) != null
          ? s
          : 1e3,
      y =
        (u = (d || (d = r("AnalyticsCoreData")))
          .max_delay_br_init_not_complete) != null
          ? u
          : 1e3,
      C = "falco:",
      b = new (r("Queue"))(),
      v = 5e3,
      S = 6e4,
      R = r("uuidv4")(),
      L = "ods_web_batch",
      E = new Map(),
      k = new Set(),
      I = o("FalcoUtils").getTaggedBitmap(38),
      T = [],
      D = 0,
      x = null,
      $ = !1,
      P = !1,
      N = !1,
      M = !0,
      w = !1,
      A = !1,
      F = Date.now() - S,
      O = 1,
      B = y > g ? y : g,
      W = y;
    ie();
    for (var q of (U = (d || (d = r("AnalyticsCoreData")))
      .stateful_events_list_for_br) != null
      ? U
      : []) {
      var U;
      k.add(q);
    }
    function V() {
      return (
        (d || (d = r("AnalyticsCoreData"))).enable_bladerunner &&
        !(p || (p = r("ExecutionEnvironment"))).isInWorker
      );
    }
    function H(e, t) {
      o("FalcoUtils").bumpODSMetrics(
        t.item.name,
        "event.info.streaming.batched",
        1,
      );
      var n = t.item.extra.length;
      (D + n > f && (clearTimeout(x), G()), T.push([e, t]), (D += n));
    }
    function G() {
      ((x = null), ($ = !1));
      var e = T;
      (J(
        "event.info.streaming.batch_processing",
        e.map(function (e) {
          return e[1].item;
        }),
      ),
        A
          ? b.enqueue(function (t) {
              return t.log(
                e.map(function (e) {
                  return e[1].item;
                }),
                function (t) {
                  if (!t) {
                    z(e, "event.info.banzai_fallback");
                    return;
                  }
                  j(e, t, "event.info.streaming.enqueued");
                },
              );
            })
          : z(e, "event.non_critical_failure.streaming_init_not_complete"),
        (T = []),
        (D = 0));
    }
    function z(e, t) {
      var n = function () {
        var e,
          n = a[0],
          i = a[1],
          l = i.item;
        if (
          (o("FalcoUtils").bumpODSMetrics(l.name, t, 1),
          l.identity ||
            (l.identity = (d || (d = r("AnalyticsCoreData"))).identity),
          (e = l.logCritical) != null && e)
        )
          ee.logCritical([l], function (e) {
            return n.markItem(i, e);
          });
        else {
          var s;
          (s = l.logImmediate) != null && s
            ? ee.logImmediately([l], function (e) {
                return n.markItem(i, e);
              })
            : ee.log([l], function (e) {
                return n.markItem(i, e);
              });
        }
      };
      for (var a of e) n();
    }
    function j(e, t, n) {
      for (var r of e) {
        var a = r[0],
          i = r[1];
        (o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1), a.markItem(i, t));
      }
    }
    function K(e) {
      return {
        events: e.map(function (e) {
          return {
            name: e.name,
            extra: e.extra,
            rate: e.policy.r,
            time: e.time / 1e3,
            tag: 0,
            tags: e.tags,
            shouldAddState: e.shouldAddState,
            identity: X(e.identity),
            expTags: e.exptTags,
            sessionID: e.sessionId,
            deviceID: e.deviceId,
          };
        }),
      };
    }
    function Q(e) {
      var t,
        n,
        o,
        a,
        i = {
          deviceId: (d || (d = r("AnalyticsCoreData"))).device_id,
          familyDeviceId: null,
          osBuildNumber: null,
          sessionId: e,
          appId: d.app_id,
          appVersion:
            (t = (d || (d = r("AnalyticsCoreData"))).app_version) != null
              ? t
              : null,
          bundleId: null,
          consentState:
            (n = (d || (d = r("AnalyticsCoreData"))).consent_state) != null
              ? n
              : null,
          identity: null,
          pushPhase: d.push_phase,
        };
      return (
        ((o =
          (a = (d || (d = r("AnalyticsCoreData")))
            .stateful_events_list_for_br) == null
            ? void 0
            : a.length) != null
          ? o
          : 0) > 0 &&
          (i.ambientState = (d || (d = r("AnalyticsCoreData"))).state_for_br),
        (i.identity = X(d.identity)),
        Object.freeze(i)
      );
    }
    function X(e) {
      var t = e == null ? void 0 : e.claim,
        n = t != null ? [t] : [],
        r = e == null ? void 0 : e.appScopedIdentity;
      if (r !== void 0)
        return { appScopedIdentity: { uid: r, identifier: r, claims: n } };
      var o = e == null ? void 0 : e.fbIdentity;
      return o !== void 0
        ? {
            facebookIdentity: {
              actorId: o.actorId,
              accountId: o.accountId,
              claims: n,
            },
          }
        : null;
    }
    function Y(e, t) {
      for (var n of e) {
        var a,
          i,
          l,
          s =
            ((l = {}),
            (l.e = n.extra),
            (l.r = n.policy.r),
            (l.d =
              (a = n.deviceId) != null
                ? a
                : (d || (d = r("AnalyticsCoreData"))).device_id),
            (l.s = (i = n.sessionId) != null ? i : o("WebSession").getId()),
            (l.t = n.time),
            (l.a = n.appVersion),
            l);
        (n.privacyContext && (s.p = n.privacyContext),
          n.tags != null && (s.b = n.tags));
        var u = n.identity;
        u && (s.id = u);
        var c = (d || (d = r("AnalyticsCoreData"))).consent_state;
        (c != null && (s.cs = c), r("Banzai").post(C + n.name, s, t));
      }
      J("event.uploaded", e);
    }
    function J(e, t) {
      for (var n of t)
        n.name !== L && o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
    }
    function Z(e, t) {
      var n =
        "falco.fabric.www." + (d || (d = r("AnalyticsCoreData"))).push_phase;
      (c || (c = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var ee = {
      log: function (t, n) {
        (J("event.info.banzai.log.upload_processing", t),
          Y(t, r("Banzai").BASIC),
          n(!0));
      },
      logImmediately: function (t, n) {
        (J("event.info.banzai.log_immediately.upload_processing", t),
          Y(t, r("Banzai").VITAL),
          n(!0));
      },
      logCritical: function (t, n) {
        (J("event.info.banzai.log_critical.upload_processing", t),
          Y(t, { signal: !0, retry: !0 }),
          n(!0));
      },
    };
    function te(e) {
      ie();
      var t = ne(e, "banzai_data_loss", "log"),
        n = ne(e, "banzai_data_loss", "logImmediately"),
        o = ne(e, "banzai_data_loss", "logCritical"),
        a = ne(e, "bladerunner_data_loss", ""),
        i = ne(e, "bladerunner_data_loss", "logCritical");
      if ((Z("js.br_data_loss.posted." + e, 1), A && M))
        try {
          b.enqueue(function (t) {
            return t.log([a], function (t) {
              if (!t) {
                (Z("js.br.transport_failure." + e, 1),
                  ee.logCritical([i], function (t) {
                    Z("js.br.failure_fallback_success_callback." + e, 1);
                  }));
                return;
              }
              Z("js.br.success_callback." + e, 1);
            });
          });
        } catch (t) {
          (Z("js.br.error_enqueueing." + e, 1),
            ee.logCritical([i], function (t) {
              Z("js.br.enqueuing_fallback_success_callback." + e, 1);
            }));
        }
      else
        (M || Z("js.br.failed." + e, 1),
          A || Z("js.br.init_not_complete." + e, 1),
          ee.logCritical([i], function (t) {
            Z("js.br.init_fallback_success_callback." + e, 1);
          }));
      (Y([t], r("Banzai").BASIC),
        Y([n], r("Banzai").VITAL),
        Y([o], { signal: !0, retry: !0 }));
    }
    function ne(e, t, n) {
      return {
        name: t,
        time: (m || (m = r("performanceAbsoluteNow")))(),
        policy: { r: 1 },
        extra: JSON.stringify({
          event_index: e,
          falco_js_connection_id: R,
          logging_mode: n,
          logging_flow_flag: "original_flow",
        }),
        appVersion: (d || (d = r("AnalyticsCoreData"))).app_version,
      };
    }
    function re() {
      F + v < Date.now() && (te(O), (F = Date.now()), O++);
    }
    function oe() {
      window.setTimeout(function () {
        (re(), O <= 40 && oe());
      }, S);
    }
    function ae(e) {
      b.start(function (t) {
        return t({
          log: function (n, o) {
            J("event.info.streaming.queue_processing", n);
            var t = JSON.stringify(K(n));
            e
              ? (d || (d = r("AnalyticsCoreData"))).enable_ack
                ? r("promiseDone")(
                    e.amendWithAck(t),
                    function (e) {
                      (e
                        ? (J("event.streamed.with_ack", n),
                          J("event.uploaded", n))
                        : J(
                            "event.non_critical_failure.streaming.ack_failed",
                            n,
                          ),
                        o(e));
                    },
                    function () {
                      (J(
                        "event.non_critical_failure.streaming.ack_rejected",
                        n,
                      ),
                        o(!1));
                    },
                  )
                : (e.amendWithoutAck(t),
                  J("event.streamed.without_ack", n),
                  J("event.uploaded", n))
              : (J(
                  "event.non_critical_error.streaming.stream_not_available",
                  n,
                ),
                o(!1));
          },
          logImmediately: function (t, n) {
            this.log(t, n);
          },
          logCritical: function (t, n) {
            this.log(t, n);
          },
        });
      });
    }
    function ie() {
      P ||
        ((A = !1),
        V() &&
          (_.onReady(function (e) {
            if (!e) {
              ((M = !1),
                (w = !0),
                b.start(function (e) {
                  return e(ee);
                }));
              return;
            }
            var t = e,
              n,
              a = {
                onTermination: function (t) {
                  t.message === "Stream closed"
                    ? (b.stop(!0), (P = !1))
                    : (o("FalcoUtils").bumpODSMetrics(
                        "",
                        "streaming.non_critical_failure.rejected",
                        1,
                      ),
                      (M = !1),
                      b.start(function (e) {
                        return e(ee);
                      }));
                },
                onFlowStatus: function () {},
              };
            r("promiseDone")(
              t
                .requestStream(
                  { method: "Falco" },
                  JSON.stringify(Q(o("WebSession").getId())),
                  a,
                  { requestId: "" },
                )
                .then(function (e) {
                  ((n = e), ae(n), (A = !0), (B = g), (W = h));
                })
                .catch(function (e) {
                  (o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.non_critical_failure.failed",
                    1,
                  ),
                    b.stop(!0),
                    (P = !1));
                }),
            );
          }),
          (P = !0)));
    }
    function le(e) {
      var t,
        n = e.name;
      if (!V() || !M) return !1;
      if (
        k.has(n) ||
        (e.policy.s !== 1 &&
          (t = (d || (d = r("AnalyticsCoreData"))).br_stateful_migration_on) !=
            null &&
          t)
      ) {
        var a;
        return (
          (e.shouldAddState = !0),
          (e.tags = o("FalcoUtils").xorBitmap(
            (a = e.tags) != null ? a : [0, 0],
            I,
          )),
          !0
        );
      }
      if (e.policy.s === 1) {
        var i;
        return (
          (e.tags = o("FalcoUtils").xorBitmap(
            (i = e.tags) != null ? i : [0, 0],
            I,
          )),
          !0
        );
      }
      return !1;
    }
    function se(e) {
      if (e === "") return null;
      if (E.has(e)) return E.get(e);
      var t = { claim: "" },
        n = e.split("^#");
      if (n.length >= 4) {
        var r = n[0],
          o = n[1],
          a = n[2],
          i = n[3];
        (a !== ""
          ? (t = { appScopedIdentity: a, claim: i })
          : r !== "" &&
            (t = { fbIdentity: { accountId: r, actorId: o }, claim: i }),
          E.set(e, t));
      }
      return t;
    }
    function ue() {
      if (N) return;
      ((N = !0),
        r("PersistedQueue").setHandler("falco_queue_log", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = se(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              le(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log",
                    1,
                  ),
                  ie(),
                  x == null && (x = setTimeout(G, B)),
                  i && !e(a) && (n.item.identity = i),
                  H(t, n))
                : (i
                    ? (n.item.identity = i)
                    : (n.item.identity = (
                        d || (d = r("AnalyticsCoreData"))
                      ).identity),
                  ee.log([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_immediately", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = se(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              le(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_immediately",
                    1,
                  ),
                  ie(),
                  (x == null || !$) &&
                    (clearTimeout(x), (x = setTimeout(G, W)), ($ = !0)),
                  (n.item.logImmediate = !0),
                  i && !e(a) && (n.item.identity = i),
                  H(t, n),
                  r("PersistedQueue").isPersistenceAllowed() ||
                    (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.streaming_no_persistence.log_immediately",
                      1,
                    ),
                    G()))
                : (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.banzai.log_immediately",
                    1,
                  ),
                  i
                    ? (n.item.identity = i)
                    : (n.item.identity = (
                        d || (d = r("AnalyticsCoreData"))
                      ).identity),
                  ee.logImmediately([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_critical", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = se(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              var l = n.item;
              le(l)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_critical",
                    1,
                  ),
                  ie(),
                  (l.logCritical = !0),
                  A
                    ? (i && !e(a) && (l.identity = i),
                      b.enqueue(function (e) {
                        return e.logCritical([l], function (e) {
                          if (!e) {
                            (l.identity ||
                              (i
                                ? (l.identity = i)
                                : (l.identity = (
                                    d || (d = r("AnalyticsCoreData"))
                                  ).identity)),
                              z(
                                [[t, n]],
                                "event.info.banzai_fallback.log_critical",
                              ));
                            return;
                          }
                          j([[t, n]], e, "event.uploaded");
                        });
                      }))
                    : (i
                        ? (l.identity = i)
                        : (l.identity = (
                            d || (d = r("AnalyticsCoreData"))
                          ).identity),
                      z(
                        [[t, n]],
                        "event.non_critical_failure.streaming_init_not_complete.log_critical",
                      )))
                : (i
                    ? (l.identity = i)
                    : (l.identity = (
                        d || (d = r("AnalyticsCoreData"))
                      ).identity),
                  o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.banzai.log_critical",
                    1,
                  ),
                  ee.logCritical([l], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        (d || (d = r("AnalyticsCoreData"))).enable_dataloss_timer &&
          (ie(), re(), oe()));
      function e(e) {
        try {
          var t = o("FalcoUtils").identityToString(
            (d || (d = r("AnalyticsCoreData"))).identity,
          );
          return e === t;
        } catch (e) {
          return (
            (c || (c = o("ODS"))).bumpEntityKey(
              1344,
              "js.br.identity.check",
              "exception.when.comparing.with.current.user.identity",
              1,
            ),
            !0
          );
        }
      }
    }
    l.attach = ue;
  },
  98,
);
