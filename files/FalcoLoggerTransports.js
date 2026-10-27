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
      P = null,
      N = 0,
      M = void 0,
      w = !1,
      A = !1,
      F = !1,
      O = !0,
      B = !1,
      W = !1,
      q = !1,
      U = void 0,
      V = 0,
      H = Date.now() - L,
      G = 1,
      z = C > h ? C : h,
      j = C;
    ke();
    for (var K of (Q = (m || (m = r("AnalyticsCoreData")))
      .stateful_events_list_for_br) != null
      ? Q
      : []) {
      var Q;
      T.add(K);
    }
    function X() {
      return (
        (m || (m = r("AnalyticsCoreData"))).enable_bladerunner &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker &&
        (_ || (_ = r("ExecutionEnvironment"))).canUseDOM
      );
    }
    function Y() {
      return b && !q;
    }
    function J() {
      (clearTimeout(U), (U = void 0));
    }
    function Z() {
      S.start(function (e) {
        return e(ye);
      });
    }
    function ee() {
      ((U = void 0),
        !(W || q) &&
          ((q = !0),
          o("FalcoUtils").bumpODSMetrics(
            "",
            "streaming.non_critical_failure.init_timeout",
            1,
          ),
          Z()));
    }
    function te() {
      (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
        b &&
        (clearTimeout(U), (U = setTimeout(ee, C)));
    }
    function ne() {
      (J(), (q = !0), Z());
    }
    function re(e, t) {
      e.identity ||
        (t
          ? (e.identity = t)
          : (e.identity = (m || (m = r("AnalyticsCoreData"))).identity));
    }
    function oe(e, t) {
      o("FalcoUtils").bumpODSMetrics(
        t.item.name,
        "event.info.streaming.batched",
        1,
      );
      var n = t.item.extra.length;
      (N + n > g && (clearTimeout(M), ae()), x.push([e, t]), (N += n));
    }
    function ae() {
      ((M = void 0), (w = !1));
      var e = x;
      if (
        (ge(
          "event.info.streaming.batch_processing",
          e.map(function (e) {
            return e[1].item;
          }),
        ),
        !W && !Y())
      )
        ie(e, "event.non_critical_failure.streaming_init_not_complete");
      else {
        var t = !W;
        (t &&
          ge(
            "event.info.streaming.queued_until_init_complete",
            e.map(function (e) {
              return e[1].item;
            }),
          ),
          S.enqueue(function (n) {
            if (t && n === ye) {
              ie(e, "event.non_critical_failure.streaming_init_failed");
              return;
            }
            n.log(
              e.map(function (e) {
                return e[1].item;
              }),
              function (t) {
                if (!t) {
                  ie(e, "event.info.banzai_fallback");
                  return;
                }
                le(e, t, "event.info.streaming.enqueued");
              },
            );
          }));
      }
      ((x = []), (N = 0));
    }
    function ie(e, t) {
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
          ye.logCritical([l], function (e) {
            return n.markItem(i, e);
          });
        else {
          var s;
          (s = l.logImmediate) != null && s
            ? ye.logImmediately([l], function (e) {
                return n.markItem(i, e);
              })
            : ye.log([l], function (e) {
                return n.markItem(i, e);
              });
        }
      };
      for (var a of e) n();
    }
    function le(e, t, n) {
      for (var r of e) {
        var a = r[0],
          i = r[1];
        (o("FalcoUtils").bumpODSMetrics(i.item.name, n, 1), a.markItem(i, t));
      }
    }
    function se() {
      var e;
      return (
        ((e = (m || (m = r("AnalyticsCoreData"))).enable_falco_beacon) != null
          ? e
          : !1) &&
        (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
        !(_ || (_ = r("ExecutionEnvironment"))).isInWorker
      );
    }
    function ue(e, t) {
      var n,
        o = e.map(function (e) {
          var t = e[0],
            n = e[1];
          return n.item;
        });
      switch (t.kind) {
        case "rejected":
          (ge("event.non_critical_failure.beacon.rejected", o),
            r("FBLogger")("falco", "beacon_rejected").warn(
              "Falco beacon upload rejected with HTTP %s; %s events dropped",
              t.status,
              o.length,
            ));
          break;
        case "invalid":
          (ge("event.non_critical_failure.beacon.invalid_identity", o),
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
              ? (ge("event.info.beacon.assumed", [l.item]),
                ge("event.uploaded", [l.item]),
                i.markItem(l, !0))
              : (ge("event.info.beacon.unsent_kept", [l.item]),
                i.markItem(l, !1));
          }
          return;
        default:
          (ge("event.info.beacon." + t.kind, o), ge("event.uploaded", o));
      }
      for (var s of e) {
        var u = s[0],
          c = s[1];
        u.markItem(c, !0);
      }
    }
    function ce() {
      return (
        P == null &&
          (P = o("FalcoBeaconTransport").createFalcoBeaconTransport({
            getEvent: function (t) {
              return t.event;
            },
            onSettled: function (t, n) {
              for (var e of t) he("js.beacon." + n.kind + "." + e.odsSuffix, 1);
            },
            normalDelayMs: h,
            immediateDelayMs: y,
          })),
        P
      );
    }
    function de() {
      if ($ == null) {
        var e = o("FalcoBeaconTransport").createFalcoBeaconTransport({
          getEvent: function (t) {
            var e = t[0],
              n = t[1];
            return n.item;
          },
          onSettled: ue,
          normalDelayMs: h,
          immediateDelayMs: y,
        });
        (r("PersistedQueue").eventEmitter.addListener("inactive", e.onUnload),
          ($ = e));
      }
      return $;
    }
    function me(e) {
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
            identity: _e(e.identity),
            expTags: e.exptTags,
            sessionID: e.sessionId,
            deviceID: e.deviceId,
          };
        }),
      };
    }
    function pe(e) {
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
        (i.identity = _e(m.identity)),
        Object.freeze(i)
      );
    }
    function _e(e) {
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
    function fe(e, t) {
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
        n.tags != null && (i.b = n.tags);
        var l = n.identity;
        l && (i.id = l);
        var s = (m || (m = r("AnalyticsCoreData"))).consent_state;
        (s != null && (i.cs = s), r("Banzai").post(v + n.name, i, t));
      }
      ge("event.uploaded", e);
    }
    function ge(e, t) {
      for (var n of t)
        n.name !== k && o("FalcoUtils").bumpODSMetrics(n.name, e, 1);
    }
    function he(e, t) {
      var n =
        "falco.fabric.www." + (m || (m = r("AnalyticsCoreData"))).push_phase;
      (d || (d = o("ODS"))).bumpEntityKey(1344, n, e, t);
    }
    var ye = {
      log: function (t, n) {
        (ge("event.info.banzai.log.upload_processing", t),
          fe(t, r("Banzai").BASIC),
          n(!0));
      },
      logImmediately: function (t, n) {
        (ge("event.info.banzai.log_immediately.upload_processing", t),
          fe(t, r("Banzai").VITAL),
          n(!0));
      },
      logCritical: function (t, n) {
        (ge("event.info.banzai.log_critical.upload_processing", t),
          fe(t, { signal: !0, retry: !0 }),
          n(!0));
      },
    };
    function Ce(e) {
      ke();
      var t = Se(e, "banzai_data_loss", "log"),
        n = Se(e, "banzai_data_loss", "logImmediately"),
        o = Se(e, "banzai_data_loss", "logCritical"),
        a = Se(e, "bladerunner_data_loss", ""),
        i = Se(e, "bladerunner_data_loss", "logCritical");
      if ((he("js.br_data_loss.posted." + e, 1), W && O))
        try {
          S.enqueue(function (t) {
            return t.log([a], function (t) {
              if (!t) {
                (he("js.br.transport_failure." + e, 1),
                  ye.logCritical([i], function (t) {
                    he("js.br.failure_fallback_success_callback." + e, 1);
                  }));
                return;
              }
              he("js.br.success_callback." + e, 1);
            });
          });
        } catch (t) {
          (he("js.br.error_enqueueing." + e, 1),
            ye.logCritical([i], function (t) {
              he("js.br.enqueuing_fallback_success_callback." + e, 1);
            }));
        }
      else
        (O || he("js.br.failed." + e, 1),
          W || he("js.br.init_not_complete." + e, 1),
          ye.logCritical([i], function (t) {
            he("js.br.init_fallback_success_callback." + e, 1);
          }));
      (fe([t], r("Banzai").BASIC),
        fe([n], r("Banzai").VITAL),
        fe([o], { signal: !0, retry: !0 }),
        be(e, ""));
    }
    function be(e, t) {
      if (
        !(
          !(_ || (_ = r("ExecutionEnvironment"))).canUseDOM ||
          (_ || (_ = r("ExecutionEnvironment"))).isInWorker
        )
      ) {
        var n = ce(),
          o = function (o) {
            return {
              event: babelHelpers.extends(
                {},
                Se(e, "beacon_data_loss", t + o),
                { identity: (m || (m = r("AnalyticsCoreData"))).identity },
              ),
              odsSuffix: t + o + "." + e,
            };
          };
        (n.log(o("log")),
          n.logImmediately(o("logImmediately")),
          n.logCritical(o("logCritical")));
      }
    }
    function ve() {
      var e = G;
      if (
        (fe([Se(e, "banzai_data_loss", "unload.log")], r("Banzai").BASIC),
        fe(
          [Se(e, "banzai_data_loss", "unload.logImmediately")],
          r("Banzai").VITAL,
        ),
        fe([Se(e, "banzai_data_loss", "unload.logCritical")], {
          signal: !0,
          retry: !0,
        }),
        W && O)
      ) {
        var t = Se(e, "bladerunner_data_loss", "unload");
        S.enqueue(function (e) {
          return e.log([t], function (e) {
            he("js.br.unload." + (e ? "success" : "failure"), 1);
          });
        });
      }
      (be(e, "unload."), ce().onUnload());
    }
    function Se(e, t, n) {
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
        identity: m.identity,
      };
    }
    function Re() {
      H + R < Date.now() && (Ce(G), (H = Date.now()), G++);
    }
    function Le() {
      window.setTimeout(function () {
        (Re(), G <= 40 && Le());
      }, L);
    }
    function Ee(e) {
      S.start(function (t) {
        var n = {
          log: function (n, o) {
            ge("event.info.streaming.queue_processing", n);
            var t = JSON.stringify(me(n));
            e
              ? (m || (m = r("AnalyticsCoreData"))).enable_ack
                ? r("promiseDone")(
                    e.amendWithAck(t),
                    function (e) {
                      (e
                        ? (ge("event.streamed.with_ack", n),
                          ge("event.uploaded", n))
                        : ge(
                            "event.non_critical_failure.streaming.ack_failed",
                            n,
                          ),
                        o(e));
                    },
                    function () {
                      (ge(
                        "event.non_critical_failure.streaming.ack_rejected",
                        n,
                      ),
                        o(!1));
                    },
                  )
                : (e.amendWithoutAck(t),
                  ge("event.streamed.without_ack", n),
                  ge("event.uploaded", n))
              : (ge(
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
    function ke() {
      A ||
        ((W = !1),
        X() &&
          (f.onReady(function (e) {
            if (!e) {
              ((O = !1), (B = !0), ne());
              return;
            }
            var t = e,
              n,
              a = !1,
              i = !1,
              l = V,
              s = function () {
                !a ||
                  !i ||
                  W ||
                  l !== V ||
                  (J(),
                  o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.info.init_accepted",
                    1,
                  ),
                  Ee(n),
                  (W = !0),
                  (q = !1),
                  (z = h),
                  (j = y));
              },
              u = {
                onTermination: function (t) {
                  t.message === "Stream closed"
                    ? (J(), S.stop(!0), (W = !1), (A = !1))
                    : (o("FalcoUtils").bumpODSMetrics(
                        "",
                        "streaming.non_critical_failure.rejected",
                        1,
                      ),
                      (O = !1),
                      ne());
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
                  JSON.stringify(pe(o("WebSession").getId())),
                  u,
                  { requestId: "" },
                )
                .then(function (e) {
                  if (((n = e), b)) {
                    ((a = !0), s());
                    return;
                  }
                  (J(), Ee(n), (W = !0), (q = !1), (z = h), (j = y));
                })
                .catch(function (e) {
                  (o("FalcoUtils").bumpODSMetrics(
                    "",
                    "streaming.non_critical_failure.failed",
                    1,
                  ),
                    S.stop(!0),
                    (A = !1),
                    (O = !1),
                    ne());
                }),
            );
          }),
          (A = !0),
          V++,
          te()));
    }
    function Ie(e) {
      var t,
        n = e.name;
      if (!X() || !O) return !1;
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
    function Te(e) {
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
    function De() {
      if (F) return;
      ((F = !0),
        r("PersistedQueue").setHandler("falco_queue_log", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = Te(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              Ie(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log",
                    1,
                  ),
                  ke(),
                  M == null && (M = setTimeout(ae, z)),
                  i && !e(a) && (n.item.identity = i),
                  oe(t, n))
                : se()
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
                    de().log([t, n]))
                  : (i
                      ? (n.item.identity = i)
                      : (n.item.identity = (
                          m || (m = r("AnalyticsCoreData"))
                        ).identity),
                    ye.log([n.item], function (e) {
                      return t.markItem(n, e);
                    }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_immediately", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = Te(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              Ie(n.item)
                ? (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_immediately",
                    1,
                  ),
                  ke(),
                  (M == null || !w) &&
                    (clearTimeout(M), (M = setTimeout(ae, j)), (w = !0)),
                  (n.item.logImmediate = !0),
                  i && !e(a) && (n.item.identity = i),
                  oe(t, n),
                  r("PersistedQueue").isPersistenceAllowed() ||
                    (o("FalcoUtils").bumpODSMetrics(
                      n.item.name,
                      "event.info.streaming_no_persistence.log_immediately",
                      1,
                    ),
                    ae()))
                : se()
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
                    de().logImmediately([t, n]))
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
                    ye.logImmediately([n.item], function (e) {
                      return t.markItem(n, e);
                    }));
            })(n);
        }),
        r("PersistedQueue").setHandler("falco_queue_critical", function (t) {
          for (
            var n, a = t.getQueueNameSuffix(), i = Te(a);
            (n = t.dequeueItem());
          )
            (function (n) {
              var l = n.item;
              if (Ie(l))
                if (
                  (o("FalcoUtils").bumpODSMetrics(
                    n.item.name,
                    "event.info.upload_method.streaming.log_critical",
                    1,
                  ),
                  ke(),
                  (l.logCritical = !0),
                  i && !e(a) && (l.identity = i),
                  !W && !Y())
                )
                  (re(l, i),
                    ie(
                      [[t, n]],
                      "event.non_critical_failure.streaming_init_not_complete.log_critical",
                    ));
                else {
                  var s = !W;
                  (s &&
                    o("FalcoUtils").bumpODSMetrics(
                      l.name,
                      "event.info.streaming.queued_until_init_complete.log_critical",
                      1,
                    ),
                    S.enqueue(function (e) {
                      if (s && e === ye) {
                        (re(l, i),
                          ie(
                            [[t, n]],
                            "event.non_critical_failure.streaming_init_failed.log_critical",
                          ));
                        return;
                      }
                      e.logCritical([l], function (e) {
                        if (!e) {
                          (re(l, i),
                            ie(
                              [[t, n]],
                              "event.info.banzai_fallback.log_critical",
                            ));
                          return;
                        }
                        le([[t, n]], e, "event.uploaded");
                      });
                    }));
                }
              else
                se()
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
                    de().logCritical([t, n]))
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
                    ye.logCritical([l], function (e) {
                      return t.markItem(n, e);
                    }));
            })(n);
        }),
        (m || (m = r("AnalyticsCoreData"))).enable_dataloss_timer &&
          (ke(),
          Re(),
          Le(),
          (_ || (_ = r("ExecutionEnvironment"))).canUseDOM &&
            !(_ || (_ = r("ExecutionEnvironment"))).isInWorker &&
            window.addEventListener("pagehide", ve, { once: !0 })));
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
    l.attach = De;
  },
  98,
);
