__d(
  "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
  ["VideoPlayerODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        displayName: "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
        log: function (t, n) {
          n.type === "ods_call" &&
            o("VideoPlayerODS").bumpEntityKey(
              n.odsCall.entity,
              n.odsCall.key,
              n.odsCall.sampleRate,
            );
        },
      };
    }
    l.createVideoPlayerNextgendashLoggingDestinationODSFromEngine = e;
  },
  98,
);
