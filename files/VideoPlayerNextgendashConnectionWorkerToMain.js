__d(
  "VideoPlayerNextgendashConnectionWorkerToMain",
  ["VideoPlayerNextgendashConnectionUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return !t || e.playerInstanceKey == null
        ? e.type
        : e.type + ":" + e.playerInstanceKey;
    }
    function s(t, n, r, a, i) {
      var l = "VideoPlayerNextgendashConnectionWorkerToMain_" + n,
        s = "",
        u = o(
          "VideoPlayerNextgendashConnectionUtils",
        ).createInboundOutboundQueues(
          t,
          l,
          s,
          r,
          i,
          function (n) {
            return e(
              n.eventToMain,
              t.config.enablePlayerScopedWorkerToMainEventCoalescing,
            );
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
            var n = r.addMessageListener(
              "comet_video_player_nextgendash__main_to_worker",
              t,
            );
            e.push(function () {
              r.removeMessageListener(
                "comet_video_player_nextgendash__main_to_worker",
                n,
              );
            });
          },
          function (e) {
            a && e.push(a(t, r));
          },
        ),
        c = u.disconnect,
        d = u.getStats,
        m = u.send;
      return { disconnectFromMain: c, getStats: d, sendToMain: m };
    }
    ((l.internal_getWorkerToMainEventCoalescingKey = e), (l.connectToMain = s));
  },
  98,
);
