__d(
  "WAWebWindowsMetaAiDiagnostics",
  ["WALogger", "WAWebWindowsGatingUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      if (
        !(
          !o("WAWebWindowsGatingUtils").isWindowsHybridEnabled() ||
          !r("gkx")("9092")
        )
      ) {
        if (t === "chat-lookup-failed" || t === "chat-open-failed") {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[windows-meta-ai] stage=",
                  "",
                ])),
              t,
            )
            .sendLogs("windows-meta-ai-open-failed");
          return;
        }
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[windows-meta-ai] stage=",
              "",
            ])),
          t,
        );
      }
    }
    l.logWindowsMetaAiStage = u;
  },
  98,
);
