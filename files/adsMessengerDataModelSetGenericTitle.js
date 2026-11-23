__d(
  "adsMessengerDataModelSetGenericTitle",
  [
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetArrayOfGenericElements",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = 0);
      var o = t.getValue(),
        a = r("adsMessengerDataModelGetArrayOfGenericElements")(e) || {};
      if (n == null || n > a.length || a[n] == null) return e;
      a[n].title = o;
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
