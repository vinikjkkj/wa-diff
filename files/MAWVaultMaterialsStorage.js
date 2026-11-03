__d(
  "MAWVaultMaterialsStorage",
  ["MAWVaultMaterials", "MWFBLogger", "Promise", "WebAsyncStorage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "mw_exchange_vm";
    function u() {
      var t = o("MAWVaultMaterials").generateNewVaultMaterials(),
        a = "newly-generated";
      return new (e || (e = n("Promise")))(function (e) {
        r("WebAsyncStorage").getOrSetItem(s, t, function (n, r) {
          if (n != null) {
            var i = o("MWFBLogger").MWLogger();
            if (n instanceof Error)
              throw i
                .catching(n)
                .mustfixThrow(
                  "Failed to store Vaulting Materials. %s",
                  n.toString(),
                );
            i.mustfix("Failed to store Vaulting Materials.");
          }
          (r !== null && ((t = r), (a = "storage")),
            e(o("MAWVaultMaterials").initializeVaultMaterials(t, a)));
        });
      });
    }
    function c() {
      return o("MAWVaultMaterials").hasVaultBeenSetup()
        ? (e || (e = n("Promise"))).resolve(
            o("MAWVaultMaterials").getVaultMaterials(),
          )
        : u();
    }
    l.setupVaultMaterials = c;
  },
  98,
);
