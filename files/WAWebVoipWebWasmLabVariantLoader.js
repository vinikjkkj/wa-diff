__d(
  "WAWebVoipWebWasmLabVariantLoader",
  ["asyncToGeneratorRuntime", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")(
        "WAWebVoipWebWasmLoader_ProdLab_internal",
      ).__setRef("WAWebVoipWebWasmLabVariantLoader"),
      s = r("requireDeferred")(
        "WAWebVoipWebWasmLoader_ProdLabvideo_internal",
      ).__setRef("WAWebVoipWebWasmLabVariantLoader");
    function u(t) {
      switch (t) {
        case "prod-lab":
          return e;
        case "prod-labvideo":
          return s;
        default:
          throw new Error("Unsupported VoIP WASM lab variant: " + String(t));
      }
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = u(e),
            r = yield n.load();
          return t == null ? r() : r(t);
        })),
        d.apply(this, arguments)
      );
    }
    l.tryLoadLabVariant = c;
  },
  98,
);
