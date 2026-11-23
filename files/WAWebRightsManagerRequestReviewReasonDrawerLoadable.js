__d(
  "WAWebRightsManagerRequestReviewReasonDrawerLoadable",
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
          "WAWebRightsManagerRequestReviewReasonDrawer.react",
        )
          .__setRef("WAWebRightsManagerRequestReviewReasonDrawerLoadable")
          .load();
        return e;
      }, "RightsManagerRequestReviewReasonDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.RightsManagerRequestReviewReasonDrawerLoadable = c;
  },
  98,
);
