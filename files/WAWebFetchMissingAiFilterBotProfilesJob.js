__d(
  "WAWebFetchMissingAiFilterBotProfilesJob",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBotProfilesRestoreStatus",
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
      m = new Set(),
      p = new Set(),
      _ = null;
    function f() {
      if (m.size >= u) return (s || (s = n("Promise"))).resolve();
      if (_ == null) {
        if (
          o(
            "WAWebFetchMissingAiFilterBotProfiles",
          ).isMissingAiFilterBotProfileFetchBackedOff()
        )
          return (s || (s = n("Promise"))).resolve();
        _ = g().finally(function () {
          _ = null;
        });
      }
      return _;
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o(
              "WAWebBotProfilesRestoreStatus",
            ).waitForBotProfilesRestored();
            var e = S()
              .filter(function (e) {
                return !m.has(e.toString());
              })
              .sort(function (e, t) {
                return (
                  Number(p.has(e.toString())) - Number(p.has(t.toString()))
                );
              });
            if (e.length === 0) return;
            var t = yield d.load(),
              n = t.fetchUnresolvedBotProfile,
              r = yield C(e, u - m.size, n),
              a = r.failed,
              i = r.fetched,
              l = r.skipped;
            (i.forEach(function (e) {
              (m.add(e.toString()), p.delete(e.toString()));
            }),
              l.forEach(function (e) {
                return p.add(e.toString());
              }),
              a && y());
          } catch (e) {
            y();
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      (o(
        "WAWebFetchMissingAiFilterBotProfiles",
      ).recordFailedMissingAiFilterBotProfileFetchRun(),
        v());
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var o = [].concat(e),
            a = [],
            i = [],
            l = 0,
            u = !1,
            d = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(l >= t)) {
                    var e = o.shift();
                    if (e != null) {
                      l++;
                      var c = yield (s || (s = n("Promise"))).allSettled([
                          r(e),
                        ]),
                        m = c[0];
                      (m.status === "fulfilled" && m.value === "fetched"
                        ? a.push(e)
                        : m.status === "fulfilled" && m.value === "skipped"
                          ? (i.push(e), l--)
                          : (u = !0),
                        yield d());
                    }
                  }
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            yield (s || (s = n("Promise"))).all(
              Array.from({ length: Math.min(c, e.length) }, d),
            ),
            { failed: u, fetched: a, skipped: i }
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] AI filter missing profile fetch failed",
            ])),
        )
        .sendLogs("ai-filter-missing-profile-fetch-failed", { sampling: 0.01 });
    }
    function S() {
      return o("WAWebChatCollection")
        .ChatCollection.getModelsArray()
        .map(function (e) {
          return e.id;
        })
        .filter(function (e) {
          return o("WAWebResolveBotProfile").isBotProfileMissing(e);
        });
    }
    ((l.MAX_FETCHED_PROFILES = u),
      (l.MAX_CONCURRENT_FETCHES = c),
      (l.fetchMissingAiFilterBotProfiles = f));
  },
  98,
);
