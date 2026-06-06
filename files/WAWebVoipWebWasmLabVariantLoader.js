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
    async function u(t, n) {
      var r =
          t === "prod-lab"
            ? e
            : t === "prod-labvideo"
              ? s
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })(),
        o = await r.load();
      return n == null ? o() : o(n);
    }
    l.tryLoadLabVariant = u;
  },
  98,
);
