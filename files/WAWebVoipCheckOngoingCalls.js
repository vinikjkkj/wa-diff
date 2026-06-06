__d(
  "WAWebVoipCheckOngoingCalls",
  ["WAWebVoipOngoingCallCollection", "WAWebVoipStackInterface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (e != null) {
        await o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.waitUntilLoaded();
        var t = o(
          "WAWebVoipOngoingCallCollection",
        ).WAWebVoipOngoingCallCollection.getModelsArray();
        if (t.length !== 0) {
          var n = [],
            r = [];
          for (var a of t) {
            var i,
              l = (i = a.id) == null ? void 0 : i.id,
              s = a.callCreator;
            l != null && s != null && (n.push(l), r.push(s.toString()));
          }
          n.length > 0 && (await e.checkOngoingCalls(n, r));
        }
      }
    }
    l.checkOngoingCalls = e;
  },
  98,
);
