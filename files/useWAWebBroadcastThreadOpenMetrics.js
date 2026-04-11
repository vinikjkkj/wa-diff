__d(
  "useWAWebBroadcastThreadOpenMetrics",
  [
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatGetters",
    "WAWebWidToJid",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(function () {
        o("WAWebChatGetters").getIsBroadcast(e) &&
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.broadcastThreadViewed(
            o("WAWebWidToJid").widToBroadcastJid(e.id),
          );
      }, []);
    }
    l.useBroadcastThreadOpenMetrics = u;
  },
  98,
);
