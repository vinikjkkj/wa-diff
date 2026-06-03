__d(
  "WAWebSuspendedGroupRedesignModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebSuspendedGroupRedesignModal.react",
          )
            .__setRef("WAWebSuspendedGroupRedesignModalLoadable")
            .load();
          return e;
        }),
        "SuspendedGroupRedesignModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.SuspendedGroupRedesignModalLoadable = c;
  },
  98,
);
