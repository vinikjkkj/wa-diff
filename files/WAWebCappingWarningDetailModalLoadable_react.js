__d(
  "WAWebCappingWarningDetailModalLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebCappingWarningDetailModal.react",
          )
            .__setRef("WAWebCappingWarningDetailModalLoadable.react")
            .load();
          return e.CappingWarningDetailModal;
        }),
        "CappingWarningDetailModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.CappingWarningDetailModalLoadable = c;
  },
  98,
);
