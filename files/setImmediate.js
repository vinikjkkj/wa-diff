__d(
  "setImmediate",
  ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = function () {
          r("TimerStorage").unset(r("TimerStorage").IMMEDIATE, t);
          for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          Function.prototype.apply.call(e, this, o);
        };
      r("TimeSlice").copyGuardForWrapper(e, n);
      for (
        var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
        i < o;
        i++
      )
        a[i - 1] = arguments[i];
      return (
        (t = r("setImmediateAcrossTransitions").apply(void 0, [n].concat(a))),
        r("TimerStorage").set(r("TimerStorage").IMMEDIATE, t),
        t
      );
    }
    l.default = e;
  },
  98,
);
