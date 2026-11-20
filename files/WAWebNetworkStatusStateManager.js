__d(
  "WAWebNetworkStatusStateManager",
  ["WACrossPortalStateManager"],
  function (t, n, r, o, a, i, l) {
    var e = o("WACrossPortalStateManager").defineCrossPortalState(
        "networkStatus",
        !0,
      ),
      s = o("WACrossPortalStateManager").defineCrossPortalState(
        "networkOfflineCause",
        null,
      );
    ((l.networkStatusStateManager = e),
      (l.networkOfflineCauseStateManager = s));
  },
  98,
);
