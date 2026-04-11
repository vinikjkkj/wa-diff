__d(
  "WebBloksScriptPrinter",
  ["WebBloksScriptParser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        typeof e == "string" &&
        (e.startsWith("(") || e.startsWith(" (") || e.startsWith("	(")) &&
        e.endsWith(")")
      );
    }
    function s(e) {
      if (typeof e == "function") return "<function>";
      var t = Array.isArray(e) ? e : o("WebBloksScriptParser").parse(e);
      return u(0, t);
    }
    function u(e, t) {
      if (Array.isArray(t)) {
        var n = t.every(function (e) {
          return !Array.isArray(e);
        });
        if (n)
          return (
            "(" +
            t
              .map(function (e) {
                return u(0, e);
              })
              .join(", ") +
            ")"
          );
        var r = "(" + String(t[0].value);
        return (
          t.slice(1).forEach(function (t) {
            r += "\n" + "".padEnd(e + 2) + u(e + 2, t);
          }),
          (r += "\n" + "".padEnd(e) + ")"),
          r
        );
      }
      return typeof t == "object" && t != null
        ? t.type === "string"
          ? JSON.stringify(t.value)
          : String(t.value)
        : String(t);
    }
    ((l.looksLikeAScript = e), (l.prettyPrint = s));
  },
  98,
);
