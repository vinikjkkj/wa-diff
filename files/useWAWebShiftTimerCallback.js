__d(
  "useWAWebShiftTimerCallback",
  ["WAShiftTimer", "react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useMemo;
    function m(e) {
      var t = r("useWAWebStableCallback")(e),
        n = d(
          function () {
            return new (o("WAShiftTimer").ShiftTimer)(t);
          },
          [t],
        );
      c(
        function () {
          return n.cancel;
        },
        [n],
      );
      var a = u(
        function (e, t) {
          e === void 0
            ? n.onOrBeforeRepaint()
            : t === void 0
              ? n.debounce(e)
              : n.debounceAndCap(e, t);
        },
        [n],
      );
      return a;
    }
    l.default = m;
  },
  98,
);
