__d(
  "adsMessengerDataModelRemoveIceBreaker",
  [
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetIceBreakerPath",
    "adsMessengerDataModelGetIceBreakers",
    "deleteByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsMessengerDataModelGetIceBreakers")(e) || [];
      (n && n.splice(t, 1),
        (n = n.filter(function (e) {
          return !!e;
        })));
      var o = r("adsMessengerDataModelGetIceBreakerPath")(e);
      if (!o) return e;
      var a = r("adsMessengerDataModelClone")(e);
      return (n.length ? r("setByPath")(a, o, n) : r("deleteByPath")(a, o), a);
    }
    l.default = e;
  },
  98,
);
