__d(
  "setTimeoutBlue",
  ["TimeSlice", "TimerStorage", "setTimeoutAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        o = function () {
          r("TimerStorage").unset(r("TimerStorage").TIMEOUT, n);
          for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++)
            o[a] = arguments[a];
          Function.prototype.apply.call(e, this, o);
        };
      r("TimeSlice").copyGuardForWrapper(e, o);
      for (
        var a = arguments.length, i = new Array(a > 2 ? a - 2 : 0), l = 2;
        l < a;
        l++
      )
        i[l - 2] = arguments[l];
      return (
        (n = r("setTimeoutAcrossTransitions").apply(void 0, [o, t].concat(i))),
        r("TimerStorage").set(r("TimerStorage").TIMEOUT, n),
        n
      );
    }
    l.default = e;
  },
  98,
);
