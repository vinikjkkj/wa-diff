__d(
  "WAWebFetchMissingAiFilterBotProfiles",
  ["JSResourceForInteraction", "WALogger", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebFetchMissingAiFilterBotProfilesJob",
      ).__setRef("WAWebFetchMissingAiFilterBotProfiles");
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield s.load(),
              n = t.fetchMissingAiFilterBotProfiles;
            yield n();
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] AI filter missing profile fetch failed",
                  ])),
              )
              .sendLogs("ai-filter-missing-profile-fetch-failed", {
                sampling: 0.01,
              });
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.maybeFetchMissingAiFilterBotProfiles = u;
  },
  98,
);
