__d(
  "WAWebWrapperMessageDropdownMenuLoadable",
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
            "WAWebWrapperMessageDropdownMenu.react",
          )
            .__setRef("WAWebWrapperMessageDropdownMenuLoadable")
            .load();
          return e;
        }),
        "WrapperMessageDropdownMenu",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.WAWebWrapperMessageDropdownMenuLoadable = c));
  },
  98,
);
