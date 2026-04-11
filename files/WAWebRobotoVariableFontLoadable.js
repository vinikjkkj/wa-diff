__d(
  "WAWebRobotoVariableFontLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")("WDSLoadRobotoVariableFont")
          .__setRef("WAWebRobotoVariableFontLoadable")
          .load();
        return e;
      }),
      "WDSLoadRobotoVariableFont",
    );
    l.requireRobotoVariableFont = e;
  },
  98,
);
