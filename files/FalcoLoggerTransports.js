__d(
  "FalcoLoggerTransports",
  [
    "AnalyticsCoreData",
    "Banzai",
    "ExecutionEnvironment",
    "FBLogger",
    "FalcoBeaconTransport",
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
      $ = null,
      P = 0,
      N = void 0,
      M = !1,
      w = !1,
      A = !1,
      F = !0,
      O = !1,
      B = !1,
      W = !1,
      q = void 0,
      U = 0,
      V = Date.now() - L,
      H = 1,
      G = C > h ? C : h,
      z = C;
    Se();
    for (var j of (K = (m || (m = r("AnalyticsCoreData")))
      .stateful_events_list_for_br) != null
      ? K
      : []) {
      var K;
      T.add(j);
    }
    function Q() {
      return (
        (m || (m = r("AnalyticsCoreData"))).enable_bladerunner &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker &&
        (_ || (_ = r("ExecutionEnvironment"))).canUseDOM
      );
    }
    function X() {
      return b && !W;
    }
    function Y() {
      (clearTimeout(q), (q = void 0));
    }
    function J() {
      S.start(function (e) {
        return e(ge);
      });
    }
    function Z() {
      ((q = void 0),
        !(B || W) &&
          ((W = !0),
          o("FalcoUtils").bumpODSMetrics(
            "",
            "streaming.non_critical_failure.init_timeout",
            1,
          ),
          J()));
    }
    function ee() {
      (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
        b &&
        (clearTimeout(q), (q = setTimeout(Z, C)));
    }
    function te() {
      (Y(), (W = !0), J());
    }
    function ne(e, t) {
      e.identity ||
        (t
          ? (e.identity = t)
          : (e.identity = (m || (m = r("AnalyticsCoreData"))).identity));
    }
    function re(e, t) {
      o("FalcoUtils").bumpODSMetrics(
        t.item.name,
        "event.info.streaming.batched",
        1,
      );
      var n = t.item.extra.length;
      (P + n > g && (clearTimeout(N), oe()), x.push([e, t]), (P += n));
    }
    function oe() {
      ((N = void 0), (M = !1));
      var e = x;
      if (
        (_e(
          "event.info.streaming.batch_processing",
          e.map(function (e) {
            return e[1].item;
          }),
        ),
        !B && !X())
      )
        ae(e, "event.non_critical_failure.streaming_init_not_complete");
      else {
        var t = !B;
        (t &&
          _e(
            "event.info.streaming.queued_until_init_complete",
            e.map(function (e) {
              return e[1].item;
            }),
          ),
          S.enqueue(function (n) {
            if (t && n === ge) {
              ae(e, "event.non_critical_failure.streaming_init_failed");
              return;
            }
            n.log(
              e.map(function (e) {
                return e[1].item;
              }),
              function (t) {
                if (!t) {
                  ae(e, "event.info.banzai_fallback");
                  return;
                }
                ie(e, t, "event.info.streaming.enqueued");
              },
            );
          }));
      }
      ((x = []), (P = 0));
    }
    function ae(e, t) {
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
          ge.logCritical([l], function (e) {
            return n.markItem(i, e);
          });
        else {
          var s;
          (s = l.logImmediate) != null && s
            ? ge.logImmediately([l], function (e) {
                return n.markItem(i, e);
              })
            : ge.log([l], function (e) {
                return n.markItem(i, e);
              });
        }
      };
      for (var a of e) n();
    }
    function ie(e, t, n) {
      for (var r of e) {
        var a = r[0],
          i = r[1];
        (o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1), a.markItem(i, t));
      }
    }
    function le(e) {
      var t;
      return (
        ((t = (m || (m = r("AnalyticsCoreData"))).enable_falco_beacon) != null
          ? t
          : !1) &&
        (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker &&
        e.privacyContext == null
      );
    }
    function se(e, t) {
      var n,
        o = e.map(function (e) {
          var t = e[0],
            n = e[1];
          return n.item;
        });
      switch (t.kind) {
        case "rejected":
          (_e("event.non_critical_failure.beacon.rejected", o),
            r("FBLogger")("falco", "beacon_rejected").warn(
              "Falco beacon upload rejected with HTTP %s; %s events dropped",
              t.status,
              o.length,
            ));
          break;
        case "invalid":
          (_e("event.non_critical_failure.beacon.invalid_identity", o),
            r("FBLogger")("falco", "beacon_invalid_identity").warn(
              'Falco event "%s" has a malformed identity; dropped',
              (n = o[0]) == null ? void 0 : n.name,
            ));
          break;
        case "unsent":
          for (var a of e) {
            var i = a[0],
              l = a[1];
            i.isActive()
              ? (_e("event.info.beacon.assumed", [l.item]),
                _e("event.uploaded", [l.item]),
                i.markItem(l, !0))
              : (_e("event.info.beacon.unsent_kept", [l.item]),
                i.markItem(l, !1));
          }
          return;
        default:
          (_e("event.info.beacon." + t.kind, o), _e("event.uploaded", o));
      }
      for (var s of e) {
        var u = s[0],
          c = s[1];
        u.markItem(c, !0);
      }
    }
    function ue() {
      if ($ == null) {
        var e = o("FalcoBeaconTransport").createFalcoBeaconTransport({
          getEvent: function (t) {
            var e = t[0],
              n = t[1];
            return n.item;
          },
          onSettled: se,
          normalDelayMs: h,
          immediateDelayMs: y,
        });
        (r("PersistedQueue").eventEmitter.addListener("inactive", e.onUnload),
          ($ = e));
      }
      return $;
    }
    function ce(e) {
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
            identity: me(e.identity),
            expTags: e.exptTags,
            sessionID: e.sessionId,
            deviceID: e.deviceId,
          };
        }),
      };
    }
    function de(e) {
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
        (i.identity = me(m.identity)),
        Object.freeze(i)
      );
    }
    function me(e) {
      var t,
        n = (t = e == null ? void 0 : e.claims) != null ? t : [],
        r = e == null ? void 0 : e.appScopedIdentity;
      if (r !== void 0)
        return { appScopedIdentity: { uid: r, identifier: r, claims: n } };
      var o = e == null ? void 0 : e.fbIdentity;
      return o !== void 0 && String(o.accountId) !== "0"
        ? {
            facebookIdentity: {
              actorId: o.actorId,
              accountId: o.accountId,
              claims: n,
            },
          }
        : null;
    }
    function pe(e, t) {
      for (var n of e) {
        var o,
          a,
          i =
            ((a = {}),
            (a.e = n.extra),
            (a.r = n.policy.r),
            (a.d =
              (o = n.deviceId) != null
                ? o
                : (m || (m = r("AnalyticsCoreData"))).device_id),
            (a.s = n.sessionId),
            (a.t = n.time),
            (a.a = n.appVersion),
            a);
        (n.privacyContext && (i.p = n.privacyContext),
          n.tags != null && (i.b = n.tags));
        var l = n.identity;
        l && (i.id = l);
        var s = (m || (m = r("AnalyticsCoreData"))).consent_state;
        (s != null && (i.cs = s), r("Banzai").post(v + n.name, i, t));
      }
      _e("event.uploaded", e);
    }
    function _e(e, t) {
      for (var n of t)
        n.name !== k && o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
    }
    function fe(e, t) {
      var n =
        "falco.fabric.www." + (m || (m = r("AnalyticsCoreData"))).push_phase;
      (d || (d = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var ge = {
      log: function (t, n) {
        (_e("event.info.banzai.log.upload_processing", t),
          pe(t, r("Banzai").BASIC),
          n(!0));
      },
      logImmediately: function (t, n) {
        (_e("event.info.banzai.log_immediately.upload_processing", t),
          pe(t, r("Banzai").VITAL),
          n(!0));
      },
      logCritical: function (t, n) {
        (_e("event.info.banzai.log_critical.upload_processing", t),
          pe(t, { signal: !0, retry: !0 }),
          n(!0));
      },
    };
    function he(e) {
      Se();
      var t = ye(e, "banzai_data_loss", "log"),
        n = ye(e, "banzai_data_loss", "logImmediately"),
        o = ye(e, "banzai_data_loss", "logCritical"),
        a = ye(e, "bladerunner_data_loss", ""),
        i = ye(e, "bladerunner_data_loss", "logCritical");
      if ((fe("js.br_data_loss.posted." + e, 1), B && F))
        try {
          S.enqueue(function (t) {
            return t.log([a], function (t) {
              if (!t) {
                (fe("js.br.transport_failure." + e, 1),
                  ge.logCritical([i], function (t) {
                    fe("js.br.failure_fallback_success_callback." + e, 1);
                  }));
                return;
              }
              fe("js.br.success_callback." + e, 1);
            });
          });
        } catch (t) {
          (fe("js.br.error_enqueueing." + e, 1),
            ge.logCritical([i], function (t) {
              fe("js.br.enqueuing_fallback_success_callback." + e, 1);
            }));
        }
      else
        (F || fe("js.br.failed." + e, 1),
          B || fe("js.br.init_not_complete." + e, 1),
          ge.logCritical([i], function (t) {
            fe("js.br.init_fallback_success_callback." + e, 1);
          }));
      (pe([t], r("Banzai").BASIC),
        pe([n], r("Banzai").VITAL),
        pe([o], { signal: !0, retry: !0 }));
    }
    function ye(e, t, n) {
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
        sessionId: o("WebSession").getId(),
      };
    }
    function Ce() {
      V + R < Date.now() && (he(H), (V = Date.now()), H++);
    }
    function be() {
      window.setTimeout(function () {
        (Ce(), H <= 40 && be());
      }, L);
    }
    function ve(e) {
      S.start(function (t) {
        var n = {
          log: function (n, o) {
            _e("event.info.streaming.queue_processing", n);
            var t = JSON.stringify(ce(n));
            e
              ? (m || (m = r("AnalyticsCoreData"))).enable_ack
                ? r("promiseDone")(
                    e.amendWithAck(t),
                    function (e) {
                      (e
                        ? (_e("event.streamed.with_ack", n),
                          _e("event.uploaded", n))
                        : _e(
                            "event.non_critical_failure.streaming.ack_failed",
                            n,
                          ),
                        o(e));
                    },
                    function () {
                      (_e(
                        "event.non_critical_failure.streaming.ack_rejected",
                        n,
                      ),
                        o(!1));
                    },
                  )
                : (e.amendWithoutAck(t),
                  _e("event.streamed.without_ack", n),
                  _e("event.uploaded", n))
              : (_e(
                  "event.non_critical_error.streaming.stream_not_available",
                  n,
                ),
                o(!1));
          },
          logImmediately: function (t, r) {
            n.log(t, r);
          },
          logCritical: function (t, r) {
            n.log(t, r);
          },
        };
        t(n);
      });
    }
    function Se() {
      w ||
        ((B = !1),
        Q() &&
          (f.onReady(function (e) {
            if (!e) {
              ((F = !1), (O = !0), te());
              return;
            }
            var t = e,
              n,
              a = !1,
              i = !1,
              l = U,
              s = function () {
                !a ||
                  !i ||
                  B ||
                  l !== U ||
                  (Y(),
                  o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.info.init_accepted",
                    1,
                  ),
                  ve(n),
                  (B = !0),
                  (W = !1),
                  (G = h),
                  (z = y));
              },
              u = {
                onTermination: function (t) {
                  t.message === "Stream closed"
                    ? (Y(), S.stop(!0), (B = !1), (w = !1))
                    : (o("FalcoUtils").bumpODSMetrics(
                        "",
                        "streaming.non_critical_failure.rejected",
                        1,
                      ),
                      (F = !1),
                      te());
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
                  JSON.stringify(de(o("WebSession").getId())),
                  u,
                  { requestId: "" },
                )
                .then(function (e) {
                  if (((n = e), b)) {
                    ((a = !0), s());
                    return;
                  }
                  (Y(), ve(n), (B = !0), (W = !1), (G = h), (z = y));
                })
                .catch(function (e) {
                  (o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.non_critical_failure.failed",
                    1,
                  ),
                    S.stop(!0),
                    (w = !1),
                    (F = !1),
                    te());
                }),
            );
          }),
          (w = !0),
          U++,
          ee()));
    }
    function Re(e) {
      var t,
        n = e.name;
      if (!Q() || !F) return !1;
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
    function Le(e) {
      if (e === "") return null;
      if (I.has(e)) return I.get(e);
      var t = { claims: [] },
        n = e.split("^#");
      if (n.length >= 4) {
        var r = n[0],
          o = n[1],
          a = n[2],
          i = babelHelpers.arrayLikeToArray(n).slice(3),
          l = i.filter(function (e) {
            return e !== "";
          });
        (a !== ""
          ? (t = { appScopedIdentity: a, claims: l })
          : r !== "" &&
            (t = { fbIdentity: { accountId: r, actorId: o }, claims: l }),
          I.set(e, t));
      }
      return t;
    }
    function Ee() {
      if (A) return;
      ((A = !0),
        r("PersistedQueue").setHandler("falco_queue_log", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = Le(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              Re(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log",
                    1,
                  ),
                  Se(),
                  N == null && (N = setTimeout(oe, G)),
                  i && !e(a) && (n.item.identity = i),
                  re(t, n))
                : le(n.item)
                  ? (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.upload_method.beacon.log",
                      1,
                    ),
                    i
                      ? (n.item.identity = i)
                      : (n.item.identity = (
                          m || (m = r("AnalyticsCoreData"))
                        ).identity),
                    ue().log([t, n]))
                  : (i
                      ? (n.item.identity = i)
                      : (n.item.identity = (
                          m || (m = r("AnalyticsCoreData"))
                        ).identity),
                    ge.log([n.item], function (e) {
                      return t.markItem(n, e);
                    }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_immediately", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = Le(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              Re(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_immediately",
                    1,
                  ),
                  Se(),
                  (N == null || !M) &&
                    (clearTimeout(N), (N = setTimeout(oe, z)), (M = !0)),
                  (n.item.logImmediate = !0),
                  i && !e(a) && (n.item.identity = i),
                  re(t, n),
                  r("PersistedQueue").isPersistenceAllowed() ||
                    (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.streaming_no_persistence.log_immediately",
                      1,
                    ),
                    oe()))
                : le(n.item)
                  ? (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.upload_method.beacon.log_immediately",
                      1,
                    ),
                    i
                      ? (n.item.identity = i)
                      : (n.item.identity = (
                          m || (m = r("AnalyticsCoreData"))
                        ).identity),
                    ue().logImmediately([t, n]))
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
                    ge.logImmediately([n.item], function (e) {
                      return t.markItem(n, e);
                    }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_critical", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = Le(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              var l = n.item;
              if (Re(l))
                if (
                  (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_critical",
                    1,
                  ),
                  Se(),
                  (l.logCritical = !0),
                  i && !e(a) && (l.identity = i),
                  !B && !X())
                )
                  (ne(l, i),
                    ae(
                      [[t, n]],
                      "event.non_critical_failure.streaming_init_not_complete.log_critical",
                    ));
                else {
                  var s = !B;
                  (s &&
                    o("FalcoUtils").bumpODSMetrics(
                      l.name,
                      "event.info.streaming.queued_until_init_complete.log_critical",
                      1,
                    ),
                    S.enqueue(function (e) {
                      if (s && e === ge) {
                        (ne(l, i),
                          ae(
                            [[t, n]],
                            "event.non_critical_failure.streaming_init_failed.log_critical",
                          ));
                        return;
                      }
                      e.logCritical([l], function (e) {
                        if (!e) {
                          (ne(l, i),
                            ae(
                              [[t, n]],
                              "event.info.banzai_fallback.log_critical",
                            ));
                          return;
                        }
                        ie([[t, n]], e, "event.uploaded");
                      });
                    }));
                }
              else
                le(l)
                  ? (o("FalcoUtils").bumpODSMetrics(
                      l.name,
                      "event.info.upload_method.beacon.log_critical",
                      1,
                    ),
                    i
                      ? (l.identity = i)
                      : (l.identity = (
                          m || (m = r("AnalyticsCoreData"))
                        ).identity),
                    ue().logCritical([t, n]))
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
                    ge.logCritical([l], function (e) {
                      return t.markItem(n, e);
                    }));
            })(n);
        }),
        (m || (m = r("AnalyticsCoreData"))).enable_dataloss_timer &&
          (Se(), Ce(), be()));
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
    l.attach = Ee;
  },
  98,
);
