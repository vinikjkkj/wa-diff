__d(
  "WAWebStartupResourcesPrefetchBeforeUpdatePrompt",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2 * o("WATimeUtils").MINUTE_MILLISECONDS,
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebStartupResourcesPrefetch",
          )
            .__setRef("WAWebStartupResourcesPrefetchBeforeUpdatePrompt")
            .load();
          return e.prefetchStartupResources;
        }),
        "WAWebStartupResourcesPrefetch",
      ),
      c = f();
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield (e || (e = n("Promise"))).race([
            p(),
            o("WAPromiseDelays").delayMs(s),
          ]);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t = yield u();
            c = (e = yield t(c)) != null ? e : c;
          } catch (e) {}
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      var e = Number(o("WAWebBuildConstants").VERSION_TERTIARY);
      return e > 0 ? e : null;
    }
    l.prefetchStartupResourcesBeforeUpdatePrompt = d;
  },
  98,
);
