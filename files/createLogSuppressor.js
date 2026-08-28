__d(
  "createLogSuppressor",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {},
        n;
      return {
        throttler: function (r) {
          var n = Date.now();
          if (
            (t[r] || (t[r] = { count: 0, first: n, last: n, isThrottled: !1 }),
            t[r].count++,
            (t[r].last = n),
            !t[r].isThrottled)
          ) {
            var a = (t[r].last - t[r].first) / o("DateConsts").MS_PER_SEC,
              i = t[r].count / (a || 1),
              l = a > e.MIN_THROTTLE_PERIOD && i > e.MAX_EVENTS_PER_SECOND;
            if (l)
              return (
                (t[r].isThrottled = !0),
                { type: "begin-throttle", avgCallsPerSecond: Math.round(i) }
              );
          }
          return t[r].isThrottled
            ? { type: "throttled" }
            : { type: "not-throttled" };
        },
        unthrottler: {
          init: function () {
            n = window.setInterval(
              function () {
                var n = Date.now();
                Object.entries(t).forEach(function (r) {
                  var a = r[0],
                    i = r[1],
                    l = (n - i.last) / o("DateConsts").MS_PER_SEC,
                    s = (i.last - i.first) / o("DateConsts").MS_PER_SEC,
                    u = i.count / s,
                    c =
                      l > e.MIN_THROTTLE_PERIOD || u < e.MAX_EVENTS_PER_SECOND;
                  c && delete t[a];
                });
              },
              e.THROTTLE_RESET_PERIOD * o("DateConsts").MS_PER_SEC,
            );
          },
          destroy: function () {
            window.clearInterval(n);
          },
        },
      };
    }
    l.default = e;
  },
  98,
);
