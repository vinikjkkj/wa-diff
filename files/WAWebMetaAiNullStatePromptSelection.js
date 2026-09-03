__d(
  "WAWebMetaAiNullStatePromptSelection",
  ["WACyrb53Hash"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 9;
    function s(e, t, n) {
      return e
        .map(function (e) {
          return { prompt: e, key: r("WACyrb53Hash")(e.query, n) };
        })
        .sort(function (e, t) {
          return e.key - t.key;
        })
        .slice(0, t)
        .map(function (e) {
          return e.prompt;
        });
    }
    ((l.NULL_STATE_PROMPT_DISPLAY_COUNT = e), (l.drawNullStatePrompts = s));
  },
  98,
);
