__d(
  "useWAWebMissedCallCount",
  [
    "WAWebChatCollection",
    "WAWebMissedCallCountUtils",
    "WAWebNotificationController",
    "WAWebUserPrefsVoip",
    "WAWebVoipCallsTabPanelManager",
    "react",
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
      var e = c(d),
        t = e[0],
        n = e[1],
        a = u(function () {
          n(d());
        }, []),
        i = r("useWAWebDebouncedCallback")(a, 500, { maxWait: 1e3 });
      (o("useWAWebListener").useListener(
        r("WAWebVoipCallsTabPanelManager"),
        "onWriteCallLogMessage",
        a,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove change:msgsLength",
          i,
        ));
      var l = u(
        function () {
          (o("WAWebUserPrefsVoip").setCallsTabLastSeenTimestamp(),
            i.cancel(),
            n(0),
            o(
              "WAWebNotificationController",
            ).WANotificationController.map.forEach(function (e, t) {
              t.startsWith("missed_call:") &&
                o(
                  "WAWebNotificationController",
                ).WANotificationController.closeOrCancelNotification(t);
            }));
        },
        [i],
      );
      return { missedCallCount: t, clearMissedCallCount: l };
    }
    l.useWAWebMissedCallCount = m;
  },
  98,
);
