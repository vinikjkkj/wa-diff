__d(
  "WAWebTimeSpentLoggingSession",
  [
    "WALogger",
    "WAShiftTimer",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebClock",
    "WAWebTimeSpentLoggingBitArray",
    "WAWebTimeSpentLoggingExternal",
    "WAWebUnifiedSession",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebWamTimeSpentArray",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = Math.pow(2, 31) - 1,
      f = null,
      g = null,
      h = new (o("WAShiftTimer").ShiftTimer)(function () {
        f != null &&
          (r("WAWebUserPrefsStore").set(
            o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_SESSION,
            f,
          ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] persisted session",
              ])),
          ));
      });
    function y(e) {
      if ((e === void 0 && (e = !1), e)) {
        h.forceRunNow();
        return;
      }
      var t = 10;
      h.onOrBefore(t * 1e3);
    }
    function C() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_SESSION,
      );
      if (e == null || typeof e != "object") {
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[time-spent] no session to restore",
            ])),
        ),
          (f = null));
        return;
      }
      var t = e.cumulativeBitsSet,
        n = e.id,
        a = e.lastActivityTimestampMs,
        i = e.relativeTimestampMs,
        l = e.sequenceId,
        d = e.startTimestampMs,
        m = e.tsTimestampMs,
        p = e.unifiedSessionId;
      if (
        typeof n != "number" ||
        typeof d != "number" ||
        typeof a != "number" ||
        typeof t != "number" ||
        typeof l != "number" ||
        typeof i != "number" ||
        (typeof m != "number" && m != null) ||
        (typeof p != "string" && p != null)
      ) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[time-spent] malformed ts session: ",
              "",
            ])),
          JSON.stringify(e),
        ),
          (f = null));
        return;
      }
      ((f = {
        id: n,
        startTimestampMs: d,
        lastActivityTimestampMs: a,
        cumulativeBitsSet: t,
        sequenceId: l,
        relativeTimestampMs: i,
        tsTimestampMs: m != null ? m : null,
        unifiedSessionId: p != null ? p : null,
      }),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[time-spent] restored ts session: ",
              "",
            ])),
          JSON.stringify(f),
        ));
    }
    function b() {
      var e,
        t = o("WATimeUtils").unixTimeMs(),
        n = o("WAWebClock").Clock.getServerTimeMs(),
        r =
          (e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) !=
          null
            ? e
            : null;
      if (
        f == null ||
        (t - f.lastActivityTimestampMs >= S() &&
          !o("WAWebTimeSpentLoggingExternal").tsExternalEventsInProgress())
      ) {
        ((g = f),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[time-spent] initializing session",
              ])),
          ));
        var a = {
          id: Math.floor(Math.random() * _),
          startTimestampMs: t,
          lastActivityTimestampMs: t,
          cumulativeBitsSet: 0,
          sequenceId: -1,
          relativeTimestampMs: 0,
          tsTimestampMs: n,
          unifiedSessionId: r,
        };
        return ((f = a), y(!0), a);
      }
      return (
        (f.relativeTimestampMs = t - f.startTimestampMs),
        (f.tsTimestampMs = n),
        (f.unifiedSessionId = r),
        f
      );
    }
    function v() {
      ((b().lastActivityTimestampMs = o("WATimeUtils").unixTimeMs()), y());
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue("ts_session_duration_ms");
    }
    function R() {
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[time-spent] creating time spent array",
            ])),
        ),
        new (r("WAWebWamTimeSpentArray"))({
          getSessionData: function () {
            var e = b();
            return {
              relativeTimeMs: e.relativeTimestampMs,
              id: e.id.toString(),
            };
          },
          postUpdate: v,
          loggingCallback: function (t) {
            o("WAWebTimeSpentLoggingBitArray").stashAndFlushBitarray(
              L(t),
              o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT,
            );
          },
        })
      );
    }
    function L(e) {
      var t = b(),
        n = Number(e.sessionId);
      if (t.id !== n) {
        var r;
        if (g != null && ((r = g) == null ? void 0 : r.id) === n) t = g;
        else
          return (
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[time-spent] expired session data, no session match",
                ])),
            ),
            e
          );
      }
      return (
        (t.cumulativeBitsSet += e.sessionCum),
        t.sequenceId++,
        (e.sessionSeq = t.sequenceId),
        (e.sessionCum = t.cumulativeBitsSet),
        y(!0),
        e
      );
    }
    ((l.restoreTimeSpentSession = C),
      (l.getOrInitTimeSpentSession = b),
      (l.markTimeSpentActivity = v),
      (l.createTimeSpentArray = R),
      (l.preprocessTsArrayData = L));
  },
  98,
);
