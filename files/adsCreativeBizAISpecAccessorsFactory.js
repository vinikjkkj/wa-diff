__d(
  "adsCreativeBizAISpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "ApiAdCreativeBizAIPillFields",
    "adsCreativeBizAICapabilitiesAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          capabilities: r("adsCreativeBizAICapabilitiesAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.capabilities;
            },
            [].concat(t, ["capabilities"]),
          ),
          pills: o(
            "AdsAdObjectsAccessorUtils",
          ).nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.pills;
            },
            [].concat(t, ["pills"]),
            Object.values(r("ApiAdCreativeBizAIPillFields")),
          ),
          pills_mbs_version: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "pills_mbs_version"),
        },
      );
    }
    l.default = e;
  },
  98,
);
