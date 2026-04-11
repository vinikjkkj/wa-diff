__d(
  "WAWebImageGeometry",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return typeof e != "number" || e < 0 || e !== e
        ? { width: t, height: t }
        : e > 1
          ? { width: t, height: Math.max(t / e, 1) }
          : { width: Math.max(t * e, 1), height: t };
    }
    function l(e, t, n) {
      var r = t != null ? t : n,
        o = e != null ? e : n;
      return (
        r > o
          ? r > n && ((o *= n / r), (r = n))
          : o > n && ((r *= n / o), (o = n)),
        { width: Math.max(r, 1), height: Math.max(o, 1) }
      );
    }
    ((i.aspectRatioScaled = e), (i.boundHeightWidth = l));
  },
  66,
);
