__d(
  "VideoDebugOverlayVersionStore",
  [
    "InstreamAdsDebugOverlay.react",
    "VideoEncodingDebugOverlay.react",
    "VideoPlayerAirwaveDebugOverlay.react",
    "VideoPlayerConfigDebugOverlay.react",
    "VideoPlayerContextsDebugOverlay.react",
    "VideoPlayerDashManifestDebugOverlay.react",
    "VideoPlayerDefaultDebugOverlay.react",
    "VideoPlayerDynamicBufferDebugOverlay.react",
    "VideoPlayerExternalDebugOverlay.react",
    "VideoPlayerIMFStickersDebugOverlay.react",
    "VideoPlayerLiveDebugOverlay.react",
    "WatchDebugOverlay.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = [
        { name: "Default", overlay: r("VideoPlayerDefaultDebugOverlay.react") },
        {
          name: "DASH manifest",
          overlay: r("VideoPlayerDashManifestDebugOverlay.react"),
        },
        { name: "Watch", overlay: r("WatchDebugOverlay.react") },
        { name: "Encoding", overlay: r("VideoEncodingDebugOverlay.react") },
        { name: "InstreamAds", overlay: r("InstreamAdsDebugOverlay.react") },
        {
          name: "Contexts",
          overlay: r("VideoPlayerContextsDebugOverlay.react"),
        },
        { name: "Config", overlay: r("VideoPlayerConfigDebugOverlay.react") },
        { name: "Live", overlay: r("VideoPlayerLiveDebugOverlay.react") },
        {
          name: "Dynamic Buffer",
          overlay: r("VideoPlayerDynamicBufferDebugOverlay.react"),
        },
        { name: "Airwave", overlay: r("VideoPlayerAirwaveDebugOverlay.react") },
        {
          name: "External",
          overlay: r("VideoPlayerExternalDebugOverlay.react"),
        },
        {
          isFullViewport: !0,
          name: "IMFStickers",
          overlay: r("VideoPlayerIMFStickersDebugOverlay.react"),
        },
      ];
    l.VideoDebugOverlayVersionStore = u;
  },
  98,
);
