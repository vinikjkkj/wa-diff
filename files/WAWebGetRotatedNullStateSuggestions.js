__d(
  "WAWebGetRotatedNullStateSuggestions",
  ["WAWebBotGating", "WAWebUserPrefsBot"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebBotGating").getMetaAISearchNullStateRowCount(),
        n = o("WAWebUserPrefsBot").getMetaAISearchNullStateIndex();
      o("WAWebUserPrefsBot").setMetaAISearchNullStateIndex(n + t);
      var r = n % e.length;
      return [].concat(e, e).slice(r, r + t);
    }
    l.getRotatedNullStateSuggestions = e;
  },
  98,
);
