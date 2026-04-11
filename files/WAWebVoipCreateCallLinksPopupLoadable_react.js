__d(
  "WAWebVoipCreateCallLinksPopupLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
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
            "WAWebVoipCreateCallLinksPopup.react",
          )
            .__setRef("WAWebVoipCreateCallLinksPopupLoadable.react")
            .load();
          return e.WAWebVoipCreateCallLinksPopup;
        }),
        "WAWebVoipCreateCallLinksPopup",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.CDS,
            error: !!t.error,
          });
        },
      });
    l.WAWebVoipCreateCallLinksPopupLoadable = c;
  },
  98,
);
