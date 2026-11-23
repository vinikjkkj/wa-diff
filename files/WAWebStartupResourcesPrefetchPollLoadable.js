__d(
  "WAWebStartupResourcesPrefetchPollLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable", "WAWebNoop", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")(
        "WAWebStartupResourcesPrefetchPoll",
      )
        .__setRef("WAWebStartupResourcesPrefetchPollLoadable")
        .load();
      return e.startStartupResourcesPrefetchPoll;
    }, "WAWebStartupResourcesPrefetchPoll");
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
