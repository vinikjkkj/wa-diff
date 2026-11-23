__d(
  "adsMessengerDataModelAddIceBreaker",
  [
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetIceBreakerPath",
    "adsMessengerDataModelGetIceBreakers",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetIceBreakers")(e) || [];
      if (t) {
        var n = { title: "" };
        t.push(n);
      }
      t = t.filter(function (e) {
        return !!e;
      });
      var o = r("adsMessengerDataModelGetIceBreakerPath")(e);
      if (!o) return e;
      var a = r("adsMessengerDataModelClone")(e);
      return (r("setByPath")(a, o, t), a);
    }
    l.default = e;
  },
  98,
);
