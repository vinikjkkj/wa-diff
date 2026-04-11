__d(
  "useAudioAvailabilityAtPlayhead",
  [
    "VideoPlayerAudioAvailabilityInfo",
    "VideoPlayerHooks",
    "react-compiler-runtime",
    "useVideoPlayerControllerSubscription",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = o("react-compiler-runtime").c(2),
        n = (e || (e = o("VideoPlayerHooks"))).useAudioAvailabilityInfo(),
        a;
      t[0] !== n
        ? ((a = function (t, r) {
            var e = t.getPlayheadPosition(),
              a = o(
                "VideoPlayerAudioAvailabilityInfo",
              ).makeVideoPlayerAudioAvailabilityAtPlayheadInfo(n, {
                playheadPosition: e,
              });
            return r != null &&
              r.isPlayheadWithinMutedSegment ===
                a.isPlayheadWithinMutedSegment &&
              r.isSilentAtPlayhead === a.isSilentAtPlayhead &&
              r.volumeControlState === a.volumeControlState
              ? r
              : a;
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a;
      return r("useVideoPlayerControllerSubscription")(i);
    }
    l.default = s;
  },
  98,
);
