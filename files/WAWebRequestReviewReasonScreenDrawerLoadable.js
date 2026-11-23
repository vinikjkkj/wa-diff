__d(
  "WAWebRequestReviewReasonScreenDrawerLoadable",
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
          "WAWebRequestReviewReasonScreenDrawer.react",
        )
          .__setRef("WAWebRequestReviewReasonScreenDrawerLoadable")
          .load();
        return e.RequestReviewReasonScreen;
      }, "RequestReviewReasonScreenDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.RequestReviewReasonScreenLoadable = c;
  },
  98,
);
