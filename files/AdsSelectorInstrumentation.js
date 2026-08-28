__d(
  "AdsSelectorInstrumentation",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [];
    function u(e) {
      s.push(e);
    }
    function c(e) {
      s = s.filter(function (t) {
        return t !== e;
      });
    }
    function d() {
      if (s.length === 0) return null;
      var t = (e || (e = r("performanceNow")))(),
        n = s.map(function (e) {
          return e.selectorCall(t);
        });
      return function (t) {
        var o = (e || (e = r("performanceNow")))();
        n.forEach(function (e) {
          return e && e(t, o);
        });
      };
    }
    ((l.inject = u), (l.removeInstrumentation = c), (l.onSelectorCall = d));
  },
  98,
);
