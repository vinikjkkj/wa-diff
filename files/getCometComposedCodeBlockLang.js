__d(
  "getCometComposedCodeBlockLang",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return null;
      try {
        var t = JSON.parse(e);
        return typeof t.lang == "string" ? t.lang : null;
      } catch (e) {
        return null;
      }
    }
    i.default = e;
  },
  66,
);
