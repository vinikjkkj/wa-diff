__d(
  "WAWebResolveDashBadgeStatus",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t;
      return e.canPlayDash
        ? e.hasDebugOverride
          ? { kind: "OVERRIDDEN" }
          : (t = e.fetchStatus) != null
            ? t
            : { kind: "GATES_OPEN" }
        : { kind: "GATE_OFF" };
    }
    i.resolveDashBadgeStatus = e;
  },
  66,
);
