__d(
  "adsMessengerDataModelGetArrayOfGenericElements",
  ["AdsMessengerJSONPaths", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
        .ELEMENTS;
      return r("getByPath")(e, t);
    }
    l.default = e;
  },
  98,
);
