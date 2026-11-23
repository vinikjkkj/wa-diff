__d(
  "WAWebBizBroadcastProAudienceDetailsSidePanelLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastProAudienceDetailsSidePanel.react",
        )
          .__setRef("WAWebBizBroadcastProAudienceDetailsSidePanelLoadable")
          .load();
        return e;
      }, "BizBroadcastProAudienceDetailsSidePanel"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u),
      (l.WAWebBizBroadcastProAudienceDetailsSidePanelLoadable = c));
  },
  98,
);
