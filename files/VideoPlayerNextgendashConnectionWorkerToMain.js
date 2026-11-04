__d(
  "VideoPlayerNextgendashConnectionWorkerToMain",
  ["VideoPlayerNextgendashConnectionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = "VideoPlayerNextgendashConnectionWorkerToMain_" + t,
        l = "",
        s = o(
          "VideoPlayerNextgendashConnectionUtils",
        ).createInboundOutboundQueues(
          e,
          i,
          l,
          n,
          a,
          function (e) {
            return e.eventToMain.type;
          },
          function (e) {
            return {
              message: {
                events: e.map(function (e) {
                  return e.eventToMain;
                }),
                type: "comet_video_player_nextgendash__worker_to_main",
              },
              transferList: e.reduce(function (e, t) {
                var n;
                return e.concat((n = t.transferList) != null ? n : []);
              }, []),
            };
          },
          function (e, t) {
            var r = n.addMessageListener(
              "comet_video_player_nextgendash__main_to_worker",
              t,
            );
            e.push(function () {
              n.removeMessageListener(
                "comet_video_player_nextgendash__main_to_worker",
                r,
              );
            });
          },
          function (t) {
            r && t.push(r(e, n));
          },
        ),
        u = s.disconnect,
        c = s.getStats,
        d = s.send;
      return { disconnectFromMain: u, getStats: c, sendToMain: d };
    }
    l.connectToMain = e;
  },
  98,
);
