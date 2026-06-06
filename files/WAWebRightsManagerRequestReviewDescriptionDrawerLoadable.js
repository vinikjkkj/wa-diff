__d(
  "WAWebRightsManagerRequestReviewDescriptionDrawerLoadable",
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
          "WAWebRightsManagerRequestReviewDescriptionDrawer.react",
        )
          .__setRef("WAWebRightsManagerRequestReviewDescriptionDrawerLoadable")
          .load();
        return e;
      }, "RightsManagerRequestReviewDescriptionDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.RightsManagerRequestReviewDescriptionDrawerLoadable = c;
  },
  98,
);
