__d(
  "WAPhoneFindCC",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^(1|2[07]|3[0-469]|4[013-9]|5[1-8]|6[0-6]|7|8[1246]|9[0-58])/;
    function l(e) {
      return s(e);
    }
    function s(t) {
      var n = t.match(e);
      return n ? n[0] : t.length >= 3 ? t.substring(0, 3) : t;
    }
    function u(e) {
      var t = e.match(/\d+/g);
      return t != null ? t.join("") : "";
    }
    ((i.phoneCC = l), (i.findCC = s), (i.extractDigits = u));
  },
  66,
);
