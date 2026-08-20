__d(
  "VideoPlayerNextgendashLoggingDestinationQPLWorkerToMain",
  ["VideoPlayerNextgendashBatcher"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("VideoPlayerNextgendashBatcher").createBatcher(
        t,
        50,
        20,
        function (t) {
          e.postMessage(
            {
              calls: t,
              type: "comet_video_player_nextgendash__worker_to_main_qpl_calls",
            },
            [],
          );
        },
      );
      return {
        displayName: "VideoPlayerNextgendashLoggingDestinationQPLWorkerToMain",
        log: function (t, r) {
          switch (r.type) {
            case "qpl_call": {
              n.push(r.qplCall);
              return;
            }
            default:
              return;
          }
        },
      };
    }
    l.createVideoPlayerNextgendashLoggingDestinationQPLWorkerToMain = e;
  },
  98,
);
