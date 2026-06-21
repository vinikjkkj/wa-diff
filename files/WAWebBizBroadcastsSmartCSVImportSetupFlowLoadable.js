__d(
  "WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebBizBroadcastsSmartCSVImportSetupFlow.react",
        )
          .__setRef("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable")
          .load();
        return e;
      }),
      "BusinessBroadcastSmartCSVImportSetupFlow",
    );
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e();
          n.openSmartCSVImportSetupFlow(t);
        })),
        u.apply(this, arguments)
      );
    }
    l.openSmartCSVImportSetupFlowLoadable = s;
  },
  98,
);
