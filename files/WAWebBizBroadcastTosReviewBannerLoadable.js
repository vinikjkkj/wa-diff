__d(
  "WAWebBizBroadcastTosReviewBannerLoadable",
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
          "WAWebBizBroadcastTosReviewBanner.react",
        )
          .__setRef("WAWebBizBroadcastTosReviewBannerLoadable")
          .load();
        return e;
      }, "BizBroadcastTosReviewBanner"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.WAWebBizBroadcastTosReviewBannerLoadable = c;
  },
  98,
);
