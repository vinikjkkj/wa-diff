__d(
  "WAWebWamTimeSpentLogger",
  [
    "WAWebCmd",
    "WAWebPathfinderLogger",
    "WAWebTimeSpentLoggingBitArray",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebTimeSpentLoggingSession",
    "WAWebUseIdleSessionRotation",
    "WAWebUserActivityWamEvent",
    "WAWebUserPrefsKeys",
    "WAWebWamTimeSpentArray",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = -5,
      m = [
        { source: window, name: "focus" },
        { source: document, name: "wheel" },
        { source: document, name: "keydown" },
        { source: document, name: "mouseover" },
        { source: document, name: "mousemove" },
        { source: document, name: "click" },
        { source: document, name: "scroll" },
      ],
      p = function (t) {
        var e = new (o("WAWebUserActivityWamEvent").UserActivityWamEvent)({
          userActivitySessionId: t.sessionId,
          userActivityStartTime: t.startTime,
          userActivityBitmapLen: t.bitmapLen,
          userActivityBitmapLow: t.bitmap[0],
          userActivitySessionSeq: t.sessionSeq,
          userActivitySessionCum: t.sessionCum,
        });
        (t.bitmapLen > 32 && (e.userActivityBitmapHigh = t.bitmap[1]),
          e.commit());
      };
    function _() {
      var e = o("react-compiler-runtime").c(9),
        t = r("useLazyRef")(C),
        n = c(-1),
        a = c(-1),
        i = r("useLazyRef")(y),
        l = r("useLazyRef")(
          o("WAWebTimeSpentLoggingSession").createTimeSpentArray,
        ),
        s = function (r) {
          var e = i.current,
            o = l.current;
          if (!(!e && !o)) {
            if (r instanceof MouseEvent) {
              if (
                r.pageX === n.current &&
                r.pageY === a.current &&
                r.type !== "click"
              )
                return;
              ((n.current = r.pageX), (a.current = r.pageY));
            }
            var s = b(t.current);
            s != null &&
              ((t.current = s.now),
              s.shouldUpdateArrays &&
                (e == null || e.update(t.current),
                o == null || o.update(t.current)));
          }
        },
        d;
      e[0] !== l || e[1] !== i
        ? ((d = function () {
            (i.current && (i.current.ship(h), (i.current = null)),
              l.current && (l.current.ship(g), (i.current = null)),
              o(
                "WAWebTimeSpentLoggingNavigation",
              ).setPendingBackgroundNavigation());
          }),
          (e[0] = l),
          (e[1] = i),
          (e[2] = d))
        : (d = e[2]);
      var _ = d,
        v,
        S;
      (e[3] !== i
        ? ((v = function () {
            return (
              o("WAWebTimeSpentLoggingBitArray").flushBitarrays(
                o("WAWebUserPrefsKeys").KEYS.USER_ACTIVITY_TIME_SPENT_EVENT,
                p,
              ),
              function () {
                i.current && (i.current.ship(), (i.current = null));
              }
            );
          }),
          (S = [i]),
          (e[3] = i),
          (e[4] = v),
          (e[5] = S))
        : ((v = e[4]), (S = e[5])),
        u(v, S));
      var R, L;
      return (
        e[6] !== l
          ? ((R = function () {
              return (
                o("WAWebTimeSpentLoggingBitArray").flushBitarrays(
                  o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT,
                  o("WAWebTimeSpentLoggingBitArray").postTsBitArrayEvent,
                ),
                function () {
                  l.current && (l.current.ship(), (l.current = null));
                }
              );
            }),
            (L = [l]),
            (e[6] = l),
            (e[7] = R),
            (e[8] = L))
          : ((R = e[7]), (L = e[8])),
        u(R, L),
        o("WAWebUseIdleSessionRotation").useIdleSessionRotation(
          o("WAWebPathfinderLogger").resetPathfinderSessionState,
        ),
        o("useWAWebListener").useListener(window, "beforeunload", _),
        o("useWAWebListener").useListener(
          window,
          "blur",
          o("WAWebTimeSpentLoggingNavigation").logTsBackgroundNavigation,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "logout_from_bridge",
          f,
        ),
        o("useWAWebListener").useListener(
          window,
          "focus",
          o("WAWebTimeSpentLoggingNavigation").logTsForegroundNavigation,
        ),
        o("useWAWebListener").useListeners(
          m.map(function (e) {
            var t = e.name,
              n = e.source;
            return {
              source: n,
              eventOrEvents: t,
              callback: s,
              opts: { passive: !0, capture: !0 },
            };
          }),
        ),
        null
      );
    }
    function f() {
      o("WAWebTimeSpentLoggingNavigation").logTsBackgroundNavigation();
    }
    function g(e) {
      o("WAWebTimeSpentLoggingBitArray").stashBitarrayData(
        o("WAWebTimeSpentLoggingSession").preprocessTsArrayData(e),
        o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT,
      );
    }
    function h(e) {
      o("WAWebTimeSpentLoggingBitArray").stashBitarrayData(
        e,
        o("WAWebUserPrefsKeys").KEYS.USER_ACTIVITY_TIME_SPENT_EVENT,
      );
    }
    function y() {
      return new (r("WAWebWamTimeSpentArray"))({ loggingCallback: p });
    }
    function C() {
      return Date.now();
    }
    function b(e) {
      var t = Date.now(),
        n = t - e;
      return n > 0
        ? { now: t, shouldUpdateArrays: !0 }
        : n < d
          ? { now: t, shouldUpdateArrays: !1 }
          : null;
    }
    l.default = _;
  },
  98,
);
