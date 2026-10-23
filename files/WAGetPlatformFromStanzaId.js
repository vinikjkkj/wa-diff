__d(
  "WAGetPlatformFromStanzaId",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      try {
        if (t.startsWith("3EB0")) return "web";
        var n = 31,
          r = BigInt(n << 17),
          a = BigInt(0),
          i = BigInt(1 << 17),
          l = BigInt(t) & r;
        return l === a ? "web" : l === i ? "mobile" : "unknown";
      } catch (n) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to parse stanza id ",
                " for platform: ",
                "",
              ])),
            t,
            n,
          ),
          "error"
        );
      }
    }
    l.getPlatformFromStanzaId = s;
  },
  98,
);
