__d(
  "WAWebMediaInputEvents",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set();
    function u(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    function c(t) {
      for (var n of s)
        try {
          n(t);
        } catch (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "media input listener failed for ",
                  "",
                ])),
              t.type,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("media-input-listener-failed");
        }
    }
    ((l.addMediaInputListener = u), (l.emitMediaInputEvent = c));
  },
  98,
);
