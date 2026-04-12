__d(
  "useWAWebEventFutureEvents",
  [
    "WAWebEventUtils",
    "WAWebFrontendMsgGetters",
    "react",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState;
    function m(e) {
      var t = e
        .reduce(function (e, t) {
          var n = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
          return (
            n != null &&
              n.isEventCanceled === !1 &&
              !o("WAWebEventUtils").shouldShowEventAsPassed(
                n.eventStartTime,
                n.eventEndTime,
              ) &&
              e.push(n),
            e
          );
        }, [])
        .sort(function (e, t) {
          return e.eventStartTime - t.eventStartTime;
        });
      return t;
    }
    function p(e) {
      var t = o("useWAWebModelValues").useModelValues(e, ["msgs"]),
        n = t.msgs,
        a = d([]),
        i = a[0],
        l = a[1],
        s = r("useWAWebUnmountSignal")(),
        p = u(
          function () {
            var e = m(n);
            s.aborted || l(e);
          },
          [n, s],
        );
      return (
        c(p, [p]),
        o("useWAWebListener").useListener(
          n,
          ["remove_msgs", "insert_msgs", "bulk_add", "change:last"],
          p,
        ),
        i
      );
    }
    l.useFutureEvents = p;
  },
  98,
);
