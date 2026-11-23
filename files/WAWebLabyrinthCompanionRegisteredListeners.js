__d(
  "WAWebLabyrinthCompanionRegisteredListeners",
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
    function c() {
      for (var t of s)
        try {
          t();
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[labyrinth] companion registered listener threw",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("labyrinth-companion-registered-listener-threw");
        }
    }
    ((l.addLabyrinthCompanionRegisteredListener = u),
      (l.notifyLabyrinthCompanionRegistered = c));
  },
  98,
);
