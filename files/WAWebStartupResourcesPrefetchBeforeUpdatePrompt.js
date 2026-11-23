__d(
  "WAWebStartupResourcesPrefetchBeforeUpdatePrompt",
  [
    "JSResourceForInteraction",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBuildConstants",
    "WAWebLazyLoadedRetriable",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2 * o("WATimeUtils").MINUTE_MILLISECONDS,
      s = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebStartupResourcesPrefetch",
        )
          .__setRef("WAWebStartupResourcesPrefetchBeforeUpdatePrompt")
          .load();
        return e.prefetchStartupResources;
      }, "WAWebStartupResourcesPrefetch"),
      u = m();
    async function c() {
      await Promise.race([d(), o("WAPromiseDelays").delayMs(e)]);
    }
    async function d() {
      try {
        var e,
          t = await s();
        u = (e = await t(u)) != null ? e : u;
      } catch (e) {}
    }
    function m() {
      var e = Number(o("WAWebBuildConstants").VERSION_TERTIARY);
      return e > 0 ? e : null;
    }
    l.prefetchStartupResourcesBeforeUpdatePrompt = c;
  },
  98,
);
