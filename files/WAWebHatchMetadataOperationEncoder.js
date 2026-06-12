__d(
  "WAWebHatchMetadataOperationEncoder",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n =
          t.method === "init/fetch"
            ? { method: "init/fetch", params: {} }
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.method,
                );
              })(),
        r = { version: 1, type: "req", payload: n };
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-metadata: encoding req method=",
              "",
            ])),
          t.method,
        ),
        new TextEncoder().encode(JSON.stringify(r)).buffer
      );
    }
    l.encodeHatchRequest = s;
  },
  98,
);
