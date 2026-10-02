__d(
  "EBPrewarmMinosWasm",
  ["EBGetMinosWasm", "FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      o("EBGetMinosWasm")
        .getMinosWasm()
        .catch(function (t) {
          r("FBLogger")("wmi")
            .catching(r("getErrorSafe")(t))
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to prewarm minos wasm",
                ])),
            );
        });
    }
    l.prewarmMinosWasm = s;
  },
  98,
);
