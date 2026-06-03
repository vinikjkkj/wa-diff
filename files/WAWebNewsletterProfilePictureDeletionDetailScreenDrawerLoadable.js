__d(
  "WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable",
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
            "WAWebNewsletterProfilePictureDeletionDetailScreenDrawer.react",
          )
            .__setRef(
              "WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable",
            )
            .load();
          return e;
        }),
        "NewsletterProfilePictureDeletionDetailScreenDrawer",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebNewsletterProfilePictureDeletionDetailScreenDrawerLoadable = c;
  },
  98,
);
