__d(
  "AdsUssdCodeUtils",
  ["UssdCodesConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "tel:";
    function s(e) {
      var t = r("UssdCodesConfig.experimental").adAccountUSSDCodes.get(e);
      return t || [];
    }
    function u(t) {
      return e + t.replace(/#/g, "%23");
    }
    function c(e) {
      var t = s(e);
      return t.length > 0 ? u(t[0]) : null;
    }
    ((l.getAdAccountUSSDCodes = s), (l.getAdAccountDefaultUSSDCodeLink = c));
  },
  98,
);
