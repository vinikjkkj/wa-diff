__d(
  "adsMessengerDataModelSetCTATitle",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetArrayOfGenericElements",
    "adsMessengerDataModelGetCTAs",
    "adsMessengerDataModelGetGenericElement",
    "adsMessengerDataModelGetMediaFormat",
    "deleteByPath",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = n.getValue(),
        a = r("adsMessengerDataModelGetCTAs")(e) || [],
        i = r("adsMessengerDataModelGetMediaFormat")(e),
        l = null,
        s = r("adsMessengerDataModelGetArrayOfGenericElements")(e) || {},
        u = null;
      switch (i) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          (a[t]
            ? ((a[t].title = o),
              !o && (a[t].url == null || a[t].url == "") && (a[t] = null))
            : (a[t] = { type: "web_url", url: "", title: o }),
            (u = s.map(function (t, n) {
              var o,
                i =
                  (o = r("adsMessengerDataModelGetGenericElement")(e, n)) !=
                  null
                    ? o
                    : { buttons: null };
              return ((i.buttons = a), a.length || delete i.buttons, i);
            })),
            (l = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENTS));
          var c = r("adsMessengerDataModelClone")(e);
          return (r("setByPath")(c, l, u), c);
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          (a[t]
            ? ((a[t].title = o),
              !o && (a[t].url == null || a[t].url == "") && (a[t] = null))
            : (a[t] = { type: "web_url", url: "", title: o }),
            (l = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENT_BUTTONS));
          var d = r("adsMessengerDataModelClone")(e);
          return (
            a.length ? r("setByPath")(d, l, a) : r("deleteByPath")(d, l),
            d
          );
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
