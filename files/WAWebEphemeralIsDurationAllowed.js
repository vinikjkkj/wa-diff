__d(
  "WAWebEphemeralIsDurationAllowed",
  [],
  function (t, n, r, o, a, i) {
    var e = [86400, 604800, 7776e3];
    function l(t) {
      return t < 0 ? !1 : t === 0 ? !0 : e.includes(t);
    }
    i.isEphemeralDurationAllowed = l;
  },
  66,
);
