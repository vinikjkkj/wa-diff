__d(
  "WAWebBizBroadcastNewBroadcastFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizBroadcastCoreNewBroadcastFlowLoadable",
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
          "WAWebBizBroadcastNewBroadcastFlowRouter.react",
        )
          .__setRef("WAWebBizBroadcastNewBroadcastFlowLoadable")
          .load();
        return e;
      }, "BizBroadcastNewBroadcastFlowRouter"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.prefetchNewBroadcastFlow = o(
      "WAWebBizBroadcastCoreNewBroadcastFlowLoadable",
    ).prefetchNewBroadcastFlow),
      (l.WAWebBizBroadcastNewBroadcastFlowLoadable = c));
  },
  98,
);
