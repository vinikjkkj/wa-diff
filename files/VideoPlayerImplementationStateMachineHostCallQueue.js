__d(
  "VideoPlayerImplementationStateMachineHostCallQueue",
  ["VideoPlayerPromiseDone", "cometUniqueID", "getErrorSafe", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {};
    function s() {
      return "id-vpdom-" + r("cometUniqueID")();
    }
    function u(e) {
      var t = e.engineExtrasAPI,
        n = e.hostCall,
        r = e.machine,
        a = e.videoElementAPI;
      switch (n.type) {
        case "host_call_play":
          {
            var i = a.play();
            i &&
              (r.dispatch({
                payload: { hostCallPlayID: n.payload.hostCallID },
                type: "dom_event_play_promise_created",
              }),
              o("VideoPlayerPromiseDone").videoPlayerPromiseDone(
                i.then(
                  function () {
                    r.dispatch({
                      payload: { hostCallPlayID: n.payload.hostCallID },
                      type: "dom_event_play_promise_resolved",
                    });
                  },
                  function (e) {
                    r.dispatch({
                      payload: {
                        hostCallPlayID: n.payload.hostCallID,
                        playPromiseRejectionReason: e,
                      },
                      type: "dom_event_play_promise_rejected",
                    });
                  },
                ),
              ));
          }
          break;
        case "host_call_pause":
          a.pause();
          break;
        case "host_call_set_playback_rate":
          a.setPlaybackRate(n.payload.playbackRate);
          break;
        case "host_call_set_muted":
          a.setMuted(n.payload.muted);
          break;
        case "host_call_set_volume":
          a.setVolume(n.payload.volume);
          break;
        case "host_call_set_current_time":
          a.setPlayheadPosition(n.payload.currentTime);
          break;
        case "host_call_set_video_quality":
          t.setUserSelectedVideoQuality(n.payload.selectedVideoQuality);
          break;
        case "host_call_set_video_variant":
          t.setUserSelectedVideoVariant(n.payload.selectedVideoVariant);
          break;
        case "host_call_set_latency_level":
          t.setLatencyLevel(n.payload.latencyLevel);
          break;
        case "host_call_picture_in_picture":
          a.requestPictureInPicture();
          break;
        case "host_call_exit_picture_in_picture":
          a.exitPictureInPicture();
          break;
        default:
          return (n.type, !1);
      }
      return !0;
    }
    function c(e) {
      var t = e.engineExtrasAPI,
        n = e.hostCall,
        o = e.machine,
        a = e.videoElementAPI;
      if (
        !a ||
        !t ||
        (r("gkx")("18183") &&
          !o.getCurrentState().controlledState.hostCallCanApply)
      )
        o.dispatch(n);
      else {
        var i = !1;
        try {
          i = u({
            engineExtrasAPI: t,
            hostCall: n,
            machine: o,
            videoElementAPI: a,
          });
        } catch (e) {
          var l = r("getErrorSafe")(e);
          o.dispatch({
            payload: {
              errorLocation: "apply_host_call_catch",
              hostCall: n,
              hostCallError: e,
              videoElementError: a.getError(),
              videoElementNetworkState: a.getNetworkState(),
              videoElementReadyState: a.getReadyState(),
            },
            type: "implementation_host_call_failed",
          });
        }
        i &&
          o.dispatch({
            payload: { hostCall: n },
            type: "implementation_host_call_applied",
          });
      }
    }
    function d(e) {
      var t = [];
      function n() {
        t = t.filter(function (e) {
          return e.type !== "host_call_play" && e.type !== "host_call_pause";
        });
      }
      function r(e) {
        t = t.filter(function (t) {
          return t.type !== e;
        });
      }
      return (
        e.forEach(function (e) {
          switch (e.type) {
            case "host_call_play":
              n();
              break;
            case "host_call_pause":
              n();
              break;
            case "host_call_set_playback_rate":
              r(e.type);
              break;
            case "host_call_set_muted":
              r(e.type);
              break;
            case "host_call_set_volume":
              r(e.type);
              break;
            case "host_call_set_current_time":
              r(e.type);
              break;
            case "host_call_set_video_quality":
              r(e.type);
              break;
            case "host_call_set_video_variant":
              r(e.type);
              break;
            case "host_call_set_latency_level":
              r(e.type);
              break;
            case "host_call_picture_in_picture":
              r(e.type);
              break;
            case "host_call_exit_picture_in_picture":
              r(e.type);
              break;
            default:
              e.type;
          }
          t = t.concat([e]);
        }),
        t
      );
    }
    function m(e) {
      var t = e.engineExtrasAPI,
        n = e.machine,
        r = e.reason,
        o = e.state,
        a = e.videoElementAPI,
        i = [
          {
            payload: {
              hostCallID: s(),
              reason: r,
              volume: o.controlledState.volume,
            },
            type: "host_call_set_volume",
          },
          {
            payload: {
              hostCallID: s(),
              muted: o.controlledState.muted,
              reason: r,
            },
            type: "host_call_set_muted",
          },
          {
            payload: {
              hostCallID: s(),
              reason: r,
              selectedVideoQuality: o.controlledState.selectedVideoQuality,
            },
            type: "host_call_set_video_quality",
          },
          {
            payload: {
              hostCallID: s(),
              reason: r,
              selectedVideoVariant: o.controlledState.selectedVideoVariant,
            },
            type: "host_call_set_video_variant",
          },
        ],
        l = d(o.controlledState.hostCallQueue.concat(i));
      (l.forEach(function (e) {
        c({ engineExtrasAPI: t, hostCall: e, machine: n, videoElementAPI: a });
      }),
        n.dispatch({
          payload: { hostCallsFlushed: l },
          type: "implementation_host_call_queue_flushed",
        }));
    }
    ((l.makeHostCallID = s),
      (l.applyOrQueueHostCall = c),
      (l.flushHostCallQueue = m));
  },
  98,
);
