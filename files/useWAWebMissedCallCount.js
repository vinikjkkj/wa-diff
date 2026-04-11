__d(
  "useWAWebMissedCallCount",
  [
    "WAWebChatCollection",
    "WAWebMissedCallCountUtils",
    "WAWebNotificationController",
    "WAWebUserPrefsVoip",
    "WAWebVoipCallsTabPanelManager",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d() {
      var e = 0;
      return (
        o("WAWebChatCollection").ChatCollection.forEach(function (t) {
          t.msgs &&
            t.msgs.length > 0 &&
            (e += o("WAWebMissedCallCountUtils").countMissedCalls(
              t.msgs.getModelsArray(),
            ));
        }),
        e
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(7),
        t = c(d),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a(d());
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i,
        s;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { maxWait: 1e3 }), (e[1] = s))
        : (s = e[1]);
      var u = r("useWAWebDebouncedCallback")(l, 500, s);
      (o("useWAWebListener").useListener(
        r("WAWebVoipCallsTabPanelManager"),
        "onWriteCallLogMessage",
        l,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove change:msgsLength",
          u,
        ));
      var m;
      e[2] !== u
        ? ((m = function () {
            (o("WAWebUserPrefsVoip").setCallsTabLastSeenTimestamp(),
              u.cancel(),
              a(0),
              o(
                "WAWebNotificationController",
              ).WANotificationController.map.forEach(p));
          }),
          (e[2] = u),
          (e[3] = m))
        : (m = e[3]);
      var _ = m,
        f;
      return (
        e[4] !== _ || e[5] !== n
          ? ((f = { missedCallCount: n, clearMissedCallCount: _ }),
            (e[4] = _),
            (e[5] = n),
            (e[6] = f))
          : (f = e[6]),
        f
      );
    }
    function p(e, t) {
      t.startsWith("missed_call:") &&
        o(
          "WAWebNotificationController",
        ).WANotificationController.closeOrCancelNotification(t);
    }
    l.useWAWebMissedCallCount = m;
  },
  98,
);
