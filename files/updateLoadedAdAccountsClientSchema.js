__d(
  "updateLoadedAdAccountsClientSchema",
  ["FBLogger", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      o("relay-runtime").commitLocalUpdate(e, function (e) {
        var n = e
          .getRoot()
          .getLinkedRecord("ad_account", { legacy_account_id: t });
        if (n != null) {
          var o,
            a =
              (o = e.getRoot().getLinkedRecords("loaded_ad_accounts")) != null
                ? o
                : [],
            i = a.some(function (e) {
              return (e == null ? void 0 : e.getDataID()) === n.getDataID();
            });
          if (i) return;
          (a.push(n), e.getRoot().setLinkedRecords(a, "loaded_ad_accounts"));
        } else
          r("FBLogger")("relay_ads_manager").warn(
            "ad account %s record not loaded",
            t,
          );
      });
    }
    l.default = e;
  },
  98,
);
