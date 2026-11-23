__d(
  "WAWebFetchMissingAiFilterBotProfiles",
  ["JSResourceForInteraction", "WALogger", "WATimeUtils", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("JSResourceForInteraction")(
        "WAWebFetchMissingAiFilterBotProfilesJob",
      ).__setRef("WAWebFetchMissingAiFilterBotProfiles"),
      c = 1e4,
      d = 3e4,
      m = 3,
      p = 0,
      _ = 0,
      f = null,
      g = 0,
      h = 0,
      y = new Set();
    function C(t) {
      var n = h > 0;
      ((h = t),
        n !== h > 0 &&
          y.forEach(function (t) {
            try {
              t();
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] AI filter missing profile fetch subscriber failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("ai-filter-missing-profile-fetch-subscriber-failed", {
                  sampling: 0.01,
                });
            }
          }));
    }
    function b() {
      (p++,
        _++,
        (f = o("WATimeUtils").monotonicTime()),
        (g = d * Math.pow(2, p - 1)));
    }
    function v() {
      return (
        p >= m || (f != null && o("WATimeUtils").monotonicTimeSince(f) < g)
      );
    }
    async function S() {
      if (!v()) {
        var e = _;
        C(h + 1);
        var t = !1,
          n = function () {
            t || ((t = !0), C(h - 1));
          },
          a = window.setTimeout(n, c);
        try {
          var i = await u.load(),
            l = i.fetchMissingAiFilterBotProfiles;
          (await l(), _ === e && (p = 0));
        } catch (t) {
          (_ === e && b(),
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] AI filter missing profile fetch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("ai-filter-missing-profile-fetch-failed", {
                sampling: 0.01,
              }));
        } finally {
          (window.clearTimeout(a), n());
        }
      }
    }
    function R() {
      return h > 0;
    }
    function L(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    ((l.FAILURE_BACKOFF_BASE_MS = d),
      (l.MAX_FAILED_RUNS = m),
      (l.recordFailedMissingAiFilterBotProfileFetchRun = b),
      (l.isMissingAiFilterBotProfileFetchBackedOff = v),
      (l.maybeFetchMissingAiFilterBotProfiles = S),
      (l.isMissingAiFilterBotProfileFetchPending = R),
      (l.subscribeToMissingAiFilterBotProfileFetch = L));
  },
  98,
);
