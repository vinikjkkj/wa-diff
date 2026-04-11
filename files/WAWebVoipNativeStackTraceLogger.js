__d(
  "WAWebVoipNativeStackTraceLogger",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t, n) {
      try {
        if (
          typeof n == "object" &&
          n != null &&
          "excPtr" in n &&
          typeof n.excPtr == "number"
        ) {
          var r = t,
            a = r == null ? void 0 : r.getExceptionMessage;
          if (a != null) {
            var i = a(n.excPtr),
              l = i[0],
              m = i[1];
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WASM Crash - MAIN] Native C++ exception: ",
                  ": ",
                  "",
                ])),
              l,
              m,
            );
          } else
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WASM-MAIN] C++ exc ptr=",
                  " getExceptionMessage N/A",
                ])),
              String(n.excPtr),
            );
        } else
          n instanceof WebAssembly.RuntimeError &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WASM Crash - MAIN] WebAssembly.RuntimeError",
                  ])),
              )
              .catching(n);
        n != null &&
          typeof n == "object" &&
          "stack" in n &&
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WASM Crash - MAIN] JavaScript stack trace",
                ])),
            )
            .catching(n);
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WASM Crash - MAIN] Failed to log native stack trace",
              ])),
          )
          .catching(e);
      }
    }
    l.logNativeStackTrace = m;
  },
  98,
);
