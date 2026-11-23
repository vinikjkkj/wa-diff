__d(
  "adsMessengerDataModelGetIceBreaker",
  ["adsMessengerDataModelGetIceBreakerPath", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { title: null };
    function s(t, n) {
      var o = r("adsMessengerDataModelGetIceBreakerPath")(t);
      if (o) {
        var a = r("getByPath")(t, o);
        if (a && a.length > n) return a[n] || e;
      }
      return e;
    }
    l.default = s;
  },
  98,
);
