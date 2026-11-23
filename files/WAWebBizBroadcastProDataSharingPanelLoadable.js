__d(
  "WAWebBizBroadcastProDataSharingPanelLoadable",
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
        return r("JSResourceForInteraction")(
          "WAWebBizBroadcastProDataSharingPanelContainer.react",
        )
          .__setRef("WAWebBizBroadcastProDataSharingPanelLoadable")
          .load();
      }, "BizBroadcastProDataSharingPanel"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastProDataSharingPanelLoadable = c;
  },
  98,
);
