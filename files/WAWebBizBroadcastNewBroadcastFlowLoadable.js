__d(
  "WAWebBizBroadcastNewBroadcastFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastNewBroadcastFlow.react",
        )
          .__setRef("WAWebBizBroadcastNewBroadcastFlowLoadable")
          .load();
        return e;
      }, "BizBroadcastNewBroadcastFlow");
    function c() {
      r("JSResourceForInteraction")("WAWebBizBroadcastNewBroadcastFlow.react")
        .__setRef("WAWebBizBroadcastNewBroadcastFlowLoadable")
        .load();
    }
    var d = r("WAWebLoadable")({
      loader: u,
      loading: function (t) {
        return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
      },
    });
    ((l.prefetchNewBroadcastFlow = c),
      (l.WAWebBizBroadcastNewBroadcastFlowLoadable = d));
  },
  98,
);
