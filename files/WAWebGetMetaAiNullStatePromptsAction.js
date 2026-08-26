__d(
  "WAWebGetMetaAiNullStatePromptsAction",
  ["WALogger", "WAWebGetMetaAiNullStatePromptsJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getMetaAiNullStatePromptsAction] Start",
              ])),
          );
          var n = yield o(
            "WAWebGetMetaAiNullStatePromptsJob",
          ).getMetaAiNullStatePrompts(t, u);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot][getMetaAiNullStatePromptsAction] End",
                ])),
            ),
            n.map(function (e) {
              return { display: e.suggestion, query: e.query };
            })
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.getMetaAiNullStatePromptsAction = c;
  },
  98,
);
