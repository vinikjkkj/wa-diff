__d(
  "adsMessengerDataModelRemoveCTA",
  [
    "invariant",
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetArrayOfGenericElements",
    "adsMessengerDataModelGetCTAs",
    "adsMessengerDataModelGetGenericElement",
    "adsMessengerDataModelGetMediaFormat",
    "deleteByPath",
    "getByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = r("getByPath")(
          e,
          r("AdsMessengerJSONPaths").MESSAGE.ATTACHMENT.PAYLOAD.TEMPLATE_TYPE,
        ),
        o = r("adsMessengerDataModelGetCTAs")(e) || [],
        a = r("adsMessengerDataModelGetMediaFormat")(e),
        i = null,
        l = r("adsMessengerDataModelGetArrayOfGenericElements")(e) || {},
        s = null;
      switch (a) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          (o.splice(t, 1),
            (s = l.map(function (t, n) {
              var a = r("adsMessengerDataModelGetGenericElement")(e, n) || {};
              return ((a.buttons = o), o.length || delete a.buttons, a);
            })),
            (i = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENTS));
          var u = r("adsMessengerDataModelClone")(e);
          return (r("setByPath")(u, i, s), u);
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          (o.splice(t, 1),
            (i = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENT_BUTTONS));
          var c = r("adsMessengerDataModelClone")(e);
          return (
            o.length ? r("setByPath")(c, i, o) : r("deleteByPath")(c, i),
            c
          );
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
