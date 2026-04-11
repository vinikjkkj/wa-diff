__d(
  "WAWebCommunityLogEvents",
  ["WAWebCadminDemoteWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n, r) {
      var e = new (o("WAWebCadminDemoteWamEvent").CadminDemoteWamEvent)({
        cadminDemoteOrigin: t,
        cadminDemoteResult: n,
        isLastCadminOrCreator: r,
      });
      e.commit();
    };
    l.logCadminDemoteEvent = e;
  },
  98,
);
