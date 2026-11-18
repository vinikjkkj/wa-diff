__d(
  "WAWebBizBroadcastProAudienceEditorLoadable",
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
          "WAWebBizBroadcastProAudienceEditor.react",
        )
          .__setRef("WAWebBizBroadcastProAudienceEditorLoadable")
          .load();
      }, "BizBroadcastProAudienceEditor"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastProAudienceEditorLoadable = c;
  },
  98,
);
