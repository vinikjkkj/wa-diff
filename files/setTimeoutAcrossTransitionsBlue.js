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
          i = Function.prototype.apply,
          l = arguments.length,
          s = new Array(l > 2 ? l - 2 : 0),
          u = 2;
        u < l;
        u++
      )
        s[u - 2] = arguments[u];
      return i.call(e, t, [a, o].concat(s));
    }
    l.default = s;
  },
  98,
);
