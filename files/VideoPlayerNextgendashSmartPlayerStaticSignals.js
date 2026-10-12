__d(
  "VideoPlayerNextgendashSmartPlayerStaticSignals",
  ["VideoPlayerSmartPlayerStaticSignalStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = function () {
        e.smartPlayerVideoDecodeCapabilities = o(
          "VideoPlayerSmartPlayerStaticSignalStore",
        ).videoPlayerSmartPlayerStaticSignalStore.getSnapshot().videoDecodeCapabilities;
      };
      return (
        n(),
        o(
          "VideoPlayerSmartPlayerStaticSignalStore",
        ).videoPlayerSmartPlayerStaticSignalStore.subscribe(function () {
          (n(), t());
        })
      );
    }
    l.subscribeVideoPlayerNextgendashSmartPlayerStaticSignals = e;
  },
  98,
);
