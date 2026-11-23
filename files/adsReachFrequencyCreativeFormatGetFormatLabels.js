__d(
  "adsReachFrequencyCreativeFormatGetFormatLabels",
  ["fbt", "intlList"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [s._(/*BTDS*/ ""), s._(/*BTDS*/ ""), s._(/*BTDS*/ "")];
    function u(t, n) {
      var o = t.map(function (e) {
        return e.label;
      });
      return (
        n || (o = e.concat(o)),
        r("intlList")(o, r("intlList").CONJUNCTIONS.NONE)
      );
    }
    l.default = u;
  },
  226,
);
