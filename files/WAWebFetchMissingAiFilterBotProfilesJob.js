__d(
  "WAWebFetchMissingAiFilterBotProfilesJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotProfilesRestoreStatus",
    "WAWebBotStaticProfiles",
    "WAWebChatCollection",
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
      return m
        ? (s || (s = n("Promise"))).resolve()
        : (p == null &&
            (p = f().finally(function () {
              p = null;
            })),
          p);
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
            var e = b().slice(0, u);
            if (e.length === 0) return;
            var t = yield d.load(),
              n = t.fetchUnresolvedBotProfile;
            if (yield h(e, n)) {
              C();
              return;
            }
            m = !0;
          } catch (e) {
            C();
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        y.apply(this, arguments)
      );
    }
    function C() {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] AI filter missing profile fetch failed",
            ])),
        )
        .sendLogs("ai-filter-missing-profile-fetch-failed", { sampling: 0.01 });
    }
    function b() {
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
