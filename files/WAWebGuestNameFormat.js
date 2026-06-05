__d(
  "WAWebGuestNameFormat",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return t
        ? s._(/*BTDS*/ "{name} (Guest)", [s._param("name", e.toString())])
        : e;
    }
    l.maybeGetNameWithGuestLabel = e;
  },
  226,
);
