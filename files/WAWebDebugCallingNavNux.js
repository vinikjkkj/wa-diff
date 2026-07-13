__d(
  "WAWebDebugCallingNavNux",
  [
    "WAWebCurrentMoment",
    "WAWebUserPrefsStore",
    "WAWebVoipCallingNavNuxSequencing",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === void 0 && (e = 1);
      var t = o("WAWebCurrentMoment")
        .getCurrentMoment()
        .subtract(e * 24, "hours");
      return (
        r("WAWebUserPrefsStore").setUser(
          o("WAWebVoipCallingNavNuxSequencing").HEADER_NUX_DISMISSED_AT_KEY,
          String(t.valueOf()),
        ),
        t.toISOString()
      );
    }
    e.doc =
      "Pretend the header calling NUX was dismissed `daysAgo` days ago (default 1 = 24h ago \u2192 the Calls-tab nav NUX unlocks now; 0 = now \u2192 stays locked). Reload to apply.";
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
          o("WAWebVoipCallingNavNuxSequencing").HEADER_NUX_DISMISSED_AT_KEY,
        ),
        t = typeof e == "string" ? Number(e) : NaN,
        n = Number.isFinite(t)
          ? (o("WAWebCurrentMoment").getCurrentMoment().valueOf() - t) /
            (3600 * 1e3)
          : null;
      return {
        dismissedAtRaw: e,
        hoursElapsed: n,
        unlocked: o(
          "WAWebVoipCallingNavNuxSequencing",
        ).isCallsNavNuxUnlockedByHeader(),
      };
    }
    s.doc =
      "Show the stored header-dismissal timestamp, hours elapsed since, and whether the Calls-tab nav NUX is currently unlocked.";
    function u() {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebVoipCallingNavNuxSequencing").HEADER_NUX_DISMISSED_AT_KEY,
      );
    }
    u.doc =
      'Remove the stored header-dismissal timestamp (back to "header never dismissed" \u2014 the nav NUX stays locked).';
    var c = {
      callingNavNux: { clear: u, simulateHeaderDismissed: e, status: s },
    };
    l.default = c;
  },
  98,
);
