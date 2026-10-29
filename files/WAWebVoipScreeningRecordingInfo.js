__d(
  "WAWebVoipScreeningRecordingInfo",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (t === "") return null;
      try {
        var n = JSON.parse(t);
        if (n == null || typeof n != "object") return null;
        var r = n.elapsedMs,
          a = n.maxScreeningDurationMs,
          i = n.screeningPromptFinished;
        return typeof r != "number" ||
          typeof a != "number" ||
          typeof i != "boolean"
          ? null
          : {
              elapsedMs: r,
              maxScreeningDurationMs: a,
              screeningPromptFinished: i,
            };
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: parseScreeningRecordingInfo: invalid json ",
                "",
              ])),
            String(t),
          ),
          null
        );
      }
    }
    l.parseScreeningRecordingInfo = s;
  },
  98,
);
