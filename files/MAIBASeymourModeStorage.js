__d(
  "MAIBASeymourModeStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_seymour_mode_enabled";
    function u() {
      var t = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (t == null) return !1;
      var n = t.getItem(s);
      return n == null ? !1 : n === "true";
    }
    function c(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorage();
      n != null && (e || (e = r("WebStorage"))).setItemGuarded(n, s, String(t));
    }
    ((l.isSeymourModeStored = u), (l.storeSeymourMode = c));
  },
  98,
);
