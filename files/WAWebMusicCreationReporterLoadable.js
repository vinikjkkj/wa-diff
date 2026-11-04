__d(
  "WAWebMusicCreationReporterLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMusicCreationReporter",
          )
            .__setRef("WAWebMusicCreationReporterLoadable")
            .load();
          return e.reportMusicCreation;
        }),
        "MusicCreationReporter",
      ),
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield e();
          return t.apply(void 0, arguments);
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.reportMusicCreationLoadable = s;
  },
  98,
);
