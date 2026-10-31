__d(
  "MediaPlaybackCompoundEventStateMachineLogger",
  [
    "ExecutionEnvironment",
    "MediaPlaybackTagMetadataHighFrequencyCategory",
    "NetworkStatus",
    "SiteData",
    "emptyFunction",
    "gkx",
    "hashString",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 6e4,
      c = 1e3,
      d = Object.freeze([
        "paused",
        "completed",
        "cancelled",
        "error",
        "heartbeat",
      ]),
      m = (s = r("emptyFunction")),
      p = s,
      _ = s,
      f = s,
      g = !1;
    r("gkx")("494") &&
      ((g = !0),
      (m = function (n, o) {
        if ((e || (e = r("ExecutionEnvironment"))).canUseDOM)
          try {
            for (
              var t,
                a = arguments.length,
                i = new Array(a > 2 ? a - 2 : 0),
                l = 2;
              l < a;
              l++
            )
              i[l - 2] = arguments[l];
            (t = window.console).info.apply(
              t,
              ["[" + n + "][SNAPL]" + o].concat(i),
            );
          } catch (e) {}
      }),
      (p = function (t, n, r, o) {
        m(t, "[handleMetaData]", {
          loggingMetaData: r,
          loggingMetaDataPrevious: n,
          trackedChanges: o,
        });
      }),
      (_ = function (t, n, r, o) {
        m(t, "[handleStateMachine]", { prevState: n, state: r, action: o });
      }),
      (f = function (t, n) {
        m(t, "[setAdditionalLogData(SNAPL)]", { values: n });
      }));
    function h(e, t) {
      if (e === t || (Number.isNaN(e) && Number.isNaN(t))) return !0;
      if (
        e == null ||
        t == null ||
        typeof e != "object" ||
        typeof t != "object"
      )
        return !1;
      var n = Object.keys(e);
      return (
        n.length === Object.keys(t).length &&
        n.every(function (n) {
          return n in t && h(e[n], t[n]);
        })
      );
    }
    function y() {
      return {
        bufferingSequenceStartClockTimestamp: null,
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        errorRecoveryAttemptState: { eventsLogged: 0 },
        hasLoggedStartedPlaying: !1,
        hasPendingRequestedPlaying: !1,
        isLoggingScrubbingSequence: !1,
        lastLoggedError: null,
        lastLoggedTagMetadata: {},
        nextHeartbeatTime: null,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
        warningState: {
          eventsLoggedPerKey: new Map(),
          eventsLoggedTotal: 0,
          eventsMaxLoggedPerKey: (function () {
            try {
              return Math.max(0, r("justknobx")._("1831") || 0);
            } catch (e) {
              return 0;
            }
          })(),
          eventsMaxLoggedTotal: (function () {
            try {
              return Math.max(0, r("justknobx")._("1832") || 0);
            } catch (e) {
              return 0;
            }
          })(),
        },
      };
    }
    function C(e) {
      var t = {},
        n =
          e.initialCoreVideoPlayerMetaData.loggingConfig
            .loggingToSNAPLPlayRequestRefactorEnabled === !0,
        o = e.initialLoggingMetaData,
        a = e.initialCoreVideoPlayerMetaData,
        i = [],
        l = y(),
        s = [],
        C = {};
      function b(t) {
        var n,
          r,
          s = t.events,
          u = t.state,
          c = babelHelpers.extends({}, a.loggingToSNAPLAdditionalData, C),
          d =
            (n =
              (r = e.metadataProvider) == null
                ? void 0
                : r.getRequiredMetadata({
                    coreVideoPlayerMetaData: a,
                    logDataAdditions: c,
                    loggingMetaData: o,
                    state: u,
                  })) != null
              ? n
              : {
                  current_watching_module: "",
                  media_id: "",
                  tracking_type: "none",
                },
          p = { events: s, required_metadata: d };
        (i.push(p),
          g &&
            m(
              e.debugLogId,
              "[_push] " +
                p.events
                  .map(function (e) {
                    return e.event_name;
                  })
                  .join(","),
              {
                loggedEvent: p,
                loggerEventsLength: i.length,
                loggingState: JSON.stringify(l),
              },
            ));
      }
      function v(n) {
        var r = n.event,
          o = n.state;
        if (
          (s.push(r),
          g &&
            m(e.debugLogId, "[_addEvent] " + r.event_name, {
              event: r,
              eventsListLength: s.length,
              loggingState: JSON.stringify(l),
            }),
          d.includes(r.event_name))
        ) {
          var a = [].concat(s);
          ((s = []), b({ events: a, state: o }));
        }
        return t;
      }
      function S() {
        return l.hasLoggedStartedPlaying ? "unpaused" : "started";
      }
      function R(e, t) {
        var n = e.uncontrolledState.videoElementDuration;
        return {
          client_time_ms: r("gkx")("18028")
            ? Math.floor(e.uncontrolledState.clockTimestamp).toString()
            : Math.round(e.uncontrolledState.clockTimestamp).toString(),
          event_name: t,
          media_time_ms:
            e.uncontrolledState.videoElementPlayheadPosition != null
              ? Math.round(
                  e.uncontrolledState.videoElementPlayheadPosition * 1e3,
                ).toString()
              : "0",
          player_instance_id: Math.abs(
            r("hashString")(o.instanceKey),
          ).toString(),
          player_instance_key: o.instanceKey,
          video_client_duration:
            n != null ? Math.trunc(n * 1e3).toString() : void 0,
        };
      }
      function L(t) {
        if (t.type === "notify_logging_metadata_change") {
          var n = t.payload,
            r = n.coreVideoPlayerMetaData,
            i = n.loggingMetaData;
          if (g) {
            var l = r.initialTracePolicy !== a.initialTracePolicy;
            p(e.debugLogId, o, i, { initialTracePolicyChanged: l });
          }
          ((o = i), (a = r));
        }
      }
      function E(e, n, r) {
        if (
          e.controlledState.playbackState !== n.controlledState.playbackState &&
          n.controlledState.playbackState === "ended" &&
          l.canLogPausedOrFinishedPlaying
        ) {
          I(n);
          var o = R(n, "completed");
          return (
            v({ event: o, state: n }),
            (l.canLogPausedOrFinishedPlaying = !1),
            t
          );
        } else return t;
      }
      function k(e, n) {
        var r = R(e, "requested_playing"),
          o =
            n != null
              ? babelHelpers.extends({}, r, {
                  media_time_ms: Math.round(n * 1e3).toString(),
                  start_state: S(),
                })
              : babelHelpers.extends({}, r, { start_state: S() });
        return (
          v({ event: o, state: e }),
          (l.hasPendingRequestedPlaying = !0),
          (l.canLogPausedOrFinishedPlaying = !0),
          t
        );
      }
      function I(n, r) {
        var i,
          l = babelHelpers.extends({}, a.loggingToSNAPLAdditionalData, C),
          s =
            (i = e.metadataProvider) == null
              ? void 0
              : i.getTagMetadata({
                  coreVideoPlayerMetaData: a,
                  logDataAdditions: l,
                  loggingMetaData: o,
                  state: n,
                });
        if (s != null) {
          var u =
            e.getEncodingCostMetadata == null
              ? void 0
              : e.getEncodingCostMetadata();
          u != null &&
            (s = babelHelpers.extends({}, s, { encoding_playback_cost: u }));
        }
        if (Object.keys(s != null ? s : {}).length > 0) {
          r && (s = babelHelpers.extends({}, s, r));
          var c = babelHelpers.extends({}, R(n, "tags_changed"), {
            tag_metadata: s,
          });
          v({ event: c, state: n });
        }
        return t;
      }
      function T(e) {
        if (l.canLogPausedOrFinishedPlaying) {
          if (l.hasPendingRequestedPlaying)
            return (
              I(e),
              D(e),
              (l.canLogPausedOrFinishedPlaying = !1),
              (l.hasPendingRequestedPlaying = !1),
              t
            );
          I(e);
          var n = R(e, "paused");
          return (
            v({ event: n, state: e }),
            (l.canLogPausedOrFinishedPlaying = !1),
            (l.hasPendingRequestedPlaying = !1),
            t
          );
        } else return t;
      }
      function D(e) {
        var r = babelHelpers.extends(
          {},
          R(e, "cancelled"),
          n ? { start_state: S() } : {},
        );
        return (
          v({ event: r, state: e }),
          n &&
            ((l.canLogPausedOrFinishedPlaying = !1),
            (l.hasPendingRequestedPlaying = !1)),
          t
        );
      }
      function x(e, r, o) {
        if (!n) {
          if (
            o.type === "dom_event_play_promise_rejected" &&
            l.hasPendingRequestedPlaying
          )
            e: {
              if (
                ((typeof o.payload.playPromiseRejectionReason == "object" &&
                  o.payload.playPromiseRejectionReason !== null) ||
                  typeof o.payload.playPromiseRejectionReason == "function") &&
                o.payload.playPromiseRejectionReason.name === "NotAllowedError"
              ) {
                D(r);
                break e;
              }
              return t;
            }
          return t;
        }
        return (
          l.hasPendingRequestedPlaying &&
            r.controlledState.playbackState === "paused" &&
            ((o.type === "dom_event_play_promise_rejected" &&
              e.controlledState.hostCallPlayIDLast ===
                o.payload.hostCallPlayID) ||
              (o.type === "dom_event_durationchange" &&
                e.controlledState.playbackState === "stalling")) &&
            D(r),
          t
        );
      }
      function $(e, n, r) {
        return (
          (r.type === "controller_play_requested" ||
            (r.type === "dom_event_play" && !l.shouldIgnoreDomPlay)) &&
            e.controlledState.playbackState !==
              n.controlledState.playbackState &&
            k(n),
          t
        );
      }
      function P(e) {
        var n = R(e, "requested_seek");
        return (v({ event: n, state: e }), t);
      }
      function N(e, n, r) {
        var o = n.controlledState.playbackState,
          a = e.controlledState.playbackState;
        return r.type === "controller_scrub_begin_requested" &&
          !e.controlledState.scrubbing &&
          o !== "paused" &&
          o !== "ended"
          ? (T(n), P(n), (l.isLoggingScrubbingSequence = !0), t)
          : !e.controlledState.seeking &&
              n.controlledState.seeking &&
              !l.isLoggingScrubbingSequence &&
              o !== "paused" &&
              o !== "ended" &&
              !l.hasPendingRequestedPlaying
            ? (T(n), P(n), (l.shouldLogRequestedPlayingForScrub = !0), t)
            : r.type === "controller_scrub_end_requested" &&
                e.controlledState.scrubbing &&
                o !== "paused" &&
                o !== "ended"
              ? (k(n, r.payload.seekTargetPosition), t)
              : (e.controlledState.seeking &&
                  !n.controlledState.seeking &&
                  (l.shouldLogRequestedPlayingForScrub &&
                    o !== "paused" &&
                    o !== "ended" &&
                    k(n),
                  (l.isLoggingScrubbingSequence = !1),
                  (l.shouldLogRequestedPlayingForScrub = !1),
                  a !== "paused" &&
                    a !== "ended" &&
                    (l.canLogPlayingEvent = !0)),
                t);
      }
      function M(e, n, o) {
        if (
          e.controlledState.playbackState === "stalling" &&
          n.controlledState.playbackState === "playing" &&
          l.canLogPlayingEvent
        ) {
          var a = babelHelpers.extends({}, R(n, "started_playing"), {
            start_state: S(),
          });
          return (
            v({ event: a, state: n }),
            (l.canLogPlayingEvent = !1),
            (l.hasPendingRequestedPlaying = !1),
            (l.hasLoggedStartedPlaying = !0),
            I(n, {
              web_client_revision: String(r("SiteData").client_revision),
            }),
            t
          );
        } else return t;
      }
      function w(e, n, r) {
        return (
          (r.type === "controller_pause_requested" ||
            (r.type === "dom_event_pause" && !l.shouldIgnoreDomPause)) &&
            e.controlledState.playbackState !==
              n.controlledState.playbackState &&
            T(n),
          t
        );
      }
      function A(e, n, r) {
        var o = n.controlledState.playbackState;
        return (
          o !== "paused" &&
            o !== "ended" &&
            (r.type === "implementation_video_node_unmounted"
              ? T(e)
              : (r.type === "implementation_unmounted" ||
                  r.type === "implementation_engine_destroy_requested") &&
                T(n)),
          t
        );
      }
      function F(r, i, s) {
        var u = i.controlledState.error;
        if (u != null && u !== l.lastLoggedError && u.errorCode !== "410") {
          var c;
          I(i);
          var d = babelHelpers.extends(
              {},
              (c = e.metadataProvider) == null
                ? void 0
                : c.getErrorMetadata({
                    action: s,
                    coreVideoPlayerMetaData: a,
                    loggingMetaData: o,
                    state: i,
                    videoPlayerError: u,
                  }),
              { name: "failed_playing" },
            ),
            m = babelHelpers.extends({}, R(i, "error"), { error_metadata: d });
          (v({ event: m, state: i }),
            (l.lastLoggedError = u),
            n &&
              l.hasPendingRequestedPlaying &&
              ((l.canLogPausedOrFinishedPlaying = !1),
              (l.hasPendingRequestedPlaying = !1)));
        }
        return t;
      }
      function O(n, i, s) {
        if (
          s.type === "error_recovery_attempt" &&
          l.errorRecoveryAttemptState.eventsLogged < c
        ) {
          var u,
            d = s.payload.recoverableError;
          if (
            d != null &&
            d.errorName === "OZ_NETWORK" &&
            !r("NetworkStatus").isOnline()
          )
            return t;
          var m = babelHelpers.extends(
              {},
              (u = e.metadataProvider) == null
                ? void 0
                : u.getErrorMetadata({
                    action: s,
                    coreVideoPlayerMetaData: a,
                    loggingMetaData: o,
                    state: i,
                    videoPlayerError: d,
                  }),
              { name: "error_recovery_attempt" },
            ),
            p = babelHelpers.extends({}, R(i, "error"), { error_metadata: m });
          (v({ event: p, state: i }),
            l.errorRecoveryAttemptState.eventsLogged++);
        }
        return t;
      }
      function B(e, n, r) {
        var o = e.controlledState.playbackState,
          a = n.controlledState.playbackState;
        if (
          l.hasPendingRequestedPlaying ||
          l.shouldLogRequestedPlayingForScrub ||
          l.bufferingSequenceStartClockTimestamp != null
        )
          return t;
        if (o !== "stalling" && a === "stalling") {
          var i = R(n, "started_buffering");
          (v({ event: i, state: n }),
            (l.bufferingSequenceStartClockTimestamp =
              n.uncontrolledState.clockTimestamp),
            (l.shouldIgnoreDomPause = !0),
            (l.shouldIgnoreDomPlay = !0));
        }
        return t;
      }
      function W(e, n, o) {
        var a = e.controlledState.playbackState,
          i = n.controlledState.playbackState,
          s = l.bufferingSequenceStartClockTimestamp;
        if (s == null) return t;
        if (
          (o.type === "dom_event_playing" ||
            o.type === "buffering_end_requested") &&
          a === "stalling" &&
          i !== "stalling"
        ) {
          var u = 0;
          o.payload.domEventPerfTimestamp != null &&
            (u = Math.max(
              n.uncontrolledState.perfTimestamp -
                o.payload.domEventPerfTimestamp,
              0,
            ));
          var c = Math.round(
              r("gkx")("18028")
                ? Math.max(s, n.uncontrolledState.clockTimestamp - u)
                : n.uncontrolledState.clockTimestamp - u,
            ),
            d = babelHelpers.extends({}, R(n, "stopped_buffering"), {
              client_time_ms: c.toString(),
            });
          (v({ event: d, state: n }),
            (l.bufferingSequenceStartClockTimestamp = null),
            (l.shouldIgnoreDomPause = !1),
            (l.shouldIgnoreDomPlay = !1));
        }
        return t;
      }
      function q(e, n, r) {
        var o = n.controlledState.playbackState;
        o === "paused" || o === "ended"
          ? (l.nextHeartbeatTime = null)
          : o !== "stalling" &&
            l.nextHeartbeatTime == null &&
            (l.nextHeartbeatTime = n.uncontrolledState.clockTimestamp + u);
        var a = l.nextHeartbeatTime;
        if (a != null) {
          var i = n.uncontrolledState.clockTimestamp;
          if (i >= a) {
            if (o !== "stalling") {
              var s = R(n, "heartbeat");
              v({ event: s, state: n });
            }
            l.nextHeartbeatTime = i + u;
          }
        }
        return t;
      }
      function U(e) {
        var t = e.errorMessageFormat,
          n = e.errorName,
          r = e.errorCode == null || e.errorCode === "" ? n : e.errorCode,
          o = n + "#" + r + ": " + V(t);
        return o;
      }
      function V(e) {
        return e.replace(/([0-9]{2,})/g, function (e) {
          for (var t = ""; t.length < e.length; ) t += "#";
          return t;
        });
      }
      function H(n, i, s) {
        if (r("justknobx")._("3727")) return t;
        if (s.type === "implementation_warning") {
          var u,
            c = s.payload.warningError,
            d = U(c),
            m = l.warningState.eventsLoggedTotal,
            p = (u = l.warningState.eventsLoggedPerKey.get(d)) != null ? u : 0;
          if (
            m < l.warningState.eventsMaxLoggedTotal &&
            p < l.warningState.eventsMaxLoggedPerKey
          ) {
            var _;
            (l.warningState.eventsLoggedTotal++,
              l.warningState.eventsLoggedPerKey.set(d, p + 1));
            var f = babelHelpers.extends(
                {},
                (_ = e.metadataProvider) == null
                  ? void 0
                  : _.getErrorMetadata({
                      action: s,
                      coreVideoPlayerMetaData: a,
                      loggingMetaData: o,
                      state: i,
                      videoPlayerError: c,
                    }),
                { name: "player_warning" },
              ),
              g = babelHelpers.extends({}, R(i, "error"), {
                error_metadata: f,
              });
            v({ event: g, state: i });
          }
        }
        return t;
      }
      function G(n, i, s) {
        var u,
          c = babelHelpers.extends({}, a.loggingToSNAPLAdditionalData, C),
          d = l.lastLoggedTagMetadata,
          m =
            (u = e.metadataProvider) == null
              ? void 0
              : u.getTagMetadata({
                  coreVideoPlayerMetaData: a,
                  logDataAdditions: c,
                  loggingMetaData: o,
                  state: i,
                });
        if (m != null && !h(m, d)) {
          var p = {};
          Object.keys(m).forEach(function (e) {
            if (m[e] !== d[e]) {
              var t;
              p = babelHelpers.extends({}, p, ((t = {}), (t[e] = m[e]), t));
            }
          });
          var _ = Object.values(
              r("MediaPlaybackTagMetadataHighFrequencyCategory"),
            ),
            f = Object.keys(p).every(function (e) {
              return _.includes(e);
            });
          if (f) return t;
          var g = babelHelpers.extends({}, R(i, "tags_changed"), {
            tag_metadata: p,
          });
          (v({ event: g, state: i }),
            (l.lastLoggedTagMetadata = babelHelpers.extends({}, d, m)));
        }
        return t;
      }
      return {
        checkpointEncodingCost: function (n) {
          if (e.getEncodingCostMetadata != null && (I(n), s.length > 0)) {
            var t = s;
            ((s = []), b({ events: t, state: n }));
          }
        },
        consumeLoggerEvents: function () {
          return i.length > 0 ? i.splice(0) : [];
        },
        handleStateMachine: function (n, r, o) {
          L(o);
          var t = r.controlledState.playbackState,
            a = [G, x, $, N, B, W, M, E, w, A, F, O, H, q];
          (a.forEach(function (e) {
            e(n, r, o);
          }),
            g && _(e.debugLogId, n, r, o),
            (t === "paused" || t === "ended") && (l.canLogPlayingEvent = !0),
            o.type === "controller_pause_requested" &&
              (l.shouldIgnoreDomPause = !0),
            o.type === "controller_play_requested" &&
              (l.shouldIgnoreDomPlay = !0),
            o.type === "dom_event_pause" && (l.shouldIgnoreDomPause = !1),
            o.type === "dom_event_play" && (l.shouldIgnoreDomPlay = !1));
        },
        logPausedOnBeforeUnload: function (t) {
          T(t);
        },
        setLoggingToSNAPLAdditionalData: function (n) {
          ((C = babelHelpers.extends({}, C, n)), g && f(e.debugLogId, n));
        },
      };
    }
    ((l.HEARTBEAT_INTERVAL = u),
      (l.createMediaPlaybackCompoundEventStateMachineLogger = C));
  },
  98,
);
