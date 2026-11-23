__d(
  "adsMessengerDataModelSetPhoneNumber",
  [
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetPhoneNumber",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.getValue();
      if (n === r("adsMessengerDataModelGetPhoneNumber")(e)) return e;
      var o = r("adsMessengerDataModelClone")(e);
      return (r("setByPath")(o, r("AdsMessengerJSONPaths").PHONE_NUMBER, n), o);
    }
    l.default = e;
  },
  98,
);
