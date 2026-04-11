__d(
  "WAWebCountRenderingUtils",
  ["fbt", "WAWebL10N"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      if (e >= t) {
        var o = t - 1;
        return n === "missed_call"
          ? s._(/*BTDS*/ '_j{"*":"{maxCount}+"}', [
              s._param("maxCount", o.toString(), [0, o]),
            ])
          : s._(/*BTDS*/ '_j{"*":"{maxCount}+"}', [
              s._param("maxCount", o.toString(), [0, o]),
            ]);
      } else if (e > 0) return r("WAWebL10N").n(e);
      return null;
    }
    l.renderCount = e;
  },
  226,
);
