__d(
  "WAWebRightsManagerRequestReviewTextReasonDrawerLoadable",
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
          "WAWebRightsManagerRequestReviewTextReasonDrawer.react",
        )
          .__setRef("WAWebRightsManagerRequestReviewTextReasonDrawerLoadable")
          .load();
        return e;
      }, "WAWebRightsManagerRequestReviewTextReasonDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.RightsManagerRequestReviewTextReasonDrawerLoadable = c;
  },
  98,
);
