__d(
  "WAWebFetchMissingAiFilterBotProfilesJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotProfilesRestoreStatus",
    "WAWebBotStaticProfiles",
    "WAWebChatCollection",
    "WAWebFetchMissingAiFilterBotProfiles",
    "WAWebResolveBotProfile",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 50,
      c = 3,
      d = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebFetchMissingAiFilterBotProfilesJob"),
      m = !1,
      p = null;
    function _() {
      if (m) return (s || (s = n("Promise"))).resolve();
      if (p == null) {
        if (
          o(
            "WAWebFetchMissingAiFilterBotProfiles",
          ).isMissingAiFilterBotProfileFetchBackedOff()
        )
          return (s || (s = n("Promise"))).resolve();
        p = f().finally(function () {
          p = null;
        });
      }
      return p;
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o(
              "WAWebBotProfilesRestoreStatus",
            ).waitForBotProfilesRestored();
            var e = v().slice(0, u);
            if (e.length === 0) return;
            var t = yield d.load(),
              n = t.fetchUnresolvedBotProfile;
            if (yield y(e, n)) {
              h();
              return;
            }
            m = !0;
          } catch (e) {
            h();
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      (o(
        "WAWebFetchMissingAiFilterBotProfiles",
      ).recordFailedMissingAiFilterBotProfileFetchRun(),
        b());
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = [].concat(e),
            o = !1,
            a = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = r.shift();
                  if (e != null) {
                    var i = yield (s || (s = n("Promise"))).allSettled([t(e)]),
                      l = i[0];
                    ((o = o || l.status === "rejected" || l.value === !1),
                      yield a());
                  }
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            yield (s || (s = n("Promise"))).all(
              Array.from({ length: Math.min(c, e.length) }, a),
            ),
            o
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] AI filter missing profile fetch failed",
            ])),
        )
        .sendLogs("ai-filter-missing-profile-fetch-failed", { sampling: 0.01 });
    }
    function v() {
      return o("WAWebChatCollection")
        .ChatCollection.getModelsArray()
        .map(function (e) {
          return e.id;
        })
        .filter(function (e) {
          return (
            e.isFbidBot() &&
            !o("WAWebBotStaticProfiles").isStaticProfile(e) &&
            o("WAWebResolveBotProfile").resolveBotSupportInput(e) == null
          );
        });
    }
    ((l.MAX_FETCHED_PROFILES = u),
      (l.MAX_CONCURRENT_FETCHES = c),
      (l.fetchMissingAiFilterBotProfiles = _));
  },
  98,
);
