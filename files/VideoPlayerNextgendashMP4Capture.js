__d(
  "VideoPlayerNextgendashMP4Capture",
  ["VideoPlayerMP4InspectorLimits", "VideoPlayerNextgendashEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        e.postMP4InspectorCapture(t);
      };
    }
    function s(e) {
      if (
        e == null ||
        typeof e != "object" ||
        !("type" in e) ||
        e.type !==
          "comet_video_player_nextgendash__worker_to_main_mp4_capture" ||
        !("event" in e)
      )
        return null;
      var t = e.event;
      if (
        t == null ||
        typeof t != "object" ||
        !("type" in t) ||
        t.type !== "from_worker_to_main_mp4_capture" ||
        !("sessionId" in t) ||
        typeof t.sessionId != "number" ||
        !Number.isSafeInteger(t.sessionId) ||
        t.sessionId < 1 ||
        !("playerInstanceKey" in t) ||
        typeof t.playerInstanceKey != "string" ||
        !("workerType" in t) ||
        (t.workerType !== "VirtualWorker" &&
          t.workerType !== "RealWorker" &&
          t.workerType !== "RealWorkerV2") ||
        !("entry" in t)
      )
        return null;
      var n = t.entry,
        r = t.sessionId,
        a = t.workerType,
        i = {
          playerInstanceKey: o(
            "VideoPlayerNextgendashEnvironment",
          ).makeVideoPlayerNextgendashPlayerInstanceKey(t.playerInstanceKey),
          sessionId: r,
          type: "from_worker_to_main_mp4_capture",
          workerType: a,
        };
      return n === null
        ? babelHelpers.extends({}, i, { entry: null })
        : n == null ||
            typeof n != "object" ||
            !("data" in n) ||
            !(n.data instanceof Uint8Array) ||
            !("track" in n) ||
            typeof n.track != "string" ||
            !("representationId" in n) ||
            typeof n.representationId != "string" ||
            !("mimeCodecs" in n) ||
            typeof n.mimeCodecs != "string" ||
            !("stage" in n) ||
            n.stage !== "append"
          ? null
          : babelHelpers.extends({}, i, {
              entry: {
                data: n.data,
                mimeCodecs: n.mimeCodecs,
                representationId: n.representationId,
                stage: "append",
                track: n.track,
              },
            });
    }
    function u(e, t, n, r) {
      var a = null,
        i = 0,
        l = 0,
        s = !1;
      return function (u, c) {
        var d = e.config.mp4InspectorCaptureSessionId;
        if (
          !(d == null || e.config.mediaSinkType !== "MSE") &&
          (d !== a && ((a = d), (i = 0), (l = 0), (s = !1)), !s)
        )
          try {
            if (u.byteLength === 0) return;
            if (
              i + u.byteLength >
                o("VideoPlayerMP4InspectorLimits")
                  .VIDEO_PLAYER_MP4_INSPECTOR_MAX_BYTES ||
              l >=
                o("VideoPlayerMP4InspectorLimits")
                  .VIDEO_PLAYER_MP4_INSPECTOR_MAX_ENTRIES
            ) {
              ((s = !0),
                r({
                  entry: null,
                  playerInstanceKey: t,
                  sessionId: d,
                  type: "from_worker_to_main_mp4_capture",
                  workerType: n,
                }));
              return;
            }
            var m = new Uint8Array(u);
            ((i += m.byteLength),
              l++,
              (s =
                i >=
                  o("VideoPlayerMP4InspectorLimits")
                    .VIDEO_PLAYER_MP4_INSPECTOR_MAX_BYTES ||
                l >=
                  o("VideoPlayerMP4InspectorLimits")
                    .VIDEO_PLAYER_MP4_INSPECTOR_MAX_ENTRIES),
              r({
                entry: {
                  data: m,
                  mimeCodecs: c.mimeCodecsParsed.mimeCodecs,
                  representationId: String(c.representationId),
                  stage: "append",
                  track: c.type,
                },
                playerInstanceKey: t,
                sessionId: d,
                type: "from_worker_to_main_mp4_capture",
                workerType: n,
              }));
          } catch (e) {
            s = !0;
            try {
              r({
                entry: null,
                playerInstanceKey: t,
                sessionId: d,
                type: "from_worker_to_main_mp4_capture",
                workerType: n,
              });
            } catch (e) {}
          }
      };
    }
    ((l.createMP4CapturePortSender = e),
      (l.parseMP4CaptureMessage = s),
      (l.createMP4CaptureAppend = u));
  },
  98,
);
