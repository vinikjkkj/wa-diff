__d(
  "useWebBloksCollectionStopPropagation",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e
        ? ((n = function (n) {
            var t = e.current;
            if (t != null) {
              var r = t.scrollTop === 0,
                o = t.scrollHeight - t.scrollTop === t.clientHeight;
              !r && !o && n.stopPropagation();
            }
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = n,
        a;
      return (
        t[2] !== r
          ? ((a = { onTouchStart: r, onTouchMove: r, onTouchEnd: r }),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    l.default = u;
  },
  98,
);
