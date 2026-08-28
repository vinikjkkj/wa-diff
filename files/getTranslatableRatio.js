__d(
  "getTranslatableRatio",
  ["fbt", "intlNumUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return s._(/*BTDS*/ '_j{"*":{"*":"{Numerator}:{Denominator}"}}', [
        s._param("Numerator", o("intlNumUtils").formatNumber(e), [0, e]),
        s._param("Denominator", o("intlNumUtils").formatNumber(t), [0, t]),
      ]);
    }
    l.default = e;
  },
  226,
);
