__d(
  "WAWebGetMetaAiNullStatePromptsAction",
  ["WALogger", "WAWebGetMetaAiNullStatePromptsJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "LANDING_PAGE",
      c = null;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot][getMetaAiNullStatePromptsAction] Start",
              ])),
          );
          var n = yield o(
            "WAWebGetMetaAiNullStatePromptsJob",
          ).getMetaAiNullStatePrompts(t, u, c);
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
        m.apply(this, arguments)
      );
    }
    l.getMetaAiNullStatePromptsAction = d;
  },
  98,
);
