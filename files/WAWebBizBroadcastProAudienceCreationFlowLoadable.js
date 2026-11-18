__d(
  "WAWebBizBroadcastProAudienceCreationFlowLoadable",
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
      u = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebBizBroadcastProAudienceCreationFlow.react",
        )
          .__setRef("WAWebBizBroadcastProAudienceCreationFlowLoadable")
          .load();
      }, "BizBroadcastProAudienceCreationFlow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastProAudienceCreationFlowLoadable = c;
  },
  98,
);
