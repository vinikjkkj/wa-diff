__d(
  "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")(
        "WAWebBizBroadcastsSmartCSVImportSetupFlow.react",
      )
        .__setRef("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable")
        .load();
      return e;
    }, "BusinessBroadcastSmartCSVImportSetupFlow");
    async function s(t) {
      var n = await e();
      n.openSmartCSVImportSetupFlow(t);
    }
    l.openSmartCSVImportSetupFlowLoadable = s;
  },
  98,
);
