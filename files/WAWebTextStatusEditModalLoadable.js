__d(
  "WAWebTextStatusEditModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebAboutEditModal.react",
          )
            .__setRef("WAWebTextStatusEditModalLoadable")
            .load();
          return e;
        }),
        "AboutEditModal",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
            error: !!t.error,
          });
        },
      });
    l.TextStatusEditModalLoadable = c;
  },
  98,
);
