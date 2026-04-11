__d(
  "useWAWebEventFutureEvents",
  [
    "WAWebEventUtils",
    "WAWebFrontendMsgGetters",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(8),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["msgs"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useModelValues(e, n),
        i = a.msgs,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (t[1] = l))
        : (l = t[1]);
      var s = d(l),
        u = s[0],
        p = s[1],
        _ = r("useWAWebUnmountSignal")(),
        f;
      t[2] !== i || t[3] !== _.aborted
        ? ((f = function () {
            var e = m(i);
            _.aborted || p(e);
          }),
          (t[2] = i),
          (t[3] = _.aborted),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h;
      (t[5] !== g ? ((h = [g]), (t[5] = g), (t[6] = h)) : (h = t[6]), c(g, h));
      var y;
      return (
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = ["remove_msgs", "insert_msgs", "bulk_add", "change:last"]),
            (t[7] = y))
          : (y = t[7]),
        o("useWAWebListener").useListener(i, y, g),
        u
      );
    }
    l.useFutureEvents = p;
  },
  98,
);
