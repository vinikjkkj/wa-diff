__d(
  "WAWebCrosspostingMsgHydration",
  ["WAWebCrosspostingDBOperations", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (o("WAWebMsgGetters").getIsStatus(e)) {
        var t = e.id.toString(),
          n = await o(
            "WAWebCrosspostingDBOperations",
          ).getCrosspostingInfoForMessage(t);
        n != null && (e.crosspostingInfo = n);
      }
    }
    async function s(e) {
      if (e.length !== 0) {
        var t = e.map(function (e) {
            return e.id.toString();
          }),
          n = await o(
            "WAWebCrosspostingDBOperations",
          ).getCrosspostingInfoForMessagesBulk(t);
        for (var r of e) {
          var a = n.get(r.id.toString());
          a != null && (r.crosspostingInfo = a);
        }
      }
    }
    ((l.hydrateCrosspostingInfo = e), (l.hydrateCrosspostingInfoBulk = s));
  },
  98,
);
