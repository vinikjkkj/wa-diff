__d(
  "adsCreativeGenerativeAssetTextOverlaySpecAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "ApiAdCreativeGenerativeAssetTextFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          action_metadata: n.basicFieldAccessorFactory(e, t, "action_metadata"),
          enroll_status: n.basicFieldAccessorFactory(e, t, "enroll_status"),
          font_name: n.basicFieldAccessorFactory(e, t, "font_name"),
          font_style: n.basicFieldAccessorFactory(e, t, "font_style"),
          texts: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.texts;
            },
            [].concat(t, ["texts"]),
            Object.values(r("ApiAdCreativeGenerativeAssetTextFields")),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
