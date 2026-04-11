__d(
  "CoreVideoPlayerMetaData",
  ["VideoPlayerAudioAvailabilityInfo", "normalizeVideoPlayerLoopCount"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && isFinite(e) && e > 0 ? e : 0;
    }
    var s = [];
    function u(t) {
      var n,
        a,
        i,
        l,
        u = t.sideLoadCaptionsExpected === !0 || t.sideLoadCaptionsUrl != null,
        c = t.isLiveStreaming === !0;
      return babelHelpers.extends({}, t, {
        audioAvailabilityInfo:
          (n = t.audioAvailabilityInfo) != null
            ? n
            : o("VideoPlayerAudioAvailabilityInfo")
                .VideoPlayerAudioAvailabilityInfoDefault,
        autoplayGatingResult:
          t.autoplayGatingResult != null ? t.autoplayGatingResult : "unknown",
        canAutoplay: t.canAutoplay != null ? t.canAutoplay : "allow",
        desiredLatencyMs: (a = t.desiredLatencyMs) != null ? a : 0,
        inbandCaptionsExpected: c,
        initialRepresentationIds:
          (i = t.initialRepresentationIds) != null ? i : s,
        isNCSR: !!t.isNCSR,
        isPremiumMusicVideo: !!t.isPremiumMusicVideo,
        latencyToleranceMs: (l = t.latencyToleranceMs) != null ? l : 0,
        loopCount: r("normalizeVideoPlayerLoopCount")(t.loopCount),
        sideLoadCaptionsExpected: u,
        startTimestamp: e(t.startTimestamp),
      });
    }
    l.applyDefaultsToCoreVideoPlayerMetaData = u;
  },
  98,
);
