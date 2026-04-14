__d(
  "setTimeoutAcrossTransitionsBlue",
  ["TimeSlice"],
  function (t, n, r, o, a, i, l) {
    var e = t.__fbNativeSetTimeout || t.setTimeout;
    function s(n, o) {
      for (
        var a = r("TimeSlice").guard(n, "setTimeout", {
            propagationType: r("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0,
          }),
          i = arguments.length,
          l = new Array(i > 2 ? i - 2 : 0),
          s = 2;
        s < i;
        s++
      )
        l[s - 2] = arguments[s];
      return Function.prototype.apply.call(e, t, [a, o].concat(l));
    }
    l.default = s;
  },
  98,
);
