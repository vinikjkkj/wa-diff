__d(
  "WAWebVoipBridgeAVSyncHandlers",
  [
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
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
    };
    l.VoipBridgeAVSyncHandlers = e;
  },
  98,
);
