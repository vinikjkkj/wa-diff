__d(
  "adsCreativeBizAICapabilitiesAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "adsCreativeBizAICapabilityAccessorsFactory"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          allow_generated_pills: r(
            "adsCreativeBizAICapabilityAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.allow_generated_pills;
            },
            [].concat(t, ["allow_generated_pills"]),
          ),
          prompts: r("adsCreativeBizAICapabilityAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.prompts;
            },
            [].concat(t, ["prompts"]),
          ),
          skills: r("adsCreativeBizAICapabilityAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.skills;
            },
            [].concat(t, ["skills"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
