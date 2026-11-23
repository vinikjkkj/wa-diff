__d(
  "WAWebGetMetaAiNullStatePromptsAction",
  ["WALogger", "WAWebGetMetaAiNullStatePromptsJob"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null;
    async function c(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[bot][getMetaAiNullStatePromptsAction] Start",
          ])),
      );
      var n = await o(
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
          return { display: e.display, query: e.query };
        })
      );
    }
    l.getMetaAiNullStatePromptsAction = c;
  },
  98,
);
