__d(
  "adsMessengerDataModelSetIceBreaker",
  [
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetIceBreakerPath",
    "getByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("adsMessengerDataModelGetIceBreakerPath")(e),
        a = r("adsMessengerDataModelClone")(e);
      if (o) {
        var i = r("getByPath")(e, o);
        (i && i.length > t && (i[t] = n), r("setByPath")(a, o, i));
      }
      return a;
    }
    l.default = e;
  },
  98,
);
