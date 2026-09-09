__d(
  "WAWebNewsletterAdminProfileEditModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebNewsletterAdminProfileEditModal.react",
          )
            .__setRef("WAWebNewsletterAdminProfileEditModalLoadable")
            .load();
          return e;
        }),
        "WAWebNewsletterAdminProfileEditModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.Tower,
            error: !!t.error,
          });
        },
      });
    l.NewsletterAdminProfileEditModalLoadable = c;
  },
  98,
);
