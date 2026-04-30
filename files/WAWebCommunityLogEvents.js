__d(
  "WAWebCommunityLogEvents",
  ["WAWebCadminDemoteWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = new (o("WAWebCadminDemoteWamEvent").CadminDemoteWamEvent)({
        cadminDemoteOrigin: e,
        cadminDemoteResult: t,
        isLastCadminOrCreator: n,
      });
      r.commit();
    }
    l.logCadminDemoteEvent = e;
  },
  98,
);
