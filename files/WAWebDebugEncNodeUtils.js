__d(
  "WAWebDebugEncNodeUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {}
    var s = new Set(["fromMe", "id", "participant", "remoteJid"]);
    function u(e, t) {
      try {
        return t == null
          ? t
          : typeof t == "object" &&
              isFinite(t.byteLength) &&
              typeof t.byteLength == "number"
            ? "Bytes(" + t.byteLength + ")"
            : Array.isArray(t) ||
                (typeof t == "object" && t.toString() === "[object Object]")
              ? t
              : typeof t == "string" || t instanceof String
                ? s.has(e)
                  ? t
                  : "String(" + t.length + ")"
                : t;
      } catch (e) {
        return t;
      }
    }
    l.printEncNode = e;
  },
  98,
);
