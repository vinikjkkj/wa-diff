__d(
  "WAWebVoipWebWasmLabVariantLoader",
  ["requireDeferred"],
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
    async function c(e, t) {
      var n = u(e),
        r = await n.load();
      return t == null ? r() : r(t);
    }
    l.tryLoadLabVariant = c;
  },
  98,
);
