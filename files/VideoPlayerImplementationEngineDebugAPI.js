__d(
  "VideoPlayerImplementationEngineDebugAPI",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.debugAPIOverrides,
        n = e.engineExtrasAPI,
        r = e.getVideoElementAPI,
        o = e.loggerToVPL,
        a = {
          addDebugEventSubscriber: function (t) {
            return o.addDebugSubscriber(t);
          },
          dataSourceBufferedRangesByTrack: null,
          dataSourceP2PStats: null,
          dataSourceP2PTech: null,
          dataSourceSegmentsByTrack: null,
          getApproximateFBLSToPlayerDisplayLatency: function () {
            return n.getApproximateFBLSToPlayerDisplayLatency();
          },
          getAudioRepresentationId: function () {
            var e, t;
            return (e =
              (t = n.getCurrentAudioRepresentation()) == null
                ? void 0
                : t.getID()) != null
              ? e
              : null;
          },
          getConfig: function () {
            return null;
          },
          getCurrentAudioMimeCodecs: function () {
            var e = n.getCurrentAudioRepresentation();
            return e != null ? e.getMimeCodecs() : null;
          },
          getCurrentAudioRepresentation: function () {
            return n.getCurrentAudioRepresentation();
          },
          getCurrentEstimatedBandwidth: function () {
            return n.getEstimatedBandwidth();
          },
          getCurrentVideoMimeCodecs: function () {
            var e = n.getCurrentVideoRepresentation();
            return e != null ? e.getMimeCodecs() : null;
          },
          getCurrentVideoRepresentation: function () {
            return n.getCurrentVideoRepresentation();
          },
          getDrmProtectionStatus: function () {
            return n.isDrm();
          },
          getDroppedFrameCount: function () {
            var e = r();
            return e == null ? null : e.getDroppedFrameCount();
          },
          getEnginePartsForConsole: function () {
            return [];
          },
          getManifest: function () {
            return null;
          },
          getManifestUrl: function () {
            return null;
          },
          getPrefetchCacheStats: function () {
            return null;
          },
          getStreamType: function () {
            return n.getStreamType();
          },
          getTotalFrameCount: function () {
            var e = r();
            return e == null ? null : e.getTotalFrameCount();
          },
          getTotalStallCount: function () {
            var e = o.getLoggerState();
            return e.stallCountTotal;
          },
          getTotalStallDuration: function () {
            var e = o.getLoggerState();
            return e.stallDurationTotal;
          },
          getTotalStartStallCount: function () {
            var e = o.getLoggerState();
            return e.startStallCountTotal;
          },
          getTotalStartStallDuration: function () {
            var e = o.getLoggerState();
            return e.startStallDurationTotal;
          },
          getVideoABRState: function () {
            return null;
          },
          getVideoElement: function () {
            var e = r();
            return e == null ? null : e.getUnderlyingVideoElement();
          },
          getVideoElementPlaybackRate: function () {
            var e = r();
            return e == null ? null : e.getPlaybackRate();
          },
          getVideoElementPlayheadPosition: function () {
            var e = r();
            return e == null ? null : e.getPlayheadPosition();
          },
          getVideoRepresentationId: function () {
            var e, t;
            return (e =
              (t = n.getCurrentVideoRepresentation()) == null
                ? void 0
                : t.getID()) != null
              ? e
              : null;
          },
          getVolatilityState: function () {
            return null;
          },
        };
      return (t && (a = babelHelpers.extends({}, a, t)), a);
    }
    i.createVideoPlayerImplementationDebugAPI = e;
  },
  66,
);
