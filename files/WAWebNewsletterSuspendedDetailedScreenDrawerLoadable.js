__d(
  "WAWebNewsletterSuspendedDetailedScreenDrawerLoadable",
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
          "WAWebNewsletterSuspendedDetailedScreenDrawer.react",
        )
          .__setRef("WAWebNewsletterSuspendedDetailedScreenDrawerLoadable")
          .load();
        return e.NewsletterSuspendedDetailedScreen;
      }, "NewsletterSuspendedDetailedScreenDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.NewsletterSuspendedDetailedScreenLoadable = c;
  },
  98,
);
