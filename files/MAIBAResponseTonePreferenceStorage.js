__d(
  "MAIBAResponseTonePreferenceStorage",
  ["WebStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_response_tone_preference";
    function u() {
      var t = (e || (e = r("WebStorage"))).getLocalStorageForRead();
      if (t == null) return null;
      var n = t.getItem(s);
      return n === "primary" || n === "comparison" ? n : null;
    }
    function c(t) {
      var n = (e || (e = r("WebStorage"))).getLocalStorage();
      n != null && (e || (e = r("WebStorage"))).setItemGuarded(n, s, t);
    }
    ((l.getStoredResponseTonePreference = u),
      (l.setStoredResponseTonePreference = c));
  },
  98,
);
