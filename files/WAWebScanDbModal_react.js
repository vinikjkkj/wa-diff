__d(
  "WAWebScanDbModal.react",
  [
    "fbt",
    "WALogger",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDbUsageApiConst",
    "WAWebDbUsageEstimateIndexeddbUsageJob",
    "WAWebExternalLink.react",
    "WAWebModalManager",
    "WAWebUserPrefsGeneral",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m =
        "https://www.internalfb.com/intern/wiki/WhatsApp/Eng/Client/Web/Product_Infra_Team/DB_Usage_Scan/";
    function p(t) {
      r("vulture")("ooZOgJCUCJWrwZEhGZSZ4f_d6w4=");
      var n = t.isHighQuotaExceeded,
        a = function () {
          o("WAWebModalManager").ModalManager.close();
          var e = o("WAWebUserPrefsGeneral").getStorageDismissState();
          (n
            ? ((e.highQuotaDismissed = !0),
              o("WAWebUserPrefsGeneral").setStorageDismissState(e))
            : ((e.lowQuotaDismissed = !0),
              o("WAWebUserPrefsGeneral").setStorageDismissState(e)),
            o("WAWebUserPrefsGeneral").setStorageAlert(
              o("WAWebDbUsageApiConst").StorageAlertType.NO_ALERT,
            ),
            o("WAWebCmd").Cmd.triggerStorageAlert());
        },
        i = function () {
          (a(),
            r("WAWebDbUsageEstimateIndexeddbUsageJob")
              .getEstimatedIndexedDbUsageJob({ printTables: !0, sampleRate: 1 })
              .then(function (t) {
                o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose(
                        ["IndexedDB estimated snapshot:\n", ""],
                        ["IndexedDB estimated snapshot:\\n", ""],
                      )),
                    t.output,
                  )
                  .tags("idb-storage")
                  .sendLogs("user_idb_storage_exceeded");
              })
              .catch(function () {
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get IndexedDB estimated storage",
                      ])),
                  )
                  .tags("idb-storage")
                  .sendLogs("user_idb_storage_exceeded_scan_failed");
              }));
        },
        l = d.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: m,
          children: s._(/*BTDS*/ "Learn more"),
        });
      return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: "Scan Database Usage",
        onOK: i,
        okText: "OK",
        onCancel: a,
        cancelText: "Cancel",
        children: [
          "[Internal Only] Can we scan your db usage for future optimization?\xA0",
          l,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
