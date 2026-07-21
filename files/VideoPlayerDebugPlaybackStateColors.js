__d(
  "VideoPlayerDebugPlaybackStateColors",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      ended: "#ab47bc",
      error: "#f44336",
      idle: "#9e9e9e",
      paused: "#29b6f6",
      playing: "#00e676",
      stalling: "#ff6d00",
    };
    function l(e) {
      return e.error != null
        ? "error"
        : e.ended
          ? "ended"
          : e.stalling
            ? "stalling"
            : e.playing
              ? "playing"
              : e.paused
                ? "paused"
                : "idle";
    }
    ((i.PLAYBACK_STATE_COLORS = e),
      (i.deriveVideoPlayerDebugPlaybackStateFromExposedState = l));
  },
  66,
);
