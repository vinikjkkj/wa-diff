__d(
  "WAWebNewsletterInsightsDrawerLoadable",
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
          "WAWebNewsletterInsightsDrawer.react",
        )
          .__setRef("WAWebNewsletterInsightsDrawerLoadable")
          .load();
        return e.NewsletterInsightsDrawer;
      }, "NewsletterInsightsDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.NewsletterInsightsDrawerLoadable = c;
  },
  98,
);
