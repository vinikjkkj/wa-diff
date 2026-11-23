__d(
  "adsMessengerDataModelAddCTA",
  [
    "invariant",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetArrayOfGenericElements",
    "adsMessengerDataModelGetCTAs",
    "adsMessengerDataModelGetGenericElement",
    "adsMessengerDataModelGetMediaFormat",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = r("adsMessengerDataModelGetMediaFormat")(e),
        n = r("adsMessengerDataModelGetCTAs")(e) || [];
      n.push(null);
      var o = null,
        a = r("adsMessengerDataModelGetArrayOfGenericElements")(e) || {},
        i = null;
      switch (t) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          ((i = a.map(function (t, o) {
            var a = r("adsMessengerDataModelGetGenericElement")(e, o) || {
              buttons: [],
            };
            return ((a.buttons = n), a);
          })),
            (o = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENTS));
          var l = r("adsMessengerDataModelClone")(e);
          return (r("setByPath")(l, o, i), l);
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          o = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
            .ELEMENT_BUTTONS;
          var s = r("adsMessengerDataModelClone")(e);
          return (r("setByPath")(s, o, n), s);
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
