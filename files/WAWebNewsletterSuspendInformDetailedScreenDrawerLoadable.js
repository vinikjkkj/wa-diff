__d(
  "WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable",
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
          "WAWebNewsletterSuspendInformDetailedScreenDrawer.react",
        )
          .__setRef("WAWebNewsletterSuspendInformDetailedScreenDrawerLoadable")
          .load();
        return e.NewsletterSuspendInformDetailedScreen;
      }, "NewsletterSuspendInformDetailedScreen"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.NewsletterSuspendInformDetailedScreenLoadable = c;
  },
  98,
);
