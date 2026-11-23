__d(
  "WAWebBizBroadcastProSuggestedAudienceAdapterLoadable",
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
          "WAWebBizBroadcastProSuggestedAudienceAdapter.react",
        )
          .__setRef("WAWebBizBroadcastProSuggestedAudienceAdapterLoadable")
          .load();
      }, "BizBroadcastProSuggestedAudienceAdapter"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastProSuggestedAudienceAdapterLoadable = c;
  },
  98,
);
