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
      T = new Set(),
      D = o("FalcoUtils").getTaggedBitmap(38),
      x =
        (c = r("FalcoAppUniverse").cast(
          (m || (m = r("AnalyticsCoreData"))).app_universe,
        )) != null
          ? c
          : 1,
      $ = [],
      P = 0,
      N = null,
      M = !1,
      w = !1,
      A = !1,
      F = !0,
      O = !1,
      B = !1,
      W = Date.now() - R,
      q = 1,
      U = C > h ? C : h,
      V = C;
    de();
    for (var H of (G = (m || (m = r("AnalyticsCoreData")))
      .stateful_events_list_for_br) != null
      ? G
      : []) {
      var G;
      I.add(H);
    }
    for (var z of (j = (m || (m = r("AnalyticsCoreData")))
      .stateless_non_fb_events_for_br) != null
      ? j
      : []) {
      var j;
      T.add(z);
    }
    function K() {
      return (
        (m || (m = r("AnalyticsCoreData"))).enable_bladerunner &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker
      );
    }
    function Q(e, t) {
      o("FalcoUtils").bumpODSMetrics(
        t.item.name,
        "event.info.streaming.batched",
        1,
      );
      var n = t.item.extra.length;
      (P + n > g && (clearTimeout(N), X()), $.push([e, t]), (P += n));
    }
    function X() {
      ((N = null), (M = !1));
      var e = $;
      (re(
        "event.info.streaming.batch_processing",
        e.map(function (e) {
          return e[1].item;
        }),
      ),
        B
          ? v.enqueue(function (t) {
              return t.log(
                e.map(function (e) {
                  return e[1].item;
                }),
                function (t) {
                  if (!t) {
                    Y(e, "event.info.banzai_fallback");
                    return;
                  }
                  J(e, t, "event.info.streaming.enqueued");
                },
              );
            })
          : Y(e, "event.non_critical_failure.streaming_init_not_complete"),
        ($ = []),
        (P = 0));
    }
    function Y(e, t) {
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
          ae.logCritical([l], function (e) {
            return n.markItem(i, e);
          });
        else {
          var s;
          (s = l.logImmediate) != null && s
            ? ae.logImmediately([l], function (e) {
                return n.markItem(i, e);
              })
            : ae.log([l], function (e) {
                return n.markItem(i, e);
              });
        }
      };
      for (var a of e) n();
    }
    function J(e, t, n) {
      for (var r of e) {
        var a = r[0],
          i = r[1];
        (o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1), a.markItem(i, t));
      }
    }
    function Z(e) {
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
            identity: te(e.identity),
            expTags: e.exptTags,
            sessionID: e.sessionId,
            deviceID: e.deviceId,
          };
        }),
      };
    }
    function ee(e) {
      var t,
        n,
        o,
        a = {
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
          consentState: null,
          identity: null,
          pushPhase: m.push_phase,
        };
      return (
        ((n =
          (o = (m || (m = r("AnalyticsCoreData")))
            .stateful_events_list_for_br) == null
            ? void 0
            : o.length) != null
          ? n
          : 0) > 0 &&
          (a.ambientState = (m || (m = r("AnalyticsCoreData"))).state_for_br),
        (a.identity = te(m.identity)),
        Object.freeze(a)
      );
    }
    function te(e) {
      var t = e == null ? void 0 : e.claim,
        n = t != null ? [t] : [];
      if (x === 2 || x === 3 || x === 4) {
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
    function ne(e, t) {
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
        (u && (s.id = u), r("Banzai").post(b + n.name, s, t));
      }
      re("event.uploaded", e);
    }
    function re(e, t) {
      for (var n of t)
        n.name !== E && o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
    }
    function oe(e, t) {
      var n =
        "falco.fabric.www." + (m || (m = r("AnalyticsCoreData"))).push_phase;
      (d || (d = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var ae = {
      log: function (t, n) {
        (re("event.info.banzai.log.upload_processing", t),
          ne(t, r("Banzai").BASIC),
          n(!0));
      },
      logImmediately: function (t, n) {
        (re("event.info.banzai.log_immediately.upload_processing", t),
          ne(t, r("Banzai").VITAL),
          n(!0));
      },
      logCritical: function (t, n) {
        (re("event.info.banzai.log_critical.upload_processing", t),
          ne(t, { signal: !0, retry: !0 }),
          n(!0));
      },
    };
    function ie(e) {
      de();
      var t = le(e, "banzai_data_loss", "log"),
        n = le(e, "banzai_data_loss", "logImmediately"),
        o = le(e, "banzai_data_loss", "logCritical"),
        a = le(e, "bladerunner_data_loss", ""),
        i = le(e, "bladerunner_data_loss", "logCritical");
      if ((oe("js.br_data_loss.posted." + e, 1), B && F))
        try {
          v.enqueue(function (t) {
            return t.log([a], function (t) {
              if (!t) {
                (oe("js.br.transport_failure." + e, 1),
                  ae.logCritical([i], function (t) {
                    oe("js.br.failure_fallback_success_callback." + e, 1);
                  }));
                return;
              }
              oe("js.br.success_callback." + e, 1);
            });
          });
        } catch (t) {
          (oe("js.br.error_enqueueing." + e, 1),
            ae.logCritical([i], function (t) {
              oe("js.br.enqueuing_fallback_success_callback." + e, 1);
            }));
        }
      else
        (F || oe("js.br.failed." + e, 1),
          B || oe("js.br.init_not_complete." + e, 1),
          ae.logCritical([i], function (t) {
            oe("js.br.init_fallback_success_callback." + e, 1);
          }));
      (ne([t], r("Banzai").BASIC),
        ne([n], r("Banzai").VITAL),
        ne([o], { signal: !0, retry: !0 }));
    }
    function le(e, t, n) {
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
    function se() {
      W + S < Date.now() && (ie(q), (W = Date.now()), q++);
    }
    function ue() {
      window.setTimeout(function () {
        (se(), q <= 40 && ue());
      }, R);
    }
    function ce(e) {
      v.start(function (t) {
        return t({
          log: function (n, o) {
            re("event.info.streaming.queue_processing", n);
            var t = JSON.stringify(Z(n));
            e
              ? (m || (m = r("AnalyticsCoreData"))).enable_ack
                ? r("promiseDone")(
                    e.amendWithAck(t),
                    function (e) {
                      (e
                        ? (re("event.streamed.with_ack", n),
                          re("event.uploaded", n))
                        : re(
                            "event.non_critical_failure.streaming.ack_failed",
                            n,
                          ),
                        o(e));
                    },
                    function () {
                      (re(
                        "event.non_critical_failure.streaming.ack_rejected",
                        n,
                      ),
                        o(!1));
                    },
                  )
                : (e.amendWithoutAck(t),
                  re("event.streamed.without_ack", n),
                  re("event.uploaded", n))
              : (re(
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
    function de() {
      w ||
        ((B = !1),
        K() &&
          (f.onReady(function (e) {
            if (!e) {
              ((F = !1),
                (O = !0),
                v.start(function (e) {
                  return e(ae);
                }));
              return;
            }
            var t = e,
              n,
              a = {
                onTermination: function (t) {
                  t.message === "Stream closed"
                    ? (v.stop(!0), (w = !1))
                    : (o("FalcoUtils").bumpODSMetrics(
                        "",
                        "streaming.non_critical_failure.rejected",
                        1,
                      ),
                      (F = !1),
                      v.start(function (e) {
                        return e(ae);
                      }));
                },
                onFlowStatus: function () {},
              };
            r("promiseDone")(
              t
                .requestStream(
                  { method: "Falco" },
                  JSON.stringify(ee(o("WebSession").getId())),
                  a,
                  { requestId: "" },
                )
                .then(function (e) {
                  ((n = e), ce(n), (B = !0), (U = h), (V = y));
                })
                .catch(function (e) {
                  (o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.non_critical_failure.failed",
                    1,
                  ),
                    v.stop(!0),
                    (w = !1));
                }),
            );
          }),
          (w = !0)));
    }
    function me(e) {
      var t,
        n = e.name;
      if (!K() || !F) return !1;
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
            D,
          )),
          !0
        );
      }
      if (
        x !== 1 &&
        (m || (m = r("AnalyticsCoreData")))
          .enable_non_fb_br_stateless_by_default !== !0 &&
        !T.has(n)
      )
        return !1;
      if (e.policy.s === 1) {
        var i;
        return (
          (e.tags = o("FalcoUtils").xorBitmap(
            (i = e.tags) != null ? i : [0, 0],
            D,
          )),
          !0
        );
      }
      return !1;
    }
    function pe(e) {
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
    function _e() {
      if (A) return;
      ((A = !0),
        r("PersistedQueue").setHandler("falco_queue_log", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = pe(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              me(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log",
                    1,
                  ),
                  de(),
                  N == null && (N = setTimeout(X, U)),
                  i && !e(a) && (n.item.identity = i),
                  Q(t, n))
                : (i
                    ? (n.item.identity = i)
                    : (n.item.identity = (
                        m || (m = r("AnalyticsCoreData"))
                      ).identity),
                  ae.log([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_immediately", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = pe(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              me(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_immediately",
                    1,
                  ),
                  de(),
                  (N == null || !M) &&
                    (clearTimeout(N), (N = setTimeout(X, V)), (M = !0)),
                  (n.item.logImmediate = !0),
                  i && !e(a) && (n.item.identity = i),
                  Q(t, n),
                  r("PersistedQueue").isPersistenceAllowed() ||
                    (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.streaming_no_persistence.log_immediately",
                      1,
                    ),
                    X()))
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
                  ae.logImmediately([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_critical", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = pe(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              var l = n.item;
              me(l)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_critical",
                    1,
                  ),
                  de(),
                  (l.logCritical = !0),
                  B
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
                              Y(
                                [[t, n]],
                                "event.info.banzai_fallback.log_critical",
                              ));
                            return;
                          }
                          J([[t, n]], e, "event.uploaded");
                        });
                      }))
                    : (i
                        ? (l.identity = i)
                        : (l.identity = (
                            m || (m = r("AnalyticsCoreData"))
                          ).identity),
                      Y(
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
                  ae.logCritical([l], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        (m || (m = r("AnalyticsCoreData"))).enable_dataloss_timer &&
          (de(), se(), ue()));
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
    l.attach = _e;
  },
  98,
);
