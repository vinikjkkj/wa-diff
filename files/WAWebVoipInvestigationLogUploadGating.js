__d(
  "WAWebVoipInvestigationLogUploadGating",
  ["WALogger", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      try {
        return r("justknobx")._("5297");
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: investigation log upload JK unavailable, using fallback=true: ",
                "",
              ])),
            String(t),
          ),
          !0
        );
      }
    }
    l.isInvestigationLogUploadEnabled = s;
  },
  98,
);
