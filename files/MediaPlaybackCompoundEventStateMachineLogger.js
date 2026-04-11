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
        a = n,
        i = [],
        l = g(),
        h = [],
        y = {};
      function C(t) {
        var r,
          a,
          s = t.events,
          u = t.state,
          c = babelHelpers.extends({}, o.loggingToSNAPLAdditionalData, y),
          m =
            (r =
              (a = e.metadataProvider) == null
                ? void 0
                : a.getRequiredMetadata({
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
        (i.push(p),
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
                loggerEventsLength: i.length,
                loggingState: JSON.stringify(l),
              },
            ));
      }
      function b(n) {
        var r = n.event,
          o = n.state;
        if (
          (h.push(r),
          f &&
            d(e.debugLogId, "[_addEvent] " + r.event_name, {
              event: r,
              eventsListLength: h.length,
              loggingState: JSON.stringify(l),
            }),
          c.includes(r.event_name))
        ) {
          var a = [].concat(h);
          ((h = []), C({ events: a, state: o }));
        }
        return t;
      }
      function v() {
        return l.hasLoggedStartedPlaying ? "unpaused" : "started";
      }
      function S(e, t) {
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
      function R(t) {
        if (((a = n), t.type === "notify_logging_metadata_change")) {
          var r = t.payload,
            i = r.coreVideoPlayerMetaData,
            l = r.loggingMetaData;
          if (f) {
            var s = i.initialTracePolicy !== o.initialTracePolicy;
            m(e.debugLogId, n, l, { initialTracePolicyChanged: s });
          }
          ((n = l), (o = i));
        }
      }
      function L(e, n, r) {
        if (
          e.controlledState.playbackState !== n.controlledState.playbackState &&
          n.controlledState.playbackState === "ended" &&
          l.canLogPausedOrFinishedPlaying
        ) {
          k(n);
          var o = S(n, "completed");
          return (
            b({ event: o, state: n }),
            (l.canLogPausedOrFinishedPlaying = !1),
            t
          );
        } else return t;
      }
      function E(e, n) {
        var r = S(e, "requested_playing"),
          o =
            n != null
              ? babelHelpers.extends({}, r, {
                  media_time_ms: Math.round(n * 1e3).toString(),
                  start_state: v(),
                })
              : babelHelpers.extends({}, r, { start_state: v() });
        return (
          b({ event: o, state: e }),
          (l.hasPendingRequestedPlaying = !0),
          (l.canLogPausedOrFinishedPlaying = !0),
          t
        );
      }
      function k(r, a) {
        var i,
          l = babelHelpers.extends({}, o.loggingToSNAPLAdditionalData, y),
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
          var u = babelHelpers.extends({}, S(r, "tags_changed"), {
            tag_metadata: s,
          });
          b({ event: u, state: r });
        }
        return t;
      }
      function I(e) {
        if (l.canLogPausedOrFinishedPlaying) {
          if (l.hasPendingRequestedPlaying)
            return (
              k(e),
              T(e),
              (l.canLogPausedOrFinishedPlaying = !1),
              (l.hasPendingRequestedPlaying = !1),
              t
            );
          k(e);
          var n = S(e, "paused");
          return (
            b({ event: n, state: e }),
            (l.canLogPausedOrFinishedPlaying = !1),
            (l.hasPendingRequestedPlaying = !1),
            t
          );
        } else return t;
      }
      function T(e) {
        var n = S(e, "cancelled");
        return (b({ event: n, state: e }), t);
      }
      function D(e, n, r) {
        if (
          r.type === "dom_event_play_promise_rejected" &&
          l.hasPendingRequestedPlaying
        ) {
          var o = r.payload.playPromiseRejectionReason;
          return (o != null && o.name === "NotAllowedError" && T(n), t);
        } else return t;
      }
      function x(e, n, r) {
        return (
          (r.type === "controller_play_requested" ||
            (r.type === "dom_event_play" && !l.shouldIgnoreDomPlay)) &&
            e.controlledState.playbackState !==
              n.controlledState.playbackState &&
            E(n),
          t
        );
      }
      function $(e) {
        var n = S(e, "requested_seek");
        return (b({ event: n, state: e }), t);
      }
      function P(e, n, r) {
        var o = n.controlledState.playbackState,
          a = e.controlledState.playbackState;
        return r.type === "controller_scrub_begin_requested" &&
          !e.controlledState.scrubbing &&
          o !== "paused" &&
          o !== "ended"
          ? (I(n), $(n), (l.isLoggingScrubbingSequence = !0), t)
          : !e.controlledState.seeking &&
              n.controlledState.seeking &&
              !l.isLoggingScrubbingSequence &&
              o !== "paused" &&
              o !== "ended" &&
              !l.hasPendingRequestedPlaying
            ? (I(n), $(n), (l.shouldLogRequestedPlayingForScrub = !0), t)
            : r.type === "controller_scrub_end_requested" &&
                e.controlledState.scrubbing &&
                o !== "paused" &&
                o !== "ended"
              ? (E(n, r.payload.seekTargetPosition), t)
              : (e.controlledState.seeking &&
                  !n.controlledState.seeking &&
                  (l.shouldLogRequestedPlayingForScrub &&
                    o !== "paused" &&
                    o !== "ended" &&
                    E(n),
                  (l.isLoggingScrubbingSequence = !1),
                  (l.shouldLogRequestedPlayingForScrub = !1),
                  a !== "paused" &&
                    a !== "ended" &&
                    (l.canLogPlayingEvent = !0)),
                t);
      }
      function N(e, n, o) {
        if (
          e.controlledState.playbackState === "stalling" &&
          n.controlledState.playbackState === "playing" &&
          l.canLogPlayingEvent
        ) {
          var a = babelHelpers.extends({}, S(n, "started_playing"), {
            start_state: v(),
          });
          return (
            b({ event: a, state: n }),
            (l.canLogPlayingEvent = !1),
            (l.hasPendingRequestedPlaying = !1),
            (l.hasLoggedStartedPlaying = !0),
            k(n, {
              web_client_revision: String(r("SiteData").client_revision),
            }),
            t
          );
        } else return t;
      }
      function M(e, n, r) {
        return (
          (r.type === "controller_pause_requested" ||
            (r.type === "dom_event_pause" && !l.shouldIgnoreDomPause)) &&
            e.controlledState.playbackState !==
              n.controlledState.playbackState &&
            I(n),
          t
        );
      }
      function w(e, n, r) {
        var o = n.controlledState.playbackState;
        return (
          o !== "paused" &&
            o !== "ended" &&
            (r.type === "implementation_video_node_unmounted"
              ? I(e)
              : (r.type === "implementation_unmounted" ||
                  r.type === "implementation_engine_destroy_requested") &&
                I(n)),
          t
        );
      }
      function A(r, a, i) {
        var s = a.controlledState.error;
        if (s != null && s !== l.lastLoggedError && s.errorCode !== "410") {
          var u;
          k(a);
          var c = babelHelpers.extends(
              {},
              (u = e.metadataProvider) == null
                ? void 0
                : u.getErrorMetadata({
                    action: i,
                    coreVideoPlayerMetaData: o,
                    loggingMetaData: n,
                    state: a,
                    videoPlayerError: s,
                  }),
              { name: "failed_playing" },
            ),
            d = babelHelpers.extends({}, S(a, "error"), { error_metadata: c });
          (b({ event: d, state: a }), (l.lastLoggedError = s));
        }
        return t;
      }
      function F(a, i, s) {
        if (
          s.type === "error_recovery_attempt" &&
          l.errorRecoveryAttemptState.eventsLogged < u
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
                    state: i,
                    videoPlayerError: d,
                  }),
              { name: "error_recovery_attempt" },
            ),
            p = babelHelpers.extends({}, S(i, "error"), { error_metadata: m });
          (b({ event: p, state: i }),
            l.errorRecoveryAttemptState.eventsLogged++);
        }
        return t;
      }
      function O(e, n, r) {
        var o = e.controlledState.playbackState,
          a = n.controlledState.playbackState;
        if (
          l.hasPendingRequestedPlaying ||
          l.shouldLogRequestedPlayingForScrub ||
          l.bufferingSequenceStartClockTimestamp != null
        )
          return t;
        if (o !== "stalling" && a === "stalling") {
          var i = S(n, "started_buffering");
          (b({ event: i, state: n }),
            (l.bufferingSequenceStartClockTimestamp =
              n.uncontrolledState.clockTimestamp),
            (l.shouldIgnoreDomPause = !0),
            (l.shouldIgnoreDomPlay = !0));
        }
        return t;
      }
      function B(e, n, o) {
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
            d = babelHelpers.extends({}, S(n, "stopped_buffering"), {
              client_time_ms: c.toString(),
            });
          (b({ event: d, state: n }),
            (l.bufferingSequenceStartClockTimestamp = null),
            (l.shouldIgnoreDomPause = !1),
            (l.shouldIgnoreDomPlay = !1));
        }
        return t;
      }
      function W(e, n, r) {
        var o = n.controlledState.playbackState;
        o === "paused" || o === "ended"
          ? (l.nextHeartbeatTime = null)
          : o !== "stalling" &&
            l.nextHeartbeatTime == null &&
            (l.nextHeartbeatTime = n.uncontrolledState.clockTimestamp + s);
        var a = l.nextHeartbeatTime;
        if (a != null) {
          var i = n.uncontrolledState.clockTimestamp;
          if (i >= a) {
            if (o !== "stalling") {
              var u = S(n, "heartbeat");
              b({ event: u, state: n });
            }
            l.nextHeartbeatTime = i + s;
          }
        }
        return t;
      }
      function q(e) {
        var t = e.errorMessageFormat,
          n = e.errorName,
          r = e.errorCode == null || e.errorCode === "" ? n : e.errorCode,
          o = n + "#" + r + ": " + U(t);
        return o;
      }
      function U(e) {
        return e.replace(/([0-9]{2,})/g, function (e) {
          for (var t = ""; t.length < e.length; ) t += "#";
          return t;
        });
      }
      function V(a, i, s) {
        if (r("justknobx")._("3727")) return t;
        if (s.type === "implementation_warning") {
          var u,
            c = s.payload.warningError,
            d = q(c),
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
                      coreVideoPlayerMetaData: o,
                      loggingMetaData: n,
                      state: i,
                      videoPlayerError: c,
                    }),
                { name: "player_warning" },
              ),
              g = babelHelpers.extends({}, S(i, "error"), {
                error_metadata: f,
              });
            b({ event: g, state: i });
          }
        }
        return t;
      }
      function H(a, i, s) {
        var u,
          c = babelHelpers.extends({}, o.loggingToSNAPLAdditionalData, y),
          d = l.lastLoggedTagMetadata,
          m =
            (u = e.metadataProvider) == null
              ? void 0
              : u.getTagMetadata({
                  coreVideoPlayerMetaData: o,
                  logDataAdditions: c,
                  loggingMetaData: n,
                  state: i,
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
          var g = babelHelpers.extends({}, S(i, "tags_changed"), {
            tag_metadata: p,
          });
          (b({ event: g, state: i }),
            (l.lastLoggedTagMetadata = babelHelpers.extends({}, d, m)));
        }
        return t;
      }
      return {
        consumeLoggerEvents: function () {
          return i.length > 0 ? i.splice(0) : [];
        },
        handleStateMachine: function (n, r, o) {
          R(o);
          var t = r.controlledState.playbackState,
            a = [H, D, x, P, O, B, N, L, M, w, A, F, V, W];
          (a.forEach(function (e) {
            e(n, r, o);
          }),
            f && p(e.debugLogId, n, r, o),
            (t === "paused" || t === "ended") && (l.canLogPlayingEvent = !0),
            o.type === "controller_pause_requested" &&
              (l.shouldIgnoreDomPause = !0),
            o.type === "controller_play_requested" &&
              (l.shouldIgnoreDomPlay = !0),
            o.type === "dom_event_pause" && (l.shouldIgnoreDomPause = !1),
            o.type === "dom_event_play" && (l.shouldIgnoreDomPlay = !1));
        },
        logPausedOnBeforeUnload: function (t) {
          I(t);
        },
        setLoggingToSNAPLAdditionalData: function (n) {
          ((y = babelHelpers.extends({}, y, n)), f && _(e.debugLogId, n));
        },
      };
    }
    ((l.HEARTBEAT_INTERVAL = s),
      (l.createMediaPlaybackCompoundEventStateMachineLogger = h));
  },
  98,
);
