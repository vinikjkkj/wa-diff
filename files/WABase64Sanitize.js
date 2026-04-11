__d(
  "WABase64Sanitize",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (t == null) return null;
      var n = t.replace(/\s+$/, "");
      return (
        t !== n &&
          Math.random() < 1e-5 &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "base64 sanitized due to extra whitespace",
                ])),
            )
            .sendLogs("media-key-sanitize"),
        n
      );
    }
    l.default = s;
  },
  98,
);
