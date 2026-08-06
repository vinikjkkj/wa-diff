__d(
  "WAWebTimeSlicedRunner",
  ["Promise", "WATimeUtils", "WAWebReleaseToEventLoop"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 5;
    function u(t, r, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var i = a == null ? void 0 : a.signal,
          l = t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"]();
        function u() {
          l.return == null || l.return();
        }
        function c() {
          if ((i == null ? void 0 : i.aborted) === !0) {
            (u(), e());
            return;
          }
          try {
            for (
              var t = o("WATimeUtils").monotonicTime();
              o("WATimeUtils").monotonicTimeSince(t) < s;
            ) {
              var a = l.next();
              if (a.done === !0) {
                e();
                return;
              }
              if (r(a.value) === !1) {
                (u(), e());
                return;
              }
            }
          } catch (e) {
            (u(), n(e));
            return;
          }
          o("WAWebReleaseToEventLoop").releaseToEventLoop().then(c, d);
        }
        function d(e) {
          (u(), n(e));
        }
        o("WAWebReleaseToEventLoop").releaseToEventLoop().then(c, d);
      });
    }
    l.runTimeSliced = u;
  },
  98,
);
