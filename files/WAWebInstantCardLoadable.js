__d(
  "WAWebInstantCardLoadable",
  [
    "JSResourceForInteraction",
    "WAWebInstantCardPlaceholder.react",
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
          var e = yield r("JSResourceForInteraction")("WAWebInstantCard.react")
            .__setRef("WAWebInstantCardLoadable")
            .load();
          return e;
        }),
        "InstantCard",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          var e = t.error,
            n = t.retry;
          return s.jsx(r("WAWebInstantCardPlaceholder.react"), {
            error: e,
            retry: n,
          });
        },
        renderLoadingImmediately: !0,
      });
    l.WAWebInstantCardLoadable = c;
  },
  98,
);
