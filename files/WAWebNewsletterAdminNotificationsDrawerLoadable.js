__d(
  "WAWebNewsletterAdminNotificationsDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebNewsletterAdminNotificationsDrawer.react",
          )
            .__setRef("WAWebNewsletterAdminNotificationsDrawerLoadable")
            .load();
          return e;
        }),
        "WAWebNewsletterAdminNotificationsDrawer",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.NewsletterAdminNotificationsDrawerLoadable = c;
  },
  98,
);
