__d(
  "adsMessengerDataModelGetSecondText",
  ["AdsMessengerJSONPaths", "adsMessengerDataModelIsTextWithQR", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("adsMessengerDataModelIsTextWithQR")(e)) {
        var t = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.SECOND_TEXT;
        return r("getByPath")(e, t);
      }
      return null;
    }
    l.default = e;
  },
  98,
);
