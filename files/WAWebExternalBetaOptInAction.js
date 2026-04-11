__d(
  "WAWebExternalBetaOptInAction",
  [
    "Promise",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebExternalBetaApi",
    "WAWebExternalWebBetaSync",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = { externalWebBetaAction: { isOptIn: t } };
      return o("WAWebSyncdActionUtils").buildPendingMutation({
        collection: o("WASyncdConst").CollectionName.Regular,
        indexArgs: [],
        value: n,
        version: r("WAWebExternalWebBetaSync").getVersion(),
        operation: o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
          .SET,
        timestamp: e,
        action: r("WAWebExternalWebBetaSync").getAction(),
      });
    }
    function u(t) {
      var r = o("WATimeUtils").unixTimeMs(),
        a = s(r, t);
      return o("WAWebSyncdCoreApi")
        .lockForSync([], [a], function () {
          return (e || (e = n("Promise"))).resolve();
        })
        .then(function () {
          return o("WAWebExternalBetaApi").changeOptInStatusForExternalWebBeta(
            t,
          );
        });
    }
    l.setOptInBetaAction = u;
  },
  98,
);
