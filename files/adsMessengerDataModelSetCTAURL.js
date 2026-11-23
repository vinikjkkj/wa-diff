__d(
  "adsMessengerDataModelSetCTAURL",
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
    "setByPath",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["buttons"];
    function u(t, n, o) {
      var a = o.getValue(),
        i = null,
        l = null,
        u = r("adsMessengerDataModelGetCTAs")(t) || [];
      n <= u.length || s(0, 2111);
      var c = r("adsMessengerDataModelGetMediaFormat")(t),
        d = null,
        m = r("adsMessengerDataModelGetArrayOfGenericElements")(t) || {},
        p = null;
      switch (c) {
        case r("AdsMessengerJSONMediaFormatType").IMAGE:
          var _ = u[n];
          if (
            ((i = _ ? _.type : "web_url"),
            (l = _ ? _.title : ""),
            i === "web_url")
          ) {
            var f;
            u[n] =
              ((f = {}), (f.type = "web_url"), (f.url = a), (f.title = l), f);
          } else {
            var g;
            u[n] =
              ((g = {}),
              (g.type = "postback"),
              (g.payload = a),
              (g.title = l),
              g);
          }
          ((p = m.map(function (n, o) {
            var a,
              i =
                (a = r("adsMessengerDataModelGetGenericElement")(t, o)) != null
                  ? a
                  : {};
            if (u.length) return babelHelpers.extends({}, i, { buttons: u });
            var l = i.buttons,
              s = babelHelpers.objectWithoutPropertiesLoose(i, e);
            return s;
          })),
            (d = r("AdsMessengerJSONPaths").IMAGE_FORMAT.MESSAGE.ATTACHMENT
              .PAYLOAD.ELEMENTS));
          var h = r("adsMessengerDataModelClone")(t);
          return (r("setByPath")(h, d, p), h);
        case r("AdsMessengerJSONMediaFormatType").TEXT:
          if (
            ((i = u[n] ? u[n].type : "web_url"),
            (l = u[n] ? u[n].title : ""),
            i === "web_url")
          ) {
            var y;
            u[n] =
              ((y = {}), (y.type = "web_url"), (y.url = a), (y.title = l), y);
          } else {
            var C;
            u[n] =
              ((C = {}),
              (C.type = "postback"),
              (C.payload = a),
              (C.title = l),
              C);
          }
          d = r("AdsMessengerJSONPaths").TEXT_FORMAT.MESSAGE.ATTACHMENT.PAYLOAD
            .ELEMENT_BUTTONS;
          var b = r("adsMessengerDataModelClone")(t);
          return (
            u.length ? r("setByPath")(b, d, u) : r("deleteByPath")(b, d),
            b
          );
        default:
          return t;
      }
    }
    l.default = u;
  },
  98,
);
