__d(
  "WAWebWamTimeSpentLogger",
  [
    "WAWebCmd",
    "WAWebTimeSpentLoggingBitArray",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebTimeSpentLoggingSession",
    "WAWebUseUnifiedSession",
    "WAWebUserActivityWamEvent",
    "WAWebUserPrefsKeys",
    "WAWebWamTimeSpentArray",
    "react",
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
      var e,
        t = r("useLazyRef")(function () {
          return Date.now();
        }),
        n = c(-1),
        a = c(-1),
        i = r("useLazyRef")(function () {
          return new (r("WAWebWamTimeSpentArray"))({ loggingCallback: p });
        }),
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
            var s = Date.now(),
              u = s - t.current;
            u > 0
              ? ((t.current = s),
                e == null || e.update(t.current),
                o == null || o.update(t.current))
              : u < d && (t.current = s);
          }
        },
        _ = function () {
          (i.current &&
            (i.current.ship(function (e) {
              o("WAWebTimeSpentLoggingBitArray").stashBitarrayData(
                e,
                o("WAWebUserPrefsKeys").KEYS.USER_ACTIVITY_TIME_SPENT_EVENT,
              );
            }),
            (i.current = null)),
            l.current &&
              (l.current.ship(function (e) {
                o("WAWebTimeSpentLoggingBitArray").stashBitarrayData(
                  o("WAWebTimeSpentLoggingSession").preprocessTsArrayData(e),
                  o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT,
                );
              }),
              (i.current = null)),
            o(
              "WAWebTimeSpentLoggingNavigation",
            ).setPendingBackgroundNavigation());
        };
      return (
        u(function () {
          return (
            o("WAWebTimeSpentLoggingBitArray").flushBitarrays(
              o("WAWebUserPrefsKeys").KEYS.USER_ACTIVITY_TIME_SPENT_EVENT,
              p,
            ),
            function () {
              i.current && (i.current.ship(), (i.current = null));
            }
          );
        }, []),
        u(function () {
          return (
            o("WAWebTimeSpentLoggingBitArray").flushBitarrays(
              o("WAWebUserPrefsKeys").KEYS.TIME_SPENT_BITARRAY_EVENT,
              o("WAWebTimeSpentLoggingBitArray").postTsBitArrayEvent,
            ),
            function () {
              l.current && (l.current.ship(), (l.current = null));
            }
          );
        }, []),
        o("WAWebUseUnifiedSession").useUnifiedSession(),
        (e = o("useWAWebListener")).useListener(window, "beforeunload", _),
        e.useListener(
          window,
          "blur",
          o("WAWebTimeSpentLoggingNavigation").logTsBackgroundNavigation,
        ),
        e.useListener(o("WAWebCmd").Cmd, "logout_from_bridge", function () {
          o("WAWebTimeSpentLoggingNavigation").logTsBackgroundNavigation();
        }),
        e.useListener(
          window,
          "focus",
          o("WAWebTimeSpentLoggingNavigation").logTsForegroundNavigation,
        ),
        e.useListeners(
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
    l.default = _;
  },
  98,
);
