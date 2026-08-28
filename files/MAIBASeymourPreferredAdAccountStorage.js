__d(
  "MAIBASeymourPreferredAdAccountStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_seymour_preferred_ad_account";
    function u() {
      var t = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (t == null) return null;
      var n = t.getItem(s);
      return n == null || n.length === 0 ? null : n;
    }
    function c(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorage();
      n != null && (e || (e = r("WebStorage"))).setItemGuarded(n, s, t);
    }
    ((l.getStoredSeymourPreferredAdAccount = u),
      (l.storeSeymourPreferredAdAccount = c));
  },
  98,
);
