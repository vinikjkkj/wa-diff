__d(
  "WAWebLabyrinthDebugStateCache",
  ["WALogger", "WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "LabyrinthDebugKeyMaterialCache",
      c = null;
    function d(t) {
      return;
      try {
        t == null
          ? r("WAWebLocalStorage").removeItem(u)
          : r("WAWebLocalStorage").setItem(u, JSON.stringify(t));
      } catch (t) {
        var n, a;
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Debug][Labyrinth] LabyrinthDebugKeyMaterialCache localStorage persist failed",
            ])),
        );
      }
    }
    function m() {
      return null;
      var e;
      try {
        var t;
        if (
          t != null &&
          typeof t == "object" &&
          typeof t.epochAnonId == "string" &&
          typeof t.epochRootKey == "string" &&
          typeof t.mailboxRootKey == "string" &&
          typeof t.orfClientState == "string"
        )
          return t;
      } catch (e) {
        var n = e instanceof Error ? e.name : "unknown",
          a = e instanceof Error ? e.message : String(e);
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[Debug][Labyrinth] LabyrinthDebugKeyMaterialCache localStorage hydrate JSON.parse failed",
            ])),
        );
      }
    }
    function p(e) {
      ((c = e), d(e));
    }
    function _() {
      return (c == null && (c = m()), c);
    }
    function f() {
      ((c = null), d(null));
    }
    ((l.setLabyrinthDebugKeyMaterialCache = p),
      (l.getLabyrinthDebugKeyMaterialCache = _),
      (l.clearLabyrinthDebugKeyMaterialCache = f));
  },
  98,
);
