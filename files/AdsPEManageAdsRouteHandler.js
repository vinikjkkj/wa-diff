__d(
  "AdsPEManageAdsRouteHandler",
  ["fbt", "AdsMgmtStoreRegistryResource", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return s._(/*BTDS*/ "Manage ads");
    }
    function c(t, n) {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? o("AdsMgmtStoreRegistryResource").load(n)
        : {};
    }
    ((l.getTitle = u), (l.routeDataFetching = c));
  },
  226,
);
