__d(
  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
  [
    "VideoPlayerNextgendashQPL",
    "VideoPlayerNextgendashQPLFromMain",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = null,
        a = null,
        i = void 0,
        l = void 0;
      return {
        displayName: "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
        log: function (u, c) {
          var s = e.current,
            d = t.current;
          if (
            s != null &&
            d != null &&
            (c.type === "state_machine_fatal_exception" ||
              c.type === "state_machine_receive_event_success" ||
              c.type === "state_machine_receive_event_exception") &&
            c.sm === s
          ) {
            var m = s.state,
              p = m.workerType;
            p !== i &&
              (n != null && (n(), (n = null)),
              p != null && (n = d.subspan("selected_worker_" + p)),
              (i = p));
            var _ = m.state === "linked_to_worker" ? m.workerType : void 0;
            _ !== l &&
              (a != null && (a(), (a = null)),
              _ != null && (a = d.subspan("linked_worker_" + _)),
              (l = _));
          }
          if (c.type === "qpl_call") {
            o("VideoPlayerNextgendashQPLFromMain").qplCallFromMain(
              u,
              c.qplCall,
            );
            var f = !1;
            if (c.qplCall.method === "markerStart") {
              var g = o("VideoPlayerNextgendashQPL").qplCacheKey(
                c.qplCall.event,
                c.qplCall.instanceKey,
              );
              u.config.qplMarkersEnded.includes(g) &&
                (r("removeFromArray")(u.config.qplMarkersEnded, g), (f = !0));
            } else if (c.qplCall.method === "markerEnd") {
              var h = o("VideoPlayerNextgendashQPL").qplCacheKey(
                c.qplCall.event,
                c.qplCall.instanceKey,
              );
              u.config.qplMarkersEnded.includes(h) ||
                (u.config.qplMarkersEnded.push(h), (f = !0));
            }
            f && s != null && s.sendEvent({ type: "update_config_from_env" });
          }
        },
      };
    }
    l.createVideoPlayerNextgendashLoggingDestinationQPLFromEngine = e;
  },
  98,
);
