__d(
  "WAWebProfileDrawerLoadableRequireBundle",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")("WAWebProfileDrawer.react")
          .__setRef("WAWebProfileDrawerLoadableRequireBundle")
          .load();
        return e;
      }),
      "ProfileDrawer",
    );
    l.requireBundle = e;
  },
  98,
);
