__d(
  "WAWebVoipBridgeAVSyncHandlers",
  ["WAWebVoipAudioCaptureAndPlayback", "WAWebVoipVideoRendererRegistry"],
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
        var e = t.jid;
        return o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.peekPerParticipantAVSyncMetrics(e);
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
