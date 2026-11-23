__d(
  "adsMessengerDataModelChangeFormat",
  [
    "AdsMessengerJSONMediaFormatType",
    "adsMessengerDataModelSetImageFormat",
    "adsMessengerDataModelSetTextFormat",
    "adsMessengerDataModelSetVideoFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (t) {
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          return r("adsMessengerDataModelSetTextFormat")(e);
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          return r("adsMessengerDataModelSetImageFormat")(e);
        case r("AdsMessengerJSONMediaFormatType").VIDEO:
          return r("adsMessengerDataModelSetVideoFormat")(e);
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
