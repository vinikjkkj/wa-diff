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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n =
            t === "prod-lab"
              ? e
              : t === "prod-labvideo"
                ? s
                : t === "prod-nonlab"
                  ? null
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
          if (n == null) return null;
          var r = yield n.load();
          return r();
        })),
        c.apply(this, arguments)
      );
    }
    l.tryLoadLabVariant = u;
  },
  98,
);
