__d(
  "VideoPlayerNextgendashLoggingDestinationODSWorkerToMain",
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
              type: "comet_video_player_nextgendash__worker_to_main_ods_calls",
            },
            [],
          );
        },
      );
      return {
        displayName: "VideoPlayerNextgendashLoggingDestinationODSWorkerToMain",
        log: function (t, r) {
          switch (r.type) {
            case "ods_call": {
              var e = r.odsCall,
                o = e.entity,
                a = e.key,
                i = e.sampleRate;
              t.host.random.coinflip(i) &&
                n.push({ entity: o, key: a, sampleRate: 1 });
              return;
            }
            default:
              return;
          }
        },
      };
    }
    l.createVideoPlayerNextgendashLoggingDestinationODSWorkerToMain = e;
  },
  98,
);
