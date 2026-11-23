__d(
  "adsMessengerDataModelSetCTAType",
  [
    "AdsMessengerJSONMediaFormatType",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetArrayOfGenericElements",
    "adsMessengerDataModelGetCTAs",
    "adsMessengerDataModelGetGenericElement",
    "adsMessengerDataModelGetMediaFormat",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a,
        i,
        l,
        s = r("adsMessengerDataModelGetCTAs")(e) || [],
        u = r("adsMessengerDataModelGetMediaFormat")(e),
        c = null,
        d = null,
        m = r("adsMessengerDataModelGetArrayOfGenericElements")(e) || {},
        p = null;
      switch (u) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          ((d = s[t] ? s[t].title : ""),
            (s[t] =
              n === "web_url"
                ? ((o = {}),
                  (o.type = "web_url"),
                  (o.url = ""),
                  (o.title = d),
                  o)
                : ((a = {}),
                  (a.type = "postback"),
                  (a.payload = ""),
                  (a.title = d),
                  a)),
            (p = m.map(function (t, n) {
              var o = r("adsMessengerDataModelGetGenericElement")(e, n);
              return o != null
                ? ((o.buttons = s), o)
                : { buttons: s, image_hash: "", title: "" };
            })),
            (c = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENTS));
          var _ = r("adsMessengerDataModelClone")(e);
          return (r("setByPath")(_, c, p), _);
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          ((d = s[t] ? s[t].title : ""),
            (s[t] =
              n === "web_url"
                ? ((i = {}),
                  (i.type = "web_url"),
                  (i.url = ""),
                  (i.title = d),
                  i)
                : ((l = {}),
                  (l.type = "postback"),
                  (l.payload = ""),
                  (l.title = d),
                  l)),
            (c = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENT_BUTTONS));
          var f = r("adsMessengerDataModelClone")(e);
          return (r("setByPath")(f, c, s), f);
        default:
          return e;
      }
    }
    l.default = e;
  },
  98,
);
