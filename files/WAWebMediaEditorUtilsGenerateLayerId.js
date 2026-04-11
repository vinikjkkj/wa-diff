__d(
  "WAWebMediaEditorUtilsGenerateLayerId",
  ["WAWebNonEmptyString"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = Math.random().toString(36).substring(2, 10);
      return o("WAWebNonEmptyString").asNonEmptyString(e + "-" + t);
    }
    l.generateLayerId = e;
  },
  98,
);
