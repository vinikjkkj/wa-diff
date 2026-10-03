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
    "RequestStreamCommonRequestStreamCommonTypes",
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
      b =
        (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
        ((c = (m || (m = r("AnalyticsCoreData")))
          .defer_size_flush_until_br_init) != null
          ? c
          : !1),
      v = "falco:",
      S = new (r("Queue"))(),
      R = 5e3,
      L = 6e4,
      E = r("uuidv4")(),
      k = "ods_web_batch",
      I = new Map(),
      T = new Set(),
      D = o("FalcoUtils").getTaggedBitmap(38),
      x = [],
      $ = 0,
      P = void 0,
      N = !1,
      M = !1,
      w = !1,
      A = !0,
      F = !1,
      O = !1,
      B = !1,
      W = void 0,
      q = 0,
      U = Date.now() - L,
      V = 1,
      H = C > h ? C : h,
      G = C;
    ye();
    for (var z of (j = (m || (m = r("AnalyticsCoreData")))
      .stateful_events_list_for_br) != null
      ? j
      : []) {
      var j;
      T.add(z);
    }
    function K() {
      return (
        (m || (m = r("AnalyticsCoreData"))).enable_bladerunner &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker &&
        (_ || (_ = r("ExecutionEnvironment"))).canUseDOM
      );
    }
    function Q() {
      return b && !B;
    }
    function X() {
      (clearTimeout(W), (W = void 0));
    }
    function Y() {
      S.start(function (e) {
        return e(me);
      });
    }
    function J() {
      ((W = void 0),
        !(O || B) &&
          ((B = !0),
          o("FalcoUtils").bumpODSMetrics(
            "",
            "streaming.non_critical_failure.init_timeout",
            1,
          ),
          Y()));
    }
    function Z() {
      (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
        b &&
        (clearTimeout(W), (W = setTimeout(J, C)));
    }
    function ee() {
      (X(), (B = !0), Y());
    }
    function te(e, t) {
      e.identity ||
        (t
          ? (e.identity = t)
          : (e.identity = (m || (m = r("AnalyticsCoreData"))).identity));
    }
    function ne(e, t) {
      o("FalcoUtils").bumpODSMetrics(
        t.item.name,
        "event.info.streaming.batched",
        1,
      );
      var n = t.item.extra.length;
      ($ + n > g && (clearTimeout(P), re()), x.push([e, t]), ($ += n));
    }
    function re() {
      ((P = void 0), (N = !1));
      var e = x;
      if (
        (ce(
          "event.info.streaming.batch_processing",
          e.map(function (e) {
            return e[1].item;
          }),
        ),
        !O && !Q())
      )
        oe(e, "event.non_critical_failure.streaming_init_not_complete");
      else {
        var t = !O;
        (t &&
          ce(
            "event.info.streaming.queued_until_init_complete",
            e.map(function (e) {
              return e[1].item;
            }),
          ),
          S.enqueue(function (n) {
            if (t && n === me) {
              oe(e, "event.non_critical_failure.streaming_init_failed");
              return;
            }
            n.log(
              e.map(function (e) {
                return e[1].item;
              }),
              function (t) {
                if (!t) {
                  oe(e, "event.info.banzai_fallback");
                  return;
                }
                ae(e, t, "event.info.streaming.enqueued");
              },
            );
          }));
      }
      ((x = []), ($ = 0));
    }
    function oe(e, t) {
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
          me.logCritical([l], function (e) {
            return n.markItem(i, e);
          });
        else {
          var s;
          (s = l.logImmediate) != null && s
            ? me.logImmediately([l], function (e) {
                return n.markItem(i, e);
              })
            : me.log([l], function (e) {
                return n.markItem(i, e);
              });
        }
      };
      for (var a of e) n();
    }
    function ae(e, t, n) {
      for (var r of e) {
        var a = r[0],
          i = r[1];
        (o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1), a.markItem(i, t));
      }
    }
    function ie(e) {
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
            identity: se(e.identity),
            expTags: e.exptTags,
            sessionID: e.sessionId,
            deviceID: e.deviceId,
          };
        }),
      };
    }
    function le(e) {
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
        (i.identity = se(m.identity)),
        Object.freeze(i)
      );
    }
    function se(e) {
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
    function ue(e, t) {
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
        (c != null && (s.cs = c), r("Banzai").post(v + n.name, s, t));
      }
      ce("event.uploaded", e);
    }
    function ce(e, t) {
      for (var n of t)
        n.name !== k && o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
    }
    function de(e, t) {
      var n =
        "falco.fabric.www." + (m || (m = r("AnalyticsCoreData"))).push_phase;
      (d || (d = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var me = {
      log: function (t, n) {
        (ce("event.info.banzai.log.upload_processing", t),
          ue(t, r("Banzai").BASIC),
          n(!0));
      },
      logImmediately: function (t, n) {
        (ce("event.info.banzai.log_immediately.upload_processing", t),
          ue(t, r("Banzai").VITAL),
          n(!0));
      },
      logCritical: function (t, n) {
        (ce("event.info.banzai.log_critical.upload_processing", t),
          ue(t, { signal: !0, retry: !0 }),
          n(!0));
      },
    };
    function pe(e) {
      ye();
      var t = _e(e, "banzai_data_loss", "log"),
        n = _e(e, "banzai_data_loss", "logImmediately"),
        o = _e(e, "banzai_data_loss", "logCritical"),
        a = _e(e, "bladerunner_data_loss", ""),
        i = _e(e, "bladerunner_data_loss", "logCritical");
      if ((de("js.br_data_loss.posted." + e, 1), O && A))
        try {
          S.enqueue(function (t) {
            return t.log([a], function (t) {
              if (!t) {
                (de("js.br.transport_failure." + e, 1),
                  me.logCritical([i], function (t) {
                    de("js.br.failure_fallback_success_callback." + e, 1);
                  }));
                return;
              }
              de("js.br.success_callback." + e, 1);
            });
          });
        } catch (t) {
          (de("js.br.error_enqueueing." + e, 1),
            me.logCritical([i], function (t) {
              de("js.br.enqueuing_fallback_success_callback." + e, 1);
            }));
        }
      else
        (A || de("js.br.failed." + e, 1),
          O || de("js.br.init_not_complete." + e, 1),
          me.logCritical([i], function (t) {
            de("js.br.init_fallback_success_callback." + e, 1);
          }));
      (ue([t], r("Banzai").BASIC),
        ue([n], r("Banzai").VITAL),
        ue([o], { signal: !0, retry: !0 }));
    }
    function _e(e, t, n) {
      return {
        name: t,
        time: (p || (p = r("performanceAbsoluteNow")))(),
        policy: { r: 1 },
        extra: JSON.stringify({
          event_index: e,
          falco_js_connection_id: E,
          logging_mode: n,
          logging_flow_flag: "original_flow",
        }),
        appVersion: (m || (m = r("AnalyticsCoreData"))).app_version,
      };
    }
    function fe() {
      U + R < Date.now() && (pe(V), (U = Date.now()), V++);
    }
    function ge() {
      window.setTimeout(function () {
        (fe(), V <= 40 && ge());
      }, L);
    }
    function he(e) {
      S.start(function (t) {
        return t({
          log: function (n, o) {
            ce("event.info.streaming.queue_processing", n);
            var t = JSON.stringify(ie(n));
            e
              ? (m || (m = r("AnalyticsCoreData"))).enable_ack
                ? r("promiseDone")(
                    e.amendWithAck(t),
                    function (e) {
                      (e
                        ? (ce("event.streamed.with_ack", n),
                          ce("event.uploaded", n))
                        : ce(
                            "event.non_critical_failure.streaming.ack_failed",
                            n,
                          ),
                        o(e));
                    },
                    function () {
                      (ce(
                        "event.non_critical_failure.streaming.ack_rejected",
                        n,
                      ),
                        o(!1));
                    },
                  )
                : (e.amendWithoutAck(t),
                  ce("event.streamed.without_ack", n),
                  ce("event.uploaded", n))
              : (ce(
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
    function ye() {
      M ||
        ((O = !1),
        K() &&
          (f.onReady(function (e) {
            if (!e) {
              ((A = !1), (F = !0), ee());
              return;
            }
            var t = e,
              n,
              a = !1,
              i = !1,
              l = q,
              s = function () {
                !a ||
                  !i ||
                  O ||
                  l !== q ||
                  (X(),
                  o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.info.init_accepted",
                    1,
                  ),
                  he(n),
                  (O = !0),
                  (B = !1),
                  (H = h),
                  (G = y));
              },
              u = {
                onTermination: function (t) {
                  t.message === "Stream closed"
                    ? (X(), S.stop(!0), (O = !1), (M = !1))
                    : (o("FalcoUtils").bumpODSMetrics(
                        "",
                        "streaming.non_critical_failure.rejected",
                        1,
                      ),
                      (A = !1),
                      ee());
                },
                onFlowStatus: function (t) {
                  b &&
                    (t ===
                      o("RequestStreamCommonRequestStreamCommonTypes")
                        .FlowStatus.Accepted ||
                      t ===
                        o("RequestStreamCommonRequestStreamCommonTypes")
                          .FlowStatus.Started) &&
                    ((i = !0), s());
                },
              };
            r("promiseDone")(
              t
                .requestStream(
                  { method: "Falco" },
                  JSON.stringify(le(o("WebSession").getId())),
                  u,
                  { requestId: "" },
                )
                .then(function (e) {
                  if (((n = e), b)) {
                    ((a = !0), s());
                    return;
                  }
                  (X(), he(n), (O = !0), (B = !1), (H = h), (G = y));
                })
                .catch(function (e) {
                  (o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.non_critical_failure.failed",
                    1,
                  ),
                    S.stop(!0),
                    (M = !1),
                    (A = !1),
                    ee());
                }),
            );
          }),
          (M = !0),
          q++,
          Z()));
    }
    function Ce(e) {
      var t,
        n = e.name;
      if (!K() || !A) return !1;
      if (
        T.has(n) ||
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
    function be(e) {
      if (e === "") return null;
      if (I.has(e)) return I.get(e);
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
          I.set(e, t));
      }
      return t;
    }
    function ve() {
      if (w) return;
      ((w = !0),
        r("PersistedQueue").setHandler("falco_queue_log", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = be(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              Ce(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log",
                    1,
                  ),
                  ye(),
                  P == null && (P = setTimeout(re, H)),
                  i && !e(a) && (n.item.identity = i),
                  ne(t, n))
                : (i
                    ? (n.item.identity = i)
                    : (n.item.identity = (
                        m || (m = r("AnalyticsCoreData"))
                      ).identity),
                  me.log([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_immediately", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = be(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              Ce(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_immediately",
                    1,
                  ),
                  ye(),
                  (P == null || !N) &&
                    (clearTimeout(P), (P = setTimeout(re, G)), (N = !0)),
                  (n.item.logImmediate = !0),
                  i && !e(a) && (n.item.identity = i),
                  ne(t, n),
                  r("PersistedQueue").isPersistenceAllowed() ||
                    (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.streaming_no_persistence.log_immediately",
                      1,
                    ),
                    re()))
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
                  me.logImmediately([n.item], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_critical", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = be(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              var l = n.item;
              if (Ce(l))
                if (
                  (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_critical",
                    1,
                  ),
                  ye(),
                  (l.logCritical = !0),
                  i && !e(a) && (l.identity = i),
                  !O && !Q())
                )
                  (te(l, i),
                    oe(
                      [[t, n]],
                      "event.non_critical_failure.streaming_init_not_complete.log_critical",
                    ));
                else {
                  var s = !O;
                  (s &&
                    o("FalcoUtils").bumpODSMetrics(
                      l.name,
                      "event.info.streaming.queued_until_init_complete.log_critical",
                      1,
                    ),
                    S.enqueue(function (e) {
                      if (s && e === me) {
                        (te(l, i),
                          oe(
                            [[t, n]],
                            "event.non_critical_failure.streaming_init_failed.log_critical",
                          ));
                        return;
                      }
                      e.logCritical([l], function (e) {
                        if (!e) {
                          (te(l, i),
                            oe(
                              [[t, n]],
                              "event.info.banzai_fallback.log_critical",
                            ));
                          return;
                        }
                        ae([[t, n]], e, "event.uploaded");
                      });
                    }));
                }
              else
                (i
                  ? (l.identity = i)
                  : (l.identity = (m || (m = r("AnalyticsCoreData"))).identity),
                  o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.banzai.log_critical",
                    1,
                  ),
                  me.logCritical([l], function (e) {
                    return t.markItem(n, e);
                  }));
            })(n);
        }),
        (m || (m = r("AnalyticsCoreData"))).enable_dataloss_timer &&
          (ye(), fe(), ge()));
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
    l.attach = ve;
  },
  98,
);
