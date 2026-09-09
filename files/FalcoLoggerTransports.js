__d(
  "FalcoLoggerTransports",
  [
    "AnalyticsCoreData",
    "Banzai",
    "ExecutionEnvironment",
    "FalcoAppUniverse",
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
      _,
      f = r("requireDeferredForDisplay")(
        "TransportSelectingClientSingletonConditional",
      ).__setRef("FalcoLoggerTransports"),
      g = 5 * 1024,
      h =
        (e = (m || (m = r("AnalyticsCoreData"))).max_delay_br_queue) != null
          ? e
          : 60 * 1e3,
      y =
        (s = (m || (m = r("AnalyticsCoreData")))
          .max_delay_br_queue_immediate) != null
          ? s
          : 1e3,
      C =
        (u = (m || (m = r("AnalyticsCoreData")))
          .max_delay_br_init_not_complete) != null
          ? u
          : 1e3,
      b = "falco:",
      v = new (r("Queue"))(),
      S = 5e3,
      R = 6e4,
      L = r("uuidv4")(),
      E = "ods_web_batch",
      k = new Map(),
      I = new Set(),
      T = o("FalcoUtils").getTaggedBitmap(38),
      D =
        (c = r("FalcoAppUniverse").cast(
          (m || (m = r("AnalyticsCoreData"))).app_universe,
        )) != null
          ? c
          : 1,
      x = [],
      $ = 0,
      P = null,
      N = !1,
      M = !1,
      w = !1,
      A = !0,
      F = !1,
      O = !1,
      B = Date.now() - R,
      W = 1,
      q = C > h ? C : h,
      U = C;
    se();
    for (var V of (H = (m || (m = r("AnalyticsCoreData")))
      .stateful_events_list_for_br) != null
      ? H
      : []) {
      var H;
      I.add(V);
    }
    function G() {
      return (
        (m || (m = r("AnalyticsCoreData"))).enable_bladerunner &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker
      );
    }
    function z(e, t) {
      o("FalcoUtils").bumpODSMetrics(
        t.item.name,
        "event.info.streaming.batched",
        1,
      );
      var n = t.item.extra.length;
      ($ + n > g && (clearTimeout(P), j()), x.push([e, t]), ($ += n));
    }
    function j() {
      ((P = null), (N = !1));
      var e = x;
      (ee(
        "event.info.streaming.batch_processing",
        e.map(function (e) {
          return e[1].item;
        }),
      ),
        O
          ? v.enqueue(function (t) {
              return t.log(
                e.map(function (e) {
                  return e[1].item;
                }),
                function (t) {
                  if (!t) {
                    K(e, "event.info.banzai_fallback");
                    return;
                  }
                  Q(e, t, "event.info.streaming.enqueued");
                },
              );
            })
          : K(e, "event.non_critical_failure.streaming_init_not_complete"),
        (x = []),
        ($ = 0));
    }
    function K(e, t) {
      var n = function () {
        var e,
          n = a[0],
          i = a[1],
          l = i.item;
        if (
          (o("FalcoUtils").bumpODSMetrics(l.name, t, 1),
          l.identity ||
            (l.identity = (m || (m = r("AnalyticsCoreData"))).identity),
          (e = l.logCritical) != null && e)
        )
          ne.logCritical([l], function (e) {
            return n.markItem(i, e);
          });
        else {
          var s;
          (s = l.logImmediate) != null && s
            ? ne.logImmediately([l], function (e) {
                return n.markItem(i, e);
              })
            : ne.log([l], function (e) {
                return n.markItem(i, e);
              });
        }
      };
      for (var a of e) n();
    }
    function Q(e, t, n) {
      for (var r of e) {
        var a = r[0],
          i = r[1];
        (o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1), a.markItem(i, t));
      }
    }
    function X(e) {
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
            identity: J(e.identity),
            expTags: e.exptTags,
            sessionID: e.sessionId,
            deviceID: e.deviceId,
          };
        }),
      };
    }
    function Y(e) {
      var t,
        n,
        o,
        a,
        i = {
          deviceId: (m || (m = r("AnalyticsCoreData"))).device_id,
          familyDeviceId: null,
          osBuildNumber: null,
          sessionId: e,
          appId: m.app_id,
          appVersion:
            (t = (m || (m = r("AnalyticsCoreData"))).app_version) != null
              ? t
              : null,
          bundleId: null,
          consentState:
            (n = (m || (m = r("AnalyticsCoreData"))).consent_state) != null
              ? n
              : null,
          identity: null,
          pushPhase: m.push_phase,
        };
      return (
        ((o =
          (a = (m || (m = r("AnalyticsCoreData")))
            .stateful_events_list_for_br) == null
            ? void 0
            : a.length) != null
          ? o
          : 0) > 0 &&
          (i.ambientState = (m || (m = r("AnalyticsCoreData"))).state_for_br),
        (i.identity = J(m.identity)),
        Object.freeze(i)
      );
    }
    function J(e) {
      var t = e == null ? void 0 : e.claim,
        n = t != null ? [t] : [];
      if (D === 2 || D === 3 || D === 4 || D === 5) {
        var r = e == null ? void 0 : e.appScopedIdentity;
        if (r !== void 0)
          return { appScopedIdentity: { uid: r, identifier: r, claims: n } };
      } else {
        var o = e == null ? void 0 : e.fbIdentity;
        if (o !== void 0)
          return {
            facebookIdentity: {
              actorId: o.actorId,
              accountId: o.accountId,
              claims: n,
            },
          };
      }
      return null;
    }
    function Z(e, t) {
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
                : (m || (m = r("AnalyticsCoreData"))).device_id),
            (l.s = (i = n.sessionId) != null ? i : o("WebSession").getId()),
            (l.t = n.time),
            (l.a = n.appVersion),
            l);
        (n.privacyContext && (s.p = n.privacyContext),
          n.tags != null && (s.b = n.tags));
        var u = n.identity;
        u && (s.id = u);
        var c = (m || (m = r("AnalyticsCoreData"))).consent_state;
        (c != null && (s.cs = c), r("Banzai").post(b + n.name, s, t));
      }
      ee("event.uploaded", e);
    }
    function ee(e, t) {
      for (var n of t)
        n.name !== E && o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
    }
    function te(e, t) {
      var n =
        "falco.fabric.www." + (m || (m = r("AnalyticsCoreData"))).push_phase;
      (d || (d = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var ne = {
      log: function (t, n) {
        (ee("event.info.banzai.log.upload_processing", t),
          Z(t, r("Banzai").BASIC),
          n(!0));
      },
      logImmediately: function (t, n) {
        (ee("event.info.banzai.log_immediately.upload_processing", t),
          Z(t, r("Banzai").VITAL),
          n(!0));
      },
      logCritical: function (t, n) {
        (ee("event.info.banzai.log_critical.upload_processing", t),
          Z(t, { signal: !0, retry: !0 }),
          n(!0));
      },
    };
    function re(e) {
      se();
      var t = oe(e, "banzai_data_loss", "log"),
        n = oe(e, "banzai_data_loss", "logImmediately"),
        o = oe(e, "banzai_data_loss", "logCritical"),
        a = oe(e, "bladerunner_data_loss", ""),
        i = oe(e, "bladerunner_data_loss", "logCritical");
      if ((te("js.br_data_loss.posted." + e, 1), O && A))
        try {
          v.enqueue(function (t) {
            return t.log([a], function (t) {
              if (!t) {
                (te("js.br.transport_failure." + e, 1),
                  ne.logCritical([i], function (t) {
                    te("js.br.failure_fallback_success_callback." + e, 1);
                  }));
                return;
              }
              te("js.br.success_callback." + e, 1);
            });
          });
        } catch (t) {
          (te("js.br.error_enqueueing." + e, 1),
            ne.logCritical([i], function (t) {
              te("js.br.enqueuing_fallback_success_callback." + e, 1);
            }));
        }
      else
        (A || te("js.br.failed." + e, 1),
          O || te("js.br.init_not_complete." + e, 1),
          ne.logCritical([i], function (t) {
            te("js.br.init_fallback_success_callback." + e, 1);
          }));
      (Z([t], r("Banzai").BASIC),
        Z([n], r("Banzai").VITAL),
        Z([o], { signal: !0, retry: !0 }));
    }
    function oe(e, t, n) {
      return {
        name: t,
        time: (p || (p = r("performanceAbsoluteNow")))(),
        policy: { r: 1 },
        extra: JSON.stringify({
          event_index: e,
          falco_js_connection_id: L,
          logging_mode: n,
          logging_flow_flag: "original_flow",
        }),
        appVersion: (m || (m = r("AnalyticsCoreData"))).app_version,
      };
    }
    function ae() {
      B + S < Date.now() && (re(W), (B = Date.now()), W++);
    }
    function ie() {
      window.setTimeout(function () {
        (ae(), W <= 40 && ie());
      }, R);
    }
    function le(e) {
      v.start(function (t) {
        return t({
          log: function (n, o) {
            ee("event.info.streaming.queue_processing", n);
            var t = JSON.stringify(X(n));
            e
              ? (m || (m = r("AnalyticsCoreData"))).enable_ack
                ? r("promiseDone")(
                    e.amendWithAck(t),
                    function (e) {
                      (e
                        ? (ee("event.streamed.with_ack", n),
                          ee("event.uploaded", n))
                        : ee(
                            "event.non_critical_failure.streaming.ack_failed",
                            n,
                          ),
                        o(e));
                    },
                    function () {
                      (ee(
                        "event.non_critical_failure.streaming.ack_rejected",
                        n,
                      ),
                        o(!1));
                    },
                  )
                : (e.amendWithoutAck(t),
                  ee("event.streamed.without_ack", n),
                  ee("event.uploaded", n))
              : (ee(
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
    function se() {
      M ||
        ((O = !1),
        G() &&
          (f.onReady(function (e) {
            if (!e) {
              ((A = !1),
                (F = !0),
                v.start(function (e) {
                  return e(ne);
                }));
              return;
            }
            var t = e,
              n,
              a = {
                onTermination: function (t) {
                  t.message === "Stream closed"
                    ? (v.stop(!0), (M = !1))
                    : (o("FalcoUtils").bumpODSMetrics(
                        "",
                        "streaming.non_critical_failure.rejected",
                        1,
                      ),
                      (A = !1),
                      v.start(function (e) {
                        return e(ne);
                      }));
                },
                onFlowStatus: function () {},
              };
            r("promiseDone")(
              t
                .requestStream(
                  { method: "Falco" },
                  JSON.stringify(Y(o("WebSession").getId())),
                  a,
                  { requestId: "" },
                )
                .then(function (e) {
                  ((n = e), le(n), (O = !0), (q = h), (U = y));
                })
                .catch(function (e) {
                  (o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.non_critical_failure.failed",
                    1,
                  ),
                    v.stop(!0),
                    (M = !1));
                }),
            );
          }),
          (M = !0)));
    }
    function ue(e) {
      var t,
        n = e.name;
      if (!G() || !A) return !1;
      if (
        I.has(n) ||
        (e.policy.s !== 1 &&
          (t = (m || (m = r("AnalyticsCoreData"))).br_stateful_migration_on) !=
            null &&
          t)
      ) {
        var a;
        return (
          (e.shouldAddState = !0),
          (e.tags = o("FalcoUtils").xorBitmap(
            (a = e.tags) != null ? a : [0, 0],
            T,
          )),
          !0
        );
      }
      if (e.policy.s === 1) {
        var i;
        return (
          (e.tags = o("FalcoUtils").xorBitmap(
            (i = e.tags) != null ? i : [0, 0],
            T,
          )),
          !0
        );
      }
      return !1;
    }
    function ce(e) {
      if (e === "") return null;
      if (k.has(e)) return k.get(e);
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
          k.set(e, t));
      }
      return t;
    }
    function de() {
      if (w) return;
      ((w = !0),
        r("PersistedQueue").setHandler("falco_queue_log", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = ce(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              ue(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log",
                    1,
                  ),
                  se(),
                  P == null && (P = setTimeout(j, q)),
                  i && !e(a) && (n.item.identity = i),
                  z(t, n))
                : (i
                    ? (n.item.identity = i)
                    : (n.item.identity = (
                        m || (m = r("AnalyticsCoreData"))
                      ).identity),
                  ne.log([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_immediately", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = ce(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              ue(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_immediately",
                    1,
                  ),
                  se(),
                  (P == null || !N) &&
                    (clearTimeout(P), (P = setTimeout(j, U)), (N = !0)),
                  (n.item.logImmediate = !0),
                  i && !e(a) && (n.item.identity = i),
                  z(t, n),
                  r("PersistedQueue").isPersistenceAllowed() ||
                    (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.streaming_no_persistence.log_immediately",
                      1,
                    ),
                    j()))
                : (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.banzai.log_immediately",
                    1,
                  ),
                  i
                    ? (n.item.identity = i)
                    : (n.item.identity = (
                        m || (m = r("AnalyticsCoreData"))
                      ).identity),
                  ne.logImmediately([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_critical", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = ce(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              var l = n.item;
              ue(l)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_critical",
                    1,
                  ),
                  se(),
                  (l.logCritical = !0),
                  O
                    ? (i && !e(a) && (l.identity = i),
                      v.enqueue(function (e) {
                        return e.logCritical([l], function (e) {
                          if (!e) {
                            (l.identity ||
                              (i
                                ? (l.identity = i)
                                : (l.identity = (
                                    m || (m = r("AnalyticsCoreData"))
                                  ).identity)),
                              K(
                                [[t, n]],
                                "event.info.banzai_fallback.log_critical",
                              ));
                            return;
                          }
                          Q([[t, n]], e, "event.uploaded");
                        });
                      }))
                    : (i
                        ? (l.identity = i)
                        : (l.identity = (
                            m || (m = r("AnalyticsCoreData"))
                          ).identity),
                      K(
                        [[t, n]],
                        "event.non_critical_failure.streaming_init_not_complete.log_critical",
                      )))
                : (i
                    ? (l.identity = i)
                    : (l.identity = (
                        m || (m = r("AnalyticsCoreData"))
                      ).identity),
                  o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.banzai.log_critical",
                    1,
                  ),
                  ne.logCritical([l], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        (m || (m = r("AnalyticsCoreData"))).enable_dataloss_timer &&
          (se(), ae(), ie()));
      function e(e) {
        try {
          var t = o("FalcoUtils").identityToString(
            (m || (m = r("AnalyticsCoreData"))).identity,
          );
          return e === t;
        } catch (e) {
          return (
            (d || (d = o("ODS"))).bumpEntityKey(
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
    l.attach = de;
  },
  98,
);
