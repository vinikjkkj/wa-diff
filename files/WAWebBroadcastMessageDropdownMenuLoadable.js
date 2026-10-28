__d(
  "WAWebBroadcastMessageDropdownMenuLoadable",
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
            "WAWebBroadcastMessageDropdownMenu.react",
          )
            .__setRef("WAWebBroadcastMessageDropdownMenuLoadable")
            .load();
          return e;
        }),
        "BroadcastMessageDropdownMenu",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.WAWebBroadcastMessageDropdownMenuLoadable = c));
  },
  98,
);
