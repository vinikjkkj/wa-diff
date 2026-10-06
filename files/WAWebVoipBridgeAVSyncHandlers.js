__d(
  "WAWebVoipBridgeAVSyncHandlers",
  [
    "Promise",
    "WAWebPonyfillsIdleCallback",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipGpuInfoProbe",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = {
        disableAVSync: function () {
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.disableAVSync();
        },
        resetVideoEnhancementState: function () {
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.resetVideoEnhancementState();
        },
        reloadVideoEnhancement: function () {
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.reloadVideoEnhancement();
        },
        consumeAVSyncMetrics: function () {
          return o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.consumeAVSyncMetrics();
        },
        peekPerParticipantAVSyncMetrics: function (t) {
          var e = t.isScreenShare,
            n = t.jid,
            r = o(
              "WAWebVoipVideoRenderSource",
            ).WAWebVoipVideoRenderSource.fromWire(n, e);
          return r == null
            ? null
            : o(
                "WAWebVoipVideoRendererRegistry",
              ).videoRendererRegistry.peekPerParticipantAVSyncMetrics(r);
        },
        consumeAudioCaptureMetrics: function () {
          return o(
            "WAWebVoipAudioCaptureAndPlayback",
          ).consumeAudioCaptureMetrics();
        },
        consumeAudioPlaybackMetrics: function () {
          return o(
            "WAWebVoipAudioCaptureAndPlayback",
          ).consumeAudioPlaybackMetrics();
        },
        consumeWebCodecsFatalErrorCount: function () {
          return o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.consumeWebCodecsFatalErrorCount();
        },
        consumeWebCodecsDecodeOrderMetrics: function () {
          return o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.consumeWebCodecsDecodeOrderMetrics();
        },
        detectGpuInfo: function () {
          return r("justknobx")._("6199")
            ? new (e || (e = n("Promise")))(function (e) {
                var t = !1,
                  n = function () {
                    t ||
                      ((t = !0), e(o("WAWebVoipGpuInfoProbe").detectGpuInfo()));
                  };
                (o("WAWebPonyfillsIdleCallback").requestIdleCallback(n),
                  window.setTimeout(n, s));
              })
            : (e || (e = n("Promise"))).resolve(null);
        },
      };
    l.VoipBridgeAVSyncHandlers = u;
  },
  98,
);
