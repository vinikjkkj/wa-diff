__d(
  "WAWebMusicChatsConsumptionRefresherLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMusicChatsConsumptionRefresher",
          )
            .__setRef("WAWebMusicChatsConsumptionRefresherLoadable")
            .load();
          return e.refreshMusicChatsConsumption;
        }),
        "MusicChatsConsumptionRefresher",
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
    l.refreshMusicChatsConsumptionLoadable = s;
  },
  98,
);
