__d(
  "MediaPlaybackCompoundEventStateMachineLogger",
  [
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
      s = 6e4,
      u = 1e3,
      c = Object.freeze([
        "paused",
        "completed",
        "cancelled",
        "error",
        "heartbeat",
      ]),
      d = (e = r("emptyFunction")),
      m = e,
      p = e,
      _ = e,
      f = !1;
    r("gkx")("494") &&
      ((f = !0),
      (d = function (t, n) {
        try {
          for (
            var e,
              r = arguments.length,
              o = new Array(r > 2 ? r - 2 : 0),
              a = 2;
            a < r;
            a++
          )
            o[a - 2] = arguments[a];
          (e = window.console).info.apply(
            e,
            ["[" + t + "][SNAPL]" + n].concat(o),
          );
        } catch (e) {}
      }),
      (m = function (t, n, r, o) {
        d(t, "[handleMetaData]", {
          loggingMetaData: r,
          loggingMetaDataPrevious: n,
          trackedChanges: o,
        });
      }),
      (p = function (t, n, r, o) {
        d(t, "[handleStateMachine]", { prevState: n, state: r, action: o });
      }),
      (_ = function (t, n) {
        d(t, "[setAdditionalLogData(SNAPL)]", { values: n });
      }));
    function g() {
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
    function h(e) {
      var t = {},
        n = e.initialLoggingMetaData,
        o = e.initialCoreVideoPlayerMetaData,
        a = [],
        i = g(),
        l = [],
        h = {};
      function y(t) {
        var r,
          l,
          s = t.events,
          u = t.state,
          c = babelHelpers.extends({}, o.loggingToSNAPLAdditionalData, h),
          m =
            (r =
              (l = e.metadataProvider) == null
                ? void 0
                : l.getRequiredMetadata({
                    coreVideoPlayerMetaData: o,
                    logDataAdditions: c,
                    loggingMetaData: n,
                    state: u,
                  })) != null
              ? r
              : {
                  current_watching_module: "",
                  media_id: "",
                  tracking_type: "none",
                },
          p = { events: s, required_metadata: m };
        (a.push(p),
          f &&
            d(
              e.debugLogId,
              "[_push] " +
                p.events
                  .map(function (e) {
                    return e.event_name;
                  })
                  .join(","),
              {
                loggedEvent: p,
                loggerEventsLength: a.length,
                loggingState: JSON.stringify(i),
              },
            ));
      }
      function C(n) {
        var r = n.event,
          o = n.state;
        if (
          (l.push(r),
          f &&
            d(e.debugLogId, "[_addEvent] " + r.event_name, {
              event: r,
              eventsListLength: l.length,
              loggingState: JSON.stringify(i),
            }),
          c.includes(r.event_name))
        ) {
          var a = [].concat(l);
          ((l = []), y({ events: a, state: o }));
        }
        return t;
      }
      function b() {
        return i.hasLoggedStartedPlaying ? "unpaused" : "started";
      }
      function v(e, t) {
        var o = e.uncontrolledState.videoElementDuration;
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
            r("hashString")(n.instanceKey),
          ).toString(),
          player_instance_key: n.instanceKey,
          video_client_duration:
            o != null ? Math.trunc(o * 1e3).toString() : void 0,
        };
      }
      function S(t) {
        if (t.type === "notify_logging_metadata_change") {
          var r = t.payload,
            a = r.coreVideoPlayerMetaData,
            i = r.loggingMetaData;
          if (f) {
            var l = a.initialTracePolicy !== o.initialTracePolicy;
            m(e.debugLogId, n, i, { initialTracePolicyChanged: l });
          }
          ((n = i), (o = a));
        }
      }
      function R(e, n, r) {
        if (
          e.controlledState.playbackState !== n.controlledState.playbackState &&
          n.controlledState.playbackState === "ended" &&
          i.canLogPausedOrFinishedPlaying
        ) {
          E(n);
          var o = v(n, "completed");
          return (
            C({ event: o, state: n }),
            (i.canLogPausedOrFinishedPlaying = !1),
            t
          );
        } else return t;
      }
      function L(e, n) {
        var r = v(e, "requested_playing"),
          o =
            n != null
              ? babelHelpers.extends({}, r, {
                  media_time_ms: Math.round(n * 1e3).toString(),
                  start_state: b(),
                })
              : babelHelpers.extends({}, r, { start_state: b() });
        return (
          C({ event: o, state: e }),
          (i.hasPendingRequestedPlaying = !0),
          (i.canLogPausedOrFinishedPlaying = !0),
          t
        );
      }
      function E(r, a) {
        var i,
          l = babelHelpers.extends({}, o.loggingToSNAPLAdditionalData, h),
          s =
            (i = e.metadataProvider) == null
              ? void 0
              : i.getTagMetadata({
                  coreVideoPlayerMetaData: o,
                  logDataAdditions: l,
                  loggingMetaData: n,
                  state: r,
                });
        if (Object.keys(s != null ? s : {}).length > 0) {
          a && (s = babelHelpers.extends({}, s, a));
          var u = babelHelpers.extends({}, v(r, "tags_changed"), {
            tag_metadata: s,
          });
          C({ event: u, state: r });
        }
        return t;
      }
      function k(e) {
        if (i.canLogPausedOrFinishedPlaying) {
          if (i.hasPendingRequestedPlaying)
            return (
              E(e),
              I(e),
              (i.canLogPausedOrFinishedPlaying = !1),
              (i.hasPendingRequestedPlaying = !1),
              t
            );
          E(e);
          var n = v(e, "paused");
          return (
            C({ event: n, state: e }),
            (i.canLogPausedOrFinishedPlaying = !1),
            (i.hasPendingRequestedPlaying = !1),
            t
          );
        } else return t;
      }
      function I(e) {
        var n = v(e, "cancelled");
        return (C({ event: n, state: e }), t);
      }
      function T(e, n, r) {
        if (
          r.type === "dom_event_play_promise_rejected" &&
          i.hasPendingRequestedPlaying
        ) {
          var o = r.payload.playPromiseRejectionReason;
          return (o != null && o.name === "NotAllowedError" && I(n), t);
        } else return t;
      }
      function D(e, n, r) {
        return (
          (r.type === "controller_play_requested" ||
            (r.type === "dom_event_play" && !i.shouldIgnoreDomPlay)) &&
            e.controlledState.playbackState !==
              n.controlledState.playbackState &&
            L(n),
          t
        );
      }
      function x(e) {
        var n = v(e, "requested_seek");
        return (C({ event: n, state: e }), t);
      }
      function $(e, n, r) {
        var o = n.controlledState.playbackState,
          a = e.controlledState.playbackState;
        return r.type === "controller_scrub_begin_requested" &&
          !e.controlledState.scrubbing &&
          o !== "paused" &&
          o !== "ended"
          ? (k(n), x(n), (i.isLoggingScrubbingSequence = !0), t)
          : !e.controlledState.seeking &&
              n.controlledState.seeking &&
              !i.isLoggingScrubbingSequence &&
              o !== "paused" &&
              o !== "ended" &&
              !i.hasPendingRequestedPlaying
            ? (k(n), x(n), (i.shouldLogRequestedPlayingForScrub = !0), t)
            : r.type === "controller_scrub_end_requested" &&
                e.controlledState.scrubbing &&
                o !== "paused" &&
                o !== "ended"
              ? (L(n, r.payload.seekTargetPosition), t)
              : (e.controlledState.seeking &&
                  !n.controlledState.seeking &&
                  (i.shouldLogRequestedPlayingForScrub &&
                    o !== "paused" &&
                    o !== "ended" &&
                    L(n),
                  (i.isLoggingScrubbingSequence = !1),
                  (i.shouldLogRequestedPlayingForScrub = !1),
                  a !== "paused" &&
                    a !== "ended" &&
                    (i.canLogPlayingEvent = !0)),
                t);
      }
      function P(e, n, o) {
        if (
          e.controlledState.playbackState === "stalling" &&
          n.controlledState.playbackState === "playing" &&
          i.canLogPlayingEvent
        ) {
          var a = babelHelpers.extends({}, v(n, "started_playing"), {
            start_state: b(),
          });
          return (
            C({ event: a, state: n }),
            (i.canLogPlayingEvent = !1),
            (i.hasPendingRequestedPlaying = !1),
            (i.hasLoggedStartedPlaying = !0),
            E(n, {
              web_client_revision: String(r("SiteData").client_revision),
            }),
            t
          );
        } else return t;
      }
      function N(e, n, r) {
        return (
          (r.type === "controller_pause_requested" ||
            (r.type === "dom_event_pause" && !i.shouldIgnoreDomPause)) &&
            e.controlledState.playbackState !==
              n.controlledState.playbackState &&
            k(n),
          t
        );
      }
      function M(e, n, r) {
        var o = n.controlledState.playbackState;
        return (
          o !== "paused" &&
            o !== "ended" &&
            (r.type === "implementation_video_node_unmounted"
              ? k(e)
              : (r.type === "implementation_unmounted" ||
                  r.type === "implementation_engine_destroy_requested") &&
                k(n)),
          t
        );
      }
      function w(r, a, l) {
        var s = a.controlledState.error;
        if (s != null && s !== i.lastLoggedError && s.errorCode !== "410") {
          var u;
          E(a);
          var c = babelHelpers.extends(
              {},
              (u = e.metadataProvider) == null
                ? void 0
                : u.getErrorMetadata({
                    action: l,
                    coreVideoPlayerMetaData: o,
                    loggingMetaData: n,
                    state: a,
                    videoPlayerError: s,
                  }),
              { name: "failed_playing" },
            ),
            d = babelHelpers.extends({}, v(a, "error"), { error_metadata: c });
          (C({ event: d, state: a }), (i.lastLoggedError = s));
        }
        return t;
      }
      function A(a, l, s) {
        if (
          s.type === "error_recovery_attempt" &&
          i.errorRecoveryAttemptState.eventsLogged < u
        ) {
          var c,
            d = s.payload.recoverableError;
          if (
            d != null &&
            d.errorName === "OZ_NETWORK" &&
            !r("NetworkStatus").isOnline()
          )
            return t;
          var m = babelHelpers.extends(
              {},
              (c = e.metadataProvider) == null
                ? void 0
                : c.getErrorMetadata({
                    action: s,
                    coreVideoPlayerMetaData: o,
                    loggingMetaData: n,
                    state: l,
                    videoPlayerError: d,
                  }),
              { name: "error_recovery_attempt" },
            ),
            p = babelHelpers.extends({}, v(l, "error"), { error_metadata: m });
          (C({ event: p, state: l }),
            i.errorRecoveryAttemptState.eventsLogged++);
        }
        return t;
      }
      function F(e, n, r) {
        var o = e.controlledState.playbackState,
          a = n.controlledState.playbackState;
        if (
          i.hasPendingRequestedPlaying ||
          i.shouldLogRequestedPlayingForScrub ||
          i.bufferingSequenceStartClockTimestamp != null
        )
          return t;
        if (o !== "stalling" && a === "stalling") {
          var l = v(n, "started_buffering");
          (C({ event: l, state: n }),
            (i.bufferingSequenceStartClockTimestamp =
              n.uncontrolledState.clockTimestamp),
            (i.shouldIgnoreDomPause = !0),
            (i.shouldIgnoreDomPlay = !0));
        }
        return t;
      }
      function O(e, n, o) {
        var a = e.controlledState.playbackState,
          l = n.controlledState.playbackState,
          s = i.bufferingSequenceStartClockTimestamp;
        if (s == null) return t;
        if (
          (o.type === "dom_event_playing" ||
            o.type === "buffering_end_requested") &&
          a === "stalling" &&
          l !== "stalling"
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
            d = babelHelpers.extends({}, v(n, "stopped_buffering"), {
              client_time_ms: c.toString(),
            });
          (C({ event: d, state: n }),
            (i.bufferingSequenceStartClockTimestamp = null),
            (i.shouldIgnoreDomPause = !1),
            (i.shouldIgnoreDomPlay = !1));
        }
        return t;
      }
      function B(e, n, r) {
        var o = n.controlledState.playbackState;
        o === "paused" || o === "ended"
          ? (i.nextHeartbeatTime = null)
          : o !== "stalling" &&
            i.nextHeartbeatTime == null &&
            (i.nextHeartbeatTime = n.uncontrolledState.clockTimestamp + s);
        var a = i.nextHeartbeatTime;
        if (a != null) {
          var l = n.uncontrolledState.clockTimestamp;
          if (l >= a) {
            if (o !== "stalling") {
              var u = v(n, "heartbeat");
              C({ event: u, state: n });
            }
            i.nextHeartbeatTime = l + s;
          }
        }
        return t;
      }
      function W(e) {
        var t = e.errorMessageFormat,
          n = e.errorName,
          r = e.errorCode == null || e.errorCode === "" ? n : e.errorCode,
          o = n + "#" + r + ": " + q(t);
        return o;
      }
      function q(e) {
        return e.replace(/([0-9]{2,})/g, function (e) {
          for (var t = ""; t.length < e.length; ) t += "#";
          return t;
        });
      }
      function U(a, l, s) {
        if (r("justknobx")._("3727")) return t;
        if (s.type === "implementation_warning") {
          var u,
            c = s.payload.warningError,
            d = W(c),
            m = i.warningState.eventsLoggedTotal,
            p = (u = i.warningState.eventsLoggedPerKey.get(d)) != null ? u : 0;
          if (
            m < i.warningState.eventsMaxLoggedTotal &&
            p < i.warningState.eventsMaxLoggedPerKey
          ) {
            var _;
            (i.warningState.eventsLoggedTotal++,
              i.warningState.eventsLoggedPerKey.set(d, p + 1));
            var f = babelHelpers.extends(
                {},
                (_ = e.metadataProvider) == null
                  ? void 0
                  : _.getErrorMetadata({
                      action: s,
                      coreVideoPlayerMetaData: o,
                      loggingMetaData: n,
                      state: l,
                      videoPlayerError: c,
                    }),
                { name: "player_warning" },
              ),
              g = babelHelpers.extends({}, v(l, "error"), {
                error_metadata: f,
              });
            C({ event: g, state: l });
          }
        }
        return t;
      }
      function V(a, l, s) {
        var u,
          c = babelHelpers.extends({}, o.loggingToSNAPLAdditionalData, h),
          d = i.lastLoggedTagMetadata,
          m =
            (u = e.metadataProvider) == null
              ? void 0
              : u.getTagMetadata({
                  coreVideoPlayerMetaData: o,
                  logDataAdditions: c,
                  loggingMetaData: n,
                  state: l,
                });
        if (m && JSON.stringify(m) !== JSON.stringify(d)) {
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
          var g = babelHelpers.extends({}, v(l, "tags_changed"), {
            tag_metadata: p,
          });
          (C({ event: g, state: l }),
            (i.lastLoggedTagMetadata = babelHelpers.extends({}, d, m)));
        }
        return t;
      }
      return {
        consumeLoggerEvents: function () {
          return a.length > 0 ? a.splice(0) : [];
        },
        handleStateMachine: function (n, r, o) {
          S(o);
          var t = r.controlledState.playbackState,
            a = [V, T, D, $, F, O, P, R, N, M, w, A, U, B];
          (a.forEach(function (e) {
            e(n, r, o);
          }),
            f && p(e.debugLogId, n, r, o),
            (t === "paused" || t === "ended") && (i.canLogPlayingEvent = !0),
            o.type === "controller_pause_requested" &&
              (i.shouldIgnoreDomPause = !0),
            o.type === "controller_play_requested" &&
              (i.shouldIgnoreDomPlay = !0),
            o.type === "dom_event_pause" && (i.shouldIgnoreDomPause = !1),
            o.type === "dom_event_play" && (i.shouldIgnoreDomPlay = !1));
        },
        logPausedOnBeforeUnload: function (t) {
          k(t);
        },
        setLoggingToSNAPLAdditionalData: function (n) {
          ((h = babelHelpers.extends({}, h, n)), f && _(e.debugLogId, n));
        },
      };
    }
    ((l.HEARTBEAT_INTERVAL = s),
      (l.createMediaPlaybackCompoundEventStateMachineLogger = h));
  },
  98,
);
