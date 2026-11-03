__d(
  "WAWebComposeBoxExtensionCall",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      try {
        return t();
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[compose_box] extension hook failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("compose-box-extension-hook-failed"),
          n
        );
      }
    }
    l.callComposeBoxExtension = s;
  },
  98,
);
