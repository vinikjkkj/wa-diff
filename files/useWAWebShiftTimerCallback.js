__d(
  "useWAWebShiftTimerCallback",
  ["WAShiftTimer", "react", "react-compiler-runtime", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo;
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = r("useWAWebStableCallback")(e),
        a;
      t[0] !== n
        ? ((a = new (o("WAShiftTimer").ShiftTimer)(n)), (t[0] = n), (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== i.cancel
        ? ((l = function () {
            return i.cancel;
          }),
          (t[2] = i.cancel),
          (t[3] = l))
        : (l = t[3]);
      var s;
      (t[4] !== i ? ((s = [i]), (t[4] = i), (t[5] = s)) : (s = t[5]), c(l, s));
      var u;
      t[6] !== i
        ? ((u = function (t, n) {
            t === void 0
              ? i.onOrBeforeRepaint()
              : n === void 0
                ? i.debounce(t)
                : i.debounceAndCap(t, n);
          }),
          (t[6] = i),
          (t[7] = u))
        : (u = t[7]);
      var d = u;
      return d;
    }
    l.default = m;
  },
  98,
);
