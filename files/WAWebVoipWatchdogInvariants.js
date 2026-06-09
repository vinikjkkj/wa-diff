__d(
  "WAWebVoipWatchdogInvariants",
  ["WAWebVoipVideoRendererRegistry"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3,
      s = 2e3,
      u = 3e3,
      c = 3e3,
      d = 1500,
      m = 3e3,
      p = 6e4,
      _ = 3,
      f = {
        kind: "video.avStateMismatch",
        scope: "per-participant",
        triggerTicks: 3,
        clearTicks: 2,
        settlingMs: 3e3,
        evaluate: function (n, r) {
          if (n == null) return { ok: !0 };
          var t = n.decode,
            o = n.state,
            a = n.tile;
          if (o.isSelf || o.hasLeft) return { ok: !0 };
          if (r.nowMs - o.lastJoinTimestampMs < d) return { ok: !0 };
          if (a == null || !a.hasVideoElement) return { ok: !0 };
          if (t == null) return { ok: !0 };
          var i = t.frameCount >= _ && r.nowMs - t.lastFrameTimestampMs < e;
          return i
            ? a.renderMode === "video" || a.renderMode === "unknown"
              ? { ok: !0 }
              : {
                  ok: !1,
                  evidence: {
                    participantKey: o.key,
                    logicalIsVideoEnabled: o.isVideoEnabled,
                    frameCount: t.frameCount,
                    msSinceLastFrame: Math.round(
                      r.nowMs - t.lastFrameTimestampMs,
                    ),
                    lastFrameWidth: t.lastWidth,
                    lastFrameHeight: t.lastHeight,
                    tileRenderMode: a.renderMode,
                    msSinceLastPaint: Math.round(
                      r.nowMs - a.lastVideoFramePaintMs,
                    ),
                  },
                }
            : { ok: !0 };
        },
      },
      g = {
        kind: "video.canvasNotRegistered",
        scope: "per-participant",
        triggerTicks: 3,
        clearTicks: 2,
        settlingMs: 3e3,
        evaluate: function (t, n) {
          if (t == null) return { ok: !0 };
          var e = t.state;
          return e.isSelf || e.hasLeft || !e.isVideoEnabled
            ? { ok: !0 }
            : n.nowMs - e.lastJoinTimestampMs < d
              ? { ok: !0 }
              : o(
                    "WAWebVoipVideoRendererRegistry",
                  ).videoRendererRegistry.hasCanvasForJid(e.key)
                ? { ok: !0 }
                : {
                    ok: !1,
                    evidence: {
                      participantKey: e.key,
                      logicalIsVideoEnabled: e.isVideoEnabled,
                    },
                  };
        },
      },
      h = {
        kind: "video.framesNotPainted",
        scope: "per-participant",
        triggerTicks: 3,
        clearTicks: 2,
        settlingMs: 3e3,
        evaluate: function (n, r) {
          if (n == null) return { ok: !0 };
          var t = n.decode,
            o = n.state,
            a = n.tile;
          if (o.isSelf || o.hasLeft || !o.isVideoEnabled) return { ok: !0 };
          if (t == null || a == null || !a.hasVideoElement) return { ok: !0 };
          var i = t.frameCount > 0 && r.nowMs - t.lastFrameTimestampMs < e;
          return i
            ? a.lastVideoFramePaintMs > 0 &&
              r.nowMs - a.lastVideoFramePaintMs < s
              ? { ok: !0 }
              : {
                  ok: !1,
                  evidence: {
                    participantKey: o.key,
                    frameCount: t.frameCount,
                    msSinceLastFrame: Math.round(
                      r.nowMs - t.lastFrameTimestampMs,
                    ),
                    msSinceLastPaint:
                      a.lastVideoFramePaintMs > 0
                        ? Math.round(r.nowMs - a.lastVideoFramePaintMs)
                        : null,
                    tileRenderMode: a.renderMode,
                  },
                }
            : { ok: !0 };
        },
      },
      y = {
        kind: "video.staleFrameOnLeave",
        scope: "per-participant",
        triggerTicks: 3,
        clearTicks: 2,
        settlingMs: 3e3,
        evaluate: function (t, n) {
          var e;
          if (t == null) return { ok: !0 };
          var r = t.state;
          if (r.isSelf || !r.hasLeft) return { ok: !0 };
          var a = (e = r.lastLeaveTimestampMs) != null ? e : 0,
            i = n.nowMs - a;
          return a === 0 || i < m || i >= p
            ? { ok: !0 }
            : o(
                  "WAWebVoipVideoRendererRegistry",
                ).videoRendererRegistry.hasCanvasForJid(r.key)
              ? {
                  ok: !1,
                  evidence: {
                    participantKey: r.key,
                    msSinceLeave: Math.round(n.nowMs - a),
                    firstFrameReceived: o(
                      "WAWebVoipVideoRendererRegistry",
                    ).videoRendererRegistry.hasReceivedFirstFrameForJid(r.key),
                  },
                }
              : { ok: !0 };
        },
      },
      C = {
        kind: "capture.selfPreviewBlank",
        scope: "per-participant",
        triggerTicks: 3,
        clearTicks: 2,
        settlingMs: 3e3,
        evaluate: function (t, n) {
          if (t == null) return { ok: !0 };
          var e = t.state,
            r = t.tile;
          return !e.isSelf || !e.isVideoEnabled || e.hasLeft
            ? { ok: !0 }
            : n.nowMs - e.lastJoinTimestampMs < d
              ? { ok: !0 }
              : r == null || !r.hasVideoElement
                ? { ok: !0 }
                : r.lastVideoFramePaintMs > 0 &&
                    n.nowMs - r.lastVideoFramePaintMs < c
                  ? { ok: !0 }
                  : {
                      ok: !1,
                      evidence: {
                        msSinceLastPaint:
                          r.lastVideoFramePaintMs > 0
                            ? Math.round(n.nowMs - r.lastVideoFramePaintMs)
                            : null,
                        tileRenderMode: r.renderMode,
                        boundingWidth: r.boundingWidth,
                        boundingHeight: r.boundingHeight,
                        intersectionRatio: r.intersectionRatio,
                        firstFrameReceived: o(
                          "WAWebVoipVideoRendererRegistry",
                        ).videoRendererRegistry.hasReceivedFirstFrameForJid(
                          e.key,
                        ),
                      },
                    };
        },
      },
      b = {
        kind: "encoder.silent",
        scope: "call-wide",
        triggerTicks: 3,
        clearTicks: 2,
        settlingMs: 3e3,
        evaluate: function (t, n) {
          if (n.selfEncodedLastFrameTimestampMs === 0) {
            if (n.nowMs - n.lastTransitionMs < u) return { ok: !0 };
          } else if (n.nowMs - n.selfEncodedLastFrameTimestampMs < u)
            return { ok: !0 };
          return n.selfEncodedFrameCount === 0
            ? { ok: !0 }
            : {
                ok: !1,
                evidence: {
                  selfEncodedFrameCount: n.selfEncodedFrameCount,
                  msSinceLastEncodedFrame: Math.round(
                    n.nowMs - n.selfEncodedLastFrameTimestampMs,
                  ),
                },
              };
        },
      },
      v = [f, g, h, y, C, b];
    l.ALL_INVARIANTS = v;
  },
  98,
);
