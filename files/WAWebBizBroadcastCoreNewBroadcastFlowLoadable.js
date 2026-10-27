__d(
  "WAWebBizBroadcastCoreNewBroadcastFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizBroadcastNewBroadcastFlow.react",
          )
            .__setRef("WAWebBizBroadcastCoreNewBroadcastFlowLoadable")
            .load();
          return e;
        }),
        "BizBroadcastNewBroadcastFlow",
      );
    function c() {
      r("JSResourceForInteraction")("WAWebBizBroadcastNewBroadcastFlow.react")
        .__setRef("WAWebBizBroadcastCoreNewBroadcastFlowLoadable")
        .load();
    }
    var d = r("WAWebLoadable")({
      loader: u,
      loading: function (t) {
        return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
      },
    });
    ((l.prefetchNewBroadcastFlow = c),
      (l.WAWebBizBroadcastCoreNewBroadcastFlowLoadable = d));
  },
  98,
);
