__d(
  "WAWebSharableEventInviteCoerceTimestampSeconds",
  [],
  function (t, n, r, o, a, i) {
    var e = 1e12,
      l = 1e8,
      s = 1e3;
    function u(t) {
      return t == null
        ? t
        : t >= e
          ? Math.floor(t / s)
          : t > 0 && t < l
            ? t * s
            : t;
    }
    i.default = u;
  },
  66,
);
