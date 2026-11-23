__d(
  "WAWebFetchMissingAiFilterBotProfilesJob",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotProfilesRestoreStatus",
    "WAWebChatCollection",
    "WAWebFetchMissingAiFilterBotProfiles",
    "WAWebResolveBotProfile",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 50,
      u = 3,
      c = r("JSResourceForInteraction")(
        "WAWebFetchBotProfileOnChatAdd",
      ).__setRef("WAWebFetchMissingAiFilterBotProfilesJob"),
      d = new Set(),
      m = new Set(),
      p = null;
    function _() {
      if (d.size >= s) return Promise.resolve();
      if (p == null) {
        if (
          o(
            "WAWebFetchMissingAiFilterBotProfiles",
          ).isMissingAiFilterBotProfileFetchBackedOff()
        )
          return Promise.resolve();
        p = f().finally(function () {
          p = null;
        });
      }
      return p;
    }
    async function f() {
      try {
        await o("WAWebBotProfilesRestoreStatus").waitForBotProfilesRestored();
        var e = C()
          .filter(function (e) {
            return !d.has(e.toString());
          })
          .sort(function (e, t) {
            return Number(m.has(e.toString())) - Number(m.has(t.toString()));
          });
        if (e.length === 0) return;
        var t = await c.load(),
          n = t.fetchUnresolvedBotProfile,
          r = await h(e, s - d.size, n),
          a = r.failed,
          i = r.fetched,
          l = r.skipped;
        (i.forEach(function (e) {
          (d.add(e.toString()), m.delete(e.toString()));
        }),
          l.forEach(function (e) {
            return m.add(e.toString());
          }),
          a && g());
      } catch (e) {
        g();
      }
    }
    function g() {
      (o(
        "WAWebFetchMissingAiFilterBotProfiles",
      ).recordFailedMissingAiFilterBotProfileFetchRun(),
        y());
    }
    async function h(e, t, n) {
      var r = [].concat(e),
        o = [],
        a = [],
        i = 0,
        l = !1,
        s = async function () {
          if (!(i >= t)) {
            var e = r.shift();
            if (e != null) {
              i++;
              var u = await Promise.allSettled([n(e)]),
                c = u[0];
              (c.status === "fulfilled" && c.value === "fetched"
                ? o.push(e)
                : c.status === "fulfilled" && c.value === "skipped"
                  ? (a.push(e), i--)
                  : (l = !0),
                await s());
            }
          }
        };
      return (
        await Promise.all(Array.from({ length: Math.min(u, e.length) }, s)),
        { failed: l, fetched: o, skipped: a }
      );
    }
    function y() {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[bot] AI filter missing profile fetch failed",
            ])),
        )
        .sendLogs("ai-filter-missing-profile-fetch-failed", { sampling: 0.01 });
    }
    function C() {
      return o("WAWebChatCollection")
        .ChatCollection.getModelsArray()
        .map(function (e) {
          return e.id;
        })
        .filter(function (e) {
          return o("WAWebResolveBotProfile").isBotProfileMissing(e);
        });
    }
    ((l.MAX_FETCHED_PROFILES = s),
      (l.MAX_CONCURRENT_FETCHES = u),
      (l.fetchMissingAiFilterBotProfiles = _));
  },
  98,
);
