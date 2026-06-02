__d(
  "WAWebGetDynamicAIModesAction",
  ["WALogger", "WAWebGetDynamicAIModesJob"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[bot][getDynamicAIModesAction] Start",
          ])),
      );
      var t = await o("WAWebGetDynamicAIModesJob").getDynamicAIModes();
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[bot][getDynamicAIModesAction] End",
            ])),
        ),
        t
      );
    }
    l.getDynamicAIModesAction = u;
  },
  98,
);
