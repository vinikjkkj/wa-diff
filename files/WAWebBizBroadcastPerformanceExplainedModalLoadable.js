__d(
  "WAWebBizBroadcastPerformanceExplainedModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastPerformanceExplainedModal.react",
        )
          .__setRef("WAWebBizBroadcastPerformanceExplainedModalLoadable")
          .load();
        return e;
      }, "BizBroadcastPerformanceExplainedModal"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastPerformanceExplainedModalLoadable = c;
  },
  98,
);
