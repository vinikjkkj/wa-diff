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
    function _(e) {
      var t,
        n,
        r,
        o = c != null ? c : m();
      o != null &&
        ((c = babelHelpers.extends({}, o, {
          backupId: (t = e.backupId) != null ? t : o.backupId,
          ebDeviceId: (n = e.ebDeviceId) != null ? n : o.ebDeviceId,
          epochId: (r = e.epochId) != null ? r : o.epochId,
        })),
        d(c));
    }
    function f() {
      return (c == null && (c = m()), c);
    }
    function g() {
      ((c = null), d(null));
    }
    ((l.setLabyrinthDebugKeyMaterialCache = p),
      (l.updateLabyrinthDebugKeyMaterialCacheIds = _),
      (l.getLabyrinthDebugKeyMaterialCache = f),
      (l.clearLabyrinthDebugKeyMaterialCache = g));
  },
  98,
);
