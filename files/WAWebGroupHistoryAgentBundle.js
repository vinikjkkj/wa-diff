__d(
  "WAWebGroupHistoryAgentBundle",
  [
    "WAWebBotUtils",
    "WAWebGroupHistoryGating",
    "WAWebResolveGroupAgentParticipants",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = (e != null ? e : []).map(o("WAWebWidFactory").createWid),
        a = n.filter(o("WAWebBotUtils").isWidGroupAgentFbidWid);
      if (
        a.length === 0 ||
        !o("WAWebGroupHistoryGating").isMuseGroupHistoryShareEnabled()
      )
        return [];
      if (n.length !== 1)
        throw r("err")(
          "[group-history] agent history bundle names another receiver",
        );
      var i = await o(
          "WAWebResolveGroupAgentParticipants",
        ).resolveGroupAgentFanoutForGroupSend(t),
        l = i.resolvedGroupAgentParticipants;
      if (
        !a.every(function (e) {
          return l.some(function (t) {
            return t.equals(e);
          });
        })
      )
        throw r("err")(
          "[group-history] agent history receiver is not a group agent",
        );
      return a;
    }
    l.getAgentHistoryBundleTargets = e;
  },
  98,
);
