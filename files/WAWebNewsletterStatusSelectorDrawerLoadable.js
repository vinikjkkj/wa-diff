__d(
  "WAWebNewsletterStatusSelectorDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebNewsletterStatusSelectorDrawer.react",
        )
          .__setRef("WAWebNewsletterStatusSelectorDrawerLoadable")
          .load();
        return e;
      }, "NewsletterStatusSelectorDrawer"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.NewsletterStatusSelectorDrawerLoadable = c;
  },
  98,
);
