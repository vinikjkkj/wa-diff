__d(
  "adsMessengerDataModelSelectImage",
  [
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetArrayOfGenericElements",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      if ((o === void 0 && (o = 0), !n)) return e;
      var a = r("adsMessengerDataModelGetArrayOfGenericElements")(e) || {};
      if (o == null || o > a.length || a[o] == null) return e;
      if (n.hash != null) a[o].image_hash = t + ":" + n.hash;
      else return e;
      var i = r("adsMessengerDataModelClone")(e);
      return (
        r("setByPath")(
          i,
          r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
            .ELEMENTS,
          a,
        ),
        i
      );
    }
    l.default = e;
  },
  98,
);
