__d(
  "logWAWebBizAdCreationPrefillMediaLost",
  ["FBLogger", "WAWebBizAdLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.entryMode,
        n = e.expectedMediaCount,
        o = e.flowID,
        a = e.pageID;
      (r("FBLogger")("wa_ctwa_web").warn(
        "usePrefillMediaCollection: " +
          t +
          " had media but prefill found none, expected=" +
          String(n),
      ),
        r("WAWebBizAdLogger").logCritical({
          event: "ctwa_web_prefill_media_lost",
          extra: {
            actual_media_count: 0,
            entry_mode: t,
            expected_media_count: n,
          },
          loggerContext: {
            codebase: "whatsapp_smb",
            entryPoint: "whatsapp_smb_web_manage_ads_native",
            flow: "create",
            flowID: o,
            pageID: a,
            platform: "whatsapp_smb_web",
            product: "boosted_message",
          },
        }));
    }
    l.default = e;
  },
  98,
);
