__d(
  "throttle",
  [
    "TimeSlice",
    "TimeSliceInteractionSV",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s(e, t, n, r("setTimeout"), !1);
    }
    Object.assign(e, {
      acrossTransitions: function (t, n, o) {
        return s(t, n, o, r("setTimeoutAcrossTransitions"), !1);
      },
      withBlocking: function (t, n, o) {
        return s(t, n, o, r("setTimeout"), !0);
      },
      acrossTransitionsWithBlocking: function (t, n, o) {
        return s(t, n, o, r("setTimeoutAcrossTransitions"), !0);
      },
    });
    function s(e, t, n, o, a) {
      var i = t == null ? 100 : t,
        l,
        s = null,
        u = 0,
        c = null,
        d = [],
        m = r("TimeSlice").guard(
          function () {
            if (((u = Date.now()), s)) {
              for (
                var t = function (t) {
                    e.apply(l, t);
                  }.bind(null, s),
                  n = d.length;
                --n >= 0;
              )
                t = d[n].bind(null, t);
              ((d = []), t(), (s = null), (c = o(m, i)));
            } else c = null;
          },
          "throttle_" + i + "_ms",
          {
            propagationType: r("TimeSlice").PropagationType.EXECUTION,
            registerCallStack: !0,
          },
        );
      return (
        (m.__SMmeta = e.__SMmeta),
        function () {
          r("TimeSliceInteractionSV").ref_counting_fix &&
            d.push(
              r("TimeSlice").getGuardedContinuation("throttleWithContinuation"),
            );
          for (var e = arguments.length, t = new Array(e), p = 0; p < e; p++)
            t[p] = arguments[p];
          ((s = t),
            (l = this),
            n !== void 0 && (l = n),
            (c === null || Date.now() - u > i) &&
              (a === !0 ? m() : (c = o(m, 0))));
        }
      );
    }
    var u = e;
    l.default = u;
  },
  98,
);
