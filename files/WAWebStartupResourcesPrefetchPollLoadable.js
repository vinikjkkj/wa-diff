__d(
  "WAWebStartupResourcesPrefetchPollLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebStartupResourcesPrefetchPoll",
        )
          .__setRef("WAWebStartupResourcesPrefetchPollLoadable")
          .load();
        return e.startStartupResourcesPrefetchPoll;
      }),
      "WAWebStartupResourcesPrefetchPoll",
    );
    function s() {
      r("gkx")("27710") &&
        e()
          .then(function (e) {
            e();
          })
          .catch(r("WAWebNoop"));
    }
    l.startStartupResourcesPrefetchPoll = s;
  },
  98,
);
