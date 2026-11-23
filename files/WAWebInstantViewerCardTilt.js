__d(
  "WAWebInstantViewerCardTilt",
  ["WAHashStringToNumber"],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 31;
    function u(t, n, r) {
      if (n === 0) return 0;
      var a =
          e +
          (o("WAHashStringToNumber").hashStringToNumber(t.id.toString()) % s) /
            10,
        i = (n % 2 === 1) !== r ? 1 : -1;
      return i * a;
    }
    l.getInstantViewerCardTiltDeg = u;
  },
  98,
);
