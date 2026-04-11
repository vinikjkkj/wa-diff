__d(
  "VideoPlayerImplementationStateMachine",
  [
    "FBLogger",
    "VideoPlayerControlledStateReducer",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "gkx",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = t.type !== "dom_event_seeking",
        i = a ? n : e.uncontrolledState,
        l = !r("shallowEqual")(i, e.uncontrolledState),
        s = o("VideoPlayerControlledStateReducer").controlledStateReducer(
          e.controlledState,
          i,
          t,
          e.playerVersion,
        ),
        u = !r("shallowEqual")(s, e.controlledState);
      return l || u
        ? babelHelpers.extends({}, e, {
            controlledState: u ? s : e.controlledState,
            uncontrolledState: l ? i : e.uncontrolledState,
          })
        : e;
    }
    var s, u;
    function c(t) {
      var n = t.collectUncontrolledState,
        o = t.debugLogId,
        a = t.initialState,
        i = t.onDispatched,
        l = t.onFatalError,
        s = a,
        u = s,
        c = 0,
        d = !1,
        m = !1,
        p = !0,
        _ = !0;
      return {
        dispatch: function (o) {
          if (_) {
            var t = null,
              a = null;
            try {
              if ((++c, c >= 10)) {
                if (d) return;
                throw (
                  (d = !0),
                  r("FBLogger")("comet_video_player").mustfixThrow(
                    "Video player state machine loop detected",
                  )
                );
              }
              var s = u.uncontrolledState;
              if (p)
                try {
                  s = n();
                } catch (e) {
                  ((p = !1), (a = e));
                }
              var f = u,
                g = e(f, o, s);
              ((u = g), i(f, g, o));
            } catch (e) {
              ((_ = !1), (t = e));
            } finally {
              if (!m && (t != null || a != null)) {
                m = !0;
                try {
                  l(t != null ? t : a);
                } catch (e) {}
              }
              --c;
            }
          }
        },
        getCurrentState: function () {
          return u;
        },
        getInitialState: function () {
          return s;
        },
      };
    }
    var d, m;
    function p(e) {
      var t = e.collectUncontrolledState,
        n = e.debugLogId,
        r = e.initialState,
        o = e.onFatalError,
        a = e.stateTransitionHandlers;
      function i(e, t, n) {
        try {
          for (var r = !0, o = 0; r && o < a.length; ) {
            var i = a[o];
            ((r = i(e, t, n)), ++o);
          }
        } finally {
        }
      }
      return c({
        collectUncontrolledState: t,
        debugLogId: n,
        initialState: r,
        onDispatched: i,
        onFatalError: o,
      });
    }
    function _(e, t) {
      function n() {}
      function r(e) {
        return e;
      }
      function a(n) {
        return function (o) {
          var a = o.currentTarget;
          (t(a, ["reactEvent(" + o.type + ")"]), e.dispatch(n));
        };
      }
      function i(n) {
        return function (o) {
          var a = o.currentTarget;
          (t(a, ["reactEvent(" + o.type + ")"]), e.dispatch(n(o, a)));
        };
      }
      return {
        onAbort: n,
        onCanPlay: i(function (e) {
          return {
            payload: { domEventPerfTimestamp: e.timeStamp },
            type: "dom_event_canplay",
          };
        }),
        onCanPlayThrough: n,
        onDurationChange: a({ type: "dom_event_durationchange" }),
        onEmptied: n,
        onEncrypted: n,
        onEnded: a({ type: "dom_event_ended" }),
        onError: i(function (e, t) {
          return {
            payload: {
              videoElementError: t.error,
              videoElementNetworkState: t.networkState,
              videoElementReadyState: t.readyState,
            },
            type: "dom_event_error",
          };
        }),
        onLoadedData: i(function (e) {
          return {
            payload: { domEventPerfTimestamp: e.timeStamp },
            type: "dom_event_loadeddata",
          };
        }),
        onLoadedMetadata: i(function (e) {
          return {
            payload: { domEventPerfTimestamp: e.timeStamp },
            type: "dom_event_loadedmetadata",
          };
        }),
        onLoadStart: n,
        onPause: a({ type: "dom_event_pause" }),
        onPlay: a({ type: "dom_event_play" }),
        onPlaying: i(function (e) {
          return {
            payload: { domEventPerfTimestamp: e.timeStamp },
            type: "dom_event_playing",
          };
        }),
        onProgress: i(function (e, t) {
          return {
            payload: {
              bufferedRanges: o(
                "VideoPlayerImplementationEngineVideoElementAPI",
              ).getBufferedRangesFromVideoElement(t),
            },
            type: "dom_event_progress",
          };
        }),
        onRateChange: a({ type: "dom_event_ratechange" }),
        onSeeked: a({ type: "dom_event_seeked" }),
        onSeeking: a({ type: "dom_event_seeking" }),
        onStalled: n,
        onSuspend: n,
        onTimeUpdate: a({ type: "dom_event_timeupdate" }),
        onVolumeChange: a({ type: "dom_event_volumechange" }),
        onWaiting: a({ type: "dom_event_waiting" }),
      };
    }
    ((l.createVideoPlayerImplementationStateMachine = c),
      (l.createVideoPlayerImplementationStateMachineWithStateTransitionHandlers =
        p),
      (l.createReactVideoElementCallbacksForStateMachine = _));
  },
  98,
);
