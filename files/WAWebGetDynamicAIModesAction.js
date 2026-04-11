__d(
  "WAWebGetDynamicAIModesAction",
  ["WALogger", "WAWebGetDynamicAIModesJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getDynamicAIModesAction] Start",
              ])),
          );
          var t = yield o("WAWebGetDynamicAIModesJob").getDynamicAIModes();
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot][getDynamicAIModesAction] End",
                ])),
            ),
            t
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.getDynamicAIModesAction = u;
  },
  98,
);
