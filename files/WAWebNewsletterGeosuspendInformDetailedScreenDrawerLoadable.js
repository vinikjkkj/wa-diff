__d(
  "WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable",
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
          "WAWebNewsletterGeosuspendInformDetailedScreenDrawer.react",
        )
          .__setRef(
            "WAWebNewsletterGeosuspendInformDetailedScreenDrawerLoadable",
          )
          .load();
        return e.NewsletterGeosuspendInformDetailedScreenDrawer;
      }, "NewsletterGeosuspendInformDetailedScreenDrawer"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.NewsletterGeosuspendInformDetailedScreenDrawerLoadable = c;
  },
  98,
);
